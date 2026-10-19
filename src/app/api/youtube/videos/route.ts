import { NextResponse } from 'next/server';

export const revalidate = 3600;

const API_BASE = 'https://www.googleapis.com/youtube/v3';

type PlaylistItem = {
  contentDetails?: {
    videoId?: string;
    videoPublishedAt?: string;
  };
  snippet?: {
    title?: string;
    description?: string;
    publishedAt?: string;
    thumbnails?: Record<string, { url: string; width?: number; height?: number }>;
  };
};

type VideoDetails = {
  id: string;
  contentDetails?: {
    duration?: string;
  };
  statistics?: {
    viewCount?: string;
  };
};

function formatIsoDuration(iso?: string): string {
  if (!iso) return '';
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return '';
  const hours = match[1] ? parseInt(match[1], 10) : 0;
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const seconds = match[3] ? parseInt(match[3], 10) : 0;
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function determineCategory(
  title: string,
  desc: string
): 'Cybersecurity' | 'IoT & Systems' | 'Software Engineering' | 'Research & Projects' {
  const text = `${title} ${desc}`.toLowerCase();

  if (
    /\b(cyber|cybersecurity|security|threat|vulnerability|penetration|forensic|forensics|malware|biometric|cryptography|tamper)\b/i.test(
      text
    )
  ) {
    return 'Cybersecurity';
  }
  if (
    /\b(iot|esp32|sensor|sensors|mqtt|hardware|embedded|arduino|operating system|wbos|telemetry)\b/i.test(
      text
    )
  ) {
    return 'IoT & Systems';
  }
  if (
    /\b(climate|heatcredit|hackathon|research|resilience|patent|environmental|paper|prototype)\b/i.test(
      text
    )
  ) {
    return 'Research & Projects';
  }
  return 'Software Engineering';
}

async function youtubeGet(resource: string, params: Record<string, string>) {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) {
    throw new Error('YouTube API key is not configured');
  }

  const url = new URL(`${API_BASE}/${resource}`);
  for (const [name, value] of Object.entries(params)) {
    url.searchParams.set(name, value);
  }
  url.searchParams.set('key', key);

  const response = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`YouTube API request failed: ${response.status}`);
  }

  return response.json();
}

export async function GET() {
  try {
    const channelId = process.env.YOUTUBE_CHANNEL_ID;
    if (!channelId) {
      return NextResponse.json(
        { error: 'YouTube channel ID is not configured' },
        { status: 500 }
      );
    }

    // UC... channel IDs map to UU... uploads playlist IDs.
    const uploadsPlaylistId = channelId.replace(/^UC/, 'UU');
    if (uploadsPlaylistId === channelId) {
      return NextResponse.json(
        { error: 'Invalid YouTube channel ID' },
        { status: 500 }
      );
    }

    const playlistItems: PlaylistItem[] = [];
    let pageToken: string | undefined;

    // Follow pagination to retrieve the full available upload history.
    do {
      const params: Record<string, string> = {
        part: 'snippet,contentDetails',
        playlistId: uploadsPlaylistId,
        maxResults: '50',
      };
      if (pageToken) params.pageToken = pageToken;

      const data = await youtubeGet('playlistItems', params);
      playlistItems.push(...(data.items ?? []));
      pageToken = data.nextPageToken;
    } while (pageToken);

// Video IDs to exclude from the public portfolio feed (e.g. old test live streams, unlisted tests)
const DEFAULT_EXCLUDED_IDS = new Set<string>([
  'wtmfUlSyYhY', // "Rishvin Reddy Live Stream"
]);

function isExcludedVideo(id: string): boolean {
  if (DEFAULT_EXCLUDED_IDS.has(id)) return true;
  const envExcluded = process.env.YOUTUBE_EXCLUDED_IDS;
  if (envExcluded) {
    const ids = envExcluded.split(',').map((s) => s.trim());
    if (ids.includes(id)) return true;
  }
  return false;
}

    const uniqueItems = Array.from(
      new Map(
        playlistItems
          .filter((item) => {
            const vid = item.contentDetails?.videoId;
            return vid && !isExcludedVideo(vid);
          })
          .map((item) => [item.contentDetails!.videoId!, item])
      ).values()
    );

    const videos: VideoDetails[] = [];

    // videos.list accepts up to 50 IDs per request.
    for (let i = 0; i < uniqueItems.length; i += 50) {
      const ids = uniqueItems
        .slice(i, i + 50)
        .map((item) => item.contentDetails!.videoId!)
        .join(',');

      const data = await youtubeGet('videos', {
        part: 'contentDetails,statistics',
        id: ids,
      });
      videos.push(...(data.items ?? []));
    }

    const detailsById = new Map(videos.map((video) => [video.id, video]));

    const result = uniqueItems.map((item) => {
      const id = item.contentDetails!.videoId!;
      const snippet = item.snippet;
      const details = detailsById.get(id);
      const title = snippet?.title ?? 'Untitled video';
      const description = snippet?.description ?? '';

      return {
        id,
        youtubeId: id,
        title,
        description,
        publishedAt: item.contentDetails?.videoPublishedAt ?? snippet?.publishedAt ?? '',
        thumbnail:
          snippet?.thumbnails?.maxres?.url ??
          snippet?.thumbnails?.high?.url ??
          snippet?.thumbnails?.medium?.url ??
          snippet?.thumbnails?.default?.url ??
          `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        duration: formatIsoDuration(details?.contentDetails?.duration),
        views: details?.statistics?.viewCount ?? null,
        url: `https://www.youtube.com/watch?v=${id}`,
        category: determineCategory(title, description),
      };
    });

    // Newest uploads first.
    result.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return NextResponse.json(
      { videos: result, total: result.length },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
  } catch (error) {
    console.error('YouTube video library error:', error);
    return NextResponse.json(
      { error: 'Unable to load the YouTube video library' },
      { status: 502 }
    );
  }
}

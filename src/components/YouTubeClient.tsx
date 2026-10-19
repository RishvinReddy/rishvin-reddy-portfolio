'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HandUnderline,
  HandwrittenNote,
  EngineeringDoodle,
} from '@/components/handwritten';

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  category: 'Cybersecurity' | 'IoT & Systems' | 'Software Engineering' | 'Research & Projects';
  duration?: string;
  views?: string | null;
  url: string;
}

const CATEGORIES = [
  'All',
  'Cybersecurity',
  'IoT & Systems',
  'Software Engineering',
  'Research & Projects',
] as const;

type Category = (typeof CATEGORIES)[number];

const CATEGORY_META: Record<string, { color: string; icon: React.ReactNode; desc: string }> = {
  Cybersecurity: {
    color:
      'text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-500/10 border-rose-200/80 dark:border-rose-500/25',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    desc: 'Security research, audits & threat defense',
  },
  'IoT & Systems': {
    color:
      'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200/80 dark:border-emerald-500/25',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    desc: 'Hardware, distributed systems & cloud',
  },
  'Software Engineering': {
    color:
      'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 border-blue-200/80 dark:border-blue-500/25',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    desc: 'Full-stack systems & developer architecture',
  },
  'Research & Projects': {
    color:
      'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-500/10 border-purple-200/80 dark:border-purple-500/25',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    desc: 'Prototypes, hackathons & innovation',
  },
};

const EXCLUDED_VIDEO_IDS = new Set<string>(['wtmfUlSyYhY']);

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function CategoryPill({
  cat,
  active,
  count,
  onClick,
}: {
  cat: string;
  active: boolean;
  count: number;
  onClick: () => void;
}) {
  const meta = CATEGORY_META[cat];
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
        active
          ? 'bg-[#f20d46] border-[#f20d46] text-white shadow-md shadow-[#f20d46]/25 scale-[1.02]'
          : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
      }`}
    >
      {cat !== 'All' && meta && <span>{meta.icon}</span>}
      {cat}
      <span
        className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
          active
            ? 'bg-white/25 text-white'
            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
        }`}
      >
        {count}
      </span>
    </motion.button>
  );
}

function VideoCard({
  video,
  index,
  onPlayInline,
}: {
  video: Video;
  index: number;
  onPlayInline: (v: Video) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const meta = CATEGORY_META[video.category];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col bg-white dark:bg-[#0c121e] border border-slate-200/90 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-black/70 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-1.5"
    >
      {/* ── Thumbnail Container ── */}
      <button
        onClick={() => onPlayInline(video)}
        type="button"
        aria-label={`Play ${video.title} in featured player`}
        className="relative aspect-video w-full overflow-hidden bg-slate-950 block text-left cursor-pointer group/thumb"
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Play Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-14 h-14 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-2xl shadow-red-600/50 scale-95 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Duration Badge */}
        {video.duration && (
          <span className="absolute bottom-2.5 right-2.5 flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-black/85 backdrop-blur-md text-white text-[11px] font-mono font-bold tracking-tight border border-white/15 shadow-sm">
            {video.duration}
          </span>
        )}

        {/* Views Badge */}
        {video.views && (
          <span className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-white/90 text-[11px] font-medium border border-white/10 shadow-sm">
            <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {parseInt(video.views, 10).toLocaleString()}
          </span>
        )}
      </button>

      {/* ── Content Body ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Category & Date Header */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase border ${meta?.color}`}
          >
            {meta?.icon}
            {video.category}
          </span>
          <span className="text-[12px] text-slate-400 dark:text-slate-500 font-medium">
            {video.publishedAt
              ? new Date(video.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                })
              : ''}
          </span>
        </div>

        {/* Title */}
        <button
          onClick={() => onPlayInline(video)}
          className="text-left text-slate-900 dark:text-white font-bold text-[16px] sm:text-[17px] leading-snug line-clamp-2 group-hover:text-[#f20d46] transition-colors duration-200 cursor-pointer"
        >
          {video.title}
        </button>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-[13px] leading-relaxed line-clamp-2 flex-1">
          {video.description || 'Engineering walkthrough & project showcase from Rishvin Reddy.'}
        </p>

        {/* Action Bar */}
        <div className="flex items-center justify-between pt-3.5 mt-auto border-t border-slate-100 dark:border-slate-800/80">
          <button
            onClick={() => onPlayInline(video)}
            className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-[#f20d46] text-xs font-semibold transition-colors cursor-pointer"
          >
            <div className="w-4 h-4 rounded-full bg-red-100 dark:bg-red-950/60 flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-[#FF0000] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span>Play here</span>
          </button>

          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${video.title} on YouTube`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#f20d46] bg-rose-50 dark:bg-rose-500/10 border border-rose-200/80 dark:border-rose-500/20 group-hover:bg-[#f20d46] group-hover:text-white group-hover:border-[#f20d46] transition-all duration-200 shadow-sm"
          >
            <span>YouTube</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function VideoSkeleton() {
  return (
    <div className="flex flex-col bg-white dark:bg-[#0c121e] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm animate-pulse">
      <div className="aspect-video bg-slate-200 dark:bg-slate-800" />
      <div className="p-5 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-24" />
          <div className="h-3 bg-slate-100 dark:bg-slate-850 rounded w-16" />
        </div>
        <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded w-4/5" />
        <div className="h-3.5 bg-slate-100 dark:bg-slate-850 rounded w-full" />
        <div className="h-3.5 bg-slate-100 dark:bg-slate-850 rounded w-2/3" />
        <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-16" />
          <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-full w-20" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function YouTubeClient() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [featuredVideo, setFeaturedVideo] = useState<Video | null>(null);
  const [isPlayingFeatured, setIsPlayingFeatured] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const galleryRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadVideos() {
      try {
        setLoading(true);
        const response = await fetch('/api/youtube/videos');
        if (!response.ok) {
          throw new Error(`YouTube API returned status ${response.status}`);
        }
        const data = await response.json();
        if (!cancelled) {
          if (Array.isArray(data.videos)) {
            const sanitizedVideos = (data.videos as Video[]).filter(
              (v) => !EXCLUDED_VIDEO_IDS.has(v.id) && !EXCLUDED_VIDEO_IDS.has(v.youtubeId)
            );
            setVideos(sanitizedVideos);
            if (sanitizedVideos.length > 0) {
              setFeaturedVideo(sanitizedVideos[0]);
            }
            setError(null);
          } else {
            throw new Error('Invalid format returned from YouTube API');
          }
        }
      } catch (err) {
        console.error('Failed to load videos:', err);
        if (!cancelled) {
          setError('Videos are temporarily unavailable.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadVideos();

    return () => {
      cancelled = true;
    };
  }, []);

  function handlePlayInline(video: Video) {
    setFeaturedVideo(video);
    setIsPlayingFeatured(true);
    playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const filteredVideos = videos.filter((v) => {
    const matchCat = activeCategory === 'All' || v.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  function getCategoryCount(cat: Category) {
    if (cat === 'All') return videos.length;
    return videos.filter((v) => v.category === cat).length;
  }

  const totalViews = videos.reduce(
    (acc, v) => acc + (v.views ? parseInt(v.views, 10) : 0),
    0
  );

  return (
    <div className="min-h-screen bg-slate-50/70 dark:bg-[#070b12] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* ── Ambient Background Glows ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[50%] h-[50%] bg-[#FF0000]/5 dark:bg-[#FF0000]/10 rounded-full filter blur-[140px]" />
        <div className="absolute top-[35%] left-[-10%] w-[45%] h-[45%] bg-blue-500/5 dark:bg-blue-600/10 rounded-full filter blur-[140px]" />
        <div className="absolute bottom-[5%] right-[5%] w-[40%] h-[40%] bg-purple-500/5 dark:bg-purple-600/10 rounded-full filter blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-[110rem] mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-24">
        {/* ══════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════ */}
        <div className="text-center mb-16 max-w-4xl mx-auto relative">
          {/* Engineering Sketch Doodles Watermark */}
          <div className="absolute -top-8 -right-8 opacity-10 dark:opacity-20 pointer-events-none hidden lg:block" aria-hidden="true">
            <EngineeringDoodle type="terminal" className="w-28 h-28 text-rose-500" />
          </div>
          <div className="absolute top-24 -left-12 opacity-10 dark:opacity-20 pointer-events-none hidden lg:block" aria-hidden="true">
            <EngineeringDoodle type="wireless" className="w-24 h-24 text-blue-500" />
          </div>

          {/* Status Eyebrow Badge */}
          <div className="relative inline-block mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold shadow-sm backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF0000]"></span>
              </span>
              <span className="font-bold tracking-wide uppercase text-[11px] text-slate-900 dark:text-white">
                RISHVIN REDDY / ENGINEERING MEDIA
              </span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-500 text-[11px] font-mono">LIVE SYNC</span>
            </motion.div>
            <div className="hidden lg:block absolute -right-48 top-1/2 -translate-y-1/2 pointer-events-none">
              <HandwrittenNote rotation={-3} color="accent" arrowDirection="curved-down-left">
                field notes & live builds
              </HandwrittenNote>
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.08]"
          >
            Engineering{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] via-[#f20d46] to-rose-500 pb-1">
              in Motion.
              <HandUnderline variant="scribble" color="#f20d46" className="-bottom-2" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Building real systems. Exploring emerging technology.{' '}
            <span className="text-slate-900 dark:text-slate-200 font-semibold">
              Live updates directly from the official channel.
            </span>
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm mb-9"
          >
            <div className="flex items-center gap-2">
              <span className="text-slate-900 dark:text-white font-extrabold text-lg">
                {videos.length || '4'}
              </span>
              <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                Uploads
              </span>
            </div>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
            <div className="flex items-center gap-2">
              <span className="text-slate-900 dark:text-white font-extrabold text-lg">
                {totalViews ? totalViews.toLocaleString() : '137+'}
              </span>
              <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                Total Views
              </span>
            </div>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
            <div className="flex items-center gap-2">
              <span className="text-slate-900 dark:text-white font-extrabold text-lg">4</span>
              <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                Core Domains
              </span>
            </div>
          </motion.div>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => {
                galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              id="explore-videos-btn"
              className="flex items-center gap-2 px-7 py-3 text-sm font-bold text-white bg-[#f20d46] rounded-full hover:bg-[#d4063b] transition-all duration-200 shadow-md shadow-[#f20d46]/25 hover:shadow-lg hover:shadow-[#f20d46]/35 hover:scale-[1.02] cursor-pointer"
            >
              Explore workbench
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a
              href="https://youtube.com/@rishvinreddy"
              target="_blank"
              rel="noopener noreferrer"
              id="subscribe-youtube-btn"
              className="flex items-center gap-2 px-7 py-3 text-sm font-bold text-slate-700 dark:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full hover:border-[#FF0000]/50 hover:text-[#FF0000] dark:hover:border-[#FF0000]/50 dark:hover:text-[#FF0000] shadow-sm transition-all duration-200 hover:scale-[1.02]"
            >
              <svg className="w-4 h-4 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe on YouTube ↗
            </a>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════
            FEATURED VIDEO THEATRICAL PLAYER
        ══════════════════════════════════════════ */}
        <div ref={playerRef} className="scroll-mt-32">
          {loading ? (
            <div className="mb-20 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl animate-pulse">
              <div className="w-full aspect-video bg-slate-800/60 flex items-center justify-center">
                <span className="text-slate-500 text-sm font-semibold">Connecting to YouTube channel…</span>
              </div>
            </div>
          ) : featuredVideo ? (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-20"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF0000]/10 border border-[#FF0000]/25 text-[#FF0000] text-[11px] font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] animate-pulse" />
                    Cinema Player
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    {isPlayingFeatured ? 'Now Playing' : 'Featured Engineering Walkthrough'}
                  </span>
                  <div className="hidden md:inline-block">
                    <HandwrittenNote rotation={1} color="blue" arrowDirection="straight">
                      spotlight lab walkthrough
                    </HandwrittenNote>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                      CATEGORY_META[featuredVideo.category]?.color
                    }`}
                  >
                    {featuredVideo.category}
                  </span>
                  <a
                    href={featuredVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-500 hover:text-[#f20d46] transition-colors"
                  >
                    Open on YouTube ↗
                  </a>
                </div>
              </div>

              {/* Theater Shell */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800/90 shadow-2xl shadow-black/40 group">
                {/* 16:9 player container */}
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  {!isPlayingFeatured && (
                    <button
                      onClick={() => setIsPlayingFeatured(true)}
                      id="featured-video-play"
                      aria-label={`Play: ${featuredVideo.title}`}
                      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-6 bg-slate-950 cursor-pointer group/play"
                      style={{
                        backgroundImage: `url(${featuredVideo.thumbnail})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="absolute inset-0 bg-black/60 group-hover/play:bg-black/50 transition-colors duration-300" />
                      <div className="relative flex flex-col items-center gap-5 px-6 max-w-3xl text-center">
                        <div className="w-20 h-20 rounded-full bg-[#FF0000] flex items-center justify-center shadow-2xl shadow-[#FF0000]/50 group-hover/play:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-bold text-xl sm:text-3xl drop-shadow-lg line-clamp-2 leading-tight">
                            {featuredVideo.title}
                          </p>
                          <p className="text-white/80 text-sm sm:text-base mt-2 font-medium">
                            Click to play demo · {featuredVideo.duration || 'Full length'}
                          </p>
                        </div>
                      </div>
                    </button>
                  )}
                  {isPlayingFeatured && (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      title={`${featuredVideo.title} — Rishvin Reddy`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              </div>
            </motion.section>
          ) : null}
        </div>

        {/* ══════════════════════════════════════════
            CATEGORY STATS ROW
        ══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
        >
          {Object.entries(CATEGORY_META).map(([cat, meta]) => {
            const count = getCategoryCount(cat as Category);
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat as Category);
                  galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`flex flex-col gap-2 p-5 rounded-2xl border cursor-pointer text-left transition-all duration-200 hover:-translate-y-1 ${
                  activeCategory === cat
                    ? 'border-[#f20d46] bg-rose-50/60 dark:bg-rose-500/10 shadow-md shadow-[#f20d46]/10'
                    : 'bg-white dark:bg-[#0c121e] border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md'
                }`}
              >
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${
                    meta.color.split(' ')[0]
                  }`}
                >
                  {meta.icon}
                  {cat}
                </span>
                <span className="text-slate-900 dark:text-white font-extrabold text-3xl tracking-tight">
                  {loading ? '…' : count}
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-[12px] leading-tight">
                  {meta.desc}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ══════════════════════════════════════════
            FROM THE WORKBENCH — VIDEO GALLERY
        ══════════════════════════════════════════ */}
        <section ref={galleryRef} className="scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  From the workbench
                </h2>
                <div className="hidden sm:inline-block">
                  <HandwrittenNote rotation={-2} color="emerald">
                    live channel sync
                  </HandwrittenNote>
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                {loading
                  ? 'Connecting to YouTube feed…'
                  : `Showing ${filteredVideos.length} of ${videos.length} public engineering videos from @rishvinreddy`}
              </p>
            </div>

            {/* Search Input with Clear Button */}
            <div className="relative shrink-0 w-full sm:w-80">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search videos & topics…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-full py-2.5 pl-10 pr-10 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f20d46]/40 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {CATEGORIES.map((cat) => (
              <CategoryPill
                key={cat}
                cat={cat}
                active={activeCategory === cat}
                count={getCategoryCount(cat)}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>

          {/* Error Banner */}
          {error && !loading && (
            <div className="mb-8 p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-center">
              <p className="text-red-500 font-semibold mb-2">{error}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                You can still explore all public uploads directly on YouTube.
              </p>
              <a
                href="https://youtube.com/@rishvinreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FF0000] text-white text-sm font-bold rounded-full hover:bg-red-600 transition-colors shadow-md"
              >
                Open @rishvinreddy on YouTube ↗
              </a>
            </div>
          )}

          {/* Video Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <VideoSkeleton key={i} />
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {filteredVideos.length > 0 ? (
                <motion.div
                  key={activeCategory + searchQuery}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
                >
                  {filteredVideos.map((video, i) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      index={i}
                      onPlayInline={handlePlayInline}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-24 text-slate-400 bg-white dark:bg-slate-900/40 rounded-2xl border border-slate-200 dark:border-slate-800"
                >
                  <svg
                    className="w-12 h-12 mx-auto mb-4 opacity-30 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="font-semibold text-lg text-slate-800 dark:text-white">
                    No videos found
                  </p>
                  <p className="text-sm mt-1 mb-5">
                    No videos match your active filter or search term.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory('All');
                      setSearchQuery('');
                    }}
                    className="px-5 py-2 text-xs font-bold text-white bg-[#f20d46] rounded-full hover:bg-[#d4063b] transition-colors"
                  >
                    Reset filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </section>

        {/* ══════════════════════════════════════════
            CHANNEL CTA BANNER
        ══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative rounded-3xl overflow-hidden border border-[#FF0000]/25 bg-gradient-to-br from-slate-950 via-[#180407] to-slate-950 p-10 sm:p-14 text-center text-white shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#FF000020_0%,_transparent_70%)] pointer-events-none" />
          <div className="relative">
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-2xl bg-[#FF0000] flex items-center justify-center shadow-2xl shadow-[#FF0000]/40">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Subscribe to @rishvinreddy
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Engineering walkthroughs · Cybersecurity research · Hardware prototypes · AI
              pipelines. New projects published regularly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://youtube.com/@rishvinreddy"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-subscribe-btn"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#FF0000] text-white font-bold text-base rounded-full hover:bg-red-600 transition-all duration-200 shadow-xl shadow-[#FF0000]/30 hover:shadow-2xl hover:shadow-[#FF0000]/40 hover:scale-[1.03]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Subscribe on YouTube
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://github.com/RishvinReddy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white font-bold text-base rounded-full border border-white/20 transition-all duration-200"
              >
                <span>GitHub Repositories ↗</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

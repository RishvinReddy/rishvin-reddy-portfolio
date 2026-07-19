import { NextResponse } from 'next/server';

export async function GET() {
  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Rishvin Reddy | Software Engineering &amp; Cybersecurity</title>
    <link>https://rishvinreddy.github.io</link>
    <description>Engineering portfolio, blog, and projects by Erolla Rishvin Reddy (IoT, Blockchain, Cybersecurity).</description>
    <language>en-us</language>
    <managingEditor>rishvinreddy@gmail.com (Erolla Rishvin Reddy)</managingEditor>
    <webMaster>rishvinreddy@gmail.com (Erolla Rishvin Reddy)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()}, Erolla Rishvin Reddy</copyright>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <category>Technology</category>
    <generator>Next.js RSS Feed Generator</generator>
    <atom:link href="https://rishvinreddy.github.io/feed.xml" rel="self" type="application/rss+xml" />
    
    <item>
      <title>Welcome to the New Portfolio</title>
      <link>https://rishvinreddy.github.io/portfolio</link>
      <description>Explore my latest work in IoT, full-stack systems, and cybersecurity.</description>
      <author>rishvinreddy@gmail.com (Erolla Rishvin Reddy)</author>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid isPermaLink="true">https://rishvinreddy.github.io/portfolio</guid>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}

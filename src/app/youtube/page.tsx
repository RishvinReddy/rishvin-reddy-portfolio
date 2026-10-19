import React from 'react';
import { Metadata, Viewport } from 'next';
import YouTubeClient from '@/components/YouTubeClient';

export const metadata: Metadata = {
  title: 'Engineering in Motion | Rishvin Reddy — YouTube',
  description:
    "Building real systems. Exploring emerging technology. Sharing the engineering behind the work. Watch Rishvin Reddy's engineering experiments, project walkthroughs, cybersecurity insights, and technology explorations.",
  applicationName: 'Rishvin Reddy Portfolio',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Rishvin Reddy YouTube',
    'Engineering in Motion',
    'Rishvin Reddy videos',
    'Rishvin Reddy channel',
    'cybersecurity videos',
    'IoT engineering videos',
    'software engineering walkthroughs',
    'Rishvin Labs YouTube',
    'engineering experiments',
    'technology exploration',
    'Woxsen University engineering',
  ],
  authors: [{ name: 'Erolla Rishvin Reddy', url: 'https://rishvinreddy.vercel.app' }],
  creator: 'Erolla Rishvin Reddy',
  publisher: 'Rishvin Labs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://rishvinreddy.vercel.app/youtube',
    languages: {
      'en-US': 'https://rishvinreddy.vercel.app/youtube',
      'en-IN': 'https://rishvinreddy.vercel.app/youtube',
    },
  },
  openGraph: {
    title: 'Engineering in Motion | Rishvin Reddy — YouTube',
    description:
      'Building real systems. Exploring emerging technology. Sharing the engineering behind the work.',
    url: 'https://rishvinreddy.vercel.app/youtube',
    siteName: 'Rishvin Reddy Engineering Portfolio',
    images: [
      {
        url: 'https://rishvinreddy.vercel.app/icon.png',
        width: 1200,
        height: 630,
        alt: 'Engineering in Motion — Rishvin Reddy YouTube',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering in Motion | Rishvin Reddy — YouTube',
    description:
      'Building real systems. Exploring emerging technology. Sharing the engineering behind the work.',
    creator: '@RishvinReddy',
    images: ['https://rishvinreddy.vercel.app/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  manifest: '/manifest.json',
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light dark',
};

export default function YouTubePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                '@id': 'https://rishvinreddy.vercel.app/#person',
                name: 'Erolla Rishvin Reddy',
                url: 'https://rishvinreddy.vercel.app/',
                image: 'https://rishvinreddy.vercel.app/icon.png',
                sameAs: [
                  'https://github.com/RishvinReddy',
                  'https://www.linkedin.com/in/rishvinreddy',
                  'https://youtube.com/@rishvinreddy',
                ],
                jobTitle: 'Software Engineer & Security Researcher',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Rishvin Labs',
                },
              },
              {
                '@type': 'WebPage',
                '@id': 'https://rishvinreddy.vercel.app/youtube/#webpage',
                url: 'https://rishvinreddy.vercel.app/youtube',
                name: 'Engineering in Motion | Rishvin Reddy',
                isPartOf: {
                  '@id': 'https://rishvinreddy.vercel.app/#website',
                },
                about: {
                  '@id': 'https://rishvinreddy.vercel.app/#person',
                },
              },
              {
                '@type': 'ItemList',
                name: 'Rishvin Reddy Engineering Videos',
                description:
                  'A curated collection of engineering experiments, cybersecurity research, IoT builds, and software walkthroughs.',
                url: 'https://rishvinreddy.vercel.app/youtube',
              },
            ],
          }),
        }}
      />
      <YouTubeClient />
    </>
  );
}

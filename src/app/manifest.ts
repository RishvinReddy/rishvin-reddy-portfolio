import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rishvin Reddy Portfolio',
    short_name: 'RishvinLabs',
    description: 'Software Engineering, Cybersecurity, IoT & Blockchain Portfolio by Erolla Rishvin Reddy',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['technology', 'engineering', 'portfolio'],
    lang: 'en-US',
    dir: 'ltr',
    orientation: 'portrait',
    prefer_related_applications: false,
  };
}

import React from 'react';
import { Metadata, Viewport } from 'next';
import LinkedInClient from '@/components/LinkedInClient';

export const metadata: Metadata = {
  title: 'LinkedIn | Rishvin Reddy — Professional Profile',
  description:
    "Explore Rishvin Reddy's professional highlights, engineering projects, internships, research, and curated LinkedIn updates. B.Tech CSE student at Woxsen University — Cybersecurity, IoT, Blockchain, and Software Engineering.",
  applicationName: 'Rishvin Reddy Portfolio',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Rishvin Reddy LinkedIn',
    'Rishvin Reddy professional profile',
    'Erolla Rishvin Reddy LinkedIn',
    'Rishvin Reddy cybersecurity engineer',
    'Rishvin Reddy IoT engineer',
    'Rishvin Reddy blockchain developer',
    'Woxsen University CSE student',
    'Rishvin Labs founder',
    'engineering internships India',
    'cybersecurity student India',
    'software engineering portfolio LinkedIn',
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
    canonical: 'https://rishvinreddy.vercel.app/linkedin',
    languages: {
      'en-US': 'https://rishvinreddy.vercel.app/linkedin',
      'en-IN': 'https://rishvinreddy.vercel.app/linkedin',
    },
  },
  openGraph: {
    title: 'LinkedIn | Rishvin Reddy — Professional Profile',
    description:
      "Professional highlights, engineering projects, internships, and curated updates from Rishvin Reddy's LinkedIn.",
    url: 'https://rishvinreddy.vercel.app/linkedin',
    siteName: 'Rishvin Reddy Engineering Portfolio',
    images: [
      {
        url: 'https://rishvinreddy.vercel.app/icon.png',
        width: 1200,
        height: 630,
        alt: 'Rishvin Reddy — LinkedIn Professional Profile',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkedIn | Rishvin Reddy — Professional Profile',
    description:
      'Professional highlights, engineering projects, internships, and curated updates.',
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

export default function LinkedInPage() {
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
                alternateName: ['Rishvin Reddy'],
                url: 'https://rishvinreddy.vercel.app/',
                image: 'https://rishvinreddy.vercel.app/icon.png',
                sameAs: [
                  'https://github.com/RishvinReddy',
                  'https://www.linkedin.com/in/rishvinreddy',
                  'https://youtube.com/@rishvinreddy',
                ],
                jobTitle: [
                  'Software Engineer',
                  'Cybersecurity Researcher',
                  'IoT Systems Developer',
                  'Founder @ Rishvin Labs',
                ],
                worksFor: [
                  {
                    '@type': 'Organization',
                    name: 'Data Lake Solutions',
                    description: 'Technology Intern — Cyber Security',
                  },
                  {
                    '@type': 'Organization',
                    name: 'Rishvin Labs',
                    description: 'Founder & Software Engineer',
                  },
                  {
                    '@type': 'Organization',
                    name: 'Pegasystems',
                    description: 'Pega Platform Intern (National Internship Program 2026)',
                  },
                  {
                    '@type': 'Organization',
                    name: 'Fiverr',
                    description: 'Freelance Full-Stack Developer',
                  },
                ],
                alumniOf: {
                  '@type': 'CollegeOrUniversity',
                  name: 'Woxsen University',
                  department: 'School of Technology — Computer Science & Engineering',
                },
                hasCredential: [
                  {
                    '@type': 'EducationalOccupationalCredential',
                    credentialCategory: 'Patent',
                    name: 'IoT Connectivity Device (Government of India Registered Design Patent)',
                    identifier: 'Design No. 470097-001',
                    recognizedBy: {
                      '@type': 'GovernmentOrganization',
                      name: 'Patent Office, Government of India',
                    },
                  },
                  {
                    '@type': 'EducationalOccupationalCredential',
                    credentialCategory: 'Certification',
                    name: 'Pegasystems National Internship Program 2026',
                    identifier: 'PEGA-SW-NIP-2026-586',
                    recognizedBy: {
                      '@type': 'Organization',
                      name: 'Pegasystems × SmartBridge',
                    },
                  },
                ],
                knowsAbout: [
                  'Cybersecurity',
                  'Digital Forensics',
                  'Internet of Things (IoT)',
                  'Blockchain',
                  'Hyperledger Fabric',
                  'Pega Platform',
                  'React',
                  'Next.js',
                  'TypeScript',
                  'Python',
                  'Scapy',
                  'Hardware Design',
                ],
              },
              {
                '@type': 'WebPage',
                '@id': 'https://rishvinreddy.vercel.app/linkedin/#webpage',
                url: 'https://rishvinreddy.vercel.app/linkedin',
                name: 'LinkedIn | Rishvin Reddy — Professional Profile',
                isPartOf: {
                  '@id': 'https://rishvinreddy.vercel.app/#website',
                },
                about: {
                  '@id': 'https://rishvinreddy.vercel.app/#person',
                },
                description:
                  "Verified professional highlights, engineering work history, education, skills, certifications, and public updates from Rishvin Reddy.",
              },
              {
                '@type': 'ProfilePage',
                url: 'https://rishvinreddy.vercel.app/linkedin',
                mainEntity: {
                  '@id': 'https://rishvinreddy.vercel.app/#person',
                },
              },
            ],
          }),
        }}
      />
      <LinkedInClient />
    </>
  );
}

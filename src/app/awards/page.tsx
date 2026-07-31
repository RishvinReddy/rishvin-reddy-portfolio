import React from 'react';
import { Metadata, Viewport } from "next";
import AwardsClient from "@/components/AwardsClient";

export const metadata: Metadata = {
  title: "Awards | Rishvin Labs",
  description: "Awards, hackathon wins, and recognitions earned by Rishvin Reddy in software engineering and technology.",
  applicationName: "Rishvin Reddy Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "awards page", "Rishvin Reddy awards", "Erolla Rishvin Reddy awards", 
    "Software Engineer awards", "Cybersecurity awards", "IoT awards", "Blockchain awards",
    "Woxsen University", "Rishvin Labs", "Tech Portfolio", "Engineering"
  ],
  authors: [{ name: "Erolla Rishvin Reddy", url: "https://rishvinreddy.vercel.app" }],
  creator: "Erolla Rishvin Reddy",
  publisher: "Rishvin Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://rishvinreddy.vercel.app/awards",
    languages: {
      "en-US": "https://rishvinreddy.vercel.app/awards",
      "en-IN": "https://rishvinreddy.vercel.app/awards",
    },
  },
  openGraph: {
    title: "Awards | Rishvin Labs",
    description: "Awards, hackathon wins, and recognitions earned by Rishvin Reddy in software engineering and technology.",
    url: "https://rishvinreddy.vercel.app/awards",
    siteName: "Rishvin Reddy Engineering Portfolio",
    images: [
      {
        url: "https://rishvinreddy.vercel.app/icon.png",
        width: 1200,
        height: 630,
        alt: "Awards | Rishvin Labs - Rishvin Reddy",
      },
      {
        url: "https://rishvinreddy.vercel.app/icon.png",
        width: 800,
        height: 600,
        alt: "Awards | Rishvin Labs Alternate - Rishvin Reddy",
      }
    ],
    locale: "en_IN",
    type: "website",
    emails: ["rishvinreddy@gmail.com"],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awards | Rishvin Labs",
    description: "Awards, hackathon wins, and recognitions earned by Rishvin Reddy in software engineering and technology.",
    siteId: "1467726470533754880",
    creator: "@RishvinReddy",
    creatorId: "1467726470533754880",
    images: ["https://rishvinreddy.vercel.app/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/icon.png",
    },
  },
  manifest: "/manifest.json",
  category: "technology",
  archives: ["https://rishvinreddy.vercel.app/archives"],
  assets: ["https://rishvinreddy.vercel.app/assets"],
  bookmarks: ["https://rishvinreddy.vercel.app/bookmarks"],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
};

export default function Awards() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://rishvinreddy.vercel.app/#person",
              "name": "Erolla Rishvin Reddy",
              "url": "https://rishvinreddy.vercel.app/",
              "image": "https://rishvinreddy.vercel.app/icon.png",
              "sameAs": [
                "https://github.com/RishvinReddy",
                "https://www.linkedin.com/in/rishvin-reddy/"
              ],
              "jobTitle": "Software Engineer & Security Researcher",
              "worksFor": {
                "@type": "Organization",
                "name": "Rishvin Labs"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Woxsen University"
              }
            },
            {
              "@type": "WebSite",
              "@id": "https://rishvinreddy.vercel.app/#website",
              "url": "https://rishvinreddy.vercel.app/",
              "name": "Rishvin Reddy Portfolio",
              "description": "Software Engineering, Cybersecurity, IoT & Blockchain Portfolio",
              "publisher": {
                "@id": "https://rishvinreddy.vercel.app/#person"
              },
              "inLanguage": "en-US"
            },
            {
              "@type": "WebPage",
              "@id": "https://rishvinreddy.vercel.app/awards/#webpage",
              "url": "https://rishvinreddy.vercel.app/awards",
              "name": "Awards | Rishvin Labs",
              "isPartOf": {
                "@id": "https://rishvinreddy.vercel.app/#website"
              },
              "about": {
                "@id": "https://rishvinreddy.vercel.app/#person"
              }
            }
          ]
        }
) }}
      />
      <AwardsClient />
    </>
  );
}

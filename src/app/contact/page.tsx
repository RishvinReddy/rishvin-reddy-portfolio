import React from 'react';
import { Metadata, Viewport } from "next";
import ContactFormClient from '@/components/ContactFormClient';

export const metadata: Metadata = {
  title: "Contact | Rishvin",
  description: "Get in touch with Rishvin Reddy for software engineering roles, collaborations, or technical projects.",
  applicationName: "Rishvin Reddy Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "contact page", "Rishvin Reddy contact", "Erolla Rishvin Reddy contact", 
    "Software Engineer contact", "Cybersecurity contact", "IoT contact", "Blockchain contact",
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
    canonical: "https://rishvinreddy.vercel.app/contact",
    languages: {
      "en-US": "https://rishvinreddy.vercel.app/contact",
      "en-IN": "https://rishvinreddy.vercel.app/contact",
    },
  },
  openGraph: {
    title: "Contact | Rishvin",
    description: "Get in touch with Rishvin Reddy for software engineering roles, collaborations, or technical projects.",
    url: "https://rishvinreddy.vercel.app/contact",
    siteName: "Rishvin Reddy Engineering Portfolio",
    images: [
      {
        url: "https://rishvinreddy.vercel.app/icon.png",
        width: 1200,
        height: 630,
        alt: "Contact | Rishvin - Rishvin Reddy",
      },
      {
        url: "https://rishvinreddy.vercel.app/icon.png",
        width: 800,
        height: 600,
        alt: "Contact | Rishvin Alternate - Rishvin Reddy",
      }
    ],
    locale: "en_IN",
    type: "website",
    emails: ["rishvinreddy@gmail.com"],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Rishvin",
    description: "Get in touch with Rishvin Reddy for software engineering roles, collaborations, or technical projects.",
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


export default function Contact() {
  return (
    <main className="flex-grow pt-20 bg-gradient-to-b from-slate-50 to-white min-h-screen relative overflow-hidden">
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
              "@id": "https://rishvinreddy.vercel.app/contact/#webpage",
              "url": "https://rishvinreddy.vercel.app/contact",
              "name": "Contact | Rishvin Labs",
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
      <ContactFormClient />

    </main>
  );
}

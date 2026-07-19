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
  authors: [{ name: "Erolla Rishvin Reddy", url: "https://rishvinreddy.github.io" }],
  creator: "Erolla Rishvin Reddy",
  publisher: "Rishvin Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://rishvinreddy.github.io/contact",
    languages: {
      "en-US": "https://rishvinreddy.github.io/contact",
      "en-IN": "https://rishvinreddy.github.io/contact",
    },
  },
  openGraph: {
    title: "Contact | Rishvin",
    description: "Get in touch with Rishvin Reddy for software engineering roles, collaborations, or technical projects.",
    url: "https://rishvinreddy.github.io/contact",
    siteName: "Rishvin Reddy Engineering Portfolio",
    images: [
      {
        url: "https://rishvinreddy.github.io/icon.png",
        width: 1200,
        height: 630,
        alt: "Contact | Rishvin - Rishvin Reddy",
      },
      {
        url: "https://rishvinreddy.github.io/icon.png",
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
    images: ["https://rishvinreddy.github.io/icon.png"],
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
  archives: ["https://rishvinreddy.github.io/archives"],
  assets: ["https://rishvinreddy.github.io/assets"],
  bookmarks: ["https://rishvinreddy.github.io/bookmarks"],
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
              "@id": "https://rishvinreddy.github.io/#person",
              "name": "Erolla Rishvin Reddy",
              "url": "https://rishvinreddy.github.io/",
              "image": "https://rishvinreddy.github.io/icon.png",
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
              "@id": "https://rishvinreddy.github.io/#website",
              "url": "https://rishvinreddy.github.io/",
              "name": "Rishvin Reddy Portfolio",
              "description": "Software Engineering, Cybersecurity, IoT & Blockchain Portfolio",
              "publisher": {
                "@id": "https://rishvinreddy.github.io/#person"
              },
              "inLanguage": "en-US"
            },
            {
              "@type": "WebPage",
              "@id": "https://rishvinreddy.github.io/contact/#webpage",
              "url": "https://rishvinreddy.github.io/contact",
              "name": "Contact | Rishvin Labs",
              "isPartOf": {
                "@id": "https://rishvinreddy.github.io/#website"
              },
              "about": {
                "@id": "https://rishvinreddy.github.io/#person"
              }
            }
          ]
        }
        ) }}
      />
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply opacity-70"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] mix-blend-multiply opacity-50"></div>
      </div>

      <div className="h-12 shrink-0"></div>

      <ContactFormClient />

    </main>
  );
}

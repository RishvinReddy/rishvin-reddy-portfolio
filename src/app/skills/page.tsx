import React from 'react';
import { Metadata, Viewport } from "next";
import SkillsClient from "@/components/SkillsClient";

export const metadata: Metadata = {
  title: "Skills & Tech Stack | Erolla Rishvin Reddy | Rishvin Labs",
  description: "Explore the comprehensive technical skills of Erolla Rishvin Reddy. Expert in IoT, Cybersecurity, Full-Stack Web Development, and Blockchain. Proficient in Next.js, Node.js, Python, Arduino, ESP32, and Solidity.",
  applicationName: "Rishvin Reddy Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "skills page", "Rishvin Reddy skills", "Erolla Rishvin Reddy skills", 
    "Software Engineer skills", "Cybersecurity skills", "IoT skills", "Blockchain skills",
    "Woxsen University", "Rishvin Labs", "Tech Portfolio", "Engineering",
    "Founder Rishvin Labs Skills", "Pegasystems Intern Skills", "Pega Platform",
    "IoT Connectivity Device Patent", "Government of India Design Patent",
    "Freelance Full-Stack Developer", "Fiverr Developer",
    "React.js", "Next.js", "Node.js", "TypeScript", "JavaScript", "Python",
    "Embedded C", "C++", "Arduino", "ESP32", "ESP8266", "MQTT", "Node-RED",
    "Cybersecurity Tools", "Vulnerability Assessment", "Penetration Testing", "Security Automation",
    "MongoDB", "SQL", "Database Design", "Web3 Developer", "Solidity", "Smart Contracts",
    "Docker", "Linux CLI", "AWS", "BPM", "Workflow Automation", "Low-Code Development",
    "Data Structures and Algorithms", "DSA", "Algorithm Design", "Software Architecture"
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
    canonical: "https://rishvinreddy.vercel.app/skills",
    languages: {
      "en-US": "https://rishvinreddy.vercel.app/skills",
      "en-IN": "https://rishvinreddy.vercel.app/skills",
    },
  },
  openGraph: {
    title: "Skills & Tech Stack | Erolla Rishvin Reddy | Rishvin Labs",
    description: "Explore the comprehensive technical skills of Erolla Rishvin Reddy. Expert in IoT, Cybersecurity, Full-Stack Web Development, and Blockchain.",
    url: "https://rishvinreddy.vercel.app/skills",
    siteName: "Rishvin Reddy Engineering Portfolio",
    images: [
      {
        url: "https://rishvinreddy.vercel.app/icon.png",
        width: 1200,
        height: 630,
        alt: "Skills | Rishvin Labs - Rishvin Reddy",
      },
      {
        url: "https://rishvinreddy.vercel.app/icon.png",
        width: 800,
        height: 600,
        alt: "Skills | Rishvin Labs Alternate - Rishvin Reddy",
      }
    ],
    locale: "en_IN",
    type: "website",
    emails: ["rishvinreddy@gmail.com"],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills & Tech Stack | Erolla Rishvin Reddy",
    description: "Explore the comprehensive technical skills of Erolla Rishvin Reddy. Expert in IoT, Cybersecurity, Full-Stack Web Development, and Blockchain.",
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

export default function Skills() {
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
              "jobTitle": "Software Engineer, Cybersecurity Analyst, IoT Developer",
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Rishvin Labs",
                  "description": "Founder & Software Engineer"
                },
                {
                  "@type": "Organization",
                  "name": "Pegasystems",
                  "description": "Pega Platform Intern"
                },
                {
                  "@type": "Organization",
                  "name": "Fiverr",
                  "description": "Freelance Full-Stack Developer"
                }
              ],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Woxsen University",
                "department": "Computer Science and Engineering"
              },
              "knowsAbout": [
                "Cybersecurity", "Internet of Things (IoT)", "Blockchain", "Full-Stack Development",
                "React.js", "Node.js", "Python", "Embedded C", "Solidity", "MongoDB", "Express.js",
                "Pega Platform", "BPM", "Workflow Automation", "Low-Code Development"
              ]
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
              "@type": "CollectionPage",
              "@id": "https://rishvinreddy.vercel.app/skills/#webpage",
              "url": "https://rishvinreddy.vercel.app/skills",
              "name": "Skills & Tech Stack | Erolla Rishvin Reddy",
              "isPartOf": {
                "@id": "https://rishvinreddy.vercel.app/#website"
              },
              "about": {
                "@id": "https://rishvinreddy.vercel.app/#person"
              },
              "description": "Comprehensive list of technical skills and tools mastered by Erolla Rishvin Reddy across Software Engineering, IoT, Cybersecurity, and Blockchain."
            }
          ]
        }
) }}
      />
      <SkillsClient />
    </>
  );
}

import React from 'react';
import { Metadata, Viewport } from "next";
import SkillsClient from "@/components/SkillsClient";
import certificationsData from "../../../public/data/certifications.json";

export const metadata: Metadata = {
  title: "Skills & Tech Stack | Erolla Rishvin Reddy | Rishvin Labs",
  description: "Explore the comprehensive technical skills of Erolla Rishvin Reddy. Expert in IoT, Cybersecurity, Full-Stack Web Development, and Blockchain. Proficient in Next.js, Node.js, Python, Arduino, ESP32, and Solidity.",
  applicationName: "Rishvin Reddy Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Rishvin Reddy skills", "tech stack", "software engineering skills", "Erolla Rishvin Reddy certifications",
    "cybersecurity certificates", "IoT hardware", "blockchain smart contracts", "full-stack development portfolio",
    "Pegasystems internship", "Pega CSA", "React developer Hyderabad", "Next.js expert", "TypeScript",
    "Python scripting", "Embedded Systems", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
    "Tailwind CSS", "Solidity Developer", "Web3 engineer", "Framer Motion animations", "Vercel deployments",
    "CISCO Cyber Threat Management", "Palo Alto Networks Cybersecurity", "Fortinet NSE", "AWS Cloud Practitioner",
    "AWS Skill Builder", "Serverless Development AWS", "AWS IoT Devices at Scale", "Amazon Security Lake",
    "DevOps Automation", "GitHub CI/CD", "Nvidia Jetson Nano", "ESP32", "Raspberry Pi", "Arduino",
    "Vulnerability Assessment", "Penetration Testing", "Security Operations", "Network Security",
    "Blockchain fundamentals", "Ethereum smart contracts", "Decentralized Applications (dApps)",
    "Student Developer India", "Woxsen University CSE", "Rishvin Labs tools", "TechSphere achievement",
    "CISCO Cyber Threat Management Certified",
    "CISCO Network Defense Certified",
    "CISCO Endpoint Security Certified",
    "Palo Alto Networks Cybersecurity Foundation",
    "Fortinet NSE 1 Information Security",
    "Fortinet NSE 2 Network Security",
    "IBM Cybersecurity Roles and Processes",
    "ISC2 Certified in Cybersecurity Candidate",
    "AWS Certified Cloud Practitioner",
    "AWS Skill Builder Certifications",
    "Amazon Security Lake Implementation",
    "AWS IoT Devices at Scale",
    "Serverless Architecture AWS",
    "DevOps Automation AWS GitHub",
    "Pegasystems Pega Platform Training",
    "Pega CSA Certification Path",
    "Frontend Development Masterclass",
    "React JS Masterclass Certification",
    "Node JS Backend Certification",
    "Solidity Smart Contract Certification",
    "IoT Embedded Systems Certificate",
    "Python for Data Science Certificate",
    "TechSphere Achievement Award",
    "Information Security Fundamentals",
    "Cloud Security Principles",
    "Network Protocol Security",
    "Cryptography Basics",
    "Web Application Security Testing",
    "Agile Development Methodology",
    "Git GitHub Version Control",
    "Docker Containerization Skills",
    "Linux System Administration",
    "Bash Scripting Automation",
    "C++ Object Oriented Programming",
    "Java Enterprise Application Skills",
    "RESTful API Design",
    "GraphQL API Development",
    "UI UX Design Figma Skills",
    "Framer Motion Animation Skills",
    "Vercel Deployment Next.js",
    "Firebase Backend as a Service",
    "Supabase PostgreSQL Skills"
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
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://rishvinreddy.vercel.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Skills & Certifications",
                  "item": "https://rishvinreddy.vercel.app/skills"
                }
              ]
            },
            {
              "@type": "ItemList",
              "name": "Certifications of Erolla Rishvin Reddy",
              "itemListElement": certificationsData.map((cert, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Certificate",
                  "name": cert.title,
                  "description": cert.seo.description,
                  "keywords": cert.seo.keywords.join(", "),
                  "recognizedBy": {
                    "@type": "Organization",
                    "name": cert.issuer
                  },
                  "teaches": cert.tags.map(tag => ({
                    "@type": "DefinedTerm",
                    "name": tag
                  })),
                  "image": cert.image.startsWith('http') ? cert.image : `https://rishvinreddy.vercel.app/${cert.image}`,
                  "url": cert.pdf.startsWith('http') ? cert.pdf : `https://rishvinreddy.vercel.app/${cert.pdf}`
                }
              }))
            }
          ]
        }
) }}
      />
      <SkillsClient />
    </>
  );
}

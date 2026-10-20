import React from "react";
import { Metadata, Viewport } from "next";
import HackathonsClient from "@/components/HackathonsClient";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  title: "Hackathons & Rapid Prototyping Archive | Erolla Rishvin Reddy | Founder, Rishvin Labs",
  description:
    "Explore the competitive engineering hackathon archive of Erolla Rishvin Reddy. Featuring real-world cloud architectures, AWS SAM serverless pipelines, dynamic programming budget optimizers, event-driven commerce backends, and verifiable open source challenge submissions.",
  applicationName: "Rishvin Reddy Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "technology",
  keywords: [
    // Original keywords preserved
    "Hackathons",
    "Rapid Prototyping",
    "AWS SAM",
    "Environmental Hacks 2026",
    "HeatCredit",
    "WBOS",
    "WhatsApp Business Operating System",
    "First Commit Hackathon",
    "WeMakeDevs",
    "Bharat Builds Tour",
    "Serverless Architecture",
    "DynamoDB Single Table",
    "Erolla Rishvin Reddy Hackathons",
    "Rishvin Labs",
    "Full-Stack Engineering",
    "Cybersecurity Challenges",
    "ChainForensics",
    "Hyperledger Fabric",
    "VoteSafe",
    // Expanded engineering & competition keywords
    "AWS Serverless Hackathon",
    "Amazon EventBridge Architecture",
    "Amazon DynamoDB Composite Keys",
    "Amazon Cognito MFA",
    "AWS Lambda Microservices",
    "0/1 Knapsack Algorithm Implementation",
    "Dynamic Programming Retrofitting",
    "Urban Heat Island Decision Engine",
    "WeMakeDevs Hackathon Submission",
    "Bharat Builds Tour Event 02",
    "Track 02 Heat and Water Resilience",
    "First Commit Innovation Challenge 2026",
    "Meta WhatsApp Cloud API Webhook",
    "Amazon SQS Buffer Event Sourcing",
    "Digital Evidence Management Blockchain",
    "IPFS Forensic Storage",
    "AES-256-GCM Voter Verification",
    "Biometric Ledger Integrity",
    "Competitive Coding India",
    "Engineering Student Hackathons",
    "Woxsen University Developer",
    "Rishvin Reddy Engineering Portfolio",
    "Open Source Challenge Submissions",
    "OpenAPI 3.0 Contract Testing",
    "141 Automated Unit Tests",
    "Cloud Architecture Case Studies",
    "Serverless Application Model SAM",
    "Decentralized Application Hackathon",
    "Full Stack Hackathon India",
    "Hackathon Winner Projects",
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
    canonical: "https://rishvinreddy.vercel.app/hackathons",
    languages: {
      "en-US": "https://rishvinreddy.vercel.app/hackathons",
      "en-IN": "https://rishvinreddy.vercel.app/hackathons",
    },
  },
  openGraph: {
    title: "Hackathons & Rapid Prototyping Archive | Erolla Rishvin Reddy",
    description:
      "A verifiable archive of competitive engineering sprints, cloud architectures, and algorithmic prototypes built under real-world constraints.",
    url: "https://rishvinreddy.vercel.app/hackathons",
    siteName: "Rishvin Reddy Engineering Portfolio",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://rishvinreddy.vercel.app/icon.png",
        width: 1200,
        height: 630,
        alt: "Hackathons & Rapid Prototyping Archive — Erolla Rishvin Reddy",
      },
      {
        url: "https://rishvinreddy.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Rishvin Reddy Portfolio — Engineering & Hackathons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hackathons & Rapid Prototyping Archive | Erolla Rishvin Reddy",
    description:
      "A verifiable archive of competitive engineering sprints, cloud architectures, and algorithmic prototypes built under real-world constraints.",
    site: "@RishvinReddy",
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
};

export default function HackathonsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://rishvinreddy.vercel.app/#person",
        name: "Erolla Rishvin Reddy",
        alternateName: ["Rishvin Reddy", "Rishvin"],
        url: "https://rishvinreddy.vercel.app/",
        image: "https://rishvinreddy.vercel.app/icon.png",
        jobTitle: "Software Engineer, Cloud Architect & Security Researcher",
        worksFor: {
          "@type": "Organization",
          name: "Rishvin Labs",
          url: "https://rishvinreddy.vercel.app",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Woxsen University",
          department: "Computer Science and Engineering",
        },
        sameAs: [
          "https://github.com/RishvinReddy",
          "https://www.linkedin.com/in/rishvinreddy/",
          "https://twitter.com/RishvinReddy",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://rishvinreddy.vercel.app/#website",
        url: "https://rishvinreddy.vercel.app/",
        name: "Rishvin Reddy Portfolio",
        description: "Software Engineering, Cybersecurity, IoT, Blockchain & Cloud Architectures",
        publisher: {
          "@id": "https://rishvinreddy.vercel.app/#person",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "CollectionPage",
        "@id": "https://rishvinreddy.vercel.app/hackathons/#webpage",
        url: "https://rishvinreddy.vercel.app/hackathons",
        name: "Hackathons & Rapid Prototyping Archive | Erolla Rishvin Reddy",
        description:
          "A verifiable archive of competitive engineering sprints, cloud architectures, and algorithmic prototypes built by Erolla Rishvin Reddy.",
        isPartOf: {
          "@id": "https://rishvinreddy.vercel.app/#website",
        },
        about: {
          "@id": "https://rishvinreddy.vercel.app/#person",
        },
        inLanguage: "en-US",
        breadcrumb: {
          "@id": "https://rishvinreddy.vercel.app/hackathons/#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://rishvinreddy.vercel.app/hackathons/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://rishvinreddy.vercel.app/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Hackathons",
            item: "https://rishvinreddy.vercel.app/hackathons",
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://rishvinreddy.vercel.app/hackathons/#itemlist",
        name: "Competitive Engineering Hackathons & Challenges",
        itemListElement: [
          {
            "@type": "SoftwareSourceCode",
            position: 1,
            name: "HeatCredit — Environmental Resilience Decision Engine",
            description:
              "AWS-native climate intelligence platform and 0/1 knapsack budget optimizer mitigating urban heat island risks.",
            codeRepository: "https://github.com/RishvinReddy/heatcredit-environmental-hacks-2026",
            programmingLanguage: ["TypeScript", "AWS SAM", "JavaScript"],
            runtimePlatform: "AWS Lambda, Amazon API Gateway, Amazon DynamoDB",
            author: {
              "@id": "https://rishvinreddy.vercel.app/#person",
            },
          },
          {
            "@type": "SoftwareSourceCode",
            position: 2,
            name: "WBOS — WhatsApp Business Operating System",
            description:
              "Event-driven conversational commerce orchestration platform connecting Meta WhatsApp Cloud API with AWS EventBridge and SQS.",
            codeRepository: "https://github.com/RishvinReddy/wbos-first-commit",
            programmingLanguage: ["TypeScript", "React"],
            runtimePlatform: "AWS Lambda, Amazon EventBridge, Amazon SQS, Amazon DynamoDB, Amazon Cognito",
            author: {
              "@id": "https://rishvinreddy.vercel.app/#person",
            },
          },
          {
            "@type": "SoftwareSourceCode",
            position: 3,
            name: "ChainForensics — Digital Evidence Custody Platform",
            description:
              "Consortium blockchain network on Hyperledger Fabric and IPFS enforcing tamper-evident forensic audit trails.",
            codeRepository: "https://github.com/RishvinReddy/ChainForensics",
            programmingLanguage: ["Go", "TypeScript", "Solidity"],
            runtimePlatform: "Hyperledger Fabric, IPFS, Docker, Node.js",
            author: {
              "@id": "https://rishvinreddy.vercel.app/#person",
            },
          },
          {
            "@type": "SoftwareSourceCode",
            position: 4,
            name: "VoteSafe — Biometric Voter Verification & Ledger",
            description:
              "High-integrity electoral prototype pairing multi-factor biometric hashing with AES-256-GCM encrypted ledgers.",
            codeRepository: "https://github.com/RishvinReddy/VoteSafe",
            programmingLanguage: ["TypeScript", "JavaScript", "SQL"],
            runtimePlatform: "Node.js, PostgreSQL",
            author: {
              "@id": "https://rishvinreddy.vercel.app/#person",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HackathonsClient />
    </>
  );
}

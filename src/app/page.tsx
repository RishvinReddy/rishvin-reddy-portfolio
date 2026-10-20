import KnowledgeGraph from "@/components/KnowledgeGraph";
import HomeProjectGallery from "@/components/HomeProjectGallery";
import ExperienceSection from "@/components/ExperienceSection";
import RecommendationsSection from "@/components/RecommendationsSection";
import { getGithubProjects, getRawGithubRepos } from '@/lib/github';
import { TECH_STACK, FEATURED_PROJECTS } from '../data/portfolio';
import React from 'react';
import ProfileModalController from '@/components/ProfileModalController';
import { CodedIntro } from "@/components/CodedIntro";
import {
  HandUnderline,
  HandCircle,
  HandwrittenNote,
  EngineeringDoodle,
  RishvinSignature,
  HandDrawnArrow,
} from '@/components/handwritten';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Erolla Rishvin Reddy | Software Engineer & Founder of Rishvin Labs",
  description: "Official portfolio of Erolla Rishvin Reddy, a B.Tech Computer Science student at Woxsen University. Founder of Rishvin Labs, Pegasystems Intern, and Co-Inventor of a Government of India IoT Design Patent. Expertise in Cybersecurity, IoT, Blockchain, and Full-Stack Engineering.",
  keywords: [
    "Rishvin Reddy", "Erolla Rishvin Reddy", "Rishvin Reddy Portfolio",
    "Founder Rishvin Labs", "Rishvin Labs Founder", "Software Engineer India",
    "Pega Platform Intern", "Pegasystems Internship", "BPM", "Workflow Automation", "Low-Code Development",
    "IoT Connectivity Device Patent", "Government of India Design Patent", "Co-Inventor IoT Patent",
    "Freelance Full-Stack Developer", "Fiverr Developer",
    "Cybersecurity Analyst", "IoT Engineer", "Blockchain Developer",
    "Woxsen University", "B.Tech CSE Student India",
    "Professional Recommendations Rishvin Reddy", "Rishvin Reddy Endorsements", "Software Engineering Mentorship",
    "Smart Irrigation System IoT", "VoteSafe Biometric Voting System",
    "AI Security Guardian", "Cyber Defense Matrix",
    "Next.js Developer", "React.js", "Node.js", "Python", "Embedded Systems",
    "Solidity", "Smart Contracts", "Web3",
    "Student Founder India", "Engineering Innovator", "Technical Portfolio",
    "TechSphere Achievement", "AWS Skill Builder", "Cybersecurity Research",
    "Top B.Tech Student Woxsen University",
    "Hyderabad Tech Entrepreneur",
    "Software Engineering Portfolio Examples",
    "Hire Rishvin Reddy",
    "Rishvin Reddy Github",
    "Rishvin Reddy LinkedIn",
    "Best Computer Science Portfolios India",
    "Internet of Things Architecture",
    "Next.js 14 Developer Hyderabad",
    "TypeScript React Expert India",
    "Blockchain Developer Woxsen",
    "Smart Contract Auditor",
    "Web3 DApp Developer India",
    "Cybersecurity Analyst Portfolio",
    "Junior Security Researcher",
    "Penetration Testing Intern",
    "Vulnerability Management Engineer",
    "Data Lake Solutions Intern",
    "Pegasystems Internship Experience",
    "Pega CSA Certified",
    "BPM Developer India",
    "Low Code Automation Specialist",
    "AI Security Solutions",
    "Machine Learning Security",
    "IoT Patent Holder India",
    "Government of India Patent Creator",
    "Hardware Design Engineer",
    "Embedded C Developer",
    "Arduino ESP32 Raspberry Pi Developer",
    "Freelance Web Developer Fiverr",
    "Full Stack Web Developer Remote",
    "Rishvin Labs Projects",
    "Tech Startups Hyderabad",
    "Student Founder India 2026",
    "React Native Mobile App Developer",
    "MERN Stack Developer India",
    "Tailwind CSS Frontend Engineer",
    "Responsive UI UX Developer",
    "Node.js Backend Developer",
    "Express.js API Developer",
    "PostgreSQL MongoDB Database Admin",
    "Cloud Architecture Practitioner",
    "AWS Solutions Architect intern",
    "DevOps CI/CD GitHub Actions",
    "TechSphere Hackathon Winner",
    "Woxsen AI Research Centre",
    "Cyber Defense Matrix Developer",
    "VoteSafe Biometric Voting Developer",
    "Smart Irrigation System IoT Developer",
    "ChainForensics Blockchain Analyzer",
    "NetInspect Security Tool",
    "Software Engineering Internship India",
    "Top Engineering Talent Hyderabad",
    "Future Tech Leaders India",
    "Who is Rishvin Reddy",
    "Rishvin",
    "Erolla",
    "Rishvin Reddy Erolla",
    "E. Rishvin Reddy",
    "Erolla Rishvin",
    "Contact Rishvin Reddy",
    "Rishvin Reddy Biography",
    "Rishvin Reddy About Me",
    "Rishvin Reddy Developer Profile",
    "Rishvin Reddy Woxsen",
    "Rishvin Reddy India",
    "Rishvin Reddy Hyderabad",
    "Rishvin Reddy Email",
    "Rishvin Reddy Projects",
    "Rishvin Reddy Resume",
    "Erolla Rishvin Reddy Software Engineer",
    "Rishvin Reddy Cybersecurity",
    "Rishvin Reddy Blog",
    "Rishvin Reddy Personal Website",
    "Rishvin Reddy Official Website",
    "Learn about Rishvin Reddy"
  ],
  openGraph: {
    title: "Erolla Rishvin Reddy | Software Engineer & Founder of Rishvin Labs",
    description: "Official portfolio of Erolla Rishvin Reddy, a B.Tech Computer Science student at Woxsen University. Founder of Rishvin Labs, Pegasystems Intern, and Co-Inventor of a Government of India IoT Design Patent.",
    url: "https://rishvinreddy.vercel.app/",
    siteName: "Rishvin Reddy Engineering Portfolio",
    images: [
      {
        url: "https://rishvinreddy.vercel.app/icon.png",
        width: 1200,
        height: 630,
        alt: "Rishvin Reddy Portfolio",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erolla Rishvin Reddy | Software Engineer & Founder of Rishvin Labs",
    description: "Official portfolio of Erolla Rishvin Reddy, Founder of Rishvin Labs, Pegasystems Intern, and IoT Patent Co-Inventor.",
    creator: "@RishvinReddy",
    images: ["https://rishvinreddy.vercel.app/icon.png"],
  }
};

function StudioCircuitNetwork() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07] text-slate-200"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="studio-circuit-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.25" />
          <circle cx="0" cy="0" r="1" fill="currentColor" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#studio-circuit-grid)" />
      <g fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.55">
        <path d="M 40,96 H 320 L 368,144 H 820 L 868,96 H 1160" />
        <path d="M 80,336 H 440 L 488,384 H 920 L 968,336 H 1120" />
        <path d="M 368,144 V 240 L 416,288 H 620" />
        <path d="M 820,144 V 240 L 772,288 H 680" />
        <path d="M 220,96 V 192 L 268,240 H 368" />
        <path d="M 980,96 V 216 L 932,264" />
      </g>
      <g fill="currentColor" opacity="0.75">
        <circle cx="320" cy="96" r="2.5" />
        <circle cx="368" cy="144" r="3" fill="#f20d46" />
        <circle cx="820" cy="144" r="3" fill="#f20d46" />
        <circle cx="868" cy="96" r="2.5" />
        <circle cx="488" cy="384" r="3" fill="#f20d46" />
        <circle cx="920" cy="384" r="2.5" />
        <circle cx="416" cy="288" r="2.5" />
        <circle cx="268" cy="240" r="2" />
        <circle cx="772" cy="288" r="2" />
      </g>
      <g stroke="currentColor" strokeWidth="0.8" opacity="0.45">
        <path d="M 120,91 V 101 M 115,96 H 125" />
        <path d="M 600,139 V 149 M 595,144 H 605" />
        <path d="M 1080,91 V 101 M 1075,96 H 1085" />
        <path d="M 240,331 V 341 M 235,336 H 245" />
        <path d="M 700,379 V 389 M 695,384 H 705" />
      </g>
    </svg>
  );
}

interface StudioServiceItem {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  capabilities: string[];
  href: string;
  colorClasses: {
    number: string;
    borderHover: string;
    glow: string;
    iconBox: string;
    tag: string;
  };
  motifSvg: React.ReactNode;
}

const STUDIO_SERVICES: StudioServiceItem[] = [
  {
    number: "01",
    eyebrow: "WEB ARCHITECTURE",
    title: "Web & SaaS Development",
    description: "Scalable SaaS platforms, high-performance cloud architectures, and production-grade full-stack web applications engineered for speed, modularity, and business growth.",
    capabilities: ["Next.js / TypeScript", "Microservices & APIs", "Scalable Database Systems"],
    href: "/services",
    colorClasses: {
      number: "text-blue-400/90 group-hover:text-blue-300",
      borderHover: "hover:border-blue-500/40",
      glow: "hover:shadow-[0_12px_36px_-10px_rgba(59,130,246,0.22)]",
      iconBox: "bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-400/40 group-hover:text-blue-300",
      tag: "bg-blue-500/10 text-blue-300/90 border-blue-500/20",
    },
    motifSvg: (
      <svg className="w-5 h-5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path className="transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:group-hover:transform-none" d="M8 6L2 12L8 18" />
        <path className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:group-hover:transform-none" d="M16 6L22 12L16 18" />
        <path className="transition-colors duration-300 group-hover:stroke-primary" d="M14 4L10 20" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    number: "02",
    eyebrow: "DEFENSIVE SYSTEMS",
    title: "Cybersecurity Solutions",
    description: "Hardened system architectures, threat surface analysis, automated vulnerability assessments, and proactive defensive controls built to safeguard enterprise digital assets.",
    capabilities: ["Vulnerability Assessments", "Zero-Trust Architecture", "Secure Auth & Crypto"],
    href: "/services",
    colorClasses: {
      number: "text-emerald-400/90 group-hover:text-emerald-300",
      borderHover: "hover:border-emerald-500/40",
      glow: "hover:shadow-[0_12px_36px_-10px_rgba(16,185,129,0.22)]",
      iconBox: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/40 group-hover:text-emerald-300",
      tag: "bg-emerald-500/10 text-emerald-300/90 border-emerald-500/20",
    },
    motifSvg: (
      <svg className="w-5 h-5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" strokeWidth="2" className="text-emerald-300" />
        <line
          x1="4" y1="11" x2="20" y2="11"
          stroke="#10b981"
          strokeWidth="1.2"
          strokeDasharray="2 2"
          className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-2 -translate-y-2 motion-reduce:group-hover:transform-none"
        />
      </svg>
    ),
  },
  {
    number: "03",
    eyebrow: "EMBEDDED & EDGE",
    title: "IoT & Automation",
    description: "Custom microcontroller firmware, real-time edge sensor telemetry networks, and intelligent hardware-to-cloud automation pipelines bridging the physical and digital domains.",
    capabilities: ["ESP32 / Microcontrollers", "MQTT & Edge Telemetry", "Industrial Automation"],
    href: "/services",
    colorClasses: {
      number: "text-amber-400/90 group-hover:text-amber-300",
      borderHover: "hover:border-amber-500/40",
      glow: "hover:shadow-[0_12px_36px_-10px_rgba(245,158,11,0.22)]",
      iconBox: "bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-400/40 group-hover:text-amber-300",
      tag: "bg-amber-500/10 text-amber-300/90 border-amber-500/20",
    },
    motifSvg: (
      <svg className="w-5 h-5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="2" className="transition-colors duration-300 group-hover:stroke-amber-300" />
        <circle cx="3" cy="12" r="1.5" className="fill-amber-400/60 group-hover:fill-amber-300 transition-colors" />
        <path d="M4.5 12H7" />
        <circle cx="21" cy="12" r="1.5" className="fill-amber-400/60 group-hover:fill-amber-300 transition-colors" />
        <path d="M17 12H19.5" />
        <circle cx="12" cy="3" r="1.5" className="fill-amber-400/60 group-hover:fill-amber-300 transition-colors" />
        <path d="M12 4.5V7" />
        <circle cx="12" cy="21" r="1.5" className="fill-amber-400/60 group-hover:fill-amber-300 transition-colors" />
        <path d="M12 17V19.5" />
        <circle cx="12" cy="12" r="1.5" className="fill-primary" />
      </svg>
    ),
  },
];

export default async function Home() {
  const dynamicProjects = await getGithubProjects();
  const rawRepos = await getRawGithubRepos();
  const displayProjects = dynamicProjects.length > 0 ? dynamicProjects : FEATURED_PROJECTS;

  // Compute GitHub Stats
  let totalStars = 0;
  let totalForks = 0;
  const langs: Record<string, number> = {};

  rawRepos.forEach(repo => {
    totalStars += repo.stargazers_count || 0;
    totalForks += repo.forks_count || 0;
    if (repo.language) {
      langs[repo.language] = (langs[repo.language] || 0) + 1;
    }
  });

  const sortedLangs = Object.entries(langs).sort((a, b) => b[1] - a[1]);
  const topLangs = sortedLangs.slice(0, 3);
  const totalLangCount = sortedLangs.reduce((sum, [, count]) => sum + count, 0);
  const topRepos = [...rawRepos].sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0)).slice(0, 3);


  return (
    <>
      <CodedIntro />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://rishvinreddy.vercel.app/#person",
              "name": "Erolla Rishvin Reddy",
              "url": "https://rishvinreddy.vercel.app/",
              "image": "https://rishvinreddy.vercel.app/icon.png",
              "sameAs": [
                "https://github.com/RishvinReddy",
                "https://www.linkedin.com/in/rishvin-reddy/",
                "https://hackindia.org/profile/rishvin_reddy",
                "https://www.wemakedevs.org/rishvinreddy",
                "https://youtube.com/@rishvinreddy"
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
                "BPM", "Workflow Automation", "Low-Code Development", "Embedded Systems", "Hardware Design",
                "Software Engineering"
              ],
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Dr. Hemachandran K",
                    "jobTitle": "Director - AI Research Centre, Woxsen University"
                  },
                  "reviewBody": "Rishvin is a standout student known for his high engagement and inquisitiveness. He consistently scores top marks, demonstrates a strong work ethic, and effectively leads his peers. His discipline, empathy, and excellent communication skills make him a valuable asset to any academic or professional setting."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Dr. Meher CP",
                    "jobTitle": "Professor, Woxsen University"
                  },
                  "reviewBody": "Rishvin is exceptionally proactive and dedicated, particularly in organizing workshops and leading technical sessions for school children. His clear communication and deep understanding of the subject matter are impressive. He takes initiative and executes tasks responsibly, showcasing strong leadership and commitment."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Bhanu Prakash",
                    "jobTitle": "Assistant Professor, Woxsen University"
                  },
                  "reviewBody": "I highly recommend Erolla Rishvin Reddy for his exceptional dedication and strong work ethic. His problem-solving abilities and willingness to help others make him a true asset. His proactive approach and commitment to learning are truly commendable."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sandeep Kumar",
                    "jobTitle": "Associate Vice President (AVP), Woxsen University"
                  },
                  "reviewBody": "Rishvin consistently brings innovative and practical ideas to the table, showing a deep commitment to excellence in every task he undertakes. His leadership qualities and problem-solving mindset make him stand out, and I am confident he will achieve remarkable success in his future endeavors."
                }
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
            }
          ])
        }}
      />
      <ProfileModalController />
      {/*  ── Header v2 Scripts ──  */}








      {/*  ===== Header Spacer (since header is fixed) =====  */}
      <div className="h-12"></div>

      {/*  Noise Overlay  */}
      <div className="noise-overlay pointer-events-none fixed inset-0 z-[9999] opacity-[0.03]"></div>

      {/*  ===== Hero / Home Section (Editorial Engineering Luxury) =====  */}
      <div className="relative w-full bg-gradient-to-br from-blue-50/80 via-indigo-50/30 to-purple-50/80 overflow-hidden">
        <div className="mx-auto w-full max-w-[104rem] 2xl:max-w-[116rem] 3xl:max-w-[120rem] px-4 sm:px-6 lg:px-8 flex-grow flex items-center pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
          <section id="home" className="relative w-full">

            {/* ── Asymmetrical Architectural Underlay Plate (Directly Offset Behind Hero Card) ── */}
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 lg:translate-x-6 lg:translate-y-6 rounded-3xl border-2 border-slate-900/20 bg-slate-900/[0.03] backdrop-blur-sm pointer-events-none -z-0 overflow-hidden"
              aria-hidden="true"
            >
              {/* Blueprint Micro-Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,#6366f125_1px,transparent_1px),linear-gradient(to_bottom,#6366f125_1px,transparent_1px)] bg-[size:24px_24px]"></div>

              {/* Architectural Registration Brackets & Labels Along Exposed Rim */}
              <div className="absolute top-2.5 left-3 text-slate-500 font-mono text-[11px] select-none font-semibold">┌ ARCH_01 // SYSTEM_CANVAS</div>
              <div className="absolute top-2.5 right-4 text-slate-500 font-mono text-[11px] select-none flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span>17.3850° N, 78.4867° E</span>
                <span>┐</span>
              </div>
              <div className="absolute bottom-2.5 left-4 text-slate-500 font-mono text-[11px] select-none font-semibold">
                └ CO-INVENTOR // PATENT № 418195-001
              </div>
              <div className="absolute bottom-2.5 right-4 text-slate-500 font-mono text-[11px] select-none flex items-center gap-2 font-semibold">
                <span>SCALE 1:1 // PRODUCTION READY</span>
                <span>┘</span>
              </div>

              {/* Diagonal Drafting Slash Hatching on bottom-right exposed margin */}
              <div className="absolute right-0 bottom-0 w-48 h-20 opacity-40 pointer-events-none">
                <svg viewBox="0 0 180 70" fill="none" className="w-full h-full text-slate-700">
                  <line x1="0" y1="70" x2="70" y2="0" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="25" y1="70" x2="95" y2="0" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="50" y1="70" x2="120" y2="0" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="75" y1="70" x2="145" y2="0" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="100" y1="70" x2="170" y2="0" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="125" y1="70" x2="195" y2="0" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* ── Geometric & Asymmetrical Architectural Canvas (Extending Beyond Hero Card) ── */}
            <div className="absolute -inset-10 sm:-inset-16 lg:-inset-24 pointer-events-none -z-0 overflow-visible" aria-hidden="true">
              {/* Asymmetrical Atmospheric Gradient Blooms */}
              <div className="absolute -top-12 -right-12 w-[600px] h-[600px] bg-indigo-300/35 rounded-full blur-[110px] mix-blend-multiply opacity-80"></div>
              <div className="absolute -bottom-12 -left-12 w-[520px] h-[520px] bg-rose-300/30 rounded-full blur-[100px] mix-blend-multiply opacity-75"></div>

              {/* Prominent Asymmetrical Orbit & Caliper Geometry (Top-Right / Behind Portrait) */}
              <div className="absolute -top-14 -right-12 sm:-top-20 sm:-right-20 lg:-top-28 lg:-right-28 w-[500px] sm:w-[650px] lg:w-[820px] h-[500px] sm:h-[650px] lg:h-[820px]">
                <svg viewBox="0 0 800 800" fill="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="orbit-grad-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="orbit-grad-rose" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f20d46" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#fb7185" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  {/* Concentric Orbit Rings — Clearly Visible */}
                  <circle cx="400" cy="400" r="380" stroke="url(#orbit-grad-indigo)" strokeWidth="1.8" strokeDasharray="8 8" />
                  <circle cx="400" cy="400" r="310" stroke="#334155" strokeWidth="1.6" strokeOpacity="0.5" />
                  <circle cx="400" cy="400" r="230" stroke="url(#orbit-grad-rose)" strokeWidth="1.6" strokeDasharray="5 7" />
                  <circle cx="400" cy="400" r="150" stroke="#4f46e5" strokeWidth="1.4" strokeOpacity="0.6" />

                  {/* 45° Faceted Diamond & Square Interlocking */}
                  <rect x="220" y="220" width="360" height="360" stroke="#4f46e5" strokeWidth="1.6" strokeOpacity="0.45" transform="rotate(45 400 400)" />
                  <rect x="260" y="260" width="280" height="280" stroke="#f20d46" strokeWidth="1.2" strokeDasharray="6 6" strokeOpacity="0.5" transform="rotate(45 400 400)" />

                  {/* Radial Axis Rays Extending Outwards */}
                  <line x1="10" y1="400" x2="790" y2="400" stroke="#475569" strokeWidth="1.4" strokeDasharray="5 5" strokeOpacity="0.5" />
                  <line x1="400" y1="10" x2="400" y2="790" stroke="#475569" strokeWidth="1.4" strokeDasharray="5 5" strokeOpacity="0.5" />
                  <line x1="124" y1="124" x2="676" y2="676" stroke="#6366f1" strokeWidth="1.2" strokeOpacity="0.45" />
                  <line x1="676" y1="124" x2="124" y2="676" stroke="#6366f1" strokeWidth="1.2" strokeOpacity="0.45" />

                  {/* Degree Calibration Callouts */}
                  <g fill="#334155" className="font-mono text-[12px] font-bold" opacity="0.85">
                    <text x="408" y="30">000° // NORTH</text>
                    <text x="736" y="404">090°</text>
                    <text x="380" y="778">180°</text>
                    <text x="18" y="404">270°</text>
                    <text x="630" y="150">045° // RADIAL_VECTOR</text>
                    <text x="630" y="660">135° // TANGENT</text>
                  </g>

                  {/* Cardinal Calibration Nodes */}
                  <circle cx="400" cy="90" r="5" fill="#f20d46" />
                  <circle cx="710" cy="400" r="5" fill="#4f46e5" />
                  <circle cx="400" cy="710" r="4.5" fill="#10b981" />
                  <circle cx="90" cy="400" r="4.5" fill="#0284c7" />

                  {/* Precision Caliper Ticks along Radius */}
                  <line x1="400" y1="90" x2="415" y2="90" stroke="#f20d46" strokeWidth="2" />
                  <line x1="710" y1="400" x2="710" y2="415" stroke="#4f46e5" strokeWidth="2" />
                </svg>
              </div>

              {/* Prominent Asymmetrical Isometric 3D Wireframe (Bottom-Left Extension) */}
              <div className="absolute -bottom-16 -left-12 sm:-bottom-20 sm:-left-16 lg:-bottom-24 lg:-left-20 w-80 sm:w-96 lg:w-[480px] h-80 sm:h-96 lg:h-[480px]">
                <svg viewBox="0 0 460 460" fill="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="iso-poly-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="iso-poly-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f20d46" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#fb7185" stopOpacity="0.04" />
                    </linearGradient>
                  </defs>

                  {/* Isometric Guide Grid Rays */}
                  <g stroke="#64748b" strokeWidth="1.2" strokeOpacity="0.45" strokeDasharray="5 5">
                    <line x1="0" y1="360" x2="360" y2="0" />
                    <line x1="50" y1="440" x2="440" y2="50" />
                    <line x1="0" y1="180" x2="380" y2="380" />
                    <line x1="0" y1="90" x2="440" y2="310" />
                  </g>

                  {/* Major Primary Isometric 3D Cube */}
                  <g transform="translate(50, 90)">
                    {/* Top face */}
                    <path d="M120,20 L220,78 L120,136 L20,78 Z" fill="url(#iso-poly-grad-1)" stroke="#4f46e5" strokeWidth="2" strokeOpacity="0.85" />
                    {/* Left face */}
                    <path d="M20,78 L120,136 V252 L20,194 Z" fill="url(#iso-poly-grad-2)" stroke="#f20d46" strokeWidth="2" strokeOpacity="0.8" />
                    {/* Right face */}
                    <path d="M220,78 L120,136 V252 L220,194 Z" fill="rgba(30,41,59,0.08)" stroke="#334155" strokeWidth="2" strokeOpacity="0.85" />
                    {/* Interior dashed wireframe axis */}
                    <path d="M20,78 V194 L120,252" stroke="#4f46e5" strokeWidth="1.4" strokeDasharray="3 3" strokeOpacity="0.6" />
                    <path d="M120,136 L220,78" stroke="#334155" strokeWidth="1.4" strokeOpacity="0.7" />
                    {/* Vertex nodes */}
                    <circle cx="120" cy="20" r="4" fill="#4f46e5" />
                    <circle cx="220" cy="78" r="4" fill="#334155" />
                    <circle cx="20" cy="78" r="4" fill="#f20d46" />
                    <circle cx="120" cy="136" r="4.5" fill="#f20d46" />
                    <circle cx="120" cy="252" r="4" fill="#10b981" />
                  </g>

                  {/* Secondary Nested Wireframe Cube */}
                  <g transform="translate(190, 190)">
                    <path d="M70,10 L130,45 L70,80 L10,45 Z" fill="rgba(99,102,241,0.1)" stroke="#4f46e5" strokeWidth="1.6" strokeOpacity="0.85" />
                    <path d="M10,45 L70,80 V150 L10,115 Z" fill="rgba(242,13,70,0.08)" stroke="#f20d46" strokeWidth="1.6" strokeOpacity="0.8" />
                    <path d="M130,45 L70,80 V150 L130,115 Z" fill="rgba(15,23,42,0.06)" stroke="#334155" strokeWidth="1.6" strokeOpacity="0.85" />
                  </g>

                  {/* Isometric Dimension Line with Arrowheads */}
                  <g stroke="#334155" strokeWidth="1.4" opacity="0.85">
                    <line x1="70" y1="380" x2="270" y2="380" />
                    <line x1="70" y1="373" x2="70" y2="387" />
                    <line x1="270" y1="373" x2="270" y2="387" />
                  </g>
                  <text x="105" y="400" fill="#1e293b" className="font-mono text-[12px] font-bold" opacity="0.9">
                    DIM // 384px [ISO_X]
                  </text>

                  {/* 4x4 Coordinate Dot Matrix */}
                  <g fill="#334155" opacity="0.75">
                    {Array.from({ length: 4 }).map((_, r) =>
                      Array.from({ length: 4 }).map((_, c) => (
                        <circle key={`dot-${r}-${c}`} cx={35 + c * 22} cy={35 + r * 22} r="2.2" />
                      ))
                    )}
                  </g>
                  <text x="35" y="130" fill="#475569" className="font-mono text-[10px] font-semibold" opacity="0.85">
                    [MATRIX 4×4 // 88DP]
                  </text>
                </svg>
              </div>

              {/* Architectural Registration Crosshairs in Canvas Margins */}
              <div className="absolute top-2 left-4 font-mono text-[13px] font-bold text-slate-500/80 select-none flex items-center gap-1.5">
                <span className="text-primary font-bold">⊕</span> POS: [0, 0] // ARCH_ORIGIN
              </div>
              <div className="absolute top-2 right-4 font-mono text-[13px] font-bold text-slate-500/80 select-none flex items-center gap-1.5">
                <span className="text-indigo-600 font-bold">⊕</span> GRID: 32PX // NORTH
              </div>
              <div className="absolute bottom-2 left-4 font-mono text-[13px] font-bold text-slate-500/80 select-none flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">⊕</span> DATUM: ZERO // WEST
              </div>
              <div className="absolute bottom-2 right-4 font-mono text-[13px] font-bold text-slate-500/80 select-none flex items-center gap-1.5">
                <span className="text-primary font-bold">⊕</span> SCALE: 1:100 // EAST
              </div>
            </div>

            {/* ── Hero Card ── */}
            <div id="heroPrimaryCard" className="relative z-10 bg-white border border-slate-900 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden w-full px-8 sm:px-12 lg:px-16 xl:px-20 py-8 lg:py-12">

              {/* Subtle radial gradient inside card */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-50/80 via-white to-slate-50/60 -z-0"></div>

            <div className="grid lg:grid-cols-[1.18fr_0.82fr] xl:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 xl:gap-16 items-center relative z-10 w-full">

              {/*  Left: Hero Text */}
              <div className="flex flex-col justify-center max-w-4xl xl:max-w-5xl mx-auto lg:mx-0 order-2 lg:order-1 text-center lg:text-left">

                {/* Availability Badge */}
                <div className="hidden sm:inline-flex w-fit mx-auto lg:mx-0 items-center gap-2 px-3 py-1 rounded-full border border-emerald-200/50 bg-emerald-50 text-emerald-600 mb-6 shadow-2xl">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span id="heroAvailBadge" className="text-xs font-semibold tracking-wide">Open to full-time roles</span>
                </div>

                {/* Typography Hierarchy */}
                <div className="flex flex-col gap-2 mb-7">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-500 tracking-tight">Hi, I&apos;m</span>
                    <HandwrittenNote rotation={-2} color="blue" className="hidden sm:inline-flex">
                      Engineering with intent.
                    </HandwrittenNote>
                  </div>
                  <div className="relative inline-block w-fit mx-auto lg:mx-0">
                    <h1 className="text-5xl sm:text-6xl lg:text-[clamp(3.5rem,5.5vw,5.5rem)] font-bold tracking-tight text-slate-900 leading-[1.05] font-editorial">
                      Erolla Rishvin Reddy
                    </h1>
                    <HandUnderline className="w-full h-3.5 -mt-1 text-[#f20d46]/75" strokeWidth={2.8} />
                  </div>
                </div>

                {/* Credential Cards (Standardized) */}
                <div className="mb-[26px] flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">

                  {/* Patent Holder Badge */}
                  <a href="#patent-section" className="group flex items-center gap-4 w-full sm:w-auto px-5 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-2xl">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-50 text-yellow-600 text-lg">
                      🏅
                    </div>
                    <div className="flex flex-col leading-none text-left">
                      <span className="font-bold text-base text-slate-900">Patent Holder</span>
                      <span className="text-[13px] font-medium text-slate-500 mt-0.5">Innovation & Research</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* Founder Badge */}
                  <a href="https://rishvin-labs.vercel.app" target="_blank" className="group flex items-center gap-4 w-full sm:w-auto px-5 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-2xl">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-500 text-lg">
                      🚀
                    </div>
                    <div className="flex flex-col leading-none text-left">
                      <span className="font-bold text-base text-slate-900">Founder</span>
                      <span className="text-[13px] font-medium text-slate-500 mt-0.5">Rishvin Labs</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors duration-300 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3h7m0 0v7m0-7L10 14" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5v14h14" />
                    </svg>
                  </a>

                </div>

                {/* Description */}
                <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl xl:max-w-4xl mx-auto lg:mx-0 mb-7 font-normal">
                  <span className="font-bold text-slate-900">Software Engineer</span> specializing in
                  <span className="font-semibold text-slate-900 border-b border-slate-300 pb-0.5 mx-1">Cybersecurity</span>,
                  <span className="font-semibold text-slate-900 border-b border-slate-300 pb-0.5 mx-1">IoT</span>,
                  <span className="font-semibold text-slate-900 border-b border-slate-300 pb-0.5 mx-1">Full-Stack Development</span>, Blockchain, and scalable intelligent systems. Founder of <span className="font-bold text-slate-900">Rishvin Labs</span>.
                </p>

                {/*  Hidden SEO Clarification  */}
                <div style={{ display: "none" }} className="identity-clarification-seo" aria-hidden="true">
                  This profile refers to Erolla Rishvin Reddy, a Computer Science Engineering student specializing in
                  IoT, Cybersecurity, and Blockchain technologies. Co-inventor of a design patent for an IoT
                  Connectivity Device. Not related to film industry individuals.
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-[22px]">
                  {/* Primary CTA */}
                  <a href="#projects" className="inline-flex items-center justify-center px-6 py-2.5 text-[14px] font-bold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-xl hover:shadow-2xl">
                    View Projects
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>

                  {/* Secondary CTA (3D Universe) */}
                  <a href="/universe" className="inline-flex items-center justify-center px-6 py-2.5 text-[14px] font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-xl hover:shadow-2xl">
                    <svg className="w-4 h-4 mr-2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                    3D Universe
                  </a>

                  {/* Supporting CTAs */}
                  <a href="/resume" className="inline-flex items-center justify-center px-6 py-2.5 text-[14px] font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-colors shadow-xl hover:shadow-2xl">
                    Resume
                  </a>
                  <a href="/ide" className="inline-flex items-center justify-center px-6 py-2.5 text-[14px] font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-colors shadow-xl hover:shadow-2xl">
                    ProjectsIDE
                  </a>
                  <a href="https://rishvin-labs.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 text-[14px] font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-colors shadow-xl hover:shadow-2xl group">
                    Rishvin Labs
                    <svg className="w-4 h-4 ml-1.5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Tech Stack Dock */}
                <div className="flex justify-center lg:justify-start">
                  <div className="flex flex-wrap gap-2.5 items-center bg-white border border-slate-200/60 p-3.5 rounded-[1.5rem] shadow-2xl">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default group" title="Python">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-6 h-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" alt="Python" />
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default group" title="TypeScript">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-6 h-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" alt="TypeScript" />
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default group" title="JavaScript">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-6 h-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" alt="JavaScript" />
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default group" title="React">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-6 h-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" alt="React" />
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default group" title="Node.js">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-6 h-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" alt="Node.js" />
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default group" title="C++">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="w-6 h-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" alt="C++" />
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default group" title="Arduino">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" className="w-6 h-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" alt="Arduino" />
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default group" title="MySQL">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-6 h-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" alt="MySQL" />
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default group" title="Flask">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" className="w-6 h-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" alt="Flask" />
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default group" title="Docker">
                      <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-6 h-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" alt="Docker" />
                    </div>
                  </div>
                </div>

              </div>

              {/*  Right: Visual Profile  */}
              <div className="flex justify-center lg:justify-center relative order-1 lg:order-2">

                {/* Highly Restrained Ambient Glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[120%] aspect-square bg-slate-200/30 rounded-full blur-[100px] opacity-60"></div>
                </div>

                {/* Clean Editorial Portrait Oval with Handwritten Annotations */}
                <div className="relative">
                  {/* Handwritten Sketchbook Callout */}
                  <div className="absolute -top-6 -right-2 sm:-top-8 sm:-right-4 z-20 pointer-events-none hidden sm:block">
                    <HandwrittenNote
                      rotation={4}
                      color="blue"
                      arrowDirection="curved-down-left"
                      arrowPosition="right"
                      arrowClassName="w-10 h-10 -ml-1 text-[#0A66C2]"
                    >
                      Ideas → Systems
                    </HandwrittenNote>
                  </div>

                  <div className="relative z-10 w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[580px] xl:max-w-[660px] 2xl:max-w-[700px] aspect-square rounded-full overflow-hidden border-2 border-slate-200/60 shadow-2xl bg-white group cursor-pointer" id="profileThumb" data-src="icon.png">
                    <img loading="lazy" src="icon.png" className="w-full h-full object-cover mix-blend-multiply scale-[1.02] group-hover:scale-[1.05] transition-transform duration-700 ease-out" alt="Erolla Rishvin Reddy Software Developer and IoT Engineer" />

                    {/* Refined Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full text-slate-900 text-sm font-semibold shadow-2xl">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        View Full Profile
                      </span>
                    </div>
                  </div>

                  {/* Subtle Engineering Sketch Doodle */}
                  <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-3 z-20 pointer-events-none hidden sm:block opacity-75">
                    <EngineeringDoodle type="circuit" className="w-12 h-12 text-indigo-500/80" />
                  </div>

                  {/* Authentic Personal Signature Stamp */}
                  <div className="absolute -bottom-6 right-0 sm:-bottom-8 sm:-right-4 z-20 pointer-events-none flex flex-col items-end">
                    <RishvinSignature className="w-32 sm:w-44 h-auto text-slate-800/85 hover:text-slate-900 -rotate-3 transition-colors drop-shadow-sm" />
                  </div>
                </div>
              </div>

            </div>{/* end grid */}
          </div>{/* end hero card */}
        </section>

        {/*  ===== Fullscreen image modal (accessible, focus-trap) =====  */}
        <div id="imageModal" className="fixed inset-0 z-[100] hidden" role="dialog" aria-modal="true" aria-hidden="true"
          aria-label="Profile image dialog">
          <div id="imageModalOverlay" className="fixed inset-0 bg-black/80 transition-opacity duration-300 opacity-0"></div>

          <div className="fixed inset-0 flex items-start justify-center p-6 pt-24 md:pt-32">
            <div id="imageModalPanel"
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-auto transform scale-95 opacity-0 transition-all duration-300">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <h3 id="imageModalTitle" className="text-lg font-semibold text-slate-900">Profile</h3>
                  <div id="imageModalInfo" className="text-sm text-slate-500">Click outside or press Esc to
                    close</div>
                </div>

                <div className="flex items-center gap-3">
                  <a id="downloadImageBtn"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-md text-sm shadow-xl" href="icon.png"
                    download="Rishvin_Profile.png">
                    Download
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3v12m0 0l4-4M12 15l-4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" />
                    </svg>
                  </a>
                  <button id="modalCloseBtn" aria-label="Close"
                    className="rounded-md p-2 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary">
                    <svg className="h-5 w-5 text-slate-700" viewBox="0 0 20 20" fill="none" stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 6l8 8M14 6l-8 8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6 flex items-center justify-center">
                <img loading="lazy" id="modalImg" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Profile full view"
                  className="max-w-full max-h-[80vh] rounded-md object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/*  ===== Scripts: improved toggle + modal + a11y =====  */}


        {/*  End of upgraded header / hero / modal  */}
        </div> {/* End of max-w-[1450px] container */}
      </div> {/* End of hero background gradient */}

      <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>

      {/*  ===========================
     ABOUT — Premium Redesign
     ===========================  */}

      <section id="about-v3" className="py-12 sm:py-20 bg-white relative z-0">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-10 relative z-10">

          {/* ── Section Header ── */}
          <div className="max-w-[90rem] mx-auto text-center mb-16 relative">
            {/* Flanking Sketchbook Engineering Doodles */}
            <div className="absolute top-0 left-2 lg:left-12 hidden md:flex flex-col items-center pointer-events-none opacity-80" aria-hidden="true">
              <EngineeringDoodle type="circuit" className="w-14 h-14 text-indigo-500/70" />
              <HandwrittenNote rotation={-4} color="blue" className="text-xs -mt-1">
                silicon &amp; sensors
              </HandwrittenNote>
            </div>

            <div className="absolute top-0 right-2 lg:right-12 hidden md:flex flex-col items-center pointer-events-none opacity-80" aria-hidden="true">
              <EngineeringDoodle type="linked-blocks" className="w-14 h-14 text-violet-500/70" />
              <HandwrittenNote rotation={3} color="accent" className="text-xs -mt-1">
                smart contracts
              </HandwrittenNote>
            </div>

            {/* Badge with Handwritten Callout */}
            <div className="inline-flex items-center justify-center gap-3 mb-6 relative">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest shadow-sm">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" aria-hidden="true" />
                About Me
              </span>
              <div className="hidden sm:inline-block pointer-events-none">
                <HandwrittenNote rotation={-2} color="blue" arrowDirection="curved-down-left" arrowPosition="left" arrowClassName="w-5 h-5" className="text-xs sm:text-sm">
                  the engineering philosophy
                </HandwrittenNote>
              </div>
            </div>

            {/* Headline with Organic HandUnderline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.05] mb-5">
              Engineering the{" "}
              <span className="relative inline-block pb-1">
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(120deg, #6366f1 0%, #7c3aed 40%, #14b8a6 100%)" }}>
                  full stack
                </span>
                <span className="absolute -bottom-1 left-0 w-full block pointer-events-none" aria-hidden="true">
                  <HandUnderline variant="scribble" color="#6366f1" className="w-full h-3" strokeWidth={2.4} />
                </span>
              </span>{" "}
              of trust.
            </h2>

            {/* Sub-paragraph with HandCircle and Patent Annotation */}
            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              From silicon to smart contracts — I build systems that are fast, secure, and production-ready.{" "}
              Co-inventor of a{" "}
              <span className="relative inline-block font-bold text-slate-900">
                <HandCircle color="#f59e0b" strokeWidth={2.2}>
                  Government of India IoT Patent
                </HandCircle>
              </span>.
            </p>

            {/* Handwritten Patent Callout Annotation */}
            <div className="mt-3.5 hidden sm:flex items-center justify-center gap-2 pointer-events-none">
              <HandwrittenNote rotation={2} color="amber" arrowDirection="curved-up-left" arrowPosition="left" arrowClassName="w-5 h-5" className="text-xs sm:text-sm">
                Official Patent Grant № 418195-001
              </HandwrittenNote>
            </div>
          </div>

          {/* ── Stats Strip ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
            {([
              { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", num: "15", sup: "+", label: "Projects Built", color: "indigo" },
              { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", num: "3", sup: "+", label: "Core Domains", color: "violet" },
              { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", num: "1", sup: "×", label: "Govt. Patent", color: "amber" },
              { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", num: "8", sup: "+", label: "Technologies", color: "teal" },
              { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", num: "5", sup: "+", label: "Certifications", color: "rose" },
            ] as const).map((s, i) => {
              const bg: Record<string, string> = { indigo: "bg-indigo-50", violet: "bg-violet-50", amber: "bg-amber-50", teal: "bg-teal-50", rose: "bg-rose-50" };
              const txt: Record<string, string> = { indigo: "text-indigo-600", violet: "text-violet-600", amber: "text-amber-600", teal: "text-teal-600", rose: "text-rose-500" };
              const num: Record<string, string> = { indigo: "text-indigo-500", violet: "text-violet-500", amber: "text-amber-500", teal: "text-teal-500", rose: "text-rose-500" };
              const bar: Record<string, string> = { indigo: "from-indigo-400 to-sky-400", violet: "from-violet-400 to-purple-400", amber: "from-amber-400 to-orange-400", teal: "from-teal-400 to-emerald-400", rose: "from-rose-400 to-pink-400" };
              return (
                <div key={i} className={`group relative bg-white border border-slate-200/80 rounded-2xl p-5 shadow-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${i === 4 ? "sm:col-span-1 col-span-2" : ""}`}>
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${bar[s.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Handwritten Callout Stickers on key stat milestones */}
                  {i === 0 && (
                    <span className="absolute top-2.5 right-3 hidden sm:inline-block pointer-events-none z-10">
                      <HandwrittenNote rotation={3} color="blue" className="text-[10px] font-bold">
                        shipped &amp; live
                      </HandwrittenNote>
                    </span>
                  )}
                  {i === 2 && (
                    <span className="absolute top-2.5 right-3 hidden sm:inline-block pointer-events-none z-10">
                      <HandwrittenNote rotation={-3} color="amber" className="text-[10px] font-bold">
                        certified grant
                      </HandwrittenNote>
                    </span>
                  )}
                  {i === 4 && (
                    <span className="absolute top-2.5 right-3 hidden sm:inline-block pointer-events-none z-10">
                      <HandwrittenNote rotation={2} color="accent" className="text-[10px] font-bold">
                        verified
                      </HandwrittenNote>
                    </span>
                  )}

                  <div className={`w-9 h-9 ${bg[s.color]} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <svg className={`w-4 h-4 ${txt[s.color]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d={s.icon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className={`text-3xl font-black text-slate-900 leading-none mb-1`}>
                    {s.num}<span className={`text-xl ${num[s.color]}`}>{s.sup}</span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.label}</div>
                </div>
              );
            })}
          </div>

          {/* ── Main Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

            {/* LEFT: Narrative Card */}
            <div className="lg:col-span-7">
              <div className="relative bg-white border border-slate-200/80 rounded-2xl shadow-2xl overflow-hidden h-full">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-teal-500" />

                {/* Floating code decoration */}
                <div className="absolute top-6 right-6 text-[11px] font-mono text-slate-300 select-none hidden sm:block">
                  {'{ IoT ∩ Blockchain ∩ Security }'}
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex items-center justify-between mb-8">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] flex items-center gap-2">
                      <span className="w-3 h-px bg-slate-300 inline-block" />
                      Engineer&apos;s Narrative
                    </p>
                    <div className="hidden sm:inline-flex items-center gap-1.5 pointer-events-none">
                      <HandwrittenNote rotation={-2} color="emerald" className="text-xs">
                        from breadboard to production
                      </HandwrittenNote>
                    </div>
                  </div>

                  {/* Journey timeline */}
                  <div className="space-y-6 mb-8">
                    {([
                      { phase: "Phase 01 — Hardware", color: "indigo", doodle: <EngineeringDoodle type="sensor-node" className="w-5 h-5 text-indigo-400 opacity-80 shrink-0 hidden sm:block" />, content: <p className="text-sm sm:text-base text-slate-600 leading-relaxed">My journey started with <span className="text-slate-900 font-bold">hardware mechanics</span> — understanding the pulse of machines, programming microcontrollers and building IoT connectivity devices from scratch.</p> },
                      { phase: "Phase 02 — Software Logic", color: "violet", doodle: <EngineeringDoodle type="code-brackets" className="w-5 h-5 text-violet-400 opacity-80 shrink-0 hidden sm:block" />, content: <p className="text-sm sm:text-base text-slate-600 leading-relaxed">It evolved into <span className="text-slate-900 font-bold">full-stack engineering</span> — React, Node, Python, REST APIs — building smart interfaces that communicate with the physical world.</p> },
                      { phase: "Phase 03 — Security Layer", color: "teal", doodle: <EngineeringDoodle type="shield" className="w-5 h-5 text-teal-400 opacity-80 shrink-0 hidden sm:block" />, content: <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Today I secure that bridge. Integrating <strong className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-black">IoT sensors</strong> with <strong className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-black">Blockchain ledgers</strong> to create systems that are verifiable, impenetrable, and production-grade.</p> },
                      { phase: "Phase 04 — Founder", color: "rose", doodle: <EngineeringDoodle type="connected-nodes" className="w-5 h-5 text-rose-400 opacity-80 shrink-0 hidden sm:block" />, content: <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Now building <strong className="bg-gradient-to-r from-rose-500 to-primary bg-clip-text text-transparent font-black"><a href="https://rishvin-labs.vercel.app" target="_blank" className="hover:underline">Rishvin Labs</a></strong>. Delivering digital solutions, full-stack web development, cybersecurity-focused systems, IoT automation, and product engineering.</p> },
                    ] as const).map((item, i, arr) => {
                      const dotColor: Record<string, string> = { indigo: "bg-indigo-500", violet: "bg-violet-500", teal: "bg-teal-500", rose: "bg-rose-500" };
                      const labelColor: Record<string, string> = { indigo: "text-indigo-500", violet: "text-violet-500", teal: "text-teal-500", rose: "text-rose-500" };
                      const lineGrad: Record<string, string> = { indigo: "from-indigo-200 to-violet-200", violet: "from-violet-200 to-teal-200", teal: "from-teal-200 to-rose-200", rose: "from-rose-200 to-rose-100" };
                      return (
                        <div key={i} className="flex items-start gap-4 group/row">
                          <div className="mt-1.5 flex flex-col items-center shrink-0">
                            <div className={`w-2.5 h-2.5 rounded-full ${dotColor[item.color]} shadow-2xl`} />
                            {i < arr.length - 1 && <div className={`w-px flex-1 min-h-[40px] bg-gradient-to-b ${lineGrad[item.color]} mt-1`} />}
                          </div>
                          <div className="pb-1 flex-1">
                            <div className="flex items-center justify-between mb-1.5">
                              <div className={`text-[10px] font-black ${labelColor[item.color]} uppercase tracking-widest`}>{item.phase}</div>
                              {item.doodle}
                            </div>
                            {item.content}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Skill pills with handwritten annotation */}
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Applied Competencies</span>
                    <HandwrittenNote rotation={-1} color="blue" className="text-[11px] hidden sm:inline-block">
                      tested in production
                    </HandwrittenNote>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {([
                      { label: "IoT Systems", bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200/70" },
                      { label: "Blockchain", bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200/70" },
                      { label: "Full-Stack", bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200/70" },
                      { label: "Embedded C", bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-200/80" },
                      { label: "Python", bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-200/80" },
                      { label: "Cybersecurity", bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200/70" },
                    ] as const).map((p, i) => (
                      <span key={i} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${p.bg} ${p.text} ${p.border}`}>{p.label}</span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="relative shrink-0">
                        <div className="w-10 h-10 rounded-full overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-2 border-indigo-200/40">
                          <img loading="lazy" src="icon.png" alt="Rishvin Reddy" className="w-full h-full object-cover" />
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
                      </div>
                      <div>
                        <div className="font-black text-slate-900 text-sm">Rishvin Reddy</div>
                        <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">IoT · Blockchain · Full-Stack</div>
                      </div>
                    </div>

                    {/* Authentic Personal Signature Stamp */}
                    <div className="hidden md:flex flex-col items-center pointer-events-none -my-2">
                      <RishvinSignature className="w-28 sm:w-32 h-auto text-slate-800 -rotate-2 opacity-90 drop-shadow-xs" />
                      <HandwrittenNote rotation={1} color="accent" className="text-[10px] -mt-1">
                        verified author
                      </HandwrittenNote>
                    </div>

                    <a href="/about"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-bold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 relative overflow-hidden"
                      style={{ background: "linear-gradient(135deg, #1e293b 0%, #6366f1 100%)" }}>
                      <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/15 hover:translate-x-full transition-transform duration-500 pointer-events-none" />
                      <span className="relative z-10 flex items-center gap-2">
                        Read Full Story
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: GitHub Live Panel */}
            <div className="lg:col-span-5 flex flex-col gap-4">

              {/* Header */}
              <div className="flex items-center justify-between px-1">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-1 flex items-center gap-2">
                    <span className="w-3 h-px bg-slate-300 inline-block" />
                    Live from GitHub
                  </p>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Technical Arsenal</h3>
                    <EngineeringDoodle type="terminal" className="w-5 h-5 text-indigo-500/80 shrink-0 hidden sm:block" />
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <HandwrittenNote rotation={-2} color="emerald" className="text-[10px] hidden sm:inline-block">
                    live telemetry
                  </HandwrittenNote>
                  <a href="https://github.com/RishvinReddy" target="_blank" rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors duration-200">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    @RishvinReddy
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Live/Fallback badges */}
              <div id="gh-live-badge" className="flex items-center gap-2 hidden">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                  Live Data
                </span>
                <span id="gh-updated-at" className="text-[10px] text-slate-400 font-medium" />
              </div>
              <div id="gh-fallback-badge" className="flex items-center gap-2 hidden">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/70 text-[10px] font-black text-amber-600 uppercase tracking-widest">
                  Cached Data
                </span>
              </div>

              {/* Main card */}
              <div className="about-skills-card relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl shadow-2xl p-6 sm:p-8 flex-1">

                {/* Subtle Sketchbook Data Stream Doodle */}
                <div className="absolute -bottom-2 -right-2 pointer-events-none opacity-20 hidden sm:block" aria-hidden="true">
                  <EngineeringDoodle type="data-stream" className="w-16 h-16 text-slate-500" />
                </div>

                {/* GitHub Stats Strip */}
                <div id="gh-stats-strip" className="grid grid-cols-4 gap-2 mb-6">
                  <div className="text-center p-2 rounded-xl bg-slate-50">
                    <div className="text-lg font-black text-slate-800 leading-tight">{rawRepos.length}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Repos</div>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-slate-50">
                    <div className="text-lg font-black text-slate-800 leading-tight">{totalStars}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Stars</div>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-slate-50">
                    <div className="text-lg font-black text-slate-800 leading-tight">{totalForks}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Forks</div>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-slate-50">
                    <div className="text-lg font-black text-slate-800 leading-tight">{sortedLangs.length}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Langs</div>
                  </div>
                </div>

                {/* Language bars */}
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Language Distribution</p>
                  <HandwrittenNote rotation={-2} color="blue" className="text-[10px] hidden sm:inline-block">
                    polyglot stack
                  </HandwrittenNote>
                </div>
                <div className="space-y-4 mt-3" id="about-skill-bars">
                  {topLangs.map(([lang, count], i) => (
                    <div key={i} className="skill-row">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-indigo-500' : i === 1 ? 'bg-rose-500' : 'bg-amber-500'}`} />
                          <div className="text-[11px] font-bold text-slate-700 uppercase tracking-widest">{lang}</div>
                        </div>
                        <div className="text-[11px] font-bold text-slate-400">{Math.round((count / totalLangCount) * 100)}%</div>
                      </div>
                      <div className="h-[7px] rounded-full bg-slate-100 w-full overflow-hidden">
                        <div className={`h-full rounded-full ${i === 0 ? 'bg-indigo-500' : i === 1 ? 'bg-rose-500' : 'bg-amber-500'}`} style={{ width: `${(count / totalLangCount) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 mb-5 h-px bg-gradient-to-r from-slate-100 via-indigo-100/60 to-slate-100" />

                {/* Top repos */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Top Repositories</p>
                    <HandwrittenNote rotation={2} color="amber" className="text-[10px] hidden sm:inline-block">
                      open source code
                    </HandwrittenNote>
                  </div>
                  <div id="gh-top-repos" className="space-y-2">
                    {topRepos.map((repo, i) => (
                      <a key={i} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 hover:-translate-y-0.5 transition-all group">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-800 truncate group-hover:text-indigo-600 transition-colors">{repo.name}</div>
                          <div className="text-[10px] font-medium text-slate-500 truncate mt-0.5">{repo.description || "No description"}</div>
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                          <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          {repo.stargazers_count}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

              </div>

              <p className="text-center text-[11px] text-slate-400 font-medium">
                Live · <a href="https://github.com/RishvinReddy" target="_blank" rel="noopener" className="text-indigo-500 hover:underline font-bold">GitHub API ↗</a>
              </p>
            </div>

          </div>
        </div>
      </section>




      {/*  ══════════════════════════════════════════════════════
       TECH STACK MARQUEE — full-bleed, truly centered
  ══════════════════════════════════════════════════════  */}
      <div className="relative py-8 scroll-reveal" style={{ overflow: "hidden" }}>

        {/*  Top + bottom border lines  */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent">
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent">
        </div>

        {/*  Label — centered above the track  */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Technology Stack</p>
          <div className="flex items-center gap-2.5">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-indigo-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-indigo-200"></div>
          </div>
        </div>

        {/*  Marquee track: edge-faded, full width  */}
        <div
          style={{ overflow: "hidden", maskImage: "linear-gradient(to right,transparent 0%,#000 12%,#000 88%,transparent 100%)", WebkitMaskImage: "linear-gradient(to right,transparent 0%,#000 12%,#000 88%,transparent 100%)" }}>
          <div id="tech-marquee-v2"
            style={{ display: "flex", gap: "10px", width: "max-content", animation: "techScrollV2 32s linear infinite", padding: "4px 0" }}>

            {/* Set 1 */}
            {TECH_STACK.map((tech, i) => (
              <span key={`tech-1-${i}`} className="tech-chip" style={{ flexShrink: "0", whiteSpace: "nowrap", padding: "7px 16px", fontSize: "12px" }}>
                <svg style={{ width: "14px", height: "14px", color: tech.color, flexShrink: "0" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: tech.iconPath }}></svg>
                {tech.name}
              </span>
            ))}
            {/* Set 2 - duplicate for seamless loop */}
            {TECH_STACK.map((tech, i) => (
              <span key={`tech-2-${i}`} className="tech-chip" style={{ flexShrink: "0", whiteSpace: "nowrap", padding: "7px 16px", fontSize: "12px" }}>
                <svg style={{ width: "14px", height: "14px", color: tech.color, flexShrink: "0" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: tech.iconPath }}></svg>
                {tech.name}
              </span>
            ))}

          </div>
        </div>


      </div>

      {/*  Skill bar animation script  */}


      {/*  ─ Section Divider ─  */}
      <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>



      {/*  ===========================
     PATENT HIGHLIGHT SECTION
     ===========================  */}
      {/*  ===========================
     PATENT HIGHLIGHT SECTION — Elite Certificate Edition
     ===========================  */}
      {/*  ===========================
     PATENT HIGHLIGHT SECTION — Elite Full-Width Certificate
     ===========================  */}
      <section id="patent-section"
        className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 mt-16 mb-28 relative z-20 scroll-mt-32">

        {/*  Section Label + Heading  */}
        <div className="scroll-reveal mb-14 flex flex-col items-center text-center gap-6">
          <div className="flex flex-col items-center">
            {/*  Badge  */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200/70 rounded-full shadow-2xl">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                Original Innovation
              </span>
            </div>
            {/*  Headline  */}
            <h2
              className="text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight font-display leading-[1.02]">
              Patent &amp;{' '}
              <span className="relative inline-block">
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-500">Innovation</span>
                <HandUnderline className="w-full h-3.5 -mt-1 text-amber-500/80" strokeWidth={2.5} />
              </span>
            </h2>
            <div className="mt-2">
              <HandwrittenNote rotation={2} color="amber">
                Registered Design No. 470097-001
              </HandwrittenNote>
            </div>
          </div>
          <p className="text-slate-500 text-base sm:text-lg font-medium max-w-2xl leading-relaxed text-center mx-auto">
            One of the few undergrads with a <strong className="text-slate-900 font-extrabold">government-registered</strong>
            hardware patent.
          </p>
        </div>

        {/*  Main Patent Card — Wide Split Layout  */}
        <div className="scroll-reveal delay-2">
          <div className="relative rounded-[3rem] overflow-hidden group transition-all duration-700 hover:-translate-y-2"
            style={{ boxShadow: "0 0 0 1px rgba(251,191,36,0.15), 0 20px 60px -10px rgba(0,0,0,0.07), 0 8px 20px -5px rgba(245,158,11,0.08)" }}>

            {/*  Gold Accent Top Strip  */}
            <div
              className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-400 via-orange-400 to-yellow-500 z-30">
            </div>

            {/*  Rich layered background  */}
            <div className="absolute inset-0 bg-white"></div>
            <div
              className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-white/0 to-orange-50/40 pointer-events-none">
            </div>

            {/*  Large ambient glow blobs  */}
            <div
              className="absolute -right-48 -bottom-48 w-[700px] h-[700px] bg-gradient-to-tl from-amber-200/25 to-orange-200/15 rounded-full blur-[120px] pointer-events-none transition-all duration-[1500ms] group-hover:scale-110 group-hover:-right-32 group-hover:-bottom-32">
            </div>
            <div
              className="absolute -left-32 -top-32 w-80 h-80 bg-gradient-to-br from-yellow-100/50 to-amber-100/30 rounded-full blur-[70px] pointer-events-none transition-all duration-1000 group-hover:scale-115">
            </div>

            {/*  SPLIT GRID: Left content + Right visual panel  */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5">

              {/*  LEFT: Main Patent Info (3 cols)  */}
              <div className="lg:col-span-3 p-8 md:p-12 xl:p-16 border-r border-amber-100/0 lg:border-amber-100/60">

                {/*  Header  */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10">
                  <div className="flex-1">
                    <div
                      className="text-[10px] font-black text-amber-500/80 uppercase tracking-[0.22em] mb-4 flex items-center gap-3">
                      <div className="h-px w-8 bg-gradient-to-r from-amber-400 to-transparent"></div>
                      Government of India · Design Patent Office
                    </div>
                    <h3
                      className="text-3xl md:text-4xl xl:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-amber-700 transition-colors duration-500">
                      IoT Connectivity<br />Device
                    </h3>
                    <p className="text-base text-slate-500 font-medium leading-relaxed max-w-sm">
                      A novel design for an intelligent IoT hardware interface enabling <strong
                        className="text-slate-700">secure, authenticated</strong> device-to-cloud connectivity with real-time
                      telemetry.
                    </p>
                  </div>

                  {/*  Live status badge  */}
                  <div className="flex-shrink-0">
                    <div
                      className="flex flex-col items-center gap-2.5 px-5 py-5 rounded-2xl bg-gradient-to-b from-emerald-50 to-teal-50/80 border border-emerald-200/70 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-emerald-100/50">
                      <span className="relative flex h-3.5 w-3.5">
                        <span
                          className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                        <span
                          className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 shadow-[0_0_8px_2px_rgba(52,211,153,0.4)]"></span>
                      </span>
                      <div className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.14em] text-center">
                        Registered</div>
                      <div className="text-[9px] font-bold text-emerald-500/60 uppercase tracking-widest">Active</div>
                    </div>
                  </div>
                </div>

                {/*  Elegant divider  */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px flex-1 bg-gradient-to-r from-amber-200/80 to-transparent"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-300"></div>
                  <div className="h-px flex-1 bg-gradient-to-l from-amber-200/80 to-transparent"></div>
                </div>

                {/*  Meta Tiles  */}
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 mb-10">
                  <div
                    className="group/tile relative flex flex-col gap-2 p-5 rounded-2xl bg-white border border-slate-100/80 shadow-2xl hover:shadow-lg hover:border-amber-200/80 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-default">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-50/80 opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none">
                    </div>
                    <div className="text-[8.5px] font-black text-slate-400 uppercase tracking-[0.2em] relative z-10">Design No.
                    </div>
                    <div className="font-black text-slate-800 text-lg relative z-10 tabular-nums leading-tight">470097<span
                      className="text-amber-500">-001</span></div>
                  </div>

                  <div
                    className="group/tile relative flex flex-col gap-2 p-5 rounded-2xl bg-white border border-slate-100/80 shadow-2xl hover:shadow-lg hover:border-amber-200/80 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-default">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-50/80 opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none">
                    </div>
                    <div className="text-[8.5px] font-black text-slate-400 uppercase tracking-[0.2em] relative z-10">Category
                    </div>
                    <div className="font-black text-slate-800 text-lg relative z-10 leading-tight">IoT System</div>
                  </div>

                  <div
                    className="group/tile relative flex flex-col gap-2 p-5 rounded-2xl bg-white border border-slate-100/80 shadow-2xl hover:shadow-lg hover:border-amber-200/80 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-default">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-50/80 opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none">
                    </div>
                    <div className="text-[8.5px] font-black text-slate-400 uppercase tracking-[0.2em] relative z-10">Registered
                    </div>
                    <div className="font-black text-slate-800 text-lg relative z-10 leading-tight">Aug 2025</div>
                  </div>

                  <div
                    className="group/tile relative flex flex-col gap-2 p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/80 border border-amber-200/60 shadow-2xl hover:shadow-lg hover:border-amber-300 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-default">
                    <div
                      className="absolute bottom-0 right-0 w-16 h-16 bg-amber-300/15 rounded-full blur-lg pointer-events-none">
                    </div>
                    <div className="text-[8.5px] font-black text-amber-600/60 uppercase tracking-[0.2em] relative z-10">My Role
                    </div>
                    <div className="font-black text-amber-600 text-lg relative z-10 leading-tight">Co-Inventor</div>
                  </div>
                </div>

                {/*  Actions  */}
                <div className="flex flex-wrap items-center gap-3">
                  <a href="/assets/certificates/CERTIFICATE.pdf#toolbar=0" target="_blank"
                    className="group/btn relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-sm font-black text-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/30 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                    </div>
                    <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:scale-110"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                      </path>
                    </svg>
                    <span className="relative z-10">View Patent</span>
                  </a>

                  <a href="/assets/certificates/CERTIFICATE.pdf" target="_blank"
                    className="group/pdf inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-sm font-black text-slate-600 bg-white border-2 border-slate-200 hover:border-amber-300/80 hover:bg-amber-50/60 hover:text-amber-700 hover:shadow-lg hover:shadow-amber-100 hover:-translate-y-1 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2">
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/pdf:-translate-y-0.5" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>

              {/*  RIGHT: Visual Certificate Panel (2 cols)  */}
              <div
                className="lg:col-span-2 relative flex flex-col items-center justify-center p-8 xl:p-12 bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-white overflow-hidden min-h-[400px] lg:min-h-0">

                {/*  Concentric decorative rings behind seal  */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div
                    className="w-80 h-80 rounded-full border border-amber-200/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 transition-transform duration-700">
                  </div>
                  <div
                    className="w-64 h-64 rounded-full border border-amber-300/25 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700 delay-75">
                  </div>
                  <div
                    className="w-48 h-48 rounded-full border border-amber-400/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-115 transition-transform duration-700 delay-150">
                  </div>
                </div>

                {/*  Central Seal  */}
                <div
                  className="relative z-10 flex flex-col items-center gap-5 group-hover:scale-[1.03] transition-transform duration-700 ease-out">
                  {/*  Seal ring + icon  */}
                  <div
                    className="w-36 h-36 rounded-full border-[3px] border-amber-300/60 flex items-center justify-center bg-gradient-to-br from-white to-amber-50/80 shadow-2xl shadow-amber-200/30 group-hover:border-amber-400/80 group-hover:shadow-amber-300/40 transition-all duration-700">
                    <div
                      className="w-28 h-28 rounded-full border-2 border-dashed border-amber-300/50 flex items-center justify-center group-hover:border-amber-400/70 transition-colors duration-700">
                      <svg className="w-14 h-14 text-amber-400/90 group-hover:text-amber-500 transition-colors duration-500"
                        fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    </div>
                  </div>

                  {/*  Certificate text  */}
                  <div className="text-center">
                    <div className="text-[9px] font-black text-amber-500/70 uppercase tracking-[0.25em] mb-2">Certificate of
                      Registration</div>
                    <div className="text-2xl font-black text-slate-800 tracking-tight mb-1">470097-001</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Design Patent</div>
                  </div>

                  {/*  Mini stat strip  */}
                  <div
                    className="flex items-stretch gap-px bg-amber-200/40 rounded-2xl overflow-hidden border border-amber-200/50 shadow-2xl">
                    <div className="flex flex-col items-center px-5 py-3 bg-white/90 gap-0.5">
                      <div className="text-[9px] font-black text-amber-500/70 uppercase tracking-widest">Filed</div>
                      <div className="text-base font-black text-slate-800">2025</div>
                    </div>
                    <div className="flex flex-col items-center px-5 py-3 bg-white/90 gap-0.5 border-x border-amber-200/40">
                      <div className="text-[9px] font-black text-amber-500/70 uppercase tracking-widest">Class</div>
                      <div className="text-base font-black text-slate-800">IoT</div>
                    </div>
                    <div className="flex flex-col items-center px-5 py-3 bg-white/90 gap-0.5">
                      <div className="text-[9px] font-black text-amber-500/70 uppercase tracking-widest">Status</div>
                      <div className="text-base font-black text-emerald-500">Live</div>
                    </div>
                  </div>
                </div>

                {/*  Bottom attribution  */}
                <div className="absolute bottom-5 inset-x-0 flex justify-center">
                  <div className="flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase tracking-[0.15em]">
                    <div className="w-1 h-1 rounded-full bg-amber-400/60"></div>
                    Govt. of India · Patent Office
                    <div className="w-1 h-1 rounded-full bg-amber-400/60"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/*  ─ Section Divider ─  */}
      <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>

      {/*  ── Rishvin Labs Featured Hub (Founder-Led Tech Studio Showcase V2.0) ──  */}
      <section id="rishvin-labs-hub" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden bg-[#070b16] border-t border-slate-800/80">
        {/*  Custom Technical Visual Layer (SVG Architectural Circuit Network)  */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[650px] h-[650px] bg-primary/15 rounded-full blur-[140px] opacity-40 mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[120px] opacity-35 mix-blend-screen"></div>
          {/* Custom SVG Architecture Bus Network Layer */}
          <StudioCircuitNetwork />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-[120rem]">
          {/*  Studio Hero Header — Editorial Hierarchy  */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            {/* Studio Compact Descriptor & Restrained Caveat Annotation */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-primary font-mono text-xs tracking-wider uppercase shadow-inner backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true"></span>
                Founder-Led Technology Studio
              </div>
              <span className="hidden sm:inline text-xs font-mono text-slate-500 uppercase tracking-widest">
                HYD · IN · EST. 2024
              </span>
              <div className="hidden md:inline-block pointer-events-none">
                <HandwrittenNote rotation={-2} color="accent" arrowDirection="curved-down-left" arrowPosition="left" arrowClassName="w-5 h-5" className="text-xs sm:text-sm">
                  engineering studio
                </HandwrittenNote>
              </div>
            </div>

            {/* Dominant High-Contrast Editorial Serif Headline with Scribble Underline */}
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] mb-5">
              Rishvin{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-400 to-rose-500 font-bold pb-2">
                Labs
                <span className="absolute -bottom-1 left-0 w-full block pointer-events-none" aria-hidden="true">
                  <HandUnderline variant="scribble" color="#f20d46" className="w-full h-3.5 sm:h-4" />
                </span>
              </span>
            </h2>

            {/* Tightened Outcome-Oriented Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto mb-8">
              An independent engineering venture architecting scalable SaaS platforms, automated defensive cybersecurity tooling, and edge-connected IoT devices.
            </p>

            {/* Studio Action Affordances */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <a
                href="https://rishvin-labs.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-7 py-3 rounded-xl bg-gradient-to-r from-primary to-rose-600 text-white font-semibold text-sm sm:text-base shadow-[0_0_24px_rgba(242,13,70,0.35)] hover:shadow-[0_0_36px_rgba(242,13,70,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Visit Rishvin Labs</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="/services"
                className="px-6 sm:px-7 py-3 rounded-xl bg-white/[0.06] text-white font-semibold text-sm sm:text-base border border-white/10 hover:bg-white/[0.12] hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 backdrop-blur-md flex items-center gap-2 group"
              >
                <span>Explore Services</span>
                <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Subtle Architectural Flow Indicator (Engineered Lifecycle Schematic) */}
            <div className="mt-9 max-w-xl mx-auto hidden sm:flex items-center justify-between px-5 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-slate-400" aria-hidden="true">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                01 Architecture
              </span>
              <span className="text-white/20">───→</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                02 Hardening
              </span>
              <span className="text-white/20">───→</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                03 Deployment
              </span>
            </div>
          </div>

          {/* Upgraded Studio Service Panels (01, 02, 03) — Aligned Equal Height Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {STUDIO_SERVICES.map((service) => (
              <a
                key={service.number}
                href={service.href}
                className={`group relative flex flex-col justify-between h-full rounded-2xl sm:rounded-3xl p-7 sm:p-8 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 ${service.colorClasses.borderHover} ${service.colorClasses.glow} transition-all duration-300 hover:-translate-y-1.5 motion-reduce:hover:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary backdrop-blur-md overflow-hidden text-left`}
              >
                {/* Ambient hover wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Top Eyebrow Row: Number + Interactive Motif Icon */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-2.5">
                        <span className={`font-mono text-xs font-bold tracking-widest ${service.colorClasses.number}`}>
                          {service.number}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-600" aria-hidden="true"></span>
                        <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                          {service.eyebrow}
                        </span>
                      </div>
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${service.colorClasses.iconBox}`}>
                        {service.motifSvg}
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 transition-colors group-hover:text-white">
                      {service.title}
                    </h3>

                    {/* Outcome-Oriented Description */}
                    <p className="text-slate-300/90 text-sm leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    {/* Deliverables / Capabilities Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className={`text-[11px] px-2.5 py-1 rounded-md border font-mono ${service.colorClasses.tag}`}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>

                    {/* Bottom-Aligned Navigation Affordance */}
                    <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                      <span>Explore service</span>
                      <span className="flex items-center gap-1.5 text-primary group-hover:text-primary transition-transform duration-300 group-hover:translate-x-1.5">
                        <span className="font-mono text-xs">VIEW</span>
                        <span className="font-mono text-sm">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom CTA row */}
          <div className="mt-12 sm:mt-14 text-center">
            <a
              href="/services"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-sm font-semibold text-slate-300 hover:text-white group transition-all duration-300 shadow-sm"
            >
              <span>Explore All Technical Services</span>
              <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/*  ─ Section Divider ─  */}
      <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>

      {/*  Experience Section  */}
      <ExperienceSection />



      {/*  Featured Projects (Premium UI Upgrade)  */}
      <section className="py-24 sm:py-32 bg-[#F8FAFC] relative overflow-hidden" id="projects">
        {/*  Dynamic Background Elements  */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[120rem]">
            <div
              className="absolute top-0 left-0 w-[800px] h-[800px] bg-slate-200/50 rounded-full blur-[120px] mix-blend-multiply opacity-50">
            </div>
            <div
              className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] animate-pulse delay-700 mix-blend-multiply">
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[120rem] px-6 lg:px-12">

          <div className="delay-1 scroll-reveal w-full">
            <HomeProjectGallery initialProjects={displayProjects} />
          </div>
        </div>
      </section>

      {/*  ─ Section Divider ─  */}
      <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>

      {/*  Professional Recommendations  */}
      <RecommendationsSection />

      {/*  ─ Section Divider ─  */}
      <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>

      {/* GitHub Knowledge Graph Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200" id="github-knowledge-graph">
        {/* Ambient Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[120px] mix-blend-multiply">
          </div>
          <div
            className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/5 rounded-full blur-[120px] mix-blend-multiply">
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl flex flex-col items-center text-center mb-12 scroll-reveal">
            {/* Badge */}
            <div className="mb-6 flex items-center justify-center gap-3 w-full">
              <div className="flex-1 h-px bg-gradient-to-l from-purple-200/60 to-transparent max-w-[120px]"></div>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-purple-700 bg-purple-50 border border-purple-200/70 rounded-full shadow-2xl">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></span>
                Live Ecosystem Map
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-200/60 to-transparent max-w-[120px]"></div>
            </div>
            {/* Headline */}
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-4 font-display leading-[1.05]">
              Developer<br className="sm:hidden" />
              <span className="relative inline-block mt-2 sm:mt-0">
                <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(120deg, #6366f1 0%, #a855f7 100%)" }}>
                  Knowledge Graph
                </span>
                <HandUnderline className="w-full h-3 -mt-0.5 text-indigo-400/80" strokeWidth={2.4} />
              </span>
            </h2>
            <div className="mb-6 flex items-center justify-center gap-2">
              <HandwrittenNote rotation={-2} color="purple">
                6 core domains · live graph physics
              </HandwrittenNote>
            </div>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
              An interactive network visualization of my engineering ecosystem — repositories, technologies, and domains
              connected in real-time.
            </p>
          </div>

          <div className="max-w-[120rem] mx-auto scroll-reveal delay-2">

            <KnowledgeGraph repos={rawRepos} />


          </div>
        </div>
      </section>

      {/*  Graph Stats Sync Script  */}


      {/*  Filter Script  */}


      {/*  Mermaid.js for auto-generated diagrams  */}


      {/*  Dynamic Case Study Modal (3-tab: README | File Tree | Charts)  */}


      <div id="projectModal"
        className="fixed inset-0 z-[100] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300"
        role="dialog" aria-modal="true">
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-md" data-onclick="closeProjectModal()"></div>
        <div
          className="relative w-full max-w-[90rem] flex flex-col bg-white rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] m-3 md:m-6 border border-slate-200"
          style={{ height: "92vh", maxHeight: "92vh" }}>

          {/*  Modal Hero Banner  */}
          <div id="modalBanner" className="relative flex-shrink-0 overflow-hidden rounded-t-2xl" style={{ height: "140px" }}>
            <img loading="lazy" id="modalBannerImg" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="" className="w-full h-full object-cover"
              data-onerror="this.style.opacity='0'" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/85"></div>
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-3 flex items-end justify-between">
              <div className="flex-1 min-w-0 pr-4">
                <h3 id="modalTitle" className="text-lg sm:text-xl font-black text-white font-display drop-shadow truncate">
                </h3>
                <div id="modalMeta" className="flex items-center gap-2 mt-1 text-xs text-white/75 flex-wrap"></div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a id="modalRepoLink" href="#" target="_blank"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur border border-white/30 text-white text-xs font-semibold rounded-full transition-all">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub
                </a>
                <button data-onclick="closeProjectModal()"
                  className="w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-red-500/80 backdrop-blur border border-white/30 text-white rounded-full transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/*  Tabs bar  */}
          <div
            className="flex items-center gap-2 px-5 py-2.5 border-b border-slate-100 bg-slate-50/90 backdrop-blur-md flex-shrink-0">
            <button id="tabBtn-readme" className="modal-tab-btn tab-active px-4 py-1.5 rounded-full text-xs font-bold"
              data-onclick="switchModalTab(&apos;readme&apos;,this)">📄 README</button>
            <button id="tabBtn-files"
              className="modal-tab-btn px-4 py-1.5 rounded-full text-xs font-bold text-slate-500 hover:text-slate-800"
              data-onclick="switchModalTab(&apos;files&apos;,this)">📁 Files</button>
            <button id="tabBtn-charts"
              className="modal-tab-btn px-4 py-1.5 rounded-full text-xs font-bold text-slate-500 hover:text-slate-800"
              data-onclick="switchModalTab(&apos;charts&apos;,this)">📊 Charts</button>
            <span id="modalStatsBar" className="ml-auto text-[11px] text-slate-400 font-mono hidden"></span>
          </div>

          {/*  Scrollable tab panes wrapper  */}
          <div id="modal-tab-wrap" className="flex-1 overflow-hidden">

            {/*  README Tab  */}
            <div id="tab-readme"
              className="modal-tab-pane pane-active prose prose-slate prose-base max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-2xl prose-h2:text-xl prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-1.5 prose-a:text-indigo-500 prose-a:underline-offset-4 prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-slate-200 prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-slate-800 prose-pre:rounded-xl prose-code:text-indigo-500 prose-code:bg-indigo-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-blockquote:border-l-4 prose-blockquote:border-indigo-400 prose-blockquote:bg-indigo-50/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg">
              {/*  README content injected here  */}
            </div>

            {/*  Files Tab  */}
            <div id="tab-files" className="modal-tab-pane" style={{ height: "100%" }}>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 border-b border-slate-200">
                  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                  <span className="text-sm font-semibold text-slate-700" id="fileTreeRepoName"></span>
                  <span className="ml-auto text-xs text-slate-400 font-mono">main</span>
                </div>
                <div id="fileTreeContainer" className="divide-y divide-slate-100"></div>
              </div>
            </div>

            {/*  Charts Tab  */}
            <div id="tab-charts" className="modal-tab-pane" style={{ height: "100%" }}>
              <div id="chartsContainer"></div>
            </div>

          </div>
        </div>
      </div>


      {/*  WHY CHOOSE ME — Upgraded Engineering Showcase  */}
      <section className="relative py-24 sm:py-32 bg-white overflow-hidden">

        {/* Technical Sketchbook Micro-Grid Background */}
        <div className="absolute inset-0 opacity-[0.25] pointer-events-none bg-[linear-gradient(to_right,#cbd5e135_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e135_1px,transparent_1px)] bg-[size:36px_36px]" />

        {/* Ambient Watercolor Corner Accents */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

        {/* Faint Engineering Doodle Watermarks */}
        <div className="absolute top-10 right-8 opacity-[0.08] pointer-events-none hidden lg:block -rotate-12">
          <EngineeringDoodle type="circuit" className="w-48 h-48 text-indigo-900" strokeWidth={1.2} />
        </div>
        <div className="absolute bottom-16 left-6 opacity-[0.07] pointer-events-none hidden lg:block rotate-6">
          <EngineeringDoodle type="connected-nodes" className="w-44 h-44 text-purple-900" strokeWidth={1.2} />
        </div>

        {/* Subtle top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="mx-auto max-w-[120rem] px-6 lg:px-12 relative z-10">

          {/* Two-Column Header & Cards Grid */}
          <div className="grid lg:grid-cols-[1fr_1.9fr] gap-12 lg:gap-16 items-start mb-24">

            {/* Left — Sticky Headline, Hand-drawn Notes & Guarantee */}
            <div className="lg:sticky lg:top-28 flex flex-col items-start">
              
              {/* Pillar Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-slate-700 text-[10px] font-black uppercase tracking-widest mb-6 shadow-xs">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                Engineering Philosophy &amp; Core Pillars
              </div>

              {/* Title with HandCircle & HandUnderline */}
              <h2 className="text-5xl sm:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight mb-4 font-display">
                Why<br />
                <span className="relative inline-block my-1.5">
                  <HandCircle color="#6366f1" strokeWidth={2.4}>
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(120deg, #6366f1 0%, #38bdf8 100%)" }}>
                      Choose
                    </span>
                  </HandCircle>
                </span><br />
                <span className="relative inline-block">
                  Me?
                  <HandUnderline className="w-full h-3.5 -mt-0.5 text-indigo-400" strokeWidth={2.4} />
                </span>
              </h2>

              {/* Handwritten Note Accent */}
              <div className="my-4">
                <HandwrittenNote rotation={-2} color="purple">
                  patent-backed · 0-to-1 builder
                </HandwrittenNote>
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-sm font-medium">
                Bridging low-level hardware firmware, distributed cloud systems, and defensive cybersecurity with a product-first, founder mindset.
              </p>

              {/* 4 Quick Trust Badges */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-8">
                <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200/90 shadow-xs">
                  <div className="text-[10px] font-mono uppercase font-bold text-slate-500 mb-0.5">Govt. of India</div>
                  <div className="text-sm font-black text-slate-900 flex items-center gap-1">
                    <span>IoT Patent</span>
                    <span className="text-xs text-emerald-600">✓</span>
                  </div>
                </div>
                <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200/90 shadow-xs">
                  <div className="text-[10px] font-mono uppercase font-bold text-slate-500 mb-0.5">Venture</div>
                  <div className="text-sm font-black text-slate-900">Rishvin Labs</div>
                </div>
                <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200/90 shadow-xs">
                  <div className="text-[10px] font-mono uppercase font-bold text-slate-500 mb-0.5">Enterprise</div>
                  <div className="text-sm font-black text-indigo-600">Pega BPM Intern</div>
                </div>
                <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200/90 shadow-xs">
                  <div className="text-[10px] font-mono uppercase font-bold text-slate-500 mb-0.5">Open Source</div>
                  <div className="text-sm font-black text-slate-900">50+ Repositories</div>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mb-8">
                <a href="#contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-slate-900/15">
                  Work with me
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="/resumes/SoftwareEngineering _ FullStack Resume/Software_Engineering_Full_Stack_Resume.pdf" target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-xs">
                  Resume ↗
                </a>
              </div>

              {/* Personal Signature Guarantee */}
              <div className="pt-6 border-t border-slate-200/80 w-full max-w-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 font-bold block mb-1">
                    Personal Guarantee
                  </span>
                  <RishvinSignature className="w-36 h-auto text-slate-800 -rotate-2" />
                </div>
                <span className="text-[11px] font-mono text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  100% Committed
                </span>
              </div>
            </div>

            {/* Right — 6 Upgraded Feature Cards with Engineering Doodles */}
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">

              {/* 1. Hardware & IoT Telemetry (Co-Inventor Patent) */}
              <div className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6 sm:p-7 flex flex-col justify-between">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-100/70 transition-all duration-300 shadow-xs">
                      <EngineeringDoodle type="circuit" className="w-7 h-7 text-emerald-600" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                      Govt Patent Co-Inventor
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">Hardware &amp; IoT Telemetry</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Co-inventor of an officially registered Indian Design Patent for IoT connectivity. Designing robust ESP32/ARM firmware, sensor buses, and edge-to-cloud streams.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {['#ESP32', '#IoT-Patent', '#MQTT', '#C++'].map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/80 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 2. Defensive Cybersecurity */}
              <div className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6 sm:p-7 flex flex-col justify-between">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-rose-50 rounded-2xl border border-rose-100 flex items-center justify-center text-rose-600 group-hover:scale-110 group-hover:bg-rose-100/70 transition-all duration-300 shadow-xs">
                      <EngineeringDoodle type="shield" className="w-7 h-7 text-rose-600" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200/80">
                      Zero-Trust
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">Defensive Cybersecurity</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Threat-aware design baked into every layer: cryptographic hashing, packet capture analytics, secure authentication, and vulnerability remediation from day one.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {['#OWASP', '#PacketAnalysis', '#AES-256', '#Hardening'].map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/80 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3. Full-Stack Systems Architecture */}
              <div className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6 sm:p-7 flex flex-col justify-between">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-100/70 transition-all duration-300 shadow-xs">
                      <EngineeringDoodle type="code-brackets" className="w-7 h-7 text-indigo-600" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/80">
                      High Performance
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">Full-Stack Architecture</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Reactive, accessible user experiences backed by high-throughput APIs, clean microservices, and Turbopack-powered Next.js systems engineered for sub-second responses.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {['#NextJS', '#TypeScript', '#NodeJS', '#Tailwind'].map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/80 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4. Enterprise Workflow Automation */}
              <div className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6 sm:p-7 flex flex-col justify-between">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-violet-50 rounded-2xl border border-violet-100 flex items-center justify-center text-violet-600 group-hover:scale-110 group-hover:bg-violet-100/70 transition-all duration-300 shadow-xs">
                      <EngineeringDoodle type="linked-blocks" className="w-7 h-7 text-violet-600" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200/80">
                      Enterprise Scale
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">Enterprise Workflow BPM</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Hands-on expertise with Pega Platform BPM, case management, and business logic automation from an enterprise internship at Pegasystems.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {['#PegaSystems', '#BPM', '#Automation', '#Workflows'].map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/80 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 5. 0-to-1 Product Engineering (Rishvin Labs) */}
              <div className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6 sm:p-7 flex flex-col justify-between">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-amber-50 rounded-2xl border border-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-110 group-hover:bg-amber-100/70 transition-all duration-300 shadow-xs">
                      <EngineeringDoodle type="terminal" className="w-7 h-7 text-amber-600" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80">
                      Founder Led
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">0-to-1 Product Engineering</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Founder of Rishvin Labs. Proven ability to take fuzzy specs and napkin sketches to production-ready software with speed, discipline, and clean documentation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {['#RishvinLabs', '#0-to-1', '#ProductMindset', '#FastDelivery'].map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/80 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 6. Real-Time Telemetry & Mesh Streams */}
              <div className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6 sm:p-7 flex flex-col justify-between">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-cyan-50 rounded-2xl border border-cyan-100 flex items-center justify-center text-cyan-600 group-hover:scale-110 group-hover:bg-cyan-100/70 transition-all duration-300 shadow-xs">
                      <EngineeringDoodle type="connected-nodes" className="w-7 h-7 text-cyan-600" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200/80">
                      Live Telemetry
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">Real-Time Streams &amp; Mesh</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Architecting live graph simulations, WebSocket pipelines, and distributed telemetry with real-time feedback loops and observable metrics.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {['#WebSockets', '#GraphPhysics', '#RealTime', '#Telemetry'].map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/80 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Process Timeline Strip — Upgraded with Doodles & Connectors */}
          <div className="border-t border-slate-200/80 pt-16">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] block mb-1">
                  Execution Framework
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                  My Development Methodology
                </h3>
              </div>
              
              <div className="flex items-center gap-2">
                <HandDrawnArrow direction="curved-down-right" className="w-10 h-7 text-indigo-400 hidden sm:block -mb-2" />
                <HandwrittenNote rotation={1} color="blue">
                  no guesswork · pure execution
                </HandwrittenNote>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  n: "01",
                  title: "Discover & Blueprint",
                  desc: "Threat modeling, system architecture mapping, and sensory telemetry specs.",
                  doodleType: "terminal" as const,
                  color: "from-indigo-500 to-sky-500",
                  badge: "Architecture",
                },
                {
                  n: "02",
                  title: "Rapid Prototype",
                  desc: "Interactive breadboards, firmware wiring, and end-to-end API integration.",
                  doodleType: "circuit" as const,
                  color: "from-violet-500 to-purple-500",
                  badge: "Build",
                },
                {
                  n: "03",
                  title: "Harden & Validate",
                  desc: "Security stress testing, latency profiling, and unit/integration coverage.",
                  doodleType: "shield" as const,
                  color: "from-emerald-500 to-teal-500",
                  badge: "Verify",
                },
                {
                  n: "04",
                  title: "Deploy & Observe",
                  desc: "Zero-downtime CI/CD release, real-time telemetry, and continuous tuning.",
                  doodleType: "wireless" as const,
                  color: "from-amber-500 to-orange-500",
                  badge: "Live",
                },
              ].map((step, i) => (
                <div key={i} className="group relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                        <EngineeringDoodle type={step.doodleType} className="w-5 h-5 text-slate-800" strokeWidth={1.9} />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        STEP {step.n}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-1.5 font-display">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50/80 px-2 py-0.5 rounded">
                      {step.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-300 font-bold group-hover:text-indigo-400 transition-colors">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>



      {/*  ─ Section Divider ─  */}
      <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>











      {/*  ============================================================
     UPGRADED FOOTER — Canonical Template
     Features:
       • 4-column: Brand | Explore | Resources | Connect
       • Full social icons with brand hover colors in Connect column
       • Back-to-top button (appears after 300px scroll)
       • Auto-updating copyright year via JS
       • Ambient glow orbs & scroll-reveal
     ============================================================  */}

      {/*  Back to Top Button  */}

      {/*  ============================================================
     FOOTER v2 — Ultra-Premium Canonical Template
     New features over v1:
       • Full-width CTA pre-footer strip with animated gradient
       • Animated tech/tool scrolling marquee tape
       • Newsletter signup with shake validation
       • "Currently building" live status block
       • Footer social icons with brand-glow hover rings
       • Shimmer divider between sections
       • Staggered reveal columns (CSS transitions)
       • Back-to-top button with progress-arc ring
       • Location pin with time zone live clock
     ============================================================  */}
      {/*  ============================================================
     FOOTER v2 — Ultra-Premium Canonical Template
     New features over v1:
       • Full-width CTA pre-footer strip with animated gradient
       • Animated tech/tool scrolling marquee tape
       • Newsletter signup with shake validation
       • "Currently building" live status block
       • Footer social icons with brand-glow hover rings
       • Shimmer divider between sections
       • Staggered reveal columns (CSS transitions)
       • Back-to-top button with progress-arc ring
       • Location pin with time zone live clock
     ============================================================  */}

      {/*  ── Back to Top button (with progress arc ring) ──  */}
      <button id="backToTop" aria-label="Back to top"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-slate-900 text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-slate-900/30 flex items-center justify-center opacity-0 translate-y-4 pointer-events-none transition-all duration-300 hover:bg-primary hover:scale-110 hover:shadow-primary/40 group">
        {/*  Progress ring SVG  */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/10" />
          <circle id="backToTopRing" cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2"
            strokeDasharray="163.4" strokeDashoffset="163.4"
            className="text-primary group-hover:text-white transition-colors duration-300"
            style={{ transition: "stroke-dashoffset 0.1s linear" }} />
        </svg>
        <svg className="w-5 h-5 relative z-10 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none"
          stroke="currentColor" viewBox="0 0 24 24">
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>



      {/*  ── Main Footer Body ──  */}
    </>
  );
}

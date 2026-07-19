import ResumeViewer from '@/components/ResumeViewer';
import { Metadata, Viewport } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Resume | Rishvin Labs",
  description: "View Rishvin Reddy's resume, detailing experience in software development, cybersecurity, and educational background at Woxsen University.",
  applicationName: "Rishvin Reddy Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "resume page", "Rishvin Reddy resume", "Erolla Rishvin Reddy resume", 
    "Software Engineer resume", "Cybersecurity resume", "IoT resume", "Blockchain resume",
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
    canonical: "https://rishvinreddy.github.io/resume",
    languages: {
      "en-US": "https://rishvinreddy.github.io/resume",
      "en-IN": "https://rishvinreddy.github.io/resume",
    },
  },
  openGraph: {
    title: "Resume | Rishvin Labs",
    description: "View Rishvin Reddy's resume, detailing experience in software development, cybersecurity, and educational background at Woxsen University.",
    url: "https://rishvinreddy.github.io/resume",
    siteName: "Rishvin Reddy Engineering Portfolio",
    images: [
      {
        url: "https://rishvinreddy.github.io/icon.png",
        width: 1200,
        height: 630,
        alt: "Resume | Rishvin Labs - Rishvin Reddy",
      },
      {
        url: "https://rishvinreddy.github.io/icon.png",
        width: 800,
        height: 600,
        alt: "Resume | Rishvin Labs Alternate - Rishvin Reddy",
      }
    ],
    locale: "en_IN",
    type: "website",
    emails: ["rishvinreddy@gmail.com"],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Rishvin Labs",
    description: "View Rishvin Reddy's resume, detailing experience in software development, cybersecurity, and educational background at Woxsen University.",
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


export default function Resume() {
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
              "@id": "https://rishvinreddy.github.io/resume/#webpage",
              "url": "https://rishvinreddy.github.io/resume",
              "name": "Resume | Rishvin Labs",
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

      {/*  ── Header v2 Scripts ──  */}
    

    {/*  ===== Header Spacer (since header is fixed) =====  */}
    <div className="h-12 shrink-0"></div>


  <main className="pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">


    {/*  ═══════════════════════════════════════════════
         SECTION 1 — HERO DEVELOPER PROFILE HEADER
    ════════════════════════════════════════════════  */}
    <section className="mb-10 scroll-reveal">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 shadow-2xl shadow-slate-900/30">
        {/*  Grid texture overlay  */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        {/*  Glow orbs  */}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/20 blur-[80px] pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-indigo-500/15 blur-[60px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
          {/*  Avatar  */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl">
              <img src="icon.png" alt="Rishvin Reddy" className="w-full h-full object-cover" />
            </div>
            <span className="absolute -bottom-2 -right-2 flex h-5 w-5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-slate-900"></span>
            </span>
          </div>

          {/*  Name & identity  */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Erolla Rishvin Reddy</h1>
              <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-primary/20 border border-primary/30 text-primary rounded-full">Open to Work</span>
            </div>
            <p className="text-slate-400 font-mono text-sm mb-5">IoT Engineer &amp; Full Stack Developer · AP, India</p>

            {/*  Animated Stat Counters  */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center bg-white/5 rounded-xl px-3 py-3 border border-white/10 hover:border-primary/40 transition-colors">
                <p className="text-2xl font-black text-white counter" data-target="26">0</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Repositories</p>
              </div>
              <div className="text-center bg-white/5 rounded-xl px-3 py-3 border border-white/10 hover:border-primary/40 transition-colors">
                <p className="text-2xl font-black text-white counter" data-target="18">0</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Projects Built</p>
              </div>
              <div className="text-center bg-white/5 rounded-xl px-3 py-3 border border-white/10 hover:border-primary/40 transition-colors">
                <p className="text-2xl font-black text-white counter" data-target="7">0</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Languages</p>
              </div>
              <div className="text-center bg-white/5 rounded-xl px-3 py-3 border border-white/10 hover:border-primary/40 transition-colors">
                <p className="text-2xl font-black text-white counter" data-target="3">0</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Core Domains</p>
              </div>
            </div>
          </div>

          {/*  Action links  */}
          <div className="flex flex-row md:flex-col gap-3 shrink-0">
            <a href="/ide" className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-primary text-white text-xs font-bold rounded-xl transition-all border border-white/10 hover:border-primary hover:shadow-lg hover:shadow-primary/30">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Open IDE
            </a>
            <a href="https://github.com/RishvinReddy" target="_blank" className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all border border-white/10">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    {/*  ─ Section Divider ─  */}
    <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>



    
      {/*  ───────────────────────────────────────────────────────────────────────────
           DYNAMIC RESUME VIEWER
      ───────────────────────────────────────────────────────────────────────────  */}
      <section id="dynamic-resume-section" className="mb-10 scroll-reveal">
        <div className="card-premium p-6 md:p-8 flex flex-col gap-6 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">Official Resumes</h2>
              <p className="text-sm text-slate-500 mt-1">Select a resume to view or download instantly.</p>
            </div>
            {/*  Loading indicator placeholder (if needed)  */}
          </div>
          
          <ResumeViewer />
        </div>
      </section>

      {/*  ─ Section Divider ─  */}
      <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>
      
    </main>

  {/*  === ULTIMATE CTA & NEWSLETTER (Combined Premium Footer Capstone) ===  */}
  <section className="bg-slate-900 relative pt-8 pb-8 overflow-hidden border-t border-slate-800/50">
    

    

    {/*  Infinite Scrolling Tech Marquee  */}
    <div className="mt-4 overflow-hidden relative w-full reveal"
      style={{ animationDelay: "300ms" }}>
      <div
        className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none">
      </div>
      <div
        className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none">
      </div>

      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] text-center mb-6">Expertise &
        Technologies</p>

      <div className="flex whitespace-nowrap overflow-hidden">
        {/*  Marquee Track (Double for loop)  */}
        <div className="flex items-center gap-12 sm:gap-20 min-w-max px-6" style={{ animation: "marquee 40s linear infinite" }}>
          {/*  Set 1  */}
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Python</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">React.js</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Node.js</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">AWS</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Docker</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">TypeScript</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Solidity</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">MongoDB</span>
          {/*  Set 2  */}
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Python</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">React.js</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Node.js</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">AWS</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Docker</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">TypeScript</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Solidity</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">MongoDB</span>
        </div>
      </div>
    </div>
  </section>

{/*  ── Main Footer Body ──  */}
    </>
  );
}

import React from 'react';
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Skills | Rishvin Labs",
  description: "A comprehensive list of technical skills, tools, and certifications in Full-Stack, IoT, and Cybersecurity by Rishvin Reddy.",
  applicationName: "Rishvin Reddy Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "skills page", "Rishvin Reddy skills", "Erolla Rishvin Reddy skills", 
    "Software Engineer skills", "Cybersecurity skills", "IoT skills", "Blockchain skills",
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
    canonical: "https://rishvinreddy.github.io/skills",
    languages: {
      "en-US": "https://rishvinreddy.github.io/skills",
      "en-IN": "https://rishvinreddy.github.io/skills",
    },
  },
  openGraph: {
    title: "Skills | Rishvin Labs",
    description: "A comprehensive list of technical skills, tools, and certifications in Full-Stack, IoT, and Cybersecurity by Rishvin Reddy.",
    url: "https://rishvinreddy.github.io/skills",
    siteName: "Rishvin Reddy Engineering Portfolio",
    images: [
      {
        url: "https://rishvinreddy.github.io/icon.png",
        width: 1200,
        height: 630,
        alt: "Skills | Rishvin Labs - Rishvin Reddy",
      },
      {
        url: "https://rishvinreddy.github.io/icon.png",
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
    title: "Skills | Rishvin Labs",
    description: "A comprehensive list of technical skills, tools, and certifications in Full-Stack, IoT, and Cybersecurity by Rishvin Reddy.",
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
              "@id": "https://rishvinreddy.github.io/skills/#webpage",
              "url": "https://rishvinreddy.github.io/skills",
              "name": "Skills | Rishvin Labs",
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









      {/*  HERO SECTION  */}
      <main className="flex-grow pt-32 pb-20 relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="mb-16 relative">
          {/*  Ambient background effect for hero  */}
          <div
            className="absolute -top-20 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none">
          </div>

          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 border border-slate-200 text-primary text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm shadow-sm scroll-reveal">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Engineering Arsenal
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight scroll-reveal leading-tight">
            Tools, Frameworks &<br />
            <span className="bg-gradient-to-r from-primary via-rose-500 to-indigo-600 bg-clip-text text-transparent">
              Core Expertise.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl scroll-reveal mb-10 leading-relaxed">
            A dynamically generated overview of my technical skills, pulled directly from my GitHub repositories and
            verified certifications.
          </p>

          <div className="flex flex-wrap gap-4 scroll-reveal">
            <a href="#github-stats"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 font-medium">
              View Live GitHub Stats
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3">
                </path>
              </svg>
            </a>
            <a href="#certifications"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm font-medium">
              Verified Certifications
            </a>
          </div>
        </section>

    {/*  ─ Section Divider ─  */}
    <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>



        {/*  ── Intellectual Property Spotlight ──  */}
        <section className="mb-16 scroll-reveal">
          <div
            className="relative overflow-hidden rounded-3xl bg-white border border-yellow-400/40 p-8 shadow-2xl shadow-yellow-500/10 flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none"></div>
            <div
              className="absolute -right-10 -bottom-20 w-80 h-80 bg-yellow-400/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-yellow-400/25 transition-all duration-700">
            </div>

            <div className="relative z-10 max-w-2xl">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 border border-yellow-200 text-yellow-800 text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                🏅 Registered Patent
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-3">Govt. of
                India Design Patent</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Co-inventor of an innovative <strong className="text-slate-800">IoT Connectivity Device</strong>. Officially
                registered design protecting the unique form factor and hardware schema (Design No. 470097-001).
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">Class
                  14-02</span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">IoT
                  Hardware</span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Registered</span>
              </div>
            </div>

            <div className="relative z-10 shrink-0">
              <a href="assets/certificates/CERTIFICATE.pdf" target="_blank"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 border border-slate-800 text-white font-bold rounded-2xl shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 hover:bg-primary hover:border-primary transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Certificate
              </a>
            </div>
          </div>
        </section>

    {/*  ─ Section Divider ─  */}
    <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>



        {/*  Two-column: Dynamic Skills Graph and Tools Bento  */}
        <section id="github-stats" className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/*  LEFT: GitHub Language Chart  */}
          <div
            className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 p-8 shadow-xl shadow-slate-200/40 hover-float scroll-reveal relative overflow-hidden group">
            <div
              className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500">
            </div>

            <div className="flex items-center justify-between mb-8 relative z-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Language Graph
                </h2>
                <p className="mt-1 text-sm text-slate-500">Live breakdown from my public GitHub
                  repositories.</p>
              </div>
            </div>

            <div className="relative h-64 w-full flex items-center justify-center">
              <canvas id="skillsChart"></canvas>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6 relative z-10">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Detected Languages</h3>
              <div id="languagesList" className="flex flex-wrap gap-2">
                {/*  Populated by JS  */}
                <div className="animate-pulse w-16 h-7 bg-slate-200 rounded-full"></div>
                <div className="animate-pulse w-20 h-7 bg-slate-200 rounded-full"></div>
                <div className="animate-pulse w-14 h-7 bg-slate-200 rounded-full"></div>
              </div>
            </div>
          </div>

          {/*  RIGHT: Auto-Generated Tools Bento Grid  */}
          <aside
            className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 p-8 shadow-xl shadow-slate-200/40 hover-float scroll-reveal flex flex-col">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Tools & Frameworks</h2>
              <p className="mt-1 text-sm text-slate-500">Dynamically detected from repo structures and
                topics.</p>
            </div>

            <div id="toolsGrid" className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 flex-grow content-start">
              {/*  Populated by JS  */}
              <div className="animate-pulse h-12 bg-slate-200 rounded-xl"></div>
              <div className="animate-pulse h-12 bg-slate-200 rounded-xl"></div>
              <div className="animate-pulse h-12 bg-slate-200 rounded-xl"></div>
              <div className="animate-pulse h-12 bg-slate-200 rounded-xl"></div>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z">
                  </path>
                </svg>
                System Architectures
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> Design thinking & rapid prototyping
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> Microservices & edge computing pipelines
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> Secure-by-design & threat modelling
                </li>
              </ul>
            </div>
          </aside>
        </section>

    {/*  ─ Section Divider ─  */}
    <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>



        {/*  Certifications Grid (Dynamic)  */}
        <section id="certifications" className="mb-20">
          <div className="mb-12 scroll-reveal text-center">
            <h2 className="text-3xl font-bold text-slate-900">Certifications</h2>
            <p className="mt-2 text-slate-500">Verified achievements & continuous learning.</p>
          </div>

          <div id="certificationsContainer" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
            {/*  Dynamically loaded from data/certifications.json  */}
            {/*  Loading skeleton  */}
            <article id="certLoadingSkeleton"
              className="rounded-3xl bg-white/50 p-6 shadow-xl shadow-slate-200/30 border border-slate-100 animate-pulse">
              <div className="aspect-video rounded-xl bg-slate-200 mb-5"></div>
              <div className="h-6 w-3/4 bg-slate-200 rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-slate-200 rounded mb-5"></div>
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-slate-200 rounded-full"></div>
                <div className="h-6 w-20 bg-slate-200 rounded-full"></div>
              </div>
            </article>
          </div>
        </section>



        {/*  Short Projects / Evidence  */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-sm text-gray-600 mb-6">Top algorithms, architectures, and systems built from scratch — click to explore on GitHub.</p>
          <div id="selectedEvidenceContainer" className="scroll-reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-stagger-list>
            {/*  Dynamically populated by JS (initSkillsPage)  */}
          </div>
        </section>

    {/*  ─ Section Divider ─  */}
    <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>



        {/*  Footer CTA  */}
        <section
          className="rounded-3xl bg-primary/5 border border-primary/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Want the full skills matrix or certificates?</h3>
            <p className="text-sm text-gray-600 mt-1">I can share verified PDF certificates, GitHub repos and technical
              reports on request.</p>
          </div>
          <div className="flex gap-3">
            <a href="Resume_page.html?download=true"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary shadow-sm">Download
              Resume</a>
            <a href="Contact_page.html"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-800">Request
              documents</a>
          </div>
        </section>


    {/*  small JS for subtle animation (progress bars)  */}
    
    </main>
    </>
  );
}

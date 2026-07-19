import React from 'react';
import { Metadata, Viewport } from "next";

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
  authors: [{ name: "Erolla Rishvin Reddy", url: "https://rishvinreddy.github.io" }],
  creator: "Erolla Rishvin Reddy",
  publisher: "Rishvin Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://rishvinreddy.github.io/awards",
    languages: {
      "en-US": "https://rishvinreddy.github.io/awards",
      "en-IN": "https://rishvinreddy.github.io/awards",
    },
  },
  openGraph: {
    title: "Awards | Rishvin Labs",
    description: "Awards, hackathon wins, and recognitions earned by Rishvin Reddy in software engineering and technology.",
    url: "https://rishvinreddy.github.io/awards",
    siteName: "Rishvin Reddy Engineering Portfolio",
    images: [
      {
        url: "https://rishvinreddy.github.io/icon.png",
        width: 1200,
        height: 630,
        alt: "Awards | Rishvin Labs - Rishvin Reddy",
      },
      {
        url: "https://rishvinreddy.github.io/icon.png",
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
              "@id": "https://rishvinreddy.github.io/awards/#webpage",
              "url": "https://rishvinreddy.github.io/awards",
              "name": "Awards | Rishvin Labs",
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


    <main className="flex-grow bg-background-light">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

        {/* Header */}
        <div className="text-center scroll-reveal">
          <p className="text-base font-semibold uppercase tracking-wider text-primary">Achievements</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
            Awards &amp; Recognition
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-600">
            A collection of notable milestones and recognitions that reflect my work ethic, engineering mindset, and
            commitment to building impactful solutions.
          </p>
        </div>

        {/*  ── Intellectual Property Spotlight ──  */}
        <div className="mt-16 mb-8 scroll-reveal">
          <div className="relative overflow-hidden rounded-3xl bg-white border border-yellow-400/40 p-8 shadow-2xl shadow-yellow-500/10 flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none"></div>
            <div className="absolute -right-10 -bottom-20 w-80 h-80 bg-yellow-400/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-yellow-400/25 transition-all duration-700"></div>
            
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 border border-yellow-200 text-yellow-800 text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                🏅 Registered Design Patent
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-3">Government of India Registration</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Co-inventor of an innovative <strong className="text-slate-800">IoT Connectivity Device</strong>. Officially registered design protecting the unique form factor and hardware schema (Design No. 470097-001).
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">Class 14-02</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">IoT Hardware</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Granted & Registered</span>
              </div>
            </div>

            <div className="relative z-10 shrink-0">
              <a href="assets/certificates/CERTIFICATE.pdf" target="_blank"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 border border-slate-800 text-white font-bold rounded-2xl shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 hover:bg-primary hover:border-primary transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                View Certificate
              </a>
            </div>
          </div>
        </div>

        {/*  Awards Grid  */}
        <div className="scroll-reveal mt-20 grid gap-12 md:grid-cols-2" data-stagger-list>

          {/*  Award 1  */}
          <div
            className="group rounded-3xl bg-white shadow-lg overflow-hidden border border-gray-100 transition hover-float scroll-reveal">
            <div className="relative h-56 overflow-hidden">
              <img src="https://i.postimg.cc/3xq0v6vW/award-placeholder.jpg" alt="Award Image"
                className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                {/*  trophy icon  */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8 21h8" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M7 7V4h10v3a4 4 0 01-4 4H11a4 4 0 01-4-4z" strokeWidth="1.6" />
                  <path d="M5 7a7 7 0 01-2 5v2a3 3 0 003 3h12a3 3 0 003-3v-2a7 7 0 01-2-5" strokeWidth="1.3"
                    strokeLinecap="round" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-zinc-900">
                Best Project Ideas & Problem-Solving Award
              </h3>

              <p className="mt-3 text-zinc-600 text-sm leading-relaxed">
                Recognized by the School of Technology at Woxsen University for outstanding performance in innovation,
                conceptual clarity, and problem-solving across multiple academic projects.
              </p>

              <div className="mt-4 flex items-center gap-3 text-xs">
                <span
                  className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Woxsen
                  University</span>
                <span
                  className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">2024</span>
              </div>

              <a href="/certificates/best-project.pdf"
                className="mt-5 inline-block text-primary font-medium text-sm hover:underline">
                View Certificate
              </a>
            </div>
          </div>

          {/*  Award 2  */}
          <div
            className="group rounded-3xl bg-white shadow-lg overflow-hidden border border-gray-100 transition hover-float scroll-reveal">
            <div className="relative h-56 overflow-hidden">
              <img src="https://i.postimg.cc/3xq0v6vW/achievement-placeholder.jpg" alt="Achievement Image"
                className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                {/*  star / excellence icon  */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" strokeWidth="1.4" strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-zinc-900">
                Academic Excellence Recognition
              </h3>

              <p className="mt-3 text-zinc-600 text-sm leading-relaxed">
                Honored for consistent academic performance and contributions to innovative coursework within Computer
                Science Engineering (IoT, Blockchain & Cyber Security specialisation).
              </p>

              <div className="mt-4 flex items-center gap-3 text-xs">
                <span
                  className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Woxsen
                  University</span>
                <span
                  className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">2023</span>
              </div>

              <a href="/certificates/academic-excellence.pdf"
                className="mt-5 inline-block text-primary font-medium text-sm hover:underline">
                View Certificate
              </a>
            </div>
          </div>

        </div>

        {/*  Simple Timeline (Only 1 Item Left)  */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-zinc-900">Recognition Timeline</h2>

          <ol className="mt-6 border-l border-gray-300 pl-6 space-y-6">

            {/*  Only the Award Timeline Left  */}
            <li>
              <div className="flex items-start gap-4">
                <span className="w-3 h-3 mt-2 bg-primary rounded-full"></span>
                <div>
                  <p className="font-semibold text-gray-900">2024 — Best Project Ideas & Problem-Solving</p>
                  <p className="text-sm text-gray-600">Awarded by School of Technology, Woxsen
                    University.</p>
                </div>
              </div>
            </li>

          </ol>
        </div>

      </div>
    </main>
    </>
  );
}

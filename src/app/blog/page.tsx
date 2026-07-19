import React from 'react';
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Blog | Rishvin Labs",
  description: "Read Rishvin Reddy's technical articles and insights on responsive design, artificial intelligence, IoT, and software engineering.",
  applicationName: "Rishvin Reddy Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "blog page", "Rishvin Reddy blog", "Erolla Rishvin Reddy blog", 
    "Software Engineer blog", "Cybersecurity blog", "IoT blog", "Blockchain blog",
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
    canonical: "https://rishvinreddy.github.io/blog",
    languages: {
      "en-US": "https://rishvinreddy.github.io/blog",
      "en-IN": "https://rishvinreddy.github.io/blog",
    },
  },
  openGraph: {
    title: "Blog | Rishvin Labs",
    description: "Read Rishvin Reddy's technical articles and insights on responsive design, artificial intelligence, IoT, and software engineering.",
    url: "https://rishvinreddy.github.io/blog",
    siteName: "Rishvin Reddy Engineering Portfolio",
    images: [
      {
        url: "https://rishvinreddy.github.io/icon.png",
        width: 1200,
        height: 630,
        alt: "Blog | Rishvin Labs - Rishvin Reddy",
      },
      {
        url: "https://rishvinreddy.github.io/icon.png",
        width: 800,
        height: 600,
        alt: "Blog | Rishvin Labs Alternate - Rishvin Reddy",
      }
    ],
    locale: "en_IN",
    type: "website",
    emails: ["rishvinreddy@gmail.com"],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Rishvin Labs",
    description: "Read Rishvin Reddy's technical articles and insights on responsive design, artificial intelligence, IoT, and software engineering.",
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


export default function Blog() {
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
              "@id": "https://rishvinreddy.github.io/blog/#webpage",
              "url": "https://rishvinreddy.github.io/blog",
              "name": "Blog | Rishvin Labs",
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


    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">

        {/*  Header  */}
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Articles &amp; Insights</h2>
          <p className="mt-4 text-lg text-gray-600">Writing about UX, IoT, Blockchain, Cyber Security, and product
            engineering — practical guides, case studies and technical deep dives.</p>
        </div>

        {/*  Centered Search + Filters  */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="w-full md:w-3/4 lg:w-2/3 relative">
            <label htmlFor="blog-search" className="sr-only">Search articles</label>
            <input id="blog-search" type="search"
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition"
              placeholder="Search articles, case studies or topics (e.g. 'AgroHub', 'Biometric', 'IoT')" />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true">
              {/*  Search SVG  */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"></path>
              </svg>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-center text-sm">
            <button className="px-4 py-2 rounded-full bg-primary text-white font-medium shadow-sm btn-shine">All</button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">UX</button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">IoT</button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Blockchain</button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Security</button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Case Studies</button>
          </div>
        </div>

        {/*  Grid of posts  */}
        <div className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-stagger-list>

          {/*  Article Card (1)  */}
          <article
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-md hover-float scroll-reveal">
            <a href="blog/future-of-ux-2024.html" className="relative block aspect-[16/10] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526378721752-2d31f0b6b6d7?q=80&w=1600&auto=format&fit=crop&crop=faces"
                alt="Future of UX"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span
                className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800">
                {/*  UX icon  */}
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                    d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0"></path>
                </svg>
                UX Trends
              </span>
            </a>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                <a href="blog/future-of-ux-2024.html" className="hover:underline">The Future of UX: Trends to Watch in
                  2024</a>
              </h3>

              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                Practical predictions and design patterns I expect will shape product thinking next year —
                micro-interactions, privacy-first UX, AI-assisted flows and more.
              </p>

              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <img src="icon.png" alt="Rishvin Reddy"
                    className="w-7 h-7 rounded-full object-cover" />
                  <div>
                    <div className="font-medium text-gray-800">Rishvin Reddy</div>
                    <div className="text-xs text-gray-500">Nov 11, 2025 • 6 min read</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">UX</span>
                </div>
              </div>

              <div className="mt-4">
                <a href="blog/future-of-ux-2024.html" className="inline-flex items-center gap-2 text-primary font-medium">
                  Read article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/*  Article Card (2)  */}
          <article
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-md hover-float scroll-reveal">
            <a href="blog/design-thinking-guide.html" className="relative block aspect-[16/10] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
                alt="Design Thinking"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span
                className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01z"></path>
                </svg>
                Process
              </span>
            </a>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                <a href="blog/design-thinking-guide.html" className="hover:underline">Design Thinking: A Practical Guide</a>
              </h3>

              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                A step-by-step walkthrough of discovery, ideation and validation — how I run workshops, rapid prototypes
                and measure outcomes.
              </p>

              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <img src="icon.png" alt="Rishvin Reddy"
                    className="w-7 h-7 rounded-full object-cover" />
                  <div>
                    <div className="font-medium text-gray-800">Rishvin Reddy</div>
                    <div className="text-xs text-gray-500">Oct 2, 2025 • 8 min read</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">Process</span>
                </div>
              </div>

              <div className="mt-4">
                <a href="blog/design-thinking-guide.html"
                  className="inline-flex items-center gap-2 text-primary font-medium">
                  Read article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/*  Article Card (3)  */}
          <article
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-md hover-float scroll-reveal">
            <a href="blog/mobile-redesign-case-study.html" className="relative block aspect-[16/10] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
                alt="Mobile App Redesign"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span
                className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800">
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M7 20h10M7 4h10v12H7z">
                  </path>
                </svg>
                Case Study
              </span>
            </a>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                <a href="blog/mobile-redesign-case-study.html" className="hover:underline">Case Study: Mobile App
                  Redesign</a>
              </h3>

              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                End-to-end redesign of a banking mobile app — discovery, accessibility improvements and measurable
                uplift in task success.
              </p>

              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <img src="icon.png" alt="Rishvin Reddy"
                    className="w-7 h-7 rounded-full object-cover" />
                  <div>
                    <div className="font-medium text-gray-800">Rishvin Reddy</div>
                    <div className="text-xs text-gray-500">Aug 14, 2025 • 10 min read</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">Mobile</span>
                </div>
              </div>

              <div className="mt-4">
                <a href="blog/mobile-redesign-case-study.html"
                  className="inline-flex items-center gap-2 text-primary font-medium">
                  Read case study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/*  Add more cards below repeating the same pattern for other posts...  */}

        </div>

        {/*  Pagination  */}
        <div className="flex items-center justify-center mt-12 pt-8 border-t border-gray-100">
          <nav className="flex items-center gap-3">
            <a className="flex items-center justify-center w-9 h-9 rounded-full bg-white border text-gray-600 hover:bg-gray-50"
              href="?page=0" aria-label="Previous">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </a>
            <a className="w-9 h-9 rounded-full bg-primary text-white inline-grid place-items-center font-medium"
              href="?page=1">1</a>
            <a className="w-9 h-9 rounded-full bg-white border text-gray-700 hover:bg-gray-50 inline-grid place-items-center"
              href="?page=2">2</a>
            <a className="w-9 h-9 rounded-full bg-white border text-gray-700 hover:bg-gray-50 inline-grid place-items-center"
              href="?page=3">3</a>
            <span className="px-2 text-gray-500">…</span>
            <a className="w-9 h-9 rounded-full bg-white border text-gray-700 hover:bg-gray-50 inline-grid place-items-center"
              href="?page=8">8</a>
            <a className="flex items-center justify-center w-9 h-9 rounded-full bg-white border text-gray-600 hover:bg-gray-50"
              href="?page=2" aria-label="Next">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </nav>
        </div>

        {/*  CTA  */}
        <div className="mt-16 bg-white rounded-3xl shadow-lg p-10 text-center scroll-reveal">
          <h3 className="text-2xl font-bold text-gray-900">Have a topic idea or project?</h3>
          <p className="mt-3 text-gray-600">If you&apos;d like a walkthrough, a case study or collaboration on a topic — let&apos;s
            talk. I&apos;m available for guest posts and consultations.</p>
          <a href="Contact_page.html"
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:shadow-lg btn-shine">
            Get in touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>

      </div>
    </main>
    </>
  );
}

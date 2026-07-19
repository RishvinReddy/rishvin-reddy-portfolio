import React from 'react';
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "About | Rishvin Labs",
  description: "Meet Rishvin Reddy, a B.Tech Computer Science and Engineering student at Woxsen University building across cybersecurity, IoT, blockchain, full-stack systems, and engineering automation. Founder of Rishvin Labs.",
  applicationName: "Rishvin Reddy Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "about page", "Rishvin Reddy about", "Erolla Rishvin Reddy about", 
    "Software Engineer about", "Cybersecurity about", "IoT about", "Blockchain about",
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
    canonical: "https://rishvinreddy.github.io/about",
    languages: {
      "en-US": "https://rishvinreddy.github.io/about",
      "en-IN": "https://rishvinreddy.github.io/about",
    },
  },
  openGraph: {
    title: "About | Rishvin Labs",
    description: "Meet Rishvin Reddy, a B.Tech Computer Science and Engineering student at Woxsen University building across cybersecurity, IoT, blockchain, full-stack systems, and engineering automation. Founder of Rishvin Labs.",
    url: "https://rishvinreddy.github.io/about",
    siteName: "Rishvin Reddy Engineering Portfolio",
    images: [
      {
        url: "https://rishvinreddy.github.io/icon.png",
        width: 1200,
        height: 630,
        alt: "About | Rishvin Labs - Rishvin Reddy",
      },
      {
        url: "https://rishvinreddy.github.io/icon.png",
        width: 800,
        height: 600,
        alt: "About | Rishvin Labs Alternate - Rishvin Reddy",
      }
    ],
    locale: "en_IN",
    type: "website",
    emails: ["rishvinreddy@gmail.com"],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Rishvin Labs",
    description: "Meet Rishvin Reddy, a B.Tech Computer Science and Engineering student at Woxsen University building across cybersecurity, IoT, blockchain, full-stack systems, and engineering automation. Founder of Rishvin Labs.",
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


export default function About() {
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
              "@id": "https://rishvinreddy.github.io/about/#webpage",
              "url": "https://rishvinreddy.github.io/about",
              "name": "About | Rishvin Labs",
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
    <div className="h-2 shrink-0"></div>


    {/*  ===========================
     ABOUT — The Narrative Flow (Hero -> Stats -> Story -> Tech -> Impact)
     ===========================  */}
    <main className="flex-grow pt-2">
  {/*  2. Hero  */}
  <section className="min-h-[92vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200/50 via-slate-50 to-transparent -z-10 opacity-70">
    </div>
    <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase shadow-lg animate-fade-in-up">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      Engineering · Security · Connected Systems
    </div>
    <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter text-slate-900 mb-8 leading-[0.98] animate-fade-in-up">
      I engineer systems where
      <br className="hidden md:block" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-indigo-600">
        software meets the real world.
      </span>
    </h1>
    <p className="text-lg md:text-2xl text-slate-500 font-medium max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
      I’m Rishvin Reddy — a Computer Science and Engineering student,
      systems builder, and founder working across
      <strong className="text-slate-800">cybersecurity, IoT, blockchain, full-stack engineering, and automation.</strong>
    </p>
    <p className="mt-6 text-base md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
      My focus is not technology for its own sake. I care about architecture,
      security, reliability, and whether a system can survive beyond the demo.
    </p>
    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
      <a href="Portfolio_page.html"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 text-white font-bold hover:-translate-y-1 transition-all duration-300 shadow-xl">
        Explore My Work
        <i className="fa-solid fa-arrow-right text-xs"></i>
      </a>
      <a href="/resume"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-slate-200 text-slate-800 font-bold hover:border-primary/40 hover:text-primary hover:-translate-y-1 transition-all duration-300 shadow-sm">
        View Resume
      </a>
    </div>
  </section>

  {/*  3. At a Glance  */}
  <section className="px-6 pb-24">
    <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/30">
        <div className="bg-white p-8 text-center">
          <p className="text-3xl md:text-4xl font-black text-slate-900">9.01</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            CGPA / 10
          </p>
        </div>
        <div className="bg-white p-8 text-center">
          <p className="text-3xl md:text-4xl font-black text-slate-900">2028</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            Expected Graduation
          </p>
        </div>
        <div className="bg-white p-8 text-center">
          <p className="text-3xl md:text-4xl font-black text-slate-900">01</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            Design Patent Milestone
          </p>
        </div>
        <div className="bg-white p-8 text-center">
          <p className="text-3xl md:text-4xl font-black text-slate-900">04+</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            Core Engineering Domains
          </p>
        </div>
      </div>
    </div>
  </section>

  {/*  4. The Story  */}
  <section className="py-32 mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative scroll-reveal">
    <div className="sticky top-32 mb-16 md:mb-0 md:absolute md:w-[40%] z-10">
      <span className="text-primary font-extrabold tracking-widest uppercase text-sm mb-3 block">
        My Journey
      </span>
      <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
        From curiosity
        <br />
        to systems.
      </h2>
      <p className="mt-6 text-slate-500 max-w-sm leading-relaxed">
        A progression from learning how technology works to engineering how
        interconnected systems should behave.
      </p>
    </div>
    <div className="md:w-1/2 md:ml-auto space-y-32">
      <article className="scroll-reveal">
        <span className="text-xs font-mono text-primary uppercase tracking-widest">
          01 · Foundations
        </span>
        <h3 className="text-3xl font-black text-slate-900 mt-4 mb-5">
          Curiosity came first.
        </h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          I began by trying to understand how software works beneath the interface:
          how data moves, how applications make decisions, how systems fail, and
          how individual components become complete products.
        </p>
      </article>
      <article className="scroll-reveal">
        <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest">
          02 · Expansion
        </span>
        <h3 className="text-3xl font-black text-slate-900 mt-4 mb-5">
          Software became systems engineering.
        </h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          As my work expanded into cybersecurity, IoT, databases, blockchain,
          backend systems, and full-stack development, I became more interested
          in the relationships between components than isolated technologies.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mt-5">
          A sensor is only useful when its data pipeline is reliable. Authentication
          is only meaningful when the surrounding application is secure. Automation
          is only valuable when failure states are observable and recoverable.
        </p>
      </article>
      <article className="scroll-reveal p-10 bg-white/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-white/60 rounded-3xl relative overflow-hidden">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-indigo-100">
          Intellectual Property Milestone
        </span>
        <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
          Moving from implementation to invention.
        </h3>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
          A major milestone in my journey was my work on an IoT Connectivity Device
          that reached the design-patent process in India. The experience strengthened
          my interest in connected systems and changed how I approached engineering:
          not simply as writing code, but as designing complete technical solutions.
        </p>
      </article>
      <article className="scroll-reveal">
        <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest">
          04 · Today
        </span>
        <h3 className="text-3xl font-black text-slate-900 mt-4 mb-5">
          Now I build across boundaries.
        </h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          Today, I work across software engineering, cybersecurity, connected
          devices, blockchain systems, and engineering automation while pursuing
          my B.Tech in Computer Science and Engineering at Woxsen University.
        </p>
        <div className="mt-8 p-7 border-l-4 border-primary bg-primary/5 rounded-r-2xl">
          <p className="text-xl font-black text-slate-900 leading-relaxed">
            I am not trying to collect technologies.
            I am learning how to combine them into systems that work.
          </p>
        </div>
      </article>
    </div>
  </section>

  {/*  5. Education  */}
  <section className="py-24 px-6">
    <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="scroll-reveal">
          <span className="text-primary font-extrabold tracking-widest uppercase text-sm">
            Education
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 leading-tight">
            Building depth
            <br />
            across disciplines.
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            My academic path combines computer science fundamentals with
            cybersecurity, connected systems, and decentralized technologies.
            I use coursework as a foundation, then extend it through projects,
            experiments, and independent engineering.
          </p>
        </div>
        <div className="scroll-reveal bg-slate-900 text-white rounded-[2rem] p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full">
          </div>
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              2024 — 2028
            </p>
            <h3 className="text-3xl font-black mt-4">
              B.Tech in Computer Science and Engineering
            </h3>
            <p className="text-slate-300 mt-3 leading-relaxed">
              Blockchain, IoT & Cybersecurity
            </p>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-lg font-bold">
                Woxsen University
              </p>
              <div className="mt-6 flex items-end gap-3">
                <span className="text-5xl font-black text-white">
                  9.01
                </span>
                <span className="text-slate-400 pb-1">
                  / 10 CGPA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  6. Engineering Domains  */}
  <section className="py-32 bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-10 my-10 px-6 relative overflow-hidden">
    <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/20 blur-[120px] rounded-full pointer-events-none">
    </div>
    <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none">
    </div>
    <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mb-20 scroll-reveal">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-bold tracking-widest uppercase text-xs mb-6">
          Engineering Domains
        </span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05]">
          I work where systems
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            intersect.
          </span>
        </h2>
        <p className="mt-7 text-lg text-slate-400 max-w-3xl leading-relaxed">
          My strongest work happens at the boundaries between disciplines:
          software and hardware, security and usability, automation and reliability,
          experimentation and production engineering.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-primary flex items-center justify-center mb-7">
            <i className="fa-solid fa-shield-halved text-white text-xl"></i>
          </div>
          <p className="text-xs uppercase tracking-widest text-rose-300 font-bold">
            Security
          </p>
          <h3 className="text-2xl font-black mt-3 mb-4">
            Cybersecurity Engineering
          </h3>
          <p className="text-slate-400 leading-relaxed">
            Exploring secure authentication, attack-surface visibility,
            vulnerability workflows, web security, digital forensics,
            threat intelligence, and security automation.
          </p>
        </article>
        <article className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center mb-7">
            <i className="fa-solid fa-microchip text-white text-xl"></i>
          </div>
          <p className="text-xs uppercase tracking-widest text-orange-300 font-bold">
            Connected Systems
          </p>
          <h3 className="text-2xl font-black mt-3 mb-4">
            IoT & Embedded Prototyping
          </h3>
          <p className="text-slate-400 leading-relaxed">
            Building sensor-driven systems that connect physical devices,
            control logic, communication layers, dashboards, and
            real-world operational workflows.
          </p>
        </article>
        <article className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center mb-7">
            <i className="fa-solid fa-code text-white text-xl"></i>
          </div>
          <p className="text-xs uppercase tracking-widest text-blue-300 font-bold">
            Software
          </p>
          <h3 className="text-2xl font-black mt-3 mb-4">
            Full-Stack Systems
          </h3>
          <p className="text-slate-400 leading-relaxed">
            Designing applications across frontend interfaces,
            backend services, APIs, databases, authentication,
            deployment, and operational concerns.
          </p>
        </article>
        <article className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center mb-7">
            <i className="fa-solid fa-cubes text-white text-xl"></i>
          </div>
          <p className="text-xs uppercase tracking-widest text-violet-300 font-bold">
            Decentralized Systems
          </p>
          <h3 className="text-2xl font-black mt-3 mb-4">
            Blockchain Engineering
          </h3>
          <p className="text-slate-400 leading-relaxed">
            Studying decentralized architectures, smart-contract systems,
            trust models, blockchain-backed applications, and where
            distributed ledgers create genuine technical value.
          </p>
        </article>
      </div>
    </div>
  </section>

  {/*  7. Selected Systems  */}
  <section className="py-32 px-6">
    <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
        <div className="scroll-reveal">
          <span className="text-primary font-extrabold tracking-widest uppercase text-sm">
            Selected Systems
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mt-4 leading-[1.05]">
            Ideas become
            <br />
            architectures.
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            My projects span different domains, but the recurring theme is systems
            thinking: multiple components, explicit data flows, operational constraints,
            and measurable outcomes.
          </p>
          <a href="Portfolio_page.html"
            className="inline-flex items-center gap-2 mt-8 text-primary font-bold group">
            Explore complete portfolio
            <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
        <div className="space-y-4">
          <article className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all">
            <div className="flex gap-5">
              <span className="font-mono text-xs text-primary pt-1">
                01
              </span>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  AI Security Guardian
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  A security automation architecture exploring asset discovery,
                  attack-surface analysis, vulnerability workflows, threat intelligence,
                  normalization, orchestration, and multi-tenant security operations.
                </p>
              </div>
            </div>
          </article>
          <article className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all">
            <div className="flex gap-5">
              <span className="font-mono text-xs text-primary pt-1">
                02
              </span>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Smart Irrigation & Soil Monitoring
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  An IoT prototype combining environmental sensing,
                  automated control logic, irrigation actuation,
                  monitoring, and connected-device design.
                </p>
              </div>
            </div>
          </article>
          <article className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all">
            <div className="flex gap-5">
              <span className="font-mono text-xs text-primary pt-1">
                03
              </span>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  VoteSafe Biometric Voting System
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  A connected voting-system prototype combining fingerprint identity,
                  embedded hardware, Wi-Fi communication, backend services,
                  and database-backed workflows.
                </p>
              </div>
            </div>
          </article>
          <article className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all">
            <div className="flex gap-5">
              <span className="font-mono text-xs text-primary pt-1">
                04
              </span>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  AI Content Factory
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  A workflow-driven content automation system designed around
                  orchestration, persistence, idempotency, error handling,
                  observability, and recoverable execution.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  {/*  8. How I Engineer  */}
  <section className="py-32 px-6 bg-slate-50">
    <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <span className="inline-block px-3 py-1 bg-white text-slate-600 font-extrabold tracking-widest uppercase text-xs rounded-full mb-6 border border-slate-200">
          Engineering Principles
        </span>
        <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.05]">
          How I approach
          <br />
          technical problems.
        </h2>
        <p className="mt-7 text-lg text-slate-600 leading-relaxed">
          I am developing an engineering philosophy centered on reliability,
          explicit trade-offs, security, and systems that remain understandable
          as complexity grows.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="p-8 bg-white border border-slate-200 rounded-3xl">
          <span className="font-mono text-xs text-primary">01</span>
          <h3 className="text-xl font-black text-slate-900 mt-5">
            Understand before automating
          </h3>
          <p className="text-slate-500 mt-3 leading-relaxed">
            Automation should encode a understood process, not hide a broken one.
          </p>
        </article>
        <article className="p-8 bg-white border border-slate-200 rounded-3xl">
          <span className="font-mono text-xs text-indigo-500">02</span>
          <h3 className="text-xl font-black text-slate-900 mt-5">
            Security is architectural
          </h3>
          <p className="text-slate-500 mt-3 leading-relaxed">
            Authentication, authorization, secrets, validation, and auditability
            should be designed into the system.
          </p>
        </article>
        <article className="p-8 bg-white border border-slate-200 rounded-3xl">
          <span className="font-mono text-xs text-emerald-500">03</span>
          <h3 className="text-xl font-black text-slate-900 mt-5">
            Design for failure
          </h3>
          <p className="text-slate-500 mt-3 leading-relaxed">
            Retries, idempotency, state transitions, and recovery paths matter
            because real systems fail.
          </p>
        </article>
        <article className="p-8 bg-white border border-slate-200 rounded-3xl">
          <span className="font-mono text-xs text-orange-500">04</span>
          <h3 className="text-xl font-black text-slate-900 mt-5">
            Make systems observable
          </h3>
          <p className="text-slate-500 mt-3 leading-relaxed">
            Logs, metrics, explicit states, and useful failure information
            reduce operational ambiguity.
          </p>
        </article>
        <article className="p-8 bg-white border border-slate-200 rounded-3xl">
          <span className="font-mono text-xs text-violet-500">05</span>
          <h3 className="text-xl font-black text-slate-900 mt-5">
            Prefer clarity over cleverness
          </h3>
          <p className="text-slate-500 mt-3 leading-relaxed">
            Maintainable systems outperform impressive but opaque implementations.
          </p>
        </article>
        <article className="p-8 bg-white border border-slate-200 rounded-3xl">
          <span className="font-mono text-xs text-rose-500">06</span>
          <h3 className="text-xl font-black text-slate-900 mt-5">
            Ship, measure, improve
          </h3>
          <p className="text-slate-500 mt-3 leading-relaxed">
            Execution creates feedback. Feedback creates better engineering decisions.
          </p>
        </article>
      </div>
    </div>
  </section>

  {/*  14. Rishvin Labs  */}
  <section className="py-32 px-6">
    <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center bg-white border border-slate-200 rounded-[3rem] p-8 md:p-14 shadow-xl shadow-slate-200/30">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Founder Perspective
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-5 leading-[1.05]">
            Rishvin Labs is where
            ideas become systems.
          </h2>
          <p className="mt-7 text-lg text-slate-600 leading-relaxed">
            I created Rishvin Labs as an engineering identity for exploring,
            building, and documenting ambitious technical systems across
            software, cybersecurity, IoT, automation, and emerging infrastructure.
          </p>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            It represents the direction I am growing toward:
            multidisciplinary engineering, strong technical execution,
            and products designed around real operational problems.
          </p>
        </div>
        <div className="bg-slate-900 rounded-[2rem] p-9 text-white relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 blur-[90px] rounded-full">
          </div>
          <div className="relative z-10">
            <p className="text-xs font-mono text-emerald-300 uppercase tracking-widest">
              Operating Thesis
            </p>
            <div className="mt-7 space-y-6">
              <div className="flex gap-4">
                <span className="text-primary font-mono">01</span>
                <p className="font-bold">
                  Build before claiming expertise.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-mono">02</span>
                <p className="font-bold">
                  Treat security as architecture.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-mono">03</span>
                <p className="font-bold">
                  Engineer for failure and recovery.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-mono">04</span>
                <p className="font-bold">
                  Prefer working systems over impressive demos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  9. Currently Exploring  */}
  <section className="py-32 px-6">
    <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-[3rem] bg-slate-900 text-white p-10 md:p-16 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]">
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75">
              </span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500">
              </span>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Current Direction
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl">
            What I’m actively
            <br />
            building toward.
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs font-mono text-primary uppercase tracking-widest">
                Security
              </p>
              <h3 className="text-xl font-bold mt-3">
                Security automation & attack-surface intelligence
              </h3>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs font-mono text-indigo-300 uppercase tracking-widest">
                Systems
              </p>
              <h3 className="text-xl font-bold mt-3">
                Production-oriented workflow architecture
              </h3>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs font-mono text-emerald-300 uppercase tracking-widest">
                Connected Devices
              </p>
              <h3 className="text-xl font-bold mt-3">
                IoT systems with secure software integration
              </h3>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs font-mono text-violet-300 uppercase tracking-widest">
                Career
              </p>
              <h3 className="text-xl font-bold mt-3">
                Industry experience, research, and high-impact engineering opportunities
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  10. Long-Term Direction  */}
  <section className="py-32 px-6 relative overflow-hidden">
    <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center scroll-reveal">
      <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-indigo-500 mb-8">
        Long-Term Direction
      </span>
      <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tight leading-[1.05]">
        Build systems that earn
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">
          trust through engineering.
        </span>
      </h2>
      <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-medium">
        My long-term direction is to work on consequential technology:
        secure software, connected infrastructure, intelligent automation,
        and products that solve meaningful operational problems.
      </p>
      <p className="mt-10 text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
        I want to become the kind of engineer who can move from
        first principles to architecture, from architecture to implementation,
        and from implementation to systems people can actually depend on.
      </p>
    </div>
  </section>

  {/*  11. Opportunity CTA  */}
  <section className="py-24 px-6 text-center scroll-reveal mb-20">
    <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 w-full max-w-screen-2xl mx-auto shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-indigo-600/30">
      </div>
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-8">
          Open to Serious Opportunities
        </div>
        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.05]">
          Building something
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            technically ambitious?
          </span>
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          I’m interested in engineering internships, cybersecurity opportunities,
          research collaborations, open-source work, and technically serious
          projects where I can contribute, learn, and take ownership.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="Contact_page.html" className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-white text-slate-900 rounded-full font-black shadow-xl hover:-translate-y-1 transition-all">
            Start a Conversation
            <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="Portfolio_page.html" className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/15 hover:-translate-y-1 transition-all">
            Review My Work
          </a>
        </div>
      </div>
    </div>
  </section>
</main>

    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/*  Dynamic Background  */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950"></div>
        {/*  Animated Grain/Pattern  */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fillRule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}>
        </div>
      </div>

      {/*  Glowing Orbs  */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse">
      </div>
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse animation-delay-20">
      </div>

      

      {/*  Infinite Scrolling Tech Marquee  */}
      <div className="mt-4 overflow-hidden relative w-full reveal"
        style={{ animationDelay: "300ms" }}>
        <div
          className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none">
        </div>
        <div
          className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none">
        </div>

        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] text-center mb-6">
  Technologies Used Across Projects & Experiments
</p>

<div className="flex whitespace-nowrap overflow-hidden">
  {/*  Marquee Track  */}
  <div className="flex items-center gap-12 sm:gap-20 min-w-max px-6" style={{ animation: "marquee 40s linear infinite" }}>
    {/*  Set 1  */}
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Python</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Java</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">JavaScript</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">HTML</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">CSS</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">SQL</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Arduino</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">ESP8266</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">IoT</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Cybersecurity</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Blockchain</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">GitHub</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">n8n</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">MySQL</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">SQLite</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Node.js</span>
    {/*  Set 2  */}
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Python</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Java</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">JavaScript</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">HTML</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">CSS</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">SQL</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Arduino</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">ESP8266</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">IoT</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Cybersecurity</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Blockchain</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">GitHub</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">n8n</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">MySQL</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">SQLite</span>
    <span className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Node.js</span>
  </div>
</div>
      </div>
    </section>

    {/*  ── Main Footer Body ──  */}
    </>
  );
}

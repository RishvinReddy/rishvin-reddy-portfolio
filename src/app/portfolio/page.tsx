import React from 'react';
import { getGithubProjects } from '@/lib/github';
import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Portfolio | Rishvin Labs',
};

export default async function Portfolio() {
  const projects = await getGithubProjects();

  return (
    <>
      {/*  ── Header v2 Scripts ──  */}
    

    {/*  ===== Header Spacer (since header is fixed) =====  */}
    <div className="h-12 shrink-0"></div>








      {/*  ===========================
     PORTFOLIO v3 — Ultra-Premium Upgrade
     Glassmorphism cards · 3D hover · GitHub live stats · Animated hero
     ===========================  */}
      

      <main className="flex-1">

        {/*  ── Hero ──  */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
            <div
              className="hero-blob absolute -top-24 -left-20 w-[600px] h-[600px] rounded-full bg-purple-300/25 blur-[90px]">
            </div>
            <div
              className="hero-blob-2 absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-rose-300/20 blur-[80px]">
            </div>
            <div
              className="hero-blob-3 absolute -bottom-32 left-1/3 w-[400px] h-[400px] rounded-full bg-indigo-300/20 blur-[70px]">
            </div>
          </div>
          <div className="container mx-auto px-6 lg:px-16 text-center reveal">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <span className="relative flex h-2 w-2"><span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span><span
                  className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span></span>
              Live from GitHub
            </div>
            <h1
              className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter hero-gradient-text leading-none mb-6">
              Portfolio<br className="hidden sm:block" /> Projects</h1>
            <p className="mx-auto text-xl text-slate-500 leading-relaxed mb-4 max-w-4xl">End-to-end highlights — hardware
              prototypes, web &amp; mobile apps, security and system design. Every card is fetched live from GitHub.</p>
            <p className="text-base text-slate-400">Erolla Rishvin Reddy &mdash; Hyderabad &middot; <a
                className="text-primary hover:underline" href="mailto:rishvinreddy@gmail.com">rishvinreddy@gmail.com</a>
              &middot; <a className="text-primary hover:underline" href="https://github.com/RishvinReddy" target="_blank"
                rel="noopener">GitHub ↗</a></p>
            {/*  Stats Bar  */}
            <div id="githubStatsBar" className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto stagger">
              <div className="gh-stat rounded-2xl px-5 py-4 text-center backdrop-blur-sm shadow-sm">
                <p id="statRepos" className="text-4xl font-black text-slate-900 stat-num">—</p>
                <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">Repositories</p>
              </div>
              <div className="gh-stat rounded-2xl px-5 py-4 text-center backdrop-blur-sm shadow-sm">
                <p id="statStars" className="text-4xl font-black text-slate-900 stat-num">—</p>
                <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">Total Stars</p>
              </div>
              <div className="gh-stat rounded-2xl px-5 py-4 text-center backdrop-blur-sm shadow-sm">
                <p id="statForks" className="text-4xl font-black text-slate-900 stat-num">—</p>
                <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">Forks</p>
              </div>
              <div className="gh-stat rounded-2xl px-5 py-4 text-center backdrop-blur-sm shadow-sm">
                <p id="statLangs" className="text-4xl font-black text-slate-900 stat-num">—</p>
                <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">Languages</p>
              </div>
            </div>
          </div>
        </section>

    {/*  ─ Section Divider ─  */}
    <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>



        {/*  ── Intellectual Property Spotlight ──  */}
        <section className="container mx-auto px-6 lg:px-16 mt-2 mb-10 reveal">
          <div className="relative overflow-hidden rounded-3xl bg-white border border-yellow-400/40 p-8 shadow-2xl shadow-yellow-500/10 flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none"></div>
            <div className="absolute -right-10 -bottom-20 w-80 h-80 bg-yellow-400/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-yellow-400/25 transition-all duration-700"></div>
            
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 border border-yellow-200 text-yellow-800 text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                🏅 Design Patent
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-3">Government of India Registered Patent</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Co-inventor of an innovative <strong className="text-slate-800">IoT Connectivity Device</strong>. Officially registered design protecting the unique form factor and hardware schema (Design No. 470097-001).
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag-badge bg-slate-100 text-slate-600 border border-slate-200">Class 14-02</span>
                <span className="tag-badge bg-slate-100 text-slate-600 border border-slate-200">IoT Hardware</span>
                <span className="tag-badge bg-emerald-50 text-emerald-700 border border-emerald-200">Status: Registered IP</span>
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
        </section>

    {/*  ─ Section Divider ─  */}
    <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>



        {/*  ── Sticky Filter Bar ──  */}
        <section className="sticky top-14 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 py-4 shadow-sm">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="mb-3 flex justify-center">
              <div className="relative w-full max-w-xl">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" strokeWidth="1.7" strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg>
                <input id="projectSearch" name="projectSearch" type="search"
                  placeholder="Search projects, tech or keywords..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-700 placeholder-slate-400 outline-none transition-all focus:border-primary/50 focus:bg-white" />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2" id="filterPills">
                <button data-tag="all"
                  className="filter-pill active px-4 py-1.5 text-xs font-bold rounded-full border border-transparent">All</button>
                <button data-tag="iot"
                  className="filter-pill px-4 py-1.5 text-xs font-bold rounded-full border border-slate-200 text-slate-600 hover:border-primary/40 hover:text-primary">IoT</button>
                <button data-tag="blockchain"
                  className="filter-pill px-4 py-1.5 text-xs font-bold rounded-full border border-slate-200 text-slate-600 hover:border-primary/40 hover:text-primary">Blockchain</button>
                <button data-tag="security"
                  className="filter-pill px-4 py-1.5 text-xs font-bold rounded-full border border-slate-200 text-slate-600 hover:border-primary/40 hover:text-primary">Security</button>
                <button data-tag="web"
                  className="filter-pill px-4 py-1.5 text-xs font-bold rounded-full border border-slate-200 text-slate-600 hover:border-primary/40 hover:text-primary">Web</button>
                <button data-tag="mobile"
                  className="filter-pill px-4 py-1.5 text-xs font-bold rounded-full border border-slate-200 text-slate-600 hover:border-primary/40 hover:text-primary">Mobile</button>
                <button data-tag="ai"
                  className="filter-pill px-4 py-1.5 text-xs font-bold rounded-full border border-slate-200 text-slate-600 hover:border-primary/40 hover:text-primary">AI
                  / ML</button>
                <button data-tag="dbms"
                  className="filter-pill px-4 py-1.5 text-xs font-bold rounded-full border border-slate-200 text-slate-600 hover:border-primary/40 hover:text-primary">DBMS</button>
              </div>
              <select id="sortSelect"
                className="appearance-none text-xs font-semibold bg-white border border-slate-200 rounded-full py-2 pl-4 pr-8 text-slate-600 outline-none focus:border-primary/50 transition">
                <option value="date">Latest First</option>
                <option value="title">A → Z</option>
                <option value="impact">Most Stars</option>
              </select>
            </div>
          </div>
        </section>

    {/*  ─ Section Divider ─  */}
    <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>



        {/*  ── Projects Grid (Premium Styled) ──  */}
        <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
          {/*  Dynamic Background Elements  */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
              <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-slate-200/50 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
              <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] animate-pulse delay-700 mix-blend-multiply"></div>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-screen-2xl px-6 lg:px-16">
            {/*  Section Header  */}
            <div className="mx-auto max-w-3xl flex flex-col items-center text-center mb-16 reveal">
              {/*  Badge  */}
              <div className="mb-6 flex items-center justify-center gap-3 w-full">
                <div className="flex-1 h-px bg-gradient-to-l from-slate-300/60 to-transparent max-w-[120px]"></div>
                <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-slate-700 bg-slate-100 border border-slate-200/70 rounded-full shadow-sm">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-pulse"></span>
                  All Projects
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-300/60 to-transparent max-w-[120px]"></div>
              </div>
              {/*  Headline  */}
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 font-display leading-[1.05]">
                Full
                <span className="relative inline-block mt-2 sm:mt-0">
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(120deg, #334155 0%, #0f172a 100%)" }}>
                    Repository
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full opacity-30" style={{ background: "linear-gradient(90deg, #64748b, #334155)" }}></span>
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
                A selection of engineering challenges solved with
                <strong className="text-teal-600 font-black">IoT</strong>,
                <strong className="text-indigo-600 font-black">Blockchain</strong>, and
                <strong className="text-slate-800 font-black">Secure Systems</strong>.
              </p>
            </div>

            {/*  Loading skeleton  */}
            <div id="loadingProjects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
              <div className="rounded-3xl animate-pulse bg-slate-100 h-80"></div>
              <div className="rounded-3xl animate-pulse bg-slate-100 h-80"></div>
              <div className="rounded-3xl animate-pulse bg-slate-100 h-80"></div>
              <div className="rounded-3xl animate-pulse bg-slate-100 h-80"></div>
              <div className="rounded-3xl animate-pulse bg-slate-100 h-80"></div>
              <div className="rounded-3xl animate-pulse bg-slate-100 h-80"></div>
            </div>

            {/*  Dynamic grid  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

            {/*  Empty state  */}
            <div id="emptyState" className="hidden py-24 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/8 flex items-center justify-center">
                <svg className="w-10 h-10 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9.172 16.172a4 4 0 015.656 0M9 12h.01M15 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">No projects found</h3>
              <p className="text-slate-500 text-sm">Try a different search term or filter.</p>
            </div>
            <p id="resultCount" className="hidden mt-8 text-center text-sm text-slate-400 font-medium"></p>
          </div>
        </section>





  <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>



  {/*  =========================================================
     DEVELOPER INTELLIGENCE / ANALYTICS
=========================================================  */}
<section
  id="developer-analytics"
  className="relative py-24 sm:py-28 overflow-hidden"
  aria-labelledby="developer-analytics-title"
>
  {/*  Ambient background  */}
  <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
    <div
      className="absolute top-10 left-1/2 -translate-x-1/2
             w-[42rem] h-[42rem]
             bg-cyan-100/30 rounded-full blur-3xl"
    ></div>
    <div
      className="absolute bottom-0 right-0
             w-[28rem] h-[28rem]
             bg-indigo-100/25 rounded-full blur-3xl"
    ></div>
  </div>
  <div className="container mx-auto px-6 lg:px-8 relative z-10">
    {/*  =====================================================
         SECTION HEADER
    ======================================================  */}
    <div
      className="mb-14 sm:mb-16
             flex flex-col items-center text-center
             max-w-3xl mx-auto
             scroll-reveal"
    >
      {/*  Eyebrow  */}
      <div className="mb-6 flex items-center justify-center gap-3 w-full">
        <div
          className="flex-1 h-px max-w-[90px]
                 bg-gradient-to-l from-cyan-300/70 to-transparent"
          aria-hidden="true"
        ></div>
        <span
          className="inline-flex items-center gap-2
                 px-3.5 py-1.5
                 text-[10px] sm:text-[11px]
                 font-black uppercase tracking-[0.18em]
                 text-cyan-700
                 bg-cyan-50/90
                 border border-cyan-200/80
                 rounded-full shadow-sm"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span
              className="absolute inline-flex h-full w-full
                     rounded-full bg-cyan-400 opacity-60
                     animate-ping"
            ></span>
            <span
              className="relative inline-flex h-2 w-2
                     rounded-full bg-cyan-500"
            ></span>
          </span>
          GitHub Intelligence
        </span>
        <div
          className="flex-1 h-px max-w-[90px]
                 bg-gradient-to-r from-cyan-300/70 to-transparent"
          aria-hidden="true"
        ></div>
      </div>
      {/*  Heading  */}
      <h2
        id="developer-analytics-title"
        className="text-4xl sm:text-5xl md:text-6xl
               font-black tracking-[-0.04em]
               text-slate-950 font-display
               leading-[0.98]"
      >
        Engineering
        <span className="block mt-2">
          <span
            className="relative inline-block
                   text-transparent bg-clip-text
                   bg-gradient-to-r
                   from-cyan-500 via-blue-500 to-indigo-600"
          >
            by the numbers
            <span
              className="absolute -bottom-2 left-[8%] right-[8%]
                     h-[3px] rounded-full opacity-30
                     bg-gradient-to-r
                     from-cyan-400 via-blue-500 to-indigo-500"
              aria-hidden="true"
            ></span>
          </span>
        </span>
      </h2>
      {/*  Supporting copy  */}
      <p
        className="mt-7 max-w-2xl
               text-base sm:text-lg
               leading-8 text-slate-600"
      >
        A measurable view of my public engineering footprint across
        repositories, community adoption, technical breadth, and
        intellectual-property work.
      </p>
      {/*  Data source  */}
      <p
        className="mt-4 inline-flex items-center gap-2
               text-xs font-semibold text-slate-400"
      >
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6l4 2"
          />
          <circle cx="12" cy="12" r="9" />
        </svg>
        Public GitHub metrics fetched dynamically
      </p>
    </div>
    {/*  =====================================================
         METRICS GRID
    ======================================================  */}
    <div
      className="grid grid-cols-2
             lg:grid-cols-5
             gap-4 sm:gap-5"
      aria-label="Developer metrics"
    >
      {/*  Repositories  */}
      <article
        className="group relative overflow-hidden
               min-h-[180px]
               rounded-[1.5rem]
               border border-slate-200/80
               bg-white/80 backdrop-blur-xl
               p-5 sm:p-6
               shadow-[0_10px_35px_rgba(15,23,42,0.05)]
               transition-all duration-500
               hover:-translate-y-1.5
               hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)]
               hover:border-cyan-200"
      >
        <div
          className="absolute inset-x-0 top-0 h-px
                 bg-gradient-to-r
                 from-transparent via-cyan-400/60 to-transparent"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -top-16 -right-16
                 w-32 h-32 rounded-full
                 bg-cyan-100/60 blur-3xl
                 transition-opacity duration-500
                 opacity-50 group-hover:opacity-100"
          aria-hidden="true"
        ></div>
        <div className="relative z-10 h-full flex flex-col">
          <div
            className="mb-8 w-10 h-10
                   rounded-xl
                   bg-cyan-50
                   border border-cyan-100
                   flex items-center justify-center
                   text-cyan-600"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5h6l2 2H21v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11Z"
              />
            </svg>
          </div>
          <div className="mt-auto">
            <p
              id="repoCount"
              className="metric-value
                     text-4xl sm:text-5xl
                     font-black tracking-[-0.05em]
                     text-slate-950"
              data-fallback="0"
              aria-live="polite"
            >
              —
            </p>
            <p
              className="mt-2 text-sm
                     font-semibold text-slate-500"
            >
              Public repositories
            </p>
          </div>
        </div>
      </article>
      {/*  Stars  */}
      <article
        className="group relative overflow-hidden
               min-h-[180px]
               rounded-[1.5rem]
               border border-slate-200/80
               bg-white/80 backdrop-blur-xl
               p-5 sm:p-6
               shadow-[0_10px_35px_rgba(15,23,42,0.05)]
               transition-all duration-500
               hover:-translate-y-1.5
               hover:shadow-[0_20px_50px_rgba(99,102,241,0.12)]
               hover:border-indigo-200"
      >
        <div
          className="absolute inset-x-0 top-0 h-px
                 bg-gradient-to-r
                 from-transparent via-indigo-400/60 to-transparent"
          aria-hidden="true"
        ></div>
        <div className="relative z-10 h-full flex flex-col">
          <div
            className="mb-8 w-10 h-10
                   rounded-xl
                   bg-indigo-50
                   border border-indigo-100
                   flex items-center justify-center
                   text-indigo-600"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12 3 2.75 5.57 6.15.9-4.45 4.33 1.05 6.12L12 17.03l-5.5 2.89 1.05-6.12L3.1 9.47l6.15-.9L12 3Z"
              />
            </svg>
          </div>
          <div className="mt-auto">
            <p
              id="starCount"
              className="metric-value
                     text-4xl sm:text-5xl
                     font-black tracking-[-0.05em]
                     text-slate-950"
              data-fallback="0"
              aria-live="polite"
            >
              —
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-500">
              Community stars
            </p>
          </div>
        </div>
      </article>
      {/*  Forks  */}
      <article
        className="group relative overflow-hidden
               min-h-[180px]
               rounded-[1.5rem]
               border border-slate-200/80
               bg-white/80 backdrop-blur-xl
               p-5 sm:p-6
               shadow-[0_10px_35px_rgba(15,23,42,0.05)]
               transition-all duration-500
               hover:-translate-y-1.5
               hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]
               hover:border-emerald-200"
      >
        <div
          className="absolute inset-x-0 top-0 h-px
                 bg-gradient-to-r
                 from-transparent via-emerald-400/60 to-transparent"
          aria-hidden="true"
        ></div>
        <div className="relative z-10 h-full flex flex-col">
          <div
            className="mb-8 w-10 h-10
                   rounded-xl
                   bg-emerald-50
                   border border-emerald-100
                   flex items-center justify-center
                   text-emerald-600"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <circle cx="6" cy="5" r="2" />
              <circle cx="18" cy="5" r="2" />
              <circle cx="12" cy="19" r="2" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 7v2c0 2 1 3 3 3h3m6-5v2c0 2-1 3-3 3h-3v5"
              />
            </svg>
          </div>
          <div className="mt-auto">
            <p
              id="forkCount"
              className="metric-value
                     text-4xl sm:text-5xl
                     font-black tracking-[-0.05em]
                     text-slate-950"
              data-fallback="0"
              aria-live="polite"
            >
              —
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-500">
              Repository forks
            </p>
          </div>
        </div>
      </article>
      {/*  Languages  */}
      <article
        className="group relative overflow-hidden
               min-h-[180px]
               rounded-[1.5rem]
               border border-slate-200/80
               bg-white/80 backdrop-blur-xl
               p-5 sm:p-6
               shadow-[0_10px_35px_rgba(15,23,42,0.05)]
               transition-all duration-500
               hover:-translate-y-1.5
               hover:shadow-[0_20px_50px_rgba(245,158,11,0.12)]
               hover:border-amber-200"
      >
        <div
          className="absolute inset-x-0 top-0 h-px
                 bg-gradient-to-r
                 from-transparent via-amber-400/60 to-transparent"
          aria-hidden="true"
        ></div>
        <div className="relative z-10 h-full flex flex-col">
          <div
            className="mb-8 w-10 h-10
                   rounded-xl
                   bg-amber-50
                   border border-amber-100
                   flex items-center justify-center
                   text-amber-600"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8 9-4 3 4 3m8-6 4 3-4 3M14 5l-4 14"
              />
            </svg>
          </div>
          <div className="mt-auto">
            <p
              id="languageCount"
              className="metric-value
                     text-4xl sm:text-5xl
                     font-black tracking-[-0.05em]
                     text-slate-950"
              data-fallback="0"
              aria-live="polite"
            >
              —
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-500">
              Languages detected
            </p>
          </div>
        </div>
      </article>
      {/*  Patent  */}
      <article
        className="group relative overflow-hidden
               col-span-2 lg:col-span-1
               min-h-[180px]
               rounded-[1.5rem]
               border border-slate-200/80
               bg-white/80 backdrop-blur-xl
               p-5 sm:p-6
               shadow-[0_10px_35px_rgba(15,23,42,0.05)]
               transition-all duration-500
               hover:-translate-y-1.5
               hover:shadow-[0_20px_50px_rgba(139,92,246,0.12)]
               hover:border-violet-200"
      >
        <div
          className="absolute inset-x-0 top-0 h-px
                 bg-gradient-to-r
                 from-transparent via-violet-400/60 to-transparent"
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-4 right-4
                 px-2 py-1
                 rounded-full
                 bg-violet-50
                 border border-violet-100
                 text-[9px] font-black
                 uppercase tracking-wider
                 text-violet-600"
        >
          IP
        </div>
        <div className="relative z-10 h-full flex flex-col">
          <div
            className="mb-8 w-10 h-10
                   rounded-xl
                   bg-violet-50
                   border border-violet-100
                   flex items-center justify-center
                   text-violet-600"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3.75 19.5 7.5v5.25c0 4.25-3.05 7.42-7.5 8.5-4.45-1.08-7.5-4.25-7.5-8.5V7.5L12 3.75Z"
              />
            </svg>
          </div>
          <div className="mt-auto">
            <p
              className="text-4xl sm:text-5xl
                     font-black tracking-[-0.05em]
                     text-slate-950"
            >
              1
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-500">
              Patent contribution
            </p>
          </div>
        </div>
      </article>
    </div>
    {/*  =====================================================
         STATUS / SOURCE STRIP
    ======================================================  */}
    <div
      className="mt-5
             flex flex-col sm:flex-row
             items-center justify-between
             gap-3
             px-4 py-3
             rounded-2xl
             border border-slate-200/70
             bg-white/60 backdrop-blur-xl
             text-xs text-slate-500"
    >
      <div className="flex items-center gap-2">
        <span
          id="githubMetricsStatusDot"
          className="w-2 h-2 rounded-full bg-slate-300"
          aria-hidden="true"
        ></span>
        <span id="githubMetricsStatus" aria-live="polite">
          Connecting to GitHub public data…
        </span>
      </div>
      <span id="githubMetricsUpdated">
        Awaiting synchronization
      </span>
    </div>
    {/*  =====================================================
         ENGINEERING INSIGHTS
    ======================================================  */}
    <div className="mt-24 sm:mt-28 scroll-reveal">
      {/*  Insights header  */}
      <div
        className="mb-10
               flex flex-col lg:flex-row
               lg:items-end lg:justify-between
               gap-6"
      >
        <div className="max-w-2xl">
          <span
            className="inline-flex items-center gap-2
                   text-[10px] sm:text-[11px]
                   font-black uppercase
                   tracking-[0.18em]
                   text-violet-600"
          >
            Portfolio Intelligence
          </span>
          <h3
            className="mt-3
                   text-3xl sm:text-4xl md:text-5xl
                   font-black tracking-[-0.04em]
                   text-slate-950
                   font-display"
          >
            Engineering signal,
            <span
              className="text-transparent bg-clip-text
                     bg-gradient-to-r
                     from-violet-600 to-indigo-600"
            >
              not vanity metrics.
            </span>
          </h3>
          <p
            className="mt-4 max-w-xl
                   text-base leading-7
                   text-slate-600"
          >
            A structured interpretation of technical breadth,
            repository activity, public adoption, and the engineering
            patterns visible across my work.
          </p>
        </div>
        <div
          className="inline-flex items-center gap-2
                 self-start lg:self-auto
                 px-3 py-2
                 rounded-xl
                 border border-slate-200
                 bg-white/70
                 text-xs font-semibold text-slate-500"
        >
          <svg
            className="w-4 h-4 text-violet-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12M7.76 16.24l-2.12 2.12"
            />
          </svg>
          Derived from public project metadata
        </div>
      </div>
      {/*  Insights panel  */}
      <div
        className="relative overflow-hidden
               rounded-[2rem]
               border border-slate-200/80
               bg-white/75 backdrop-blur-3xl
               shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
      >
        {/*  Ambient gradients  */}
        <div
          className="absolute inset-0
                 bg-gradient-to-br
                 from-indigo-50/60
                 via-white/20
                 to-violet-50/60
                 pointer-events-none"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -top-32 -right-32
                 w-72 h-72
                 bg-violet-200/20
                 rounded-full blur-3xl
                 pointer-events-none"
          aria-hidden="true"
        ></div>
                {/*  Panel  */}
        <div
          id="aiInsightsPanel"
          className="relative z-10 w-full p-6 sm:p-8 lg:p-10"
          aria-live="polite"
          aria-busy="false"
        >
          <div className="space-y-10 animate-fade-in-up">
            
            {/*  Domains  */}
            <div>
              <h4 className="text-[11px] font-black text-violet-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                Core Engineering Domains
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                
                <div className="bg-white/80 border border-slate-200 p-5 rounded-2xl shadow-sm hover:border-violet-300 transition-colors">
                  <div className="text-3xl font-black text-slate-900 mb-1">7</div>
                  <div className="text-sm font-bold text-slate-700">Cybersecurity</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-1 font-semibold">projects</div>
                </div>

                <div className="bg-white/80 border border-slate-200 p-5 rounded-2xl shadow-sm hover:border-violet-300 transition-colors">
                  <div className="text-3xl font-black text-slate-900 mb-1">4</div>
                  <div className="text-sm font-bold text-slate-700">IoT Systems</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-1 font-semibold">projects</div>
                </div>

                <div className="bg-white/80 border border-slate-200 p-5 rounded-2xl shadow-sm hover:border-violet-300 transition-colors">
                  <div className="text-3xl font-black text-slate-900 mb-1">3</div>
                  <div className="text-sm font-bold text-slate-700">Blockchain</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-1 font-semibold">projects</div>
                </div>

                <div className="bg-white/80 border border-slate-200 p-5 rounded-2xl shadow-sm hover:border-violet-300 transition-colors">
                  <div className="text-3xl font-black text-slate-900 mb-1">8</div>
                  <div className="text-sm font-bold text-slate-700">Full-Stack</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-1 font-semibold">projects</div>
                </div>

                <div className="bg-white/80 border border-slate-200 p-5 rounded-2xl shadow-sm hover:border-violet-300 transition-colors col-span-2 lg:col-span-1">
                  <div className="text-3xl font-black text-slate-900 mb-1">5</div>
                  <div className="text-sm font-bold text-slate-700">Automation</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-1 font-semibold">projects</div>
                </div>

              </div>
            </div>

            {/*  Languages & Patterns  */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              <div className="bg-white/60 backdrop-blur-md border border-slate-200 p-7 rounded-[2rem] shadow-sm">
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  Primary Languages
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-3.5 py-1.5 bg-white text-slate-700 text-xs font-bold tracking-wide rounded-lg border border-slate-200 shadow-sm">JavaScript</span>
                  <span className="px-3.5 py-1.5 bg-white text-slate-700 text-xs font-bold tracking-wide rounded-lg border border-slate-200 shadow-sm">Python</span>
                  <span className="px-3.5 py-1.5 bg-white text-slate-700 text-xs font-bold tracking-wide rounded-lg border border-slate-200 shadow-sm">Java</span>
                  <span className="px-3.5 py-1.5 bg-white text-slate-700 text-xs font-bold tracking-wide rounded-lg border border-slate-200 shadow-sm">C++</span>
                  <span className="px-3.5 py-1.5 bg-white text-slate-700 text-xs font-bold tracking-wide rounded-lg border border-slate-200 shadow-sm">HTML</span>
                  <span className="px-3.5 py-1.5 bg-white text-slate-700 text-xs font-bold tracking-wide rounded-lg border border-slate-200 shadow-sm">CSS</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50/80 to-violet-50/80 border border-indigo-100 p-7 rounded-[2rem] shadow-sm">
                <h4 className="text-[11px] font-black text-indigo-600 uppercase tracking-widest mb-5 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                  Engineering Patterns
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-3.5 py-1.5 bg-white/80 text-indigo-800 text-xs font-bold tracking-wide rounded-lg border border-indigo-200/60 shadow-sm">API Integration</span>
                  <span className="px-3.5 py-1.5 bg-white/80 text-indigo-800 text-xs font-bold tracking-wide rounded-lg border border-indigo-200/60 shadow-sm">Database Design</span>
                  <span className="px-3.5 py-1.5 bg-white/80 text-indigo-800 text-xs font-bold tracking-wide rounded-lg border border-indigo-200/60 shadow-sm">Workflow Automation</span>
                  <span className="px-3.5 py-1.5 bg-white/80 text-indigo-800 text-xs font-bold tracking-wide rounded-lg border border-indigo-200/60 shadow-sm">Security Testing</span>
                  <span className="px-3.5 py-1.5 bg-white/80 text-indigo-800 text-xs font-bold tracking-wide rounded-lg border border-indigo-200/60 shadow-sm">Embedded Systems</span>
                  <span className="px-3.5 py-1.5 bg-white/80 text-indigo-800 text-xs font-bold tracking-wide rounded-lg border border-indigo-200/60 shadow-sm">Full-Stack Architecture</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>




  {/*  ─ Section Divider ─  */}
  <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>



  {/*  GitHub Activity Timeline Section  */}
  <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200" id="github-timeline">
    {/*  Ambient Background  */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse mix-blend-multiply">
      </div>
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] animate-pulse delay-700 mix-blend-multiply">
      </div>
    </div>

    <div className="container mx-auto px-6 lg:px-8 relative z-10">
      {/*  Section Header  */}
      <div className="mx-auto max-w-3xl flex flex-col items-center text-center mb-16 scroll-reveal">
        {/*  Badge  */}
        <div className="mb-6 flex items-center justify-center gap-3 w-full">
          <div className="flex-1 h-px bg-gradient-to-l from-violet-200/60 to-transparent max-w-[120px]"></div>
          <span
            className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-violet-700 bg-violet-50 border border-violet-200/70 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></span>
            Developer Journey
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-200/60 to-transparent max-w-[120px]"></div>
        </div>
        {/*  Headline  */}
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 font-display leading-[1.05]">
          GitHub Activity<br className="sm:hidden" />
          <span className="relative inline-block mt-2 sm:mt-0">
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(120deg, #8b5cf6 0%, #6366f1 100%)" }}>
              Timeline
            </span>
            {/*  Underline accent  */}
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full opacity-30"
              style={{ background: "linear-gradient(90deg, #8b5cf6, #6366f1)" }}></span>
          </span>
        </h2>
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
          A visual overview of my projects and open-source contributions over the years.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/*  Continuous vertical line  */}
        <div
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2">
        </div>

        <div id="timelineContainer" className="space-y-12 relative z-10">
          {/*  Timeline items will be injected here by JS  */}
        </div>
      </div>

      <div className="mt-16 text-center max-w-6xl mx-auto scroll-reveal relative z-20">
        <h3 className="text-xl font-bold text-slate-900 mb-6">GitHub Activity Chart</h3>
        <div
          className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-slate-200 premium-layered-shadow overflow-x-auto">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=RishvinReddy&bg_color=transparent&color=4f46e5&line=4f46e5&point=000000&area=true&hide_border=true"
            alt="Rishvin Reddy's Github Chart" className="mx-auto w-full select-none opacity-90" />
        </div>
      </div>

    </div>
  </section>

  {/*  ─ Section Divider ─  */}
  <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>





        {/*  ── CTA Banner ──  */}
        <section className="mx-6 lg:mx-16 mb-20">
          <div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-10 lg:p-14 text-center shadow-2xl shadow-slate-900/30">
            <div
              className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-[80px] pointer-events-none">
            </div>
            <div
              className="absolute -bottom-20 -left-10 w-64 h-64 bg-indigo-500/15 rounded-full blur-[70px] pointer-events-none">
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-4">Let&apos;s build together</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">Have a project in mind?
              </h2>
              <p className="max-w-xl mx-auto text-slate-300 text-sm leading-relaxed mb-8">I&apos;m available for internships,
                freelance projects, and research collaborations.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="CTA_page.html"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-rose-600 text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
                  <span
                    className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700"></span>
                  Get in Touch
                </a>
                <a href="Resume_page.html"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white font-medium rounded-full hover:bg-white/8 hover:border-white/40 transition-all duration-300">View
                  Resume</a>
              </div>
            </div>
          </div>
        </section>

        {/*  ── Modal ──  */}
        <div id="projectModal" className="fixed inset-0 z-[200] hidden items-center justify-center p-4 sm:p-8" role="dialog"
          aria-modal="true" aria-hidden="true">
          <div id="modalBackdrop" className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"></div>
          <div id="projectModalPanel"
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/40 flex flex-col lg:flex-row">
            <button id="modalClose"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
              aria-label="Close">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div id="modalMedia" className="lg:w-2/5 h-56 lg:h-auto bg-cover bg-center relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
            <div className="flex-1 p-6 lg:p-8 overflow-y-auto" style={{ maxHeight: "80vh" }}>
              <div id="modalBadge" className="inline-block tag-badge bg-primary/10 text-primary mb-3"></div>
              <h3 id="modalTitle" className="text-2xl font-extrabold text-slate-900 leading-tight"></h3>
              <p id="modalDesc" className="mt-3 text-sm text-slate-600 leading-relaxed"></p>
              <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Language</dt>
                  <dd id="modalLang" className="font-semibold text-slate-800"></dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Stars / Forks</dt>
                  <dd id="modalStars" className="font-semibold text-slate-800"></dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Updated</dt>
                  <dd id="modalDate" className="font-semibold text-slate-800"></dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Repo Size</dt>
                  <dd id="modalSize" className="font-semibold text-slate-800"></dd>
                </div>
              </dl>
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                <a id="modalCaseStudy" href="#" target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-primary transition-colors">Case
                  Study</a>
                <a id="modalGitHub" href="#" target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-sm font-bold hover:border-primary/50 hover:text-primary transition-all">Source</a>
                <button id="modalCloseBtn"
                  className="ml-auto text-xs text-slate-400 hover:text-primary transition-colors font-medium"
                  aria-label="Close">✕ Close</button>
              </div>
            </div>
          </div>
        </div>

        {/*  ── Central Portfolio Data Engine ──  */}
        

        {/*  ── Portfolio Engine v3 ──  */}
        
      </main>

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
      <button id="backToTop" aria-label="Back to top"
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-slate-900 text-white shadow-2xl shadow-slate-900/30 flex items-center justify-center opacity-0 translate-y-4 pointer-events-none transition-all duration-300 hover:bg-primary hover:scale-110 hover:shadow-primary/30">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>

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
  className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-slate-900 text-white shadow-2xl shadow-slate-900/30 flex items-center justify-center opacity-0 translate-y-4 pointer-events-none transition-all duration-300 hover:bg-primary hover:scale-110 hover:shadow-primary/40 group">
  {/*  Progress ring SVG  */}
  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 56 56">
    <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2"
      className="text-white/10" />
    <circle id="backToTopRing" cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2"
      strokeDasharray="163.4" strokeDashoffset="163.4"
      className="text-primary group-hover:text-white transition-colors duration-300"
      style={{ transition: "stroke-dashoffset 0.1s linear" }} />
  </svg>
  <svg className="w-5 h-5 relative z-10 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</button>

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

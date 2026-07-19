import KnowledgeGraph from "@/components/KnowledgeGraph";
import ProjectCard from "@/components/ProjectCard";
import { getGithubProjects, getRawGithubRepos } from '@/lib/github';
import { TECH_STACK, SERVICES, FEATURED_PROJECTS } from '../data/portfolio';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const dynamicProjects = await getGithubProjects();
  const rawRepos = await getRawGithubRepos();
  const displayProjects = dynamicProjects.length > 0 ? dynamicProjects : FEATURED_PROJECTS;

  return (
    <>
      {/*  ── Header v2 Scripts ──  */}
    







    {/*  ===== Header Spacer (since header is fixed) =====  */}
    <div className="h-12"></div>

    {/*  Noise Overlay  */}
    <div className="noise-overlay pointer-events-none fixed inset-0 z-[9999] opacity-[0.03]"></div>

    {/*  ===== Hero / Home Section (Editorial Engineering Luxury) =====  */}
    <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 overflow-x-hidden flex-grow flex items-center min-h-[calc(100svh-100px)] pt-[clamp(20px,3vh,48px)] pb-[clamp(24px,4vh,60px)]">
      <section id="home" className="relative w-full">

        {/* ── Hero Card ── */}
        <div className="relative w-full rounded-[2rem] border border-slate-200/80 bg-white shadow-lg shadow-slate-200/60 overflow-hidden px-8 sm:px-10 lg:px-14 py-10 lg:py-14">

          {/* Subtle radial gradient inside card */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-50/80 via-white to-slate-50/60 -z-0 rounded-[2rem]"></div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-[clamp(30px,4vw,60px)] items-center relative z-10 w-full">
          
          {/*  Left: Hero Text */}
          <div className="flex flex-col justify-center max-w-3xl mx-auto lg:mx-0 order-2 lg:order-1 text-center lg:text-left">
            
            {/* Availability Badge */}
            <div className="hidden sm:inline-flex w-fit mx-auto lg:mx-0 items-center gap-2 px-3 py-1 rounded-full border border-emerald-200/50 bg-emerald-50 text-emerald-600 mb-6 shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span id="heroAvailBadge" className="text-xs font-semibold tracking-wide">Open to full-time roles</span>
            </div>

            {/* Typography Hierarchy */}
            <div className="flex flex-col gap-3 mb-7">
              <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-500 tracking-tight">Hi, I&apos;m</span>
              <h1 className="text-5xl sm:text-6xl lg:text-[clamp(3.5rem,5.5vw,5.5rem)] font-bold tracking-tight text-slate-900 leading-[1.05] font-serif">
                Erolla Rishvin Reddy
              </h1>
            </div>

            {/* Credential Cards (Standardized) */}
            <div className="mb-[26px] flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              
              {/* Patent Holder Badge */}
              <a href="#patent-section" className="group flex items-center gap-4 w-full sm:w-auto px-5 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm">
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
              <a href="https://rishvinreddy.github.io/rishvin-labs/" target="_blank" className="group flex items-center gap-4 w-full sm:w-auto px-5 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-500 text-lg">
                  🚀
                </div>
                <div className="flex flex-col leading-none text-left">
                  <span className="font-bold text-base text-slate-900">Founder & Builder</span>
                  <span className="text-[13px] font-medium text-slate-500 mt-0.5">Rishvin Labs</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors duration-300 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3h7m0 0v7m0-7L10 14" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5v14h14" />
                </svg>
              </a>

            </div>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-7 font-normal">
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
              <a href="#projects" className="inline-flex items-center justify-center px-8 py-3 text-[15px] font-bold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-sm">
                View Projects
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              {/* Secondary CTA (3D Universe) */}
              <a href="universe.html" className="inline-flex items-center justify-center px-8 py-3 text-[15px] font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm">
                <svg className="w-5 h-5 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
                3D Universe
              </a>

              {/* Supporting CTAs */}
              <a href="Resume_page.html" className="inline-flex items-center justify-center px-8 py-3 text-[15px] font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
                Resume
              </a>
              <a href="IDE.html" className="inline-flex items-center justify-center px-8 py-3 text-[15px] font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
                ProjectsIDE
              </a>
              <a href="https://rishvinreddy.github.io/rishvin-labs/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 text-[15px] font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors group">
                Rishvin Labs 
                <svg className="w-4 h-4 ml-1.5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Tech Stack Dock */}
            <div className="flex justify-center lg:justify-start">
              <div className="flex flex-wrap gap-2.5 items-center bg-white border border-slate-200/60 p-3.5 rounded-[1.5rem] shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default" title="Python">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-6 h-6" alt="Python" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default" title="TypeScript">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-6 h-6" alt="TypeScript" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default" title="JavaScript">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-6 h-6" alt="JavaScript" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default" title="React">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-6 h-6" alt="React" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default" title="Node.js">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-6 h-6" alt="Node.js" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default" title="C++">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="w-6 h-6" alt="C++" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default" title="Arduino">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" className="w-6 h-6" alt="Arduino" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default" title="MySQL">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-6 h-6" alt="MySQL" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default" title="Flask">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" className="w-6 h-6" alt="Flask" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-slate-50 transition-colors cursor-default" title="Docker">
                  <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-6 h-6" alt="Docker" />
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

            {/* Clean Editorial Portrait Oval */}
            <div className="relative z-10 w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[500px] xl:max-w-[560px] aspect-square rounded-full overflow-hidden border-2 border-slate-200/60 shadow-xl bg-white group cursor-pointer" id="profileThumb" data-src="icon.png">
              <img loading="lazy" src="icon.png" className="w-full h-full object-cover mix-blend-multiply scale-[1.02] group-hover:scale-[1.05] transition-transform duration-700 ease-out" alt="Erolla Rishvin Reddy Software Developer and IoT Engineer" />
              
              {/* Refined Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full text-slate-900 text-sm font-semibold shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  View Full Profile
                </span>
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
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-xl overflow-auto transform scale-95 opacity-0 transition-all duration-300">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <h3 id="imageModalTitle" className="text-lg font-semibold text-slate-900">Profile</h3>
            <div id="imageModalInfo" className="text-sm text-slate-500">Click outside or press Esc to
              close</div>
          </div>

          <div className="flex items-center gap-3">
            <a id="downloadImageBtn"
              className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-md text-sm shadow" href="#"
              download>
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

  <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>

  {/*  ===========================
     ABOUT — Premium Redesign
     ===========================  */}

  <section id="about-v3" className="py-12 sm:py-20 bg-white relative z-0">
    <div className="mx-auto max-w-screen-xl px-6 lg:px-10 relative z-10">

      {/* ── Section Header ── */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
          About Me
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.02] mb-5">
          Engineering the{" "}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(120deg, #6366f1 0%, #7c3aed 40%, #14b8a6 100%)" }}>
            full stack
          </span>{" "}
          of trust.
        </h2>
        <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
          From silicon to smart contracts — I build systems that are fast, secure, and production-ready.
          Co-inventor of a <strong className="text-slate-700 font-extrabold">Government of India IoT Patent</strong>.
        </p>
      </div>

      {/* ── Stats Strip ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
        {([
          { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", num: "15", sup: "+", label: "Projects Built",     color: "indigo" },
          { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",                                                                    num: "3",  sup: "+", label: "Years Engineering", color: "violet" },
          { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", num: "1",  sup: "×", label: "Govt. Patent",       color: "amber" },
          { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",                                                                                                                        num: "8",  sup: "+", label: "Technologies",      color: "teal"   },
          { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",                                                    num: "5",  sup: "+", label: "Certifications",   color: "rose"   },
        ] as const).map((s, i) => {
          const bg:   Record<string,string> = { indigo:"bg-indigo-50", violet:"bg-violet-50", amber:"bg-amber-50", teal:"bg-teal-50", rose:"bg-rose-50" };
          const txt:  Record<string,string> = { indigo:"text-indigo-600", violet:"text-violet-600", amber:"text-amber-600", teal:"text-teal-600", rose:"text-rose-500" };
          const num:  Record<string,string> = { indigo:"text-indigo-500", violet:"text-violet-500", amber:"text-amber-500", teal:"text-teal-500", rose:"text-rose-500" };
          const bar:  Record<string,string> = { indigo:"from-indigo-400 to-sky-400", violet:"from-violet-400 to-purple-400", amber:"from-amber-400 to-orange-400", teal:"from-teal-400 to-emerald-400", rose:"from-rose-400 to-pink-400" };
          return (
            <div key={i} className={`group relative bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden ${i === 4 ? "sm:col-span-1 col-span-2" : ""}`}>
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${bar[s.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
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
          <div className="relative bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden h-full">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-teal-500" />

            {/* Floating code decoration */}
            <div className="absolute top-6 right-6 text-[11px] font-mono text-slate-300 select-none hidden sm:block">
              {'{ IoT ∩ Blockchain ∩ Security }'}
            </div>

            <div className="p-8 sm:p-10">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-8 flex items-center gap-2">
                <span className="w-3 h-px bg-slate-300 inline-block" />
                Engineer&apos;s Narrative
              </p>

              {/* Journey timeline */}
              <div className="space-y-6 mb-8">
                {([
                  { phase:"Phase 01 — Hardware",      color:"indigo", content: <p className="text-sm sm:text-base text-slate-600 leading-relaxed">My journey started with <span className="text-slate-900 font-bold">hardware mechanics</span> — understanding the pulse of machines, programming microcontrollers and building IoT connectivity devices from scratch.</p> },
                  { phase:"Phase 02 — Software Logic", color:"violet", content: <p className="text-sm sm:text-base text-slate-600 leading-relaxed">It evolved into <span className="text-slate-900 font-bold">full-stack engineering</span> — React, Node, Python, REST APIs — building smart interfaces that communicate with the physical world.</p> },
                  { phase:"Phase 03 — Security Layer", color:"teal",   content: <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Today I secure that bridge. Integrating <strong className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-black">IoT sensors</strong> with <strong className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-black">Blockchain ledgers</strong> to create systems that are verifiable, impenetrable, and production-grade.</p> },
                  { phase:"Phase 04 — Founder",        color:"rose",   content: <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Now building <strong className="bg-gradient-to-r from-rose-500 to-primary bg-clip-text text-transparent font-black"><a href="https://rishvinreddy.github.io/rishvin-labs/" target="_blank" className="hover:underline">Rishvin Labs</a></strong>. Delivering digital solutions, full-stack web development, cybersecurity-focused systems, IoT automation, and product engineering.</p> },
                ] as const).map((item, i, arr) => {
                  const dotColor: Record<string,string> = { indigo:"bg-indigo-500", violet:"bg-violet-500", teal:"bg-teal-500", rose:"bg-rose-500" };
                  const labelColor: Record<string,string> = { indigo:"text-indigo-500", violet:"text-violet-500", teal:"text-teal-500", rose:"text-rose-500" };
                  const lineGrad: Record<string,string> = { indigo:"from-indigo-200 to-violet-200", violet:"from-violet-200 to-teal-200", teal:"from-teal-200 to-rose-200", rose:"from-rose-200 to-rose-100" };
                  return (
                    <div key={i} className="flex items-start gap-4 group/row">
                      <div className="mt-1.5 flex flex-col items-center shrink-0">
                        <div className={`w-2.5 h-2.5 rounded-full ${dotColor[item.color]} shadow-sm`} />
                        {i < arr.length - 1 && <div className={`w-px flex-1 min-h-[40px] bg-gradient-to-b ${lineGrad[item.color]} mt-1`} />}
                      </div>
                      <div className="pb-1">
                        <div className={`text-[10px] font-black ${labelColor[item.color]} uppercase tracking-widest mb-1.5`}>{item.phase}</div>
                        {item.content}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {([
                  { label:"IoT Systems",    bg:"bg-indigo-50",  text:"text-indigo-700",  border:"border-indigo-200/70"  },
                  { label:"Blockchain",     bg:"bg-violet-50",  text:"text-violet-700",  border:"border-violet-200/70"  },
                  { label:"Full-Stack",     bg:"bg-teal-50",    text:"text-teal-700",    border:"border-teal-200/70"    },
                  { label:"Embedded C",     bg:"bg-slate-50",   text:"text-slate-600",   border:"border-slate-200/80"   },
                  { label:"Python",         bg:"bg-slate-50",   text:"text-slate-600",   border:"border-slate-200/80"   },
                  { label:"Cybersecurity",  bg:"bg-rose-50",    text:"text-rose-600",    border:"border-rose-200/70"    },
                ] as const).map((p, i) => (
                  <span key={i} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${p.bg} ${p.text} ${p.border}`}>{p.label}</span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <div className="w-10 h-10 rounded-full overflow-hidden shadow-md border-2 border-indigo-200/40">
                      <img loading="lazy" src="icon.png" alt="Rishvin Reddy" className="w-full h-full object-cover" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-sm">Rishvin Reddy</div>
                    <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">IoT · Blockchain · Full-Stack</div>
                  </div>
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
              <h3 className="text-xl font-black text-slate-900 tracking-tight">Technical Arsenal</h3>
            </div>
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
          <div className="about-skills-card bg-white border border-slate-200/80 rounded-2xl shadow-sm p-6 sm:p-8 flex-1">

            {/* GitHub Stats Strip */}
            <div id="gh-stats-strip" className="grid grid-cols-4 gap-2 mb-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center p-2 rounded-xl bg-slate-50 animate-pulse">
                  <div className="h-5 bg-slate-200 rounded w-8 mx-auto mb-1" />
                  <div className="h-2.5 bg-slate-100 rounded w-12 mx-auto" />
                </div>
              ))}
            </div>

            {/* Language bars */}
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Language Distribution</p>
              <span id="gh-lang-source" className="text-[10px] text-slate-400 font-medium hidden" />
            </div>
            <div className="space-y-4 mt-3" id="about-skill-bars">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="skill-row-skeleton animate-pulse">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-slate-200" />
                      <div className={`h-3 bg-slate-200 rounded ${i === 0 ? "w-32" : i === 1 ? "w-24" : "w-28"}`} />
                    </div>
                    <div className="h-3 bg-slate-200 rounded w-8" />
                  </div>
                  <div className="h-[7px] rounded-full bg-slate-100 w-full" />
                </div>
              ))}
            </div>

            <div className="mt-7 mb-5 h-px bg-gradient-to-r from-slate-100 via-indigo-100/60 to-slate-100" />

            {/* Top repos */}
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-3">Top Repositories</p>
              <div id="gh-top-repos" className="space-y-2">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="animate-pulse flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                    <div className="w-3 h-3 rounded-full bg-slate-200 shrink-0" />
                    <div className="flex-1">
                      <div className={`h-3 bg-slate-200 rounded ${i === 0 ? "w-3/4" : "w-2/3"} mb-1`} />
                      <div className={`h-2.5 bg-slate-100 rounded ${i === 0 ? "w-1/2" : "w-1/3"}`} />
                    </div>
                    <div className="h-3 bg-slate-100 rounded w-8" />
                  </div>
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
    className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 mt-16 mb-28 relative z-20 scroll-mt-32">

    {/*  Section Label + Heading  */}
    <div className="scroll-reveal mb-14 flex flex-col items-center text-center gap-6">
      <div className="flex flex-col items-center">
        {/*  Badge  */}
        <div className="mb-5 flex items-center justify-center gap-3">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200/70 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
            Original Innovation
          </span>
        </div>
        {/*  Headline  */}
        <h2
          className="text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight font-display leading-[1.02]">
          Patent &amp; 
          <span className="relative inline-block">
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-500">Innovation</span>
            {/*  Underline accent  */}
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full opacity-40"
              style={{ background: "linear-gradient(90deg, #f59e0b, #fbbf24)" }}></span>
          </span>
        </h2>
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
                  className="flex flex-col items-center gap-2.5 px-5 py-5 rounded-2xl bg-gradient-to-b from-emerald-50 to-teal-50/80 border border-emerald-200/70 shadow-md shadow-emerald-100/50">
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
                className="group/tile relative flex flex-col gap-2 p-5 rounded-2xl bg-white border border-slate-100/80 shadow-sm hover:shadow-lg hover:border-amber-200/80 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-default">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-50/80 opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none">
                </div>
                <div className="text-[8.5px] font-black text-slate-400 uppercase tracking-[0.2em] relative z-10">Design No.
                </div>
                <div className="font-black text-slate-800 text-lg relative z-10 tabular-nums leading-tight">470097<span
                    className="text-amber-500">-001</span></div>
              </div>

              <div
                className="group/tile relative flex flex-col gap-2 p-5 rounded-2xl bg-white border border-slate-100/80 shadow-sm hover:shadow-lg hover:border-amber-200/80 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-default">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-50/80 opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none">
                </div>
                <div className="text-[8.5px] font-black text-slate-400 uppercase tracking-[0.2em] relative z-10">Category
                </div>
                <div className="font-black text-slate-800 text-lg relative z-10 leading-tight">IoT System</div>
              </div>

              <div
                className="group/tile relative flex flex-col gap-2 p-5 rounded-2xl bg-white border border-slate-100/80 shadow-sm hover:shadow-lg hover:border-amber-200/80 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-default">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-50/80 opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none">
                </div>
                <div className="text-[8.5px] font-black text-slate-400 uppercase tracking-[0.2em] relative z-10">Registered
                </div>
                <div className="font-black text-slate-800 text-lg relative z-10 leading-tight">Aug 2025</div>
              </div>

              <div
                className="group/tile relative flex flex-col gap-2 p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/80 border border-amber-200/60 shadow-sm hover:shadow-lg hover:border-amber-300 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-default">
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
                className="w-36 h-36 rounded-full border-[3px] border-amber-300/60 flex items-center justify-center bg-gradient-to-br from-white to-amber-50/80 shadow-xl shadow-amber-200/30 group-hover:border-amber-400/80 group-hover:shadow-amber-300/40 transition-all duration-700">
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
                className="flex items-stretch gap-px bg-amber-200/40 rounded-2xl overflow-hidden border border-amber-200/50 shadow-sm">
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

  {/*  ── Rishvin Labs Featured Hub ──  */}
  <section id="rishvin-labs-hub" className="py-24 sm:py-32 relative overflow-hidden bg-slate-900 border-t border-slate-800">
    {/*  Dynamic Background Elements  */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] opacity-30 mix-blend-screen"></div>
      <div className="absolute inset-0 bg-[url(&apos;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=&apos;)] opacity-20 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
    </div>

    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      {/*  Header  */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary font-bold text-sm tracking-wide mb-6 shadow-inner backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Founder & Tech Studio
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          Rishvin <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-500">Labs</span>
        </h2>
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-medium">
          Building modern software systems, websites, automation tools, cybersecurity solutions, IoT systems, and digital products.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="https://rishvinreddy.github.io/rishvin-labs/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-rose-500 text-white font-bold shadow-[0_0_20px_rgba(242,13,70,0.4)] hover:shadow-[0_0_30px_rgba(242,13,70,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
            Visit Rishvin Labs
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="https://rishvinreddy.github.io/rishvin-labs/#services" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-white/10 text-white font-bold border border-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-md">
            View Services
          </a>
        </div>
      </div>

      {/*  Stats/Cards Grid  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {SERVICES.map((service, index) => (
          <div key={index} className={`group relative bg-white/5 rounded-3xl p-8 border border-white/10 ${service.colorClasses.borderHover} transition-all duration-500 hover:-translate-y-2 overflow-hidden backdrop-blur-md`}>
            <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.colorClasses.bgGradient} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <svg className={`w-7 h-7 ${service.colorClasses.iconText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: service.iconPath }}></svg>
              </div>
              <h3 className={`text-xl font-bold text-white mb-3 transition-colors ${service.colorClasses.groupHoverText}`}>{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/*  Bottom CTA row  */}
      <div className="mt-12 text-center">
        <a href="https://rishvinreddy.github.io/rishvin-labs/#projects" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white group transition-colors">
          Explore All Technical Services
          <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
    </div>
  </section>

  {/*  ─ Section Divider ─  */}
  <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>



  {/*  Featured Projects (Premium UI Upgrade)  */}
  <section className="py-24 sm:py-32 bg-[#F8FAFC] relative overflow-hidden" id="projects">
    {/*  Dynamic Background Elements  */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-slate-200/50 rounded-full blur-[120px] mix-blend-multiply opacity-50">
        </div>
        <div
          className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] animate-pulse delay-700 mix-blend-multiply">
        </div>
      </div>
    </div>

    <div className="relative z-10 mx-auto max-w-screen-2xl px-6 lg:px-12">
      {/*  Section Header  */}
      <div className="mx-auto max-w-3xl flex flex-col items-center text-center mb-16 scroll-reveal">
        {/*  Badge  */}
        <div className="mb-6 flex items-center justify-center gap-3 w-full">
          <div className="flex-1 h-px bg-gradient-to-l from-slate-300/60 to-transparent max-w-[120px]"></div>
          <span
            className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-slate-700 bg-slate-100 border border-slate-200/70 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-pulse"></span>
            Selected Works
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-300/60 to-transparent max-w-[120px]"></div>
        </div>
        {/*  Headline  */}
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 font-display leading-[1.05]">
          Featured<br className="sm:hidden" />
          <span className="relative inline-block mt-2 sm:mt-0">
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(120deg, #334155 0%, #0f172a 100%)" }}>
              Projects
            </span>
            {/*  Underline accent  */}
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full opacity-30"
              style={{ background: "linear-gradient(90deg, #64748b, #334155)" }}></span>
          </span>
        </h2>
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
          A selection of engineering challenges solved with
          <strong className="text-teal-600 font-black">IoT</strong>,
          <strong className="text-indigo-600 font-black">Blockchain</strong>, and
          <strong className="text-slate-800 font-black">Secure Systems</strong>.
        </p>
      </div>

      {/*  Filter Buttons (Premium Pill Design)  */}
      <div className="flex flex-wrap justify-center gap-4 mb-20 delay-1 scroll-reveal" id="projectFilters">
        <button
          className="filter-btn active px-7 py-3 rounded-2xl text-[13px] font-black tracking-wide uppercase transition-all duration-300 border border-transparent shadow-sm"
          data-filter="all">All Projects</button>
        <button
          className="filter-btn px-7 py-3 rounded-2xl bg-white/80 backdrop-blur text-slate-500 border border-slate-200 text-[13px] font-black tracking-wide uppercase transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5"
          data-filter="iot">IoT & Embedded</button>
        <button
          className="filter-btn px-7 py-3 rounded-2xl bg-white/80 backdrop-blur text-slate-500 border border-slate-200 text-[13px] font-black tracking-wide uppercase transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5"
          data-filter="security">Security</button>
        <button
          className="filter-btn px-7 py-3 rounded-2xl bg-white/80 backdrop-blur text-slate-500 border border-slate-200 text-[13px] font-black tracking-wide uppercase transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5"
          data-filter="web">Web & AI</button>

        
      </div>

      {/*  Projects Grid (GitHub-style Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="projectsGrid">
        {displayProjects.length > 0 ? (
          displayProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))
        ) : (
          <p className="col-span-full text-center text-slate-500 py-10">Fetching projects securely...</p>
        )}
      </div>
    </div>
  </section>



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
            className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-purple-700 bg-purple-50 border border-purple-200/70 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></span>
            Live Ecosystem Map
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-200/60 to-transparent max-w-[120px]"></div>
        </div>
        {/* Headline */}
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 font-display leading-[1.05]">
          Developer<br className="sm:hidden" />
          <span className="relative inline-block mt-2 sm:mt-0">
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(120deg, #6366f1 0%, #a855f7 100%)" }}>
              Knowledge Graph
            </span>
            {/*  Underline accent  */}
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full opacity-30"
              style={{ background: "linear-gradient(90deg, #6366f1, #a855f7)" }}></span>
          </span>
        </h2>
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
          An interactive network visualization of my engineering ecosystem — repositories, technologies, and domains
          connected in real-time.
        </p>
      </div>

      <div className="max-w-7xl mx-auto scroll-reveal delay-2">

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
      className="relative w-full max-w-5xl flex flex-col bg-white rounded-2xl shadow-2xl m-3 md:m-6 border border-slate-200"
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


  {/*  WHY CHOOSE ME — Premium Redesign  */}
  <section className="relative py-20 sm:py-28 bg-white overflow-hidden">

    {/* Subtle top border accent */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

    <div className="mx-auto max-w-screen-xl px-6 lg:px-12 relative z-10">

      {/* Two-Column Header */}
      <div className="grid lg:grid-cols-[1fr_1.8fr] gap-16 items-start mb-20">

        {/* Left — sticky headline */}
        <div className="lg:sticky lg:top-28">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
            Engineering Philosophy
          </span>
          <h2 className="text-5xl sm:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
            Why<br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(120deg, #6366f1 0%, #38bdf8 100%)" }}>
              Choose
            </span><br />
            Me?
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-xs">
            Bridging hardware, software, and security with a holistic, product-first mindset.
          </p>
          <div className="flex flex-col gap-3">
            <a href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-700 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-slate-900/20">
              Work with me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/resumes/SoftwareEngineering _ FullStack Resume/Software_Engineering_Full_Stack_Resume.pdf" target="_blank"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-200">
              Download Resume
            </a>
          </div>
        </div>

        {/* Right — 2x3 Feature Cards */}
        <div className="grid sm:grid-cols-2 gap-5">

          <div className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 20a8 8 0 0116 0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">User-Centric Design</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Research-led UX and accessibility-first components to ensure adoption and delight.</p>
          </div>

          <div className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2l7 3v5c0 5-3.58 9.74-7 11-3.42-1.26-7-6-7-11V5l7-3z" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Security-First Mindset</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Secure authentication, encryption, and threat-aware architecture baked in from day one.</p>
          </div>

          <div className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-11 h-11 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="7" height="7" rx="1.5" strokeWidth="2" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" strokeWidth="2" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" strokeWidth="2" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Product Engineering</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Buildable, observable, and cost-effective solutions engineered for real teams.</p>
          </div>

          <div className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 3v18h18" strokeWidth="2" />
                <path d="M7 14v-4M12 14v-8M17 14v-2" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Data-Driven Outcomes</h3>
            <p className="text-slate-500 text-sm leading-relaxed">KPIs, instrumentation, and user metrics continuously inform design decisions.</p>
          </div>

          <div className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Collaborative Process</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Frequent demos, clear documentation, and tight alignment to reduce surprises.</p>
          </div>

          <div className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-11 h-11 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" strokeWidth="2" />
                <path d="M3 20a9 9 0 0118 0" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Peer &amp; Team Mentoring</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Workshops and team coaching to lift the whole squad&apos;s technical capabilities.</p>
          </div>

        </div>
      </div>

      {/* Process Timeline Strip */}
      <div className="border-t border-slate-100 pt-12">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center mb-10">My Development Methodology</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {([
            { n: "01", label: "Discover",  color: "from-indigo-500 to-sky-500"    },
            { n: "02", label: "Prototype", color: "from-violet-500 to-purple-500" },
            { n: "03", label: "Validate",  color: "from-emerald-500 to-teal-500"  },
            { n: "04", label: "Deliver",   color: "from-amber-500 to-orange-500"  },
          ] as const).map((step, i) => (
            <div key={i} className="group relative bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className={`text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br ${step.color} mb-2 opacity-[0.15] group-hover:opacity-70 transition-opacity duration-300`}>
                {step.n}
              </div>
              <div className="text-sm font-bold text-slate-900">{step.label}</div>
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
    className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-slate-900 text-white shadow-2xl shadow-slate-900/30 flex items-center justify-center opacity-0 translate-y-4 pointer-events-none transition-all duration-300 hover:bg-primary hover:scale-110 hover:shadow-primary/40 group">
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

"use client";
import React from 'react';
import { EXPERIENCE } from '@/data/experience';
import {
  HandwrittenNote,
  HandCircle,
  HandUnderline,
  EngineeringDoodle,
  RishvinSignature,
} from '@/components/handwritten';

const getThemeClasses = (theme: string) => {
  switch (theme) {
    case 'violet': return {
      text: 'text-violet-600', bg: 'bg-violet-50', bgIcon: 'bg-violet-100', 
      gradient: 'from-violet-500 to-fuchsia-500', border: 'border-violet-200',
      lightGradient: 'from-violet-50 to-white'
    };
    case 'blue': return {
      text: 'text-blue-600', bg: 'bg-blue-50', bgIcon: 'bg-blue-100', 
      gradient: 'from-blue-500 to-cyan-500', border: 'border-blue-200',
      lightGradient: 'from-blue-50 to-white'
    };
    case 'emerald': return {
      text: 'text-emerald-600', bg: 'bg-emerald-50', bgIcon: 'bg-emerald-100', 
      gradient: 'from-emerald-500 to-teal-400', border: 'border-emerald-200',
      lightGradient: 'from-emerald-50 to-white'
    };
    case 'indigo': return {
      text: 'text-indigo-600', bg: 'bg-indigo-50', bgIcon: 'bg-indigo-100', 
      gradient: 'from-indigo-500 to-violet-500', border: 'border-indigo-200',
      lightGradient: 'from-indigo-50 to-white'
    };
    default: return {
      text: 'text-slate-600', bg: 'bg-slate-50', bgIcon: 'bg-slate-100', 
      gradient: 'from-slate-500 to-slate-400', border: 'border-slate-200',
      lightGradient: 'from-slate-50 to-white'
    };
  }
};

const getExperienceAnnotation = (company: string) => {
  if (company.includes('Data Lake')) {
    return {
      doodle: 'shield' as const,
      doodleColor: 'text-emerald-500/25 group-hover:text-emerald-500/50',
      note: 'Security & Risk Analysis',
      noteColor: 'emerald' as const,
      rotation: -2,
      badge: 'Active Internship',
    };
  }
  if (company.includes('Fiverr')) {
    return {
      doodle: 'terminal' as const,
      doodleColor: 'text-indigo-500/25 group-hover:text-indigo-500/50',
      note: 'Global Client Systems',
      noteColor: 'blue' as const,
      rotation: 2,
      badge: 'Freelance APIs',
    };
  }
  if (company.includes('Rishvin Labs')) {
    return {
      doodle: 'connected-nodes' as const,
      doodleColor: 'text-violet-500/25 group-hover:text-violet-500/50',
      note: 'Independent Venture & R&D',
      noteColor: 'purple' as const,
      rotation: -3,
      badge: 'Founder Initiative',
    };
  }
  if (company.includes('Pegasystems')) {
    return {
      doodle: 'data-stream' as const,
      doodleColor: 'text-blue-500/25 group-hover:text-blue-500/50',
      note: 'Low-Code & Enterprise BPM',
      noteColor: 'blue' as const,
      rotation: 2,
      badge: 'National Program',
    };
  }
  return {
    doodle: 'code-brackets' as const,
    doodleColor: 'text-teal-500/25 group-hover:text-teal-500/50',
    note: 'Frontend Craft',
    noteColor: 'accent' as const,
    rotation: -1,
    badge: 'Project Capstone',
  };
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      <div className="mx-auto w-full max-w-[120rem] px-6 lg:px-12 relative z-10">
        
        {/* TOP HEADER CARD */}
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-[2.5rem] p-8 lg:p-12 shadow-xl shadow-slate-200/40 mb-8 sm:mb-12 relative overflow-hidden">
          
          {/* Subtle Background Watermark Doodle */}
          <div className="absolute -top-6 -right-6 pointer-events-none opacity-[0.15] hidden md:block">
            <EngineeringDoodle type="data-stream" className="w-48 h-48 text-indigo-500" />
          </div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center relative z-10">
            
            {/* Header Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left scroll-reveal">
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 shadow-sm relative">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-indigo-700">
                  Professional Journey
                </span>
                <span className="hidden sm:inline-block pointer-events-none ml-1">
                  <HandwrittenNote rotation={-2} color="purple" className="text-[9px] font-bold py-0 px-1.5">
                    field notes
                  </HandwrittenNote>
                </span>
              </div>
              
              <div className="relative">
                {/* Sparkle Icon */}
                <svg className="absolute -top-6 lg:-top-8 left-1/2 lg:left-8 -translate-x-1/2 w-6 h-6 text-indigo-300 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
                </svg>
                
                <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 font-display leading-[1.05] mb-3">
                  Engineering
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 relative inline-block">
                    Experience
                    <HandUnderline className="w-full h-3 -mt-1 text-indigo-400/80" strokeWidth={2.4} />
                  </span>
                </h2>
                <div className="mb-6 flex items-center justify-center lg:justify-start gap-3">
                  <HandwrittenNote rotation={-2} color="accent" arrowDirection="curved-down-right" arrowPosition="left">
                    A work in progress.
                  </HandwrittenNote>
                  <EngineeringDoodle type="terminal" className="w-8 h-8 text-indigo-400/70 hidden sm:inline-block -mt-1" />
                </div>
              </div>
              
              <div className="h-px w-24 bg-gradient-to-r from-slate-200 to-transparent mx-auto lg:mx-0 mb-6" />
              
              <p className="text-base sm:text-lg leading-relaxed text-slate-500 font-medium max-w-md">
                My journey in engineering is driven by curiosity, problem-solving, and a passion for building real-world technology that makes an impact.
              </p>
            </div>

            {/* Stats Grid - Horizontal on Desktop, Grid on Mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 scroll-reveal delay-1">
              {/* Stat 1 */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-200/50 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <EngineeringDoodle type="connected-nodes" className="w-8 h-8 text-violet-300/30 absolute -top-1 -right-1 pointer-events-none group-hover:scale-110 transition-transform" />
                <span className="absolute top-2.5 right-2.5 hidden sm:inline-block pointer-events-none">
                  <HandwrittenNote rotation={-2} color="purple" className="text-[9px] font-bold">
                    multi-stack
                  </HandwrittenNote>
                </span>
                <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">3+</div>
                <div className="text-xs font-bold text-slate-500 tracking-wide">Core Domains</div>
                <div className="absolute bottom-0 left-6 right-6 h-[3px] bg-violet-400 rounded-t-full" />
              </div>
              {/* Stat 2 */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-200/50 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <EngineeringDoodle type="circuit" className="w-8 h-8 text-teal-300/30 absolute -top-1 -right-1 pointer-events-none group-hover:scale-110 transition-transform" />
                <span className="absolute top-2.5 right-2.5 hidden sm:inline-block pointer-events-none">
                  <HandwrittenNote rotation={3} color="emerald" className="text-[9px] font-bold">
                    shipped
                  </HandwrittenNote>
                </span>
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">15+</div>
                <div className="text-xs font-bold text-slate-500 tracking-wide">Projects Built</div>
                <div className="absolute bottom-0 left-6 right-6 h-[3px] bg-teal-400 rounded-t-full" />
              </div>
              {/* Stat 3 */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-200/50 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <EngineeringDoodle type="sensor-node" className="w-8 h-8 text-amber-300/30 absolute -top-1 -right-1 pointer-events-none group-hover:scale-110 transition-transform" />
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">1</div>
                <div className="text-xs font-bold text-slate-500 tracking-wide">
                  <HandCircle color="#f59e0b" strokeWidth={1.8}>Patent Granted</HandCircle>
                </div>
                <div className="absolute bottom-0 left-6 right-6 h-[3px] bg-indigo-400 rounded-t-full" />
              </div>
              {/* Stat 4 */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-200/50 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <EngineeringDoodle type="shield" className="w-8 h-8 text-sky-300/30 absolute -top-1 -right-1 pointer-events-none group-hover:scale-110 transition-transform" />
                <span className="absolute top-2.5 right-2.5 hidden sm:inline-block pointer-events-none">
                  <HandwrittenNote rotation={-2} color="blue" className="text-[9px] font-bold">
                    verified
                  </HandwrittenNote>
                </span>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-[#0077b5]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">4</div>
                <div className="text-xs font-bold text-slate-500 tracking-wide">Professional Recommendations</div>
                <div className="absolute bottom-0 left-6 right-6 h-[3px] bg-[#0077b5] rounded-t-full" />
              </div>
            </div>
            
          </div>
        </div>

        {/* BOTTOM GRID: Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {EXPERIENCE.map((exp, index) => {
            const theme = getThemeClasses(exp.theme);
            const annot = getExperienceAnnotation(exp.company);
            
            return (
              <article key={index} className="bg-white border border-slate-200/60 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl shadow-slate-200/50 flex flex-col hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden group scroll-reveal">
                
                {/* Subtle hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                
                {/* Authentic Engineering Sketch Watermark Doodle */}
                <div className="absolute top-4 right-5 pointer-events-none opacity-30 group-hover:opacity-80 transition-opacity duration-500">
                  <EngineeringDoodle type={annot.doodle} className={`w-14 h-14 sm:w-16 sm:h-16 ${annot.doodleColor}`} />
                </div>

                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 relative z-10 h-full">
                  
                  {/* Left: Icon Box */}
                  <div className="shrink-0">
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-[1.5rem] bg-gradient-to-br ${theme.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                      <span className="text-3xl sm:text-4xl font-black text-white">{exp.icon}</span>
                    </div>
                  </div>

                  {/* Right: Main Content */}
                  <div className="flex flex-col flex-1">
                    {/* Header Row */}
                    <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`text-xs font-black tracking-widest uppercase ${theme.text}`}>
                            {exp.role}
                          </span>
                          <span className="hidden sm:inline-block pointer-events-none">
                            <HandwrittenNote rotation={annot.rotation} color={annot.noteColor} className="text-[10px] font-semibold py-0.5 px-2">
                              {annot.note}
                            </HandwrittenNote>
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight flex items-center gap-2">
                          <span>{exp.company}</span>
                          {exp.company.includes('Rishvin Labs') && (
                            <span className="hidden sm:inline-block pointer-events-none">
                              <HandwrittenNote rotation={2} color="purple" className="text-[10px] font-bold">
                                independent
                              </HandwrittenNote>
                            </span>
                          )}
                          {exp.company.includes('Data Lake') && (
                            <span className="hidden sm:inline-block pointer-events-none">
                              <HandwrittenNote rotation={-2} color="emerald" className="text-[10px] font-bold">
                                active
                              </HandwrittenNote>
                            </span>
                          )}
                        </h3>
                      </div>
                      <div className={`shrink-0 inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${theme.bg} ${theme.text}`}>
                        {exp.duration}
                      </div>
                    </div>

                    {/* Location/Type Tags */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-bold text-slate-500 tracking-wide">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </div>
                      <div className="text-slate-300">|</div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {exp.type}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6 text-sm font-medium">
                      {exp.description}
                    </p>

                    {/* Bullets (2x2 Grid) */}
                    {exp.bullets && exp.bullets.length > 0 && (
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-8">
                        {exp.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${theme.bg}`}>
                              <svg className={`w-3 h-3 ${theme.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-xs text-slate-600 font-semibold leading-relaxed">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Skills Pills */}
                    <div className="mt-auto pt-6 border-t border-slate-100">
                      {exp.skills && exp.skills.length > 0 && (
                        <div>
                          <div className="flex items-center gap-1.5 mb-2.5">
                            <EngineeringDoodle type="circuit" className="w-3.5 h-3.5 text-slate-400" />
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                              Applied Technologies
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, idx) => (
                              <span key={idx} className={`inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wide ${theme.bg} ${theme.text}`}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Section Bottom Engineering Verification Seal */}
        <div className="mt-12 bg-white/70 backdrop-blur-sm border border-slate-200/70 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
              <EngineeringDoodle type="linked-blocks" className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-xs font-mono font-bold text-slate-700 tracking-wider uppercase">Verified Career Trajectory</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                5 Professional Roles · Cybersecurity, IoT, Blockchain &amp; Cloud Systems
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <HandwrittenNote rotation={-2} color="blue" arrowDirection="curved-down-right" arrowPosition="left">
              Engineering with intent.
            </HandwrittenNote>
            <RishvinSignature className="w-32 sm:w-40 h-auto text-slate-800 -rotate-2" />
          </div>
        </div>
        
      </div>
    </section>
  );
}

"use client";
import React from 'react';
import { EXPERIENCE } from '@/data/experience';

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

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      <div className="mx-auto w-full max-w-[120rem] px-6 lg:px-12 relative z-10">
        
        {/* TOP HEADER CARD */}
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-[2.5rem] p-8 lg:p-12 shadow-xl shadow-slate-200/40 mb-8 sm:mb-12">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
            
            {/* Header Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left scroll-reveal">
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 shadow-sm relative">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-indigo-700">
                  Professional Journey
                </span>
              </div>
              
              <div className="relative">
                {/* Sparkle Icon */}
                <svg className="absolute -top-6 lg:-top-8 left-1/2 lg:left-8 -translate-x-1/2 w-6 h-6 text-indigo-300 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
                </svg>
                
                <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 font-display leading-[1.05] mb-6">
                  Engineering
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400">
                    Experience
                  </span>
                </h2>
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
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">1</div>
                <div className="text-xs font-bold text-slate-500 tracking-wide">Patent Granted</div>
                <div className="absolute bottom-0 left-6 right-6 h-[3px] bg-indigo-400 rounded-t-full" />
              </div>
              {/* Stat 4 */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-200/50 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">100%</div>
                <div className="text-xs font-bold text-slate-500 tracking-wide">Commitment</div>
                <div className="absolute bottom-0 left-6 right-6 h-[3px] bg-emerald-400 rounded-t-full" />
              </div>
            </div>
            
          </div>
        </div>

        {/* BOTTOM GRID: Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {EXPERIENCE.map((exp, index) => {
            const theme = getThemeClasses(exp.theme);
            
            return (
              <article key={index} className="bg-white border border-slate-200/60 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl shadow-slate-200/50 flex flex-col hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden group scroll-reveal">
                
                {/* Subtle hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                
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
                        <div className={`text-xs font-black tracking-widest uppercase mb-2 ${theme.text}`}>
                          {exp.role}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                          {exp.company}
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
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <span key={idx} className={`inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wide ${theme.bg} ${theme.text}`}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

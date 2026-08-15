"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';

interface ResumeOption {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const resumes: ResumeOption[] = [
  {
    name: "Full Stack",
    url: "/resumes/Rishvin Reddy Full stack Resume/Rishvin Reddy Full stack Resume.pdf",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    name: "Cybersecurity",
    url: "/resumes/Rishvin Reddy CYBERSECURITY Resume/Rishvin_Reddy_CYBERSECURITY_Resume.pdf",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    name: "AI & Machine Learning",
    url: "/resumes/Rishvin Reddy AI Resume/Rishvin_Reddy_AI_Resume.pdf",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    name: "Blockchain & Web3",
    url: "/resumes/Rishvin Reddy Blockchain  Web3 Resume/Rishvin_Reddy_Blockchain__Web3_Resume.pdf",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    name: "IoT & Embedded Systems",
    url: "/resumes/Rishvin Reddy Embedded Systems Resume/Rishvin_Reddy__IoT___Embedded_Systems_Engineer_Resume.pdf",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  }
];

export default function ResumeViewer() {
  const [activeResume, setActiveResume] = useState(resumes[0]);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative z-10">
      
      {/* Desktop Sidebar / Mobile Horizontal Scroll */}
      <div className="w-full lg:w-80 shrink-0 flex flex-col gap-4 lg:sticky lg:top-24">
        <div className="bg-white/60 backdrop-blur-2xl p-3 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible hide-scrollbar relative">
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay rounded-[2rem] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          
          {resumes.map((resume, idx) => {
            const isActive = activeResume.name === resume.name;
            return (
              <button
                key={idx}
                onClick={() => setActiveResume(resume)}
                className={`relative px-5 py-4 lg:py-3.5 text-left text-sm lg:text-base font-semibold rounded-2xl transition-all duration-300 shrink-0 lg:shrink flex items-center gap-3 ${
                  isActive ? 'text-white' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSidebarTab"
                    className="absolute inset-0 bg-primary rounded-2xl shadow-lg shadow-primary/25"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? 'text-white' : 'text-slate-400'}`}>
                  {resume.icon}
                </span>
                <span className="relative z-10 whitespace-nowrap lg:whitespace-normal">
                  {resume.name}
                </span>
              </button>
            );
          })}
        </div>
        
        {/* Quick Actions Panel */}
        <div className="bg-white/60 backdrop-blur-2xl p-4 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-3">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Actions</p>
          <a 
            href={activeResume.url} 
            download 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white hover:bg-primary transition-all duration-300 rounded-xl font-bold shadow-lg shadow-slate-900/10 hover:shadow-primary/30 w-full"
          >
            <span>Download PDF</span>
            <svg className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
          <div className="flex justify-center w-full mt-2">
            <Script src="https://platform.linkedin.com/badges/js/profile.js" strategy="lazyOnload" />
            <div 
              className="badge-base LI-profile-badge" 
              data-locale="en_US" 
              data-size="medium" 
              data-theme="light" 
              data-type="VERTICAL" 
              data-vanity="rishvinreddy" 
              data-version="v1"
            >
              <a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/rishvinreddy?trk=profile-badge">Rishvin Reddy</a>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Container */}
      <div className="flex-1 w-full relative">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeResume.name}
            initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -20, filter: 'blur(10px)', transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="w-full h-[650px] lg:h-[900px] bg-white rounded-[2rem] overflow-hidden border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative group isolate"
          >
            {/* Ultra-subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-indigo-500/5 opacity-80 -z-10 pointer-events-none"></div>
            
            <iframe 
              className="w-full h-full relative z-10 bg-transparent rounded-[2rem]" 
              src={`${activeResume.url}#view=FitH`} 
              frameBorder="0"
              title={`Resume - ${activeResume.name}`}
            ></iframe>

            {/* Loading State fallback visible before iframe loads completely */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 -z-20 pointer-events-none bg-slate-50">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
                <svg className="w-12 h-12 mb-4 text-primary relative z-10 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </motion.div>
              <p className="text-base font-bold text-slate-800 tracking-tight">Rendering High-Res PDF...</p>
              <p className="text-xs font-medium text-slate-400 mt-1">Please wait a moment</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}

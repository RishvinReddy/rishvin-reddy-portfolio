'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '@/data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function HomeProjectGallery({ initialProjects }: { initialProjects: Project[] }) {
  const [filter, setFilter] = useState('all');

  console.log("initialProjects:", initialProjects.length);
  const filteredProjects = initialProjects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'iot') return project.tags.includes('IoT') || project.tags.includes('Systems');
    if (filter === 'security') return project.tags.includes('Cybersecurity') || project.tags.includes('Web3');
    if (filter === 'web') return project.tags.includes('Web') || project.tags.includes('AI / ML') || project.tags.includes('Python');
    return true;
  });

  const getBtnClass = (currentFilter: string) => {
    return filter === currentFilter
      ? "px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 bg-slate-900 text-white shadow-xl shadow-slate-900/20"
      : "px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 bg-white border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700 hover:shadow-md";
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-10 scroll-reveal">
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-950 font-display leading-[1.05] mb-5">
          Featured{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-teal-400">
            Projects
          </span>
        </h2>
        <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
          A selection of engineering challenges solved with <strong className="text-emerald-600 font-semibold">IoT</strong>, <strong className="text-violet-600 font-semibold">Blockchain</strong>, and <strong className="text-slate-800 font-semibold">Secure Systems</strong>.
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button onClick={() => setFilter('all')} className={getBtnClass('all')}>All Projects</button>
          <button onClick={() => setFilter('iot')} className={getBtnClass('iot')}>IoT & Embedded</button>
          <button onClick={() => setFilter('security')} className={getBtnClass('security')}>Security</button>
          <button onClick={() => setFilter('web')} className={getBtnClass('web')}>Web & AI</button>
        </div>

        {/* GitHub Powered Subtext */}
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
          <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          GitHub-powered projects · Automatically updated
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div 
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full flex flex-col items-center justify-center text-slate-500 py-20 border-2 border-dashed border-slate-200 rounded-3xl"
            >
              <svg className="w-12 h-12 text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <p className="font-semibold text-lg">No projects found</p>
              <p className="text-sm">Try selecting a different category.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* View All Button */}
      <div className="mt-16 text-center scroll-reveal">
        <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white border border-indigo-200 text-indigo-700 font-bold hover:bg-indigo-50 hover:shadow-lg transition-all duration-300 group">
          View All Projects
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

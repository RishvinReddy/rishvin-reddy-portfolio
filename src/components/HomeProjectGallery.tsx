'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '@/data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomeProjectGallery({ initialProjects }: { initialProjects: Project[] }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = initialProjects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'iot') return project.tags.includes('IoT') || project.tags.includes('Systems');
    if (filter === 'security') return project.tags.includes('Cybersecurity') || project.tags.includes('Web3');
    if (filter === 'web') return project.tags.includes('Web') || project.tags.includes('AI / ML') || project.tags.includes('Python');
    return true;
  });

  const getBtnClass = (currentFilter: string) => {
    return filter === currentFilter
      ? "filter-btn active px-7 py-3 rounded-2xl text-[13px] font-black tracking-wide uppercase transition-all duration-300 border border-transparent shadow-2xl bg-slate-900 text-white"
      : "filter-btn px-7 py-3 rounded-2xl bg-white/80 backdrop-blur text-slate-500 border border-slate-200 text-[13px] font-black tracking-wide uppercase transition-all duration-300 hover:border-slate-300 hover:shadow-2xl hover:-translate-y-0.5";
  };

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        <button onClick={() => setFilter('all')} className={getBtnClass('all')}>All Projects</button>
        <button onClick={() => setFilter('iot')} className={getBtnClass('iot')}>IoT & Embedded</button>
        <button onClick={() => setFilter('security')} className={getBtnClass('security')}>Security</button>
        <button onClick={() => setFilter('web')} className={getBtnClass('web')}>Web & AI</button>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div 
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))
          ) : (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center text-slate-500 py-10"
            >
              No projects found for this category.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

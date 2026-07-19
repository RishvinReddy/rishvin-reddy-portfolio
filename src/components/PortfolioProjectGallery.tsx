'use client';
import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '@/data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';

export default function PortfolioProjectGallery({ initialProjects }: { initialProjects: Project[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('all');
  const [sortMethod, setSortMethod] = useState('date'); // 'date', 'title', 'impact'

  const filteredAndSortedProjects = useMemo(() => {
    let result = [...initialProjects];

    // 1. Search Filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        (p.language && p.language.toLowerCase().includes(q))
      );
    }

    // 2. Tag Filter
    if (activeTag !== 'all') {
      if (activeTag === 'iot') {
        result = result.filter(p => p.tags.includes('IoT') || p.tags.includes('Systems'));
      } else if (activeTag === 'blockchain') {
        result = result.filter(p => p.tags.includes('Web3'));
      } else if (activeTag === 'security') {
        result = result.filter(p => p.tags.includes('Cybersecurity'));
      } else if (activeTag === 'web') {
        result = result.filter(p => p.tags.includes('Web') || p.tags.includes('HTML') || p.tags.includes('TypeScript'));
      } else if (activeTag === 'ai') {
        result = result.filter(p => p.tags.includes('AI / ML') || p.tags.includes('Data'));
      } else if (activeTag === 'mobile') {
        result = result.filter(p => p.tags.includes('Java')); // Approximation for mobile based on typical languages
      } else if (activeTag === 'dbms') {
        result = result.filter(p => p.tags.includes('Data'));
      }
    }

    // 3. Sort
    result.sort((a, b) => {
      if (sortMethod === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortMethod === 'impact') {
        return (b.stars || 0) - (a.stars || 0);
      }
      // default to date/order fetched from GH (which is updated_at desc usually)
      return 0;
    });

    return result;
  }, [initialProjects, searchQuery, activeTag, sortMethod]);

  const getPillClass = (tag: string) => {
    return activeTag === tag
      ? "filter-pill active px-4 py-1.5 text-xs font-bold rounded-full border border-transparent bg-slate-900 text-white"
      : "filter-pill px-4 py-1.5 text-xs font-bold rounded-full border border-slate-200 text-slate-600 hover:border-primary/40 hover:text-primary bg-white cursor-pointer transition-colors";
  };

  return (
    <>
      {/* Search & Filters Section */}
      <section className="py-12 border-b border-slate-200/60 bg-white/50 backdrop-blur-md relative z-20">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div className="w-full md:max-w-md">
              <label htmlFor="projectSearch" className="sr-only">Search Projects</label>
              <div className="relative">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input 
                  id="projectSearch" 
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects, tech or keywords..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-700 placeholder-slate-400 outline-none transition-all focus:border-primary/50 focus:bg-white focus:ring-2 focus:ring-primary/20" 
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setActiveTag('all')} className={getPillClass('all')}>All</button>
              <button onClick={() => setActiveTag('iot')} className={getPillClass('iot')}>IoT</button>
              <button onClick={() => setActiveTag('blockchain')} className={getPillClass('blockchain')}>Blockchain</button>
              <button onClick={() => setActiveTag('security')} className={getPillClass('security')}>Security</button>
              <button onClick={() => setActiveTag('web')} className={getPillClass('web')}>Web</button>
              <button onClick={() => setActiveTag('mobile')} className={getPillClass('mobile')}>Mobile</button>
              <button onClick={() => setActiveTag('ai')} className={getPillClass('ai')}>AI / ML</button>
              <button onClick={() => setActiveTag('dbms')} className={getPillClass('dbms')}>DBMS</button>
            </div>
            
            <select 
              value={sortMethod}
              onChange={(e) => setSortMethod(e.target.value)}
              className="appearance-none text-xs font-semibold bg-white border border-slate-200 rounded-full py-2 pl-4 pr-8 text-slate-600 outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23475569%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:10px_10px] bg-[position:right_12px_center]"
            >
              <option value="date">Latest First</option>
              <option value="title">A → Z</option>
              <option value="impact">Most Stars</option>
            </select>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-slate-200/50 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
            <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] animate-pulse delay-700 mix-blend-multiply"></div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-screen-2xl px-6 lg:px-16">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl flex flex-col items-center text-center mb-16">
            <div className="mb-6 flex items-center justify-center gap-3 w-full">
              <div className="flex-1 h-px bg-gradient-to-l from-slate-300/60 to-transparent max-w-[120px]"></div>
              <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-slate-700 bg-slate-100 border border-slate-200/70 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-pulse"></span>
                Filtered Results
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-300/60 to-transparent max-w-[120px]"></div>
            </div>
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
              Found <strong className="text-slate-900 font-bold">{filteredAndSortedProjects.length}</strong> matching projects.
            </p>
          </div>

          {/* Dynamic Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {filteredAndSortedProjects.length > 0 ? (
                filteredAndSortedProjects.map((project, index) => (
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
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-24 text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-200/50 flex items-center justify-center">
                    <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9.172 16.172a4 4 0 015.656 0M9 12h.01M15 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">No projects found</h3>
                  <p className="text-slate-500 text-sm">Try a different search term or filter.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, ShieldCheck, Medal, Sparkles, ChevronRight } from "lucide-react";
import awardsDataRaw from "../../public/data/awards.json";

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />
};

export default function AwardsClient() {
  const { awards: awardsData, timeline } = awardsDataRaw;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-amber-500/10 dark:bg-amber-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[105rem] mx-auto px-6 py-24 sm:py-32">
        {/* Header Section */}
        <div className="text-center mb-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4" />
            Achievements
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8"
          >
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 dark:from-amber-400 dark:via-orange-400 dark:to-rose-400">Recognition</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            A collection of notable milestones and recognitions that reflect my work ethic, engineering mindset, and commitment to building impactful solutions.
          </motion.p>
        </div>

        {/* Intellectual Property Spotlight (Wide Section) */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32 w-full"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-500/20 p-8 md:p-12 shadow-2xl shadow-amber-500/5 group flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] bg-amber-400/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-amber-400/30 transition-all duration-700" />
            
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-black uppercase tracking-widest rounded-full mb-6">
                🏅 Registered Design Patent
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
                Government of India Registration
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Co-inventor of an innovative <strong className="text-gray-900 dark:text-white">IoT Connectivity Device</strong>. Officially registered design protecting the unique form factor and hardware schema (Design No. 470097-001).
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/60 dark:bg-white/10 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10 backdrop-blur-sm">Class 14-02</span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/60 dark:bg-white/10 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10 backdrop-blur-sm">IoT Hardware</span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 backdrop-blur-sm">Granted & Registered</span>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <a href="/assets/certificates/CERTIFICATE.pdf" target="_blank" rel="noreferrer" className="w-full md:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6" />
                View Certificate
              </a>
            </div>
          </div>
        </motion.section>

        {/* Awards Grid (Ultra Wide) */}
        <section className="mb-32 w-full">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {awardsData.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl bg-gray-50 dark:bg-white/5 shadow-xl border border-gray-200 dark:border-white/10 overflow-hidden flex flex-col md:flex-row hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
              >
                <div className="relative h-64 md:h-auto md:w-2/5 overflow-hidden shrink-0">
                  <img 
                    src={award.image} 
                    alt={award.title}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent" />
                </div>

                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {iconMap[award.iconType]}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {award.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                    {award.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                    <div className="flex gap-2">
                      <span className="bg-gray-200 dark:bg-white/10 px-4 py-1.5 rounded-full text-gray-800 dark:text-gray-200 text-sm font-medium">
                        {award.organization}
                      </span>
                      <span className="bg-gray-200 dark:bg-white/10 px-4 py-1.5 rounded-full text-gray-800 dark:text-gray-200 text-sm font-medium">
                        {award.year}
                      </span>
                    </div>
                    <a href={award.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold hover:text-amber-700 dark:hover:text-amber-300 transition-colors group/link">
                      View Certificate
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline Section (Wide) */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-7xl mx-auto bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-xl">
              <Medal className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Recognition Timeline</h2>
          </div>

          <div className="space-y-8 pl-4 md:pl-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-10 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-gradient-to-br before:from-amber-400 before:to-orange-500 before:rounded-full before:shadow-[0_0_10px_rgba(245,158,11,0.5)] after:absolute after:left-[5px] after:top-6 after:w-[2px] after:h-[calc(100%+16px)] after:bg-gray-200 dark:after:bg-white/10 last:after:hidden">
                <span className="text-sm font-bold text-amber-600 dark:text-amber-400 mb-1 block uppercase tracking-wider">{item.year}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.org}</p>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}

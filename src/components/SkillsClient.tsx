"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Cpu, Shield, Database, Layout, Box, ShieldCheck, Download } from "lucide-react";
import certificationsData from "../../public/data/certifications.json";
import skillsData from "../../public/data/skills.json";

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />
};

export default function SkillsClient() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-pulse" />
        <div className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 py-24 sm:py-32">
        {/* Hero Section */}
        <div className="text-center mb-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Engineering Arsenal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8"
          >
            Tools, Frameworks &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400">
              Core Expertise.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical stack, from frontend interfaces to embedded IoT systems and cybersecurity protocols, backed by verified certifications.
          </motion.p>
        </div>

        {/* Patent Spotlight (Wide Section) */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 w-full"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-500/10 dark:to-orange-500/10 border border-yellow-200 dark:border-yellow-500/20 p-8 md:p-12 shadow-xl shadow-yellow-500/5 group flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-yellow-400/30 transition-all duration-700" />
            
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-100 dark:bg-yellow-500/20 border border-yellow-300 dark:border-yellow-500/30 text-yellow-800 dark:text-yellow-300 text-xs font-black uppercase tracking-widest rounded-full mb-6">
                🏅 Registered Patent
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
                Govt. of India Design Patent
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Co-inventor of an innovative <strong className="text-gray-900 dark:text-white">IoT Connectivity Device</strong>. Officially registered design protecting the unique form factor and hardware schema (Design No. 470097-001).
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/60 dark:bg-white/10 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10 backdrop-blur-sm">Class 14-02</span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/60 dark:bg-white/10 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10 backdrop-blur-sm">IoT Hardware</span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 backdrop-blur-sm">Registered</span>
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

        {/* Wide Skills Grid */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Languages Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 md:p-10 shadow-lg backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Code2 className="w-8 h-8 text-blue-500" />
              Language Proficiency
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">Core programming languages I use day-to-day.</p>
            
            <div className="space-y-6">
              {skillsData.languages.map((lang, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-gray-900 dark:text-gray-200">{lang.name}</span>
                    <span className="text-gray-500">{lang.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full ${lang.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools Bento Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 md:p-10 shadow-lg backdrop-blur-xl flex flex-col"
          >
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Box className="w-8 h-8 text-purple-500" />
              Tools & Frameworks
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">My tech stack across different domains.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              {skillsData.categories.map((cat, idx) => (
                <div key={idx} className="bg-white dark:bg-black/20 rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 bg-gray-50 dark:bg-white/5 rounded-lg ${cat.iconColor}`}>
                      {iconMap[cat.iconType]}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Certificates Grid (Ultra Wide) */}
        <section className="mb-24 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Verified achievements & continuous learning.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-gray-50 dark:bg-white/5 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-48 bg-gray-100 dark:bg-black/30 p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-black/20" />
                  <img src={cert.image.startsWith('data/') ? `/${cert.image}` : cert.image} alt={cert.title} className="max-h-full max-w-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-md" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full uppercase tracking-wider">
                      {cert.date}
                    </span>
                    <a href={cert.pdf.startsWith('data/') ? `/${cert.pdf}` : cert.pdf} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors" title="View Certificate">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2" title={cert.title}>{cert.title}</h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">{cert.issuer}</p>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cert.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-500/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 w-full"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Want the full skills matrix or verified certificates?</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">I can share verified PDF certificates, GitHub repos, and technical reports on request.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 shrink-0">
            <a href="/resume" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:scale-105 transition-all duration-300">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-blue-200 dark:border-blue-500/30 bg-white dark:bg-transparent text-gray-900 dark:text-white font-bold hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors">
              Request Documents
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

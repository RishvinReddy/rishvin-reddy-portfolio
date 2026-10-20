"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Search,
  X,
  Layers,
  Sparkles,
  Calendar,
  FileText,
  Video,
  Globe,
  CheckCircle2,
  ChevronRight,
  Terminal,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Code2,
  RotateCcw,
} from "lucide-react";
import {
  hackathons,
  HackathonEntry,
  HACKATHON_DOMAINS,
  HACKATHON_STATUSES,
  TechnicalDomain,
} from "@/data/hackathons";
import { HandUnderline, HandwrittenNote } from "@/components/handwritten";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function HackathonsClient() {
  const [selectedHackathon, setSelectedHackathon] = useState<HackathonEntry | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [activeTabLayer, setActiveTabLayer] = useState<Record<string, number>>({});

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedHackathon(null);
      }
    };
    if (selectedHackathon) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedHackathon]);

  // Extract distinct years from data
  const availableYears = useMemo(() => {
    return Array.from(new Set(hackathons.map((h) => h.year))).sort((a, b) => b - a);
  }, []);

  // Filtered dataset
  const filteredHackathons = useMemo(() => {
    return hackathons.filter((h) => {
      const matchesSearch =
        !searchQuery.trim() ||
        h.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        h.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        h.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
        h.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        h.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        h.domains.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase())) ||
        h.summary.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDomain =
        selectedDomain === "all" || h.domains.includes(selectedDomain as TechnicalDomain);

      const matchesYear =
        selectedYear === "all" || h.year.toString() === selectedYear;

      const matchesStatus =
        selectedStatus === "all" || h.status === selectedStatus;

      return matchesSearch && matchesDomain && matchesYear && matchesStatus;
    });
  }, [searchQuery, selectedDomain, selectedYear, selectedStatus]);

  const isFiltered =
    searchQuery.trim() !== "" ||
    selectedDomain !== "all" ||
    selectedYear !== "all" ||
    selectedStatus !== "all";

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedDomain("all");
    setSelectedYear("all");
    setSelectedStatus("all");
  };

  const featuredHackathons = useMemo(() => {
    return hackathons.filter((h) => h.isFeatured);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 selection:bg-rose-500/20 selection:text-slate-900 relative overflow-hidden">
      {/* ── Soft Ambient Pastel Lighting (Light Theme) ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="hero-blob absolute -top-24 -left-20 w-[600px] h-[600px] rounded-full bg-purple-200/40 blur-[90px]" />
        <div className="hero-blob-2 absolute top-40 right-[-10%] w-[500px] h-[500px] rounded-full bg-rose-200/35 blur-[80px]" />
        <div className="hero-blob-3 absolute bottom-20 left-1/4 w-[450px] h-[450px] rounded-full bg-indigo-200/30 blur-[70px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        {/* ── Section 1: Hero ── */}
        <header className="relative pt-6 pb-16 md:pt-12 md:pb-24 border-b border-slate-200/80">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Top Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200 text-slate-700 text-xs font-mono tracking-wider uppercase mb-6 shadow-xs backdrop-blur-md"
            >
              <Terminal className="w-3.5 h-3.5 text-rose-600" />
              <span>Hackathons & Rapid Prototyping Archive</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
            </motion.div>

            {/* Handwritten note annotation */}
            <div className="flex justify-center mb-3">
              <HandwrittenNote rotation={-2} color="accent" arrowDirection="curved-down-right" className="hidden sm:inline-flex text-xs">
                tested under pressure & strict constraints
              </HandwrittenNote>
            </div>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 mb-6 font-display"
            >
              Built under{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600">
                pressure.
                <HandUnderline color="#e11d48" className="-bottom-2.5" />
              </span>
            </motion.h1>

            {/* Secondary Headline & Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 max-w-2xl font-light leading-relaxed mb-8"
            >
              <span className="font-serif italic text-slate-900 text-xl sm:text-2xl font-normal block sm:inline">
                Designed to solve real problems.{" "}
              </span>
              A verifiable archive of competitive engineering sprints, cloud architectures, and algorithmic prototypes built within tight constraints.
            </motion.p>

            {/* Navigation Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-12"
            >
              <a
                href="#featured"
                className="px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-sm hover:scale-[1.02] flex items-center gap-1.5"
              >
                <span>Featured Deep Dives</span>
                <ChevronRight className="w-4 h-4 text-white" />
              </a>
              <a
                href="#archive"
                className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/90 font-medium text-xs sm:text-sm tracking-wide transition-all hover:scale-[1.02] flex items-center gap-1.5 shadow-xs"
              >
                <span>Browse All ({hackathons.length})</span>
              </a>
              <a
                href="https://github.com/RishvinReddy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200 font-mono text-xs transition-all flex items-center gap-1.5 shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repos</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </motion.div>

            {/* Key Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-4"
            >
              <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/80 text-left shadow-xs backdrop-blur-xs">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">Challenges</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">4 Documented</p>
                <p className="text-[11px] text-slate-500 mt-1">2023 — 2026 Archive</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/80 text-left shadow-xs backdrop-blur-xs">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">Architecture</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">100% Serverless</p>
                <p className="text-[11px] text-slate-500 mt-1">AWS SAM & EventBridge</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/80 text-left shadow-xs backdrop-blur-xs">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">Quality Assurance</p>
                <p className="text-2xl sm:text-3xl font-bold text-emerald-600 font-display">141+ Tests</p>
                <p className="text-[11px] text-slate-500 mt-1">Automated test suites</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/80 text-left shadow-xs backdrop-blur-xs">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">Verification</p>
                <p className="text-2xl sm:text-3xl font-bold text-indigo-600 font-display">Open Source</p>
                <p className="text-[11px] text-slate-500 mt-1">Public code & live URLs</p>
              </div>
            </motion.div>
          </div>
        </header>

        {/* ── Section 2: Featured Competition Case Studies ── */}
        <section id="featured" className="py-16 md:py-24 border-b border-slate-200/80 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-rose-600 text-xs font-mono uppercase tracking-widest mb-2 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Editorial Case Studies</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Featured Engineering Deep Dives
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Full architectural breakdowns of competitive hackathons built on AWS serverless, dynamic programming, and event-driven backends.
            </p>
          </div>

          <div className="space-y-16">
            {featuredHackathons.map((hackathon) => {
              const currentLayerIdx = activeTabLayer[hackathon.id] || 0;
              const activeLayer = hackathon.architectureLayers?.[currentLayerIdx];

              return (
                <div
                  key={hackathon.id}
                  className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* Top Bar / Metadata Strip */}
                  <div className="px-6 sm:px-8 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 bg-slate-50/80">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-rose-50 text-rose-700 border border-rose-200/80">
                        {hackathon.event}
                      </span>
                      {hackathon.track && (
                        <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                          <span className="text-slate-300">/</span> {hackathon.track}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {hackathon.dates}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {hackathon.statusLabel}
                      </span>
                    </div>
                  </div>

                  {/* Main Content Body */}
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                      {/* Left Column: Abstract & System Highlights (7 Cols) */}
                      <div className="lg:col-span-7 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 font-display">
                            {hackathon.title}
                          </h3>
                          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-6">
                            {hackathon.tagline}
                          </p>

                          {/* Problem vs Solution Split */}
                          <div className="space-y-4 mb-8">
                            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60">
                              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-800 font-bold block mb-1">
                                Problem Statement
                              </span>
                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                {hackathon.problem}
                              </p>
                            </div>
                            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/60">
                              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-800 font-bold block mb-1">
                                Engineered Solution
                              </span>
                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                {hackathon.solution}
                              </p>
                            </div>
                          </div>

                          {/* Rishvin's Concrete Hands-on Ownership */}
                          <div className="mb-6">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-1.5">
                              <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
                              <span>Hands-on Engineering Ownership</span>
                            </h4>
                            <ul className="space-y-2">
                              {hackathon.rishvinContributions.slice(0, 3).map((item, cIdx) => (
                                <li key={cIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                                  <span className="text-rose-600 font-mono mt-0.5 font-bold">›</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Tech Stack Chips */}
                        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-mono text-slate-400 mr-1">Stack:</span>
                          {hackathon.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Column: Architecture Layers & Evidence (5 Cols) */}
                      <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                        {/* Metrics Bar */}
                        <div className="grid grid-cols-2 gap-3">
                          {hackathon.metricsAndOutcomes.map((metric, mIdx) => (
                            <div
                              key={mIdx}
                              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80"
                            >
                              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                                {metric.label}
                              </p>
                              <p className="text-lg font-bold text-slate-900 font-mono mt-0.5">{metric.value}</p>
                              {metric.detail && (
                                <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                                  {metric.detail}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Interactive Architecture Layer Inspector */}
                        {hackathon.architectureLayers && hackathon.architectureLayers.length > 0 && (
                          <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/90 flex flex-col shadow-2xs">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 font-bold flex items-center gap-1.5">
                                <Layers className="w-3.5 h-3.5 text-indigo-600" />
                                <span>Architecture Pipeline</span>
                              </span>
                              <span className="text-[10px] font-mono text-slate-500">
                                Layer {currentLayerIdx + 1} of {hackathon.architectureLayers.length}
                              </span>
                            </div>

                            {/* Tabs */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-3">
                              {hackathon.architectureLayers.map((layer, lIdx) => (
                                <button
                                  key={layer.layer}
                                  onClick={() =>
                                    setActiveTabLayer((prev) => ({ ...prev, [hackathon.id]: lIdx }))
                                  }
                                  className={`px-2 py-1.5 rounded-lg text-[10px] font-mono text-left truncate transition-all cursor-pointer ${
                                    currentLayerIdx === lIdx
                                      ? "bg-slate-900 text-white font-bold shadow-xs"
                                      : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
                                  }`}
                                  title={layer.layer}
                                >
                                  {layer.layer.split(" ")[0]}
                                </button>
                              ))}
                            </div>

                            {/* Active Layer Details */}
                            {activeLayer && (
                              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 min-h-[90px] shadow-2xs">
                                <p className="text-xs font-bold text-indigo-700 font-mono mb-1">
                                  {activeLayer.layer}
                                </p>
                                <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                                  {activeLayer.description}
                                </p>
                                <div className="flex flex-wrap gap-1">
                                  {activeLayer.components.map((c) => (
                                    <span
                                      key={c}
                                      className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-indigo-50 text-indigo-700 border border-indigo-200/60"
                                    >
                                      {c}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Verified Links & Modal Trigger */}
                        <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                          <button
                            onClick={() => setSelectedHackathon(hackathon)}
                            className="w-full sm:flex-1 px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold font-mono tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                          >
                            <Code2 className="w-3.5 h-3.5" />
                            <span>Inspect Full Architecture</span>
                          </button>

                          {hackathon.evidence.demoUrl && (
                            <a
                              href={hackathon.evidence.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                              title="Live Production Demo"
                            >
                              <Globe className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Live</span>
                            </a>
                          )}

                          {hackathon.evidence.githubUrl && (
                            <a
                              href={hackathon.evidence.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                              title="Public GitHub Repository"
                            >
                              <GithubIcon className="w-3.5 h-3.5 text-slate-700" />
                              <span>Repo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Section 3: Interactive Hackathons Archive ── */}
        <section id="archive" className="py-16 md:py-24 border-b border-slate-200/80 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 text-xs font-mono uppercase tracking-widest mb-2 font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                <span>Filterable Repository</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Hackathon Archive
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Filter by engineering domain, submission year, or competition status. Every card links to documented architectures or source repositories.
            </p>
          </div>

          {/* Filter Toolbar */}
          <div className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/90 backdrop-blur-md mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-4">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search challenges, tools (AWS SAM, Docker, Lambda), keywords..."
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30 transition-all font-mono"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Status and Year Dropdowns */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 focus:outline-none focus:border-rose-500 cursor-pointer"
                >
                  <option value="all">All Years</option>
                  {availableYears.map((yr) => (
                    <option key={yr} value={yr.toString()}>
                      Year {yr}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 focus:outline-none focus:border-rose-500 cursor-pointer"
                >
                  <option value="all">All Statuses</option>
                  {HACKATHON_STATUSES.map((st) => (
                    <option key={st.value} value={st.value}>
                      {st.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Domain Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mr-1 shrink-0">
                Domain:
              </span>
              <button
                onClick={() => setSelectedDomain("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono shrink-0 transition-all cursor-pointer ${
                  selectedDomain === "all"
                    ? "bg-slate-900 text-white font-semibold shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200/80"
                }`}
              >
                All Domains
              </button>
              {HACKATHON_DOMAINS.map((domain) => (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono shrink-0 transition-all cursor-pointer ${
                    selectedDomain === domain
                      ? "bg-rose-600 text-white font-semibold shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200/80"
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>

            {/* Active Filters Summary / Reset */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <p>
                Showing <span className="text-slate-900 font-bold">{filteredHackathons.length}</span> of{" "}
                <span className="text-slate-900 font-bold">{hackathons.length}</span> verified challenges
              </p>
              {isFiltered && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-rose-600 hover:text-rose-700 font-semibold cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Cards Grid */}
          {filteredHackathons.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white border border-slate-200 shadow-xs">
              <Terminal className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 font-display mb-1">
                No matching hackathons found
              </h3>
              <p className="text-sm text-slate-500 mb-4 max-w-sm mx-auto">
                No archived entries match your current search and filter parameters.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono transition-all cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHackathons.map((hackathon) => (
                <div
                  key={hackathon.id}
                  className="rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 p-6 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md group"
                >
                  <div>
                    {/* Top Row: Year, Status */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {hackathon.year}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                        {hackathon.statusLabel.split("·")[0].trim()}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors font-display mb-2 line-clamp-1">
                      {hackathon.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {hackathon.tagline}
                    </p>

                    {/* Event & Organizer */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 mb-4 text-[11px] font-mono">
                      <p className="text-slate-800 font-medium truncate">{hackathon.event}</p>
                      <p className="text-slate-500 text-[10px] truncate">{hackathon.organizer}</p>
                    </div>

                    {/* Domain Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {hackathon.domains.map((dom) => (
                        <span
                          key={dom}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200/80"
                        >
                          {dom}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions & Stack */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-slate-500">
                      <span>Role: {hackathon.role.split("&")[0].trim()}</span>
                      <span>Team: {hackathon.team}</span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedHackathon(hackathon)}
                        className="flex-1 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Inspect System</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
                      </button>

                      {hackathon.evidence.githubUrl && (
                        <a
                          href={hackathon.evidence.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-xl bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 flex items-center justify-center transition-all shrink-0 shadow-2xs"
                          title="GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {hackathon.evidence.demoUrl && (
                        <a
                          href={hackathon.evidence.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-xl bg-white hover:bg-slate-100 text-emerald-600 hover:text-emerald-700 border border-slate-200 flex items-center justify-center transition-all shrink-0 shadow-2xs"
                          title="Live Demo"
                        >
                          <Globe className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ── Section 4: Engineering Standards & Recognition ── */}
        <section className="py-16 md:py-24 border-b border-slate-200/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold mb-2 block">
              Architectural Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              How I approach competitive sprints
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-light">
              Building under a 48-hour or multi-week hackathon window demands ruthless prioritization. Rather than shipping disposable mocks, every submission adheres to enterprise engineering rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-200/80 text-rose-700 flex items-center justify-center mb-4 font-mono font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                Automated Test Rigor
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hackathon prototypes fail most often at edge cases. In HeatCredit, I established 141 passing unit and integration tests covering boundary calculations, schema validations, and mock failure modes.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200/80 text-indigo-700 flex items-center justify-center mb-4 font-mono font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                Event-Driven Serverless
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monolithic architectures struggle under unpredictable burst traffic. Using AWS SAM, Amazon EventBridge, and DynamoDB single-table designs guarantees sub-second responsiveness without paying for idle compute.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-700 flex items-center justify-center mb-4 font-mono font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                Zero-Placeholder Transparency
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No fake metrics, mock buttons, or simulated endpoints. All submitted architectures are backed by verifiable open source git commits, OpenAPI 3.0 specs, and cloud deployment records.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 5: Collaborative Call to Action ── */}
        <section className="py-16 md:py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Have an ambitious engineering challenge?
            </h2>
            <p className="text-base text-slate-600 font-light leading-relaxed mb-8">
              I actively seek high-impact hackathons, algorithmic sprints, and systems challenges. If you&apos;re building a team or organizing an innovation track, let&apos;s connect.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 font-semibold text-sm tracking-wide transition-all shadow-md hover:scale-[1.02]"
              >
                Reach Out to Collaborate
              </Link>
              <a
                href="https://github.com/RishvinReddy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-sm font-medium transition-all hover:scale-[1.02] flex items-center gap-2 shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Explore GitHub Codebases</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ── Detailed Technical Specification Modal (Light Theme) ── */}
      <AnimatePresence>
        {selectedHackathon && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedHackathon(null)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-slate-200/90 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 text-slate-900"
            >
              {/* Modal Header */}
              <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-white/95 sticky top-0 z-20">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                    System Architecture Specification
                  </span>
                </div>
                <button
                  onClick={() => setSelectedHackathon(null)}
                  className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                  title="Close modal (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content Scrollable Area */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
                {/* Header Information */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 font-semibold">
                      {selectedHackathon.event}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {selectedHackathon.dates}
                    </span>
                    <span className="text-xs font-mono text-emerald-700 font-medium ml-auto">
                      {selectedHackathon.statusLabel}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-2">
                    {selectedHackathon.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                    {selectedHackathon.tagline}
                  </p>
                </div>

                {/* Evidence Links Bar */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2 font-semibold">
                    Verified Artifacts:
                  </span>
                  {selectedHackathon.evidence.githubUrl && (
                    <a
                      href={selectedHackathon.evidence.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-mono flex items-center gap-1.5 transition-colors border border-slate-200 shadow-2xs"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Repository</span>
                    </a>
                  )}
                  {selectedHackathon.evidence.demoUrl && (
                    <a
                      href={selectedHackathon.evidence.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-emerald-700 text-xs font-mono flex items-center gap-1.5 transition-colors border border-slate-200 shadow-2xs font-medium"
                    >
                      <Globe className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Live Production Demo</span>
                    </a>
                  )}
                  {selectedHackathon.evidence.videoUrl && (
                    <a
                      href={selectedHackathon.evidence.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-rose-700 text-xs font-mono flex items-center gap-1.5 transition-colors border border-slate-200 shadow-2xs font-medium"
                    >
                      <Video className="w-3.5 h-3.5 text-rose-600" />
                      <span>Video Walkthrough</span>
                    </a>
                  )}
                  {selectedHackathon.evidence.submissionUrl && (
                    <a
                      href={selectedHackathon.evidence.submissionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-indigo-700 text-xs font-mono flex items-center gap-1.5 transition-colors border border-slate-200 shadow-2xs font-medium"
                    >
                      <FileText className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Submission Documentation</span>
                    </a>
                  )}
                  {selectedHackathon.evidence.articleUrl && (
                    <a
                      href={selectedHackathon.evidence.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-amber-800 text-xs font-mono flex items-center gap-1.5 transition-colors border border-slate-200 shadow-2xs font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
                      <span>Technical Article</span>
                    </a>
                  )}
                </div>

                {/* Team, Role, Domain Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Role</p>
                    <p className="text-xs font-semibold text-slate-900 mt-1 font-mono">
                      {selectedHackathon.role}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Team</p>
                    <p className="text-xs font-semibold text-slate-900 mt-1 font-mono">
                      {selectedHackathon.team}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Organizer</p>
                    <p className="text-xs font-semibold text-slate-900 mt-1 font-mono truncate">
                      {selectedHackathon.organizer}
                    </p>
                  </div>
                </div>

                {/* Architecture Overview */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-700 font-bold mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-indigo-600" />
                    <span>System Architecture Overview</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedHackathon.architectureOverview}
                  </p>
                </div>

                {/* Key Architectural & Technical Decisions */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-600" />
                    <span>Key Architectural Decisions & Trade-offs</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedHackathon.technicalDecisions.map((decision, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3"
                      >
                        <span className="text-amber-700 font-mono font-bold mt-0.5">#{dIdx + 1}</span>
                        <span>{decision}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rishvin's Concrete Hands-on Ownership */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-rose-600" />
                    <span>Rishvin&apos;s Direct Contributions</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedHackathon.rishvinContributions.map((contrib, cIdx) => (
                      <li
                        key={cIdx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lessons Learned */}
                {selectedHackathon.lessonsLearned && (
                  <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 text-xs sm:text-sm text-indigo-900">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-800 font-bold block mb-1">
                      Post-Mortem & Engineering Takeaway
                    </span>
                    <p className="leading-relaxed">{selectedHackathon.lessonsLearned}</p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 sm:px-8 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/80">
                <span className="text-[11px] font-mono text-slate-500">
                  {selectedHackathon.techStack.join(" · ")}
                </span>
                <button
                  onClick={() => setSelectedHackathon(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

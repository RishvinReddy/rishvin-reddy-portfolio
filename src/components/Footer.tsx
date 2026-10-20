"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  RishvinSignature,
  HandUnderline,
  HandwrittenNote,
  HandDrawnArrow,
} from "@/components/handwritten";

const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "C++": "#F34B7D",
  C: "#555555",
  Solidity: "#AA6746",
  Rust: "#DEA584",
  Go: "#00ADD8",
  HTML: "#E34C26",
  Shell: "#89E051",
  Documentation: "#8B949E",
};

export function Footer() {
  const pathname = usePathname();
  const [year, setYear] = useState("");
  const [time, setTime] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [repo, setRepo] = useState<{ name: string; url: string; lang: string } | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const circumference = 163.4;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear().toString());

    const updateClock = () => {
      const now = new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });
      setTime(now);
    };
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 300);
      const docH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = docH > 0 ? scrollY / docH : 0;
      setScrollPct(pct);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    fetch("https://api.github.com/users/RishvinReddy/repos?sort=updated&per_page=1")
      .then((r) => r.json())
      .then((data) => {
        if (data && data.length > 0) {
          setRepo({
            name: data[0].name,
            url: data[0].html_url,
            lang: data[0].language || "Documentation",
          });
        }
      })
      .catch((e) => console.error("Error fetching repo:", e));

    return () => {
      clearInterval(clockInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes("@")) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmailInput("");
    }, 3500);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("rishvinreddy@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  if (pathname === "/ide") return null;

  const langColor = (repo?.lang && LANG_COLORS[repo.lang]) || "#38bdf8";

  return (
    <>
      {/* ── Fixed Back-to-Top Floating Widget ── */}
      <button
        aria-label="Back to top"
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-slate-950/95 text-white backdrop-blur-md shadow-2xl border border-slate-700/60 flex items-center justify-center transition-all duration-300 hover:border-primary hover:scale-110 hover:shadow-primary/30 group ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/10" />
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - scrollPct)}
            className="text-primary group-hover:text-rose-400 transition-colors duration-300"
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
          />
        </svg>
        <svg className="w-5 h-5 relative z-10 text-white group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── Upgraded Footer Container ── */}
      <footer id="contact" className="bg-[#050811] border-t border-slate-800/80 relative overflow-hidden text-slate-300 select-text">
        
        {/* Ambient Glow Orbs & Blueprint Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-gradient-to-br from-primary/10 via-indigo-600/5 to-transparent rounded-full blur-[140px] opacity-75" />
          <div className="absolute bottom-10 right-1/4 w-[600px] h-[400px] bg-gradient-to-tr from-purple-600/10 via-pink-600/5 to-transparent rounded-full blur-[140px] opacity-65" />
          <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        {/* Top Edge Gradient Accent Line */}
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-indigo-500/50 via-primary/50 to-transparent" />

        <div className="mx-auto w-full max-w-[120rem] px-5 sm:px-8 lg:px-12 relative z-10 pt-16 sm:pt-20 pb-12">
          
          {/* ── TOP HERO CTA: "Let's Engineer Something Extraordinary" ── */}
          <div className="mb-16 p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-slate-800/90 shadow-2xl relative overflow-hidden backdrop-blur-md">
            {/* Subtle mesh background in CTA */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Available for High-Impact Projects
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight font-display mb-3">
                  Let&apos;s engineer something{" "}
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-400 to-indigo-400">
                    extraordinary.
                  </span>
                </h3>
                <HandUnderline className="w-48 sm:w-64 h-3.5 -mt-2 mb-3 text-primary/60" strokeWidth={2.5} />

                <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
                  Whether you are building next-generation web platforms, IoT hardware architectures, or enterprise workflows, my inbox is always open.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-2xl bg-primary hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2 cursor-pointer group"
                >
                  <span>Start a Conversation</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>

                <button
                  onClick={handleCopyEmail}
                  className="px-5 py-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-mono font-semibold text-xs sm:text-sm border border-slate-700/80 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <span className="text-emerald-400">✓</span>
                      <span className="text-emerald-300">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>rishvinreddy@gmail.com</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* ── Main 4-Column Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800/70">
            
            {/* Column 1: Identity & Current Status (Span 4) */}
            <div className="md:col-span-4 flex flex-col space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Link href="/" className="flex items-center gap-3.5 group w-fit">
                    <div className="relative w-12 h-12 rounded-2xl overflow-hidden ring-2 ring-slate-700/70 group-hover:ring-primary transition-all duration-300 shadow-md">
                      <Image src="/icon.png" alt="Rishvin" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300 group-hover:from-primary group-hover:to-rose-400 transition-all duration-300 tracking-wide font-display">
                        Rishvin
                      </h2>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        Founder, Rishvin Labs
                      </span>
                    </div>
                  </Link>
                </div>
                <p className="text-sm text-slate-200 font-semibold leading-snug">
                  Software Engineer | Founder of Rishvin Labs
                </p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed max-w-sm">
                  Building scalable software, cybersecurity systems, IoT solutions, and intelligent products.
                </p>
              </div>

              {/* Enhanced Currently Working On Box */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 transition-all duration-300 hover:border-slate-700 hover:shadow-lg backdrop-blur-xs relative overflow-hidden group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" />
                    </svg>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono font-bold">
                      Currently Working On
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                </div>

                <div className="flex items-center justify-between gap-2">
                  <a
                    href={repo?.url || "https://github.com/RishvinReddy"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-primary transition-colors truncate flex items-center gap-1.5 font-mono"
                    title={repo?.name}
                  >
                    <span>{repo?.name || "Loading..."}</span>
                    <svg className="w-3 h-3 text-slate-500 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-800/80">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: langColor }}
                  />
                  <span className="text-[11px] font-mono text-slate-400 font-medium">
                    {repo?.lang || "Fetching repository details..."}
                  </span>
                  <span className="text-[10px] font-mono text-slate-600 ml-auto">GitHub</span>
                </div>
              </div>

              {/* Status Pill */}
              <div className="inline-flex w-max items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-emerald-300">
                  Open to Work · Remote / Relocation
                </span>
              </div>
            </div>

            {/* Column 2 & 3: Explore & Resources (Span 4) */}
            <div className="md:col-span-4 grid grid-cols-2 gap-8 pt-1">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6 flex items-center font-mono">
                  <span className="w-3.5 h-[2px] bg-primary mr-2.5 rounded-full" /> Explore
                </h3>
                <ul className="space-y-3.5 text-sm">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About Me" },
                    { href: "/portfolio", label: "Portfolio" },
                    { href: "/hackathons", label: "Hackathons", badge: "Archive" },
                    { href: "/ide", label: "Projects IDE", badge: "Live" },
                    { href: "/services", label: "Services" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="hover:text-white text-slate-300 transition-colors flex items-center group py-0.5"
                      >
                        <span className="mr-2 text-slate-500 group-hover:text-primary group-hover:translate-x-1 transition-all">
                          ›
                        </span>
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="ml-2 px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-primary/15 text-primary border border-primary/25">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6 flex items-center font-mono">
                  <span className="w-3.5 h-[2px] bg-indigo-400 mr-2.5 rounded-full" /> Resources
                </h3>
                <ul className="space-y-3.5 text-sm">
                  {[
                    { href: "/resume", label: "Resume / CV", badge: "PDF" },
                    { href: "/skills", label: "Skills & Certs" },
                    { href: "/awards", label: "Awards" },
                    { href: "/blog", label: "Blog" },
                    { href: "/contact", label: "Contact" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="hover:text-white text-slate-300 transition-colors flex items-center group py-0.5"
                      >
                        <span className="mr-2 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all">
                          ›
                        </span>
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="ml-2 px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 4: Get Updates & Handwritten Signature (Span 4) */}
            <div className="md:col-span-4 flex flex-col space-y-6 pt-1">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4 flex items-center font-mono">
                  <span className="w-3.5 h-[2px] bg-purple-400 mr-2.5 rounded-full" /> Get Updates
                </h3>
                <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                  Subscribe to receive occasional writeups on systems engineering, patent inventions, and releases.
                </p>

                {subscribed ? (
                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2.5 animate-fade-in shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">✓</span>
                    <span>You&apos;re subscribed! Thank you for following my journey.</span>
                  </div>
                ) : (
                  <form className="flex items-center relative" onSubmit={handleSubscribe}>
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="you@email.com"
                      autoComplete="email"
                      required
                      className="w-full bg-slate-900/90 border border-slate-700/80 text-sm rounded-full py-2.5 pl-4 pr-12 text-white placeholder-slate-500 focus:outline-none focus:border-primary/80 focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="absolute right-1 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:bg-rose-500 transition-colors shadow-sm cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </form>
                )}
                <span className="text-[10px] text-slate-500 font-mono mt-1.5 block">
                  Zero spam · Unsubscribe anytime
                </span>
              </div>

              {/* Handcrafted Signature Stamp */}
              <div className="pt-2 flex flex-col items-start bg-slate-900/40 border border-slate-800/80 rounded-2xl p-4 relative overflow-hidden group">
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                    Signature Guarantee
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    E. Rishvin Reddy
                  </span>
                </div>
                <RishvinSignature className="w-64 sm:w-72 md:w-80 max-w-full h-auto text-slate-200 hover:text-white opacity-90 hover:opacity-100 transition-all duration-300 -rotate-2" />
                <span className="text-[10px] font-mono text-slate-500 mt-1 block">
                  Founder · Rishvin Labs
                </span>
              </div>
            </div>
          </div>

          {/* ── Connect Directory ── */}
          <div className="mt-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div className="flex items-center gap-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white flex items-center font-mono">
                  <span className="w-3.5 h-[2px] bg-slate-500 mr-2.5 rounded-full" /> Connect
                </h3>
                <div className="hidden sm:inline-flex items-center gap-1.5">
                  <HandwrittenNote rotation={-1} color="blue" className="text-xs">
                    Always open to collaborating
                  </HandwrittenNote>
                  <HandDrawnArrow direction="curved-down-right" className="w-6 h-5 text-indigo-400 -mt-1" />
                </div>
              </div>
              <span className="text-[11px] font-mono text-slate-500">Official Profiles &amp; Direct Inquiries</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
              {[
                {
                  platform: "GitHub",
                  handle: "@RishvinReddy",
                  roleTag: "Open Source & Systems",
                  href: "https://github.com/RishvinReddy",
                  iconBg: "bg-slate-900 group-hover:bg-[#24292e]",
                  iconColor: "text-slate-300 group-hover:text-white",
                  glow: "hover:border-slate-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]",
                  svg: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  platform: "LinkedIn",
                  handle: "/in/rishvinreddy",
                  roleTag: "Professional & Endorsements",
                  href: "https://www.linkedin.com/in/rishvinreddy",
                  iconBg: "bg-slate-900 group-hover:bg-[#0077b5]",
                  iconColor: "text-slate-300 group-hover:text-white",
                  glow: "hover:border-[#0077b5]/60 hover:shadow-[0_0_20px_rgba(0,119,181,0.18)]",
                  svg: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                },
                {
                  platform: "HackIndia",
                  handle: "View Profile",
                  roleTag: "Hackathon Finalist",
                  href: "https://hackindia.org/profile/rishvin_reddy",
                  iconBg: "bg-slate-900 group-hover:bg-[#7c3aed]",
                  iconColor: "text-slate-300 group-hover:text-white",
                  glow: "hover:border-purple-500/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.18)]",
                  svg: <span className="text-xs font-black tracking-tighter">HI</span>,
                },
                {
                  platform: "WeMakeDevs",
                  handle: "@rishvinreddy",
                  roleTag: "Community Contributor",
                  href: "https://www.wemakedevs.org/rishvinreddy",
                  iconBg: "bg-slate-900 group-hover:bg-[#0284c7]",
                  iconColor: "text-slate-300 group-hover:text-white",
                  glow: "hover:border-sky-500/60 hover:shadow-[0_0_20px_rgba(56,189,248,0.18)]",
                  svg: <span className="text-xs font-black tracking-tighter">W</span>,
                },
                {
                  platform: "YouTube",
                  handle: "@rishvinreddy",
                  roleTag: "Technical Walkthroughs",
                  href: "https://youtube.com/@rishvinreddy",
                  iconBg: "bg-slate-900 group-hover:bg-[#dc2626]",
                  iconColor: "text-slate-300 group-hover:text-white",
                  glow: "hover:border-red-500/60 hover:shadow-[0_0_20px_rgba(239,68,68,0.18)]",
                  svg: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
                {
                  platform: "Email",
                  handle: "rishvinreddy@gmail.com",
                  roleTag: "Direct Correspondence",
                  href: "mailto:rishvinreddy@gmail.com",
                  iconBg: "bg-slate-900 group-hover:bg-[#f43f5e]",
                  iconColor: "text-slate-300 group-hover:text-white",
                  glow: "hover:border-rose-500/60 hover:shadow-[0_0_20px_rgba(244,63,94,0.18)]",
                  svg: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
              ].map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  title={`${link.platform} - ${link.handle}`}
                  aria-label={`Visit my ${link.platform} profile`}
                  itemProp="sameAs"
                  className={`group flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:-translate-y-1 hover:bg-slate-900 ${link.glow} transition-all duration-300 shadow-xs cursor-pointer`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${link.iconBg} ${link.iconColor} border border-slate-800 transition-all duration-300 shadow-xs shrink-0`}>
                      {link.svg}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-[13px] font-bold text-white group-hover:text-white transition-colors duration-300 truncate">
                          {link.platform}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 truncate mt-0.5">
                        {link.handle}
                      </span>
                      <span className="text-[10px] text-slate-500 truncate mt-0.5">
                        {link.roleTag}
                      </span>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-slate-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Shimmer Divider */}
          <div className="relative h-px my-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" style={{ animation: "shimmerDiv 3s ease-in-out infinite" }} />
          </div>

          {/* Bottom Bar: Copyright, Live Clock & Fast Links */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-slate-400 gap-4">
            <div className="order-2 md:order-1 text-center md:text-left flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <p>
                &copy; {year || "2026"} <span className="text-white font-semibold">Rishvin Reddy</span>. All rights reserved.
              </p>
              <span className="hidden sm:inline text-slate-700">·</span>
              <span className="text-slate-500 font-mono text-xs">
                Hyderabad, Telangana, India
              </span>
            </div>

            {/* Live Clock with Local Hyderabad Time */}
            <div className="order-1 md:order-2 flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0" />
              <span className="text-xs font-mono text-slate-300">
                Hyderabad · <span className="font-bold text-white">{time || "Loading..."}</span> <span className="text-emerald-400 font-semibold">IST</span>
              </span>
            </div>

            {/* Fast Links */}
            <div className="order-3 flex items-center space-x-4 sm:space-x-6 font-semibold">
              <Link href="/portfolio" className="hover:text-white transition-colors">
                Portfolio
              </Link>
              <span className="text-slate-700">·</span>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

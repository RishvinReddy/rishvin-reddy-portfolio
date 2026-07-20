"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const [year, setYear] = useState("");
  const [time, setTime] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [repo, setRepo] = useState<{ name: string; url: string; lang: string } | null>(null);

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

  return (
    <>
      <button
        aria-label="Back to top"
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-slate-900 text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-slate-900/30 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110 hover:shadow-primary/40 group ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/10" />
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - scrollPct)}
            className="text-primary group-hover:text-white transition-colors duration-300"
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
          />
        </svg>
        <svg className="w-5 h-5 relative z-10 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>




      <footer className="bg-slate-900 border-t border-slate-800/60 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 left-1/5 w-[600px] h-[400px] bg-primary/4 rounded-full blur-[140px]"></div>
          <div className="absolute -bottom-20 right-1/5 w-[500px] h-[400px] bg-indigo-500/4 rounded-full blur-[140px]"></div>
        </div>

        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 flex flex-col space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Link href="/" className="flex items-center gap-3 group w-fit">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-slate-700 group-hover:ring-primary/60 transition-all duration-300">
                      <Image src="/icon.png" alt="Rishvin" fill className="object-cover" />
                    </div>
                    <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-200 group-hover:from-primary group-hover:to-rose-400 transition-all duration-300 tracking-wide">Rishvin</h2>
                  </Link>
                </div>
                <p className="text-sm text-slate-200 font-medium">Software Engineer | Founder of Rishvin Labs</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Building scalable software, cybersecurity systems, IoT solutions, and intelligent products.
                </p>
              </div>

              <div className="bg-slate-800/80 border border-slate-600/50 rounded-xl p-4 transition hover:border-slate-500/80">
                <p className="text-[10px] uppercase tracking-widest text-slate-300 mb-2 font-semibold">Currently Working On</p>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0"></span>
                  <a href={repo?.url || "https://github.com/RishvinReddy"} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-primary transition-colors truncate" style={{ maxWidth: "200px", display: "inline-block" }}>
                    {repo?.name || "Loading..."}
                  </a>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">{repo?.lang || "Fetching"}</p>
              </div>

              <div className="inline-flex w-max items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-emerald-300">Open to Work · Remote</span>
              </div>
            </div>

            <div className="md:col-span-4 grid grid-cols-2 gap-8 pt-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-6 flex items-center">
                  <span className="w-4 h-[1px] bg-primary mr-2"></span> Explore
                </h3>
                <ul className="space-y-4 text-sm">
                  <li><Link href="/" className="hover:text-white text-slate-200 transition-colors flex items-center group"><span className="mr-2 text-slate-400 group-hover:text-primary transition-colors">›</span> Home</Link></li>
                  <li><Link href="/about" className="hover:text-white text-slate-200 transition-colors flex items-center group"><span className="mr-2 text-slate-400 group-hover:text-primary transition-colors">›</span> About Me</Link></li>
                  <li><Link href="/portfolio" className="hover:text-white text-slate-200 transition-colors flex items-center group"><span className="mr-2 text-slate-400 group-hover:text-primary transition-colors">›</span> Portfolio</Link></li>
                  <li><Link href="/ide" className="hover:text-white text-slate-200 transition-colors flex items-center group"><span className="mr-2 text-slate-400 group-hover:text-primary transition-colors">›</span> Projects IDE</Link></li>
                  <li><Link href="/services" className="hover:text-white text-slate-200 transition-colors flex items-center group"><span className="mr-2 text-slate-400 group-hover:text-primary transition-colors">›</span> Services</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-6 flex items-center">
                  <span className="w-4 h-[1px] bg-indigo-400 mr-2"></span> Resources
                </h3>
                <ul className="space-y-4 text-sm">
                  <li><Link href="/resume" className="hover:text-white text-slate-200 transition-colors flex items-center group"><span className="mr-2 text-slate-400 group-hover:text-primary transition-colors">›</span> Resume / CV</Link></li>
                  <li><Link href="/skills" className="hover:text-white text-slate-200 transition-colors flex items-center group"><span className="mr-2 text-slate-400 group-hover:text-primary transition-colors">›</span> Skills & Certs</Link></li>
                  <li><Link href="/awards" className="hover:text-white text-slate-200 transition-colors flex items-center group"><span className="mr-2 text-slate-400 group-hover:text-primary transition-colors">›</span> Awards</Link></li>
                  <li><Link href="/blog" className="hover:text-white text-slate-200 transition-colors flex items-center group"><span className="mr-2 text-slate-400 group-hover:text-primary transition-colors">›</span> Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white text-slate-200 transition-colors flex items-center group"><span className="mr-2 text-slate-400 group-hover:text-primary transition-colors">›</span> Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col space-y-8 pt-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-6 flex items-center">
                  <span className="w-4 h-[1px] bg-purple-400 mr-2"></span> Get Updates
                </h3>
                <form className="flex items-center relative" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    autoComplete="email"
                    className="w-full bg-slate-800/80 border border-slate-600/50 text-sm rounded-full py-2.5 pl-4 pr-12 text-white placeholder-slate-400 focus:outline-none focus:border-primary/60 transition-colors"
                  />
                  <button type="submit" className="absolute right-1 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/80 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </form>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-300 mb-4 font-semibold">Connect</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/RishvinReddy" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800/80 border border-slate-600/50 hover:border-[#24292e] hover:text-white text-slate-200 transition-all hover:bg-[#24292e]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/rishvinreddy" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800/80 border border-slate-600/50 hover:border-[#0077b5] hover:text-white text-slate-200 transition-all hover:bg-[#0077b5]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="mailto:rishvinreddy@gmail.com" className="p-2.5 rounded-full bg-slate-800/80 border border-slate-600/50 hover:border-rose-500 hover:text-white text-slate-200 transition-all hover:bg-rose-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-px my-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" style={{ animation: "shimmerDiv 3s ease-in-out infinite" }}></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-300">
            <p>&copy; {year} <span className="text-white font-medium">Rishvin Reddy</span>. All rights reserved.</p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Hyderabad, India · <span className="font-mono text-slate-200">{time}</span></span>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 mt-4 md:mt-0 font-medium">
              <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  if (pathname === '/universe') return null;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()) + " IST");
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div id="utilityBar"
      className={`fixed top-0 left-0 right-0 z-[65] bg-slate-900 border-b border-white/5 text-xs font-medium tracking-wide transition-transform duration-300 ${scrolled ? '-translate-y-full' : ''}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
        {/*  Left: availability + contact  */}
        <div className="flex items-center gap-3 text-slate-400">
          {/*  Availability badge  */}
          <div
            className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span id="availTyper" className="text-[11px] font-semibold whitespace-nowrap">Available for Opportunities</span>
          </div>
          <span className="hidden sm:block w-px h-3 bg-white/10"></span>

          {/*  Email — glassy pill badge  */}
          <a href="mailto:rishvinreddy@gmail.com"
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-slate-400 hover:text-white border border-transparent hover:border-primary/25 hover:bg-white/8 transition-all duration-200 group"
            aria-label="Email">
            <svg
              className="w-3.5 h-3.5 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-200"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[11px] font-medium tracking-wide">rishvinreddy@gmail.com</span>
          </a>

          {/*  Phone — glassy pill badge  */}
          <Link href="tel:+919848723235"
            className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-slate-400 hover:text-white border border-transparent hover:border-emerald-500/25 hover:bg-white/8 transition-all duration-200 group"
            aria-label="Call">
            <svg
              className="w-3.5 h-3.5 text-emerald-500/70 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-200"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[11px] font-medium tracking-wide">+91 98487 23235</span>
          </Link>
        </div>
        {/*  Right: Social icons + live clock  */}
        {/*  Social Icons — upgraded with brand glow on hover  */}
        <div className="flex items-center gap-0.5 ml-1">

          {/*  WhatsApp  */}
          <a className="w-7 h-7 flex items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all duration-200 hover:bg-[#25D366]/20 hover:text-[#25D366] hover:scale-105"
            href="https://wa.me/message/J4P3MRT5HOAZH1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0" />
            </svg>
          </a>

          {/*  Instagram  */}
          <a className="w-7 h-7 flex items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all duration-200 hover:bg-[#E1306C]/20 hover:text-[#E1306C] hover:scale-105"
            href="https://www.instagram.com/rishvin.reddy?igsh=Ym85aDhsOXpqeXdx&utm_source=qr" target="_blank"
            rel="noopener noreferrer" aria-label="Instagram">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12c0 3.259.014 3.668.072 4.948.061 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.061 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.061-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.061-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>

          {/*  LinkedIn  */}
          <a className="w-7 h-7 flex items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all duration-200 hover:bg-[#0077b5]/20 hover:text-[#0077b5] hover:scale-105"
            href="https://www.linkedin.com/in/rishvinreddy" target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.853-3.037-1.854 0-2.137 1.447-2.137 2.943v5.663H8.352V9h3.414v1.561h.049c.476-.9 1.637-1.853 3.369-1.853 3.602 0 4.268 2.37 4.268 5.455v6.289zM5.337 7.433a2.064 2.064 0 110-4.128 2.064 2.064 0 010 4.128zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/*  GitHub  */}
          <a className="hidden sm:flex w-7 h-7 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all duration-200 hover:bg-white/20 hover:text-white hover:scale-105"
            href="https://github.com/RishvinReddy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          {/*  Divider  */}
          <span className="hidden xl:block w-px h-4 bg-white/10 mx-1.5"></span>

          {/*  Live Clock — Heroicons clock outline  */}
          <span className="hidden xl:flex items-center gap-1.5 text-slate-500">
            <svg className="w-3.5 h-3.5 text-primary/60" fill="none" stroke="currentColor" strokeWidth="1.75"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span id="liveClock" className="font-mono text-[11px] text-slate-400 tabular-nums">{time}</span>
          </span>
        </div>
      </div>
    </div>

    {/*  ── Main Floating Pill Header ──  */}
    <header id="siteHeader" className="fixed left-0 right-0 z-50 transition-all duration-300 pt-3 pb-2"
      style={{ top: scrolled ? "0" : "2.25rem" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/*  The nav pill itself  */}
        <div id="mainNav"
          className={`mx-auto max-w-[1100px] rounded-full px-4 py-2 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border border-slate-200/60 shadow-md' : 'bg-transparent border border-transparent'}`}>

          {/*  ── Logo / Avatar (clean premium style) ──  */}
          <Link className="flex items-center gap-3 group shrink-0" href="/">
            {/*  Avatar: clean border + subtle glow on hover, no spinning  */}
            <div className="relative shrink-0">
              <div
                className="w-9 h-9 rounded-full overflow-hidden border border-slate-200 transition-all duration-300 group-hover:border-slate-300 group-hover:shadow-sm">
                <img src="icon.png" alt="Erolla Rishvin Reddy Software Developer and IoT Engineer"
                  className="w-full h-full object-cover" />
              </div>
              {/*  Tiny online indicator dot  */}
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full shadow-md"></span>
            </div>
            <div className="flex flex-col leading-none gap-0.5">
              <span
                className="text-[15px] font-bold tracking-tight text-slate-900 group-hover:text-primary transition-all duration-300">Rishvin</span>
              <span
                className="text-[9px] font-semibold tracking-[0.1em] uppercase text-slate-500 group-hover:text-primary/70 transition-colors duration-300">Portfolio
              </span>
            </div>
          </Link>

          {/*  ── Desktop Navigation ──  */}
          <nav className="hidden md:flex items-center gap-0.5" style={{ position: "relative" }}>
            {/*  Gliding spotlight indicator — moved by JS  */}
            <div id="navSpotlight"
              className="absolute inset-y-0 rounded-full bg-primary/8 transition-all duration-200 ease-out pointer-events-none opacity-0">
            </div>

            <Link className="nav-pill relative px-3 py-1.5 text-[14px] font-medium text-slate-600 rounded-full transition-all duration-200 hover:text-primary group"
              href="/" data-page="index">
              <span className="relative z-10">Home</span>
              <span
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full group-hover:w-4 transition-all duration-300"></span>
            </Link>
            <Link className="nav-pill relative px-3 py-1.5 text-[14px] font-medium text-slate-600 rounded-full transition-all duration-200 hover:text-primary group"
              href="/about" data-page="about">
              <span className="relative z-10">About</span>
              <span
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full group-hover:w-4 transition-all duration-300"></span>
            </Link>
            <Link className="nav-pill relative px-3 py-1.5 text-[14px] font-medium text-slate-600 rounded-full transition-all duration-200 hover:text-primary group"
              href="/portfolio" data-page="portfolio">
              <span className="relative z-10">Work</span>
              <span
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full group-hover:w-4 transition-all duration-300"></span>
            </Link>
            <Link className="nav-pill relative px-3 py-1.5 text-[14px] font-medium text-slate-600 rounded-full transition-all duration-200 hover:text-primary group"
              href="/ide" data-page="ide">
              <span className="relative z-10 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg>
                IDE
              </span>
              <span
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full group-hover:w-4 transition-all duration-300"></span>
            </Link>
            <Link className="nav-pill relative px-3 py-1.5 text-[14px] font-medium text-slate-600 rounded-full transition-all duration-200 hover:text-primary group"
              href="/services" data-page="services">
              <span className="relative z-10">Services</span>
              <span
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full group-hover:w-4 transition-all duration-300"></span>
            </Link>
            <a className="nav-pill relative px-3 py-1.5 text-[14px] font-medium text-slate-600 rounded-full transition-all duration-200 hover:text-primary group flex items-center gap-1.5"
              href="https://rishvinreddy.github.io/rishvin-labs/" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent group-hover:from-primary group-hover:to-rose-500 transition-all duration-300">Rishvin Labs</span>
              <svg className="w-3 h-3 text-slate-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full group-hover:w-4 transition-all duration-300"></span>
            </a>

            {/*  ── Mega Dropdown ──  */}
            <div className="relative group ml-1">
              <button
                className="relative flex items-center gap-1.5 px-3 py-1.5 text-[14px] font-medium text-slate-600 rounded-full hover:text-primary hover:bg-primary/5 transition-all duration-200">
                More
                {/*  Notification dot  */}
                <span className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <svg className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300 ml-0.5" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/*  Mega dropdown panel  */}
              <div
                className="absolute right-0 top-full mt-3 w-64 origin-top-right bg-white/97 backdrop-blur-2xl rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-slate-300/20 border border-slate-100/80 p-2 invisible opacity-0 translate-y-2 scale-95 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-250">
                {/*  Header label  */}
                <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Don&apos;t see what you need?</p>

                <Link className="mega-link flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all duration-150 group/item"
                  href="/resume">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500 group-hover/item:scale-110 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 group-hover/item:text-primary transition-colors">
                      Resume</p>
                    <p className="text-[11px] text-slate-400 leading-tight">Download CV & experience</p>
                  </div>
                </Link>
                <Link className="mega-link flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all duration-150 group/item"
                  href="/skills">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover/item:scale-110 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 group-hover/item:text-primary transition-colors">
                      Skills & Certs</p>
                    <p className="text-[11px] text-slate-400 leading-tight">Tech stack & certifications</p>
                  </div>
                </Link>
                <Link className="mega-link flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all duration-150 group/item"
                  href="/awards">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500 group-hover/item:scale-110 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 group-hover/item:text-primary transition-colors">
                      Awards</p>
                    <p className="text-[11px] text-slate-400 leading-tight">Honours & achievements</p>
                  </div>
                </Link>
                <Link className="mega-link flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all duration-150 group/item"
                  href="/blog">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-pink-500 group-hover/item:scale-110 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 group-hover/item:text-primary transition-colors">
                      Blog</p>
                    <p className="text-[11px] text-slate-400 leading-tight">Articles & insights</p>
                  </div>
                </Link>
                <Link className="mega-link flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all duration-150 group/item"
                  href="/faq">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center text-violet-500 group-hover/item:scale-110 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 group-hover/item:text-primary transition-colors">
                      FAQ</p>
                    <p className="text-[11px] text-slate-400 leading-tight">Common questions answered</p>
                  </div>
                </Link>

                {/*  Bottom CTA strip  */}
                <div className="mt-2 pt-2 border-t border-slate-100 px-1">
                  <Link href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-2 text-xs font-bold text-primary hover:bg-primary/5 rounded-xl transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Start a conversation →
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/*  ── Right Actions ──  */}
          <div className="flex items-center gap-2 shrink-0">


            {/*  ── Refined "Let's Talk" CTA ──  */}
            <Link id="letsTalkBtn" href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 text-[13px] font-semibold text-slate-900 border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 group">
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Let&apos;s Talk
              </span>
            </Link>

            {/*  Mobile hamburger toggle  */}
            <button id="mobileToggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-slate-100/50 text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
              aria-label="Open menu" aria-expanded="false">
              <svg id="menuIcon" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/*  ── Mobile Menu (staggered entrance) ──  */}
      <div id="mobileMenu"
        className={`absolute top-full left-3 right-3 mt-2 p-4 bg-white/97 backdrop-blur-2xl rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-slate-300/20 border border-white/40 flex flex-col gap-1 origin-top transition-all duration-300 ${menuOpen ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95'}`}>

        <p className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
          Navigate</p>

        <Link href="/"
          className="mobile-nav-link flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-all group"
          data-page="index">
          <span
            className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          Home
        </Link>
        <Link href="/about"
          className="mobile-nav-link flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-all group"
          data-page="about">
          <span
            className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          About
        </Link>
        <Link href="/portfolio"
          className="mobile-nav-link flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-all group"
          data-page="portfolio">
          <span
            className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          Portfolio
        </Link>
        <Link href="/ide"
          className="mobile-nav-link flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-all group"
          data-page="ide">
          <span
            className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </span>
          IDE
        </Link>
        <Link href="/services"
          className="mobile-nav-link flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-all group"
          data-page="services">
          <span
            className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </span>
          Services
        </Link>
        <a href="https://rishvinreddy.github.io/rishvin-labs/" target="_blank" rel="noopener noreferrer"
          className="mobile-nav-link flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-all group">
          <span
            className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center text-white group-hover:bg-primary group-hover:shadow-lg transition-all">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </span>
          <span className="flex items-center gap-1.5">
            Rishvin Labs
            <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </a>

        <div className="border-t border-slate-100 my-1.5"></div>
        <p className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">More</p>

        <div className="grid grid-cols-2 gap-1.5">
          <Link href="/ide"
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 bg-slate-50 rounded-xl hover:text-primary transition-colors col-span-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg> Projects IDE
          </Link>
          <Link href="/resume"
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 bg-slate-50 rounded-xl hover:text-primary transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg> Resume
          </Link>
          <Link href="/skills"
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 bg-slate-50 rounded-xl hover:text-primary transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg> Skills
          </Link>
          <Link href="/awards"
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 bg-slate-50 rounded-xl hover:text-primary transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg> Awards
          </Link>
          <Link href="/blog"
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 bg-slate-50 rounded-xl hover:text-primary transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg> Blog
          </Link>
          <Link href="/faq"
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 bg-slate-50 rounded-xl hover:text-primary transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg> FAQ
          </Link>
          <Link href="Testimonials_page.html"
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 bg-slate-50 rounded-xl hover:text-primary transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg> Reviews
          </Link>
        </div>

        <div className="border-t border-slate-100 mt-1.5 pt-2">
          <Link href="/contact"
            className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-primary to-rose-500 rounded-2xl shadow-xl shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-200 relative overflow-hidden group">
            <span
              className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            Contact Me — I&apos;m Available
          </Link>
        </div>
      </div>
    </header>
    </>
  );
}

'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

/* ─────────────────────────────────────────────
   DATA
   URLs verified from LinkedIn recommendations
   page pasted by the portfolio owner.
───────────────────────────────────────────── */
interface Recommendation {
  id: string;
  name: string;
  initials: string;
  title: string;
  shortTitle: string;
  relationship: string;
  date: string;
  dateShort: string;
  excerpt: string;
  fullText: string;
  linkedinUrl: string;
}

const RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'meher',
    name: 'Meher Gayatri Devi Tiwari',
    initials: 'MG',
    title: 'Assistant Professor | PEGA Certified System Architect (CSA) | Cyber Security Zealot | Prompt Engineering Enthusiast',
    shortTitle: 'Assistant Professor · PEGA Certified System Architect',
    relationship: 'Mentor',
    date: 'September 19, 2026',
    dateShort: 'Sep 19, 2026',
    excerpt:
      'I am pleased to recommend Mr. Rishvin Reddy, whose initiative, technical curiosity, and interest in practical problem-solving have been evident through our interactions. Rishvin demonstrates a strong inclination toward exploring emerging technologies, automation, and the development of solutions that address real-world challenges.',
    fullText:
      'I am pleased to recommend Mr. Rishvin Reddy, whose initiative, technical curiosity, and interest in practical problem-solving have been evident through our interactions.\n\nRishvin demonstrates a strong inclination toward exploring emerging technologies, automation, and the development of solutions that address real-world challenges. Our discussions around workflow automation, customer relationship management systems, and the practical implementation of technology have reflected his willingness to think beyond conventional approaches and explore opportunities for innovation.\n\nWhat I particularly appreciate is his proactive attitude toward learning and improvement. He actively seeks feedback, discusses ideas, and looks for ways to enhance his projects and their potential applications. His interest in developing solutions that could support everyday university operations also reflects his focus on practical impact.\n\nI believe Rishvin\'s curiosity, initiative, and commitment to expanding his technical knowledge will support his continued professional growth. I wish him every success in his future academic and professional endeavors.',
    linkedinUrl: 'https://www.linkedin.com/in/mehergayatridevi/',
  },
  {
    id: 'bhanu',
    name: 'Dr. S. Bhanu Prakash',
    initials: 'BP',
    title: 'Associate Professor, School of Technology, Woxsen University, Hyderabad | Power Electronics in Renewable Energy',
    shortTitle: 'Associate Professor · Woxsen University',
    relationship: 'Mentor',
    date: 'September 10, 2026',
    dateShort: 'Sep 10, 2026',
    excerpt:
      'I am pleased to recommend Rishvin Reddy, whom I had the opportunity to teach in the Engineering Concepts in IoT course. Rishvin is a sincere and enthusiastic student who has demonstrated a good understanding of engineering fundamentals and IoT concepts, showing a positive attitude toward learning and good analytical problem-solving abilities.',
    fullText:
      'I am pleased to recommend Rishvin Reddy, whom I had the opportunity to teach in the Engineering Concepts in IoT course. Rishvin is a sincere and enthusiastic student who has demonstrated a good understanding of engineering fundamentals and IoT concepts.\n\nDuring the course, he showed a positive attitude toward learning, good analytical and problem-solving abilities, and a willingness to understand the practical applications of emerging technologies. He was attentive to academic activities and demonstrated a genuine interest in developing his technical knowledge.\n\nI appreciate Rishvin\'s sincerity, discipline, and willingness to learn, and I am confident that he has the potential to grow further and achieve success in his academic and professional career. I wish him all the very best for his future endeavors.',
    linkedinUrl: 'https://www.linkedin.com/in/dr-s-bhanu-prakash-3a5a6221/',
  },
  {
    id: 'sandeep',
    name: 'Dr. Sandeep Dasari',
    initials: 'SD',
    title: 'Assistant Professor at VIT-AP University',
    shortTitle: 'Assistant Professor · VIT-AP University',
    relationship: 'Mentor',
    date: 'September 8, 2026',
    dateShort: 'Sep 8, 2026',
    excerpt:
      'I had the opportunity to teach and mentor Rishvin at Woxsen University. He is a disciplined, sincere, and responsible student who approaches academic and project work with dedication and a strong sense of ownership. He demonstrates sound technical understanding, good problem-solving ability, and a consistent willingness to learn and improve.',
    fullText:
      'I had the opportunity to teach and mentor Rishvin at Woxsen University. He is a disciplined, sincere, and responsible student who approaches academic and project work with dedication and a strong sense of ownership. He demonstrates sound technical understanding, good problem-solving ability, and a consistent willingness to learn and improve.\n\nHis respectful attitude, reliability, and commitment to completing tasks with quality make him a promising candidate for both higher studies and professional opportunities. I am confident that he will continue to grow and contribute positively wherever he works or studies.',
    linkedinUrl: 'https://www.linkedin.com/in/dr-sandeep-dasari-2681102a1/',
  },
];

/* ─────────────────────────────────────────────
   LINKEDIN ICON — official mark
───────────────────────────────────────────── */
function LinkedInIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   AVATAR
───────────────────────────────────────────── */
function InitialsAvatar({ initials, size = 'md' }: { initials: string; size?: 'md' | 'lg' }) {
  const dim = size === 'lg' ? 'w-14 h-14 text-sm' : 'w-12 h-12 text-sm';
  return (
    <div
      className={`${dim} rounded-full flex-shrink-0 flex items-center justify-center font-black tracking-widest text-white`}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
        boxShadow: '0 0 0 2px #fff, 0 0 0 3.5px rgba(15,23,42,0.12)',
      }}
    >
      {initials}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MODAL
───────────────────────────────────────────── */
function RecommendationModal({ rec, onClose }: { rec: Recommendation; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, a, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog" aria-modal="true" aria-labelledby="rec-modal-heading"
    >
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-lg"
        onClick={onClose} aria-hidden="true"
      />
      <div
        ref={modalRef}
        className="relative w-full sm:max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden"
        style={{
          maxHeight: '92vh',
          animation: 'recModalIn 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          boxShadow: '0 50px 100px -20px rgba(0,0,0,0.45)',
        }}
      >
        {/* Top accent stripe */}
        <div className="h-[3px] w-full" style={{ background: 'linear-gradient(90deg,#f20d46,#fb7185 50%,#a78bfa)' }} />

        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 pt-5 pb-0">
          <div className="flex items-center gap-2">
            <LinkedInIcon className="w-4 h-4 text-[#0077b5]" />
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
              Professional Recommendation
            </span>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-6 sm:px-8 pt-2 pb-8" style={{ maxHeight: 'calc(92vh - 72px)' }}>
          <div
            aria-hidden="true"
            className="select-none pointer-events-none leading-none -mb-6 -ml-1"
            style={{ fontSize: '7rem', fontFamily: 'Georgia,serif', color: '#f20d46', opacity: 0.09 }}
          >&quot;</div>

          <div id="rec-modal-heading" className="space-y-5 text-[15px] leading-[1.9] text-slate-600">
            {rec.fullText.split('\n\n').map((para, i) => (
              <p key={i} className={i === 0 ? 'text-slate-800 font-medium text-base leading-[1.85]' : ''}>{para}</p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-4">
            <InitialsAvatar initials={rec.initials} size="lg" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-900">{rec.name}</p>
              <p className="text-[12px] text-slate-500 mt-0.5 leading-snug">{rec.title}</p>
              <p className="text-[11px] text-slate-400 mt-1 font-medium">{rec.relationship} · {rec.date}</p>
              <a
                href={rec.linkedinUrl}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 px-4 py-2 text-[12px] font-bold rounded-xl transition-all group focus:outline-none focus:ring-2 focus:ring-[#0077b5] focus:ring-offset-2"
                style={{ color: '#0077b5', background: 'rgba(0,119,181,0.06)', border: '1px solid rgba(0,119,181,0.2)' }}
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                View on LinkedIn
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7v10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   RECOMMENDATION CARD — equal weight for all
───────────────────────────────────────────── */
function RecommendationCard({
  rec,
  onReadFull,
  animDelay,
}: {
  rec: Recommendation;
  onReadFull: () => void;
  animDelay: string;
}) {
  return (
    <article
      className={`group relative flex flex-col rounded-2xl overflow-hidden scroll-reveal ${animDelay}`}
      style={{
        background: '#ffffff',
        border: '1px solid rgba(15,23,42,0.08)',
        transition: 'transform 0.28s ease, box-shadow 0.28s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(-5px)';
        el.style.boxShadow = '0 20px 48px -12px rgba(15,23,42,0.13)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
      }}
      aria-label={`Recommendation from ${rec.name}`}
    >
      {/* Top accent line — appears on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{ background: 'linear-gradient(90deg,#f20d46,#fb7185 50%,#a78bfa)' }}
      />

      <div className="flex flex-col flex-1 p-9 sm:p-10">
        {/* Row: LinkedIn ↗ */}
        <div className="flex justify-end mb-6">
          <a
            href={rec.linkedinUrl}
            target="_blank" rel="noopener noreferrer"
            aria-label={`${rec.name} on LinkedIn`}
            className="inline-flex items-center gap-1.5 text-[12px] font-bold transition-all duration-200 focus:outline-none focus:underline"
            style={{ color: 'rgba(0,119,181,0.5)' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#0077b5')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(0,119,181,0.5)')}
          >
            <LinkedInIcon className="w-3 h-3" />
            LinkedIn ↗
          </a>
        </div>

        {/* Quote mark */}
        <div
          aria-hidden="true"
          className="select-none leading-none mb-4"
          style={{ fontSize: '3.75rem', fontFamily: 'Georgia,serif', color: '#f20d46', opacity: 0.2, lineHeight: 1 }}
        >&quot;</div>

        {/* Excerpt — fixed 5 lines, flex-1 pushes footer to bottom */}
        <blockquote
          className="text-slate-600 text-[15.5px] leading-[1.85] font-normal flex-1 mb-6"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 9,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {rec.excerpt}
        </blockquote>

        {/* Read full CTA */}
        <button
          onClick={onReadFull}
          aria-label={`Read full recommendation from ${rec.name}`}
          className="self-start inline-flex items-center gap-1.5 text-sm font-bold text-primary mb-7 focus:outline-none focus:underline group/btn"
          style={{ transition: 'gap 0.15s ease' }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.gap = '8px')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.gap = '6px')}
        >
          Read full recommendation
          <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Divider */}
        <div className="w-full h-px bg-slate-100 mb-7" />

        {/* Person meta */}
        <div className="flex items-start gap-4">
          <InitialsAvatar initials={rec.initials} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-slate-900 leading-tight">{rec.name}</p>
            <p className="text-[12.5px] text-slate-400 mt-1 leading-snug">{rec.shortTitle}</p>
            <p className="text-[11.5px] text-slate-400 mt-1.5 font-medium tracking-wide">
              {rec.relationship} · {rec.dateShort}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function RecommendationsSection() {
  const [activeRec, setActiveRec] = useState<Recommendation | null>(null);
  const openModal = useCallback((rec: Recommendation) => setActiveRec(rec), []);
  const closeModal = useCallback(() => setActiveRec(null), []);

  const count = RECOMMENDATIONS.length.toString().padStart(2, '0');

  return (
    <>
      <style>{`
        @keyframes recModalIn {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <section
        id="recommendations"
        className="py-24 sm:py-32 relative overflow-hidden"
        style={{ scrollMarginTop: '80px' }}
        aria-labelledby="recommendations-heading"
      >
        {/* Ambient — inherits white page background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl"
            style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(242,13,70,0.03) 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[88rem] px-6 lg:px-10">

          {/* ── Section Header ── */}
          <div className="mb-20 flex flex-col items-center text-center scroll-reveal">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <div className="h-px w-16" style={{ background: 'linear-gradient(to left, rgba(15,23,42,0.12), transparent)' }} />
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.18em] text-slate-500"
                style={{ background: 'white', border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 1px 4px rgba(15,23,42,0.06)' }}
              >
                <LinkedInIcon className="w-3 h-3 text-[#0077b5]" />
                Professional Recommendations
              </span>
              <div className="h-px w-16" style={{ background: 'linear-gradient(to right, rgba(15,23,42,0.12), transparent)' }} />
            </div>

            {/* Ghost counter watermark behind the heading */}
            <div className="relative flex flex-col items-center">
              <div
                aria-hidden="true"
                className="absolute left-1/2 -translate-x-1/2 select-none pointer-events-none font-black leading-none"
                style={{
                  top: '-1.5rem',
                  fontSize: 'clamp(5rem,14vw,9rem)',
                  fontFamily: 'Georgia,serif',
                  color: 'rgba(15,23,42,0.025)',
                  letterSpacing: '-0.04em',
                }}
              >{count}</div>

              <h2
                id="recommendations-heading"
                className="relative text-4xl sm:text-5xl md:text-[3.4rem] font-black tracking-tight text-slate-900 mb-5 leading-[1.05]"
                style={{ fontFamily: 'Georgia,serif' }}
              >
                Beyond the code.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-400 max-w-md leading-relaxed">
              Perspectives from mentors and educators<br className="hidden sm:block" /> who have experienced my work firsthand.
            </p>
          </div>

          {/* ── Three Equal Cards ── */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
            style={{ gridAutoRows: '1fr' }}
          >
            {RECOMMENDATIONS.map((rec, i) => (
              <RecommendationCard
                key={rec.id}
                rec={rec}
                onReadFull={() => openModal(rec)}
                animDelay={i === 0 ? '' : i === 1 ? 'delay-1' : 'delay-2'}
              />
            ))}
          </div>

          {/* ── Footer CTA ── */}
          <div className="scroll-reveal delay-2 flex flex-col items-center gap-5">
            {/* Count + label */}
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-slate-100" />
              <div className="flex flex-col items-center">
                <span
                  className="font-black leading-none"
                  style={{
                    fontSize: '3rem',
                    fontFamily: 'Georgia,serif',
                    background: 'linear-gradient(135deg,#f20d46,#a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >{count}</span>
                <span className="text-[9px] font-black uppercase tracking-[0.22em] text-slate-300 mt-0.5">
                  Professional Recommendations
                </span>
              </div>
              <div className="h-px w-12 bg-slate-100" />
            </div>

            {/* LinkedIn CTA */}
            <a
              href="https://www.linkedin.com/in/rishvinreddy/"
              target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3 text-sm font-bold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0077b5] focus:ring-offset-4"
              style={{ color: '#0077b5', border: '1.5px solid rgba(0,119,181,0.22)', background: 'rgba(0,119,181,0.04)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(0,119,181,0.09)';
                el.style.borderColor = 'rgba(0,119,181,0.38)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(0,119,181,0.04)';
                el.style.borderColor = 'rgba(0,119,181,0.22)';
              }}
            >
              <LinkedInIcon className="w-4 h-4" />
              View LinkedIn Profile
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7v10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {activeRec && <RecommendationModal rec={activeRec} onClose={closeModal} />}
    </>
  );
}

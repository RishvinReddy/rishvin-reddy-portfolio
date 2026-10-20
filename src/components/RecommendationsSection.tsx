'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  type Recommendation,
  RECOMMENDATIONS,
  LINKEDIN_RECOMMENDATIONS_SOURCE_URL,
} from '@/data/recommendations';
import {
  HandUnderline,
  HandCircle,
  HandwrittenNote,
  HandDrawnArrow,
} from '@/components/handwritten';

/* ─────────────────────────────────────────────
   ENRICHED METADATA FOR EACH RECOMMENDATION
───────────────────────────────────────────── */
interface RecommendationMeta {
  highlight: string;
  category: 'enterprise' | 'academic';
  institution: string;
  location: string;
  skills: string[];
  roleBadge: string;
  accentColor: string;
  badgeClass: string;
  avatarBg: string;
}

const ENRICHED_REC_DATA: Record<string, RecommendationMeta> = {
  sachith: {
    highlight: "Curious, committed to learning, and proactive in developing practical skills.",
    category: 'enterprise',
    institution: "Adqura · Enterprise Pegasystems Partner",
    location: "Hyderabad, India / London, UK",
    skills: ["Pega Ecosystem", "System Workflows", "Fast Learner", "Enterprise Agility"],
    roleBadge: "Enterprise Mentor · Adqura",
    accentColor: "#2563eb",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    avatarBg: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
  },
  meher: {
    highlight: "Willingness to think beyond conventional approaches and explore opportunities for innovation.",
    category: 'academic',
    institution: "Woxsen University · School of Technology",
    location: "Hyderabad, India",
    skills: ["Workflow Automation", "CRM Systems", "Practical Innovation", "PEGA Architecture"],
    roleBadge: "PEGA Certified Architect · Woxsen",
    accentColor: "#7c3aed",
    badgeClass: "bg-purple-50 text-purple-700 border-purple-200",
    avatarBg: "linear-gradient(135deg, #581c87 0%, #7c3aed 100%)",
  },
  bhanu: {
    highlight: "Demonstrated a good understanding of engineering fundamentals and IoT concepts with good analytical abilities.",
    category: 'academic',
    institution: "Woxsen University · School of Technology",
    location: "Hyderabad, India",
    skills: ["IoT Architecture", "Engineering Fundamentals", "Problem Solving", "Hardware/Software"],
    roleBadge: "Associate Professor · Woxsen Tech",
    accentColor: "#059669",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    avatarBg: "linear-gradient(135deg, #064e3b 0%, #059669 100%)",
  },
  sandeep: {
    highlight: "Approaches academic and project work with dedication, high reliability, and a strong sense of ownership.",
    category: 'academic',
    institution: "VIT-AP University (Formerly Woxsen University)",
    location: "Andhra Pradesh, India",
    skills: ["Project Ownership", "Consistency", "Technical Rigor", "Continuous Improvement"],
    roleBadge: "Assistant Professor · VIT-AP",
    accentColor: "#e11d48",
    badgeClass: "bg-rose-50 text-rose-700 border-rose-200",
    avatarBg: "linear-gradient(135deg, #881337 0%, #e11d48 100%)",
  },
};

const ALL_SKILLS = [
  "Pega Ecosystem",
  "IoT Architecture",
  "Workflow Automation",
  "Engineering Fundamentals",
  "Project Ownership",
  "Fast Learner",
];

/* ─────────────────────────────────────────────
   LINKEDIN ICON
───────────────────────────────────────────── */
function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   WATERMARK QUOTE ICON
───────────────────────────────────────────── */
function WatermarkQuote({ className = 'w-24 h-24' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <path d="M35 50c0-15-7-25-22-29l-3 7c10 3 13 8 13 15v3H10v34h30V50H35zm55 0c0-15-7-25-22-29l-3 7c10 3 13 8 13 15v3H65v34h30V50H90z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   RECOMMENDER AVATAR WITH PHOTO / GRADIENT & VERIFICATION BADGE
───────────────────────────────────────────── */
function RecommenderAvatar({
  name,
  initials,
  avatarUrl,
  bg,
  size = 'md',
}: {
  name: string;
  initials: string;
  avatarUrl?: string;
  bg?: string;
  size?: 'md' | 'lg';
}) {
  const [imgError, setImgError] = useState(false);
  const dim = size === 'lg' ? 'w-14 h-14' : 'w-12 h-12';
  const textDim = size === 'lg' ? 'text-sm' : 'text-xs sm:text-sm';

  return (
    <div
      className={`${dim} rounded-2xl flex-shrink-0 flex items-center justify-center font-black tracking-widest text-white shadow-md relative select-none`}
      style={{
        background: bg || 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        border: '1.5px solid rgba(255,255,255,0.85)',
      }}
    >
      {avatarUrl && !imgError ? (
        <img
          src={avatarUrl}
          alt={name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />
      ) : (
        <span className={textDim}>{initials}</span>
      )}
      <span
        className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-xs flex items-center justify-center z-10"
        title="Verified LinkedIn Endorsement"
      >
        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FULL RECOMMENDATION MODAL WITH PREV / NEXT
───────────────────────────────────────────── */
function RecommendationModal({
  rec,
  allRecs,
  onClose,
  onSelectRec,
}: {
  rec: Recommendation;
  allRecs: Recommendation[];
  onClose: () => void;
  onSelectRec: (rec: Recommendation) => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const currentIndex = allRecs.findIndex((r) => r.id === rec.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allRecs.length - 1;

  const goToPrev = useCallback(() => {
    if (hasPrev) onSelectRec(allRecs[currentIndex - 1]);
  }, [hasPrev, currentIndex, allRecs, onSelectRec]);

  const goToNext = useCallback(() => {
    if (hasNext) onSelectRec(allRecs[currentIndex + 1]);
  }, [hasNext, currentIndex, allRecs, onSelectRec]);

  const meta = ENRICHED_REC_DATA[rec.id] || {
    highlight: rec.excerpt,
    category: 'academic',
    institution: 'Woxsen University',
    location: 'Hyderabad, India',
    skills: [],
    roleBadge: rec.relationship,
    accentColor: '#4f46e5',
    badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    avatarBg: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  };

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'ArrowLeft' && hasPrev) {
        goToPrev();
        return;
      }
      if (e.key === 'ArrowRight' && hasNext) {
        goToNext();
        return;
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, a, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose, hasPrev, hasNext, goToPrev, goToNext]);

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${rec.excerpt}" — ${rec.name}, ${rec.title}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rec-modal-heading"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 z-10 flex flex-col"
        style={{
          maxHeight: '92vh',
          animation: 'recModalIn 0.28s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        {/* Top Accent Gradient Bar */}
        <div
          className="h-2 w-full transition-all duration-300"
          style={{ background: meta.avatarBg }}
        />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] shrink-0">
              <LinkedInIcon className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-500 block">
                  Official LinkedIn Recommendation
                </span>
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Verified
                </span>
              </div>
              <span className="text-xs text-slate-400 font-medium">{rec.date}</span>
            </div>
          </div>

          {/* Navigation & Close */}
          <div className="flex items-center gap-1">
            <button
              onClick={goToPrev}
              disabled={!hasPrev}
              aria-label="Previous recommendation"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
              title="Previous (Left Arrow)"
            >
              ←
            </button>
            <span className="text-[11px] font-mono font-bold text-slate-400 px-1">
              {currentIndex + 1}/{allRecs.length}
            </span>
            <button
              onClick={goToNext}
              disabled={!hasNext}
              aria-label="Next recommendation"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
              title="Next (Right Arrow)"
            >
              →
            </button>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close dialog"
              className="w-8 h-8 ml-2 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Letter Content */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 custom-scrollbar flex-1 relative">
          {/* Watermark Quote */}
          <div className="absolute top-4 right-6 text-slate-100 pointer-events-none select-none">
            <WatermarkQuote className="w-32 h-32 opacity-40" />
          </div>

          {/* Author Card */}
          <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs relative z-10">
            <RecommenderAvatar
              name={rec.name}
              initials={rec.initials}
              avatarUrl={rec.avatarUrl}
              bg={meta.avatarBg}
              size="lg"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-bold text-slate-900 leading-tight flex items-center gap-1.5">
                {rec.name}
                <LinkedInIcon className="w-3.5 h-3.5 text-[#0077b5]" />
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-snug">{rec.title}</p>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${meta.badgeClass}`}>
                  {rec.relationship}
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  {meta.institution}
                </span>
              </div>
            </div>
          </div>

          {/* Golden Pull-Quote Highlight Box */}
          <div
            className="p-4 rounded-2xl mb-6 flex items-start gap-3 shadow-2xs border relative z-10"
            style={{
              backgroundColor: `${meta.accentColor}0a`,
              borderColor: `${meta.accentColor}30`,
            }}
          >
            <span className="text-xl leading-none">✨</span>
            <div>
              <span
                className="text-[10px] uppercase font-mono font-bold tracking-wider block mb-1"
                style={{ color: meta.accentColor }}
              >
                Executive Takeaway
              </span>
              <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                &ldquo;{meta.highlight}&rdquo;
              </p>
            </div>
          </div>

          {/* Letter Body */}
          <div id="rec-modal-heading" className="space-y-4 text-[15px] sm:text-base leading-[1.8] text-slate-700 font-normal relative z-10">
            {rec.fullText.split('\n\n').map((para, i) => (
              <p key={i} className={i === 0 ? 'text-slate-900 font-medium text-base sm:text-lg leading-[1.75]' : ''}>
                {para}
              </p>
            ))}
          </div>

          {/* Skills Tagged */}
          {meta.skills.length > 0 && (
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2 relative z-10">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-1">
                Demonstrated Qualities:
              </span>
              {meta.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          )}

          {/* Action Links */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 relative z-10">
            <div className="flex items-center gap-2">
              <a
                href={rec.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-[#0077b5] hover:bg-[#006097] text-white shadow-xs transition-all cursor-pointer"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-white" />
                View {rec.name.split(' ')[0]}&apos;s Profile ↗
              </a>
              <button
                onClick={handleCopy}
                className="px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                title="Copy endorsement quote"
              >
                {copied ? '✓ Copied' : 'Copy Quote'}
              </button>
            </div>

            <a
              href={LINKEDIN_RECOMMENDATIONS_SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
            >
              <span>View Source on LinkedIn</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   UPGRADED RECOMMENDATION CARD WITH INLINE EXPAND
───────────────────────────────────────────── */
function RecommendationCard({
  rec,
  onReadFull,
  activeSkill,
}: {
  rec: Recommendation;
  onReadFull: () => void;
  activeSkill: string | null;
}) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const meta = ENRICHED_REC_DATA[rec.id] || {
    highlight: rec.excerpt,
    category: 'academic',
    institution: 'Woxsen University',
    location: 'Hyderabad, India',
    skills: [],
    roleBadge: rec.relationship,
    accentColor: '#4f46e5',
    badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    avatarBg: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  };

  const isHighlighted = activeSkill ? meta.skills.includes(activeSkill) : false;

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`"${rec.excerpt}" — ${rec.name}, ${rec.title}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article
      className={`group relative bg-white rounded-3xl border transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden ${
        isHighlighted
          ? 'border-indigo-400 shadow-lg ring-2 ring-indigo-500/20'
          : 'border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1'
      }`}
      aria-label={`Recommendation from ${rec.name}`}
    >
      {/* Top Accent Gradient Line on Hover or Highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 z-10"
        style={{
          background: meta.avatarBg,
          opacity: isHighlighted ? 1 : 0,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Subtle Background Watermark Quote */}
      <div className="absolute top-4 right-4 text-slate-100 group-hover:text-slate-200/70 transition-colors pointer-events-none select-none">
        <WatermarkQuote className="w-24 h-24 opacity-30" />
      </div>

      <div className="relative z-10">
        {/* Header: Recommender Profile Info on TOP */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-3.5 min-w-0">
            <RecommenderAvatar
              name={rec.name}
              initials={rec.initials}
              avatarUrl={rec.avatarUrl}
              bg={meta.avatarBg}
            />
            <div className="min-w-0">
              <h4 className="text-base font-bold text-slate-900 font-display flex items-center gap-1.5 truncate">
                <span className="truncate">{rec.name}</span>
                <span className="text-[#0077b5] shrink-0" title="LinkedIn Verified">
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </span>
              </h4>
              <p className="text-xs text-slate-500 font-medium leading-snug line-clamp-1">
                {rec.shortTitle}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${meta.badgeClass}`}>
                  {meta.roleBadge}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {rec.dateShort}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleCopy}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-all cursor-pointer shadow-2xs"
              title="Copy quote"
              aria-label="Copy quote"
            >
              {copied ? (
                <span className="text-[10px] font-mono font-bold text-emerald-600 px-0.5">✓</span>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
            <a
              href={rec.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${rec.name} on LinkedIn`}
              className="p-2 rounded-xl text-[#0077b5] bg-blue-50/60 hover:bg-[#0077b5] hover:text-white border border-blue-200/60 transition-all cursor-pointer shadow-2xs"
              title="Open LinkedIn Profile"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Highlight Quote Box */}
        <div
          className="p-3.5 rounded-2xl mb-4 shadow-2xs border transition-colors"
          style={{
            backgroundColor: `${meta.accentColor}0a`,
            borderColor: `${meta.accentColor}25`,
          }}
        >
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider mb-1" style={{ color: meta.accentColor }}>
            <span>⭐ Endorsement Takeaway</span>
          </div>
          <p className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-relaxed italic">
            &ldquo;{meta.highlight}&rdquo;
          </p>
        </div>

        {/* Excerpt Body with Inline Expand Option */}
        <div className="relative mb-4">
          <blockquote className={`text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-normal ${expanded ? '' : 'line-clamp-3'}`}>
            {rec.excerpt}
          </blockquote>
          {rec.excerpt.length > 160 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1 text-[11px] font-mono font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
            >
              {expanded ? '▴ Show less' : '▾ Show full excerpt'}
            </button>
          )}
        </div>

        {/* Endorsed Skills Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {meta.skills.map((skill, sIdx) => {
            const isSkillMatch = activeSkill === skill;
            return (
              <span
                key={sIdx}
                className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-md border transition-all ${
                  isSkillMatch
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-slate-100 text-slate-600 border-slate-200/80 hover:bg-slate-200/70'
                }`}
              >
                #{skill}
              </span>
            );
          })}
        </div>
      </div>

      {/* Footer: Read Full CTA + Date */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs mt-auto relative z-10">
        <button
          onClick={onReadFull}
          className="inline-flex items-center gap-1.5 font-bold text-indigo-600 hover:text-indigo-800 transition-colors group/btn cursor-pointer"
        >
          <span>Read full recommendation</span>
          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
        </button>
        <span className="text-[11px] font-mono text-slate-400 font-medium">
          {meta.institution.split('·')[0].trim()}
        </span>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   EXECUTIVE SPOTLIGHT / CAROUSEL VIEW
───────────────────────────────────────────── */
function SpotlightCarouselView({
  recs,
  onOpenModal,
}: {
  recs: Recommendation[];
  onOpenModal: (rec: Recommendation) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeRec = recs[activeIndex] || recs[0];
  const meta = ENRICHED_REC_DATA[activeRec?.id] || {
    highlight: activeRec?.excerpt || '',
    category: 'academic',
    institution: 'Woxsen University',
    location: 'Hyderabad, India',
    skills: [],
    roleBadge: activeRec?.relationship || '',
    accentColor: '#4f46e5',
    badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    avatarBg: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : recs.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < recs.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-7 sm:p-10 lg:p-12 shadow-2xl border border-slate-800 overflow-hidden mb-16">
      {/* Glow Orbs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
        style={{ background: meta.accentColor }}
      />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full blur-3xl opacity-10 bg-indigo-500 pointer-events-none" />

      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-slate-800/80 pb-6 relative z-10">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">
            Executive Spotlight · Testimonial {activeIndex + 1} of {recs.length}
          </span>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      {/* Main Quote Content */}
      <div className="relative z-10 max-w-4xl">
        <span className="text-5xl lg:text-6xl font-serif text-indigo-400/40 select-none block leading-none mb-2">
          &ldquo;
        </span>
        <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-100 leading-relaxed sm:leading-[1.6] mb-8 font-display">
          {meta.highlight}
        </blockquote>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-3xl line-clamp-3">
          {activeRec.excerpt}
        </p>

        {/* Recommender Info Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-4">
            <RecommenderAvatar
              name={activeRec.name}
              initials={activeRec.initials}
              avatarUrl={activeRec.avatarUrl}
              bg={meta.avatarBg}
              size="lg"
            />
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                {activeRec.name}
                <a
                  href={activeRec.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0077b5] hover:text-blue-400 transition-colors"
                  title="View on LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">{activeRec.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] font-mono text-indigo-300">
                  {meta.roleBadge}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-[11px] font-mono text-slate-500">
                  {activeRec.dateShort}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenModal(activeRec)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 transition-all cursor-pointer shadow-md"
            >
              <span>Read Full Letter</span>
              <span>→</span>
            </button>
            <a
              href={activeRec.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {recs.map((r, idx) => (
            <button
              key={r.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeIndex === idx ? 'w-8 bg-indigo-400' : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function RecommendationsSection() {
  const [activeRec, setActiveRec] = useState<Recommendation | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'enterprise' | 'academic'>('all');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'spotlight'>('grid');

  const openModal = useCallback((rec: Recommendation) => setActiveRec(rec), []);
  const closeModal = useCallback(() => setActiveRec(null), []);

  const filteredRecs = useMemo(() => {
    return RECOMMENDATIONS.filter((r) => {
      const meta = ENRICHED_REC_DATA[r.id];
      if (!meta) return true;
      if (selectedCategory !== 'all' && meta.category !== selectedCategory) {
        return false;
      }
      if (selectedSkill && !meta.skills.includes(selectedSkill)) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, selectedSkill]);

  return (
    <>
      <style>{`
        @keyframes recModalIn {
          from { opacity: 0; transform: translateY(16px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <section
        id="recommendations"
        className="py-24 sm:py-32 relative overflow-hidden bg-white"
        style={{ scrollMarginTop: '80px' }}
        aria-labelledby="recommendations-heading"
      >
        {/* Subtle Background Blueprint Grid */}
        <div className="absolute inset-0 opacity-[0.22] pointer-events-none bg-[linear-gradient(to_right,#cbd5e130_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e130_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Ambient Watercolor Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-gradient-to-b from-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[88rem] px-6 lg:px-10">

          {/* Section Header */}
          <div className="mb-12 flex flex-col items-center text-center">
            
            {/* Eyebrow Badge */}
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider text-[#0077b5] bg-blue-50/90 border border-blue-200/80 shadow-xs">
                <LinkedInIcon className="w-3.5 h-3.5" />
                Verified LinkedIn Endorsements
              </span>
            </div>

            {/* Headline with HandCircle & HandUnderline */}
            <h2
              id="recommendations-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-4 leading-[1.08] font-display"
            >
              Beyond the{' '}
              <span className="relative inline-block">
                <HandCircle color="#6366f1" strokeWidth={2.4}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(120deg, #6366f1 0%, #38bdf8 100%)" }}>
                    Code.
                  </span>
                </HandCircle>
              </span>
              <HandUnderline className="w-44 sm:w-60 h-3 mx-auto -mt-1 text-indigo-400" strokeWidth={2.2} />
            </h2>

            {/* Handwritten Note Stamp */}
            <div className="my-3 flex items-center justify-center gap-2">
              <HandwrittenNote rotation={-1.5} color="blue">
                Perspectives from mentors &amp; professors
              </HandwrittenNote>
            </div>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-medium mt-1">
              Verbatim recommendations from senior engineering mentors at Pegasystems and university professors who have supervised my technical work firsthand.
            </p>

            {/* 4-Pillar Credibility Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl mt-7">
              <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200/80 text-center shadow-xs hover:border-slate-300 transition-colors">
                <div className="text-base sm:text-lg font-black text-slate-900">2 Professors</div>
                <div className="text-[10px] font-mono font-bold uppercase text-slate-500">Woxsen &amp; VIT-AP</div>
              </div>
              <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200/80 text-center shadow-xs hover:border-slate-300 transition-colors">
                <div className="text-base sm:text-lg font-black text-indigo-600">1 Lead Architect</div>
                <div className="text-[10px] font-mono font-bold uppercase text-slate-500">PEGA Certified</div>
              </div>
              <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200/80 text-center shadow-xs hover:border-slate-300 transition-colors">
                <div className="text-base sm:text-lg font-black text-blue-600">1 Senior SWE</div>
                <div className="text-[10px] font-mono font-bold uppercase text-slate-500">Adqura / Pega</div>
              </div>
              <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200/80 text-center shadow-xs hover:border-slate-300 transition-colors">
                <div className="text-base sm:text-lg font-black text-emerald-600">100% Public</div>
                <div className="text-[10px] font-mono font-bold uppercase text-slate-500">Verified on LinkedIn</div>
              </div>
            </div>

            {/* Controls Bar: Category Filter + View Mode Switcher */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full max-w-4xl">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80 shadow-xs">
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSkill(null);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === 'all' && selectedSkill === null
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All ({RECOMMENDATIONS.length})
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory('enterprise');
                    setSelectedSkill(null);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === 'enterprise'
                      ? 'bg-white text-blue-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Enterprise Mentor (1)
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory('academic');
                    setSelectedSkill(null);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === 'academic'
                      ? 'bg-white text-purple-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Academic Faculty (3)
                </button>
              </div>

              {/* View Mode Toggle: Grid vs Spotlight */}
              <div className="flex items-center gap-1 bg-slate-100/90 p-1 rounded-full border border-slate-200/80 shadow-xs">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Grid View"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span>Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('spotlight')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    viewMode === 'spotlight'
                      ? 'bg-white text-indigo-600 shadow-xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Executive Spotlight"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Spotlight</span>
                </button>
              </div>
            </div>

            {/* Skill Filter Strip */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 max-w-2xl">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-400">
                Filter by Quality:
              </span>
              {ALL_SKILLS.map((skill) => {
                const isSelected = selectedSkill === skill;
                return (
                  <button
                    key={skill}
                    onClick={() => {
                      setSelectedSkill(isSelected ? null : skill);
                    }}
                    className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    #{skill}
                  </button>
                );
              })}
              {selectedSkill && (
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-[11px] font-mono font-bold text-rose-500 hover:text-rose-700 underline cursor-pointer ml-1"
                >
                  Clear filter
                </button>
              )}
            </div>
          </div>

          {/* Conditional View: Spotlight Carousel or 2-Column Grid */}
          {viewMode === 'spotlight' ? (
            <SpotlightCarouselView
              recs={filteredRecs.length > 0 ? filteredRecs : RECOMMENDATIONS}
              onOpenModal={openModal}
            />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 mb-16">
              {filteredRecs.length > 0 ? (
                filteredRecs.map((rec) => (
                  <RecommendationCard
                    key={rec.id}
                    rec={rec}
                    onReadFull={() => openModal(rec)}
                    activeSkill={selectedSkill}
                  />
                ))
              ) : (
                <div className="col-span-full py-12 text-center bg-slate-50 rounded-3xl border border-slate-200">
                  <p className="text-slate-600 font-medium">
                    No recommendations match the selected filter.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedSkill(null);
                    }}
                    className="mt-3 px-4 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Section Footer: Public Verification Bar with Handwritten Note & Arrow */}
          <div className="relative max-w-4xl mx-auto">
            {/* Doodle Pointer */}
            <div className="hidden md:flex items-center gap-2 absolute -top-8 right-6 z-10 pointer-events-none">
              <HandwrittenNote rotation={2} color="emerald">
                Direct LinkedIn source
              </HandwrittenNote>
              <HandDrawnArrow direction="curved-down-right" className="w-12 h-8 text-emerald-500 -mt-1" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-[#0077b5]/10 border border-[#0077b5]/20 flex items-center justify-center text-[#0077b5] shrink-0">
                  <LinkedInIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2 justify-center sm:justify-start">
                    All Recommendations are Publicly Verifiable on LinkedIn
                    <span className="text-emerald-600 text-xs font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Live
                    </span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                    Directly sourced and authenticated from Erolla Rishvin Reddy&apos;s LinkedIn profile.
                  </p>
                </div>
              </div>

              <a
                href={LINKEDIN_RECOMMENDATIONS_SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#0077b5] hover:bg-[#006097] text-white shadow-xs hover:shadow-md transition-all shrink-0 cursor-pointer"
              >
                <span>Verify Source on LinkedIn</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Modal Dialog */}
      {activeRec && (
        <RecommendationModal
          rec={activeRec}
          allRecs={filteredRecs.length > 0 ? filteredRecs : RECOMMENDATIONS}
          onClose={closeModal}
          onSelectRec={(rec) => setActiveRec(rec)}
        />
      )}
    </>
  );
}

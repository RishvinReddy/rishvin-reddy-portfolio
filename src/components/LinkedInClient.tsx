'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowUpRight,
  Shield,
  Cpu,
  Code2,
  FlaskConical,
  Briefcase,
  Trophy,
  BookOpen,
  Lightbulb,
  ExternalLink,
  ChevronRight,
  Building2,
  GraduationCap,
  MapPin,
  CheckCircle2,
  Sparkles,
  Search,
  X,
  Copy,
  Check,
  Award,
  Calendar,
  FileText,
  Info,
  Workflow,
  Layout,
  Database,
  Layers,
} from 'lucide-react';

import {
  HandUnderline,
  HandCircle,
  HandwrittenNote,
  EngineeringDoodle,
  RishvinSignature,
} from '@/components/handwritten';

/* Inline LinkedIn Icon */
function LinkedinIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

import {
  linkedinProfileUrl,
  profile,
  education,
  skillsMatrix,
  certifications,
  achievements,
  featuredProjects,
  linkedinPosts,
  verifiedExperience,
  type PostCategory,
  type FeaturedProject,
  type LinkedInPost,
  type CertificationEntry,
  type AchievementEntry,
  type SkillCategory,
} from '@/data/linkedin-content';
import type { Experience } from '@/data/experience';
import {
  RECOMMENDATIONS,
  LINKEDIN_RECOMMENDATIONS_SOURCE_URL,
  type Recommendation,
} from '@/data/recommendations';

/* ─────────────────────────────────────────────
   CONSTANTS & CONFIG
───────────────────────────────────────────── */
const LI_BLUE = '#0A66C2';
const LI_DARK = '#004182';

const POST_CATEGORIES: (PostCategory | 'All')[] = [
  'All',
  'Internship',
  'Project',
  'Achievement',
  'Insight',
  'Research',
];

const CATEGORY_CONFIG: Record<
  string,
  { icon: React.ReactNode; color: string; bg: string; border: string }
> = {
  Project: {
    icon: <Code2 className="w-3.5 h-3.5" />,
    color: 'text-blue-700 dark:text-blue-300',
    bg: 'bg-blue-50 dark:bg-blue-500/10',
    border: 'border-blue-200/80 dark:border-blue-500/25',
  },
  Internship: {
    icon: <Briefcase className="w-3.5 h-3.5" />,
    color: 'text-emerald-700 dark:text-emerald-300',
    bg: 'bg-emerald-50 dark:bg-emerald-500/10',
    border: 'border-emerald-200/80 dark:border-emerald-500/25',
  },
  Achievement: {
    icon: <Trophy className="w-3.5 h-3.5" />,
    color: 'text-amber-700 dark:text-amber-300',
    bg: 'bg-amber-50 dark:bg-amber-500/10',
    border: 'border-amber-200/80 dark:border-amber-500/25',
  },
  Insight: {
    icon: <Lightbulb className="w-3.5 h-3.5" />,
    color: 'text-purple-700 dark:text-purple-300',
    bg: 'bg-purple-50 dark:bg-purple-500/10',
    border: 'border-purple-200/80 dark:border-purple-500/25',
  },
  Research: {
    icon: <FlaskConical className="w-3.5 h-3.5" />,
    color: 'text-rose-700 dark:text-rose-300',
    bg: 'bg-rose-50 dark:bg-rose-500/10',
    border: 'border-rose-200/80 dark:border-rose-500/25',
  },
};

const SKILL_ICONS: Record<string, React.ReactNode> = {
  Code: <Code2 className="w-4 h-4 text-blue-500" />,
  Layout: <Layout className="w-4 h-4 text-pink-500" />,
  Database: <Database className="w-4 h-4 text-emerald-500" />,
  Shield: <Shield className="w-4 h-4 text-cyan-500" />,
  Cpu: <Cpu className="w-4 h-4 text-amber-500" />,
  Workflow: <Workflow className="w-4 h-4 text-purple-500" />,
};

const EXPERIENCE_THEME: Record<
  string,
  { bg: string; text: string; border: string; ring: string }
> = {
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/40',
    text: 'text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-200 dark:border-emerald-800',
    ring: 'ring-emerald-500/20',
  },
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/40',
    text: 'text-indigo-700 dark:text-indigo-300',
    border: 'border-indigo-200 dark:border-indigo-800',
    ring: 'ring-indigo-500/20',
  },
  violet: {
    bg: 'bg-violet-50 dark:bg-violet-950/40',
    text: 'text-violet-700 dark:text-violet-300',
    border: 'border-violet-200 dark:border-violet-800',
    ring: 'ring-violet-500/20',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/40',
    text: 'text-blue-700 dark:text-blue-300',
    border: 'border-blue-200 dark:border-blue-800',
    ring: 'ring-blue-500/20',
  },
  teal: {
    bg: 'bg-teal-50 dark:bg-teal-950/40',
    text: 'text-teal-700 dark:text-teal-300',
    border: 'border-teal-200 dark:border-teal-800',
    ring: 'ring-teal-500/20',
  },
};

const NAV_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'projects', label: 'Projects' },
  { id: 'posts', label: 'Posts & Feed' },
  { id: 'recommendations', label: 'Recommendations' },
];

/* ─────────────────────────────────────────────
   COMPONENT: PostCard (with Official Embed Option)
───────────────────────────────────────────── */
function PostCard({ post, index }: { post: LinkedInPost; index: number }) {
  const cfg = CATEGORY_CONFIG[post.category];
  const [showEmbed, setShowEmbed] = useState(false);
  const [embedLoading, setEmbedLoading] = useState(true);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="flex flex-col bg-white dark:bg-[#0c121e] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 hover:border-[#0A66C2]/50 hover:shadow-xl hover:shadow-[#0A66C2]/10 transition-all duration-300 group"
    >
      {/* Post Author / Header */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950/80 flex items-center justify-center text-[#0A66C2] font-black text-xs border border-blue-200 dark:border-blue-800 shrink-0">
            RR
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-slate-900 dark:text-white truncate">
                Rishvin Reddy
              </span>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0A66C2] shrink-0" />
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              {post.readTime && (
                <>
                  <span className="text-slate-300 dark:text-slate-700">·</span>
                  <span>{post.readTime}</span>
                </>
              )}
            </div>
          </div>
        </div>

        <span
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-[11px] font-bold uppercase tracking-wider shrink-0 ${cfg?.color} ${cfg?.bg} ${cfg?.border}`}
        >
          {cfg?.icon}
          {post.category}
        </span>
      </div>

      {/* Embed Toggle (if embedUrl is provided) */}
      {post.embedUrl && (
        <div className="mb-3 flex justify-end">
          <button
            onClick={() => setShowEmbed(!showEmbed)}
            className="text-xs font-semibold text-[#0A66C2] hover:text-[#004182] dark:hover:text-blue-300 flex items-center gap-1 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-md transition-colors"
          >
            {showEmbed ? 'Show Summary View' : 'Show LinkedIn Embed'}
          </button>
        </div>
      )}

      {/* Main Content Area */}
      {showEmbed && post.embedUrl ? (
        <div className="relative w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 mb-4 min-h-[380px]">
          {embedLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <div className="w-6 h-6 border-2 border-[#0A66C2] border-t-transparent rounded-full animate-spin mb-2" />
              <p className="text-xs text-slate-500">Loading official LinkedIn embed...</p>
            </div>
          )}
          <iframe
            src={post.embedUrl}
            title={post.title}
            className="w-full h-[420px] border-0"
            allowFullScreen
            onLoad={() => setEmbedLoading(false)}
          />
        </div>
      ) : (
        <>
          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#0A66C2] transition-colors duration-200 leading-snug mb-2.5">
            {post.title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 flex-1">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-[#0A66C2] dark:text-blue-400 font-medium bg-blue-50/70 dark:bg-blue-950/40 px-2 py-0.5 rounded border border-blue-100/50 dark:border-blue-900/50"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </>
      )}

      {/* Footer link to original LinkedIn post */}
      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <span className="text-xs text-slate-400 flex items-center gap-1.5">
          <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
          Verified Post
        </span>

        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-bold text-[#0A66C2] hover:underline"
        >
          Open on LinkedIn
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────
   MAIN CLIENT COMPONENT
───────────────────────────────────────────── */
export default function LinkedInClient() {
  const [activeCategory, setActiveCategory] = useState<PostCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [avatarError, setAvatarError] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showApiInfo, setShowApiInfo] = useState(false);

  /* Copy profile link to clipboard */
  const handleCopyLink = () => {
    navigator.clipboard.writeText(linkedinProfileUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  /* Filter and search posts */
  const filteredPosts = useMemo(() => {
    return linkedinPosts.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  function getCount(cat: PostCategory | 'All') {
    if (cat === 'All') return linkedinPosts.length;
    return linkedinPosts.filter((p) => p.category === cat).length;
  }

  return (
    <div className="min-h-screen bg-slate-50/70 dark:bg-[#070b12] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* ── Ambient Background Glows ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[50%] h-[50%] bg-[#0A66C2]/6 dark:bg-[#0A66C2]/15 rounded-full filter blur-[140px]" />
        <div className="absolute top-[35%] left-[-10%] w-[45%] h-[45%] bg-sky-500/5 dark:bg-sky-600/10 rounded-full filter blur-[140px]" />
        <div className="absolute bottom-[5%] right-[5%] w-[40%] h-[40%] bg-blue-500/5 dark:bg-blue-600/10 rounded-full filter blur-[140px]" />
      </div>

      {/* ══════════════════════════════════════════
          HERO — Professional Profile Header
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#090e17]">
        {/* Subtle LinkedIn brand top bar */}
        <div
          className="absolute inset-x-0 top-0 h-1.5"
          style={{ background: `linear-gradient(90deg, ${LI_BLUE}, #38bdf8, ${LI_BLUE})` }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="flex flex-col md:flex-row md:items-start md:gap-10">
            {/* Avatar with Verified Ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="shrink-0 mb-8 md:mb-0"
            >
              <div className="relative w-28 h-28 sm:w-36 sm:h-36">
                <div className="w-full h-full rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center ring-4 ring-[#0A66C2]/20">
                  {!avatarError ? (
                    <img
                      src="/icon.png"
                      alt={profile.displayName}
                      className="w-full h-full object-cover object-center"
                      onError={() => setAvatarError(true)}
                    />
                  ) : (
                    <span className="text-[#0A66C2] font-black text-3xl sm:text-4xl">RR</span>
                  )}
                </div>
                {/* LinkedIn Badge */}
                <div
                  className="absolute bottom-0 right-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center shadow-lg text-white"
                  style={{ backgroundColor: LI_BLUE }}
                  title="LinkedIn Verified"
                >
                  <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Profile Information */}
            <div className="flex-1 min-w-0">
              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="flex flex-wrap items-center gap-2.5 mb-4"
              >
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border"
                  style={{
                    backgroundColor: '#EEF3FB',
                    borderColor: '#B6C9E8',
                    color: LI_BLUE,
                  }}
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  Verified Engineering Profile
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open to High-Impact Opportunities
                </div>
              </motion.div>

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="relative inline-block w-fit mb-2"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] font-editorial">
                  {profile.displayName}
                </h1>
                <HandUnderline className="w-full h-3 sm:h-3.5 -mt-1 text-[#0A66C2]/70 dark:text-[#38bdf8]/80" strokeWidth={2.4} />
              </motion.div>

              {/* Subtitles & Location */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm sm:text-base mb-4"
              >
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  {profile.roleTitle}
                </span>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <span className="text-slate-600 dark:text-slate-400 font-medium">
                  {profile.subtitle}
                </span>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <span className="inline-flex items-center gap-1 text-slate-500 text-xs font-semibold whitespace-nowrap">
                  <MapPin className="w-3.5 h-3.5" />
                  {profile.location}
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-6"
              >
                {profile.tagline}
              </motion.p>

              {/* Focus Area Tags */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.26 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {profile.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 text-xs font-semibold rounded-full border bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                  >
                    {area}
                  </span>
                ))}
              </motion.div>

              {/* Primary Call-to-Actions */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.32 }}
                className="flex flex-wrap items-center gap-3"
              >
                <a
                  href={linkedinProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-linkedin-btn"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full shadow-lg transition-all duration-200 hover:opacity-95 hover:scale-[1.02]"
                  style={{ backgroundColor: LI_BLUE, boxShadow: `0 4px 20px ${LI_BLUE}40` }}
                >
                  <LinkedinIcon className="w-4 h-4" />
                  Connect on LinkedIn
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-700 dark:text-slate-200 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 shadow-sm"
                >
                  <Briefcase className="w-4 h-4 text-[#0A66C2]" />
                  Resume
                </Link>

                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#0A66C2] transition-colors"
                  title="Copy LinkedIn Profile Link"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </motion.div>

              <div className="mt-4 flex items-center gap-3 text-xs text-slate-400 font-mono">
                <span>linkedin.com/in/rishvinreddy</span>
                <span>·</span>
                <span>@rishvinreddy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS METRICS STRIP
      ══════════════════════════════════════════ */}
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-[#0c121e] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 text-center shadow-sm">
            <div className="text-3xl font-black text-[#0A66C2]">{profile.stats.connections}</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
              Network Connections
            </div>
          </div>
          <div className="bg-white dark:bg-[#0c121e] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 text-center shadow-sm">
            <div className="text-3xl font-black text-[#0A66C2]">{verifiedExperience.length}</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
              Verified Roles
            </div>
          </div>
          <div className="bg-white dark:bg-[#0c121e] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 text-center shadow-sm">
            <div className="text-3xl font-black text-[#0A66C2]">1</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
              Govt. Design Patent
            </div>
          </div>
          <div className="bg-white dark:bg-[#0c121e] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 text-center shadow-sm">
            <div className="text-3xl font-black text-[#0A66C2]">9.01</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
              Woxsen B.Tech CGPA
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          QUICK-JUMP SECTION NAVIGATION
      ══════════════════════════════════════════ */}
      <nav aria-label="LinkedIn Profile Sections" className="sticky top-20 z-30 mx-auto max-w-6xl px-6 mb-8">
        <div className="flex items-center gap-1.5 overflow-x-auto p-1.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-md scrollbar-none">
          {NAV_SECTIONS.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-[#0A66C2] dark:hover:text-[#38bdf8] hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap transition-colors"
            >
              {sec.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          SECTION: ABOUT
      ══════════════════════════════════════════ */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-8 scroll-mt-28">
        <div className="bg-white dark:bg-[#0c121e] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 sm:p-10 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-4 h-4 text-[#0A66C2]" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0A66C2]">
              About
            </h2>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
            Engineering Background & Philosophy
          </h3>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {profile.summary.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Authentic Signature Sign-off */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400">Founder & Engineer</p>
              <p className="font-bold text-slate-900 dark:text-white text-sm">Erolla Rishvin Reddy</p>
            </div>
            <RishvinSignature className="w-44 sm:w-52 h-auto text-slate-900 dark:text-white opacity-85 hover:opacity-100 transition-opacity -rotate-2" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION: EXPERIENCE (WORK HISTORY)
      ══════════════════════════════════════════ */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-8 scroll-mt-28">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-4 h-4 text-[#0A66C2]" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0A66C2]">
              Work History
            </h2>
          </div>
          <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Verified internships, startup leadership, and freelance consulting roles.
          </p>
        </div>

        <div className="space-y-6">
          {verifiedExperience.map((exp: Experience, idx: number) => {
            const theme = EXPERIENCE_THEME[exp.theme] ?? EXPERIENCE_THEME['blue'];
            return (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white dark:bg-[#0c121e] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 sm:p-9 shadow-sm hover:border-[#0A66C2]/40 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    {/* Company Icon Avatar */}
                    <div
                      className={`w-14 h-14 rounded-2xl border flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 ${theme.bg} ${theme.text} ${theme.border}`}
                    >
                      {exp.icon}
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-300 font-semibold mt-0.5">
                        <span className="text-[#0A66C2] dark:text-blue-400">{exp.company}</span>
                        <span>·</span>
                        <span>{exp.type}</span>
                        <span>·</span>
                        <span className="text-xs font-normal text-slate-400">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Duration Tag */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-xs font-bold text-slate-700 dark:text-slate-300 self-start">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {exp.duration}
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Bullets */}
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#0A66C2] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Skills used */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION: EDUCATION
      ══════════════════════════════════════════ */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-8 scroll-mt-28">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-4 h-4 text-[#0A66C2]" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0A66C2]">
              Education
            </h2>
          </div>
          <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Academic Credentials
          </h3>
        </div>

        {education.map((edu, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-[#0c121e] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 sm:p-10 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-[#0A66C2] shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {edu.institution}
                  </h4>
                  <p className="text-sm font-semibold text-[#0A66C2] dark:text-blue-400 mt-0.5">
                    {edu.degree} — {edu.fieldOfStudy}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {edu.duration}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-black">
                  {edu.grade}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
              {edu.description}
            </p>

            {/* Coursework */}
            <div className="mb-5">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Key Engineering Coursework
              </span>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Academic & Practical Milestones
              </span>
              <ul className="space-y-2">
                {edu.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════════════════
          SECTION: SKILLS MATRIX
      ══════════════════════════════════════════ */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-8 scroll-mt-28">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#0A66C2]" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0A66C2]">
              Skills & Expertise
            </h2>
          </div>
          <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering Matrix
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Categorized technical capabilities backed by production code and coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsMatrix.map((cat: SkillCategory, idx: number) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white dark:bg-[#0c121e] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:border-[#0A66C2]/40 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  {SKILL_ICONS[cat.iconName]}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {cat.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300"
                  >
                    {s.name}
                    {s.level && (
                      <span className="text-[10px] text-[#0A66C2] dark:text-blue-400 font-bold">
                        · {s.level}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION: LICENSES & CERTIFICATIONS
      ══════════════════════════════════════════ */}
      <section id="certifications" className="mx-auto max-w-6xl px-6 py-8 scroll-mt-28">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-[#0A66C2]" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0A66C2]">
              Licenses & Certifications
            </h2>
          </div>
          <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Patents & Credentials
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Registered government design patent and verified industry certifications.
          </p>
        </div>

        {/* Highlighted Patent Card */}
        <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/30 rounded-3xl p-7 sm:p-10 mb-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-amber-500 text-white text-xs font-black uppercase tracking-wider">
              Registered Design Patent · Govt. of India
            </span>
            <span className="text-xs font-bold text-amber-700 dark:text-amber-400">
              Design No. 470097-001 · Active
            </span>
          </div>

          <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2">
            IoT Connectivity Device
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mb-6">
            A novel hardware design for an intelligent IoT hardware connectivity interface enabling secure, authenticated device-to-cloud data transmission with real-time telemetry. Co-inventor with patent granted by the Patent Office, Government of India.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/assets/certificates/CERTIFICATE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-md transition-colors"
            >
              <FileText className="w-4 h-4" />
              View Official Certificate
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-white/50 transition-colors"
            >
              Explore In Portfolio
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Other Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert: CertificationEntry, idx: number) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-[#0c121e] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[#0A66C2]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A66C2]">
                    {cert.type}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{cert.date}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {cert.title}
                </h4>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                  {cert.issuer} {cert.credentialId ? `· ID: ${cert.credentialId}` : ''}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {cert.credentialUrl && (
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A66C2] hover:underline"
                  >
                    View Credential
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION: FEATURED PROJECTS
      ══════════════════════════════════════════ */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-8 scroll-mt-28">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-4 h-4 text-[#0A66C2]" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0A66C2]">
              Featured Work
            </h2>
          </div>
          <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering Projects
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Production systems across digital forensics, biometric IoT, and network analyzers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project: FeaturedProject, idx: number) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white dark:bg-[#0c121e] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#0A66C2]/40 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#0A66C2] dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/50 text-xs font-bold">
                    {project.domain}
                  </span>
                  {project.badge && (
                    <span className="text-[11px] font-bold text-slate-400">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#0A66C2] transition-colors mb-1">
                  {project.name}
                </h4>
                <p className="text-xs font-semibold text-slate-500 mb-3">{project.tagline}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <ChevronRight className="w-3.5 h-3.5 text-[#0A66C2] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={project.portfolioUrl}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A66C2] hover:underline"
                >
                  View Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={linkedinProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-500 hover:text-[#0A66C2] flex items-center gap-1"
                >
                  LinkedIn
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION: POSTS FEED (SEARCHABLE & FILTERABLE)
      ══════════════════════════════════════════ */}
      <section id="posts" className="mx-auto max-w-6xl px-6 py-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#0A66C2]">
                Posts & Updates Feed
              </h2>
            </div>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Professional Activity Feed
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              Search and filter curated LinkedIn publications, project announcements, and engineering milestones.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowApiInfo(!showApiInfo)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#0A66C2] transition-colors"
            >
              <Info className="w-3.5 h-3.5 text-[#0A66C2]" />
              Sync Workflow Info
            </button>
            <a
              href={linkedinProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A66C2] hover:underline"
            >
              All Posts on LinkedIn
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Sync Workflow Info Box (Collapsible) */}
        <AnimatePresence>
          {showApiInfo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-6"
            >
              <div className="p-6 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <div className="flex items-center gap-2 font-bold text-[#0A66C2] mb-2 text-sm">
                  <Info className="w-4 h-4" />
                  Official LinkedIn Synchronization & API Guidelines
                </div>
                <p className="mb-2">
                  <strong>Why a curated feed?</strong> The official LinkedIn Community Management API (Share / UGC APIs) strictly restricts post retrieval to approved Enterprise Partners with organization-verified applications (<code className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900 font-mono text-xs">r_member_social</code>). Scraping member feeds violates LinkedIn&apos;s User Agreement and CFAA protections.
                </p>
                <p className="mb-2">
                  <strong>How to add verified posts:</strong> Simply add your post data to <code className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900 font-mono text-xs">src/data/linkedin/posts.ts</code> with your post URL and optional embed URL.
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  To get an official LinkedIn embed URL: Click the three dots (<code className="font-mono">...</code>) on any of your LinkedIn posts, select &quot;Embed this post&quot;, and copy the iframe <code className="font-mono">src</code> URL!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search & Category Filter Bar */}
        <div className="space-y-4 mb-8">
          {/* Search Box */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts by topic, skill, or keyword..."
              className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c121e] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {POST_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  activeCategory === cat
                    ? 'text-white border-[#0A66C2] shadow-sm'
                    : 'bg-white dark:bg-[#0c121e] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
                style={activeCategory === cat ? { backgroundColor: LI_BLUE } : {}}
              >
                {cat}
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  {getCount(cat)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <AnimatePresence mode="wait">
          {filteredPosts.length > 0 ? (
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map((post, i) => (
                <PostCard key={post.id} post={post} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white dark:bg-[#0c121e] rounded-3xl border border-slate-200 dark:border-slate-800 p-8"
            >
              <LinkedinIcon className="w-12 h-12 mx-auto mb-3 text-slate-300 dark:text-slate-700" />
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                No matching LinkedIn posts found
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-4">
                No publications match &quot;{searchQuery}&quot; in the {activeCategory} category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ══════════════════════════════════════════
          SECTION: RECOMMENDATIONS (4 VERIFIED)
      ══════════════════════════════════════════ */}
      <section id="recommendations" className="mx-auto max-w-6xl px-6 py-8 scroll-mt-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800 text-[11px] font-black uppercase tracking-widest text-[#0A66C2] dark:text-blue-400 mb-2.5">
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
              Verified Endorsements · Received ({RECOMMENDATIONS.length})
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Recommendations
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Third-party validation of technical capability, learning mindset, and engineering discipline from mentors, professors, and industry practitioners.
            </p>
          </div>

          <a
            href={LINKEDIN_RECOMMENDATIONS_SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#0A66C2] hover:text-[#004182] dark:text-blue-400 dark:hover:text-blue-300 bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900 hover:border-[#0A66C2] transition-colors shrink-0"
          >
            <span>View All on LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RECOMMENDATIONS.map((rec) => (
            <motion.article
              key={rec.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-[#0c121e] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-80 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(90deg, #0A66C2, #38bdf8)' }}
              />

              <div>
                {/* Recommender Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center font-black text-sm text-white shadow-md relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #0A66C2 0%, #004182 100%)',
                      }}
                    >
                      {rec.avatarUrl ? (
                        <img
                          src={rec.avatarUrl}
                          alt={rec.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        rec.initials
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {rec.name}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-tight mt-0.5">
                        {rec.title}
                      </p>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-1">
                        {rec.relationship} · {rec.date}
                      </p>
                    </div>
                  </div>

                  <a
                    href={rec.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${rec.name}'s profile on LinkedIn`}
                    className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors shrink-0"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Recommendation Quote (Verbatim) */}
                <div className="relative mb-6">
                  <span
                    aria-hidden="true"
                    className="select-none pointer-events-none leading-none -mb-3 block text-3xl font-serif text-[#0A66C2]/30"
                  >
                    &ldquo;
                  </span>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    {rec.fullText.split('\n\n').map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 dark:text-slate-500 text-[11px] font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Verified on LinkedIn
                </span>

                <a
                  href={rec.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0A66C2] hover:text-[#004182] dark:hover:text-blue-300 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Recommender Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONNECT CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative rounded-3xl overflow-hidden p-10 sm:p-14 text-center shadow-2xl text-white"
          style={{ backgroundColor: LI_BLUE }}
        >
          {/* Radial highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#ffffff25_0%,_transparent_70%)] pointer-events-none" />

          <div className="relative">
            <div
              className="inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-6 shadow-xl"
              style={{ backgroundColor: LI_DARK }}
            >
              <LinkedinIcon className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Let&apos;s connect professionally.
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Follow the engineering journey, explore ongoing projects, and connect on LinkedIn to
              collaborate on software systems, AI pipelines, and cybersecurity research.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={linkedinProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-linkedin-connect"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white font-bold text-base rounded-full shadow-xl transition-all duration-200 hover:bg-blue-50 hover:scale-[1.03]"
                style={{ color: LI_DARK }}
              >
                <LinkedinIcon className="w-5 h-5" />
                Connect on LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/25 text-white font-bold text-base rounded-full hover:bg-white/20 transition-all duration-200"
              >
                Send a direct message
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

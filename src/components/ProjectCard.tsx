"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  "C++": "#f34b7d",
  C: "#555555",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Solidity: "#AA6746",
  Shell: "#89e051",
  Rust: "#dea584",
  Go: "#00ADD8",
};

// Known mermaid diagram type keywords
const MERMAID_TYPES = [
  "graph", "flowchart", "sequenceDiagram", "classDiagram", "stateDiagram",
  "stateDiagram-v2", "erDiagram", "gantt", "pie", "gitGraph", "journey",
  "quadrantChart", "requirementDiagram", "mindmap", "timeline", "xychart-beta",
  "block-beta",
];

/** Parse raw markdown for ```mermaid ... ``` fenced blocks. */
function extractMermaidBlocks(raw: string): string[] {
  const blocks: string[] = [];
  const fence = /```mermaid([\s\S]*?)```/gi;
  let m: RegExpExecArray | null;
  while ((m = fence.exec(raw)) !== null) {
    const code = m[1].trim();
    if (code) blocks.push(code);
  }
  return blocks;
}

// Post-process rendered README HTML:
// 1. Render ALL mermaid blocks from raw markdown (reliable: covers graph LR, sequenceDiagram, etc.)
// 2. Detect & inject Lucidchart / iframe embeds stripped by GitHub
async function postProcessReadme(
  container: HTMLElement,
  rawMarkdown: string
) {
  // ── 1. Mermaid — use raw markdown as primary source of truth ─────────────
  // a) DOM-detected blocks (GitHub may render as <pre class="mermaid"> etc)
  const domMermaidBlocks = Array.from(
    container.querySelectorAll<HTMLElement>(
      'pre code.language-mermaid, code.language-mermaid, pre.mermaid, .highlight-source-mermaid pre'
    )
  );

  // b) Any <pre> whose text starts with a known mermaid keyword
  const allPres = Array.from(container.querySelectorAll<HTMLElement>('pre'));
  const keywordBlocks = allPres.filter(pre => {
    const text = (pre.textContent || "").trimStart();
    return MERMAID_TYPES.some(t => text.startsWith(t));
  });

  const domBlockSet = new Set<HTMLElement>([...domMermaidBlocks, ...keywordBlocks]);

  // c) Raw markdown extraction (catches everything GitHub didn't render)
  const rawBlocks = extractMermaidBlocks(rawMarkdown);

  const hasMermaid = domBlockSet.size > 0 || rawBlocks.length > 0;

  if (hasMermaid) {
    const mermaid = (await import("mermaid")).default;
    mermaid.initialize({
      startOnLoad: false,
      theme: "default",
      securityLevel: "loose",
      fontFamily: "Georgia, serif",
      flowchart: { useMaxWidth: true, htmlLabels: true },
    });

    let idx = 0;

    // Render DOM-found blocks in-place
    for (const block of domBlockSet) {
      const code = (block.textContent || "").trim();
      if (!code) continue;
      const id = `mmd-dom-${Date.now()}-${idx++}`;
      try {
        const { svg } = await mermaid.render(id, code);
        const wrapper = document.createElement("div");
        wrapper.className = "my-5 p-4 bg-white border border-slate-200 rounded-xl overflow-x-auto shadow-md mermaid-rendered";
        wrapper.innerHTML = svg;
        const toReplace = block.closest("pre") || block;
        toReplace.replaceWith(wrapper);
      } catch (err) {
        console.warn("Mermaid DOM render error:", err);
      }
    }

    // Render raw-markdown blocks not already in DOM
    const alreadyRendered = container.querySelectorAll(".mermaid-rendered").length;
    const remaining = rawBlocks.slice(alreadyRendered);

    if (remaining.length > 0) {
      const section = document.createElement("div");
      section.className = "mt-6 space-y-5";
      const sectionHeading = document.createElement("h4");
      sectionHeading.className = "text-sm font-bold text-slate-500 uppercase tracking-widest mb-3";
      sectionHeading.textContent = "📈 Diagrams & Charts";
      section.appendChild(sectionHeading);

      for (const code of remaining) {
        const id = `mmd-raw-${Date.now()}-${idx++}`;
        try {
          const { svg } = await mermaid.render(id, code);
          const wrapper = document.createElement("div");
          wrapper.className = "p-4 bg-white border border-slate-200 rounded-xl overflow-x-auto shadow-md";
          wrapper.innerHTML = svg;
          section.appendChild(wrapper);
        } catch (err) {
          const fallback = document.createElement("pre");
          fallback.className = "bg-slate-900 text-slate-100 p-4 rounded-xl text-sm overflow-x-auto";
          fallback.textContent = code;
          section.appendChild(fallback);
          console.warn("Mermaid raw render error:", err);
        }
      }
      container.appendChild(section);
    }
  }

  // ── 2. Lucidchart / embed iframes stripped by GitHub ─────────────────────

  const lucidchart_regex =
    /https:\/\/(lucid\.app|app\.lucidchart\.com|www\.lucidchart\.com)\/[^\s'")\]]+/g;
  const lucidMatches = [...rawMarkdown.matchAll(lucidchart_regex)];

  if (lucidMatches.length > 0) {
    const iframeSection = document.createElement("div");
    iframeSection.className = "mt-6 space-y-4";
    const heading = document.createElement("h4");
    heading.className = "text-sm font-bold text-slate-500 uppercase tracking-widest mb-3";
    heading.textContent = "📊 Lucidchart Diagrams";
    iframeSection.appendChild(heading);

    const seen = new Set<string>();
    for (const match of lucidMatches) {
      const url = match[0].split(/['")\]]/)[0]; // trim any trailing chars
      if (seen.has(url)) continue;
      seen.add(url);

      // Convert view URL to embed URL for lucidchart
      let embedUrl = url;
      if (url.includes("lucidchart.com") && !url.includes("/embedded/")) {
        embedUrl = url.replace("/documents/view/", "/documents/embeddedchart/")
                      .replace("/documents/edit/", "/documents/embeddedchart/");
      }

      const iframeWrap = document.createElement("div");
      iframeWrap.className = "rounded-xl overflow-hidden border border-slate-200 shadow-md";
      const iframe = document.createElement("iframe");
      iframe.src = embedUrl;
      iframe.width = "100%";
      iframe.height = "480";
      iframe.style.border = "none";
      iframe.title = "Lucidchart Diagram";
      iframe.allowFullscreen = true;
      iframeWrap.appendChild(iframe);
      iframeSection.appendChild(iframeWrap);
    }
    container.appendChild(iframeSection);
  }

  // ── 3. Generic iframes (e.g. custom flowchart embeds) ────────────────────
  const iframeTagRegex = /<iframe[^>]+src=["']([^"']+)["'][^>]*>/g;
  const iframeMatches = [...rawMarkdown.matchAll(iframeTagRegex)];

  if (iframeMatches.length > 0) {
    const iframeSection2 = document.createElement("div");
    iframeSection2.className = "mt-6 space-y-4";
    const heading2 = document.createElement("h4");
    heading2.className = "text-sm font-bold text-slate-500 uppercase tracking-widest mb-3";
    heading2.textContent = "🔗 Embedded Diagrams";
    iframeSection2.appendChild(heading2);

    const seen2 = new Set<string>();
    for (const match of iframeMatches) {
      const src = match[1];
      if (seen2.has(src)) continue;
      seen2.add(src);

      const iframeWrap2 = document.createElement("div");
      iframeWrap2.className = "rounded-xl overflow-hidden border border-slate-200 shadow-md";
      const iframe2 = document.createElement("iframe");
      iframe2.src = src;
      iframe2.width = "100%";
      iframe2.height = "480";
      iframe2.style.border = "none";
      iframe2.title = "Embedded Diagram";
      iframe2.allowFullscreen = true;
      iframeWrap2.appendChild(iframe2);
      iframeSection2.appendChild(iframeWrap2);
    }
    container.appendChild(iframeSection2);
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const [readme, setReadme] = useState<string | null>(null);
  const [rawReadme, setRawReadme] = useState<string>("");
  const [readmeLoading, setReadmeLoading] = useState(false);
  const [readmeError, setReadmeError] = useState(false);
  const readmeRef = useRef<HTMLDivElement>(null);

  const langColor = project.language ? (LANGUAGE_COLORS[project.language] ?? "#64748b") : "#64748b";

  const fetchReadme = useCallback(async () => {
    if (!project.repoName) return;
    setReadmeLoading(true);
    setReadmeError(false);
    try {
      // Fetch both rendered HTML and raw markdown in parallel
      const [htmlRes, rawRes] = await Promise.all([
        fetch(
          `https://api.github.com/repos/RishvinReddy/${project.repoName}/readme`,
          { headers: { Accept: "application/vnd.github.html" } }
        ),
        fetch(
          `https://api.github.com/repos/RishvinReddy/${project.repoName}/readme`,
          { headers: { Accept: "application/vnd.github.raw" } }
        ),
      ]);

      if (!htmlRes.ok) throw new Error("No README");

      const html = await htmlRes.text();
      const raw = rawRes.ok ? await rawRes.text() : "";

      setReadme(html);
      setRawReadme(raw);
    } catch {
      setReadmeError(true);
    } finally {
      setReadmeLoading(false);
    }
  }, [project.repoName]);

  useEffect(() => {
    if (open && readme === null && !readmeLoading) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchReadme();
    }
  }, [open, readme, readmeLoading, fetchReadme]);

  // Post-process: render Mermaid + inject Lucidchart iframes
  useEffect(() => {
    if (!readme || !readmeRef.current) return;
    const container = readmeRef.current;
    postProcessReadme(container, rawReadme);
  }, [readme, rawReadme]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ─── Card ─── */}
      <div
        className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        aria-label={`Open preview for ${project.title}`}
      >
        {/* Dark GitHub-style header */}
        <div className="bg-[#0d1117] px-5 py-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-slate-400 text-xs font-mono mb-0.5">RishvinReddy/</p>
            <p className="text-white font-bold text-lg leading-tight truncate font-mono">
              {project.repoName || project.title}
            </p>
          </div>
          <img
            src={project.ownerAvatar || "https://github.com/RishvinReddy.png"}
            alt="Rishvin Reddy"
            className="w-10 h-10 rounded-full border-2 border-slate-700 flex-shrink-0 mt-0.5"
          />
        </div>

        {/* Description */}
        <div className="px-5 py-4 flex-1 flex flex-col">
          <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
            {project.description}
          </p>

          {/* Stats Row */}
          <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
            <span className="flex items-center gap-1.5" title="Contributors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.contributors ?? 1}
            </span>
            <span className="flex items-center gap-1.5" title="Open Issues">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4M12 16h.01" />
              </svg>
              {project.openIssues ?? 0}
            </span>
            <span className="flex items-center gap-1.5" title="Stars">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              {project.stars ?? 0}
            </span>
            <span className="flex items-center gap-1.5" title="Forks">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              {project.forks ?? 0}
            </span>
          </div>

          {/* Tags + Language */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 2).map((tag, i) => (
                <span key={i} className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            {project.language && (
              <span className="flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-full shrink-0">
                <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: langColor }}></span>
                {project.language}
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-2">
          <span className="text-[11px] text-slate-400 font-mono truncate max-w-[120px]">
            {project.repoName || project.title}
          </span>
          <div className="flex items-center gap-2 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 text-white text-[11px] font-bold rounded-full hover:bg-emerald-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label="Launch live demo"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Launch Live
              </a>
            )}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white text-[11px] font-bold rounded-full group-hover:bg-slate-700 transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Preview
            </span>
          </div>
        </div>
      </div>

      {/* ─── Modal ─── */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-start justify-center p-4 sm:p-6 lg:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} preview`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={() => setOpen(false)} />

          {/* Panel */}
          <div className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden mt-4">

            {/* Modal Header */}
            <div className="bg-[#0d1117] px-6 sm:px-8 py-5 flex items-center gap-4 shrink-0">
              <img
                src={project.ownerAvatar || "https://github.com/RishvinReddy.png"}
                alt="Rishvin Reddy"
                className="w-12 h-12 rounded-full border-2 border-slate-600"
              />
              <div className="flex-1 min-w-0">
                <p className="text-slate-400 text-xs font-mono">RishvinReddy /</p>
                <h2 className="text-white font-bold text-2xl font-mono leading-tight truncate">
                  {project.repoName || project.title}
                </h2>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-full transition-colors"
                    onClick={(e) => e.stopPropagation()}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold rounded-full transition-colors"
                    onClick={(e) => e.stopPropagation()}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
                <button onClick={() => setOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Close">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">

              {/* Meta strip */}
              <div className="px-6 sm:px-8 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center gap-x-6 gap-y-3">
                <span className="flex items-center gap-1.5 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <strong>{project.stars ?? 0}</strong> Stars
                </span>
                <span className="flex items-center gap-1.5 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <strong>{project.forks ?? 0}</strong> Forks
                </span>
                <span className="flex items-center gap-1.5 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4M12 16h.01" />
                  </svg>
                  <strong>{project.openIssues ?? 0}</strong> Open Issues
                </span>
                {project.language && (
                  <span className="flex items-center gap-1.5 text-sm text-slate-600">
                    <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: langColor }}></span>
                    {project.language}
                  </span>
                )}
                <div className="flex flex-wrap gap-1.5 ml-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="px-6 sm:px-8 py-5 border-b border-slate-100">
                <p className="text-slate-700 text-base leading-relaxed">{project.description}</p>
              </div>

              {/* README */}
              <div className="px-6 sm:px-8 py-6">
                <h3 className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-widest mb-5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  README.md
                </h3>

                {readmeLoading && (
                  <div className="flex items-center gap-3 text-slate-500 py-12 justify-center">
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <span className="text-sm">Loading README, diagrams & charts...</span>
                  </div>
                )}

                {readmeError && !readmeLoading && (
                  <div className="flex flex-col items-center gap-2 text-slate-400 py-10 text-center">
                    <svg className="w-10 h-10 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-sm font-medium text-slate-500">No README found for this repository.</p>
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline mt-1">
                        View on GitHub →
                      </a>
                    )}
                  </div>
                )}

                {readme && !readmeLoading && (
                  <div
                    ref={readmeRef}
                    className="prose prose-slate max-w-none
                      prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                      prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                      prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-2
                      prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                      prose-code:text-sm prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-slate-800 prose-code:before:content-none prose-code:after:content-none
                      prose-pre:bg-[#0d1117] prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:border prose-pre:border-slate-800 prose-pre:text-sm
                      prose-blockquote:border-l-4 prose-blockquote:border-slate-300 prose-blockquote:text-slate-600 prose-blockquote:italic
                      prose-img:rounded-xl prose-img:shadow-md prose-img:border prose-img:border-slate-200 prose-img:max-w-full
                      prose-table:text-sm prose-th:bg-slate-100 prose-th:font-bold
                      prose-li:text-slate-700 prose-p:text-slate-700 prose-p:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: readme }}
                  />
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">github.com/RishvinReddy/{project.repoName}</span>
              <div className="flex gap-2">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-slate-700 transition-colors"
                    onClick={(e) => e.stopPropagation()}>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    Open on GitHub
                  </a>
                )}
                <button onClick={() => setOpen(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-600 text-xs font-semibold rounded-full hover:bg-slate-100 transition-colors">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

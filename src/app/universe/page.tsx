import React from "react";
import Script from "next/script";
import Link from "next/link";

export default function UniversePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
    /* GLOBAL FONT OVERRIDES */
    body {
      font-family: "Times New Roman", serif !important;
    }

    h1,
    h2,
    h3 {
      font-family: Georgia, serif !important;
    }

    .code,
    .tech-stack {
      font-family: "Courier New", monospace !important;
    }
  ` }} />
      <style dangerouslySetInnerHTML={{ __html: `
        /* GLOBAL FONT OVERRIDES */
        body { font-family: "Times New Roman", serif !important; }
        h1, h2, h3 { font-family: Georgia, serif !important; }
        .code, .tech-stack { font-family: "Courier New", monospace !important; }
      ` }} />
      <div className="bg-[#05080f] text-[#e2e8f0] h-screen w-screen overflow-hidden m-0">
        
  {/* Full Screen Loader */}
  <div id="pageLoader"
    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background-light transition-opacity duration-500">
    <div className="loader-container">
      <div className="ball">
        <div className="inner">
          <div className="line"></div>
          <div className="line line--two"></div>
          <div className="oval"></div>
          <div className="oval oval--two"></div>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  </div>

  

  <h1 className="sr-only">Developer Universe 3D</h1>


  {/* Global CRT Scanline Effect */}
  <div className="scanline"></div>

  {/* Loading Screen */}
  <div id="loading-screen">
    <div className="relative w-32 h-32 mb-8">
      {/* Outer Ring */}
      <div className="absolute inset-0 rounded-full border border-white/10 border-t-primary animate-spin"
        style={{ animationDuration: "3s" }}></div>
      {/* Middle Ring */}
      <div
        className="absolute inset-2 rounded-full border border-white/10 border-r-indigo-500 border-b-indigo-500 animate-spin"
        style={{ animationDirection: "reverse", animationDuration: "2s" }}></div>
      {/* Inner Ring */}
      <div
        className="absolute inset-5 rounded-full border border-white/5 border-l-purple-500 animate-[spin_1.5s_linear_infinite]">
      </div>
      {/* Core Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-8 h-8 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5">
          </path>
        </svg>
      </div>
    </div>
    <div className="text-center w-80">
      <h2 className="text-2xl font-black tracking-[0.3em] uppercase text-white mb-2">DevOS <span
          className="text-primary text-glow">Engine</span></h2>
      <div className="h-1 w-full bg-black/5 rounded overflow-hidden relative mb-4">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-indigo-500 w-full origin-left animate-[scaleX_2s_ease-out_forwards]">
        </div>
      </div>
      <p className="text-xs font-mono text-slate-400" id="loading-text">INITIALIZING QUANTUM STATE...</p>
      <div className="data-stream mt-2 text-left h-12 flex flex-col justify-end" id="loading-stream"></div>
    </div>
  </div>

  {/* The 3D Canvas */}
  <div id="universe-canvas"></div>
  {/* Floating DOM Labels */}
  <div id="label-container"></div>

  {/* UI Overlay: Top Navigation */}
  <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start pointer-events-none z-30">
    <div className="flex flex-col gap-4">
      <div className="pointer-events-auto group">
        <Link href="/"
          className="inline-flex items-center gap-3 px-5 py-3 rounded-none glass-panel hud-border hover:bg-white/10 transition-all text-sm font-bold tracking-widest uppercase text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
          </div>
          <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18">
            </path>
          </svg>
          <span className="relative z-10 text-glow">Disengage</span>
        </Link>
      </div>

      {/* Audio Toggle */}
      <div className="pointer-events-auto">
        <button id="toggle-audio"
          className="w-10 h-10 flex items-center justify-center rounded-sm glass-panel border border-white/10 hover:border-primary/50 text-slate-400 hover:text-white transition-all">
          <svg className="w-4 h-4" id="icon-audio-off" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              clipRule="evenodd" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
          <svg className="w-4 h-4 hidden" id="icon-audio-on" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z">
            </path>
          </svg>
        </button>
      </div>
    </div>

    {/* Warp Navigation dropdown */}
    <div className="pointer-events-auto relative group z-40">
      <button
        className="inline-flex items-center gap-3 px-5 py-3 rounded-none glass-panel hud-border hover:bg-white/10 transition-all text-sm font-bold tracking-widest uppercase text-white">
        <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
          </path>
        </svg>
        <span className="text-glow">Warp Drive</span>
        <svg className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className="absolute right-0 mt-3 w-72 rounded-none glass-panel opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all overflow-hidden border-t-2 border-t-primary"
        id="warp-menu">
        <div
          className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-white/5 flex justify-between items-center">
          <span>Known Sectors</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        </div>
        <div className="overflow-y-auto max-h-80 custom-scrollbar" id="warp-list">
          {/* Populated by JS */}
        </div>
      </div>
    </div>
  </div>

  {/* Space Radar Mini-map (Under Exits) */}
  <div
    className="absolute top-36 left-8 w-24 h-24 rounded-full border border-white/15 bg-black/40 backdrop-blur-md pointer-events-none z-20 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.6)]">
    <div className="absolute inset-0 border-[0.5px] border-black/10 rounded-full scale-50"></div>
    <div className="w-full h-px bg-white/10 absolute top-1/2"></div>
    <div className="w-px h-full bg-white/10 absolute left-1/2"></div>
    <div id="radar-sweep"
      className="absolute inset-0 w-1/2 h-1/2 bg-gradient-to-tr from-transparent to-primary/40 origin-bottom-right animate-[spin_4s_linear_infinite]">
    </div>
    <div className="w-2 h-2 bg-primary rounded-full absolute shadow-[0_0_10px_rgba(0,0,0,0.1)] z-10"></div>
  </div>

  {/* System Event Log (Bottom Left) */}
  <div className="absolute bottom-8 left-8 w-80 h-40 pointer-events-none z-20 flex flex-col justify-end">
    <div className="flex items-center gap-2 mb-2 w-full border-b border-primary/20 pb-1">
      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#ff2a5f]"></div>
      <span
        className="text-[9px] font-mono font-black text-primary uppercase tracking-[0.2em] text-glow">LIVE_SYS_LOG</span>
    </div>
    <div id="sys-log"
      className="sys-log-container w-full h-full overflow-hidden flex flex-col justify-end gap-1.5 text-[10px] font-mono text-slate-400">
      {/* Logs injected by JS */}
    </div>
  </div>

  {/* UI Overlay: Interactive HUD (Bottom Right) */}
  <div className="absolute bottom-8 right-8 pointer-events-none z-30 w-96 font-sans">
    <div id="stats-panel"
      className="glass-panel hud-border p-6 rounded-none opacity-0 translate-x-8 pointer-events-auto transition-all duration-500 relative overflow-hidden">

      {/* Decorative tech elements */}
      <div
        className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent pointer-events-none">
      </div>
      <div className="absolute top-2 right-2 flex gap-1">
        <div className="w-1 h-1 bg-white/40"></div>
        <div className="w-1 h-1 bg-white/40"></div>
        <div className="w-1 h-1 bg-primary"></div>
      </div>

      <div className="flex items-center justify-between mb-4 mt-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-none bg-primary animate-pulse"></span>
          <span id="planet-type"
            className="text-[10px] font-mono font-black uppercase tracking-widest text-primary text-glow">TARGET_LOCKED</span>
        </div>
        <button id="close-stats"
          className="text-slate-600 hover:text-black transition-colors bg-black/5 hover:bg-primary/20 p-1.5 rounded">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <h2 id="planet-name" className="text-2xl font-black text-white mb-2 uppercase tracking-wide leading-tight">Overview
      </h2>
      <p id="planet-desc" className="text-sm text-slate-400 mb-6 leading-relaxed font-light min-h-[60px]">
        Establishing neural link... Space represents projects. Moons represent technologies.
      </p>

      <div id="planet-data" className="hidden">
        <div className="grid grid-cols-2 gap-px mb-6 bg-black/10 border border-black/5">
          <div className="bg-white/5 p-3">
            <p className="text-[9px] font-mono text-slate-400 uppercase font-bold tracking-widest mb-1">Architecture</p>
            <p id="planet-lang" className="text-base font-bold text-emerald-400 text-glow">---</p>
          </div>
          <div className="bg-white/5 p-3">
            <p className="text-[9px] font-mono text-slate-400 uppercase font-bold tracking-widest mb-1">Energy Level</p>
            <div className="flex items-center gap-1.5 text-amber-400">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <p id="planet-stars" className="text-base font-bold text-glow">---</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <a id="planet-btn-repo" href="#" target="_blank"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/20 text-xs font-black uppercase tracking-widest transition-all hover:border-white">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
              </path>
            </svg>
            Terminal
          </a>
          <button id="planet-btn-ai"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-primary/10 hover:bg-primary/20 border border-primary/50 text-primary text-xs font-black uppercase tracking-widest transition-all hover:border-primary hover:shadow-[0_0_15px_rgba(242,13,70,0.4)]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z">
              </path>
            </svg>
            Ask AI
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Deep Project Modal (Triggered on Planet Click) */}
  <div id="planet-modal"
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-500">
    <div
      className="bg-[#0a0e1a] w-full max-w-4xl max-h-[85vh] flex flex-col rounded border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden scale-95 transition-transform duration-500"
      id="planet-modal-content">
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex justify-between items-start bg-white/5">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span
              className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest bg-primary/20 text-primary border border-primary/30 rounded"
              id="modal-lang">---</span>
            <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span id="modal-stars">0</span>
            </div>
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 text-glow animate-pulse">LIVE_CONNECTION_ESTABLISHED</span>
          </div>
          <h2 id="modal-title"
            className="text-3xl font-black text-white hover:text-primary transition-colors cursor-pointer inline-block">
            Project Name</h2>
          <p id="modal-desc" className="text-sm text-slate-400 mt-2 max-w-2xl font-light leading-relaxed">Project
            description goes here...</p>
        </div>
        <button id="close-modal"
          className="text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-primary/20 p-2 rounded">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      {/* Body (README) */}
      <div className="p-6 overflow-y-auto overflow-x-hidden flex-1 bg-[#080b14]">
        <div id="modal-readme"
          className="prose prose-invert max-w-none prose-pre:bg-slate-900 prose-pre:border prose-pre:border-white/10 prose-p:text-slate-300 prose-headings:text-white prose-a:text-primary prose-img:rounded-md prose-img:border prose-img:border-white/10">
          <div className="flex justify-center items-center h-32">
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
      {/* Footer actions */}
      <div className="p-4 border-t border-white/10 bg-white/5 flex justify-end gap-3">
        <a id="modal-btn-github" href="#" target="_blank"
          className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-slate-300 transition-all hover:border-white flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
            </path>
          </svg>
          View source code
        </a>
        <a id="modal-btn-ide" href="#"
          className="px-5 py-2.5 bg-primary/20 hover:bg-primary/30 border border-primary/50 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:shadow-[0_0_15px_rgba(255,42,95,0.4)] flex items-center gap-2 group">
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Open in IDE
        </a>
      </div>
    </div>
  </div>

  {/* Load the Portfolio Engine for Data */}
  
  {/* Load the Universe 3D Engine */}
  

  

      </div>

      {/* Scripts */}
      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/renderers/CSS2DRenderer.js"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/EffectComposer.js"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/RenderPass.js"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/ShaderPass.js"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/shaders/CopyShader.js"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/shaders/LuminosityHighPassShader.js"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/UnrealBloomPass.js"></script>
      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
      <script defer src="/js/portfolio-engine.js"></script>
      <script defer src="/js/universe-engine.js"></script>
    </>
  );
}

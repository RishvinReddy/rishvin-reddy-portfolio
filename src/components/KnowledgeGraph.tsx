/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import {
  HandwrittenNote,
  HandCircle,
  EngineeringDoodle,
} from '@/components/handwritten';

const DOMAIN_STYLES: Record<string, {
  bg: string;
  border: string;
  highlightBg: string;
  highlightBorder: string;
  glow: string;
  textColor: string;
  badgeClass: string;
  accentHex: string;
}> = {
  'AI & ML': {
    bg: '#1e3a8a',
    border: '#3b82f6',
    highlightBg: '#2563eb',
    highlightBorder: '#60a5fa',
    glow: 'rgba(59, 130, 246, 0.5)',
    textColor: '#ffffff',
    badgeClass: 'bg-blue-900/60 text-blue-300 border-blue-500/30',
    accentHex: '#3b82f6',
  },
  'IoT': {
    bg: '#064e3b',
    border: '#10b981',
    highlightBg: '#059669',
    highlightBorder: '#34d399',
    glow: 'rgba(16, 185, 129, 0.5)',
    textColor: '#ffffff',
    badgeClass: 'bg-emerald-900/60 text-emerald-300 border-emerald-500/30',
    accentHex: '#10b981',
  },
  'Security': {
    bg: '#881337',
    border: '#f43f5e',
    highlightBg: '#e11d48',
    highlightBorder: '#fb7185',
    glow: 'rgba(244, 63, 94, 0.5)',
    textColor: '#ffffff',
    badgeClass: 'bg-rose-900/60 text-rose-300 border-rose-500/30',
    accentHex: '#f43f5e',
  },
  'Web Dev': {
    bg: '#312e81',
    border: '#6366f1',
    highlightBg: '#4f46e5',
    highlightBorder: '#818cf8',
    glow: 'rgba(99, 102, 241, 0.5)',
    textColor: '#ffffff',
    badgeClass: 'bg-indigo-900/60 text-indigo-300 border-indigo-500/30',
    accentHex: '#6366f1',
  },
  'Database': {
    bg: '#164e63',
    border: '#06b6d4',
    highlightBg: '#0891b2',
    highlightBorder: '#22d3ee',
    glow: 'rgba(6, 182, 212, 0.5)',
    textColor: '#ffffff',
    badgeClass: 'bg-cyan-900/60 text-cyan-300 border-cyan-500/30',
    accentHex: '#06b6d4',
  },
  'Software': {
    bg: '#581c87',
    border: '#8b5cf6',
    highlightBg: '#7c3aed',
    highlightBorder: '#a78bfa',
    glow: 'rgba(139, 92, 246, 0.5)',
    textColor: '#ffffff',
    badgeClass: 'bg-purple-900/60 text-purple-300 border-purple-500/30',
    accentHex: '#8b5cf6',
  },
};

export default function KnowledgeGraph({ repos }: { repos: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedNodeData, setSelectedNodeData] = useState<any>(null);
  const [graphStable, setGraphStable] = useState(false);
  const [physicsEnabled, setPhysicsEnabled] = useState(true);
  const [activeDomainFilter, setActiveDomainFilter] = useState<string>('All');
  const networkRef = useRef<any>(null);
  const graphDataRef = useRef<{ nodes: DataSet<any>; edges: DataSet<any> } | null>(null);
  const categoryIdsRef = useRef<Map<string, string>>(new Map());

  useEffect(() => {
    if (!containerRef.current || !repos) return;

    const categoriesMap = new Map<string, { id: string; label: string; isDomain: boolean; connections: number; repos: any[] }>();

    ['AI & ML', 'IoT', 'Security', 'Web Dev', 'Database', 'Software'].forEach((name, idx) => {
      const catObj = { id: `cat_${idx}`, label: name, isDomain: true, connections: 0, repos: [] };
      categoriesMap.set(name, catObj);
      categoryIdsRef.current.set(name, `cat_${idx}`);
    });

    const nodesArray: any[] = [];
    const edgesArray: any[] = [];
    let nodeIdCounter = 100;

    // Center Root Node (Rishvin Reddy)
    nodesArray.push({
      id: 'root_user',
      label: 'Rishvin Reddy',
      title: '<div class="p-2"><span class="font-bold text-white text-sm">Erolla Rishvin Reddy</span><br><span class="text-indigo-400 text-xs">Architect & Founder</span></div>',
      shape: 'circularImage',
      image: 'https://github.com/RishvinReddy.png',
      size: 42,
      font: { size: 15, color: '#f8fafc', face: 'Inter, sans-serif', bold: true, vadjust: -14 },
      color: { border: '#6366f1', background: '#0f172a', highlight: { border: '#a855f7', background: '#1e1b4b' } },
      borderWidth: 4,
      shadow: { enabled: true, color: 'rgba(99, 102, 241, 0.7)', size: 32, x: 0, y: 0 },
      isRoot: true,
    });

    const detectProjectType = (repo: any) => {
      const d = repo.description ? repo.description.toLowerCase() : '';
      const t = repo.topics || [];
      const l = repo.language ? repo.language.toLowerCase() : '';
      const hasTopic = (topic: string) => t.includes(topic);
      
      if (hasTopic('iot') || hasTopic('esp32') || hasTopic('arduino') || l === 'c++' || l === 'c') {
        return { name: 'IoT', class: 'bg-emerald-900/50 text-emerald-400 border-emerald-500/30' };
      }
      if (hasTopic('security') || d.includes('security') || d.includes('cyber') || d.includes('packet')) {
        return { name: 'Security', class: 'bg-rose-900/50 text-rose-400 border-rose-500/30' };
      }
      if (hasTopic('machine-learning') || hasTopic('ai') || d.includes('ai ') || l === 'jupyter notebook') {
        return { name: 'AI & ML', class: 'bg-blue-900/50 text-blue-400 border-blue-500/30' };
      }
      if (hasTopic('database') || hasTopic('sql') || hasTopic('mongodb')) {
        return { name: 'Database', class: 'bg-cyan-900/50 text-cyan-400 border-cyan-500/30' };
      }
      if (l === 'typescript' || l === 'javascript' || hasTopic('react') || hasTopic('nextjs') || hasTopic('web')) {
        return { name: 'Web Dev', class: 'bg-indigo-900/50 text-indigo-400 border-indigo-500/30' };
      }
      return { name: 'Software', class: 'bg-slate-800 text-slate-300 border-slate-600' };
    };

    const complexityScore = (repo: any) => {
      let s = (repo.stargazers_count || 0) * 2;
      s += (repo.forks_count || 0) * 3;
      if (repo.description && repo.description.length > 50) s += 2;
      return s;
    };
    const isBestRepo = (repo: any, score: number) => score > 5 || repo.stargazers_count > 0;

    const graphRepos = repos.filter(repo => !repo.fork);
    graphRepos.forEach(repo => {
      const typeInfo = detectProjectType(repo);
      const score = complexityScore(repo);
      const isImportant = isBestRepo(repo, score);
      const repoNodeId = `node_${nodeIdCounter++}`;

      let catObj = categoriesMap.get(typeInfo.name);
      if (!catObj) {
        catObj = { id: `cat_${categoriesMap.size}`, label: typeInfo.name, isDomain: true, connections: 0, repos: [] };
        categoriesMap.set(typeInfo.name, catObj);
      }
      catObj.connections++;
      catObj.repos.push(repo);

      const repoName = repo.name || 'Unknown Repo';
      const domainStyle = DOMAIN_STYLES[typeInfo.name] || DOMAIN_STYLES['Software'];

      nodesArray.push({
        id: repoNodeId,
        label: repoName.replace(/-/g, ' '),
        title: `<div class="p-2.5 bg-slate-900 border border-slate-700 rounded-lg shadow-xl"><span class="font-bold text-white text-sm">${repoName.replace(/-/g, ' ')}</span><br><span class="text-xs font-mono" style="color: ${domainStyle.accentHex}">${repo.language || 'Code'}</span> · <span class="text-xs text-slate-400">⭐ ${repo.stargazers_count || 0}</span></div>`,
        shape: isImportant ? 'hexagon' : 'dot',
        size: isImportant ? 18 : 12,
        font: {
          size: isImportant ? 12 : 10,
          color: isImportant ? '#f8fafc' : '#cbd5e1',
          face: 'Inter, sans-serif',
          vadjust: -6,
          bold: isImportant
        },
        color: {
          background: isImportant ? '#0f172a' : '#1e293b',
          border: isImportant ? '#f43f5e' : domainStyle.border,
          highlight: { background: '#334155', border: isImportant ? '#fb7185' : domainStyle.highlightBorder },
          hover: { background: '#1e293b', border: '#ffffff' }
        },
        shadow: isImportant ? { enabled: true, color: 'rgba(244, 63, 94, 0.45)', size: 16, x: 0, y: 0 } : false,
        borderWidth: isImportant ? 3.5 : 2,
        isDomain: false,
        domainName: typeInfo.name,
        repoData: repo
      });

      edgesArray.push({
        from: catObj.id,
        to: repoNodeId,
        color: { color: 'rgba(100, 116, 139, 0.35)', hover: domainStyle.border, highlight: '#f43f5e' },
        width: isImportant ? 2 : 1,
        smooth: { type: 'continuous', roundness: 0.5 },
        hoverWidth: 2
      });
    });

    categoriesMap.forEach((catObj) => {
      if (catObj.connections > 0) {
        const style = DOMAIN_STYLES[catObj.label] || DOMAIN_STYLES['Software'];

        edgesArray.push({
          from: 'root_user',
          to: catObj.id,
          color: { color: style.glow, hover: style.border, highlight: style.highlightBorder },
          width: 3.5,
          length: 190,
          dashes: [6, 6],
          smooth: { type: 'curvedCW', roundness: 0.25 }
        });

        nodesArray.push({
          id: catObj.id,
          label: catObj.label.toUpperCase(),
          title: `<div class="p-2.5 bg-slate-900 border border-slate-700 rounded-lg shadow-xl"><span class="font-bold text-white text-sm">${catObj.label} Domain</span><br><span class="text-xs text-slate-300 font-mono">${catObj.connections} Repositories Connected</span></div>`,
          shape: 'box',
          margin: 12,
          color: {
            background: style.bg,
            border: style.border,
            highlight: { background: style.highlightBg, border: style.highlightBorder },
            hover: { background: style.highlightBg, border: '#ffffff' }
          },
          borderWidth: 2.5,
          font: {
            size: 13,
            color: '#ffffff',
            face: 'Inter, sans-serif',
            bold: true,
          },
          shadow: { enabled: true, color: style.glow, size: 24, x: 0, y: 0 },
          isDomain: true,
          domainName: catObj.label,
          domainData: catObj
        });
      }
    });

    const graphData = {
      nodes: new DataSet(nodesArray),
      edges: new DataSet(edgesArray)
    };
    graphDataRef.current = graphData;

    const graphOptions = {
      nodes: { chosen: true },
      edges: { chosen: true },
      physics: {
        solver: 'forceAtlas2Based',
        forceAtlas2Based: {
          gravitationalConstant: -110,
          centralGravity: 0.012,
          springLength: 110,
          springConstant: 0.08,
          avoidOverlap: 0.85
        },
        maxVelocity: 50,
        minVelocity: 0.1,
        stabilization: { iterations: 150, updateInterval: 25 }
      },
      interaction: {
        hover: true,
        zoomView: true,
        dragView: true,
        tooltipDelay: 40,
        hideEdgesOnDrag: true
      }
    };

    const network = new Network(containerRef.current, graphData, graphOptions);
    networkRef.current = network;

    network.once('stabilizationIterationsDone', () => {
      setGraphStable(true);
      network.fit({ animation: { duration: 900, easingFunction: 'easeInOutQuad' } });
    });

    network.on('selectNode', function (params: any) {
      if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        const node = graphData.nodes.get(nodeId);
        setSelectedNodeData(node);
      }
    });

    network.on('deselectNode', function () {
      setSelectedNodeData(null);
    });

    network.on('doubleClick', function (params: any) {
      if (params.nodes.length > 0) {
        const node: any = graphData.nodes.get(params.nodes[0]);
        if (node && node.repoData && node.repoData.html_url) {
          window.open(node.repoData.html_url, '_blank');
        }
      }
    });

    return () => {
      network.destroy();
    };
  }, [repos]);

  // Interactive controls
  const handleZoomIn = useCallback(() => {
    if (!networkRef.current) return;
    const currentScale = networkRef.current.getScale();
    networkRef.current.moveTo({ scale: currentScale * 1.3, animation: { duration: 300 } });
  }, []);

  const handleZoomOut = useCallback(() => {
    if (!networkRef.current) return;
    const currentScale = networkRef.current.getScale();
    networkRef.current.moveTo({ scale: currentScale * 0.7, animation: { duration: 300 } });
  }, []);

  const handleFit = useCallback(() => {
    if (!networkRef.current) return;
    networkRef.current.fit({ animation: { duration: 700, easingFunction: 'easeInOutQuad' } });
  }, []);

  const handleTogglePhysics = useCallback(() => {
    if (!networkRef.current) return;
    const next = !physicsEnabled;
    setPhysicsEnabled(next);
    networkRef.current.setOptions({ physics: { enabled: next } });
  }, [physicsEnabled]);

  const handleFilterDomain = useCallback((domain: string) => {
    setActiveDomainFilter(domain);
    if (!networkRef.current) return;

    if (domain === 'All') {
      networkRef.current.fit({ animation: { duration: 800, easingFunction: 'easeInOutQuad' } });
      return;
    }

    const catId = categoryIdsRef.current.get(domain);
    if (catId) {
      networkRef.current.focus(catId, {
        scale: 1.25,
        animation: { duration: 800, easingFunction: 'easeInOutQuad' }
      });
      if (graphDataRef.current) {
        const node = graphDataRef.current.nodes.get(catId);
        if (node) setSelectedNodeData(node);
      }
    }
  }, []);

  const renderDetails = () => {
    if (!selectedNodeData) return null;

    // 1. Root Node (Rishvin)
    if (selectedNodeData.isRoot) {
      return (
        <div className="flex flex-col h-full animate-fade-in">
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              Core System Node
            </span>
            <h4 className="text-2xl font-black text-white font-display">Erolla Rishvin Reddy</h4>
            <p className="text-xs text-indigo-400 font-mono mt-0.5">Software Engineer · IoT Patent Holder</p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6 font-medium">
            Central repository nexus orchestrating full-stack web architectures, IoT sensor firmware, cybersecurity pipelines, and blockchain networks.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Total Repos</div>
              <div className="text-xl font-black text-white">{repos?.length || 0}</div>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Ecosystem Hubs</div>
              <div className="text-xl font-black text-indigo-400">6 Domains</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/80 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <EngineeringDoodle type="connected-nodes" className="w-5 h-5 text-indigo-400" />
              <span className="text-xs font-mono text-slate-300">Topology: ForceAtlas2</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Connected</span>
          </div>

          <a
            href="https://github.com/RishvinReddy"
            target="_blank"
            rel="noreferrer"
            className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-indigo-500/30 transition-all active:scale-95"
          >
            Visit GitHub Profile
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>
      );
    }
    
    // 2. Domain Hub Node
    if (selectedNodeData.isDomain) {
      const domainStyle = DOMAIN_STYLES[selectedNodeData.domainData.label] || DOMAIN_STYLES['Software'];
      const repoList = selectedNodeData.domainData.repos || [];

      return (
        <div className="flex flex-col h-full animate-fade-in">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${domainStyle.badgeClass}`}>
                Domain Cluster
              </span>
              <span className="text-xs font-mono text-slate-400 font-bold">
                {selectedNodeData.domainData.connections} Connected
              </span>
            </div>
            <h4 className="text-2xl font-black text-white font-display flex items-center gap-2">
              <span>{selectedNodeData.domainData.label}</span>
            </h4>
          </div>

          <p className="text-sm text-slate-300 font-medium leading-relaxed mb-5">
            This technical cluster links <span className="font-bold" style={{ color: domainStyle.accentHex }}>{selectedNodeData.domainData.connections} production &amp; research repositories</span> sharing specialized tools, protocols, and architectural paradigms.
          </p>

          <div className="mb-5 flex-1 overflow-y-auto pr-1">
            <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Clustered Repositories</span>
              <span className="text-[10px] text-slate-500">Double-click to open</span>
            </div>
            <div className="space-y-2">
              {repoList.slice(0, 6).map((r: any, idx: number) => (
                <a
                  key={idx}
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 transition-colors group"
                >
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white truncate max-w-[200px]">
                    {r.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-indigo-400">
                    ⭐ {r.stargazers_count || 0}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleFilterDomain(selectedNodeData.domainData.label)}
            className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all shadow-md"
            style={{ backgroundColor: domainStyle.accentHex }}
          >
            Focus Camera on Cluster
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      );
    } 
    
    // 3. Repository Node
    if (selectedNodeData.repoData) {
      const r = selectedNodeData.repoData;
      const domainStyle = DOMAIN_STYLES[selectedNodeData.domainName] || DOMAIN_STYLES['Software'];
      const langColor = r.language === 'Python' ? 'text-blue-400' : (r.language === 'JavaScript' || r.language === 'TypeScript' ? 'text-yellow-400' : (r.language === 'C++' ? 'text-pink-400' : 'text-emerald-400'));
      const desc = r.description ? r.description : 'Production-grade software engineering repository built by Erolla Rishvin Reddy.';
      
      return (
        <div className="flex flex-col h-full animate-fade-in">
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${domainStyle.badgeClass}`}>
                {selectedNodeData.domainName || 'Repository'}
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                {r.visibility || 'Public'}
              </span>
            </div>
            <h4 className="text-xl font-bold text-white break-words leading-tight">
              {r.name}
            </h4>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
            {desc}
          </p>

          <div className="grid grid-cols-2 gap-2.5 mb-4">
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Primary Language</div>
              <div className={`text-sm font-bold font-mono ${langColor}`}>{r.language || 'N/A'}</div>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80 flex justify-around items-center">
              <div className="text-center">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Stars</div>
                <div className="text-sm font-bold text-amber-300">⭐ {r.stargazers_count}</div>
              </div>
              <div className="h-6 w-px bg-slate-700"></div>
              <div className="text-center">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Forks</div>
                <div className="text-sm font-bold text-slate-200">🍴 {r.forks_count}</div>
              </div>
            </div>
          </div>

          {/* Topics Pills */}
          {r.topics && r.topics.length > 0 && (
            <div className="mb-4">
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">Topics &amp; Stack</div>
              <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto pr-1">
                {r.topics.slice(0, 6).map((topic: string, i: number) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    #{topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-auto space-y-2">
            <a
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-indigo-500/30 transition-all active:scale-95 group"
            >
              Open on GitHub
              <svg className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
            <a
              href="/ide"
              className="flex items-center justify-center gap-2 w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl font-semibold text-xs transition-colors"
            >
              Inspect in Projects IDE
            </a>
          </div>
        </div>
      );
    }
    return null;
  };

  const domainTabs = ['All', 'IoT', 'Security', 'AI & ML', 'Web Dev', 'Database', 'Software'];

  return (
    <div className="flex flex-col gap-5">
      {/* Top Filter and Interactive Controls Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-2.5 sm:px-4 shadow-sm">
        {/* Domain Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mr-1 hidden md:inline-block">
            Filter:
          </span>
          {domainTabs.map((tab) => {
            const isActive = activeDomainFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => handleFilterDomain(tab)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Action Buttons: Zoom, Fit, Physics */}
        <div className="flex items-center justify-end gap-1.5 shrink-0">
          <button
            onClick={handleZoomIn}
            title="Zoom In"
            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-sm transition-colors"
          >
            +
          </button>
          <button
            onClick={handleZoomOut}
            title="Zoom Out"
            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-sm transition-colors"
          >
            -
          </button>
          <button
            onClick={handleFit}
            title="Recenter / Fit All"
            className="px-2.5 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold flex items-center gap-1 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>Fit</span>
          </button>
          <button
            onClick={handleTogglePhysics}
            title={physicsEnabled ? 'Pause Physics' : 'Resume Physics'}
            className={`px-2.5 h-8 rounded-lg font-mono text-xs font-bold flex items-center gap-1 transition-colors ${
              physicsEnabled
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-amber-50 text-amber-700 border border-amber-200'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${physicsEnabled ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
            <span>{physicsEnabled ? 'Live' : 'Paused'}</span>
          </button>
        </div>
      </div>

      {/* Main Canvas + Side Panel Layout */}
      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* Network Canvas Container */}
        <div className="flex-1 bg-slate-950 rounded-[2.5rem] border border-slate-900 shadow-2xl relative overflow-hidden h-[620px] lg:h-[720px]">
          
          {/* Architectural Blueprint Micro-Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.18] pointer-events-none bg-[linear-gradient(to_right,#6366f130_1px,transparent_1px),linear-gradient(to_bottom,#6366f130_1px,transparent_1px)] bg-[size:28px_28px]"></div>

          {/* Corner Registration Brackets */}
          <div className="absolute top-3.5 left-4 text-slate-500 font-mono text-[10px] select-none pointer-events-none z-10 hidden sm:block">
            ┌ TOPOLOGY_GRAPH // 17.3850° N, 78.4867° E
          </div>
          <div className="absolute top-3.5 right-4 text-slate-500 font-mono text-[10px] select-none pointer-events-none z-10 hidden sm:block">
            LIVE_PHYSICS: FORCE_ATLAS_2 ┐
          </div>
          <div className="absolute bottom-3.5 left-4 text-slate-500 font-mono text-[10px] select-none pointer-events-none z-10 hidden sm:block">
            └ CLUSTER: 6 DOMAINS
          </div>
          <div className="absolute bottom-3.5 right-4 text-slate-500 font-mono text-[10px] select-none pointer-events-none z-10 hidden sm:block">
            DOUBLE_CLICK_NODE: OPEN_REPO ┘
          </div>

          {/* Network HUD Overlay (Top-Left) */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none flex flex-col gap-2">
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl px-4 py-2 shadow-xl flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Total Nodes</p>
                <p className="text-sm font-black text-white">{repos?.length ? repos.filter(r => !r.fork).length + 7 : '...'}</p>
              </div>
            </div>
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl px-4 py-2 shadow-md flex items-center gap-3">
              <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Simulation</p>
                <p className="text-xs font-mono font-bold text-slate-200">{graphStable ? 'Stabilized' : 'Balancing forces...'}</p>
              </div>
            </div>
          </div>

          {/* Floating Handwritten Tip (Top-Right) */}
          <div className="absolute top-4 right-4 z-10 pointer-events-none hidden sm:block">
            <HandwrittenNote rotation={3} color="purple" arrowDirection="curved-down-left" arrowPosition="right">
              Drag or double-click nodes
            </HandwrittenNote>
          </div>

          {/* The Canvas Itself */}
          <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing outline-none"></div>

          {/* Interactive Legend (Bottom) */}
          <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
            <div className="bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl p-3 shadow-2xl flex flex-wrap items-center justify-center gap-3 sm:gap-6 mx-auto w-fit">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border-2 border-[#10b981]"></span>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Repository</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-slate-900 border-[2.5px] border-[#f43f5e]"></span>
                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">Featured Repo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-2 rounded bg-indigo-600 border border-indigo-400"></span>
                <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider">Domain Cluster</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border-2 border-indigo-500 bg-slate-950"></span>
                <span className="text-[10px] font-bold text-slate-200 uppercase tracking-wider">Root Nexus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Side Panel */}
        <div className={`w-full lg:w-96 bg-slate-900 border border-slate-800 rounded-[2.5rem] p-6 sm:p-7 shadow-2xl flex flex-col h-[480px] lg:h-[720px] transition-all duration-300 ${selectedNodeData ? 'ring-2 ring-indigo-500/30' : ''}`}>
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-800">
            <h3 className="text-white font-bold tracking-wide flex items-center gap-2 text-sm sm:text-base">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Node Intelligence
            </h3>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Live Telemetry
            </span>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 flex flex-col">
            {selectedNodeData ? (
              renderDetails()
            ) : (
              <div className="m-auto text-center py-6 px-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-800/60 flex items-center justify-center mx-auto mb-4 border border-slate-700/80 shadow-inner">
                  <EngineeringDoodle type="connected-nodes" className="w-9 h-9 text-indigo-400/80" />
                </div>
                <h4 className="text-slate-200 font-bold mb-1.5 text-base">Select Any Node</h4>
                <div className="mb-3">
                  <HandwrittenNote rotation={-2} color="blue" className="text-xs">
                    Explore connections &amp; code
                  </HandwrittenNote>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto mb-6">
                  Click on the central engineer node, domain clusters, or project nodes to inspect live telemetry, tech stack, and GitHub links.
                </p>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800 text-[11px] font-mono text-slate-400 text-left space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400">▸</span> Double-click repo to open URL
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400">▸</span> Drag nodes to reshape graph
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400">▸</span> Scroll wheel to zoom in/out
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

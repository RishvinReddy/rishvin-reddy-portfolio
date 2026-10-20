/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import {
  HandwrittenNote,
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
    bg: '#eff6ff',
    border: '#3b82f6',
    highlightBg: '#dbeafe',
    highlightBorder: '#1d4ed8',
    glow: 'rgba(59, 130, 246, 0.25)',
    textColor: '#1e40af',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
    accentHex: '#2563eb',
  },
  'IoT': {
    bg: '#f0fdf4',
    border: '#10b981',
    highlightBg: '#dcfce7',
    highlightBorder: '#047857',
    glow: 'rgba(16, 185, 129, 0.25)',
    textColor: '#065f46',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    accentHex: '#059669',
  },
  'Security': {
    bg: '#fff1f2',
    border: '#f43f5e',
    highlightBg: '#ffe4e6',
    highlightBorder: '#be123c',
    glow: 'rgba(244, 63, 94, 0.25)',
    textColor: '#9f1239',
    badgeClass: 'bg-rose-50 text-rose-700 border-rose-200',
    accentHex: '#e11d48',
  },
  'Web Dev': {
    bg: '#eef2ff',
    border: '#6366f1',
    highlightBg: '#e0e7ff',
    highlightBorder: '#4338ca',
    glow: 'rgba(99, 102, 241, 0.25)',
    textColor: '#3730a3',
    badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    accentHex: '#4f46e5',
  },
  'Database': {
    bg: '#ecfeff',
    border: '#06b6d4',
    highlightBg: '#cffafe',
    highlightBorder: '#0e7490',
    glow: 'rgba(6, 182, 212, 0.25)',
    textColor: '#155e75',
    badgeClass: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    accentHex: '#0891b2',
  },
  'Software': {
    bg: '#faf5ff',
    border: '#8b5cf6',
    highlightBg: '#f3e8ff',
    highlightBorder: '#6d28d9',
    glow: 'rgba(139, 92, 246, 0.25)',
    textColor: '#581c87',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
    accentHex: '#7c3aed',
  },
};

export default function KnowledgeGraph({ repos }: { repos: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedNodeData, setSelectedNodeData] = useState<any>(null);
  const [graphStable, setGraphStable] = useState(false);
  const [physicsEnabled, setPhysicsEnabled] = useState(true);
  const [activeDomainFilter, setActiveDomainFilter] = useState<string>('All');
  const [autoOpenOnClick, setAutoOpenOnClick] = useState<boolean>(true);
  const [toastMessage, setToastMessage] = useState<{ text: string; url?: string } | null>(null);
  const networkRef = useRef<any>(null);
  const graphDataRef = useRef<{ nodes: DataSet<any>; edges: DataSet<any> } | null>(null);
  const categoryIdsRef = useRef<Map<string, string>>(new Map());
  const autoOpenOnClickRef = useRef(autoOpenOnClick);
  useEffect(() => {
    autoOpenOnClickRef.current = autoOpenOnClick;
  }, [autoOpenOnClick]);
  const handleFilterDomainRef = useRef<(domain: string) => void>(() => {});

  // Helper to show transient notification banner
  const triggerToast = useCallback((text: string, url?: string) => {
    setToastMessage({ text, url });
    setTimeout(() => {
      setToastMessage(prev => (prev?.text === text ? null : prev));
    }, 4000);
  }, []);

  const openUrl = useCallback((url: string, name?: string) => {
    try {
      const newTab = window.open(url, '_blank', 'noopener,noreferrer');
      if (newTab) {
        newTab.focus();
        triggerToast(`Opened ${name || 'repository'} in a new tab ↗`, url);
      } else {
        // Fallback if blocked by strict browser popup rules
        triggerToast(`Popup blocked for ${name || 'repo'} — Click here to open ↗`, url);
      }
    } catch {
      triggerToast(`Click here to open ${name || 'repository'} ↗`, url);
    }
  }, [triggerToast]);

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

    // Center Root Node (Rishvin Reddy) - Elegant Light Mode
    nodesArray.push({
      id: 'root_user',
      label: 'Rishvin Reddy',
      title: '<div class="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xl text-slate-800"><span class="font-bold text-slate-900 text-sm">Erolla Rishvin Reddy</span><br><span class="text-indigo-600 text-xs font-semibold">Architect & Founder</span><br><span class="text-[11px] text-slate-500 mt-1 inline-block">Single-click to open GitHub profile ↗</span></div>',
      shape: 'circularImage',
      image: 'https://github.com/RishvinReddy.png',
      size: 42,
      font: { size: 14, color: '#0f172a', face: 'Inter, sans-serif', bold: true, vadjust: -14 },
      color: {
        border: '#4f46e5',
        background: '#ffffff',
        highlight: { border: '#7c3aed', background: '#eef2ff' },
        hover: { border: '#4338ca', background: '#ffffff' }
      },
      borderWidth: 4,
      shadow: { enabled: true, color: 'rgba(79, 70, 229, 0.28)', size: 28, x: 0, y: 3 },
      isRoot: true,
    });

    const detectProjectType = (repo: any) => {
      const d = repo.description ? repo.description.toLowerCase() : '';
      const t = repo.topics || [];
      const l = repo.language ? repo.language.toLowerCase() : '';
      const hasTopic = (topic: string) => t.includes(topic);
      
      if (hasTopic('iot') || hasTopic('esp32') || hasTopic('arduino') || l === 'c++' || l === 'c') {
        return { name: 'IoT', class: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      }
      if (hasTopic('security') || d.includes('security') || d.includes('cyber') || d.includes('packet')) {
        return { name: 'Security', class: 'bg-rose-50 text-rose-700 border-rose-200' };
      }
      if (hasTopic('machine-learning') || hasTopic('ai') || d.includes('ai ') || l === 'jupyter notebook') {
        return { name: 'AI & ML', class: 'bg-blue-50 text-blue-700 border-blue-200' };
      }
      if (hasTopic('database') || hasTopic('sql') || hasTopic('mongodb')) {
        return { name: 'Database', class: 'bg-cyan-50 text-cyan-700 border-cyan-200' };
      }
      if (l === 'typescript' || l === 'javascript' || hasTopic('react') || hasTopic('nextjs') || hasTopic('web')) {
        return { name: 'Web Dev', class: 'bg-indigo-50 text-indigo-700 border-indigo-200' };
      }
      return { name: 'Software', class: 'bg-purple-50 text-purple-700 border-purple-200' };
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

      // Crisp Light Mode Repository Node
      nodesArray.push({
        id: repoNodeId,
        label: repoName.replace(/-/g, ' '),
        title: `<div class="p-2.5 bg-white border border-slate-200/90 rounded-xl shadow-xl text-slate-800"><span class="font-bold text-slate-900 text-sm">${repoName.replace(/-/g, ' ')}</span><br><span class="text-xs font-mono font-bold" style="color: ${domainStyle.accentHex}">${repo.language || 'Code'}</span> · <span class="text-xs text-amber-600 font-bold">⭐ ${repo.stargazers_count || 0}</span><br><span class="text-[11px] text-indigo-600 font-medium mt-1 inline-block">Single-click to open on GitHub ↗</span></div>`,
        shape: isImportant ? 'hexagon' : 'dot',
        size: isImportant ? 18 : 12,
        font: {
          size: isImportant ? 12 : 10,
          color: isImportant ? '#0f172a' : '#334155',
          face: 'Inter, sans-serif',
          vadjust: -6,
          bold: isImportant
        },
        color: {
          background: isImportant ? '#fff1f2' : '#ffffff',
          border: isImportant ? '#f43f5e' : domainStyle.border,
          highlight: { background: domainStyle.bg, border: isImportant ? '#be123c' : domainStyle.highlightBorder },
          hover: { background: domainStyle.bg, border: domainStyle.highlightBorder }
        },
        shadow: isImportant 
          ? { enabled: true, color: 'rgba(244, 63, 94, 0.28)', size: 14, x: 0, y: 2 } 
          : { enabled: true, color: 'rgba(0, 0, 0, 0.05)', size: 6, x: 0, y: 1 },
        borderWidth: isImportant ? 3 : 2,
        isDomain: false,
        domainName: typeInfo.name,
        repoData: repo
      });

      // Smooth Edge to Category
      edgesArray.push({
        from: catObj.id,
        to: repoNodeId,
        color: { 
          color: 'rgba(203, 213, 225, 0.75)', 
          hover: domainStyle.border, 
          highlight: domainStyle.accentHex 
        },
        width: isImportant ? 2 : 1.2,
        smooth: { type: 'continuous', roundness: 0.5 },
        hoverWidth: 2.2
      });
    });

    categoriesMap.forEach((catObj) => {
      if (catObj.connections > 0) {
        const style = DOMAIN_STYLES[catObj.label] || DOMAIN_STYLES['Software'];

        // Root to Domain Connector Edge
        edgesArray.push({
          from: 'root_user',
          to: catObj.id,
          color: { 
            color: style.accentHex + '55', 
            hover: style.accentHex, 
            highlight: style.highlightBorder 
          },
          width: 3,
          length: 190,
          dashes: [6, 6],
          smooth: { type: 'curvedCW', roundness: 0.25 }
        });

        // Crisp Light-Themed Domain Hub Box
        nodesArray.push({
          id: catObj.id,
          label: catObj.label.toUpperCase(),
          title: `<div class="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xl text-slate-800"><span class="font-bold text-slate-900 text-sm">${catObj.label} Domain</span><br><span class="text-xs text-slate-500 font-mono">${catObj.connections} Repositories Connected</span><br><span class="text-[11px] text-indigo-600 font-medium mt-1 inline-block">Click to focus cluster</span></div>`,
          shape: 'box',
          margin: 12,
          color: {
            background: style.bg,
            border: style.border,
            highlight: { background: style.highlightBg, border: style.highlightBorder },
            hover: { background: style.highlightBg, border: style.highlightBorder }
          },
          borderWidth: 2,
          font: {
            size: 12,
            color: style.textColor,
            face: 'Inter, sans-serif',
            bold: true,
          },
          shadow: { enabled: true, color: style.glow, size: 20, x: 0, y: 3 },
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

    // SINGLE-CLICK HANDLER: Instantly selects node AND opens repo URL if it's a repository node
    network.on('click', function (params: any) {
      if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        const node: any = graphData.nodes.get(nodeId);
        if (!node) return;

        setSelectedNodeData(node);

        // If it's a repo node and auto-open is enabled, open in new tab!
        if (node.repoData && node.repoData.html_url) {
          if (autoOpenOnClickRef.current) {
            openUrl(node.repoData.html_url, node.repoData.name);
          }
        } else if (node.isRoot) {
          if (autoOpenOnClickRef.current) {
            openUrl('https://github.com/RishvinReddy', 'Rishvin Reddy Profile');
          }
        } else if (node.isDomain && node.domainName) {
          // Focus domain cluster smoothly
          handleFilterDomainRef.current(node.domainName);
        }
      }
    });

    // Fallback DOUBLE-CLICK handler (always opens repo URL unconditionally)
    network.on('doubleClick', function (params: any) {
      if (params.nodes.length > 0) {
        const node: any = graphData.nodes.get(params.nodes[0]);
        if (node && node.repoData && node.repoData.html_url) {
          openUrl(node.repoData.html_url, node.repoData.name);
        } else if (node && node.isRoot) {
          openUrl('https://github.com/RishvinReddy', 'Rishvin Reddy Profile');
        }
      }
    });

    network.on('deselectNode', function () {
      setSelectedNodeData(null);
    });

    return () => {
      network.destroy();
    };
  }, [repos, openUrl]);

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

  useEffect(() => {
    handleFilterDomainRef.current = handleFilterDomain;
  }, [handleFilterDomain]);

  const renderDetails = () => {
    if (!selectedNodeData) return null;

    // 1. Root Node (Rishvin)
    if (selectedNodeData.isRoot) {
      return (
        <div className="flex flex-col h-full animate-fade-in">
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-indigo-50 text-indigo-700 border border-indigo-200 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
              Core System Node
            </span>
            <h4 className="text-2xl font-black text-slate-900 font-display">Erolla Rishvin Reddy</h4>
            <p className="text-xs text-indigo-600 font-mono mt-0.5 font-bold">Software Engineer · IoT Patent Holder</p>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
            Central repository nexus orchestrating full-stack web architectures, IoT sensor firmware, cybersecurity pipelines, and AI systems.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/90 shadow-xs">
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Total Repos</div>
              <div className="text-xl font-black text-slate-900">{repos?.length || 0}</div>
            </div>
            <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 shadow-xs">
              <div className="text-[10px] text-indigo-700 font-bold uppercase tracking-wider mb-1">Ecosystem Hubs</div>
              <div className="text-xl font-black text-indigo-700">6 Domains</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <EngineeringDoodle type="connected-nodes" className="w-5 h-5 text-indigo-600" />
              <span className="text-xs font-mono text-slate-700 font-medium">Topology: ForceAtlas2</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Active Link
            </span>
          </div>

          <a
            href="https://github.com/RishvinReddy"
            target="_blank"
            rel="noreferrer"
            className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-indigo-500/25 transition-all active:scale-95"
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
              <span className="text-xs font-mono text-slate-500 font-bold">
                {selectedNodeData.domainData.connections} Connected
              </span>
            </div>
            <h4 className="text-2xl font-black text-slate-900 font-display flex items-center gap-2">
              <span>{selectedNodeData.domainData.label}</span>
            </h4>
          </div>

          <p className="text-sm text-slate-600 font-medium leading-relaxed mb-5">
            This technical cluster links <span className="font-bold text-slate-900">{selectedNodeData.domainData.connections} production &amp; research repositories</span> sharing specialized tools, protocols, and architectural paradigms.
          </p>

          <div className="mb-5 flex-1 overflow-y-auto pr-1 custom-scrollbar">
            <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Clustered Repositories</span>
              <span className="text-[10px] text-indigo-600 font-semibold">Single-click to open ↗</span>
            </div>
            <div className="space-y-2">
              {repoList.slice(0, 8).map((r: any, idx: number) => (
                <a
                  key={idx}
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-indigo-300 shadow-xs hover:shadow-sm transition-all group"
                >
                  <span className="text-xs font-semibold text-slate-800 group-hover:text-indigo-600 truncate max-w-[210px]">
                    {r.name}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-amber-600 group-hover:text-amber-700 shrink-0">
                    ⭐ {r.stargazers_count || 0}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleFilterDomain(selectedNodeData.domainData.label)}
            className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all shadow-md active:scale-95"
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
      const langColor = r.language === 'Python' ? 'text-blue-600' : (r.language === 'JavaScript' || r.language === 'TypeScript' ? 'text-amber-600' : (r.language === 'C++' ? 'text-rose-600' : 'text-emerald-600'));
      const desc = r.description ? r.description : 'Production-grade software engineering repository built by Erolla Rishvin Reddy.';
      
      return (
        <div className="flex flex-col h-full animate-fade-in">
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${domainStyle.badgeClass}`}>
                {selectedNodeData.domainName || 'Repository'}
              </span>
              <span className="text-[10px] font-mono text-slate-500 font-semibold bg-slate-100 px-2 py-0.5 rounded">
                {r.visibility || 'Public'}
              </span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 break-words leading-tight">
              {r.name}
            </h4>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3 font-medium">
            {desc}
          </p>

          <div className="grid grid-cols-2 gap-2.5 mb-4">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/90 shadow-xs">
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Primary Language</div>
              <div className={`text-sm font-bold font-mono ${langColor}`}>{r.language || 'Code'}</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/90 flex justify-around items-center shadow-xs">
              <div className="text-center">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Stars</div>
                <div className="text-sm font-bold text-amber-600">⭐ {r.stargazers_count}</div>
              </div>
              <div className="h-6 w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Forks</div>
                <div className="text-sm font-bold text-slate-700">🍴 {r.forks_count}</div>
              </div>
            </div>
          </div>

          {/* Topics Pills */}
          {r.topics && r.topics.length > 0 && (
            <div className="mb-4">
              <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1.5">Topics &amp; Stack</div>
              <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto pr-1 custom-scrollbar">
                {r.topics.slice(0, 6).map((topic: string, i: number) => (
                  <span key={i} className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
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
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-indigo-500/25 transition-all active:scale-95 group"
            >
              Open on GitHub
              <svg className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
            <a
              href="/ide"
              className="flex items-center justify-center gap-2 w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 rounded-xl font-semibold text-xs border border-slate-200 transition-colors"
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
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-2.5 sm:px-4 shadow-sm">
        {/* Domain Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
          <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mr-1 hidden md:inline-block">
            Filter:
          </span>
          {domainTabs.map((tab) => {
            const isActive = activeDomainFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => handleFilterDomain(tab)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Action Controls: Click Mode Toggle, Zoom, Fit, Physics */}
        <div className="flex items-center justify-end gap-1.5 shrink-0 flex-wrap">
          {/* Single-Click Auto-Open Toggle */}
          <button
            onClick={() => setAutoOpenOnClick(prev => !prev)}
            title={autoOpenOnClick ? "Single-click opens GitHub repo directly" : "Single-click only selects node"}
            className={`px-2.5 h-8 rounded-lg font-mono text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              autoOpenOnClick
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-xs'
                : 'bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${autoOpenOnClick ? 'bg-indigo-600 animate-pulse' : 'bg-slate-400'}`} />
            <span>1-Click Open: {autoOpenOnClick ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={handleZoomIn}
            title="Zoom In"
            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-sm transition-colors cursor-pointer"
          >
            +
          </button>
          <button
            onClick={handleZoomOut}
            title="Zoom Out"
            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-sm transition-colors cursor-pointer"
          >
            -
          </button>
          <button
            onClick={handleFit}
            title="Recenter / Fit All"
            className="px-2.5 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>Fit</span>
          </button>
          <button
            onClick={handleTogglePhysics}
            title={physicsEnabled ? 'Pause Physics' : 'Resume Physics'}
            className={`px-2.5 h-8 rounded-lg font-mono text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer ${
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
        {/* Network Canvas Container - Pristine Modern Light Theme */}
        <div className="flex-1 bg-[#f8fafc] rounded-[2.5rem] border border-slate-200/90 shadow-lg relative overflow-hidden h-[620px] lg:h-[720px]">
          
          {/* Architectural Blueprint Micro-Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.25] pointer-events-none bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:28px_28px]"></div>

          {/* Corner Registration Brackets */}
          <div className="absolute top-3.5 left-4 text-slate-400 font-mono text-[10px] select-none pointer-events-none z-10 hidden sm:block">
            ┌ TOPOLOGY_GRAPH // 17.3850° N, 78.4867° E
          </div>
          <div className="absolute top-3.5 right-4 text-slate-400 font-mono text-[10px] select-none pointer-events-none z-10 hidden sm:block">
            LIVE_PHYSICS: FORCE_ATLAS_2 ┐
          </div>
          <div className="absolute bottom-3.5 left-4 text-slate-400 font-mono text-[10px] select-none pointer-events-none z-10 hidden sm:block">
            └ CLUSTER: 6 DOMAINS
          </div>
          <div className="absolute bottom-3.5 right-4 text-slate-400 font-mono text-[10px] select-none pointer-events-none z-10 hidden sm:block">
            CLICK_NODE: OPEN_REPO ↗ ┘
          </div>

          {/* Network HUD Overlay (Top-Left) */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none flex flex-col gap-2">
            <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2 shadow-sm flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Total Nodes</p>
                <p className="text-sm font-black text-slate-900">{repos?.length ? repos.filter(r => !r.fork).length + 7 : '...'}</p>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2 shadow-sm flex items-center gap-3">
              <svg className="w-3.5 h-3.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Simulation</p>
                <p className="text-xs font-mono font-bold text-slate-800">{graphStable ? 'Stabilized' : 'Balancing forces...'}</p>
              </div>
            </div>
          </div>

          {/* Floating Notification Toast */}
          {toastMessage && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 animate-fade-in pointer-events-auto">
              <div className="bg-white/95 backdrop-blur-md border border-indigo-200 text-indigo-950 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                {toastMessage.url ? (
                  <a href={toastMessage.url} target="_blank" rel="noreferrer" className="underline hover:text-indigo-600">
                    {toastMessage.text}
                  </a>
                ) : (
                  <span>{toastMessage.text}</span>
                )}
              </div>
            </div>
          )}

          {/* Floating Handwritten Tip (Top-Right) */}
          <div className="absolute top-4 right-4 z-10 pointer-events-none hidden sm:block">
            <HandwrittenNote rotation={3} color="purple" arrowDirection="curved-down-left" arrowPosition="right">
              Click any node to open repository
            </HandwrittenNote>
          </div>

          {/* The Canvas Itself */}
          <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing outline-none"></div>

          {/* Interactive Legend (Bottom) */}
          <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
            <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg flex flex-wrap items-center justify-center gap-3 sm:gap-6 mx-auto w-fit">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white border-2 border-[#10b981]"></span>
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Repository</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-50 border-[2.5px] border-[#f43f5e]"></span>
                <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider">Featured Repo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-2 rounded bg-indigo-50 border border-indigo-400"></span>
                <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider">Domain Cluster</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border-2 border-indigo-600 bg-white"></span>
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Root Nexus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Side Panel - Light Themed Card */}
        <div className={`w-full lg:w-96 bg-white border border-slate-200/90 rounded-[2.5rem] p-6 sm:p-7 shadow-lg flex flex-col h-[480px] lg:h-[720px] transition-all duration-300 ${selectedNodeData ? 'ring-2 ring-indigo-500/25' : ''}`}>
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
            <h3 className="text-slate-900 font-bold tracking-wide flex items-center gap-2 text-sm sm:text-base">
              <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Node Intelligence
            </h3>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Live Telemetry
            </span>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 flex flex-col">
            {selectedNodeData ? (
              renderDetails()
            ) : (
              <div className="m-auto text-center py-6 px-4">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50/80 flex items-center justify-center mx-auto mb-4 border border-indigo-100 shadow-xs">
                  <EngineeringDoodle type="connected-nodes" className="w-9 h-9 text-indigo-600" />
                </div>
                <h4 className="text-slate-900 font-bold mb-1.5 text-base">Select Any Node</h4>
                <div className="mb-3">
                  <HandwrittenNote rotation={-2} color="blue" className="text-xs">
                    Single-click to open &amp; inspect
                  </HandwrittenNote>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto mb-6 font-medium">
                  Click on the central engineer node, domain clusters, or project nodes to inspect live telemetry, tech stack, and directly launch GitHub repos.
                </p>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] font-mono text-slate-600 text-left space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600 font-bold">▸</span> Single-click repo to open URL
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600 font-bold">▸</span> Click domain to focus camera
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600 font-bold">▸</span> Drag nodes to reshape graph
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600 font-bold">▸</span> Scroll wheel to zoom in/out
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

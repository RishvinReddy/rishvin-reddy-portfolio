/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';

export default function KnowledgeGraph({ repos }: { repos: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedNodeData, setSelectedNodeData] = useState<any>(null);
  const [graphStable, setGraphStable] = useState(false);
  const networkRef = useRef<any>(null);
  
  useEffect(() => {
    if (!containerRef.current || !repos) return;

    const categoriesMap = new Map();

    const domainIcons: Record<string, string> = {
      'AI & ML': '\uf5dc',
      'IoT': '\uf2db',
      'Security': '\uf132',
      'Web Dev': '\uf121',
      'Database': '\uf1c0',
      'Software': '\uf1b3'
    };

    ['AI & ML', 'IoT', 'Security', 'Web Dev', 'Database', 'Software'].forEach((name, idx) => {
      categoriesMap.set(name, { id: `cat_${idx}`, label: name, isDomain: true, connections: 0 });
    });

    const nodesArray: any[] = [];
    const edgesArray: any[] = [];
    let nodeIdCounter = 100;

    nodesArray.push({
      id: 'root_user',
      label: 'Rishvin',
      title: '<div class="p-2"><span class="font-bold text-white text-sm">Rishvin Reddy</span><br><span class="text-primary text-xs">Software Engineer</span></div>',
      shape: 'circularImage',
      image: 'https://github.com/RishvinReddy.png',
      size: 40,
      font: { size: 16, color: '#f8fafc', face: 'Inter, sans-serif', bold: true, vadjust: -12 },
      color: { border: '#6366f1', background: '#0f172a', highlight: { border: '#818cf8' } },
      borderWidth: 4,
      shadow: { enabled: true, color: 'rgba(99, 102, 241, 0.6)', size: 30, x: 0, y: 0 }
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
        catObj = { id: `cat_${categoriesMap.size}`, label: typeInfo.name, isDomain: true, connections: 0 };
        categoriesMap.set(typeInfo.name, catObj);
      }
      catObj.connections++;

      const repoName = repo.name || 'Unknown Repo';
      nodesArray.push({
        id: repoNodeId,
        label: repoName.replace(/-/g, ' '),
        title: `<div class="p-2 bg-slate-900 rounded"><span class="font-bold text-white text-sm">${repoName.replace(/-/g, ' ')}</span><br><span class="text-emerald-400 text-[11px] font-mono">${repo.language || 'Code'}</span></div>`,
        shape: isImportant ? 'hexagon' : 'dot',
        size: isImportant ? 16 : 10,
        font: {
          size: isImportant ? 12 : 10,
          color: isImportant ? '#f1f5f9' : '#94a3b8',
          face: 'Inter, sans-serif',
          vadjust: -5,
          bold: isImportant
        },
        color: {
          background: '#1e293b',
          border: isImportant ? '#f43f5e' : '#10b981',
          highlight: { background: '#334155', border: '#fb7185' },
          hover: { background: '#334155', border: '#34d399' }
        },
        shadow: isImportant ? { enabled: true, color: 'rgba(244, 63, 94, 0.4)', size: 15, x: 0, y: 0 } : false,
        borderWidth: isImportant ? 3 : 2,
        isDomain: false,
        repoData: repo
      });

      edgesArray.push({
        from: catObj.id,
        to: repoNodeId,
        color: { color: 'rgba(51, 65, 85, 0.6)', hover: '#6366f1', highlight: '#f43f5e' },
        width: isImportant ? 2 : 1,
        smooth: { type: 'continuous', roundness: 0.5 },
        hoverWidth: 1.5
      });
    });

    categoriesMap.forEach((catObj) => {
      if (catObj.connections > 0) {
        edgesArray.push({
          from: 'root_user',
          to: catObj.id,
          color: { color: 'rgba(99, 102, 241, 0.5)' },
          width: 3,
          length: 180,
          dashes: [5, 5],
          smooth: { type: 'curvedCW', roundness: 0.2 }
        });

        nodesArray.push({
          id: catObj.id,
          label: catObj.label.toUpperCase(),
          title: `<div class="p-2 bg-slate-900 rounded"><span class="font-bold text-white text-sm">${catObj.label} Domain</span><br><span class="text-slate-400 text-xs">${catObj.connections} Repositories</span></div>`,
          shape: 'icon',
          icon: {
            face: '"Font Awesome 6 Free", "FontAwesome", sans-serif',
            code: domainIcons[catObj.label] || '\uf0c2',
            size: 45,
            color: '#38bdf8',
            weight: '900'
          },
          font: { size: 14, color: '#e2e8f0', face: 'Inter, sans-serif', bold: true, vadjust: -10 },
          shadow: { enabled: true, color: 'rgba(56, 189, 248, 0.4)', size: 20, x: 0, y: 0 },
          isDomain: true,
          domainData: catObj
        });
      }
    });

    const graphData = {
      nodes: new DataSet(nodesArray),
      edges: new DataSet(edgesArray)
    };

    const graphOptions = {
      nodes: { chosen: true },
      edges: { chosen: true },
      physics: {
        solver: 'forceAtlas2Based',
        forceAtlas2Based: {
          gravitationalConstant: -100,
          centralGravity: 0.01,
          springLength: 100,
          springConstant: 0.08,
          avoidOverlap: 0.8
        },
        maxVelocity: 50,
        minVelocity: 0.1,
        stabilization: { iterations: 150, updateInterval: 25 }
      },
      interaction: {
        hover: true,
        zoomView: true,
        dragView: true,
        tooltipDelay: 50,
        hideEdgesOnDrag: true
      },
      background: { color: 'transparent' }
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

  const renderDetails = () => {
    if (!selectedNodeData) return null;
    
    if (selectedNodeData.isDomain) {
      return (
        <>
          <div className="mb-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400 uppercase tracking-wider mb-2">Domain Hub</span>
            <h4 className="text-2xl font-black text-white font-display">{selectedNodeData.domainData.label}</h4>
          </div>
          <p className="text-sm text-slate-400 font-medium">This hub connects <span className="text-indigo-600 font-bold">{selectedNodeData.domainData.connections}</span> repositories sharing similar technologies and architectures.</p>
          <div className="mt-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
            <p className="text-xs text-slate-400 text-center">Double-click repositories to open them on GitHub.</p>
          </div>
        </>
      );
    } 
    
    if (selectedNodeData.repoData) {
      const r = selectedNodeData.repoData;
      const langColor = r.language === 'Python' ? 'text-blue-500' : (r.language === 'JavaScript' || r.language === 'TypeScript' ? 'text-yellow-500' : 'text-indigo-500');
      const desc = r.description ? r.description : 'No description provided for this repository.';
      
      return (
        <>
          <div className="mb-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-900/50 text-indigo-400 uppercase tracking-wider mb-2">Repository</span>
            <h4 className="text-xl font-bold text-white break-words">{r.name}</h4>
          </div>
          <p className="text-sm text-slate-400 mb-4">{desc}</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Language</div>
              <div className={`text-sm font-semibold ${langColor}`}>{r.language || 'N/A'}</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex justify-around">
              <div className="text-center">
                <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Stars</div>
                <div className="text-sm font-semibold text-slate-200">⭐ {r.stargazers_count}</div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Forks</div>
                <div className="text-sm font-semibold text-slate-200">🍴 {r.forks_count}</div>
              </div>
            </div>
          </div>
          <a href={r.html_url} target="_blank" rel="noreferrer" className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 hover:shadow-lg transition-all active:scale-95 group">
            View on GitHub
            <svg className="w-4 h-4 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 relative">
      {/* Network Canvas Container */}
      <div className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-md relative overflow-hidden h-[600px] lg:h-[700px]">
        {/* Network HUD Overlay */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none flex flex-col gap-2">
          <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Nodes</p>
              <p className="text-sm font-black text-white">{repos?.length ? repos.filter(r => !r.fork).length + 1 : '...'}</p>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl px-4 py-2.5 shadow-md flex items-center gap-3">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Physics Engine</p>
              <p className="text-sm font-black text-slate-800">{graphStable ? 'Stable' : 'Computing...'}</p>
            </div>
          </div>
        </div>

        {/* The canvas itself */}
        <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing outline-none"></div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
          <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-2xl flex flex-wrap items-center justify-center gap-4 sm:gap-6 mx-auto w-fit">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-800 border-2 border-[#10b981]"></span>
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Project Node</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-slate-800 border-[3px] border-[#f43f5e]"></span>
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Featured Repo</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Tech Domain</span>
            </div>
          </div>
        </div>
      </div>

      {/* Details Side Panel */}
      <div className={`w-full lg:w-96 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col h-[400px] lg:h-[700px] transition-all duration-300 ${selectedNodeData ? 'opacity-100 scale-100' : 'opacity-50 grayscale'}`}>
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
          <h3 className="text-white font-bold tracking-wide flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Node Intelligence
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Live</span>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 flex flex-col">
          {selectedNodeData ? renderDetails() : (
            <div className="m-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center mx-auto mb-4 border border-slate-700">
                <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
              </div>
              <h4 className="text-slate-300 font-bold mb-2">Select a Node</h4>
              <p className="text-sm text-slate-500">Click on any node or repository in the knowledge graph to reveal detailed metrics and connections.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

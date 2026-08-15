"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { processUserMessage, Context, ChatMessage } from '../ai/engine';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

interface TerminalLog {
  id: string;
  text: React.ReactNode;
}

interface FileTreeNode {
  path: string;
  mode: string;
  type: 'blob' | 'tree';
  sha: string;
  size?: number;
  url: string;
}

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayedText('');
    const timer = setInterval(() => {
      setDisplayedText(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(timer);
    }, 10);
    return () => clearInterval(timer);
  }, [text]);

  // Basic markdown parser for chat bubbles
  const parts = displayedText.split(/```([\s\S]*?)```/g);

  return (
    <div className="leading-relaxed whitespace-pre-wrap break-words">
      {parts.map((part, i) => {
        if (i % 2 === 1) {
          // Code block
          return (
            <pre key={i} className="bg-slate-800 text-slate-100 p-3 rounded-lg text-xs font-mono overflow-auto my-2 border border-slate-700 shadow-inner">
              <code>{part.trim()}</code>
            </pre>
          );
        } else {
          // Text block with basic bold parsing
          const boldParts = part.split(/\\*\\*(.*?)\\*\\*/g);
          return (
            <span key={i}>
              {boldParts.map((bp, j) => j % 2 === 1 ? <strong key={j} className="text-slate-900 font-bold">{bp}</strong> : bp)}
            </span>
          );
        }
      })}
    </div>
  );
};

export default function IdeClient() {
  // === Explorer State ===
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [repoSearch, setRepoSearch] = useState('');

  // === File Explorer State ===
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);
  const [fileTree, setFileTree] = useState<FileTreeNode[]>([]);
  const [loadingTree, setLoadingTree] = useState(false);
  const [selectedFile, setSelectedFile] = useState<FileTreeNode | null>(null);
  const [fileContent, setFileContent] = useState<string>('');
  const [loadingFile, setLoadingFile] = useState(false);

  // === Terminal State ===
  const [terminalLogs, setTerminalLogs] = useState<TerminalLog[]>([
    { id: '1', text: <><span className="text-emerald-500">➜</span> <span className="text-blue-500 font-bold">portfolio</span> <span className="text-slate-400">git:(</span><span className="text-rose-500 font-bold">main</span><span className="text-slate-400">)</span> <span className="text-yellow-500">✗</span> node launch_engine.js</> },
    { id: '2', text: <span className="text-slate-500 opacity-80">Initializing AI Portfolio Engine v4.0...</span> },
    { id: '3', text: <span className="text-slate-500 opacity-80">Loading GitHub Context... <span className="text-emerald-500">OK</span></span> },
    { id: '4', text: <span className="text-emerald-600 font-semibold">Engine ready. Waiting for events. Type &apos;help&apos; for commands.</span> }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // === AI Chat State ===
  const [chatContext, setChatContext] = useState<Context>({});
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { 
      id: '1', 
      role: 'assistant', 
      text: "Hello! I'm Rishvin's Local AI Engine. I run entirely in your browser with zero external API calls. Ask me about projects, architectures, patent, process, or type `/help` for commands.",
      actions: [
        { label: 'Show Projects', action: '/projects' },
        { label: 'Show Tech Stack', action: '/skills' },
        { label: 'Contact Details', action: '/contact' },
        { label: 'What is your process?', action: 'What is your process?' }
      ]
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // === Fetch Repos ===
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const cached = sessionStorage.getItem('github_repos');
        if (cached) {
          setRepos(JSON.parse(cached));
          setLoadingRepos(false);
          return;
        }
        const res = await fetch('https://api.github.com/users/RishvinReddy/repos?sort=updated&per_page=100');
        if (res.ok) {
          const data = await res.json();
          setRepos(data);
          sessionStorage.setItem('github_repos', JSON.stringify(data));
        }
      } catch (e) {
        console.error("Failed to fetch repos", e);
      } finally {
        setLoadingRepos(false);
      }
    };
    fetchRepos();
  }, []);

  // === Fetch Tree & File ===
  const handleSelectRepo = async (repo: Repo) => {
    setSelectedRepo(repo);
    setLoadingTree(true);
    setFileTree([]);
    setSelectedFile(null);
    setFileContent('');
    try {
      const cacheKey = `github_tree_${repo.name}`;
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        setFileTree(JSON.parse(cached));
        setLoadingTree(false);
        return;
      }
      let res = await fetch(`https://api.github.com/repos/RishvinReddy/${repo.name}/git/trees/main?recursive=1`);
      if (res.status === 404) {
        res = await fetch(`https://api.github.com/repos/RishvinReddy/${repo.name}/git/trees/master?recursive=1`);
      }
      if (res.ok) {
        const data = await res.json();
        const tree = data.tree || [];
        setFileTree(tree);
        sessionStorage.setItem(cacheKey, JSON.stringify(tree));
      }
    } catch (e) {
      console.error("Failed to fetch tree", e);
    } finally {
      setLoadingTree(false);
    }
  };

  const handleSelectFile = async (node: FileTreeNode) => {
    if (node.type !== 'blob') return;
    setSelectedFile(node);
    setLoadingFile(true);
    setFileContent('');
    try {
      if (!selectedRepo) return;
      const cacheKey = `github_file_${selectedRepo.name}_${node.path}`;
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        setFileContent(cached);
        setLoadingFile(false);
        return;
      }
      let res = await fetch(`https://raw.githubusercontent.com/RishvinReddy/${selectedRepo.name}/main/${node.path}`);
      if (res.status === 404) {
        res = await fetch(`https://raw.githubusercontent.com/RishvinReddy/${selectedRepo.name}/master/${node.path}`);
      }
      if (res.ok) {
        const text = await res.text();
        setFileContent(text);
        sessionStorage.setItem(cacheKey, text);
      } else {
        setFileContent('// Failed to load file content or file is binary.');
      }
    } catch (e) {
      console.error("Failed to fetch file content", e);
      setFileContent('// Error loading file.');
    } finally {
      setLoadingFile(false);
    }
  };

  // === Terminal Logic ===
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim();
    const newLogId = Date.now().toString();
    
    // Add user command to logs
    const userLog = {
      id: `u-${newLogId}`,
      text: <><span className="text-emerald-500">➜</span> <span className="text-slate-800">{cmd}</span></>
    };

    let responseLog: TerminalLog | null = null;
    const lowerCmd = cmd.toLowerCase();

    if (lowerCmd === 'help') {
      responseLog = { id: `r-${newLogId}`, text: <span className="text-slate-600">Available commands: help, clear, whoami, echo [text], date</span> };
    } else if (lowerCmd === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else if (lowerCmd === 'whoami') {
      responseLog = { id: `r-${newLogId}`, text: <span className="text-slate-600">guest@rishvinlabs</span> };
    } else if (lowerCmd.startsWith('echo ')) {
      responseLog = { id: `r-${newLogId}`, text: <span className="text-slate-600">{cmd.substring(5)}</span> };
    } else if (lowerCmd === 'date') {
      responseLog = { id: `r-${newLogId}`, text: <span className="text-slate-600">{new Date().toString()}</span> };
    } else {
      responseLog = { id: `r-${newLogId}`, text: <span className="text-rose-500">command not found: {cmd}</span> };
    }

    setTerminalLogs(prev => [...prev, userLog, ...(responseLog ? [responseLog] : [])]);
    setTerminalInput('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLogs]);

  // === AI Chat Logic ===
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const query = chatInput.trim();
    const newMsgId = Date.now().toString();

    setChatMessages(prev => [...prev, { id: `u-${newMsgId}`, role: 'user', text: query }]);
    setChatInput('');

    // Process locally instantly with active IDE context
    const fullContext: Context = {
      ...chatContext,
      activeRepo: selectedRepo?.name,
      activeFile: selectedFile?.path,
      activeFileContent: fileContent
    };
    
    const result = processUserMessage(query, fullContext);
    
    if (result.newContext) {
      // Don't save IDE state into the persistent chatContext to avoid storing huge fileContents in state
      setChatContext(prev => ({ ...prev, activeProject: result.newContext?.activeProject }));
    }

    setChatMessages(prev => [...prev, { 
      id: `a-${Date.now()}`, 
      role: 'assistant', 
      text: result.response,
      actions: result.actions 
    }]);
  };

  const handlePromptClick = (prompt: string) => {
    setChatInput(prompt);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const filteredRepos = repos.filter(repo => repo.name.toLowerCase().includes(repoSearch.toLowerCase()));

  // Stats calculation
  const totalRepos = repos.length || '-';
  const languageCounts = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);
  const topLang = Object.entries(languageCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || '-';

  return (
    <div className="fixed inset-0 z-[100] bg-white flex overflow-hidden">
      {/* Activity Bar */}
      <aside className="w-12 bg-white border-r border-slate-200 flex flex-col items-center py-3 gap-2 shrink-0 transition-colors z-10 select-none">
        <button className="w-10 h-10 flex items-center justify-center text-primary bg-primary/10 rounded-xl transition-all relative group" title="Explorer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
          </svg>
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-md"></span>
        </button>

        <Link href="/" className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 rounded-xl transition-all group" title="Return to Static Site">
          <svg className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>

        <a href="https://github.com/RishvinReddy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all group" title="My GitHub">
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <div className="flex-1"></div>
      </aside>

      {/* File Explorer (Sidebar) */}
      <aside className="w-72 bg-slate-50/50 border-r border-slate-200 shrink-0 flex flex-col transition-colors z-10">
        <div className="h-10 flex items-center px-4 text-sm font-bold uppercase tracking-widest text-slate-500 shrink-0 select-none">
          Explorer
        </div>

        <div className="flex-1 overflow-auto custom-scrollbar flex flex-col relative z-10 bg-slate-50/50">
          <div className="p-3 border-b border-slate-200 sticky top-0 bg-slate-50 z-20">
            <div className="relative flex items-center bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
              <svg className="w-3.5 h-3.5 text-slate-400 absolute left-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                value={repoSearch}
                onChange={(e) => setRepoSearch(e.target.value)}
                className="w-full bg-transparent border-none py-1.5 pl-7 pr-2 text-sm focus:ring-0 text-slate-700 placeholder-slate-400 outline-none" 
                placeholder="Filter repositories..." 
              />
            </div>
          </div>

          <div className="w-full flex items-center gap-1.5 px-3 py-1.5 bg-slate-200/50 text-sm font-bold text-slate-700 cursor-pointer select-none sticky top-[45px] z-20 backdrop-blur-md">
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            GITHUB REPOSITORIES
          </div>

          <div className="flex-1 p-2 flex flex-col gap-1">
            {selectedRepo ? (
              <div className="flex flex-col h-full overflow-hidden">
                <button 
                  onClick={() => { setSelectedRepo(null); setFileTree([]); setSelectedFile(null); setFileContent(''); }}
                  className="flex items-center gap-2 px-2 py-2 mb-2 text-sm text-slate-500 hover:text-primary transition-colors bg-white rounded-md border border-slate-200 shadow-sm shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                  Back to Repositories
                </button>
                <div className="text-xs font-bold text-slate-800 mb-2 px-2 uppercase tracking-wide shrink-0">{selectedRepo.name}</div>
                
                {loadingTree ? (
                   <div className="text-sm text-slate-400 px-2 py-2 flex items-center gap-2 rounded-md animate-pulse">
                     <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                     <span className="truncate">Loading tree...</span>
                   </div>
                ) : (
                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 flex flex-col gap-1">
                    {fileTree.filter(n => n.type === 'blob').map(node => (
                      <button 
                        key={node.sha} 
                        onClick={() => handleSelectFile(node)}
                        className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm text-left transition-colors ${selectedFile?.sha === node.sha ? 'bg-primary/10 text-primary font-medium' : 'text-slate-600 hover:bg-slate-200/50 hover:text-slate-900'}`}
                        title={node.path}
                      >
                        <svg className="w-3.5 h-3.5 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        <span className="truncate">{node.path.split('/').pop()}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : loadingRepos ? (
              <div className="text-sm text-slate-400 px-2 py-2 flex items-center gap-2 rounded-md animate-pulse">
                <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="truncate">Fetching...</span>
              </div>
            ) : filteredRepos.length > 0 ? (
              filteredRepos.map(repo => (
                <button key={repo.id} onClick={() => handleSelectRepo(repo)} className="w-full text-left flex items-center gap-2 px-2 py-1.5 rounded text-sm text-slate-600 hover:bg-slate-200/50 hover:text-primary transition-colors">
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <span className="truncate">{repo.name}</span>
                </button>
              ))
            ) : (
              <div className="px-2 py-2 text-sm text-slate-400">No repositories found.</div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Editor Area */}
      <main className="flex-1 flex flex-col bg-slate-50 min-w-0 transition-colors z-0">
        <div className="h-10 flex bg-slate-100 border-b border-slate-200 shrink-0 overflow-x-auto custom-scrollbar select-none">
          <div className="group flex items-center gap-2 px-4 border-r border-slate-200 bg-slate-50 border-t-2 border-t-primary text-sm min-w-max cursor-pointer text-slate-700 transition-colors">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {selectedFile ? selectedFile.path.split('/').pop() : 'Welcome.md'}
          </div>
        </div>

        {/* Editor Content */}
        <div className="flex-1 flex flex-col overflow-x-hidden overflow-y-auto custom-scrollbar bg-slate-50 relative min-h-0">
          <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTQ4LCAxNjMsIDE4NCLCAwLjE1KSIvPjwvc3ZnPg==')] opacity-60 pointer-events-none z-0"></div>

          {selectedFile ? (
            <div className="relative z-10 w-full h-full p-4">
              {loadingFile ? (
                <div className="flex items-center gap-2 text-slate-500 font-mono text-sm p-4">
                  <svg className="w-5 h-5 animate-spin text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                  Loading content...
                </div>
              ) : (
                <pre className="font-mono text-sm text-slate-800 bg-white border border-slate-200 overflow-auto h-full p-4 rounded-lg shadow-sm">
                  <code>{fileContent}</code>
                </pre>
              )}
            </div>
          ) : (
            <div className="relative z-10 w-full max-w-5xl mx-auto p-6 lg:p-12">
              <div className="prose prose-slate max-w-none">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 font-sans tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-primary to-indigo-600">Rishvin&apos;s Developer Workspace</span>
              </h1>
              <p className="text-lg text-slate-600 font-sans max-w-2xl leading-relaxed">
                Welcome to my interactive portfolio. Powered by real-time GitHub integration, this interface lets you explore my code and interact with my AI assistant.
              </p>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 not-prose font-sans">
                {/* Getting Started Card */}
                <div className="bg-white/60 backdrop-blur border border-slate-200/60 p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-rose-500 flex items-center justify-center text-white shadow-lg shadow-primary/30 mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Explore Code</h3>
                  <p className="text-sm text-slate-500">Expand the <span className="text-primary font-semibold">Explorer</span> tab on the left to browse my repositories and view source code directly on GitHub.</p>
                </div>

                {/* AI Assistant Card */}
                <div className="bg-white/60 backdrop-blur border border-slate-200/60 p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/30 mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">AI Code Assistant</h3>
                  <p className="text-sm text-slate-500">Chat with my AI assistant in the right panel to learn about my tech stack and experience.</p>
                </div>
              </div>

              {/* Enhanced Dashboard View */}
              <div className="mt-8 flex flex-col gap-5 not-prose font-sans">
                {/* Activity Chart Panel */}
                <div className="bg-white/60 backdrop-blur border border-slate-200/60 rounded-2xl relative overflow-hidden flex flex-col h-[350px]">
                  <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white/50">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      GitHub Analytics
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">Live Stats</span>
                  </div>
                  <div className="flex-1 w-full p-4 flex flex-col bg-slate-50/50 overflow-y-auto">
                    <div className="flex items-center justify-between mb-4 px-2">
                      <div>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Total Repos</p>
                        <p className="text-2xl font-bold text-slate-800 font-mono">{loadingRepos ? '-' : totalRepos}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Top Language</p>
                        <p className="text-xl font-bold text-primary font-mono">{loadingRepos ? '-' : topLang}</p>
                      </div>
                    </div>
                    
                    <div className="px-2 mt-2">
                      <p className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-wider">Language Distribution</p>
                      {loadingRepos ? (
                         <div className="animate-pulse h-4 bg-slate-200 rounded w-full"></div>
                      ) : (
                        <div className="flex flex-col gap-3">
                          {Object.entries(languageCounts).sort((a,b) => b[1] - a[1]).slice(0, 5).map(([lang, count]) => (
                            <div key={lang}>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-slate-700 font-medium">{lang}</span>
                                <span className="text-slate-500">{Math.round((count / repos.length) * 100)}%</span>
                              </div>
                              <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                                <div className="bg-primary h-1.5 rounded-full" style={{ width: `${(count / repos.length) * 100}%` }}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          )}
        </div>

        {/* Terminal / Output Panel */}
        <div className="h-56 border-t border-slate-200 bg-white/80 backdrop-blur shrink-0 transition-colors flex flex-col z-10">
          <div className="flex items-center gap-1 px-4 h-9 border-b border-slate-200 text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500 select-none">
            <span className="px-3 py-1 text-primary border-b-2 border-primary h-full flex items-center">Terminal</span>
          </div>

          <div className="flex-1 overflow-auto custom-scrollbar p-3 text-sm text-slate-600 leading-relaxed font-mono">
            {terminalLogs.map(log => (
              <div key={log.id} className="mb-1">{log.text}</div>
            ))}
            
            <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 mt-2 group">
              <span className="text-emerald-500 font-bold">➜</span>
              <input 
                type="text" 
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                className="flex-1 bg-transparent outline-none border-none p-0 focus:ring-0 placeholder-slate-400 caret-emerald-500 text-slate-800"
                placeholder="Type 'help' to see commands..." 
                spellCheck={false} 
                autoComplete="off" 
              />
            </form>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </main>

      {/* AI Assistant Panel */}
      <aside className="w-96 bg-slate-50/50 border-l border-slate-200 shrink-0 transition-colors flex flex-col z-10 hidden lg:flex">
        <div className="h-10 flex items-center justify-between px-4 shrink-0 border-b border-slate-200 select-none">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">AI Chatbot</span>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest border border-slate-200 rounded px-1.5 py-0.5 bg-slate-100 flex items-center gap-1">
              <svg className="w-2.5 h-2.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Local Engine
            </span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-emerald-600">Online</span>
            </div>
          </div>
        </div>

        {/* AI Chat History */}
        <div className="flex-1 overflow-auto custom-scrollbar p-4 flex flex-col gap-5">
          {chatMessages.map(msg => (
            <div key={msg.id} className={`flex gap-3 items-start ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-7 h-7 rounded-lg text-white flex items-center justify-center shrink-0 shadow-md ${msg.role === 'assistant' ? 'bg-gradient-to-br from-primary to-rose-500' : 'bg-slate-700'}`}>
                {msg.role === 'assistant' ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                )}
              </div>
              <div className={`border p-3 rounded-2xl text-sm text-slate-700 shadow-sm font-sans max-w-[85%] ${msg.role === 'assistant' ? 'bg-white border-slate-200 rounded-tl-sm' : 'bg-primary/5 border-primary/10 rounded-tr-sm'}`}>
                {msg.role === 'assistant' ? (
                  <TypewriterText text={msg.text} />
                ) : (
                  <div className="leading-relaxed whitespace-pre-wrap break-words">{msg.text}</div>
                )}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {msg.actions.map(action => (
                      <button key={action.label} type="button" onClick={() => handlePromptClick(action.action)} className="bg-slate-50 border border-slate-200 hover:border-primary/50 text-slate-600 hover:text-primary px-3 py-1.5 rounded-lg text-left text-xs transition-colors shadow-sm">
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* AI Input area */}
        <form onSubmit={handleChatSubmit} className="p-3 bg-white/80 backdrop-blur border-t border-slate-200 shrink-0">
          <div className="relative flex items-end border border-slate-300 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary mb-1 rounded-xl overflow-hidden transition-all shadow-sm bg-slate-50">
            <textarea
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleChatSubmit(e);
                }
              }}
              className="w-full bg-transparent border-none py-3 px-4 pr-12 text-sm focus:outline-none focus:ring-0 resize-none font-sans text-slate-800 placeholder-slate-400 leading-normal"
              rows={1} 
              placeholder="Ask about the code..." 
              style={{ minHeight: "48px", maxHeight: "120px" }}
            />
            <button type="submit" className="absolute bottom-2 right-2 p-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all rounded-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </form>
      </aside>
    </div>
  );
}

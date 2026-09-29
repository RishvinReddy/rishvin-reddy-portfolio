'use client';

import React, { useState, useRef, useEffect } from 'react';
import { processUserMessage, Context, AIResponseData } from '@/ai/engine';
import Link from 'next/link';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  content?: string;
  data?: AIResponseData;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [viewMode, setViewMode] = useState<'visual' | 'terminal'>('visual');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isProcessing, viewMode]);

  // Command K to open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isProcessing) return;

    const userMessage = text.trim();
    setInput('');
    setIsProcessing(true);

    if (userMessage.toLowerCase() === '/clear') {
      setMessages([]);
      setIsProcessing(false);
      return;
    }
    
    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), sender: 'user', content: userMessage },
    ]);

    const context: Context = {
      activeProject: undefined,
      activeFileContent: undefined,
    };

    // Simulate thinking state
    setTimeout(() => {
      const { data } = processUserMessage(userMessage, context);
      
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: 'bot', data },
      ]);
      setIsProcessing(false);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    { title: "PROJECTS", subtitle: "Explore Portfolio", query: "/projects" },
    { title: "TECH STACK", subtitle: "View Skills", query: "/skills" },
    { title: "EXPERIENCE", subtitle: "Work History", query: "/resume" },
    { title: "EDUCATION", subtitle: "Academic", query: "/resume" }
  ];

  const suggestedQuestions = [
    "Tell me about ChainForensics",
    "What are his cybersecurity skills?",
    "Show me his IoT projects"
  ];

  // Renderers for structured data
  const renderResponseData = (data: AIResponseData, isTerminal: boolean) => {
    if (isTerminal) {
      return renderTerminalResponse(data);
    }
    return renderVisualResponse(data);
  };

  const renderTerminalResponse = (data: AIResponseData) => {
    switch (data.type) {
      case 'text':
        return <pre className="whitespace-pre-wrap font-mono text-xs text-slate-300">{data.content}</pre>;
      case 'project':
        return (
          <div className="font-mono text-xs text-slate-300">
            <div className="text-primary mb-1">PROJECT: {data.project.name}</div>
            <div className="mb-1">{data.project.description}</div>
            <div className="text-slate-500">STACK: {data.project.stack.join(', ')}</div>
          </div>
        );
      case 'project_list':
        return (
          <div className="font-mono text-xs text-slate-300">
            <div className="text-primary mb-2">PROJECTS FOUND: {data.projects.length}</div>
            {data.projects.map((p, i) => (
              <div key={p.id} className="mb-1">
                <span className="text-slate-500">{String(i + 1).padStart(2, '0')}</span> {p.name}
              </div>
            ))}
          </div>
        );
      case 'skills':
        return (
          <div className="font-mono text-xs text-slate-300">
            <div className="text-primary mb-2">TECHNICAL SKILLS</div>
            {data.skills.map((c, i) => (
              <div key={i} className="mb-2">
                <div className="text-slate-400">[{c.category}]</div>
                <div>{c.skills.join(', ')}</div>
              </div>
            ))}
          </div>
        );
      case 'resume':
        return (
          <div className="font-mono text-xs text-slate-300 whitespace-pre-wrap">
            <div className="text-primary mb-2">PROFILE</div>
            {data.info.profile.name} | CGPA: {data.info.profile.cgpa}
            <br/><br/>
            <div className="text-primary mb-2">EDUCATION</div>
            {data.info.education.map((e, i) => (
              <div key={i} className="mb-2">
                {e.institution} ({e.duration}) - {e.degree}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const renderVisualResponse = (data: AIResponseData) => {
    switch (data.type) {
      case 'text':
        return (
          <div className="text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">
            {data.content}
            {data.actions && data.actions.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {data.actions.map((act, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSend(act.action)}
                    className="text-[10px] px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors uppercase tracking-widest"
                  >
                    {act.label} ↗
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      case 'project':
        return (
          <div className="border border-white/10 rounded-xl bg-black/40 overflow-hidden w-full sm:min-w-[400px]">
            <div className="p-4 border-b border-white/10 bg-white/5">
              <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Project</div>
              <h4 className="text-lg font-serif font-bold text-white">{data.project.name}</h4>
              <p className="text-xs text-slate-300 mt-1">{data.project.shortDescription}</p>
            </div>
            <div className="p-4">
              <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Technology</div>
              <div className="flex flex-wrap gap-2 mb-4">
                {data.project.stack.map(tech => (
                  <span key={tech} className="px-2 py-1 text-[10px] font-mono border border-white/10 bg-white/5 rounded text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <Link 
                href={`/portfolio/${data.project.id}`} 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-light transition-colors"
                onClick={() => setIsOpen(false)}
              >
                View Project ↗
              </Link>
            </div>
          </div>
        );
      case 'project_list':
        return (
          <div className="w-full">
            <div className="text-xs text-slate-400 uppercase tracking-widest mb-3">Found {data.projects.length} Projects</div>
            <div className="flex flex-col gap-2">
              {data.projects.map((p, i) => (
                <button 
                  key={p.id}
                  onClick={() => handleSend(`/open ${p.id}`)}
                  className="flex items-center justify-between p-3 border border-white/10 rounded-lg hover:bg-white/5 transition-colors text-left group"
                >
                  <div>
                    <div className="text-sm font-bold text-slate-200 group-hover:text-primary transition-colors">{String(i + 1).padStart(2, '0')} {p.name}</div>
                    <div className="text-xs text-slate-500 truncate max-w-[200px] sm:max-w-[300px] mt-0.5">{p.shortDescription}</div>
                  </div>
                  <span className="text-slate-500 group-hover:text-primary">↗</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="w-full">
            <div className="text-xs text-slate-400 uppercase tracking-widest mb-4">Technical Profile</div>
            <div className="flex flex-col gap-4">
              {data.skills.map((c, i) => (
                <div key={i}>
                  <div className="text-[10px] text-primary uppercase tracking-widest mb-1.5">{c.category}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {c.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 text-[11px] border border-white/10 bg-black/40 rounded text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'resume':
        return (
          <div className="w-full">
            <div className="text-xs text-slate-400 uppercase tracking-widest mb-4">Academic & Professional</div>
            <div className="flex flex-col gap-4">
              {data.info.education.map((e, i) => (
                <div key={i} className="p-3 border border-white/10 rounded-lg bg-white/5">
                  <div className="text-sm font-bold text-white">{e.institution}</div>
                  <div className="text-xs text-primary mt-0.5">{e.degree}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1.5">{e.duration}</div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-12 sm:right-12 z-50 flex flex-col items-end font-sans">
      {/* Chat Popup */}
      <div 
        className={`transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 mb-6' : 'scale-90 opacity-0 pointer-events-none mb-0 absolute bottom-16'
        }`}
      >
        <div className={`w-[95vw] sm:w-[700px] h-[650px] max-h-[85vh] flex flex-col glass-panel border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative transition-colors duration-300 ${viewMode === 'terminal' ? 'bg-black/95 backdrop-blur-none' : 'bg-black/80 backdrop-blur-2xl'}`}>
          
          {/* Header */}
          <div className="relative flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md z-10 shrink-0">
            <div className="flex items-center gap-4">
              <div className="relative flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-amber-400' : 'bg-green-400'} shadow-[0_0_10px_rgba(255,255,255,0.2)]`}></div>
                {isProcessing && <div className="absolute inset-0 w-2 h-2 rounded-full bg-amber-400 animate-ping opacity-75"></div>}
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold tracking-widest text-sm uppercase text-white font-serif flex items-center gap-2">
                  Rishvin AI
                </h3>
                <span className="text-[9px] text-slate-400 tracking-[0.2em] uppercase">Local Portfolio Intelligence</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex border border-white/10 rounded-lg p-0.5 bg-black">
                <button 
                  onClick={() => setViewMode('visual')}
                  className={`text-[9px] uppercase tracking-widest px-2 py-1 rounded transition-colors ${viewMode === 'visual' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  Visual
                </button>
                <button 
                  onClick={() => setViewMode('terminal')}
                  className={`text-[9px] uppercase tracking-widest px-2 py-1 rounded transition-colors ${viewMode === 'terminal' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  Terminal
                </button>
              </div>

              <span className="text-[9px] text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                {isProcessing ? 'Thinking...' : 'Local • Ready'}
              </span>
              <kbd className="hidden sm:inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-white/5 rounded border border-white/10">⌘K</kbd>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors ml-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar relative z-10">
            {messages.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center animate-fade-in-up mt-4">
                <div className="w-20 h-20 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(255,255,255,0.03)] backdrop-blur-md relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="font-serif text-2xl font-bold tracking-widest text-white/90 group-hover:text-white transition-colors z-10">R AI</span>
                </div>
                
                <h2 className="text-xs tracking-[0.4em] uppercase text-slate-300 mb-3 font-serif">Explore Rishvin&apos;s Work</h2>
                <p className="text-[10px] text-slate-500 mb-8 max-w-sm tracking-widest uppercase">Projects · Skills · Experience · Education</p>
                
                <div className="grid grid-cols-2 gap-3 w-full max-w-md mb-8">
                  {quickActions.map((action, i) => (
                    <button 
                      key={i}
                      onClick={() => handleSend(action.query)}
                      className="flex flex-col items-start p-4 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 transition-all text-left group"
                    >
                      <span className="text-[10px] font-bold tracking-widest uppercase text-slate-300 group-hover:text-white mb-1 transition-colors">{action.title}</span>
                      <span className="text-[10px] text-slate-500 group-hover:text-slate-400 transition-colors">{action.subtitle}</span>
                    </button>
                  ))}
                </div>

                <div className="w-full max-w-md border-t border-white/5 pt-6 mt-2">
                  <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest text-slate-500 mb-2">
                    <span>Index Status</span>
                    <span className="text-green-400">Ready</span>
                  </div>
                  <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest text-slate-500 mb-2">
                    <span>Search Engine</span>
                    <span className="text-green-400">Ready</span>
                  </div>
                  <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest text-slate-500">
                    <span>External AI</span>
                    <span className="text-amber-500">Disabled</span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex flex-col ${viewMode === 'visual' ? 'max-w-[90%]' : 'w-full'} ${msg.sender === 'user' && viewMode === 'visual' ? 'self-end items-end' : 'self-start items-start'} animate-fade-in-up`}
                  >
                    {viewMode === 'terminal' ? (
                      <div className="font-mono text-xs w-full mb-3">
                        <span className="text-primary">rishvin@portfolio:~$</span> <span className="text-white">{msg.sender === 'user' ? msg.content : ''}</span>
                        {msg.sender === 'bot' && msg.data && (
                          <div className="mt-2 pl-4 border-l border-white/10 text-slate-300">
                            {renderResponseData(msg.data, true)}
                          </div>
                        )}
                      </div>
                    ) : (
                      <>
                        {msg.sender === 'bot' && (
                          <span className="text-[9px] font-bold tracking-widest uppercase text-slate-500 mb-2 ml-1 font-serif">Rishvin AI</span>
                        )}
                        <div 
                          className={`px-5 py-4 shadow-sm ${
                            msg.sender === 'user' 
                              ? 'bg-white/10 border border-white/10 text-white rounded-2xl rounded-br-sm backdrop-blur-md text-sm' 
                              : 'w-full text-slate-300'
                          }`}
                        >
                          {msg.sender === 'user' ? msg.content : (msg.data ? renderResponseData(msg.data, false) : null)}
                        </div>
                      </>
                    )}
                  </div>
                ))}
                {isProcessing && viewMode === 'visual' && (
                  <div className="flex flex-col max-w-[85%] self-start items-start animate-fade-in-up">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-slate-500 mb-2 ml-1 font-serif">Rishvin AI</span>
                    <div className="px-5 py-4 rounded-2xl bg-black/60 border border-white/5 text-slate-400 rounded-bl-sm backdrop-blur-md flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      <span className="ml-2 text-xs italic opacity-75">Searching knowledge base...</span>
                    </div>
                  </div>
                )}
                {isProcessing && viewMode === 'terminal' && (
                  <div className="font-mono text-xs w-full animate-fade-in-up">
                    <span className="text-slate-500">_ searching local index...</span>
                  </div>
                )}
                <div ref={messagesEndRef} className="h-2" />
              </>
            )}
          </div>

          {/* Input Area */}
          <div className="p-5 border-t border-white/10 bg-black/80 backdrop-blur-xl z-10 shrink-0">
            <div className="relative flex items-center group">
              {viewMode === 'terminal' ? (
                <span className="absolute left-4 text-primary font-mono text-sm group-focus-within:text-primary-light transition-colors">
                  $
                </span>
              ) : (
                <span className="absolute left-4 text-slate-500 group-focus-within:text-primary transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
              )}
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={viewMode === 'terminal' ? "Enter command (e.g., /projects, /skills)..." : "Search projects, skills, experience..."}
                disabled={isProcessing}
                className={`w-full bg-black border border-white/10 rounded-xl pl-11 pr-14 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white/30 transition-all resize-none h-[52px] min-h-[52px] max-h-[120px] custom-scrollbar shadow-inner disabled:opacity-50 ${viewMode === 'terminal' ? 'font-mono' : ''}`}
                rows={1}
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isProcessing}
                className="absolute right-2 w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white disabled:opacity-30 disabled:hover:bg-white/5 transition-all focus:outline-none focus:ring-1 focus:ring-white/30"
              >
                <svg className="w-4 h-4 transform group-focus-within:translate-x-0.5 group-focus-within:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between px-1 gap-2">
              <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest text-slate-500 font-mono">
                <span>Local Knowledge Base</span>
                <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block"></span>
                <span className="hidden sm:block">No External AI</span>
                <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block"></span>
                <span className="hidden sm:block">Portfolio 2026</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[9px] uppercase tracking-widest text-slate-500 font-mono">
                <span><kbd className="px-1.5 py-0.5 border border-white/10 rounded bg-white/5 text-slate-400">↵</kbd> to send</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FAB - Chat Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 border ${
          isOpen 
            ? 'bg-white/5 border-white/10 rotate-90 scale-0 opacity-0 pointer-events-none' 
            : 'bg-black border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:border-white/30 backdrop-blur-xl group'
        }`}
      >
        <span className="font-serif font-bold text-lg tracking-widest text-white group-hover:text-primary transition-colors">
          R
        </span>
      </button>
    </div>
  );
}

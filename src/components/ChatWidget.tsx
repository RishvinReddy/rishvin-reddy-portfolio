'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  processUserMessage,
  Context,
  AIResponseData,
} from '@/ai/engine';
import { Recommendation } from '@/data/recommendations';

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
  const [viewMode, setViewMode] = useState<'visual' | 'recruiter' | 'terminal'>('visual');
  const [showTooltip, setShowTooltip] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Auto-scroll
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isProcessing, viewMode]);

  // Command K to toggle & Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowTooltip(false);
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          setSpeakingId(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [isOpen]);

  // Web Audio API Sci-Fi Synthesizer (100% Client-Side, Zero External Assets)
  const playSound = useCallback((type: 'send' | 'receive' | 'click' | 'toggle' | 'navigate') => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'send') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(460, now);
        osc.frequency.exponentialRampToValueAtTime(920, now + 0.07);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
        osc.start(now);
        osc.stop(now + 0.07);
      } else if (type === 'receive') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.setValueAtTime(784, now + 0.06);
        gain.gain.setValueAtTime(0.045, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
        osc.start(now);
        osc.stop(now + 0.14);
      } else if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(650, now);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);
        osc.start(now);
        osc.stop(now + 0.03);
      } else if (type === 'toggle') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(350, now);
        osc.frequency.exponentialRampToValueAtTime(700, now + 0.06);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'navigate') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(1046, now + 0.14);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      }
    } catch {
      // AudioContext fallback
    }
  }, [soundEnabled]);

  // Voice Synthesizer (TTS - Web Speech API)
  const handleSpeak = (text: string, msgId: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (speakingId === msgId) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();

    // Clean markdown tokens for clear speech
    const clean = text
      .replace(/[*_#`[\]()]/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .trim();

    if (!clean) return;

    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (v.name.includes('Samantha') ||
          v.name.includes('Google') ||
          v.name.includes('Natural') ||
          v.name.includes('Daniel'))
    );
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => setSpeakingId(msgId);
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
    }
  };

  // Interactive Page Navigator (Automated Scroll & Highlight)
  const handleNavigateToSection = (targetId: string) => {
    playSound('navigate');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('ring-4', 'ring-indigo-500', 'ring-offset-4', 'transition-all', 'duration-500');
      setTimeout(() => {
        el.classList.remove('ring-4', 'ring-indigo-500', 'ring-offset-4');
      }, 3200);
    }
  };

  // One-Click Copy Helper
  const handleCopy = (text: string, id: string) => {
    if (typeof navigator === 'undefined') return;
    playSound('click');
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Export Chat to Markdown
  const handleExportChat = () => {
    if (messages.length === 0) return;
    playSound('click');
    let md = `# Rishvin AI - Conversation Transcript\n\n`;
    md += `**Date**: ${new Date().toLocaleString()}\n`;
    md += `**Engine**: Local Neural Index (100% Client-Side, Zero External Latency)\n\n---\n\n`;

    messages.forEach((m) => {
      const sender = m.sender === 'user' ? '### 👤 You' : '### 🤖 Rishvin AI';
      let text = '';
      if (m.content) {
        text = m.content;
      } else if (m.data) {
        if (m.data.type === 'text') text = m.data.content;
        else if (m.data.type === 'patent')
          text = `**Patent**: ${m.data.patent.title} (${m.data.patent.number}) - ${m.data.patent.description}`;
        else if (m.data.type === 'recommendations')
          text = m.data.recommendations
            .map((r) => `> **${r.name}** (${r.shortTitle}): "${r.excerpt}"`)
            .join('\n\n');
        else if (m.data.type === 'recruiter')
          text = `**Candidate**: ${m.data.recruiter.candidate} (${m.data.recruiter.role})\n\n**Highlights**:\n${m.data.recruiter.topHighlights.map((h) => `- ${h}`).join('\n')}`;
        else if (m.data.type === 'project')
          text = `**${m.data.project.name}**: ${m.data.project.description}`;
        else if (m.data.type === 'project_list')
          text = m.data.projects.map((p) => `- ${p.name}: ${p.shortDescription}`).join('\n');
        else if (m.data.type === 'skills')
          text = m.data.skills.map((s) => `**${s.category}**: ${s.skills.join(', ')}`).join('\n');
        else if (m.data.type === 'navigate')
          text = `Navigated to ${m.data.target.name} (#${m.data.target.id})`;
        else if (m.data.type === 'resume')
          text = `Education: ${m.data.info.education.map((e) => e.institution).join(', ')}`;
      }
      md += `${sender}\n\n${text}\n\n---\n\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rishvin-ai-transcript-${new Date().toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isProcessing) return;

    const userMessage = text.trim();
    setInput('');
    setIsProcessing(true);
    playSound('send');

    if (userMessage.toLowerCase() === '/clear') {
      setMessages([]);
      setIsProcessing(false);
      stopSpeaking();
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
      playSound('receive');

      if (data.type === 'navigate') {
        handleNavigateToSection(data.target.id);
      }
    }, 350);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    {
      title: "💼 Recruiter Brief",
      subtitle: "Full-Time Roles, Superpowers & Notice",
      query: "/recruiter",
      badge: "Interview Mode",
      color: "border-amber-500/30 hover:border-amber-500/60",
    },
    {
      title: "🛡️ IoT Patent",
      subtitle: "Govt of India Patent No. 470097-001",
      query: "/patent",
      badge: "Invention",
      color: "border-emerald-500/30 hover:border-emerald-500/60",
    },
    {
      title: "⭐ Recommendations",
      subtitle: "Verified LinkedIn Mentor Endorsements",
      query: "/recommendations",
      badge: "4 Verified",
      color: "border-blue-500/30 hover:border-blue-500/60",
    },
    {
      title: "🔍 Projects",
      subtitle: "ChainForensics, VoteSafe & Systems",
      query: "/projects",
      badge: "Portfolio",
      color: "border-indigo-500/30 hover:border-indigo-500/60",
    },
  ];

  const suggestedQuestions = [
    "Why should we hire Rishvin?",
    "Tell me about the IoT Connectivity Device patent",
    "What do mentors say about Rishvin?",
    "Take me to projects section",
    "Where did Rishvin intern?",
  ];

  // Helper to extract plain text for speech from AIResponseData
  const getTextForSpeech = (data: AIResponseData): string => {
    switch (data.type) {
      case 'text':
        return data.content;
      case 'patent':
        return `${data.patent.title}. Granted Indian Patent number ${data.patent.number}. ${data.patent.description}`;
      case 'recommendations':
        return `Rishvin has 4 verified LinkedIn recommendations. ${data.recommendations.map((r) => `${r.name} said: ${r.excerpt}`).join('. ')}`;
      case 'recruiter':
        return `Recruiter summary for ${data.recruiter.candidate}. Role: ${data.recruiter.role}. Status: ${data.recruiter.availability}. Top highlights include: ${data.recruiter.topHighlights.join('. ')}`;
      case 'project':
        return `${data.project.name}. ${data.project.description}. Built with ${data.project.stack.join(', ')}.`;
      case 'project_list':
        return `Here are Rishvin's core engineering projects: ${data.projects.map((p) => p.name).join(', ')}.`;
      case 'skills':
        return `Technical skills across ${data.skills.length} categories: ${data.skills.map((c) => `${c.category}: ${c.skills.join(', ')}`).join('. ')}`;
      case 'navigate':
        return `Navigating to ${data.target.name}.`;
      case 'resume':
        return `${data.info.profile.name}, CGPA ${data.info.profile.cgpa}. Education: ${data.info.education.map((e) => `${e.degree} at ${e.institution}`).join(', ')}.`;
    }
  };

  // Renderers for structured data
  const renderResponseData = (data: AIResponseData, isTerminal: boolean, msgId: string) => {
    if (isTerminal) {
      return renderTerminalResponse(data);
    }
    return renderVisualResponse(data, msgId);
  };

  const renderTerminalResponse = (data: AIResponseData) => {
    switch (data.type) {
      case 'text':
        return <pre className="whitespace-pre-wrap font-mono text-xs text-slate-300">{data.content}</pre>;

      case 'recruiter':
        return (
          <div className="font-mono text-xs text-slate-300">
            <div className="text-amber-400 font-bold mb-1">[RECRUITER BRIEF] {data.recruiter.candidate}</div>
            <div className="text-slate-400 mb-1">{data.recruiter.role} | CGPA: {data.recruiter.cgpa}</div>
            <div className="text-emerald-400 mb-2">STATUS: {data.recruiter.availability}</div>
            <div className="text-slate-200 font-bold mb-1">KEY HIGHLIGHTS:</div>
            {data.recruiter.topHighlights.map((h, i) => (
              <div key={i} className="text-slate-400 pl-2 mb-0.5">• {h}</div>
            ))}
            <div className="text-slate-200 font-bold mt-2 mb-1">CORE STRENGTHS:</div>
            {data.recruiter.coreStrengths.map((s, i) => (
              <div key={i} className="text-slate-400 pl-2 mb-0.5">• {s}</div>
            ))}
            <div className="text-slate-500 mt-2">CONTACT: {data.recruiter.contact.email}</div>
          </div>
        );

      case 'navigate':
        return (
          <div className="font-mono text-xs text-indigo-300">
            <span className="text-emerald-400 font-bold">[AUTO-NAVIGATED]</span> Scrolled to #{data.target.id} ({data.target.name})
            <div className="text-slate-400 mt-1">{data.target.description}</div>
          </div>
        );

      case 'patent':
        return (
          <div className="font-mono text-xs text-slate-300">
            <div className="text-emerald-400 font-bold mb-1">[GRANTED PATENT] {data.patent.title}</div>
            <div className="text-slate-400 mb-1">PATENT NO: {data.patent.number} | {data.patent.jurisdiction}</div>
            <div className="text-slate-300 mb-2">{data.patent.description}</div>
            <div className="text-slate-500">ROLE: {data.patent.role} | DOMAIN: {Array.isArray(data.patent.domain) ? data.patent.domain.join(', ') : data.patent.domain}</div>
          </div>
        );

      case 'recommendations':
        return (
          <div className="font-mono text-xs text-slate-300">
            <div className="text-blue-400 font-bold mb-2">VERIFIED RECOMMENDATIONS ({data.recommendations.length})</div>
            {data.recommendations.map((rec) => (
              <div key={rec.id} className="mb-3 pl-3 border-l-2 border-blue-500/50">
                <div className="text-white font-bold">{rec.name} — {rec.shortTitle}</div>
                <div className="text-slate-400 italic my-1">&ldquo;{rec.excerpt}&rdquo;</div>
                <div className="text-slate-500 text-[10px]">{rec.relationship} · {rec.dateShort}</div>
              </div>
            ))}
          </div>
        );

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
            <br /><br />
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

  const renderVisualResponse = (data: AIResponseData, msgId: string) => {
    const isSpeakingThis = speakingId === msgId;
    const isCopiedThis = copiedId === msgId;

    return (
      <div className="group/card relative">
        {/* Message Top Toolbar (Voice TTS + Copy) */}
        <div className="flex items-center justify-end gap-1.5 mb-2 opacity-80 group-hover/card:opacity-100 transition-opacity">
          <button
            onClick={() => handleSpeak(getTextForSpeech(data), msgId)}
            className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono border transition-all cursor-pointer ${
              isSpeakingThis
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse'
                : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border-white/10'
            }`}
            title={isSpeakingThis ? 'Stop speaking' : 'Read answer aloud (Web Speech API)'}
          >
            {isSpeakingThis ? (
              <>
                <span className="flex items-center gap-0.5">
                  <span className="w-1 h-2.5 bg-rose-400 animate-bounce" />
                  <span className="w-1 h-3.5 bg-rose-400 animate-bounce" style={{ animationDelay: '100ms' }} />
                  <span className="w-1 h-2 bg-rose-400 animate-bounce" style={{ animationDelay: '200ms' }} />
                </span>
                <span>Stop</span>
              </>
            ) : (
              <>
                <span>🔊</span>
                <span>Speak</span>
              </>
            )}
          </button>

          <button
            onClick={() => handleCopy(getTextForSpeech(data), msgId)}
            className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-all cursor-pointer"
            title="Copy response to clipboard"
          >
            {isCopiedThis ? (
              <>
                <span className="text-emerald-400">✓</span>
                <span className="text-emerald-300">Copied</span>
              </>
            ) : (
              <>
                <span>📋</span>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Content Renderers */}
        {(() => {
          switch (data.type) {
            case 'recruiter':
              return (
                <div className="border border-amber-500/40 rounded-2xl bg-gradient-to-br from-amber-950/30 via-slate-900/70 to-slate-950/90 overflow-hidden w-full shadow-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 text-lg">
                        💼
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
                          Recruiter & Interview Overview
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-white font-display">
                          {data.recruiter.candidate}
                        </h4>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shrink-0">
                      Open to Hire
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-3.5">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[10px] text-slate-400 block font-mono">Current Status</span>
                      <span className="text-xs font-bold text-emerald-300">Immediate / Full-Time</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[10px] text-slate-400 block font-mono">Academic CGPA</span>
                      <span className="text-xs font-bold text-white">{data.recruiter.cgpa}</span>
                    </div>
                  </div>

                  <div className="mb-3.5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 block">
                      Why Hire Rishvin? (Top Highlights)
                    </span>
                    <div className="space-y-1.5">
                      {data.recruiter.topHighlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                          <span className="text-amber-400 mt-0.5">✦</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 block">
                      Core Superpowers
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {data.recruiter.coreStrengths.map((str, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-[11px] rounded-lg bg-amber-500/10 text-amber-200 border border-amber-500/20 font-medium"
                        >
                          {str}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3.5 border-t border-white/10">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleCopy(data.recruiter.contact.email, `email-${msgId}`)}
                        className="text-xs px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono transition-colors cursor-pointer"
                      >
                        {copiedId === `email-${msgId}` ? '✓ Email Copied' : 'Copy Email'}
                      </button>
                      <button
                        onClick={() => handleSend('/recommendations')}
                        className="text-xs px-3 py-1.5 rounded-xl bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 font-mono transition-colors cursor-pointer border border-blue-500/30"
                      >
                        Endorsements ⭐
                      </button>
                    </div>
                    <Link
                      href="https://www.linkedin.com/in/rishvinreddy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-amber-300 hover:text-white transition-colors flex items-center gap-1 font-mono"
                    >
                      <span>LinkedIn Profile</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              );

            case 'navigate':
              return (
                <div className="border border-indigo-500/40 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900/70 to-slate-950/90 overflow-hidden w-full shadow-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                        Page Navigator Action
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">#{data.target.id}</span>
                  </div>
                  <h4 className="text-base font-bold text-white font-display mb-1">
                    {data.target.name}
                  </h4>
                  <p className="text-xs text-slate-300 mb-3">{data.target.description}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <button
                      onClick={() => handleNavigateToSection(data.target.id)}
                      className="text-xs px-3 py-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span>⚡ Scroll Again</span>
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-xs text-slate-400 hover:text-white font-mono transition-colors cursor-pointer"
                    >
                      Minimize Chat to View ↗
                    </button>
                  </div>
                </div>
              );

            case 'text':
              return (
                <div className="text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">
                  {data.content}
                  {data.actions && data.actions.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/5">
                      {data.actions.map((act, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(act.action)}
                          className="text-[11px] px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-white transition-all font-mono font-medium cursor-pointer shadow-xs"
                        >
                          {act.label} ↗
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );

            case 'patent':
              return (
                <div className="border border-emerald-500/40 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900/60 to-slate-950/80 overflow-hidden w-full shadow-lg p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm">
                        🛡️
                      </span>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 block">
                          Granted Design Patent · {data.patent.jurisdiction}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-white font-display">
                          {data.patent.title}
                        </h4>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shrink-0">
                      Granted
                    </span>
                  </div>

                  <div className="bg-black/40 border border-white/5 rounded-xl p-3 mb-3 font-mono text-xs">
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>Application / Patent No:</span>
                      <span className="text-white font-bold">{data.patent.number}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Role:</span>
                      <span className="text-emerald-300 font-bold">{data.patent.role}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {data.patent.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {(data.patent.technologies || []).map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-white/5 text-slate-300 border border-white/10"
                      >
                        ✓ {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <button
                      onClick={() => handleNavigateToSection('patent-section')}
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Jump to Patent Section</span>
                      <span>↓</span>
                    </button>
                    <button
                      onClick={() => handleSend('/contact')}
                      className="text-[11px] font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Discuss Tech
                    </button>
                  </div>
                </div>
              );

            case 'recommendations':
              return (
                <div className="w-full">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        Verified LinkedIn Recommendations ({data.recommendations.length})
                      </span>
                    </div>
                    <button
                      onClick={() => handleNavigateToSection('recommendations')}
                      className="text-[11px] font-mono text-blue-400 hover:text-blue-300 cursor-pointer"
                    >
                      Scroll to Section ↓
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {data.recommendations.map((rec: Recommendation) => (
                      <div
                        key={rec.id}
                        className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-blue-500/40 transition-all shadow-md group"
                      >
                        <div className="flex items-start gap-3 mb-2.5">
                          <img
                            src={rec.avatarUrl || '/icon.png'}
                            alt={rec.name}
                            className="w-10 h-10 rounded-full object-cover border border-slate-700 shrink-0"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/icon.png';
                            }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <h5 className="font-bold text-white text-xs sm:text-sm truncate font-display">
                                {rec.name}
                              </h5>
                              <span
                                className="w-3.5 h-3.5 rounded-full bg-blue-500 text-[9px] text-white flex items-center justify-center shrink-0"
                                title="Verified Recommendation"
                              >
                                ✓
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 truncate">
                              {rec.shortTitle}
                            </p>
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 italic leading-relaxed line-clamp-3 mb-3 bg-black/20 p-2.5 rounded-xl border border-white/5">
                          &ldquo;{rec.excerpt}&rdquo;
                        </p>

                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/60">
                          <span>{rec.relationship}</span>
                          <Link
                            href={rec.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 font-bold"
                          >
                            LinkedIn Profile ↗
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );

            case 'project':
              return (
                <div className="border border-slate-700/80 rounded-2xl bg-slate-900/80 overflow-hidden w-full shadow-lg p-5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary block mb-1">
                    Featured Project
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white font-display mb-2">
                    {data.project.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {data.project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {data.project.stack.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                    <button
                      onClick={() => handleNavigateToSection('projects')}
                      className="text-xs font-bold text-primary hover:text-indigo-300 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Jump to Projects</span>
                      <span>↓</span>
                    </button>
                    {data.project.links?.github && (
                      <Link
                        href={data.project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        GitHub Repo ↗
                      </Link>
                    )}
                  </div>
                </div>
              );

            case 'project_list':
              return (
                <div className="w-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Projects ({data.projects.length})
                    </span>
                    <button
                      onClick={() => handleNavigateToSection('projects')}
                      className="text-[11px] font-mono text-primary hover:text-indigo-300 cursor-pointer"
                    >
                      View on page ↓
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {data.projects.map((proj) => (
                      <div
                        key={proj.id}
                        onClick={() => handleSend(`/open ${proj.id}`)}
                        className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-primary/50 transition-all cursor-pointer group shadow-xs"
                      >
                        <h5 className="font-bold text-white text-xs group-hover:text-primary transition-colors font-display mb-1 truncate">
                          {proj.name}
                        </h5>
                        <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                          {proj.shortDescription}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );

            case 'skills':
              return (
                <div className="w-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Technical Skills
                    </span>
                    <button
                      onClick={() => handleNavigateToSection('about-v3')}
                      className="text-[11px] font-mono text-primary hover:text-indigo-300 cursor-pointer"
                    >
                      About section ↓
                    </button>
                  </div>
                  <div className="space-y-3">
                    {data.skills.map((category, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary block mb-2">
                          {category.category}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {category.skills.map((s: string, sIdx: number) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 text-[11px] rounded-md bg-white/5 text-slate-300 border border-white/5 font-mono"
                            >
                              {s}
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
                <div className="border border-slate-800 rounded-2xl bg-slate-900/80 overflow-hidden w-full shadow-lg p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-base font-bold text-white font-display">
                        {data.info.profile.name}
                      </h4>
                      <p className="text-xs text-slate-400">{data.info.profile.title}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-primary/20 text-indigo-300 border border-primary/30 font-bold">
                      CGPA {data.info.profile.cgpa}
                    </span>
                  </div>
                  <div className="space-y-3 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                      Education
                    </span>
                    {data.info.education.map((edu, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-black/30 border border-white/5 text-xs">
                        <div className="font-bold text-white">{edu.institution}</div>
                        <div className="text-slate-400">{edu.degree}</div>
                        <div className="text-[10px] font-mono text-slate-500 mt-1">{edu.duration}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                    <button
                      onClick={() => handleNavigateToSection('experience')}
                      className="text-xs font-bold text-primary hover:text-indigo-300 cursor-pointer"
                    >
                      View Timeline Section ↓
                    </button>
                    <button
                      onClick={() => handleSend('/recruiter')}
                      className="text-xs font-mono text-slate-300 hover:text-white cursor-pointer"
                    >
                      Recruiter Brief 💼
                    </button>
                  </div>
                </div>
              );

            default:
              return null;
          }
        })()}
      </div>
    );
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 flex flex-col items-end font-sans">
      
      {/* Floating Tooltip Hint for First-Time Users */}
      {showTooltip && !isOpen && (
        <div className="hidden sm:flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-slate-900/90 text-white border border-slate-700/80 shadow-xl backdrop-blur-md animate-bounce select-none pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono font-medium">Ask Rishvin AI</span>
          <kbd className="px-1.5 py-0.2 rounded bg-white/10 text-[9px] font-mono text-slate-300 border border-white/20">
            ⌘K
          </kbd>
        </div>
      )}

      {/* Chat Modal Window */}
      <div
        className={`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-bottom-right ${
          isOpen
            ? 'scale-100 opacity-100 mb-4 pointer-events-auto'
            : 'scale-90 opacity-0 pointer-events-none mb-0 absolute bottom-16'
        }`}
      >
        <div
          className={`w-[95vw] sm:w-[730px] h-[680px] max-h-[88vh] flex flex-col border border-slate-700/80 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.7)] relative transition-colors duration-300 ${
            viewMode === 'terminal' ? 'bg-[#080c14]' : 'bg-[#0a0f1d]/95 backdrop-blur-3xl'
          }`}
        >
          {/* Top Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          {/* Window Header */}
          <div className="relative flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md z-10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    isProcessing ? 'bg-amber-400' : 'bg-emerald-400'
                  } shadow-[0_0_12px_rgba(52,211,153,0.8)]`}
                />
                {isProcessing && (
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping opacity-75" />
                )}
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold tracking-wider text-xs sm:text-sm uppercase text-white font-display flex items-center gap-2">
                  <span>Rishvin AI</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-normal">
                    Neural Index
                  </span>
                </h3>
                <span className="text-[9px] text-slate-400 tracking-wider font-mono">
                  100% Private · Zero External Latency
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Mode Selector */}
              <div className="hidden sm:flex border border-slate-700/80 rounded-xl p-0.5 bg-slate-900/60 text-[10px] font-mono">
                <button
                  onClick={() => {
                    playSound('toggle');
                    setViewMode('visual');
                  }}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'visual'
                      ? 'bg-white/10 text-white font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Visual
                </button>
                <button
                  onClick={() => {
                    playSound('toggle');
                    setViewMode('recruiter');
                    handleSend('/recruiter');
                  }}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'recruiter'
                      ? 'bg-amber-500/20 text-amber-300 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Recruiter brief & interview summary"
                >
                  Recruiter 💼
                </button>
                <button
                  onClick={() => {
                    playSound('toggle');
                    setViewMode('terminal');
                  }}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'terminal'
                      ? 'bg-white/10 text-white font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  CLI
                </button>
              </div>

              {/* Sound Effects Toggle */}
              <button
                onClick={() => {
                  setSoundEnabled(!soundEnabled);
                  if (!soundEnabled) {
                    setTimeout(() => playSound('toggle'), 50);
                  }
                }}
                className={`w-7 h-7 rounded-lg flex items-center justify-center border text-xs transition-colors cursor-pointer ${
                  soundEnabled
                    ? 'border-indigo-500/40 text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20'
                    : 'border-slate-800 text-slate-500 bg-slate-900 hover:text-slate-400'
                }`}
                title={soundEnabled ? 'Mute sound effects' : 'Enable Web Audio SFX'}
                aria-label="Toggle SFX"
              >
                {soundEnabled ? '🔊' : '🔇'}
              </button>

              {/* Speaking Indicator & Stop button */}
              {speakingId && (
                <button
                  onClick={stopSpeaking}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-mono cursor-pointer animate-pulse"
                  title="Stop voice"
                >
                  <span>⏹</span>
                  <span className="hidden sm:inline">Mute Voice</span>
                </button>
              )}

              {/* Export Chat Button */}
              {messages.length > 0 && (
                <button
                  onClick={handleExportChat}
                  className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-slate-300 hover:text-white px-2.5 py-1 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/60 transition-colors cursor-pointer"
                  title="Download chat transcript (.md)"
                >
                  <span>📥</span>
                  <span>Export</span>
                </button>
              )}

              {/* Clear Chat Button */}
              {messages.length > 0 && (
                <button
                  onClick={() => {
                    playSound('click');
                    setMessages([]);
                    stopSpeaking();
                  }}
                  className="text-[11px] font-mono text-slate-400 hover:text-rose-400 px-2 py-1 rounded-lg border border-slate-800 hover:border-rose-500/40 transition-colors cursor-pointer"
                  title="Clear conversation"
                >
                  Clear
                </button>
              )}

              <kbd className="hidden sm:inline-flex items-center justify-center px-1.5 py-0.5 text-[9px] font-mono text-slate-400 bg-white/5 rounded border border-white/10">
                ESC
              </kbd>

              <button
                onClick={() => {
                  setIsOpen(false);
                  stopSpeaking();
                }}
                className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800/80 transition-all cursor-pointer"
                aria-label="Close dialog"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-4 custom-scrollbar relative z-10">
            {messages.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center animate-fade-in my-auto py-3">
                
                {/* Glowing AI Avatar Orb */}
                <div className="w-14 h-14 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 via-primary/10 to-transparent flex items-center justify-center mb-4 shadow-[0_0_35px_rgba(99,102,241,0.25)] backdrop-blur-md relative overflow-hidden group">
                  <span className="font-display text-2xl font-black tracking-widest text-white group-hover:scale-110 transition-transform">
                    R
                  </span>
                  <span className="absolute -top-1 -right-1 text-xs">✨</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-1 font-display">
                  Ask Rishvin AI Anything
                </h3>
                <p className="text-xs text-slate-400 mb-5 max-w-md leading-relaxed px-2">
                  100% on-device neural assistant for Rishvin&apos;s patent, 4 verified endorsements, recruiter brief, and page automation.
                </p>

                {/* 4 Interactive Category Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-lg mb-5">
                  {quickActions.map((action, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(action.query)}
                      className={`flex flex-col items-start p-3 rounded-2xl bg-slate-900/60 border ${action.color} transition-all text-left group cursor-pointer shadow-xs backdrop-blur-xs`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="text-xs font-bold text-white group-hover:text-primary transition-colors">
                          {action.title}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 px-1.5 py-0.2 rounded bg-white/5 border border-white/10">
                          {action.badge}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-1">
                        {action.subtitle}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Suggested Questions Strip */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-lg">
                  {suggestedQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="text-[11px] px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer font-mono"
                    >
                      &ldquo;{q}&rdquo;
                    </button>
                  ))}
                </div>

                {/* Index Telemetry Strip */}
                <div className="w-full max-w-lg border-t border-slate-800/80 pt-3.5 mt-5 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Web Speech TTS & Web Audio SFX Active
                  </span>
                  <span>Fuse.js Core</span>
                  <span>100% Client-Side</span>
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      viewMode === 'terminal' ? 'w-full' : 'max-w-[94%]'
                    } ${
                      msg.sender === 'user' && viewMode !== 'terminal'
                        ? 'self-end items-end'
                        : 'self-start items-start'
                    } animate-fade-in`}
                  >
                    {viewMode === 'terminal' ? (
                      <div className="font-mono text-xs w-full mb-3">
                        <span className="text-primary font-bold">rishvin@portfolio:~$</span>{' '}
                        <span className="text-white font-medium">
                          {msg.sender === 'user' ? msg.content : ''}
                        </span>
                        {msg.sender === 'bot' && msg.data && (
                          <div className="mt-2 pl-4 border-l-2 border-indigo-500/50 text-slate-300">
                            {renderResponseData(msg.data, true, msg.id)}
                          </div>
                        )}
                      </div>
                    ) : (
                      <>
                        {msg.sender === 'bot' && (
                          <div className="flex items-center gap-1.5 mb-1 ml-1">
                            <span className="w-2 h-2 rounded-full bg-indigo-400" />
                            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400">
                              Rishvin AI
                            </span>
                          </div>
                        )}
                        <div
                          className={`${
                            msg.sender === 'user'
                              ? 'px-4 py-2.5 bg-gradient-to-r from-primary to-rose-600 text-white rounded-2xl rounded-br-xs text-sm shadow-md font-medium'
                              : 'w-full text-slate-300'
                          }`}
                        >
                          {msg.sender === 'user'
                            ? msg.content
                            : msg.data
                            ? renderResponseData(msg.data, false, msg.id)
                            : null}
                        </div>
                      </>
                    )}
                  </div>
                ))}

                {isProcessing && viewMode !== 'terminal' && (
                  <div className="flex flex-col max-w-[85%] self-start items-start animate-fade-in">
                    <div className="flex items-center gap-1.5 mb-1.5 ml-1">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400">
                        Rishvin AI
                      </span>
                    </div>
                    <div className="px-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 rounded-bl-xs backdrop-blur-md flex items-center gap-2.5 shadow-sm">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      <span className="text-xs font-mono text-slate-400 ml-1">
                        Synthesizing local knowledge...
                      </span>
                    </div>
                  </div>
                )}

                {isProcessing && viewMode === 'terminal' && (
                  <div className="font-mono text-xs w-full animate-fade-in text-amber-400">
                    <span>_ searching local neural index...</span>
                  </div>
                )}

                <div ref={messagesEndRef} className="h-2" />
              </>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 sm:p-4 border-t border-slate-800/80 bg-slate-950/70 backdrop-blur-md z-10 shrink-0">
            <div className="flex items-end gap-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-2 focus-within:border-indigo-500/50 transition-colors shadow-inner">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about IoT patent, recommendations, why hire Rishvin, or say 'take me to projects'..."
                className="flex-1 bg-transparent border-0 text-white placeholder-slate-500 focus:ring-0 text-xs sm:text-sm resize-none max-h-24 py-1 px-2 font-sans focus:outline-none"
                rows={1}
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isProcessing}
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  input.trim() && !isProcessing
                    ? 'bg-gradient-to-r from-primary to-indigo-600 text-white shadow-md hover:scale-105 active:scale-95'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50'
                }`}
                aria-label="Send message"
              >
                <svg className="w-4 h-4 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-slate-500 font-mono">
              <div className="flex items-center gap-1.5 overflow-x-auto">
                <span className="text-slate-400">Try:</span>
                <button
                  onClick={() => handleSend('/recruiter')}
                  className="hover:text-amber-300 underline cursor-pointer"
                >
                  /recruiter
                </button>
                <span>·</span>
                <button
                  onClick={() => handleSend('/patent')}
                  className="hover:text-white underline cursor-pointer"
                >
                  /patent
                </button>
                <span>·</span>
                <button
                  onClick={() => handleSend('/recommendations')}
                  className="hover:text-white underline cursor-pointer"
                >
                  /recommendations
                </button>
                <span>·</span>
                <button
                  onClick={() => handleSend('take me to projects')}
                  className="hover:text-indigo-300 underline cursor-pointer"
                >
                  take me to projects
                </button>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 border border-slate-700 rounded bg-slate-900 text-slate-400">
                  ↵
                </kbd>
                <span>to send</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Futuristic AI Trigger FAB ── */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
          playSound('click');
        }}
        aria-label="Toggle Rishvin AI Chat"
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border cursor-pointer relative shadow-2xl ${
          isOpen
            ? 'bg-slate-900 border-slate-700 rotate-90 scale-0 opacity-0 pointer-events-none'
            : 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 border-indigo-500/40 hover:border-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:scale-108 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] group'
        }`}
      >
        {/* Shimmering Ring */}
        <span className="absolute inset-0 rounded-full border border-indigo-400/20 animate-ping opacity-25 pointer-events-none" />

        <div className="flex items-center justify-center relative">
          <span className="font-display font-black text-lg tracking-wider text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 transition-all">
            R
          </span>
          <span className="absolute -top-2.5 -right-2 text-[10px] text-amber-300 animate-pulse">
            ✨
          </span>
        </div>
      </button>
    </div>
  );
}

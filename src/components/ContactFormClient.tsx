'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Constants
const INQUIRY_TYPES = [
  { id: 'Build a Product', icon: '🚀', desc: 'Need software developed.' },
  { id: 'Hire Me', icon: '💼', desc: 'Internship, Full-time, Contract' },
  { id: 'Partnership', icon: '🤝', desc: 'Business, Startup, Research' },
  { id: 'Speaking', icon: '🎤', desc: 'Workshop, Hackathon, Guest Lecture' },
  { id: 'Consultation', icon: '💡', desc: 'Architecture, Security, Tech' },
  { id: 'General', icon: '❓', desc: 'Other inquiries' },
];

const SERVICES = [
  { id: 'Full Stack Development', tags: 'React, Next.js, Node.js' },
  { id: 'Backend Systems', tags: 'Python, Java, REST APIs' },
  { id: 'Cybersecurity', tags: 'Security Audits, Forensics' },
  { id: 'IoT Solutions', tags: 'Arduino, ESP32, Raspberry Pi' },
  { id: 'Blockchain', tags: 'Smart Contracts, Web3' },
  { id: 'AI Automation', tags: 'Agents, Workflow, n8n' },
];

const BUDGETS = ['< ₹25K', '₹25K–₹50K', '₹50K–₹1L', '₹1L+', 'Let\'s Discuss'];
const TIMELINES = ['ASAP', '1 Week', '2–4 Weeks', '1–3 Months', 'Flexible'];
const MEETINGS = ['Email', 'WhatsApp', 'Google Meet', 'Zoom', 'Phone Call'];

const FAQS = [
  { q: 'How fast do you reply?', a: 'Usually within 12 hours.' },
  { q: 'Do you work remotely?', a: 'Yes. Worldwide.' },
  { q: 'Do you sign NDAs?', a: 'Absolutely. Client confidentiality is a priority.' },
  { q: 'What technologies do you specialize in?', a: 'Full Stack, IoT, Cybersecurity, and Blockchain.' },
  { q: 'Do you work with startups?', a: 'Yes, from idea to deployment.' },
];

export default function ContactFormClient() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<'idle' | 'sending' | 'encrypting' | 'delivering' | 'success'>('idle');
  const [currentTime, setCurrentTime] = useState('');
  
  const [formData, setFormData] = useState({
    first_name: '', email: '', phone: '', company_input: '',
    inquiry_type: '', services: [] as string[], budget: '',
    timeline: '', meeting: '', nda: '', links: '', message: ''
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Live Time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true }) + ' IST');
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: checked ? [...prev.services, value] : prev.services.filter(s => s !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    setFormData(prev => ({
      ...prev,
      inquiry_type: 'Consultation',
      meeting: 'Google Meet',
    }));
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const readinessScore = Math.min(100, Math.round(
    (
      (formData.first_name ? 10 : 0) +
      (formData.email ? 10 : 0) +
      (formData.inquiry_type ? 15 : 0) +
      (formData.services.length > 0 ? 15 : 0) +
      (formData.budget ? 10 : 0) +
      (formData.timeline ? 10 : 0) +
      (formData.message.length > 20 ? 30 : 0)
    )
  ));

  const checklist = {
    contact: !!(formData.first_name && formData.email),
    project: !!(formData.inquiry_type && formData.message),
    budgetTimeline: !!(formData.budget && formData.timeline)
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Animation sequence
    setFormState('sending');
    await new Promise(r => setTimeout(r, 800));
    setFormState('encrypting');
    await new Promise(r => setTimeout(r, 800));
    setFormState('delivering');
    
    try {
      const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
      let browser = "Unknown";
      if (ua.indexOf("Chrome") > -1) browser = "Chrome";
      else if (ua.indexOf("Safari") > -1) browser = "Safari";
      else if (ua.indexOf("Firefox") > -1) browser = "Firefox";
      
      let os = "Unknown";
      if (ua.indexOf("Win") > -1) os = "Windows";
      else if (ua.indexOf("Mac") > -1) os = "MacOS";
      else if (ua.indexOf("Linux") > -1) os = "Linux";
      else if (ua.indexOf("Android") > -1) os = "Android";
      else if (ua.indexOf("like Mac") > -1) os = "iOS";
      
      let device = "Desktop";
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) device = "Mobile/Tablet";

      const templateParams = {
        first_name: formData.first_name,
        email: formData.email,
        phone: formData.phone || 'N/A',
        company_input: formData.company_input || 'N/A',
        inquiry_type: formData.inquiry_type || 'General',
        services: formData.services.join(', ') || 'N/A',
        budget: formData.budget || 'N/A',
        timeline: formData.timeline || 'N/A',
        meeting: formData.meeting || 'N/A',
        nda: formData.nda || 'No',
        links: formData.links || 'None',
        message: formData.message,
        readiness_score: readinessScore + '%',
        time: new Date().toLocaleString('en-US', { timeZoneName: 'short' }),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        device, os, browser,
        screen_resolution: typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : 'Unknown',
        language: typeof navigator !== 'undefined' ? navigator.language || "Unknown" : 'Unknown',
        theme: typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light',
        message_id: (() => {
          const now = new Date();
          const yy = String(now.getFullYear()).slice(-2);
          const mm = String(now.getMonth() + 1).padStart(2, '0');
          const dd = String(now.getDate()).padStart(2, '0');
          const hh = String(now.getHours()).padStart(2, '0');
          const min = String(now.getMinutes()).padStart(2, '0');
          return `${yy}${mm}${dd}-${hh}${min}`;
        })()
      };

      await emailjs.send('service_vap0e7b', 'template_0d7egxw', templateParams, 'mUWYYaTiZhAWgB0TH');
      setFormState('success');
    } catch (error: unknown) {
      console.error('EmailJS Error:', error);
      setFormState('idle');
      alert("Something went wrong. Please check your connection and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-800 relative overflow-hidden pb-32">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
        
        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Select Opportunities
          </motion.div>
          <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-8 font-display leading-tight">
            Let&apos;s Build the <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-primary to-emerald-600">Next Big Thing.</span>
          </motion.h1>
          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From startups to enterprise products, I help transform ambitious ideas into scalable software, secure systems, and intelligent IoT solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT SIDEBAR (DASHBOARD) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live Stats Dashboard */}
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-6 shadow-2xl shadow-slate-200/50">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Executive Overview</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-sm font-semibold text-slate-700 flex items-center gap-2">📍 Hyderabad, India</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Local Time</p>
                  <p className="text-sm font-semibold text-slate-700 font-mono">{currentTime || 'Loading...'}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Response Time</p>
                  <p className="text-sm font-semibold text-emerald-400">&lt; 12 Hours</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Status</p>
                  <p className="text-sm font-semibold text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Online
                  </p>
                </div>
                <div className="col-span-2 pt-4 mt-2 border-t border-slate-200/50">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-3">Core Expertise</p>
                  <div className="flex flex-wrap gap-2">
                    {['Software', 'IoT', 'Cybersecurity', 'Blockchain'].map(exp => (
                      <span key={exp} className="px-2 py-1 bg-slate-100 rounded text-[11px] font-medium text-slate-700">{exp}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Contact Cards */}
            <div className="space-y-3">
              <a href="mailto:rishvinreddy@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-indigo-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  📧
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-sm text-slate-800 font-semibold">rishvinreddy@gmail.com</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Usually replies within 12 hours</p>
                </div>
              </a>

              <a href="tel:+919848723235" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-emerald-500/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  📱
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <p className="text-sm text-slate-800 font-semibold">+91 98487 23235</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Fastest way to reach me</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/rishvinreddy" target="_blank" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-[#0a66c2]/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-[#0a66c2]/10 flex items-center justify-center text-[#0a66c2] group-hover:bg-[#0a66c2] group-hover:text-white transition-all">
                  💼
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">LinkedIn</p>
                  <p className="text-sm text-slate-800 font-semibold">in/rishvinreddy</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Professional networking</p>
                </div>
              </a>
              
              <a href="https://github.com/RishvinReddy" target="_blank" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all group">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-200 group-hover:text-white transition-all">
                  💻
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">GitHub</p>
                  <p className="text-sm text-slate-800 font-semibold">@RishvinReddy</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">View code & contributions</p>
                </div>
              </a>
            </div>

            {/* Social Proof */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Trusted Technologies</h3>
              <div className="flex flex-wrap gap-2 opacity-70">
                {['Python', 'React', 'Next.js', 'Node.js', 'Arduino', 'ESP32', 'Ethereum', 'Docker', 'AWS'].map(t => (
                  <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT MAIN FORM */}
          <div className="lg:col-span-8">
            <div className="bg-white/80 backdrop-blur-2xl border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
              
              {/* Top Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-500" style={{ width: `${readinessScore}%` }}></div>
              </div>

              {formState === 'success' ? (
                <div className="py-20 text-center">
                  <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/20">
                    <span className="text-4xl">✓</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent</h3>
                  <p className="text-slate-600 max-w-sm mx-auto mb-8">Thanks! I&apos;ll review your request and get back to you within 24 hours.</p>
                  <button onClick={() => setFormState('idle')} className="px-6 py-3 bg-slate-100 text-slate-900 rounded-xl hover:bg-slate-800 transition-colors">Send Another</button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
                  
                  {/* Score Indicator */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Project Intake System</h2>
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Project Readiness</div>
                      <div className="text-xl font-black text-emerald-400">{readinessScore}%</div>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">Full Name *</label>
                      <input type="text" name="first_name" required value={formData.first_name} onChange={handleInputChange} className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">Email Address *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">Company / Organization</label>
                      <input type="text" name="company_input" value={formData.company_input} onChange={handleInputChange} className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" placeholder="Acme Inc." />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-4">Inquiry Type *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {INQUIRY_TYPES.map(type => (
                        <label key={type.id} className="cursor-pointer">
                          <input type="radio" name="inquiry_type" value={type.id} onChange={handleInputChange} className="peer sr-only" required />
                          <div className="h-full p-4 rounded-xl border border-slate-300 bg-slate-100/30 hover:bg-slate-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-500/10 transition-all">
                            <div className="text-xl mb-2">{type.icon}</div>
                            <div className="text-sm font-bold text-slate-800 mb-1">{type.id}</div>
                            <div className="text-[11px] text-slate-600">{type.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-4">Services Needed</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {SERVICES.map(srv => (
                        <label key={srv.id} className="cursor-pointer relative">
                          <input type="checkbox" name="services" value={srv.id} onChange={handleInputChange} className="peer sr-only" />
                          <div className="h-full p-4 rounded-xl border border-slate-300 bg-slate-100/30 hover:bg-slate-100 peer-checked:border-emerald-500 peer-checked:bg-emerald-500/10 transition-all">
                            <div className="w-4 h-4 border border-slate-500 rounded bg-transparent peer-checked:bg-emerald-500 peer-checked:border-emerald-500 absolute top-4 right-4 flex items-center justify-center transition-colors">
                              {formData.services.includes(srv.id) && <svg className="w-3 h-3 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>}
                            </div>
                            <div className="text-sm font-bold text-slate-800 mb-1 pr-6">{srv.id}</div>
                            <div className="text-[10px] text-slate-600 leading-relaxed">{srv.tags}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget & Timeline Slider-style buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-4">Estimated Budget</label>
                      <div className="flex flex-col gap-2">
                        {BUDGETS.map(b => (
                          <label key={b} className="cursor-pointer flex items-center gap-3 p-3 rounded-lg border border-slate-300 bg-slate-100/30 hover:bg-slate-100 peer-checked:border-indigo-500 transition-all">
                            <input type="radio" name="budget" value={b} onChange={handleInputChange} className="peer sr-only" />
                            <div className="w-4 h-4 rounded-full border border-slate-500 peer-checked:border-[5px] peer-checked:border-indigo-500 transition-all"></div>
                            <span className="text-sm text-slate-700 font-medium">{b}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-4">Timeline</label>
                      <div className="flex flex-col gap-2">
                        {TIMELINES.map(t => (
                          <label key={t} className="cursor-pointer flex items-center gap-3 p-3 rounded-lg border border-slate-300 bg-slate-100/30 hover:bg-slate-100 peer-checked:border-emerald-500 transition-all">
                            <input type="radio" name="timeline" value={t} onChange={handleInputChange} className="peer sr-only" />
                            <div className="w-4 h-4 rounded-full border border-slate-500 peer-checked:border-[5px] peer-checked:border-emerald-500 transition-all"></div>
                            <span className="text-sm text-slate-700 font-medium">{t}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Preferred Meeting & NDA */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-2xl bg-slate-100/30 border border-slate-300/50">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-3">Preferred Meeting</label>
                      <select name="meeting" value={formData.meeting} onChange={handleInputChange} className="w-full bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 outline-none">
                        <option value="">Select Platform...</option>
                        {MEETINGS.map(m => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-3">Need an NDA?</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="nda" value="Yes" onChange={handleInputChange} className="text-indigo-500 bg-slate-100 border-slate-300 focus:ring-indigo-500" />
                          <span className="text-sm text-slate-700">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="nda" value="No" onChange={handleInputChange} className="text-indigo-500 bg-slate-100 border-slate-300 focus:ring-indigo-500" />
                          <span className="text-sm text-slate-700">No</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Additional Links & Message */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">Project Brief / Resources (Links)</label>
                    <p className="text-[10px] text-slate-500 mb-3">Paste links to your Google Drive, Dropbox, Figma, GitHub, or existing website.</p>
                    <input type="text" name="links" value={formData.links} onChange={handleInputChange} className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors mb-6" placeholder="https://figma.com/... , https://drive.google.com/..." />
                    
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">Message Details *</label>
                    <textarea name="message" required value={formData.message} onChange={handleInputChange} rows={6} className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none placeholder:text-slate-600" placeholder="Tell me about your idea.&#10;Include:&#10;• Goals&#10;• Target users&#10;• Current challenges"></textarea>
                  </div>

                  {/* Checklist & Submit */}
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${checklist.contact ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300'}`}>
                          {checklist.contact && <svg className="w-3 h-3 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>}
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-wider ${checklist.contact ? 'text-slate-700' : 'text-slate-600'}`}>Contact</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${checklist.project ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300'}`}>
                          {checklist.project && <svg className="w-3 h-3 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>}
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-wider ${checklist.project ? 'text-slate-700' : 'text-slate-600'}`}>Details</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${checklist.budgetTimeline ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300'}`}>
                          {checklist.budgetTimeline && <svg className="w-3 h-3 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>}
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-wider ${checklist.budgetTimeline ? 'text-slate-700' : 'text-slate-600'}`}>Scope</span>
                      </div>
                    </div>
                    
                    <button type="submit" disabled={formState !== 'idle' || readinessScore < 40} className="w-full md:w-auto relative overflow-hidden bg-slate-900 text-white rounded-xl py-3 px-8 font-bold text-sm hover:bg-slate-800 transition-colors disabled:opacity-50 group">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {formState === 'sending' && 'Sending...'}
                        {formState === 'encrypting' && 'Encrypting...'}
                        {formState === 'delivering' && 'Delivering...'}
                        {formState === 'idle' && (
                          <>
                            Send Project Request 
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Book a Meeting & FAQs (Now Full Width) */}
        <div className="mt-20 space-y-8 max-w-5xl mx-auto">
          
          <div className="bg-gradient-to-r from-indigo-50 to-slate-50 border border-indigo-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Prefer to talk directly?</h3>
              <p className="text-sm text-slate-600">Skip the form and book a 30-minute discovery call via Google Meet.</p>
            </div>
            <button onClick={handleBookCall} className="whitespace-nowrap px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all active:scale-95">
              Book a 30-Min Call
            </button>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 ml-4">Frequently Asked Questions</h3>
            <div className="space-y-2">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white/80 border border-slate-200 rounded-xl overflow-hidden">
                  <button type="button" onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-white transition-colors">
                    <span className="font-semibold text-slate-800 text-sm">{faq.q}</span>
                    <svg className={`w-4 h-4 text-slate-600 transform transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Security Banner */}
          <div className="flex items-center justify-center gap-2 pt-8 text-center opacity-60">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
            <p className="text-[11px] font-medium text-slate-600">Your information is securely transmitted via HTTPS. No third-party sharing.</p>
          </div>

        </div>

      </div>
    </div>
  );
}

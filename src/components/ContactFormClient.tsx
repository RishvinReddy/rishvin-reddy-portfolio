'use client';
import React, { useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function ContactFormClient() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    if (!formRef.current) return;
    
    try {
      await emailjs.sendForm(
        'service_vap0e7b',
        'template_0d7egxw',
        formRef.current,
        'mUWYYaTiZhAWgB0TH'
      );
      setFormState('success');
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormState('idle');
      alert("Something went wrong. Please check your connection and try again.");
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pb-24 pt-10"
    >
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-700 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for New Opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 font-display">
            Let&apos;s build something <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">extraordinary.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Whether you have a wild idea, an architectural challenge, or just want to say hi—I&apos;m all ears.
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">
          
          {/* LEFT: Info & Map Bento */}
          <div className="xl:col-span-4 flex flex-col gap-6 lg:gap-8">
            
            {/* Contact Info Card */}
            <motion.div variants={itemVariants} className="relative overflow-hidden rounded-[2rem] bg-white/60 backdrop-blur-2xl border border-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-primary/10 transition-all duration-700"></div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Direct Lines</h3>
              
              <div className="space-y-4 relative z-10">
                <a href="mailto:rishvinreddy@gmail.com" className="flex items-center gap-4 p-3 rounded-2xl bg-white/50 border border-slate-100 hover:bg-white hover:shadow-md hover:border-primary/20 transition-all group/link">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/link:scale-110 group-hover/link:bg-primary group-hover/link:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm text-slate-800 font-semibold group-hover/link:text-primary transition-colors truncate">rishvinreddy@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919848723235" className="flex items-center gap-4 p-3 rounded-2xl bg-white/50 border border-slate-100 hover:bg-white hover:shadow-md hover:border-emerald-500/20 transition-all group/link">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover/link:scale-110 group-hover/link:bg-emerald-500 group-hover/link:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-sm text-slate-800 font-semibold group-hover/link:text-emerald-600 transition-colors">+91 98487 23235</p>
                  </div>
                </a>

                <a href="https://linkedin.com/in/rishvinreddy" target="_blank" rel="noopener" className="flex items-center gap-4 p-3 rounded-2xl bg-white/50 border border-slate-100 hover:bg-white hover:shadow-md hover:border-[#0077b5]/20 transition-all group/link">
                  <div className="w-10 h-10 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] group-hover/link:scale-110 group-hover/link:bg-[#0077b5] group-hover/link:text-white transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.853-3.037-1.854 0-2.137 1.447-2.137 2.943v5.663H8.352V9h3.414v1.561h.049c.476-.9 1.637-1.853 3.369-1.853 3.602 0 4.268 2.37 4.268 5.455v6.289zM5.337 7.433a2.064 2.064 0 110-4.128 2.064 2.064 0 010 4.128zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">LinkedIn</p>
                    <p className="text-sm text-slate-800 font-semibold group-hover/link:text-[#0077b5] transition-colors">in/rishvinreddy</p>
                  </div>
                </a>

                <a href="https://github.com/RishvinReddy" target="_blank" rel="noopener" className="flex items-center gap-4 p-3 rounded-2xl bg-white/50 border border-slate-100 hover:bg-white hover:shadow-md hover:border-slate-800/20 transition-all group/link">
                  <div className="w-10 h-10 rounded-full bg-slate-900/5 flex items-center justify-center text-slate-900 group-hover/link:scale-110 group-hover/link:bg-slate-900 group-hover/link:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">GitHub</p>
                    <p className="text-sm text-slate-800 font-semibold transition-colors">@RishvinReddy</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Map Bento */}
            <motion.div variants={itemVariants} className="relative rounded-[2rem] overflow-hidden bg-slate-900 h-64 xl:flex-1 border border-slate-800 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] group">
              <iframe 
                className="absolute inset-0 w-full h-full opacity-60 mix-blend-luminosity group-hover:opacity-80 group-hover:mix-blend-normal transition-all duration-700" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.850123456789!2d78.11944183674599!3d18.69865706504396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a0b5b5b5b5%3A0x0!2sRishvin%20Location!5e0!3m2!1sen!2sin!4v1700000000000"
                style={{ border: 0 }}>
              </iframe>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-lg">
                <p className="text-xs font-bold text-slate-800 tracking-wider">HYDERABAD, INDIA</p>
                <p className="text-[10px] text-slate-500 font-medium uppercase mt-0.5">Global Operations</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Form Bento */}
          <motion.div variants={itemVariants} className="xl:col-span-8">
            <div className="h-full rounded-[2rem] bg-white/70 backdrop-blur-3xl border border-white/60 p-8 lg:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
              
              {/* Glass Glare */}
              <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
              
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Transmission Received</h3>
                  <p className="text-slate-500 max-w-md mx-auto mb-8 font-medium">I&apos;ll review your details and get back to you within 24-48 hours. Let&apos;s make something great.</p>
                  <button onClick={() => setFormState('idle')} className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group/input">
                      <input type="text" id="name" name="first_name" required className="block w-full px-5 pb-3 pt-6 w-full text-sm text-slate-900 bg-slate-50/50 rounded-2xl border border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:bg-white transition-all peer hover:border-slate-300" placeholder=" " />
                      <label htmlFor="name" className="absolute text-sm text-slate-400 duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary pointer-events-none font-medium">Full Name <span className="text-primary">*</span></label>
                    </div>
                    <div className="relative group/input">
                      <input type="email" id="email" name="email" required className="block w-full px-5 pb-3 pt-6 w-full text-sm text-slate-900 bg-slate-50/50 rounded-2xl border border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:bg-white transition-all peer hover:border-slate-300" placeholder=" " />
                      <label htmlFor="email" className="absolute text-sm text-slate-400 duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary pointer-events-none font-medium">Email Address <span className="text-primary">*</span></label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group/input">
                      <input type="tel" id="phone" name="phone" className="block w-full px-5 pb-3 pt-6 w-full text-sm text-slate-900 bg-slate-50/50 rounded-2xl border border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:bg-white transition-all peer hover:border-slate-300" placeholder=" " />
                      <label htmlFor="phone" className="absolute text-sm text-slate-400 duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary pointer-events-none font-medium">Phone / WhatsApp</label>
                    </div>
                    <div className="relative group/input">
                      <input type="text" id="company" name="company_input" className="block w-full px-5 pb-3 pt-6 w-full text-sm text-slate-900 bg-slate-50/50 rounded-2xl border border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:bg-white transition-all peer hover:border-slate-300" placeholder=" " />
                      <label htmlFor="company" className="absolute text-sm text-slate-400 duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary pointer-events-none font-medium">Company / Org</label>
                    </div>
                  </div>

                  {/* Custom Interactive Toggles */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Inquiry Type</label>
                    <div className="flex flex-wrap gap-2">
                      {['Project', 'Job', 'Collaboration', 'General'].map((tag) => (
                        <label key={tag} className="cursor-pointer relative">
                          <input type="radio" className="peer sr-only" name="inquiry_type" value={tag} required />
                          <div className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-600 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary hover:border-primary/40 transition-all shadow-sm">
                            {tag}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {['Web Dev', 'Backend API', 'AI / ML', 'IoT / Hardware', 'UI / UX Design'].map((tag) => (
                        <label key={tag} className="cursor-pointer relative">
                          <input type="checkbox" className="peer sr-only" name="services" value={tag} />
                          <div className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-600 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary hover:border-primary/40 transition-all shadow-sm">
                            {tag}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group/input">
                      <select id="budget" name="budget" className="block w-full px-5 pb-3 pt-6 text-sm text-slate-900 bg-slate-50/50 rounded-2xl border border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:bg-white transition-all hover:border-slate-300">
                        <option value="Not sure / N/A">Not sure / N/A</option>
                        <option value="< $1,000">&lt; $1,000</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000+">$5,000+</option>
                      </select>
                      <label htmlFor="budget" className="absolute text-sm text-primary transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-5 pointer-events-none font-medium">Budget</label>
                    </div>
                    <div className="relative group/input">
                      <select id="timeline" name="timeline" className="block w-full px-5 pb-3 pt-6 text-sm text-slate-900 bg-slate-50/50 rounded-2xl border border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:bg-white transition-all hover:border-slate-300">
                        <option value="Flexible">Flexible</option>
                        <option value="ASAP">ASAP (Urgent)</option>
                        <option value="1-3 Months">1 - 3 Months</option>
                        <option value="3-6 Months">3 - 6 Months</option>
                      </select>
                      <label htmlFor="timeline" className="absolute text-sm text-primary transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-5 pointer-events-none font-medium">Timeline</label>
                    </div>
                  </div>

                  <div className="relative group/input">
                    <textarea id="message" name="message" required rows={4} className="block w-full px-5 pb-3 pt-6 w-full text-sm text-slate-900 bg-slate-50/50 rounded-2xl border border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:bg-white transition-all peer hover:border-slate-300 resize-none" placeholder=" "></textarea>
                    <label htmlFor="message" className="absolute text-sm text-slate-400 duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary pointer-events-none font-medium">Message Details <span className="text-primary">*</span></label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full relative overflow-hidden group/btn bg-slate-900 text-white rounded-2xl py-4 px-8 font-bold text-lg hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20 disabled:opacity-70 mt-4"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {formState === 'submitting' ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                          Initializing...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </>
                      )}
                    </span>
                    {/* Hover Gradient Sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 z-0"></div>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

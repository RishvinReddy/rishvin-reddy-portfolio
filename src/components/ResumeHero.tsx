"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';

export default function ResumeHero() {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse tracking for 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Subtle tilt range (-4 to 4 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);
  
  // Parallax translation for inner elements
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10px", "10px"]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-10px", "10px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="mb-20 flex flex-col items-center perspective-1000">
      <motion.div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 md:p-14 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5)] border border-white/10"
      >
        {/* Animated Background Gradients & Textures */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "40px 40px", transform: "translateZ(-50px)" }}></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-[100px] pointer-events-none"
          style={{ transform: "translateZ(-20px)" }}
        ></motion.div>
        
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-indigo-500/20 blur-[90px] pointer-events-none"
          style={{ transform: "translateZ(-20px)" }}
        ></motion.div>

        <motion.div 
          style={{ x: translateX, y: translateY, transform: "translateZ(30px)" }}
          className="relative z-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 md:gap-12"
        >
          {/* Avatar with Animated Pulse */}
          <motion.div variants={itemVariants} className="relative shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl relative z-10 bg-slate-800">
              <img src="/icon.png" alt="Rishvin Reddy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-[2rem] bg-primary/30 blur-2xl -z-10 scale-90"></div>
            <span className="absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center z-20">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-900"></span>
            </span>
          </motion.div>

          {/* Name & Identity */}
          <div className="flex-1 flex flex-col items-center md:items-start w-full">
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-3">
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">Rishvin Reddy</h1>
              <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Available
              </span>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-slate-400 font-mono text-sm md:text-base mb-8 max-w-xl">
              Software Engineer specializing in <span className="text-primary font-bold">IoT</span>, <span className="text-indigo-400 font-bold">Cybersecurity</span> & <span className="text-white font-bold">Full Stack Dev</span>
            </motion.p>

            {/* Premium Glassmorphic Stat Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
              {[
                { label: "Repositories", value: "26+" },
                { label: "Projects Built", value: "18+" },
                { label: "Languages", value: "7" },
                { label: "Core Domains", value: "3" }
              ].map((stat, i) => (
                <div key={i} className="group relative overflow-hidden bg-white/5 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <p className="text-2xl md:text-3xl font-black text-white relative z-10 tracking-tighter">{stat.value}</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1.5 relative z-10 font-bold">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Chevron */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-12 flex flex-col items-center justify-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('dynamic-resume-section')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">View Resumes</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full bg-slate-100/50 flex items-center justify-center text-slate-500 shadow-sm border border-slate-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

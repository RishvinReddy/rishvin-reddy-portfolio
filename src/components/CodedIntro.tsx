"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RishvinSignature } from "@/components/handwritten";

const greetings = [
  { text: "Hello", lang: "en" },
  { text: "नमस्ते", lang: "hi" },
  { text: "నమస్కారం", lang: "te" },
  { text: "Bonjour", lang: "fr" },
  { text: "Hola", lang: "es" },
  { text: "こんにちは", lang: "ja" },
  { text: "안녕하세요", lang: "ko" },
  { text: "你好", lang: "zh" },
  { text: "مرحبا", lang: "ar" },
  { text: "Hello.", lang: "en-final" },
];

export function CodedIntro() {
  const [showIntro, setShowIntro] = useState(true); // Default to true to prevent initial flash
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const finishIntro = useCallback(() => {
    setShowIntro(false);
    sessionStorage.setItem("introPlayed", "true");
    document.body.style.overflow = ""; // Restore scroll
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
    const hasPlayed = sessionStorage.getItem("introPlayed");
    if (hasPlayed) {
      setShowIntro(false);
    } else {
      // Lock scroll while intro is playing
      document.body.style.overflow = "hidden";
    }
  }, []);

  // Sequence orchestration
  useEffect(() => {
    if (!showIntro || !isClient || sessionStorage.getItem("introPlayed")) return;

    if (currentIndex < greetings.length) {
      const isLast = currentIndex === greetings.length - 1;
      const duration = isLast ? 1000 : 220;

      const timer = setTimeout(() => {
        if (!isLast) {
          setCurrentIndex(prev => prev + 1);
        } else {
          finishIntro();
        }
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, showIntro, isClient, finishIntro]);

  // If client has mounted and it shouldn't show, don't render anything (prevents exit animation on refresh)
  if (isClient && !showIntro) {
    return null;
  }

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          key="intro-container"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[99999] bg-[#0f172a] flex items-center justify-center overflow-hidden select-none"
        >
          {/* Subtle noise/texture background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('/noise.png')" }}></div>

          {/* Ambient background glow accents */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none -top-24 -left-24" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none -bottom-24 -right-24" />

          <div className="relative flex flex-col items-center justify-center w-full h-full px-4">
            {/* Multilingual Greetings Box (fixed height to prevent layout shift) */}
            <div className="relative w-full h-16 sm:h-20 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isClient && (
                  <motion.h1
                    key={currentIndex}
                    initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                    transition={{ duration: 0.18, ease: "easeInOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight flex items-center justify-center"
                    style={{
                      fontFamily: greetings[currentIndex].lang === 'ar' ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    <span className="inline-block w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-400 mr-3 align-middle animate-pulse" />
                    {greetings[currentIndex].text}
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>

            {/* Rishvin Reddy Signature with authentic handwritten pen stroke reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative flex flex-col items-center justify-center mt-6 sm:mt-8"
            >
              {/* Soft ambient signature glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-cyan-500/10 blur-2xl rounded-full pointer-events-none" />

              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{
                  duration: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.25,
                }}
                className="relative"
              >
                <RishvinSignature
                  className="w-48 sm:w-60 md:w-72 h-auto text-white/95 drop-shadow-[0_2px_14px_rgba(255,255,255,0.25)] -rotate-1"
                />
              </motion.div>

              {/* Subscript seal */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="flex items-center gap-2 mt-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.28em] text-slate-400/80"
              >
                <span className="w-5 h-[1px] bg-slate-700" />
                <span>Rishvin Reddy</span>
                <span className="w-5 h-[1px] bg-slate-700" />
              </motion.div>
            </motion.div>
          </div>

          {isClient && (
            <button
              onClick={finishIntro}
              className="absolute bottom-8 right-8 z-[100000] px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition-all shadow-2xl"
            >
              Skip
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

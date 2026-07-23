"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      const duration = isLast ? 800 : 250; 
      
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
          className="fixed inset-0 z-[99999] bg-[#0f172a] flex items-center justify-center overflow-hidden"
        >
          {/* Subtle noise/texture background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('/noise.png')" }}></div>

          <div className="relative flex items-center justify-center w-full h-full">
            <AnimatePresence mode="popLayout">
              {isClient && (
                <motion.h1
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight"
                  style={{
                    fontFamily: greetings[currentIndex].lang === 'ar' ? 'Arial, sans-serif' : 'inherit'
                  }}
                >
                  {greetings[currentIndex].text}
                </motion.h1>
              )}
            </AnimatePresence>
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

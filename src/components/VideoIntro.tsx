"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function VideoIntro() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("introPlayed");
    if (!hasPlayed) {
      setShowIntro(true);
    }
  }, []);

  const finishIntro = () => {
    setShowIntro(false);
    sessionStorage.setItem("introPlayed", "true");
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          key="video-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] bg-background flex items-center justify-center overflow-hidden"
        >
          <video
            className="w-full h-full object-cover opacity-90"
            autoPlay
            muted
            playsInline
            onEnded={finishIntro}
          >
            <source src="/skiper8.mp4" type="video/mp4" />
          </video>
          
          <button
            onClick={finishIntro}
            className="absolute bottom-8 right-8 z-[100000] px-6 py-2 rounded-full border border-primary-800/20 bg-background/50 backdrop-blur-md text-primary-950 text-sm font-semibold hover:bg-primary-900 hover:text-background transition-all shadow-2xl"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

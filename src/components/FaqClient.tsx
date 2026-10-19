"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Briefcase, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import faqs from "../../public/data/faq.json";
import {
  HandUnderline,
  HandwrittenNote,
  EngineeringDoodle,
} from "@/components/handwritten";

export default function FaqClient() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-70 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-70" />
      </div>

      <div className="relative z-10 max-w-[120rem] mx-auto px-6 py-24 sm:py-32">
        {/* Header Section */}
        <div className="text-center mb-20 relative max-w-4xl mx-auto">
          {/* Engineering Doodles Watermark */}
          <div className="absolute top-0 right-4 opacity-10 dark:opacity-20 pointer-events-none hidden lg:block" aria-hidden="true">
            <EngineeringDoodle type="connected-nodes" className="w-28 h-28 text-purple-500" />
          </div>
          <div className="absolute -bottom-4 left-4 opacity-10 dark:opacity-20 pointer-events-none hidden lg:block" aria-hidden="true">
            <EngineeringDoodle type="terminal" className="w-24 h-24 text-blue-500" />
          </div>

          <div className="relative inline-block mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
              Knowledge Base
            </div>
            <div className="hidden md:block absolute -right-48 top-1/2 -translate-y-1/2 pointer-events-none">
              <HandwrittenNote rotation={-2} color="blue" arrowDirection="curved-down-left">
                transparent answers
              </HandwrittenNote>
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Frequently Asked{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 pb-1">
              Questions
              <HandUnderline variant="scribble" color="#8b5cf6" className="-bottom-2" />
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-4xl mx-auto"
          >
            Everything you need to know about my services, process, and how we can work together to build exceptional products.
          </motion.p>
        </div>

        {/* Quick Help Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
              title: "Specialisations",
              desc: "IoT, Blockchain, Cyber Security & Product Engineering",
              note: null
            },
            {
              icon: <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
              title: "Typical Response",
              desc: "I reply to new inquiries within 1–2 business days.",
              note: "typically < 12h"
            },
            {
              icon: <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />,
              title: "Ready to start?",
              desc: "Share a brief on the contact page and I'll schedule a call.",
              note: null
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="relative bg-gray-50/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 group shadow-sm dark:shadow-none"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white dark:bg-white/5 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm dark:shadow-none">
                  {card.icon}
                </div>
                {card.note && (
                  <HandwrittenNote rotation={1} color="emerald" className="text-xs">
                    {card.note}
                  </HandwrittenNote>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 max-w-[90rem] mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
              className="bg-gray-50/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm shadow-sm dark:shadow-none"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 dark:hover:bg-white/10 transition-colors focus:outline-none"
              >
                <span className="text-lg font-medium pr-8 text-gray-900 dark:text-gray-100">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0 text-gray-500 dark:text-gray-400"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div 
                      className="p-6 pt-0 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-200 dark:border-white/5 mt-2"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 backdrop-blur-md mb-6">
            <div className="px-6 py-2 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 text-sm text-gray-700 dark:text-gray-300">
              Still have questions?
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Let&apos;s build something great together.</h2>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          >
            Get in touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

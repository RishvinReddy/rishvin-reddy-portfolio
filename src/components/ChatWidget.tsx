'use client';

import React, { useState, useRef, useEffect } from 'react';
import { processUserMessage, Context } from '@/ai/engine';
import { marked } from 'marked';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      content: "Hello! I am Rishvin's local AI assistant. Ask me about his projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), sender: 'user', content: userMessage },
    ]);

    // Construct mock context for the global widget (no active file)
    const context: Context = {
      activeProject: undefined,
      activeFileContent: undefined,
    };

    // Process via local AI engine
    const response = processUserMessage(userMessage, context);

    // Simulate slight typing delay for realism
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: 'bot', content: response.response },
      ]);
    }, 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-24 right-8 z-50 flex flex-col items-end">
      {/* Chat Popup */}
      <div 
        className={`transition-all duration-300 ease-in-out transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 mb-4' : 'scale-90 opacity-0 pointer-events-none mb-0 absolute bottom-16'
        }`}
      >
        <div className="w-[90vw] sm:w-[650px] h-[600px] max-h-[85vh] flex flex-col glass-panel border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl bg-black/60">
          
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]"></div>
              <h3 className="font-bold tracking-widest text-sm uppercase text-white">Rishvin AI</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 custom-scrollbar">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'}`}
              >
                <div 
                  className={`px-4 py-3 rounded-2xl ${
                    msg.sender === 'user' 
                      ? 'bg-primary/20 border border-primary/30 text-white rounded-br-sm' 
                      : 'bg-white/5 border border-white/10 text-slate-200 rounded-bl-sm prose prose-invert prose-sm max-w-none'
                  }`}
                  dangerouslySetInnerHTML={msg.sender === 'bot' ? { __html: marked(msg.content) as string } : undefined}
                >
                  {msg.sender === 'user' ? msg.content : null}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-black/40">
            <div className="relative flex items-center">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 resize-none h-[46px] min-h-[46px] max-h-[120px] custom-scrollbar"
                rows={1}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="absolute right-2 p-2 text-primary hover:text-primary-light disabled:text-slate-600 disabled:hover:text-slate-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border ${
          isOpen 
            ? 'bg-white/10 border-white/20 rotate-90 scale-0 opacity-0 pointer-events-none' 
            : 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 border-white/20 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] backdrop-blur-md'
        }`}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
}

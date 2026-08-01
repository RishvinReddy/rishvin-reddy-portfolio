"use client";
import React, { useState } from 'react';

interface ResumeOption {
  name: string;
  url: string;
}

const resumes: ResumeOption[] = [
  {
    name: "Software Engineering (Full Stack)",
    url: "/resumes/SoftwareEngineering _ FullStack Resume/Software_Engineering_Full_Stack_Resume.pdf"
  }
];

export default function ResumeViewer() {
  const [activeResume, setActiveResume] = useState(resumes[0]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {resumes.map((resume, idx) => (
          <button
            key={idx}
            onClick={() => setActiveResume(resume)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 border ${
              activeResume.url === resume.url 
                ? 'bg-primary text-white border-primary shadow-md' 
                : 'bg-white text-slate-600 border-slate-200 hover:border-primary/50'
            }`}
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              {resume.name}
            </span>
          </button>
        ))}
      </div>

      <div className="w-full h-[600px] md:h-[800px] bg-slate-50 rounded-xl overflow-hidden border border-slate-200 relative shadow-inner mt-6">
        <iframe 
          className="w-full h-full relative z-10" 
          src={activeResume.url} 
          frameBorder="0"
          title={`Resume - ${activeResume.name}`}
        ></iframe>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 text-slate-500 z-0">
          <svg className="w-12 h-12 mb-2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          <p>Loading PDF preview...</p>
          <a href={activeResume.url} target="_blank" rel="noopener noreferrer" className="mt-4 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-rose-600 transition">Open PDF directly</a>
        </div>
      </div>
    </>
  );
}

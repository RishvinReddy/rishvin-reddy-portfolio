import ResumeViewer from '@/components/ResumeViewer';
import ResumeHero from '@/components/ResumeHero';
import { Metadata, Viewport } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Resume & Experience | Erolla Rishvin Reddy | Rishvin Labs",
  description: "View the complete professional resume of Erolla Rishvin Reddy. Explore deep engineering experience as Founder of Rishvin Labs, Pega Platform Intern at Pegasystems, Freelance Full-Stack Developer, and Co-Inventor of a Government of India Design Patent for an IoT Connectivity Device. Specializing in Cybersecurity, IoT, Blockchain, and Full-Stack Engineering.",
  applicationName: "Rishvin Reddy Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "resume page", "Rishvin Reddy resume", "Erolla Rishvin Reddy resume", 
    "Software Engineer resume", "Cybersecurity resume", "IoT resume", "Blockchain resume",
    "Woxsen University", "Rishvin Labs", "Tech Portfolio", "Engineering",
    "Rishvin Labs Founder", "Founder and Software Engineer Rishvin Labs",
    "Pega Platform Intern", "Pegasystems Internship", "BPM", "Workflow Automation", "Low-Code Development",
    "Freelance Full-Stack Developer", "Fiverr Freelance Developer", "React Developer", "Node.js Developer",
    "IoT Connectivity Device Patent", "Co-Inventor IoT Patent", "Government of India Design Patent",
    "Embedded Systems Experience", "Hardware Design", "Web Application Development",
    "B.Tech CSE Student", "Woxsen University Computer Science", "Cybersecurity Analyst", "Security Engineering",
    "Software Engineering Internship", "Full Stack Development Experience", "API Integration", "Database Architecture",
    "AI Security Guardian", "Smart Irrigation IoT", "Biometric Voting System",
    "Next.js", "TypeScript", "Python", "Solidity", "MongoDB", "Express.js", "REST APIs",
    "Vulnerability Assessment", "Penetration Testing", "Security Operations", "Threat Detection",
    "Network Security", "Cloud Security", "DevSecOps", "Smart Contracts", "Decentralized Applications",
    "Student Developer India", "Engineering Student India", "Software Developer Hyderabad", "IoT Engineer India",
    "Hire Cybersecurity Intern India",
    "Freelance Full Stack Developer Resume",
    "Pega Platform Certified System Architect Resume",
    "BPM Workflow Automation Expert",
    "Low-Code Platform Developer Resume",
    "IoT Connectivity Device Patent Holder",
    "Woxsen University CSE Graduate 2026",
    "Rishvin Labs Founder CEO Resume",
    "Data Lake Solutions Cyber Security Intern",
    "Penetration Tester Resume",
    "Threat Intelligence Analyst Resume",
    "Vulnerability Assessment Intern",
    "React Next.js Developer Resume",
    "Node.js Backend Engineer Resume",
    "TypeScript Frontend Developer Resume",
    "Python Automation Scripter Resume",
    "Embedded Systems Engineer Resume",
    "Blockchain Smart Contract Developer Resume",
    "Solidity Web3 Developer Resume",
    "AWS Cloud Practitioner Resume",
    "Fiverr Top Rated Web Developer",
    "Agile Software Development Intern",
    "Technical Documentation Writer",
    "Hardware Architecture Designer Resume",
    "Network Security Engineer Resume",
    "Information Security Analyst Resume",
    "Cyber Defense Strategy Intern",
    "Open Source Contributor Resume",
    "Tech Internship Candidate Hyderabad",
    "Software Engineering Fresher India",
    "Pre-final Year B.Tech CSE Resume",
    "Woxsen University Top Alumni",
    "Research Assistant AI Lab",
    "Academic Recommendations Tech",
    "High Performing Engineering Student",
    "Mentored by Dr. Hemachandran K",
    "Innovative Hardware Solutions Developer",
    "Rishvin Reddy CV",
    "Erolla Rishvin Reddy Curriculum Vitae",
    "Rishvin Reddy Work Experience",
    "Rishvin Reddy Internships",
    "Rishvin Reddy Education",
    "Erolla Rishvin Reddy Qualifications",
    "Hire Rishvin",
    "Rishvin Reddy Contact Info",
    "Rishvin Reddy PDF Resume"
  ],
  authors: [{ name: "Erolla Rishvin Reddy", url: "https://rishvinreddy.vercel.app" }],
  creator: "Erolla Rishvin Reddy",
  publisher: "Rishvin Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://rishvinreddy.vercel.app/resume",
    languages: {
      "en-US": "https://rishvinreddy.vercel.app/resume",
      "en-IN": "https://rishvinreddy.vercel.app/resume",
    },
  },
  openGraph: {
    title: "Resume & Experience | Erolla Rishvin Reddy | Rishvin Labs",
    description: "Explore Rishvin Reddy's professional engineering journey: Founder of Rishvin Labs, Pegasystems Intern (Pega Platform), Freelance Developer, and Co-Inventor of a Govt. of India IoT Patent.",
    url: "https://rishvinreddy.vercel.app/resume",
    siteName: "Rishvin Reddy Engineering Portfolio",
    images: [
      {
        url: "https://rishvinreddy.vercel.app/icon.png",
        width: 1200,
        height: 630,
        alt: "Resume | Rishvin Labs - Rishvin Reddy",
      },
      {
        url: "https://rishvinreddy.vercel.app/icon.png",
        width: 800,
        height: 600,
        alt: "Resume | Rishvin Labs Alternate - Rishvin Reddy",
      }
    ],
    locale: "en_IN",
    type: "profile",
    emails: ["rishvinreddy@gmail.com"],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume & Experience | Erolla Rishvin Reddy | Rishvin Labs",
    description: "Explore Rishvin Reddy's professional engineering journey: Founder of Rishvin Labs, Pegasystems Intern (Pega Platform), Freelance Developer, and Co-Inventor of a Govt. of India IoT Patent.",
    siteId: "1467726470533754880",
    creator: "@RishvinReddy",
    creatorId: "1467726470533754880",
    images: ["https://rishvinreddy.vercel.app/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/icon.png",
    },
  },
  manifest: "/manifest.json",
  category: "technology",
  archives: ["https://rishvinreddy.vercel.app/archives"],
  assets: ["https://rishvinreddy.vercel.app/assets"],
  bookmarks: ["https://rishvinreddy.vercel.app/bookmarks"],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
};


export default function Resume() {
  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(
{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://rishvinreddy.vercel.app/#person",
              "name": "Erolla Rishvin Reddy",
              "url": "https://rishvinreddy.vercel.app/",
              "image": "https://rishvinreddy.vercel.app/icon.png",
              "sameAs": [
                "https://github.com/RishvinReddy",
                "https://www.linkedin.com/in/rishvin-reddy/"
              ],
              "jobTitle": [
                "Software Engineer",
                "Cybersecurity Analyst",
                "IoT Developer",
                "Full-Stack Developer",
                "Founder"
              ],
              "hasOccupation": [
                {
                  "@type": "Occupation",
                  "name": "Technology Intern – Cyber Security",
                  "occupationLocation": { "@type": "Place", "name": "India (Remote)" }
                },
                {
                  "@type": "Occupation",
                  "name": "Freelance Full-Stack Developer",
                  "occupationLocation": { "@type": "Place", "name": "Remote" }
                },
                {
                  "@type": "Occupation",
                  "name": "Founder & Software Engineer",
                  "occupationLocation": { "@type": "Place", "name": "Hyderabad, India" }
                },
                {
                  "@type": "Occupation",
                  "name": "Pega Platform Intern",
                  "occupationLocation": { "@type": "Place", "name": "Remote" }
                }
              ],
              "worksFor": [
                {
                  "@type": "EmployeeRole",
                  "roleName": "Technology Intern – Cyber Security",
                  "startDate": "2026-08",
                  "description": "Cybersecurity research, security assessments, vulnerability analysis, and risk identification.",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Data Lake Solutions"
                  }
                },
                {
                  "@type": "EmployeeRole",
                  "roleName": "Freelance Full-Stack Developer",
                  "startDate": "2026-07",
                  "description": "Designing and developing responsive full-stack web applications using React, Node.js, Express.js, TypeScript.",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Fiverr"
                  }
                },
                {
                  "@type": "EmployeeRole",
                  "roleName": "Founder & Software Engineer",
                  "startDate": "2026-04",
                  "description": "Independent software engineering venture focused on innovative products in cybersecurity, IoT, blockchain.",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Rishvin Labs"
                  }
                },
                {
                  "@type": "EmployeeRole",
                  "roleName": "Pega Platform Intern",
                  "startDate": "2026-08",
                  "endDate": "2026-09",
                  "description": "Selected for Pegasystems National Internship Program. 60 hours of industry-integrated learning.",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Pegasystems"
                  }
                }
              ],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Woxsen University",
                "department": "Computer Science and Engineering"
              },
              "knowsAbout": [
                "Cybersecurity", "Internet of Things (IoT)", "Blockchain", "Full-Stack Development",
                "BPM", "Workflow Automation", "Low-Code Development", "Embedded Systems", "Hardware Design",
                "React", "Node.js", "TypeScript", "Python", "Solidity", "Security Research", "Vulnerability Analysis",
                "Threat Intelligence", "Security Assessment", "Pega Platform", "GenAI", "Agentic AI"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Patent",
                  "name": "IoT Connectivity Device Design Patent",
                  "description": "Co-Inventor of a Government of India Design Patent for an IoT Connectivity Device."
                }
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://rishvinreddy.vercel.app/#website",
              "url": "https://rishvinreddy.vercel.app/",
              "name": "Rishvin Reddy Portfolio",
              "description": "Software Engineering, Cybersecurity, IoT & Blockchain Portfolio",
              "publisher": {
                "@id": "https://rishvinreddy.vercel.app/#person"
              },
              "inLanguage": "en-US"
            },
            {
              "@type": "ProfilePage",
              "@id": "https://rishvinreddy.vercel.app/resume/#webpage",
              "url": "https://rishvinreddy.vercel.app/resume",
              "name": "Resume & Experience | Erolla Rishvin Reddy",
              "isPartOf": {
                "@id": "https://rishvinreddy.vercel.app/#website"
              },
              "about": {
                "@id": "https://rishvinreddy.vercel.app/#person"
              },
              "description": "Professional engineering resume of Erolla Rishvin Reddy, highlighting experience at Rishvin Labs, Pegasystems, and IoT innovations.",
              "mainEntity": {
                "@id": "https://rishvinreddy.vercel.app/#person"
              }
            }
          ]
        }
) }}
      />

      {/*  ── Header v2 Scripts ──  */}
    

      {/* Dynamic Mesh Background */}
      <div className="fixed inset-0 -z-50 bg-slate-50 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[80%] h-[80%] rounded-full bg-blue-500/10 blur-[150px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
      </div>

    {/*  ===== Header Spacer (since header is fixed) =====  */}
    <div className="h-12 shrink-0"></div>


  <main className="pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-[120rem]">


    {/*  ═══════════════════════════════════════════════
         SECTION 1 — HERO DEVELOPER PROFILE HEADER
    ════════════════════════════════════════════════  */}
    <ResumeHero />

    {/*  ─ Section Divider ─  */}
    <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>



    
      {/*  ───────────────────────────────────────────────────────────────────────────
           DYNAMIC RESUME VIEWER
      ───────────────────────────────────────────────────────────────────────────  */}
      <section id="dynamic-resume-section" className="mb-10 scroll-reveal">
        <div className="card-premium p-6 md:p-8 flex flex-col gap-6 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">Official Resumes</h2>
              <p className="text-sm text-slate-500 mt-1">Select a resume to view or download instantly.</p>
            </div>
            {/*  Loading indicator placeholder (if needed)  */}
          </div>
          
          <ResumeViewer />
        </div>
      </section>

      {/*  ─ Section Divider ─  */}
      <div className="section-divider" aria-hidden="true"><span className="divider-gem"></span></div>
      
    </main>

  {/*  === ULTIMATE CTA & NEWSLETTER (Combined Premium Footer Capstone) ===  */}
  <section className="bg-slate-900 relative pt-8 pb-8 overflow-hidden border-t border-slate-800/50">
    

    

    {/*  Infinite Scrolling Tech Marquee  */}
    <div className="mt-4 overflow-hidden relative w-full reveal"
      style={{ animationDelay: "300ms" }}>
      <div
        className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none">
      </div>
      <div
        className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none">
      </div>

      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] text-center mb-6">Expertise &
        Technologies</p>

      <div className="flex whitespace-nowrap overflow-hidden">
        {/*  Marquee Track (Double for loop)  */}
        <div className="flex items-center gap-12 sm:gap-20 min-w-max px-6" style={{ animation: "marquee 40s linear infinite" }}>
          {/*  Set 1  */}
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Python</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">React.js</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Node.js</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">AWS</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Docker</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">TypeScript</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Solidity</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">MongoDB</span>
          {/*  Set 2  */}
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Python</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">React.js</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Node.js</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">AWS</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Docker</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">TypeScript</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">Solidity</span>
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-800 hover:text-slate-600 transition-colors cursor-default">MongoDB</span>
        </div>
      </div>
    </div>
  </section>

{/*  ── Main Footer Body ──  */}
    </>
  );
}

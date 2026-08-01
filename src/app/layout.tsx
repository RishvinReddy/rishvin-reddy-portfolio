import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://rishvinreddy.vercel.app"),
  title: "Rishvin Reddy | Software Engineer, IoT, Blockchain & Cybersecurity",
  description: "Official portfolio of Erolla Rishvin Reddy, B.Tech CSE student at Woxsen University specializing in Software Engineering, IoT, Blockchain, Cybersecurity, Full Stack Development, and innovative engineering projects.",
  keywords: "Rishvin Reddy, Erolla Rishvin Reddy, Rishvin Reddy Portfolio, Erolla Rishvin Reddy Portfolio, Rishvin Reddy Developer, Rishvin Reddy Software Engineer, Rishvin Reddy Cybersecurity, Rishvin Reddy GitHub, Rishvin Reddy Woxsen University, Rishvin Labs, Rishvin Labs Founder, Founder of Rishvin Labs, Student Developer India, Engineering Student India, Computer Science Student India, B.Tech CSE Student, BTech CSE Student, Computer Science Engineering Student, CSE Student India, Woxsen University Student, Woxsen University Developer, Woxsen University Engineering Student, School of Technology Woxsen University, B.Tech Computer Science Engineering, B.Tech CSE Blockchain IoT Cybersecurity, Blockchain IoT Cybersecurity Student, Software Engineer, Software Developer, Software Engineering Student, Aspiring Software Engineer, Student Software Engineer, Junior Software Developer, Full-Stack Developer, Full Stack Developer, Full-Stack Engineer, Frontend Developer, Backend Developer, Web Developer, Web Application Developer, JavaScript Developer, Python Developer, Java Developer, PHP Developer, Node.js Developer, HTML CSS JavaScript Developer, Responsive Web Developer, GitHub Developer, Open Source Developer, Cybersecurity, Cybersecurity Engineer, Cybersecurity Student, Cybersecurity Developer, Cyber Security Engineer, Cyber Security Student, Information Security, Information Security Student, Application Security, Application Security Engineer, Web Security, Web Application Security, Network Security, Cloud Security, API Security, Secure Software Development, Secure Coding, Security Engineering, Security Automation, Security Research, Security Analyst, SOC Analyst, Threat Detection, Threat Intelligence, Vulnerability Assessment, Vulnerability Management, Penetration Testing, Ethical Hacking, Digital Forensics, Incident Response, Attack Surface Management, OWASP, OWASP Top 10, Burp Suite, PortSwigger, XSS Security, SQL Injection Security, Authentication Security, IoT Security, Blockchain Security, AI Security, DevSecOps, Security Operations, IoT Developer, IoT Engineer, IoT Developer India, IoT Engineer India, Internet of Things Developer, Internet of Things Engineer, Embedded Systems Developer, Embedded Systems Engineer, Arduino Developer, Arduino IoT Developer, ESP32 Developer, ESP8266 Developer, Sensor Systems Developer, Smart Systems Developer, Connected Devices Developer, IoT Automation, IoT Monitoring Systems, Smart Agriculture IoT, Smart Irrigation System, Soil Health Monitoring, Environmental Monitoring IoT, Edge Computing, Embedded IoT Systems, Blockchain Developer, Blockchain Engineer, Blockchain Developer India, Blockchain Student, Web3 Developer, Web3 Engineer, Decentralized Applications, DApp Developer, Smart Contract Developer, Smart Contracts, Ethereum Developer, Blockchain Applications, Distributed Ledger Technology, Decentralized Systems, Full Stack Development, Frontend Development, Backend Development, Web Development, Responsive Web Design, Modern Web Development, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, React, ReactJS, Node.js, Express.js, REST API, RESTful APIs, API Development, PHP, MySQL, SQLite, PostgreSQL, Database Design, Database Management Systems, DBMS, SQL Developer, Git, GitHub, GitHub Pages, Linux, Docker, n8n, Workflow Automation, Automation Engineer, Developer Automation, AI Automation, API Automation, GitHub Automation, LinkedIn Automation, n8n Developer, n8n Workflow Developer, AI Workflow Automation, Intelligent Automation, Arduino, ESP32, ESP8266, Tinkercad, Node-RED, MQTT, Sensors and Actuators, Embedded C, C Programming, C++, Java, Python, Data Structures and Algorithms, DSA, Algorithm Design, Object Oriented Programming, OOP, Software Architecture, System Design, Database Architecture, Secure Architecture, Production Oriented Architecture, Distributed Systems, AI Security Guardian, AI Security Automation, Cybersecurity Automation, Automated Vulnerability Scanning, Attack Surface Discovery, Threat Intelligence Automation, Security Orchestration, Security Monitoring, Multi Tenant Security Platform, Smart Irrigation System IoT, Soil Health Monitoring System, VoteSafe Biometric Voting System, Biometric Voting System, Fingerprint Voting System, Foodie Food Delivery System, Online Food Delivery System, Text Search Engine, Trie Data Structure Project, KMP Algorithm Project, ReadNest, Bookstore Management System, FinVault, Personal Finance Manager, Financial Operating System, Privacy First Finance App, Electron Desktop App, Electron Developer, SQLite Desktop Application, AI YouTube Automation, YouTube Automation Pipeline, AI Content Factory, Content Automation Workflow, GitHub to LinkedIn Automation, n8n AI Automation, Engineering Portfolio, Developer Portfolio, Software Engineer Portfolio, Cybersecurity Portfolio, IoT Developer Portfolio, Blockchain Developer Portfolio, Full Stack Developer Portfolio, Student Developer Portfolio, Computer Science Portfolio, BTech Student Portfolio, Technical Portfolio, Project Portfolio, GitHub Portfolio, Personal Portfolio Website, Developer Website India, Software Developer India, Software Engineer India, Cybersecurity Engineer India, Cybersecurity Student India, IoT Developer India, Blockchain Developer India, Full Stack Developer India, Web Developer India, Engineering Student India, Computer Science Student India, Technology Student India, Developer Hyderabad, Software Developer Hyderabad, Software Engineer Hyderabad, Cybersecurity Hyderabad, IoT Developer Hyderabad, Blockchain Developer Hyderabad, Technology Enthusiast India, Engineering Innovator, Student Innovator, Tech Founder India, Student Founder India, Young Entrepreneur India, Technology Entrepreneur, Rishvin Labs Technology, Rishvin Labs Engineering, Rishvin Labs Software, Rishvin Labs Cybersecurity, Rishvin Labs IoT, Rishvin Labs Blockchain, Industry Track Student, Internship Ready Developer, Software Engineering Intern, Cybersecurity Intern, IoT Intern, Blockchain Intern, Full Stack Developer Intern, Web Development Intern, Computer Science Intern, Engineering Intern India, Technology Intern India, 2028 Computer Science Graduate, 2028 Engineering Graduate, BTech 2028, CSE 2028, Woxsen University 2028, CGPA 9.01, High CGPA Engineering Student, Cybersecurity IoT Blockchain, Blockchain IoT and Cybersecurity, Software Engineering Cybersecurity, IoT Blockchain Developer, Secure Full Stack Developer, Security Focused Software Engineer, Cyber Physical Systems, Emerging Technologies, Future Technology Developer, Engineering Technology Portfolio, Website Design Internship, Web Development Internship, Website Design and Development Intern, Front End Development Intern, UI/UX Design Intern, Web Development Certificate, Certified Web Developer, Certified Web Designer, Professional Web Development Training, Intern at Web Development Company, Website Builder Intern, 2026 Web Design Internship, Software Engineering Intern 2026, Full Stack Web Development Internship",
  authors: [{ name: "Erolla Rishvin Reddy" }],
  creator: "Erolla Rishvin Reddy",
  publisher: "Rishvin Reddy",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rishvinreddy.vercel.app/",
    siteName: "Rishvin Reddy Portfolio",
    title: "Rishvin Reddy | Software Engineer, IoT, Blockchain & Cybersecurity",
    description: "Official portfolio of Erolla Rishvin Reddy, B.Tech CSE student at Woxsen University specializing in Software Engineering, IoT, Blockchain, Cybersecurity, Full Stack Development, and innovative engineering projects.",
    images: [{ url: "https://rishvinreddy.vercel.app/icon.png", width: 1200, height: 630, alt: "Rishvin Reddy Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RishvinReddy",
    creator: "@RishvinReddy",
    title: "Rishvin Reddy | Software Engineer, IoT, Blockchain & Cybersecurity",
    description: "Official portfolio of Erolla Rishvin Reddy, B.Tech CSE student at Woxsen University specializing in Software Engineering, IoT, Blockchain, Cybersecurity, Full Stack Development, and innovative engineering projects.",
    images: ["https://rishvinreddy.vercel.app/icon.png"],
  },
  icons: {
    icon: "/icon.png",
  },
  verification: {
    google: "gqSeJRumXVEo6URkxbldpICOXZ9OBRZ3gs-B-9Wu-4k",
  },
  alternates: {
    canonical: "https://rishvinreddy.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://rishvinreddy.vercel.app/#person",
                "name": "Erolla Rishvin Reddy",
                "alternateName": ["Rishvin Reddy", "Rishvin"],
                "url": "https://rishvinreddy.vercel.app",
                "image": "https://rishvinreddy.vercel.app/profile.jpg",
                "jobTitle": "Software Engineer, Web Developer & Security Researcher",
                "email": "mailto:rishvinreddy@gmail.com",
                "worksFor": {
                  "@id": "https://rishvinreddy.vercel.app/#organization"
                },
                "alumniOf": {
                  "@type": "CollegeOrUniversity",
                  "name": "Woxsen University"
                },
                "knowsAbout": [
                  "Next.js", "TypeScript", "ESP32", "Hyperledger Fabric", "MQTT", "IPFS", "Solidity", "Python", "Node.js", "Cybersecurity", "IoT", "Web Design", "Web Development", "UI/UX", "Frontend Web Development"
                ],
                "sameAs": [
                  "https://github.com/RishvinReddy",
                  "https://linkedin.com/in/rishvinreddy"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://rishvinreddy.vercel.app/#organization",
                "name": "Rishvin Labs",
                "url": "https://rishvinreddy.vercel.app",
                "logo": "https://rishvinreddy.vercel.app/icon.png",
                "foundingDate": "2023",
                "industry": "Software Engineering, Cybersecurity, IoT",
                "description": "Technology laboratory and development studio focused on engineering secure architectures, distributed systems, and hardware-software integration.",
                "founder": {
                  "@id": "https://rishvinreddy.vercel.app/#person"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "rishvinreddy@gmail.com",
                  "contactType": "customer support"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://rishvinreddy.vercel.app/#website",
                "url": "https://rishvinreddy.vercel.app/",
                "name": "Rishvin Reddy Portfolio",
                "publisher": {
                  "@id": "https://rishvinreddy.vercel.app/#person"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://rishvinreddy.vercel.app/portfolio?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ])
          }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

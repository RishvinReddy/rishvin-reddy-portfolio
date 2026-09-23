export interface Experience {
  company: string;
  role: string;
  location: string;
  type: string;
  duration: string;
  description: string;
  bullets?: string[];
  skills?: string[];
  theme: string;
  icon: string;
}

export const EXPERIENCE: Experience[] = [
  {
    company: "Data Lake Solutions",
    role: "TECHNOLOGY INTERN – CYBER SECURITY",
    location: "India · Remote",
    type: "Internship",
    duration: "Aug 2026 – Present",
    description: "Working within the Technology Solutions and Innovation function.",
    bullets: [
      "Supporting cybersecurity research, security assessments, vulnerability analysis, and risk identification activities.",
      "Researching and documenting cybersecurity frameworks, standards, and industry best practices.",
      "Contributing to security tool evaluation, threat intelligence, security awareness, and incident analysis initiatives.",
      "Supporting software design, development, testing, QA, requirements gathering, and technical documentation activities.",
      "Participating in Agile project discussions, knowledge-sharing sessions, technology workshops, and internal research and innovation initiatives."
    ],
    skills: ["Cybersecurity", "Security Research", "Vulnerability Analysis", "Threat Intelligence", "Security Assessment", "Testing", "QA", "Technical Documentation"],
    theme: "emerald",
    icon: "DL"
  },
  {
    company: "Fiverr",
    role: "FREELANCE FULL-STACK DEVELOPER",
    location: "Remote",
    type: "Freelance",
    duration: "Jul 2026 – Present",
    description: "Providing software development and technical consulting services for clients worldwide.",
    bullets: [
      "Designing and developing responsive full-stack web applications using React, Node.js, Express.js, TypeScript, and REST APIs.",
      "Developing automation workflows, API integrations, and custom software tools.",
      "Debugging applications, optimizing performance, and improving user experience.",
      "Managing requirements, client communication, Git workflows, and project delivery.",
      "Following software engineering practices focused on maintainable, scalable, and production-ready solutions."
    ],
    skills: ["Full-Stack Development", "React", "Node.js", "Express.js", "TypeScript", "REST APIs", "Automation"],
    theme: "indigo",
    icon: "fi"
  },
  {
    company: "Rishvin Labs",
    role: "FOUNDER & SOFTWARE ENGINEER",
    location: "Hyderabad, India",
    type: "Hybrid",
    duration: "Apr 2026 – Present",
    description: "Rishvin Labs is my independent software engineering and technology venture focused on building innovative products, client solutions, and research-driven projects.",
    bullets: [
      "Designing and developing full-stack applications, APIs, developer tools, automation workflows, and cloud-ready systems.",
      "Building solutions across cybersecurity, IoT, blockchain, AI, and software engineering for real-world applications.",
      "Developing AI-powered workflows, productivity systems, and technical tools.",
      "Managing the complete software development lifecycle, including architecture, development, testing, deployment, documentation, and maintenance.",
      "Publishing open-source engineering work and maintaining technical documentation and portfolio websites.",
      "Continuously researching emerging technologies and applying them to practical engineering solutions."
    ],
    skills: ["Full-Stack Development", "Software Engineering", "Cybersecurity", "IoT", "Blockchain", "Automation", "Cloud", "AI"],
    theme: "violet",
    icon: ">_"
  },
  {
    company: "Pegasystems",
    role: "PEGA PLATFORM INTERN",
    location: "Remote",
    type: "Internship",
    duration: "Aug 2026 – Sep 2026",
    description: "Selected for the Pegasystems National Internship Program 2026 in collaboration with SmartBridge.",
    bullets: [
      "Completed 60 hours of industry-integrated learning with practical exposure to enterprise application development using the Pega Platform, low-code development, workflow automation, and AI-powered business process solutions.",
      "Gained hands-on experience through instructor-led training, masterclasses, labs, and an enterprise automation capstone project, with exposure to case management, BPM, GenAI, Agentic AI, reporting, dashboards, and enterprise integrations.",
      "Participated in a national virtual internship program involving students from 1,100+ colleges.",
      "Certificate ID: PEGA-SW-NIP-2026-586 · Program Period: 4 Aug 2026 – 3 Sep 2026"
    ],
    skills: ["Pega Platform", "Low-Code Development", "BPM", "Workflow Automation", "GenAI", "Agentic AI", "Enterprise Integration"],
    theme: "blue",
    icon: "P"
  },
  {
    company: "Internship Studio",
    role: "WEBSITE DESIGN & DEVELOPMENT INTERN",
    location: "Pune, Maharashtra, India · Remote",
    type: "Internship",
    duration: "May 2026 – Jun 2026",
    description: "Completed a structured Website Design and Development Internship focused on practical web-development skills and project-based learning.",
    bullets: [
      "Strengthened practical skills through structured training and hands-on development activities.",
      "Applied the acquired knowledge to a final project and completed the required submission.",
      "Successfully completed the internship and received official internship documentation."
    ],
    skills: ["Web Design", "Frontend Development", "Web Development", "HTML", "CSS", "JavaScript"],
    theme: "teal",
    icon: "IS"
  }
];

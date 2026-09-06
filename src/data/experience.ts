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
    company: "Pegasystems",
    role: "PEGA PLATFORM INTERN",
    location: "Remote",
    type: "Internship",
    duration: "Aug 2026 – Present",
    description: "Selected for the Pegasystems National Internship Program 2026 in collaboration with SmartBridge.",
    bullets: [
      "Learning enterprise application development using the Pega Platform, low-code development, and workflow automation.",
      "Exploring GenAI, Agentic AI, BPM, case management, reporting, dashboards, and enterprise integrations.",
      "Participating in instructor-led training, masterclasses, hands-on labs, and an enterprise automation capstone project."
    ],
    skills: ["Pega Platform", "BPM", "Workflow Automation", "Low-Code", "Integration", "AI"],
    theme: "blue",
    icon: "P"
  },
  {
    company: "Data Lake Solutions",
    role: "TECHNOLOGY INTERN – CYBER SECURITY",
    location: "India · Remote",
    type: "Internship",
    duration: "Aug 2026 – Present",
    description: "Working within the Technology Solutions and Innovation function.",
    bullets: [
      "Supporting cybersecurity research, security assessments, vulnerability analysis, and risk identification.",
      "Researching cybersecurity frameworks, standards, and industry best practices.",
      "Contributing to threat intelligence, security-tool evaluation, security awareness, and incident-analysis initiatives.",
      "Supporting software development, testing, QA, requirements gathering, Agile discussions, and technical documentation."
    ],
    skills: ["Cybersecurity", "Research", "Vulnerability Analysis", "Testing", "QA", "Documentation"],
    theme: "emerald",
    icon: "DL"
  },
  {
    company: "Fiverr",
    role: "FREELANCE FULL-STACK DEVELOPER",
    location: "Remote",
    type: "Freelance",
    duration: "Jul 2026 – Present",
    description: "Designing and developing responsive full-stack web applications.",
    bullets: [
      "Building solutions using React, Node.js, Express.js, TypeScript, and REST APIs.",
      "Developing automation workflows, API integrations, and custom software tools.",
      "Debugging applications, optimizing performance, and improving user experience.",
      "Managing requirements, communication, Git workflows, and delivery for clients worldwide."
    ],
    skills: ["React", "Node.js", "Express.js", "TypeScript", "REST APIs", "Automation"],
    theme: "indigo",
    icon: "fi"
  },
  {
    company: "Rishvin Labs",
    role: "FOUNDER & SOFTWARE ENGINEER",
    location: "Hyderabad, India",
    type: "Hybrid",
    duration: "Apr 2026 – Present",
    description: "Building an independent technology venture focused on software engineering, cybersecurity, IoT, automation, and digital products.",
    bullets: [
      "Designing full-stack applications, APIs, developer tools, automation workflows, and cloud-ready systems.",
      "Building cybersecurity, IoT, blockchain, and AI-powered solutions.",
      "Managing the complete software development lifecycle from architecture and development through testing, deployment, and documentation.",
      "Publishing open-source engineering work and researching emerging technologies."
    ],
    skills: ["Full-Stack", "Cybersecurity", "IoT", "Automation", "Cloud", "AI"],
    theme: "violet",
    icon: ">_"
  },
  {
    company: "Internship Studio",
    role: "WEBSITE DESIGN & DEVELOPMENT INTERN",
    location: "Pune, Maharashtra, India · Remote",
    type: "Internship",
    duration: "May 2026 – Jun 2026",
    description: "Completed structured training in website design and development.",
    bullets: [
      "Strengthened practical frontend and web-development skills through project-based learning.",
      "Applied the training to a final project and completed the required submission.",
      "Successfully completed the internship and received an official Internship Certificate."
    ],
    skills: ["Web Design", "Frontend", "Web Development", "HTML", "CSS", "JavaScript"],
    theme: "teal",
    icon: "IS"
  }
];

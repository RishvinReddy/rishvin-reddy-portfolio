export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  summary: string;
}

export interface Education {
  degree: string;
  university: string;
  duration: string;
  specialization: string;
  focusAreas: string[];
  relevantCoursework: string[];
}

export interface SkillItem {
  name: string;
  color: string;
  iconPath: string; // SVG path data or full SVG string
}

export interface Service {
  title: string;
  description: string;
  iconPath: string; // SVG path data
  colorClasses: {
    groupHoverText: string;
    bgGradient: string;
    borderHover: string;
    iconText: string;
  };
}

export interface Project {
  // Identity
  title: string;
  name: string;
  fullName: string;
  owner: string;
  ownerAvatar?: string;
  description?: string;
  htmlUrl: string;
  repoUrl: string; // alias for htmlUrl
  // GitHub metadata
  stars: number;
  forks: number;
  issues: number;
  watchers: number;
  // Technical metadata
  language?: string;
  languages?: Record<string, number>;
  topics: string[];
  tags: string[]; // alias for topics
  // Repository state
  visibility: "public" | "private";
  defaultBranch: string;
  createdAt: string;
  updatedAt: string;
  // Documentation
  readme?: string;
  readmeSummary?: string;
  slug?: string;
  // Deployment
  homepage?: string;
  liveUrl?: string;
  previewUrl?: string;
  // Presentation
  theme?: "violet" | "blue" | "emerald" | "teal";
  categoryLabel?: string;
  bgIcon?: string;
  // Verified project-specific metrics only
  customStats?: {
    label: string;
    value: string | number;
  }[];
}

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------

export const PERSONAL_INFO: PersonalInfo = {
  name: "Erolla Rishvin Reddy",
  title: "IoT Engineer | Full Stack Developer",
  location: "Andhra Pradesh, India",
  email: "rishvinreddy@gmail.com",
  github: "https://github.com/RishvinReddy",
  linkedin: "https://www.linkedin.com/in/rishvinreddy",
  summary: "Detail-oriented and driven B.Tech student specializing in IoT and Full Stack Development, with a strong foundation in Data Structures, Networking, and Embedded Systems. Skilled in building scalable applications and intelligent systems using modern development tools and hardware platforms. Passionate about leveraging technology to solve real-world problems through efficient system design, clean code practices, and innovative thinking. Actively seeking opportunities to contribute to impactful engineering solutions and continuously expand technical expertise."
};

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    university: "Woxsen University",
    duration: "2024 – Present",
    specialization: "Internet of Things (IoT) & Computer Science",
    focusAreas: [
      "Data Structures & Algorithms",
      "Internet of Things (IoT)",
      "Computer Networks",
      "Web Technologies"
    ],
    relevantCoursework: [
      "Data Structures & Algorithms",
      "IoT System Design",
      "Computer Networks",
      "Web Development"
    ]
  }
];

export const TECH_STACK: SkillItem[] = [
  {
    name: "ESP32 / Arduino",
    color: "#6366f1",
    iconPath: '<circle cx="12" cy="12" r="5" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2" stroke-width="2" stroke-linecap="round" />'
  },
  {
    name: "Solidity / Web3",
    color: "#7c3aed",
    iconPath: '<path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101M14.828 10.828a4 4 0 015.656 0l1 1a4 4 0 010 5.656l-2.5 2.5a4 4 0 01-5.656 0" stroke-width="2" stroke-linecap="round" />'
  },
  {
    name: "React / Next.js",
    color: "#3b82f6",
    iconPath: '<rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" stroke-width="2" stroke-linecap="round" />'
  },
  {
    name: "Node.js / Express",
    color: "#10b981",
    iconPath: '<path d="M5 3l14 9-14 9V3z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />'
  },
  {
    name: "Python / ML",
    color: "#eab308",
    iconPath: '<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke-width="2" stroke-linecap="round" />'
  },
  {
    name: "Network Security",
    color: "#f43f5e",
    iconPath: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-width="2" stroke-linecap="round" />'
  },
  {
    name: "MongoDB / SQL",
    color: "#06b6d4",
    iconPath: '<path d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" stroke-width="2" /><path d="M9 12h6M12 9v6" stroke-width="2" stroke-linecap="round" />'
  },
  {
    name: "Embedded C / C++",
    color: "#f97316",
    iconPath: '<path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-5M9 21H5a2 2 0 01-2-2v-5m0 0h18" stroke-width="2" stroke-linecap="round" />'
  },
  {
    name: "Linux / CLI",
    color: "#64748b",
    iconPath: '<path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-width="2" stroke-linecap="round" />'
  },
  {
    name: "IoT Patent",
    color: "#f59e0b",
    iconPath: '<path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />'
  },
  {
    name: "DSA / Algorithms",
    color: "#a855f7",
    iconPath: '<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke-width="2" stroke-linecap="round" />'
  },
  {
    name: "Smart Contracts",
    color: "#f20d46",
    iconPath: '<path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />'
  }
];

export const SERVICES: Service[] = [
  {
    title: "Web & SaaS Development",
    description: "Scalable architectures, full-stack systems, and high-performance digital products engineered for growth.",
    iconPath: '<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>',
    colorClasses: {
      groupHoverText: "group-hover:text-primary",
      bgGradient: "from-blue-500 to-indigo-600",
      borderHover: "hover:border-primary/50",
      iconText: "text-white"
    }
  },
  {
    title: "Cybersecurity Solutions",
    description: "Secure architectures, penetration testing, and robust defense systems to protect digital assets.",
    iconPath: '<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>',
    colorClasses: {
      groupHoverText: "group-hover:text-emerald-400",
      bgGradient: "from-emerald-500 to-teal-600",
      borderHover: "hover:border-emerald-500/50",
      iconText: "text-white"
    }
  },
  {
    title: "IoT & Automation",
    description: "Smart connected devices, intelligent automation, and hardware-software integration.",
    iconPath: '<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>',
    colorClasses: {
      groupHoverText: "group-hover:text-amber-400",
      bgGradient: "from-amber-500 to-orange-600",
      borderHover: "hover:border-amber-500/50",
      iconText: "text-white"
    }
  }
];

export const FEATURED_PROJECTS: Project[] = [
  // Populated statically for SSR. Can be filled in with real projects later.
  {
    title: "Project Alpha (Static Data Placeholder)",
    name: "project-alpha",
    fullName: "RishvinReddy/project-alpha",
    owner: "RishvinReddy",
    description: "This is a placeholder for a statically rendered project, boosting SEO and load speeds.",
    htmlUrl: "https://github.com/RishvinReddy/project-alpha",
    repoUrl: "https://github.com/RishvinReddy/project-alpha",
    stars: 0,
    forks: 0,
    issues: 0,
    watchers: 0,
    topics: ["React", "IoT", "Firebase"],
    tags: ["React", "IoT", "Firebase"],
    visibility: "public",
    defaultBranch: "main",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    title: "Cyber Defense Matrix",
    name: "cyber-matrix",
    fullName: "RishvinReddy/cyber-matrix",
    owner: "RishvinReddy",
    description: "An open-source intelligence gathering and automated penetration testing toolkit.",
    htmlUrl: "https://github.com/RishvinReddy/cyber-matrix",
    repoUrl: "https://github.com/RishvinReddy/cyber-matrix",
    stars: 0,
    forks: 0,
    issues: 0,
    watchers: 0,
    topics: ["Python", "Security", "Docker"],
    tags: ["Python", "Security", "Docker"],
    visibility: "public",
    defaultBranch: "main",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

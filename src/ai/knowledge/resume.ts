// ============================================================
// PROFILE / PERSONAL BRAND
// ============================================================

export interface Profile {
  name: string;
  fullName?: string;
  title: string;
  headline: string;
  email: string;
  github: string;
  linkedin: string;
  portfolio?: string;
  location: string;
  availability: string;
  cgpa: string;

  summary: string;

  primaryFocus: string[];
  technicalDomains: string[];
  careerInterests: string[];

  languages?: string[];
  timezone?: string;

  resumeUrl?: string;
  profileImage?: string;
}


// ============================================================
// EDUCATION
// ============================================================

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  specialization?: string;

  duration: string;
  status?: "Current" | "Completed" | "Upcoming";

  location?: string;
  cgpa?: string;

  details: string[];

  coursework?: string[];
  focusAreas?: string[];
  achievements?: string[];
  activities?: string[];

  institutionUrl?: string;
}


// ============================================================
// CERTIFICATIONS
// ============================================================

export interface Certification {
  name: string;
  issuer: string;

  platform?: string;
  issueDate?: string;
  expiryDate?: string;

  credentialId?: string;
  credentialUrl?: string;

  skills?: string[];
  description?: string;

  status?: "Completed" | "In Progress";
}


// ============================================================
// PATENTS / INTELLECTUAL PROPERTY
// ============================================================

export interface Patent {
  title: string;

  number: string;
  jurisdiction?: string;

  role: string;

  domain: string[];
  category?: string;

  status?: "Granted" | "Published" | "Filed" | "Pending";

  filingDate?: string;
  publicationDate?: string;
  grantDate?: string;

  description: string;

  technologies?: string[];
  innovations?: string[];
  applications?: string[];

  inventors?: string[];

  verificationUrl?: string;
}


// ============================================================
// RESEARCH INTERESTS
// ============================================================

export interface ResearchInterest {
  area: string;
  topics: string[];
  description?: string;
}


// ============================================================
// ACHIEVEMENTS
// ============================================================

export interface Achievement {
  title: string;
  organization?: string;

  date?: string;
  category?: string;

  description: string;

  position?: string;
  result?: string;

  verificationUrl?: string;
}


// ============================================================
// PROFESSIONAL INTERESTS
// ============================================================

export interface ProfessionalInterest {
  domain: string;
  areas: string[];
  priority?: "Primary" | "Secondary";
}


// ============================================================
// COMPLETE PROFILE KNOWLEDGE
// ============================================================

export const profileKnowledge: Profile = {
  name: "Rishvin Reddy",
  fullName: "Erolla Rishvin Reddy",

  title: "Computer Science Engineer",
  
  headline:
    "B.Tech Computer Science & Engineering student specializing in Cybersecurity, IoT, Blockchain, and Full-Stack Engineering.",

  email: "rishvinreddy@gmail.com",

  github: "https://github.com/RishvinReddy",

  linkedin: "https://www.linkedin.com/in/rishvinreddy/",

  portfolio: "https://rishvin-reddy-portfolio.vercel.app/",

  location: "Hyderabad, India",

  availability: "Open to internship opportunities",

  cgpa: "9.01 / 10",

  summary:
    "Computer Science and Engineering student focused on building secure, scalable, and technically meaningful software systems across cybersecurity, IoT, blockchain, and full-stack development. Experienced in developing academic and independent projects that combine software engineering with security, connected systems, distributed technologies, and automation.",

  primaryFocus: [
    "Cybersecurity",
    "IoT Security",
    "Blockchain",
    "Full-Stack Development"
  ],

  technicalDomains: [
    "Cybersecurity",
    "Web Application Security",
    "Digital Forensics",
    "Blockchain & Web3",
    "IoT & Embedded Systems",
    "Full-Stack Engineering",
    "Backend Engineering",
    "Database Engineering",
    "Cloud & DevOps",
    "Automation"
  ],

  careerInterests: [
    "Cybersecurity Engineering",
    "Security Engineering",
    "IoT Security",
    "Blockchain Security",
    "Full-Stack Engineering",
    "Backend Engineering",
    "Cloud & DevSecOps",
    "Security Research"
  ],

  languages: [
    "English",
    "Telugu",
    "Hindi"
  ],

  timezone: "IST (UTC+5:30)"
};


// ============================================================
// EDUCATION
// ============================================================

export const educationKnowledge: Education[] = [
  {
    institution: "Woxsen University",

    degree: "B.Tech Computer Science and Engineering",

    field: "Computer Science and Engineering",

    specialization:
      "Blockchain, IoT & Cybersecurity",

    duration: "2024 - 2028",

    status: "Current",

    location: "Hyderabad, India",

    cgpa: "9.01 / 10",

    details: [
      "Pursuing a Bachelor of Technology in Computer Science and Engineering.",
      "Academic specialization spanning Blockchain, Internet of Things, and Cybersecurity.",
      "Developing practical systems across software engineering, secure computing, connected devices, distributed systems, and databases.",
      "Actively building technical projects combining cybersecurity, IoT, blockchain, digital forensics, and full-stack development.",
      "Participating in technical events, hackathons, project showcases, and engineering-focused activities."
    ],

    coursework: [
      "Data Structures & Algorithms",
      "Design & Analysis of Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Operating Systems",
      "Web Technologies",
      "Cybersecurity",
      "Probability & Statistics",
      "Internet of Things",
      "Blockchain Technology",
      "Software Engineering"
    ],

    focusAreas: [
      "Cybersecurity",
      "IoT",
      "Blockchain",
      "Full-Stack Development",
      "Computer Networks",
      "Database Systems",
      "Software Engineering"
    ],

    achievements: [
      "Maintaining a 9.01 / 10 CGPA.",
      "Developing interdisciplinary projects spanning cybersecurity, blockchain, IoT, and software engineering.",
      "Participating in technical symposiums and student technology initiatives."
    ],

    activities: [
      "Technical project development",
      "Hackathons",
      "Technical symposiums",
      "Cybersecurity learning",
      "Software engineering projects",
      "Research-oriented engineering work"
    ],

    institutionUrl: "https://woxsen.edu.in/"
  }
];


// ============================================================
// CERTIFICATIONS
// ============================================================

export const certificationsKnowledge: Certification[] = [
  {
    name: "Programming for Everybody (Getting Started with Python)",

    issuer: "University of Michigan",

    platform: "Coursera",

    status: "Completed",

    skills: [
      "Python",
      "Programming Fundamentals",
      "Problem Solving"
    ],

    description:
      "Foundational programming course covering Python programming concepts, computational thinking, variables, expressions, functions, and introductory programming techniques."
  },

  {
    name: "Data Structures Using Python",

    issuer: "Coursera",

    platform: "Coursera",

    status: "Completed",

    skills: [
      "Python",
      "Data Structures",
      "Algorithms",
      "Problem Solving"
    ],

    description:
      "Coursework focused on implementing and understanding fundamental data structures and algorithmic problem-solving techniques using Python."
  },

  {
    name: "Object-Oriented Design",

    issuer: "University of Alberta",

    platform: "Coursera",

    status: "Completed",

    skills: [
      "Object-Oriented Programming",
      "Software Design",
      "UML",
      "Design Principles"
    ],

    description:
      "Coursework focused on object-oriented design principles, software modeling, reusable abstractions, and designing maintainable software systems."
  },

  {
    name: "Java Programming",

    issuer: "Coursera",

    platform: "Coursera",

    status: "Completed",

    skills: [
      "Java",
      "Object-Oriented Programming",
      "Programming Fundamentals"
    ],

    description:
      "Java programming coursework covering programming fundamentals, object-oriented concepts, classes, objects, methods, and application development."
  },

  {
    name: "Introduction to Cyber Attacks",

    issuer: "New York University",

    platform: "Coursera",

    status: "Completed",

    skills: [
      "Cybersecurity",
      "Network Security",
      "Cyber Attacks",
      "Security Fundamentals"
    ],

    description:
      "Introduction to common cyber attacks, security threats, attack methodologies, vulnerabilities, and foundational cybersecurity concepts."
  }
];


// ============================================================
// PATENT / INTELLECTUAL PROPERTY
// ============================================================

export const patentKnowledge: Patent = {
  title: "IoT Connectivity Device",

  number: "470097-001",

  jurisdiction: "Government of India",

  role: "Co-Inventor",

  domain: [
    "Internet of Things",
    "Secure Device-to-Cloud Communication",
    "Telemetry",
    "Connected Infrastructure",
    "IoT Architecture"
  ],

  category: "IoT & Connected Systems",

  status: "Granted",

  description:
    "An IoT-focused invention concerning connected-device architecture and communication between intelligent devices and cloud infrastructure, with emphasis on secure telemetry, device connectivity, authentication, and scalable connected systems.",

  technologies: [
    "Internet of Things",
    "Device-to-Cloud Communication",
    "Telemetry",
    "Device Authentication",
    "Connected Systems",
    "IoT Architecture"
  ],

  innovations: [
    "Secure device connectivity",
    "Device-to-cloud communication",
    "IoT telemetry architecture",
    "Connected infrastructure",
    "Authentication-oriented device communication"
  ],

  applications: [
    "Connected IoT infrastructure",
    "Remote device monitoring",
    "IoT telemetry",
    "Intelligent connected systems",
    "Device-to-cloud applications"
  ]
};


// ============================================================
// RESEARCH INTERESTS
// ============================================================

export const researchInterestsKnowledge: ResearchInterest[] = [
  {
    area: "Cybersecurity",

    topics: [
      "Web Application Security",
      "IoT Security",
      "Digital Forensics",
      "Threat Modeling",
      "Secure Software Engineering",
      "Security Monitoring"
    ],

    description:
      "Research interest in identifying, preventing, detecting, and investigating security vulnerabilities across software, networks, and connected systems."
  },

  {
    area: "Blockchain Security",

    topics: [
      "Smart Contract Security",
      "Blockchain-Based Evidence Integrity",
      "Decentralized Systems",
      "Cryptographic Verification",
      "Blockchain Forensics"
    ],

    description:
      "Exploring blockchain as a mechanism for integrity verification, tamper-evident records, decentralized evidence management, and security applications."
  },

  {
    area: "IoT & Embedded Security",

    topics: [
      "IoT Device Security",
      "MQTT Security",
      "Embedded Systems",
      "IoT Network Monitoring",
      "Device Authentication"
    ],

    description:
      "Researching security challenges in connected devices, communication protocols, embedded systems, and IoT infrastructure."
  },

  {
    area: "Digital Forensics",

    topics: [
      "Digital Evidence",
      "Chain of Custody",
      "Evidence Integrity",
      "Forensic Timeline Reconstruction",
      "IoT Forensics"
    ],

    description:
      "Investigating methods for collecting, preserving, verifying, and reconstructing digital evidence from distributed and connected environments."
  }
];


// ============================================================
// ACHIEVEMENTS
// ============================================================

export const achievementsKnowledge: Achievement[] = [
  {
    title: "9.01 / 10 Academic CGPA",

    organization: "Woxsen University",

    category: "Academic",

    description:
      "Maintaining a 9.01 / 10 CGPA while pursuing a B.Tech in Computer Science and Engineering with specialization in Blockchain, IoT, and Cybersecurity.",

    result: "9.01 / 10"
  },

  {
    title: "IoT Connectivity Device Patent",

    organization: "Government of India",

    category: "Intellectual Property",

    description:
      "Co-inventor of an IoT connectivity-related invention covering connected-device communication and intelligent connected infrastructure.",

    result: "Patent No. 470097-001"
  },

  {
    title: "Interdisciplinary Engineering Projects",

    category: "Engineering",

    description:
      "Developing projects that combine cybersecurity, blockchain, IoT, digital forensics, databases, and full-stack software engineering.",

    result: "Multiple technical projects"
  }
];


// ============================================================
// PROFESSIONAL INTERESTS
// ============================================================

export const professionalInterestsKnowledge: ProfessionalInterest[] = [
  {
    domain: "Cybersecurity",

    priority: "Primary",

    areas: [
      "Security Engineering",
      "Web Application Security",
      "IoT Security",
      "Digital Forensics",
      "Threat Modeling",
      "Secure Software Development"
    ]
  },

  {
    domain: "IoT",

    priority: "Primary",

    areas: [
      "IoT Security",
      "Embedded Systems",
      "MQTT",
      "Connected Devices",
      "IoT Monitoring",
      "Device-to-Cloud Systems"
    ]
  },

  {
    domain: "Blockchain",

    priority: "Primary",

    areas: [
      "Smart Contracts",
      "Solidity",
      "Ethereum",
      "Blockchain Security",
      "Decentralized Systems",
      "Evidence Integrity"
    ]
  },

  {
    domain: "Full-Stack Engineering",

    priority: "Primary",

    areas: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "REST APIs",
      "PostgreSQL"
    ]
  },

  {
    domain: "Cloud & DevOps",

    priority: "Secondary",

    areas: [
      "Docker",
      "AWS",
      "Vercel",
      "CI/CD",
      "Cloud Deployment",
      "DevSecOps"
    ]
  }
];

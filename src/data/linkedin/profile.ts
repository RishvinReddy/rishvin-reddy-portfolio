/* ─────────────────────────────────────────────────────────────────────────────
   LinkedIn Profile & Biographical Data
   Verified credentials, education, skills matrix, and career milestones.
   100% synchronized with portfolio resumes, certificates, and academic records.
───────────────────────────────────────────────────────────────────────────── */

export const linkedinProfileUrl = 'https://www.linkedin.com/in/rishvinreddy/';

export interface ProfileData {
  fullName: string;
  displayName: string;
  headline: string;
  roleTitle: string;
  subtitle: string;
  location: string;
  tagline: string;
  summary: string[];
  focusAreas: string[];
  stats: {
    connections: string;
    verifiedRoles: string;
    patents: string;
    credentials: string;
  };
}

export interface EducationEntry {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  duration: string;
  grade: string;
  location: string;
  description: string;
  coursework: string[];
  highlights: string[];
  credentialUrl?: string;
}

export interface SkillCategory {
  title: string;
  iconName: 'Code' | 'Layout' | 'Database' | 'Shield' | 'Cpu' | 'Workflow';
  skills: { name: string; level?: string }[];
}

export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  type: 'Patent' | 'Enterprise' | 'Cybersecurity' | 'DevOps' | 'IoT' | 'Software';
  description: string;
  skills: string[];
}

export interface AchievementEntry {
  title: string;
  organization: string;
  date: string;
  description: string;
  category: 'Patent' | 'National Program' | 'Academics' | 'Venture' | 'Client Work';
  badge: string;
}

/* ─── Profile Details ─────────────────────────────────────────────────────── */
export const profile: ProfileData = {
  fullName: 'Erolla Rishvin Reddy',
  displayName: 'Rishvin Reddy',
  headline:
    'Computer Science & Engineering · Founder @ Rishvin Labs · Technology Intern (Cybersecurity) @ Data Lake Solutions · Patent Co-Inventor',
  roleTitle: 'Computer Science & Engineering',
  subtitle: 'B.Tech CSE (2024–2028) · Woxsen University · CGPA 9.01',
  location: 'Hyderabad, Telangana, India',
  tagline:
    'Engineering secure software architectures, embedded IoT hardware, and decentralized blockchain systems. Exploring emerging tech and sharing verifiable engineering work.',
  summary: [
    'I am a Computer Science & Engineering student at Woxsen University and the founder of Rishvin Labs. My core focus lies at the intersection of Cybersecurity, Embedded IoT Systems, Blockchain forensics, and Production Full-Stack Engineering.',
    'Currently serving as a Technology Intern in Cyber Security at Data Lake Solutions, contributing to security assessments, threat intelligence, and vulnerability research. Previously completed the Pegasystems National Internship Program 2026 (Pega Platform, BPM, and Agentic AI workflows) and deliver full-stack solutions for global clients as a freelance developer on Fiverr.',
    'I am also a co-inventor of an officially registered Government of India Design Patent for an IoT Connectivity Device (Design No. 470097-001), bridging hardware authentication with secure cloud telemetry.'
  ],
  focusAreas: [
    'Cybersecurity & Forensics',
    'Internet of Things (IoT)',
    'Blockchain & Hyperledger',
    'Full-Stack Web Engineering',
    'Low-Code & Enterprise BPM',
    'Security Research & Threat Modeling'
  ],
  stats: {
    connections: '500+',
    verifiedRoles: '5 Roles',
    patents: '1 Govt. Patent',
    credentials: '15+ Verified Certs'
  }
};

/* ─── Education ───────────────────────────────────────────────────────────── */
export const education: EducationEntry[] = [
  {
    institution: 'Woxsen University',
    degree: 'Bachelor of Technology — B.Tech',
    fieldOfStudy: 'Computer Science & Engineering (Industry Track)',
    duration: '2024 – 2028',
    grade: 'Cumulative GPA: 9.01 / 10.0',
    location: 'Hyderabad, Telangana, India',
    description:
      'Pursuing an industry-integrated curriculum specializing in Blockchain, IoT, and Cybersecurity at the School of Technology. Active in software labs, embedded hardware projects, and research innovation.',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Design & Architecture',
      'Computer Networks & Protocols',
      'Operating Systems & Concurrency',
      'Database Management Systems',
      'Cryptography & Network Security',
      'Embedded Microcontroller Systems'
    ],
    highlights: [
      'Maintained consistent top-tier academic standing with 9.01 CGPA across foundational and advanced engineering semesters.',
      'Conducted practical research on tamper-evident digital forensic chain of custody utilizing Hyperledger Fabric.',
      'Developed hardware prototypes for biometric IoT voting systems and precision telemetry sensors.'
    ]
  }
];

/* ─── Skills Matrix ───────────────────────────────────────────────────────── */
export const skillsMatrix: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'C / C++', level: 'Proficient' },
      { name: 'Java', level: 'Proficient' },
      { name: 'SQL', level: 'Proficient' },
      { name: 'Solidity', level: 'Intermediate' }
    ]
  },
  {
    title: 'Frontend & UI Engineering',
    iconName: 'Layout',
    skills: [
      { name: 'React.js' },
      { name: 'Next.js (App Router)' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'HTML5 / Modern CSS' },
      { name: 'Responsive Web Design' },
      { name: 'Web Accessibility (a11y)' }
    ]
  },
  {
    title: 'Backend & Cloud Infrastructure',
    iconName: 'Database',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'RESTful API Design' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Firebase' },
      { name: 'Docker Containerization' },
      { name: 'Vercel Deployment' }
    ]
  },
  {
    title: 'Cybersecurity & Digital Forensics',
    iconName: 'Shield',
    skills: [
      { name: 'Vulnerability Analysis' },
      { name: 'Threat Intelligence' },
      { name: 'Scapy Packet Inspection' },
      { name: 'OWASP Security Best Practices' },
      { name: 'Hyperledger Fabric' },
      { name: 'Digital Evidence Integrity' },
      { name: 'Risk Assessment' }
    ]
  },
  {
    title: 'IoT & Hardware Systems',
    iconName: 'Cpu',
    skills: [
      { name: 'ESP32 Architecture' },
      { name: 'Arduino Platform' },
      { name: 'Embedded C' },
      { name: 'Sensor Interfacing' },
      { name: 'MQTT Protocol' },
      { name: 'Hardware Security' },
      { name: 'Biometric Sensors' }
    ]
  },
  {
    title: 'Enterprise & Automation',
    iconName: 'Workflow',
    skills: [
      { name: 'Pega Platform 2026' },
      { name: 'Business Process Management (BPM)' },
      { name: 'Case Management' },
      { name: 'Agentic AI & GenAI Workflows' },
      { name: 'GitHub Actions (CI/CD)' },
      { name: 'Technical Documentation' },
      { name: 'Agile & Git Workflows' }
    ]
  }
];

/* ─── Licenses & Certifications ───────────────────────────────────────────── */
export const certifications: CertificationEntry[] = [
  {
    id: 'patent-iot-device',
    title: 'Government of India Registered Design Patent — IoT Connectivity Device',
    issuer: 'Patent Office, Government of India',
    date: 'Aug 2025 · Active',
    credentialId: 'Design No. 470097-001',
    credentialUrl: '/assets/certificates/CERTIFICATE.pdf',
    type: 'Patent',
    description:
      'Officially granted and registered Design Patent in India as Co-Inventor. Protects a novel design for an intelligent IoT hardware connectivity interface enabling secure, authenticated device-to-cloud data transmission.',
    skills: ['IoT Hardware', 'Device Security', 'Telemetry', 'Embedded Systems']
  },
  {
    id: 'pega-nip-2026',
    title: 'Pegasystems National Internship Program 2026 — Certificate of Completion',
    issuer: 'Pegasystems × SmartBridge',
    date: 'Sep 2026',
    credentialId: 'PEGA-SW-NIP-2026-586',
    credentialUrl: '/resume#dynamic-resume-section',
    type: 'Enterprise',
    description:
      'Completed 60 hours of intensive industry training covering low-code application development on the Pega Platform, enterprise case management, business architecture, GenAI, and Agentic AI workflow automation.',
    skills: ['Pega Platform', 'BPM', 'GenAI', 'Agentic AI', 'Enterprise Automation']
  },
  {
    id: 'github-prof-cert',
    title: 'Career Essentials in GitHub Professional Certificate',
    issuer: 'LinkedIn Learning & GitHub',
    date: '2024',
    credentialUrl: '/skills',
    type: 'DevOps',
    description:
      'Demonstrated expertise in GitHub developer workflows, repository management, branch protection, collaborative open-source engineering, and modern DevOps tools.',
    skills: ['GitHub', 'Git', 'DevOps', 'Version Control']
  },
  {
    id: 'github-actions-cert',
    title: 'Practical GitHub Actions — CI/CD Automation',
    issuer: 'LinkedIn Learning',
    date: '2024',
    credentialUrl: '/skills',
    type: 'DevOps',
    description:
      'Mastered automated testing pipelines, continuous integration, continuous delivery workflows, matrix builds, and custom GitHub Actions development.',
    skills: ['GitHub Actions', 'CI/CD', 'Workflow Automation']
  },
  {
    id: 'cyber-attacks-cert',
    title: 'Introduction to Cyber Attacks',
    issuer: 'New York University (NYU) via Coursera',
    date: '2024',
    credentialUrl: '/skills',
    type: 'Cybersecurity',
    description:
      'Foundational cybersecurity training covering modern threat vectors, attack modeling, network reconnaissance, defensive controls, and vulnerability mitigation.',
    skills: ['Cybersecurity', 'Threat Modeling', 'Attack Vectors', 'Network Security']
  },
  {
    id: 'oop-design-cert',
    title: 'Object-Oriented Design & Architecture',
    issuer: 'University of Alberta via Coursera',
    date: '2023',
    credentialUrl: '/skills',
    type: 'Software',
    description:
      'Comprehensive study of SOLID design principles, UML architectural modeling, gang-of-four design patterns, and maintainable software engineering practices.',
    skills: ['OOP', 'SOLID Principles', 'Design Patterns', 'Software Architecture']
  },
  {
    id: 'arduino-c-cert',
    title: 'The Arduino Platform and C Programming',
    issuer: 'University of California, Irvine (UC Irvine) via Coursera',
    date: '2023',
    credentialUrl: '/skills',
    type: 'IoT',
    description:
      'Hands-on embedded microcontroller programming, bare-metal C development, timers, interrupts, and hardware sensor interfacing.',
    skills: ['Arduino', 'Embedded C', 'Microcontrollers', 'Hardware Interfacing']
  }
];

/* ─── Key Achievements ────────────────────────────────────────────────────── */
export const achievements: AchievementEntry[] = [
  {
    title: 'Government of India Design Patent Registered',
    organization: 'Patent Office, Government of India',
    date: 'Aug 2025',
    category: 'Patent',
    badge: 'Design No. 470097-001',
    description:
      'Co-invented and successfully registered a national design patent for an intelligent IoT Connectivity Device enabling authenticated telemetry.'
  },
  {
    title: 'Pegasystems National Virtual Internship 2026',
    organization: 'Pegasystems × SmartBridge',
    date: 'Aug – Sep 2026',
    category: 'National Program',
    badge: 'Selected from 1,100+ Colleges',
    description:
      'Selected for the prestigious national virtual internship program, completing 60 hours of enterprise automation, case management, and Agentic AI capstone.'
  },
  {
    title: 'Founded Rishvin Labs',
    organization: 'Independent Technology Studio',
    date: 'Apr 2026 – Present',
    category: 'Venture',
    badge: 'Founder & Engineer',
    description:
      'Established an independent engineering lab building open-source developer tools, cybersecurity research prototypes, and client-facing systems.'
  },
  {
    title: 'Academic Standing — CGPA 9.01',
    organization: 'Woxsen University, School of Technology',
    date: '2024 – 2028',
    category: 'Academics',
    badge: 'Top Tier Honors',
    description:
      'Maintaining a 9.01 cumulative grade point average across rigorous B.Tech Computer Science and Engineering coursework.'
  },
  {
    title: 'Global Full-Stack Consulting Deliverables',
    organization: 'Fiverr International',
    date: 'Jul 2026 – Present',
    category: 'Client Work',
    badge: 'Production APIs & Apps',
    description:
      'Delivered custom web applications, automation workflows, and API integrations for international clients with 100% positive satisfaction.'
  }
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsKnowledge: SkillCategory[] = [
  // ============================================================
  // PROGRAMMING LANGUAGES
  // ============================================================
  {
    category: "Programming Languages",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C++",
      "Solidity",
      "SQL",
      "HTML5",
      "CSS3"
    ]
  },

  // ============================================================
  // FRONTEND ENGINEERING
  // ============================================================
  {
    category: "Frontend Engineering",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Web Design",
      "Component-Based Architecture",
      "Client-Side State Management",
      "Form Handling",
      "Frontend Validation",
      "Accessibility Fundamentals",
      "Web Performance Optimization",
      "SEO Fundamentals",
      "Progressive Web Application Concepts"
    ]
  },

  // ============================================================
  // BACKEND ENGINEERING
  // ============================================================
  {
    category: "Backend Engineering",
    skills: [
      "Node.js",
      "Express.js",
      "Flask",
      "REST API Development",
      "API Design",
      "API Integration",
      "Server-Side Validation",
      "Authentication & Authorization",
      "Session Management",
      "Middleware Architecture",
      "Error Handling",
      "Input Validation",
      "Rate Limiting",
      "Backend Security Fundamentals",
      "JSON APIs",
      "Webhooks",
      "Event-Driven Architecture Fundamentals"
    ]
  },

  // ============================================================
  // FULL-STACK DEVELOPMENT
  // ============================================================
  {
    category: "Full-Stack Development",
    skills: [
      "Full-Stack Web Application Development",
      "Next.js Full-Stack Applications",
      "React Applications",
      "RESTful Services",
      "Frontend–Backend Integration",
      "API-Driven Architecture",
      "Server-Side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "Server Components Fundamentals",
      "Database-Backed Applications",
      "Authentication Flows",
      "Role-Based Access Control (RBAC)",
      "Multi-Tenant Application Architecture",
      "Form & Data Validation",
      "Application Security Fundamentals"
    ]
  },

  // ============================================================
  // DATABASES & DATA STORAGE
  // ============================================================
  {
    category: "Databases & Data Storage",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQL",
      "Relational Database Design",
      "Database Normalization",
      "ER Modeling",
      "Database Transactions",
      "Indexes",
      "Constraints",
      "Foreign Keys",
      "Joins",
      "Subqueries",
      "Views",
      "Stored Procedures Fundamentals",
      "Query Optimization Fundamentals",
      "ACID Transactions",
      "NoSQL Data Modeling",
      "IndexedDB",
      "IPFS",
      "Object Storage Concepts"
    ]
  },

  // ============================================================
  // DATABASE ENGINEERING
  // ============================================================
  {
    category: "Database Engineering",
    skills: [
      "Schema Design",
      "Relational Data Modeling",
      "Entity-Relationship Modeling",
      "Normalization",
      "Denormalization",
      "Database Constraints",
      "Referential Integrity",
      "Transaction Management",
      "Concurrency Fundamentals",
      "Indexing Strategies",
      "Query Optimization",
      "Data Integrity",
      "Database Security Fundamentals",
      "Row-Level Security (RLS) Concepts",
      "Multi-Tenant Database Design"
    ]
  },

  // ============================================================
  // CORE COMPUTER SCIENCE
  // ============================================================
  {
    category: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems (DBMS)",
      "Computer Architecture Fundamentals",
      "Software Engineering",
      "Algorithm Analysis",
      "Time & Space Complexity",
      "Recursion",
      "Searching Algorithms",
      "Sorting Algorithms",
      "Hashing",
      "Trees",
      "Graphs",
      "Stacks",
      "Queues",
      "Linked Lists",
      "Heaps",
      "Tries",
      "Dynamic Programming Fundamentals",
      "Greedy Algorithms Fundamentals",
      "Graph Traversal",
      "Process Management",
      "Memory Management Fundamentals",
      "Concurrency Fundamentals",
      "Networking Fundamentals"
    ]
  },

  // ============================================================
  // SOFTWARE ENGINEERING
  // ============================================================
  {
    category: "Software Engineering",
    skills: [
      "Software Development Life Cycle (SDLC)",
      "Modular Software Design",
      "Component-Based Architecture",
      "Separation of Concerns",
      "Design Patterns Fundamentals",
      "Clean Code Principles",
      "Code Reusability",
      "Error Handling",
      "Input Validation",
      "Defensive Programming",
      "Version Control",
      "Code Review",
      "Debugging",
      "Testing Fundamentals",
      "API Design",
      "Documentation",
      "Technical Documentation",
      "Environment Configuration",
      "Dependency Management"
    ]
  },

  // ============================================================
  // CYBERSECURITY
  // ============================================================
  {
    category: "Cybersecurity",
    skills: [
      "Cybersecurity Fundamentals",
      "Web Application Security",
      "Network Security",
      "Application Security",
      "Security Architecture Fundamentals",
      "Threat Modeling",
      "Vulnerability Assessment",
      "Penetration Testing Fundamentals",
      "Security Testing",
      "Authentication Security",
      "Authorization & Access Control",
      "Session Security",
      "Input Validation",
      "Secure Coding",
      "Security Headers",
      "OWASP Top 10",
      "Security Logging",
      "Incident Detection Fundamentals",
      "Digital Forensics Fundamentals",
      "Evidence Integrity",
      "Security Monitoring Fundamentals"
    ]
  },

  // ============================================================
  // WEB SECURITY
  // ============================================================
  {
    category: "Web & Application Security",
    skills: [
      "OWASP Top 10",
      "Cross-Site Scripting (XSS)",
      "SQL Injection Fundamentals",
      "Cross-Site Request Forgery (CSRF)",
      "Broken Access Control",
      "Authentication Vulnerabilities",
      "Session Management Security",
      "Input Validation",
      "Output Encoding",
      "Secure HTTP Headers",
      "HTTPS",
      "TLS Fundamentals",
      "Content Security Policy (CSP)",
      "Rate Limiting",
      "Password Security",
      "Secure API Design",
      "Burp Suite Fundamentals",
      "PortSwigger Web Security Academy"
    ]
  },

  // ============================================================
  // CRYPTOGRAPHY
  // ============================================================
  {
    category: "Cryptography & Security Engineering",
    skills: [
      "Cryptographic Fundamentals",
      "SHA-256",
      "SHA-2 Family",
      "AES",
      "Symmetric Cryptography",
      "Asymmetric Cryptography Fundamentals",
      "Hash Functions",
      "Digital Signatures",
      "Message Integrity",
      "Data Integrity Verification",
      "Password Hashing Concepts",
      "Public Key Infrastructure (PKI) Fundamentals",
      "TLS/SSL Fundamentals",
      "Cryptographic Key Management Fundamentals",
      "Evidence Hashing",
      "Blockchain Cryptography"
    ]
  },

  // ============================================================
  // DIGITAL FORENSICS
  // ============================================================
  {
    category: "Digital Forensics",
    skills: [
      "Digital Forensics Fundamentals",
      "Digital Evidence Collection",
      "Evidence Integrity",
      "Chain of Custody",
      "Forensic Timeline Reconstruction",
      "Security Event Analysis",
      "Log Analysis",
      "Hash-Based Evidence Verification",
      "SHA-256 Evidence Hashing",
      "IoT Forensics",
      "Incident Investigation Fundamentals",
      "Forensic Data Preservation"
    ]
  },

  // ============================================================
  // BLOCKCHAIN
  // ============================================================
  {
    category: "Blockchain & Web3",
    skills: [
      "Blockchain Fundamentals",
      "Ethereum",
      "Smart Contracts",
      "Solidity",
      "EVM Fundamentals",
      "Transaction Lifecycle",
      "Wallet Fundamentals",
      "Blockchain-Based Evidence Integrity",
      "On-Chain Data Verification",
      "Decentralized Storage Concepts",
      "IPFS",
      "Content-Addressed Storage",
      "Cryptographic Hashing",
      "Smart Contract Architecture Fundamentals",
      "Blockchain Security Fundamentals",
      "Hardhat",
      "Local Blockchain Development"
    ]
  },

  // ============================================================
  // IOT
  // ============================================================
  {
    category: "IoT & Embedded Systems",
    skills: [
      "Internet of Things (IoT)",
      "ESP32",
      "Arduino",
      "Arduino Uno",
      "IoT Sensor Integration",
      "Actuator Control",
      "Embedded Systems Fundamentals",
      "MQTT",
      "IoT Communication",
      "IoT Security Fundamentals",
      "IoT Data Collection",
      "IoT Event Monitoring",
      "IoT Device Simulation",
      "Sensor Data Processing",
      "Digital/Analog Sensor Fundamentals",
      "IoT Network Architecture"
    ]
  },

  // ============================================================
  // NETWORKING
  // ============================================================
  {
    category: "Computer Networking",
    skills: [
      "TCP/IP",
      "HTTP",
      "HTTPS",
      "DNS",
      "DHCP",
      "IPv4",
      "IPv6 Fundamentals",
      "TCP",
      "UDP",
      "Sockets Fundamentals",
      "Ports & Protocols",
      "OSI Model",
      "Network Security",
      "Packet Analysis",
      "PCAP Analysis",
      "Network Traffic Analysis",
      "DNS Analysis",
      "HTTP Traffic Analysis",
      "TCP Stream Reconstruction",
      "Network Troubleshooting"
    ]
  },

  // ============================================================
  // CLOUD & DEVOPS
  // ============================================================
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "Vercel",
      "Docker",
      "Docker Compose",
      "Linux",
      "GitHub Actions",
      "CI/CD Fundamentals",
      "Cloud Deployment",
      "Containerization",
      "Environment Variables",
      "Deployment Pipelines",
      "Application Monitoring Fundamentals",
      "Cloud Architecture Fundamentals",
      "Infrastructure Fundamentals",
      "Production Deployment"
    ]
  },

  // ============================================================
  // VERSION CONTROL & COLLABORATION
  // ============================================================
  {
    category: "Version Control & Collaboration",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Git Branching",
      "Pull Requests",
      "Code Reviews",
      "Merge Conflict Resolution",
      "Repository Management",
      "Issue Tracking",
      "Release Management Fundamentals",
      "Semantic Versioning",
      "Git Workflows"
    ]
  },

  // ============================================================
  // DEVELOPMENT TOOLS
  // ============================================================
  {
    category: "Developer Tools",
    skills: [
      "VS Code",
      "Antigravity IDE",
      "Git",
      "GitHub",
      "GitHub CLI",
      "Postman",
      "Burp Suite",
      "Docker",
      "Docker Compose",
      "Linux CLI",
      "npm",
      "Node.js Tooling",
      "LaTeX",
      "Figma",
      "Tinkercad",
      "Arduino IDE"
    ]
  },

  // ============================================================
  // TESTING & DEBUGGING
  // ============================================================
  {
    category: "Testing & Debugging",
    skills: [
      "Software Testing Fundamentals",
      "Unit Testing Fundamentals",
      "Integration Testing Fundamentals",
      "API Testing",
      "Security Testing",
      "Web Application Testing",
      "Debugging",
      "Error Analysis",
      "Log Analysis",
      "Network Troubleshooting",
      "Browser Developer Tools",
      "Postman API Testing",
      "Burp Suite Testing"
    ]
  },

  // ============================================================
  // AI & DATA
  // ============================================================
  {
    category: "AI, Automation & Data",
    skills: [
      "Artificial Intelligence Fundamentals",
      "Generative AI",
      "LLM Application Fundamentals",
      "Prompt Engineering",
      "AI-Assisted Software Development",
      "AI Workflow Automation",
      "n8n",
      "Workflow Automation",
      "API-Based Automation",
      "JSON Data Processing",
      "Data Processing Fundamentals",
      "Automation Architecture"
    ]
  },

  // ============================================================
  // AUTOMATION & INTEGRATION
  // ============================================================
  {
    category: "Automation & Integrations",
    skills: [
      "n8n",
      "Workflow Automation",
      "REST API Integration",
      "Webhook Integration",
      "GitHub API",
      "LinkedIn API Fundamentals",
      "OpenRouter API",
      "JSON",
      "Event-Driven Workflows",
      "Scheduled Automation",
      "Data Transformation",
      "System Integration"
    ]
  },

  // ============================================================
  // UI/UX & DESIGN
  // ============================================================
  {
    category: "UI/UX & Product Design",
    skills: [
      "Figma",
      "UI Design",
      "UX Fundamentals",
      "Responsive Design",
      "Design Systems Fundamentals",
      "Component-Based UI",
      "Information Architecture",
      "User Flow Design",
      "Wireframing",
      "Prototyping",
      "Accessibility Fundamentals",
      "Visual Hierarchy",
      "Interaction Design Fundamentals"
    ]
  },

  // ============================================================
  // DOCUMENTATION & TECHNICAL COMMUNICATION
  // ============================================================
  {
    category: "Technical Documentation",
    skills: [
      "Technical Writing",
      "Software Documentation",
      "API Documentation",
      "README Development",
      "Architecture Documentation",
      "System Design Documentation",
      "Research Documentation",
      "LaTeX",
      "Technical Reports",
      "Project Documentation",
      "Diagrams & Technical Visualization",
      "Mermaid"
    ]
  },

  // ============================================================
  // ARCHITECTURE & SYSTEM DESIGN
  // ============================================================
  {
    category: "Architecture & System Design",
    skills: [
      "Software Architecture",
      "System Design Fundamentals",
      "Client–Server Architecture",
      "REST Architecture",
      "Event-Driven Architecture Fundamentals",
      "Microservices Fundamentals",
      "Monolithic Architecture",
      "Modular Architecture",
      "Multi-Tenant Architecture",
      "Authentication Architecture",
      "Authorization Architecture",
      "Database Architecture",
      "API Architecture",
      "Scalable Application Design Fundamentals",
      "Security Architecture Fundamentals"
    ]
  },

  // ============================================================
  // RESEARCH & ENGINEERING
  // ============================================================
  {
    category: "Research & Engineering",
    skills: [
      "Technical Research",
      "Cybersecurity Research",
      "Blockchain Research",
      "IoT Security Research",
      "Digital Forensics Research",
      "Software Engineering Research",
      "Literature Review",
      "Problem Decomposition",
      "Technical Analysis",
      "Experimental Prototyping",
      "System Evaluation",
      "Technical Report Writing"
    ]
  }
];

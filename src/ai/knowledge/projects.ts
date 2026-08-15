// ============================================================
// PROJECT KNOWLEDGE MODEL
// ============================================================

export type ProjectStatus =
  | "Concept"
  | "In Development"
  | "Active"
  | "Completed"
  | "Production";

export type ProjectType =
  | "Academic"
  | "Research"
  | "Personal"
  | "Open Source"
  | "Production"
  | "Prototype";

export type ProjectComplexity =
  | "Foundational"
  | "Intermediate"
  | "Advanced"
  | "Research";

export type ProficiencyLevel =
  | "Working"
  | "Proficient"
  | "Advanced";


// ============================================================
// TECHNOLOGY
// ============================================================

export interface ProjectTechnology {
  name: string;
  category:
    | "Language"
    | "Framework"
    | "Database"
    | "Infrastructure"
    | "Security"
    | "Blockchain"
    | "IoT"
    | "Protocol"
    | "Tool"
    | "Library"
    | "Architecture";

  role?: string;
  proficiency?: ProficiencyLevel;
}


// ============================================================
// PROJECT FEATURE
// ============================================================

export interface ProjectFeature {
  name: string;
  description: string;

  category?:
    | "Core"
    | "Security"
    | "Performance"
    | "UX"
    | "Infrastructure"
    | "Analytics"
    | "Automation"
    | "Workflow";

  technologies?: string[];
}


// ============================================================
// ARCHITECTURE
// ============================================================

export interface ProjectArchitecture {
  overview: string;

  flow?: string;

  components?: string[];

  layers?: {
    name: string;
    responsibility: string;
    technologies?: string[];
  }[];

  designPrinciples?: string[];

  architecturalPatterns?: string[];
}


// ============================================================
// SECURITY MODEL
// ============================================================

export interface ProjectSecurity {
  overview: string;

  principles?: string[];

  controls?: string[];

  cryptography?: string[];

  authentication?: string[];

  authorization?: string[];

  integrity?: string[];

  privacy?: string[];

  threatModel?: string[];

  securityConsiderations?: string[];

  limitations?: string[];
}


// ============================================================
// ENGINEERING DECISIONS
// ============================================================

export interface EngineeringDecision {
  decision: string;
  rationale: string;
  alternative?: string;
  tradeoff?: string;
}


// ============================================================
// CHALLENGE / SOLUTION
// ============================================================

export interface ProjectChallenge {
  challenge: string;
  solution: string;
  impact?: string;
}


// ============================================================
// PROJECT OUTCOME
// ============================================================

export interface ProjectOutcome {
  type:
    | "Performance"
    | "Security"
    | "Scalability"
    | "Usability"
    | "Reliability"
    | "Deployment"
    | "Academic"
    | "Research"
    | "Production";

  description: string;

  metric?: string;
}


// ============================================================
// PROJECT LINK
// ============================================================

export interface ProjectLinks {
  github?: string;
  live?: string;
  demo?: string;
  documentation?: string;
  presentation?: string;
  researchPaper?: string;
}


// ============================================================
// PROJECT KNOWLEDGE
// ============================================================

export interface ProjectKnowledge {
  id: string;

  name: string;

  shortDescription: string;

  description: string;

  longDescription?: string;

  type: ProjectType;

  status: ProjectStatus;

  complexity: ProjectComplexity;

  year?: string;

  duration?: string;

  role?: string;

  teamSize?: number;

  domain: string[];

  problemStatement?: string;

  solution?: string;

  architecture: ProjectArchitecture;

  security?: ProjectSecurity;

  technologies: ProjectTechnology[];

  stack: string[];

  features: ProjectFeature[];

  challenges?: ProjectChallenge[];

  engineeringDecisions?: EngineeringDecision[];

  outcomes?: ProjectOutcome[];

  learningOutcomes?: string[];

  conceptsDemonstrated?: string[];

  testing?: string[];

  deployment?: string[];

  scalability?: string[];

  limitations?: string[];

  futureImprovements?: string[];

  links: ProjectLinks;

  tags: string[];

  featured?: boolean;

  confidential?: boolean;
}


// ============================================================
// PROJECTS
// ============================================================

export const projectsKnowledge: ProjectKnowledge[] = [

  // ============================================================
  // CHAINFORENSICS
  // ============================================================

  {
    id: "chainforensics",

    name: "ChainForensics",

    shortDescription:
      "Blockchain-backed IoT digital forensics and evidence integrity platform.",

    description:
      "ChainForensics is a security-focused IoT forensics platform designed to preserve the integrity, provenance, and chain of custody of digital evidence generated by connected devices.",

    longDescription:
      "The system addresses a core challenge in IoT incident response: security-relevant logs and events can be modified, deleted, or disputed after an incident. ChainForensics creates a tamper-evident evidence pipeline in which IoT security events are collected, deterministically serialized, cryptographically hashed, registered on an Ethereum blockchain, and associated with off-chain evidence stored through decentralized storage. A forensic dashboard can then reconstruct and verify the provenance of collected evidence.",

    type: "Research",

    status: "In Development",

    complexity: "Research",

    year: "2026",

    duration: "Semester Project",

    role:
      "System Architect & Full-Stack Security Engineer",

    domain: [
      "Cybersecurity",
      "Digital Forensics",
      "IoT Security",
      "Blockchain",
      "Evidence Integrity",
      "Distributed Systems"
    ],

    problemStatement:
      "IoT environments generate large volumes of security events, but conventional logs can be modified or deleted. This creates challenges for forensic investigations, evidence integrity, timestamp verification, and maintaining a defensible chain of custody.",

    solution:
      "Create a cryptographically verifiable evidence pipeline that connects IoT event collection with deterministic hashing, blockchain registration, decentralized evidence storage, and forensic visualization.",

    architecture: {
      overview:
        "Event-driven security architecture connecting simulated IoT devices, an MQTT messaging layer, an evidence collection service, cryptographic processing, Ethereum smart contracts, decentralized storage, and a forensic dashboard.",

      flow:
        "IoT Device → MQTT Broker → Evidence Collector → Deterministic Serialization → SHA-256 → EvidenceRegistry Smart Contract → IPFS → Forensic Dashboard",

      components: [
        "IoT Event Simulator",
        "MQTT Broker",
        "Evidence Collector",
        "Deterministic JSON Serialization Layer",
        "SHA-256 Hashing Engine",
        "Ethereum Blockchain",
        "EvidenceRegistry.sol",
        "IPFS Storage Layer",
        "Forensic Dashboard"
      ],

      layers: [
        {
          name: "IoT Layer",
          responsibility:
            "Generates security events and telemetry representing connected-device activity.",
          technologies: [
            "TypeScript",
            "ESP32 Concepts",
            "IoT"
          ]
        },
        {
          name: "Messaging Layer",
          responsibility:
            "Transports IoT events between devices and backend services.",
          technologies: [
            "MQTT",
            "Aedes"
          ]
        },
        {
          name: "Evidence Processing Layer",
          responsibility:
            "Normalizes events and generates deterministic cryptographic representations.",
          technologies: [
            "Node.js",
            "TypeScript",
            "SHA-256"
          ]
        },
        {
          name: "Blockchain Layer",
          responsibility:
            "Records tamper-evident evidence metadata and cryptographic hashes.",
          technologies: [
            "Ethereum",
            "Solidity",
            "Hardhat"
          ]
        },
        {
          name: "Storage Layer",
          responsibility:
            "Stores original evidence outside the blockchain while retaining verifiable content addressing.",
          technologies: [
            "IPFS"
          ]
        },
        {
          name: "Forensics Layer",
          responsibility:
            "Provides evidence verification and forensic timeline reconstruction.",
          technologies: [
            "TypeScript",
            "React",
            "Next.js"
          ]
        }
      ],

      architecturalPatterns: [
        "Event-Driven Architecture",
        "Pipeline Architecture",
        "Layered Architecture",
        "Blockchain-Backed Integrity Verification",
        "Off-Chain Data Storage with On-Chain Verification"
      ],

      designPrinciples: [
        "Evidence integrity",
        "Deterministic processing",
        "Separation of evidence storage and verification",
        "Cryptographic verification",
        "Immutable auditability"
      ]
    },

    security: {
      overview:
        "Security is centered around evidence integrity, provenance, tamper detection, and cryptographic verification.",

      principles: [
        "Evidence integrity",
        "Tamper evidence",
        "Chain of custody",
        "Cryptographic provenance",
        "Immutable audit records",
        "Separation of raw evidence from verification metadata"
      ],

      controls: [
        "SHA-256 evidence hashing",
        "Deterministic serialization",
        "Blockchain-backed evidence registration",
        "Content-addressed storage",
        "Evidence verification"
      ],

      cryptography: [
        "SHA-256",
        "Cryptographic hashing",
        "Content addressing"
      ],

      integrity: [
        "Deterministic JSON representation",
        "Hash comparison",
        "On-chain hash registration",
        "Evidence provenance verification"
      ],

      threatModel: [
        "Evidence modification",
        "Evidence deletion",
        "Log tampering",
        "Timestamp manipulation",
        "Loss of chain of custody",
        "Unauthorized evidence alteration"
      ],

      securityConsiderations: [
        "Blockchain immutability does not guarantee the authenticity of the original event source.",
        "Private or sensitive evidence should not be placed directly on a public blockchain.",
        "Access control is required around evidence retrieval and forensic dashboards."
      ],

      limitations: [
        "Current implementation is primarily a prototype/research system.",
        "IoT device authenticity requires additional hardware-level trust mechanisms.",
        "Blockchain transaction latency and cost must be considered for production deployments."
      ]
    },

    technologies: [
      {
        name: "TypeScript",
        category: "Language",
        role: "Primary application language",
        proficiency: "Proficient"
      },
      {
        name: "Node.js",
        category: "Framework",
        role: "Backend and event processing",
        proficiency: "Proficient"
      },
      {
        name: "MQTT",
        category: "Protocol",
        role: "IoT messaging",
        proficiency: "Working"
      },
      {
        name: "Aedes",
        category: "Library",
        role: "MQTT broker",
        proficiency: "Working"
      },
      {
        name: "Ethereum",
        category: "Blockchain",
        role: "Evidence integrity ledger",
        proficiency: "Working"
      },
      {
        name: "Solidity",
        category: "Blockchain",
        role: "Smart contract development",
        proficiency: "Working"
      },
      {
        name: "Hardhat",
        category: "Tool",
        role: "Local blockchain development",
        proficiency: "Working"
      },
      {
        name: "IPFS",
        category: "Infrastructure",
        role: "Off-chain evidence storage",
        proficiency: "Working"
      },
      {
        name: "SHA-256",
        category: "Security",
        role: "Evidence integrity hashing",
        proficiency: "Proficient"
      }
    ],

    stack: [
      "TypeScript",
      "Node.js",
      "MQTT",
      "Aedes",
      "Ethereum",
      "Solidity",
      "Hardhat",
      "IPFS",
      "SHA-256",
      "React",
      "Next.js"
    ],

    features: [
      {
        name: "IoT Security Event Ingestion",
        description:
          "Collects security events generated by connected-device simulations through MQTT.",
        category: "Core",
        technologies: [
          "TypeScript",
          "MQTT"
        ]
      },
      {
        name: "Deterministic Evidence Serialization",
        description:
          "Converts evidence into a deterministic representation before hashing to ensure repeatable integrity verification.",
        category: "Security",
        technologies: [
          "TypeScript"
        ]
      },
      {
        name: "Cryptographic Evidence Hashing",
        description:
          "Generates SHA-256 fingerprints for evidence integrity verification.",
        category: "Security",
        technologies: [
          "SHA-256"
        ]
      },
      {
        name: "Blockchain Evidence Registry",
        description:
          "Records evidence verification metadata and hashes on an Ethereum smart contract.",
        category: "Security",
        technologies: [
          "Ethereum",
          "Solidity"
        ]
      },
      {
        name: "Decentralized Evidence Storage",
        description:
          "Associates original evidence with content-addressed decentralized storage.",
        category: "Infrastructure",
        technologies: [
          "IPFS"
        ]
      },
      {
        name: "Forensic Timeline",
        description:
          "Provides a structured view of security events for incident reconstruction.",
        category: "Analytics",
        technologies: [
          "React",
          "Next.js"
        ]
      }
    ],

    challenges: [
      {
        challenge:
          "Generating reproducible hashes from structured evidence.",
        solution:
          "Use deterministic serialization before applying SHA-256.",
        impact:
          "Makes integrity verification consistent across repeated processing."
      },
      {
        challenge:
          "Avoiding expensive blockchain storage of complete evidence.",
        solution:
          "Store verification metadata and hashes on-chain while keeping original evidence off-chain.",
        impact:
          "Reduces blockchain storage requirements while preserving verifiability."
      }
    ],

    engineeringDecisions: [
      {
        decision:
          "Use SHA-256 rather than storing raw evidence directly on-chain.",
        rationale:
          "Cryptographic hashes provide compact integrity fingerprints.",
        alternative:
          "Store complete evidence directly on-chain.",
        tradeoff:
          "Requires maintaining access to the original off-chain evidence."
      },
      {
        decision:
          "Use deterministic serialization before hashing.",
        rationale:
          "Equivalent JSON objects can have different textual representations.",
        alternative:
          "Hash raw JSON output.",
        tradeoff:
          "Adds a normalization step to the evidence pipeline."
      },
      {
        decision:
          "Separate evidence storage from blockchain verification.",
        rationale:
          "Large forensic artifacts are unsuitable for direct blockchain storage.",
        alternative:
          "Store all evidence on-chain.",
        tradeoff:
          "Requires coordination between IPFS and blockchain metadata."
      }
    ],

    conceptsDemonstrated: [
      "IoT Security",
      "Digital Forensics",
      "Blockchain",
      "Smart Contracts",
      "Cryptographic Hashing",
      "Evidence Integrity",
      "Chain of Custody",
      "Event-Driven Architecture",
      "Distributed Storage",
      "Backend Engineering"
    ],

    testing: [
      "Cryptographic hash verification",
      "Evidence mutation detection",
      "MQTT event ingestion testing",
      "Smart contract interaction testing",
      "Pipeline integration testing"
    ],

    deployment: [
      "Local MQTT infrastructure",
      "Local Ethereum blockchain",
      "Containerized development concepts",
      "Web-based forensic dashboard"
    ],

    scalability: [
      "Batch evidence anchoring",
      "Layer-2 blockchain deployment",
      "Distributed evidence collectors",
      "Horizontal MQTT processing",
      "Decentralized storage scaling"
    ],

    futureImprovements: [
      "Production-grade IPFS integration",
      "Hardware-backed IoT identity",
      "Role-based forensic access control",
      "Automated incident classification",
      "Zero-knowledge evidence verification",
      "Blockchain Layer-2 deployment",
      "Tamper-resistant timestamping",
      "Advanced forensic analytics"
    ],

    links: {
      github: "https://github.com/RishvinReddy/ChainForensics"
    },

    tags: [
      "Cybersecurity",
      "IoT",
      "Blockchain",
      "Digital Forensics",
      "Ethereum",
      "Solidity",
      "IPFS",
      "MQTT",
      "TypeScript"
    ],

    featured: true
  },


  // ============================================================
  // VOTESAFE
  // ============================================================

  {
    id: "votesafe",

    name: "VoteSafe",

    shortDescription:
      "Biometric voting system focused on voter authentication and election integrity.",

    description:
      "VoteSafe is a secure electronic voting system that combines biometric authentication, encrypted vote processing, and auditable election records.",

    longDescription:
      "The project explores how biometric identity verification and cryptographic controls can be combined to strengthen electronic voting workflows. The system separates voter authentication from vote processing while applying encryption and audit mechanisms to protect election data.",

    type: "Academic",

    status: "Completed",

    complexity: "Advanced",

    year: "2026",

    role:
      "System Designer & Developer",

    domain: [
      "Cybersecurity",
      "Biometric Authentication",
      "Secure Voting",
      "Cryptography",
      "Database Systems"
    ],

    problemStatement:
      "Electronic voting systems must balance voter authentication, ballot confidentiality, integrity, auditability, and resistance to unauthorized access.",

    solution:
      "Design an electronic voting workflow that combines biometric authentication with encrypted vote processing and an auditable record structure.",

    architecture: {
      overview:
        "Layered voting architecture separating the voter interface, authentication layer, vote processing, audit layer, and persistent storage.",

      flow:
        "Voter Interface → Biometric Authentication → Authentication Service → Vote Processing → Audit Ledger → PostgreSQL",

      components: [
        "Voting Interface",
        "Biometric Authentication",
        "Authentication Service",
        "Vote Processing Service",
        "Audit Ledger",
        "PostgreSQL Database"
      ],

      architecturalPatterns: [
        "Layered Architecture",
        "Service-Oriented Design",
        "Secure Data Pipeline"
      ]
    },

    security: {
      overview:
        "Security focuses on voter authentication, confidentiality of voting data, access control, and auditability.",

      principles: [
        "Least privilege",
        "Data confidentiality",
        "Authentication",
        "Vote integrity",
        "Auditability"
      ],

      cryptography: [
        "AES-256-GCM",
        "Cryptographic hashing"
      ],

      authentication: [
        "Biometric authentication",
        "Secure authentication flow"
      ],

      authorization: [
        "Role-based access concepts"
      ],

      integrity: [
        "Audit records",
        "Merkle-based verification concepts"
      ],

      securityConsiderations: [
        "Biometric data requires careful protection and should not be treated as ordinary credentials.",
        "Election systems require strong separation between voter identity and ballot data.",
        "Cryptographic guarantees depend on secure key management."
      ]
    },

    technologies: [
      {
        name: "React",
        category: "Framework",
        role: "Voting interface",
        proficiency: "Proficient"
      },
      {
        name: "Node.js",
        category: "Framework",
        role: "Backend services",
        proficiency: "Proficient"
      },
      {
        name: "PostgreSQL",
        category: "Database",
        role: "Persistent storage",
        proficiency: "Working"
      },
      {
        name: "AES-256-GCM",
        category: "Security",
        role: "Authenticated encryption",
        proficiency: "Working"
      },
      {
        name: "Biometrics",
        category: "Security",
        role: "Voter authentication",
        proficiency: "Working"
      }
    ],

    stack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AES-256-GCM",
      "Biometric Authentication"
    ],

    features: [
      {
        name: "Biometric Authentication",
        description:
          "Uses biometric verification as an additional identity assurance mechanism.",
        category: "Security",
        technologies: [
          "Biometrics"
        ]
      },
      {
        name: "Encrypted Vote Processing",
        description:
          "Protects voting data using authenticated encryption mechanisms.",
        category: "Security",
        technologies: [
          "AES-256-GCM"
        ]
      },
      {
        name: "Audit Ledger",
        description:
          "Maintains an auditable representation of election events.",
        category: "Security",
        technologies: [
          "Merkle Tree Concepts"
        ]
      },
      {
        name: "Role-Based Access",
        description:
          "Separates responsibilities across users and administrative functions.",
        category: "Core",
        technologies: [
          "Node.js",
          "PostgreSQL"
        ]
      }
    ],

    conceptsDemonstrated: [
      "Biometric Authentication",
      "Cryptography",
      "Secure Database Design",
      "Access Control",
      "Election Integrity",
      "Auditability",
      "Secure API Design"
    ],

    links: {
      github: "https://github.com/RishvinReddy/VoteSafe"
    },

    tags: [
      "Cybersecurity",
      "Voting",
      "Biometrics",
      "Cryptography",
      "React",
      "Node.js",
      "PostgreSQL"
    ],

    featured: true
  },


  // ============================================================
  // TEXT SEARCH ENGINE
  // ============================================================

  {
    id: "text-search-engine",

    name: "Text Search Engine",

    shortDescription:
      "Algorithmic text-search benchmarking platform comparing Trie, KMP, and brute-force approaches.",

    description:
      "A comparative text-search system implementing multiple string-search strategies and measuring their performance across different inputs.",

    longDescription:
      "The project demonstrates practical algorithm engineering by implementing multiple search approaches and comparing their computational behavior. It emphasizes data structures, pattern matching, complexity analysis, and empirical benchmarking.",

    type: "Academic",

    status: "Completed",

    complexity: "Intermediate",

    year: "2026",

    role:
      "Algorithm Designer & Developer",

    domain: [
      "Data Structures",
      "Algorithms",
      "String Processing",
      "Performance Analysis"
    ],

    problemStatement:
      "Different text-search algorithms exhibit different time and space characteristics depending on the structure of the input and search pattern.",

    solution:
      "Implement multiple search strategies behind a common interface and benchmark their execution characteristics.",

    architecture: {
      overview:
        "Strategy-based architecture allowing multiple search algorithms to operate against the same input interface.",

      flow:
        "User Input → Search Strategy → Algorithm Execution → Benchmark Engine → Performance Results",

      components: [
        "Input Processor",
        "Algorithm Strategy Layer",
        "KMP Search",
        "Trie Search",
        "Brute-Force Search",
        "Benchmark Engine",
        "Results Visualizer"
      ],

      architecturalPatterns: [
        "Strategy Pattern",
        "Modular Algorithm Architecture"
      ]
    },

    technologies: [
      {
        name: "Python",
        category: "Language",
        role: "Implementation language",
        proficiency: "Proficient"
      },
      {
        name: "Trie",
        category: "Library",
        role: "Indexed string search",
        proficiency: "Proficient"
      },
      {
        name: "KMP",
        category: "Library",
        role: "Pattern matching",
        proficiency: "Proficient"
      }
    ],

    stack: [
      "Python",
      "Trie",
      "KMP",
      "Brute Force",
      "Algorithm Benchmarking"
    ],

    features: [
      {
        name: "KMP Search",
        description:
          "Implements Knuth-Morris-Pratt pattern matching.",
        category: "Core",
        technologies: [
          "KMP"
        ]
      },
      {
        name: "Trie Search",
        description:
          "Uses trie-based indexing for efficient prefix-oriented search.",
        category: "Core",
        technologies: [
          "Trie"
        ]
      },
      {
        name: "Algorithm Benchmarking",
        description:
          "Measures execution characteristics across different algorithms and inputs.",
        category: "Performance"
      }
    ],

    conceptsDemonstrated: [
      "Data Structures",
      "String Matching",
      "Algorithm Analysis",
      "Time Complexity",
      "Space Complexity",
      "Strategy Pattern",
      "Benchmarking"
    ],

    links: {},

    tags: [
      "DSA",
      "Algorithms",
      "Python",
      "Trie",
      "KMP",
      "String Search"
    ]
  },


  // ============================================================
  // SMART BUDGET PLANNER
  // ============================================================

  {
    id: "smart-budget-planner",

    name: "Smart Budget Planner",

    shortDescription:
      "Full-stack personal finance management and visualization platform.",

    description:
      "A full-stack financial management application for recording income and expenses, establishing budgets, and visualizing financial activity.",

    longDescription:
      "The Smart Budget Planner demonstrates full-stack application development through a structured financial data model, API-driven backend, interactive dashboard, and visualization layer.",

    type: "Personal",

    status: "Completed",

    complexity: "Intermediate",

    year: "2026",

    role:
      "Full-Stack Developer",

    domain: [
      "Full-Stack Development",
      "Personal Finance",
      "Data Visualization",
      "Dashboard Engineering"
    ],

    architecture: {
      overview:
        "Client-server architecture with a React frontend communicating with backend APIs and a persistent financial data layer.",

      flow:
        "React Client → REST API → Data Layer → Analytics Engine → Dashboard Visualization",

      components: [
        "React Frontend",
        "REST API",
        "Financial Data Layer",
        "Budget Engine",
        "Visualization Layer"
      ],

      architecturalPatterns: [
        "Client-Server Architecture",
        "REST Architecture",
        "Component-Based UI"
      ]
    },

    technologies: [
      {
        name: "TypeScript",
        category: "Language",
        role: "Application development",
        proficiency: "Proficient"
      },
      {
        name: "React",
        category: "Framework",
        role: "Frontend",
        proficiency: "Proficient"
      },
      {
        name: "Node.js",
        category: "Framework",
        role: "Backend",
        proficiency: "Proficient"
      }
    ],

    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "REST API",
      "Dashboard UI",
      "Chart.js"
    ],

    features: [
      {
        name: "Income & Expense Tracking",
        description:
          "Records and categorizes financial transactions.",
        category: "Core"
      },
      {
        name: "Budget Management",
        description:
          "Allows users to define and monitor financial goals.",
        category: "Core"
      },
      {
        name: "Financial Visualization",
        description:
          "Transforms financial data into interactive visual summaries.",
        category: "Analytics",
        technologies: [
          "Chart.js"
        ]
      }
    ],

    conceptsDemonstrated: [
      "Full-Stack Development",
      "REST APIs",
      "React",
      "TypeScript",
      "Data Visualization",
      "Dashboard Design"
    ],

    links: {},

    tags: [
      "Full-Stack",
      "React",
      "TypeScript",
      "Node.js",
      "Finance",
      "Dashboard"
    ]
  },


  // ============================================================
  // OUTING FORM MANAGEMENT
  // ============================================================

  {
    id: "outing-form-management",

    name: "Outing Form Management",

    shortDescription:
      "Production workflow platform for managing university hostel outing requests.",

    description:
      "A production-oriented web application that digitizes the university hostel outing approval workflow and provides role-specific interfaces for students, wardens, and administrators.",

    longDescription:
      "The system replaces manual outing-request processes with a centralized digital workflow. Students submit requests, authorized staff review them, and status changes are reflected through the application. The system demonstrates practical web development, workflow modeling, role separation, and database-backed application design.",

    type: "Production",

    status: "Production",

    complexity: "Intermediate",

    year: "2026",

    role:
      "Full-Stack Developer",

    domain: [
      "Web Development",
      "Workflow Automation",
      "University Administration",
      "Database Applications"
    ],

    problemStatement:
      "Manual hostel outing workflows can create delays, tracking difficulties, and inconsistent record keeping.",

    solution:
      "Provide a centralized web-based workflow for submitting, reviewing, approving, and tracking outing requests.",

    architecture: {
      overview:
        "Role-based web application connected to a backend workflow and relational database.",

      flow:
        "Student Portal → Request Submission → Approval Workflow → Warden Dashboard → Database",

      components: [
        "Student Portal",
        "Authentication Layer",
        "Outing Request System",
        "Approval Workflow",
        "Warden Dashboard",
        "Administrative Interface",
        "MySQL Database"
      ],

      architecturalPatterns: [
        "Role-Based Application Architecture",
        "Client-Server Architecture",
        "CRUD Workflow Architecture"
      ]
    },

    security: {
      overview:
        "Security focuses on role separation, controlled workflow actions, and protection of administrative data.",

      principles: [
        "Role separation",
        "Least privilege",
        "Server-side validation",
        "Controlled administrative operations"
      ],

      authorization: [
        "Student",
        "Warden",
        "Administrator"
      ],

      securityConsiderations: [
        "Authorization must be enforced server-side.",
        "Administrative operations should not rely on client-provided role identifiers.",
        "User-submitted form data requires validation."
      ]
    },

    technologies: [
      {
        name: "HTML5",
        category: "Language",
        role: "Frontend structure"
      },
      {
        name: "CSS3",
        category: "Language",
        role: "Interface styling"
      },
      {
        name: "JavaScript",
        category: "Language",
        role: "Client-side interaction"
      },
      {
        name: "PHP",
        category: "Framework",
        role: "Backend application"
      },
      {
        name: "MySQL",
        category: "Database",
        role: "Persistent data storage"
      }
    ],

    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL"
    ],

    features: [
      {
        name: "Student Request Submission",
        description:
          "Allows students to submit outing requests through a digital form.",
        category: "Core"
      },
      {
        name: "Approval Workflow",
        description:
          "Routes submitted requests to authorized reviewers.",
        category: "Workflow"
      },
      {
        name: "Role-Based Interfaces",
        description:
          "Provides different capabilities for students, wardens, and administrators.",
        category: "Security"
      },
      {
        name: "Live Status Tracking",
        description:
          "Displays the current state of an outing request.",
        category: "UX"
      }
    ],

    outcomes: [
      {
        type: "Production",
        description:
          "Deployed as a practical university hostel workflow application."
      },
      {
        type: "Usability",
        description:
          "Digitizes request submission and approval tracking."
      }
    ],

    conceptsDemonstrated: [
      "Full-Stack Web Development",
      "PHP",
      "MySQL",
      "Role-Based Access",
      "Workflow Automation",
      "CRUD Applications",
      "Database Design"
    ],

    links: {},

    tags: [
      "Production",
      "PHP",
      "MySQL",
      "JavaScript",
      "Workflow",
      "University"
    ],

    featured: true
  },


  // ============================================================
  // DISK SCHEDULING VISUALIZER
  // ============================================================

  {
    id: "disk-scheduling-visualizer",

    name: "Disk Scheduling Visualizer",

    shortDescription:
      "Interactive Operating Systems algorithm visualization and analysis tool.",

    description:
      "A Python-based educational system that visualizes disk scheduling algorithms and compares their seek-time behavior.",

    longDescription:
      "The project provides an interactive representation of classical operating-system disk scheduling strategies. It processes a disk request queue, applies a selected scheduling algorithm, calculates head movement, and visualizes the resulting traversal.",

    type: "Academic",

    status: "Completed",

    complexity: "Foundational",

    year: "2026",

    role:
      "Algorithm Developer",

    domain: [
      "Operating Systems",
      "Algorithms",
      "Data Visualization",
      "Computer Science Education"
    ],

    architecture: {
      overview:
        "Algorithm visualization pipeline that converts disk-request input into scheduling decisions, performance statistics, and graphical output.",

      flow:
        "Input Request Queue → Scheduling Algorithm → Head Movement Calculation → Statistics → Visualization",

      components: [
        "Input Processor",
        "Scheduling Engine",
        "Seek-Time Calculator",
        "Statistics Processor",
        "Matplotlib Visualizer"
      ],

      architecturalPatterns: [
        "Strategy-Based Algorithm Selection",
        "Data Processing Pipeline"
      ]
    },

    technologies: [
      {
        name: "Python",
        category: "Language",
        role: "Implementation language",
        proficiency: "Proficient"
      },
      {
        name: "Matplotlib",
        category: "Library",
        role: "Algorithm visualization",
        proficiency: "Working"
      }
    ],

    stack: [
      "Python",
      "Operating Systems",
      "FCFS",
      "SSTF",
      "SCAN",
      "C-SCAN",
      "LOOK",
      "C-LOOK",
      "Matplotlib"
    ],

    features: [
      {
        name: "FCFS Scheduling",
        description:
          "Processes disk requests in arrival order.",
        category: "Core"
      },
      {
        name: "SSTF Scheduling",
        description:
          "Selects the request with the shortest seek distance.",
        category: "Core"
      },
      {
        name: "SCAN Scheduling",
        description:
          "Moves the disk head in a directional scanning pattern.",
        category: "Core"
      },
      {
        name: "C-SCAN Scheduling",
        description:
          "Implements circular scanning behavior.",
        category: "Core"
      },
      {
        name: "LOOK Scheduling",
        description:
          "Optimizes directional movement without traversing unused disk boundaries.",
        category: "Core"
      },
      {
        name: "C-LOOK Scheduling",
        description:
          "Combines circular scheduling with LOOK behavior.",
        category: "Core"
      },
      {
        name: "Seek-Time Analysis",
        description:
          "Calculates and compares total head movement.",
        category: "Analytics"
      },
      {
        name: "Graphical Visualization",
        description:
          "Displays disk-head movement and scheduling behavior graphically.",
        category: "UX",
        technologies: [
          "Matplotlib"
        ]
      }
    ],

    conceptsDemonstrated: [
      "Operating Systems",
      "Disk Scheduling",
      "Algorithm Design",
      "Performance Analysis",
      "Data Visualization",
      "Python"
    ],

    links: {},

    tags: [
      "Operating Systems",
      "Python",
      "Algorithms",
      "Visualization",
      "FCFS",
      "SSTF",
      "SCAN"
    ]
  }
];

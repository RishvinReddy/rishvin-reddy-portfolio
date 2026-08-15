// ============================================================
// FAQ KNOWLEDGE SYSTEM
// ============================================================

export type FAQCategory =
  | "About"
  | "Engineering"
  | "Services"
  | "Process"
  | "Technology"
  | "Cybersecurity"
  | "IoT"
  | "Blockchain"
  | "Full-Stack"
  | "Projects"
  | "Pricing"
  | "Timeline"
  | "Collaboration"
  | "Internships"
  | "Availability";

export type FAQAudience =
  | "General"
  | "Client"
  | "Recruiter"
  | "Developer"
  | "Student"
  | "Technical";

export type FAQPriority =
  | "Primary"
  | "Secondary"
  | "Supporting";

export interface FAQ {
  id: string;

  question: string;
  answer: string;

  category: FAQCategory;

  audience?: FAQAudience[];

  priority?: FAQPriority;

  tags?: string[];

  keywords?: string[];

  featured?: boolean;

  order?: number;

  relatedSkills?: string[];

  relatedProjects?: string[];

  cta?: {
    label: string;
    href: string;
  };
}


// ============================================================
// FAQ KNOWLEDGE
// ============================================================

export const faqKnowledge: FAQ[] = [

  // ==========================================================
  // ABOUT
  // ==========================================================

  {
    id: "about-rishvin",

    question: "Who is Rishvin Reddy?",

    answer:
      "I am a Computer Science and Engineering student at Woxsen University, specializing in Blockchain, IoT, and Cybersecurity. My work sits at the intersection of secure software engineering, connected systems, distributed technologies, and full-stack development. I build technical projects that are designed to solve concrete engineering problems rather than simply demonstrate a technology.",

    category: "About",

    audience: [
      "General",
      "Recruiter",
      "Client",
      "Technical"
    ],

    priority: "Primary",

    tags: [
      "Profile",
      "Computer Science",
      "Cybersecurity",
      "IoT",
      "Blockchain"
    ],

    keywords: [
      "Rishvin Reddy",
      "computer science student",
      "cybersecurity",
      "IoT",
      "blockchain"
    ],

    featured: true,

    order: 1,

    relatedSkills: [
      "Cybersecurity",
      "IoT",
      "Blockchain",
      "Full-Stack Development"
    ]
  },


  {
    id: "technical-focus",

    question: "What are your primary technical areas?",

    answer:
      "My primary technical focus areas are Cybersecurity, IoT and embedded systems, Blockchain and smart contracts, and Full-Stack Engineering. Supporting areas include databases, computer networking, cloud deployment, DevOps, automation, digital forensics, and secure software architecture.",

    category: "About",

    audience: [
      "General",
      "Recruiter",
      "Technical"
    ],

    priority: "Primary",

    tags: [
      "Skills",
      "Technical Focus"
    ],

    relatedSkills: [
      "Cybersecurity",
      "IoT",
      "Blockchain",
      "Full-Stack Engineering",
      "Cloud",
      "Databases"
    ],

    featured: true,

    order: 2
  },


  {
    id: "career-direction",

    question: "What kind of engineering roles are you interested in?",

    answer:
      "I am primarily interested in engineering roles involving Cybersecurity, Security Engineering, IoT Security, Blockchain Security, Full-Stack Engineering, Backend Engineering, and Cloud or DevSecOps. I am particularly interested in roles where I can work on real systems, understand their architecture, identify engineering and security risks, and contribute to implementation.",

    category: "Availability",

    audience: [
      "Recruiter",
      "General"
    ],

    priority: "Primary",

    tags: [
      "Career",
      "Internship",
      "Engineering"
    ],

    featured: true,

    order: 3,

    relatedSkills: [
      "Cybersecurity",
      "Backend Engineering",
      "Full-Stack Development",
      "IoT Security",
      "Blockchain"
    ]
  },


  // ==========================================================
  // ENGINEERING
  // ==========================================================

  {
    id: "what-do-you-build",

    question: "What kinds of systems do you build?",

    answer:
      "I build software systems, security-focused applications, IoT prototypes, blockchain applications, database-backed platforms, automation workflows, and technical visualization tools. Examples include ChainForensics, a blockchain-backed IoT forensics platform; VoteSafe, a biometric voting system concept; algorithm visualization tools; financial dashboards; and production-oriented workflow applications.",

    category: "Engineering",

    audience: [
      "General",
      "Client",
      "Recruiter",
      "Technical"
    ],

    priority: "Primary",

    tags: [
      "Projects",
      "Engineering",
      "Software"
    ],

    featured: true,

    relatedProjects: [
      "chainforensics",
      "votesafe",
      "smart-budget-planner",
      "outing-form-management"
    ]
  },


  {
    id: "engineering-philosophy",

    question: "What is your approach to software engineering?",

    answer:
      "I prefer an engineering-first approach: understand the problem before selecting technologies, define system boundaries, design the architecture, identify security and failure modes, implement incrementally, test critical paths, and document important decisions. I value maintainability, explicit interfaces, secure defaults, observability, and clear separation of responsibilities over unnecessary complexity.",

    category: "Engineering",

    audience: [
      "Technical",
      "Client",
      "Recruiter",
      "Developer"
    ],

    priority: "Primary",

    tags: [
      "Architecture",
      "Engineering",
      "Security",
      "Design"
    ],

    featured: true,

    relatedSkills: [
      "Software Architecture",
      "System Design",
      "Secure Coding",
      "Testing"
    ]
  },


  {
    id: "technology-selection",

    question: "How do you choose technologies for a project?",

    answer:
      "I choose technologies based on requirements rather than trend value. I consider the problem domain, expected scale, security requirements, deployment environment, team capabilities, maintenance burden, ecosystem maturity, and integration requirements. For example, a relational database may be preferable when strong consistency and structured relationships matter, while event-driven messaging or decentralized storage may make sense for specific IoT or blockchain use cases.",

    category: "Engineering",

    audience: [
      "Technical",
      "Developer",
      "Client"
    ],

    priority: "Primary",

    tags: [
      "Architecture",
      "Technology Selection",
      "System Design"
    ]
  },


  {
    id: "architecture-first",

    question: "Do you design the architecture before development?",

    answer:
      "Yes. For projects with meaningful complexity, I establish the system boundaries, major components, data flows, external dependencies, authentication and authorization model, storage strategy, and major security considerations before implementation. The architecture is refined during development when new constraints or evidence require a change.",

    category: "Engineering",

    audience: [
      "Technical",
      "Client",
      "Developer"
    ],

    tags: [
      "Architecture",
      "System Design",
      "Planning"
    ],

    relatedSkills: [
      "System Design",
      "Software Architecture",
      "Threat Modeling"
    ]
  },


  // ==========================================================
  // FULL STACK
  // ==========================================================

  {
    id: "full-stack",

    question: "Can you build a complete full-stack application?",

    answer:
      "Yes. I work across the frontend, backend, API, database, authentication, deployment, and supporting infrastructure of full-stack applications. My preferred modern stack includes TypeScript, React, Next.js, Node.js, PostgreSQL, REST APIs, Tailwind CSS, Git, Docker, and cloud deployment platforms such as Vercel. The exact stack depends on the project's requirements.",

    category: "Full-Stack",

    audience: [
      "Client",
      "Recruiter",
      "Technical"
    ],

    priority: "Primary",

    featured: true,

    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL"
    ],

    relatedSkills: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL"
    ]
  },


  {
    id: "backend",

    question: "What backend technologies do you work with?",

    answer:
      "My backend experience includes Node.js, Express, Flask, REST API development, server-side validation, authentication and authorization flows, database integration, API integrations, middleware, error handling, and event-driven application concepts. I primarily use TypeScript or JavaScript for modern web backends and Python when the problem is better suited to Python.",

    category: "Full-Stack",

    audience: [
      "Technical",
      "Recruiter",
      "Developer"
    ],

    tags: [
      "Backend",
      "Node.js",
      "Express",
      "Flask",
      "APIs"
    ]
  },


  {
    id: "databases",

    question: "What databases and storage technologies do you use?",

    answer:
      "I work with PostgreSQL, MySQL, MongoDB, IndexedDB, and IPFS depending on the application. My database work includes relational modeling, normalization, constraints, joins, indexes, transactions, data integrity, and application-level access control. For decentralized or content-addressed storage use cases, I have worked with IPFS concepts alongside blockchain systems.",

    category: "Technology",

    audience: [
      "Technical",
      "Developer",
      "Recruiter"
    ],

    tags: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "IPFS",
      "Databases"
    ],

    relatedSkills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Database Engineering",
      "IPFS"
    ]
  },


  // ==========================================================
  // CYBERSECURITY
  // ==========================================================

  {
    id: "cybersecurity-focus",

    question: "What cybersecurity areas do you work in?",

    answer:
      "My cybersecurity focus includes web application security, secure software development, authentication and authorization, OWASP Top 10 concepts, threat modeling, network security fundamentals, cryptography, digital forensics, IoT security, security logging, and vulnerability assessment. I also have practical exposure to security testing through platforms such as PortSwigger Web Security Academy and tools such as Burp Suite.",

    category: "Cybersecurity",

    audience: [
      "General",
      "Recruiter",
      "Technical"
    ],

    priority: "Primary",

    featured: true,

    tags: [
      "Cybersecurity",
      "OWASP",
      "Web Security",
      "Digital Forensics"
    ],

    relatedSkills: [
      "OWASP Top 10",
      "Threat Modeling",
      "Web Application Security",
      "Digital Forensics",
      "Burp Suite"
    ]
  },


  {
    id: "secure-by-design",

    question: "How do you approach security in software projects?",

    answer:
      "I prefer security to be considered during architecture and implementation rather than added only at the end. Depending on the system, this includes server-side validation, secure authentication, authorization, least-privilege access, secure session handling, rate limiting, cryptographic protection where appropriate, security logging, dependency management, and threat modeling. Security controls are selected according to the actual threat model instead of applying cryptography or security mechanisms without a defined purpose.",

    category: "Cybersecurity",

    audience: [
      "Technical",
      "Client",
      "Developer"
    ],

    priority: "Primary",

    featured: true,

    tags: [
      "Secure by Design",
      "Threat Modeling",
      "Application Security"
    ]
  },


  {
    id: "security-testing",

    question: "Can you perform a professional penetration test or security audit?",

    answer:
      "I have practical cybersecurity training and project experience involving web application security, vulnerability analysis, OWASP concepts, Burp Suite, and PortSwigger labs. For formal professional security assessments, the scope, authorization, environment, rules of engagement, and reporting requirements must be established explicitly. I do not represent academic or laboratory experience as equivalent to a certified enterprise penetration-testing engagement.",

    category: "Cybersecurity",

    audience: [
      "Client",
      "Technical",
      "Recruiter"
    ],

    priority: "Primary",

    tags: [
      "Penetration Testing",
      "Security Assessment",
      "Burp Suite",
      "OWASP"
    ]
  },


  {
    id: "cryptography",

    question: "What cryptography concepts do you use?",

    answer:
      "My work includes cryptographic hashing, SHA-256, AES-based authenticated encryption concepts, digital integrity verification, cryptographic fingerprints, and blockchain-related cryptography. I treat cryptography as a security primitive rather than a substitute for sound architecture: secure key management, authentication, authorization, protocol design, and correct implementation remain essential.",

    category: "Cybersecurity",

    audience: [
      "Technical",
      "Developer"
    ],

    tags: [
      "Cryptography",
      "SHA-256",
      "AES",
      "Security"
    ],

    relatedSkills: [
      "SHA-256",
      "AES",
      "Cryptography",
      "Digital Signatures"
    ]
  },


  // ==========================================================
  // IOT
  // ==========================================================

  {
    id: "iot-development",

    question: "Do you work with IoT and embedded systems?",

    answer:
      "Yes. My IoT work includes Arduino, ESP32, ESP8266, sensors, actuators, MQTT communication, device-to-cloud concepts, telemetry, and IoT security. I am particularly interested in the security boundary between physical devices, communication protocols, backend infrastructure, and the data generated by connected systems.",

    category: "IoT",

    audience: [
      "General",
      "Client",
      "Recruiter",
      "Technical"
    ],

    priority: "Primary",

    featured: true,

    tags: [
      "IoT",
      "ESP32",
      "Arduino",
      "MQTT",
      "Embedded Systems"
    ],

    relatedSkills: [
      "ESP32",
      "Arduino",
      "MQTT",
      "IoT Security"
    ]
  },


  {
    id: "iot-cloud",

    question: "Can you connect IoT hardware to a software backend?",

    answer:
      "Yes. A typical architecture can connect sensors or embedded devices to an MQTT or HTTP communication layer, process the incoming telemetry through a backend service, store relevant data, and expose it through an application dashboard or API. The exact implementation depends on latency, reliability, security, connectivity, and deployment requirements.",

    category: "IoT",

    audience: [
      "Client",
      "Technical",
      "Developer"
    ],

    tags: [
      "IoT",
      "MQTT",
      "Backend",
      "Cloud"
    ]
  },


  // ==========================================================
  // BLOCKCHAIN
  // ==========================================================

  {
    id: "blockchain-development",

    question: "What blockchain technologies do you work with?",

    answer:
      "My blockchain work focuses primarily on Ethereum-compatible systems, Solidity smart contracts, Hardhat-based development, cryptographic verification, decentralized storage concepts, and IPFS. My main interest is in practical security and integrity use cases rather than using blockchain simply because a project can technically incorporate it.",

    category: "Blockchain",

    audience: [
      "General",
      "Technical",
      "Recruiter",
      "Client"
    ],

    priority: "Primary",

    featured: true,

    tags: [
      "Ethereum",
      "Solidity",
      "Smart Contracts",
      "IPFS",
      "Web3"
    ],

    relatedSkills: [
      "Ethereum",
      "Solidity",
      "Smart Contracts",
      "IPFS",
      "Hardhat"
    ]
  },


  {
    id: "blockchain-use-cases",

    question: "When should blockchain actually be used?",

    answer:
      "I consider blockchain when multiple parties need a shared, tamper-evident record and traditional centralized storage does not adequately address trust or auditability requirements. For many applications, a conventional database is simpler and more appropriate. In projects such as ChainForensics, blockchain is useful specifically for anchoring evidence integrity metadata rather than storing large evidence files directly on-chain.",

    category: "Blockchain",

    audience: [
      "Technical",
      "Client",
      "Developer"
    ],

    priority: "Primary",

    tags: [
      "Blockchain Architecture",
      "Ethereum",
      "System Design"
    ],

    relatedProjects: [
      "chainforensics"
    ]
  },


  {
    id: "smart-contracts",

    question: "Can you develop smart contracts?",

    answer:
      "I work with Solidity and Ethereum-compatible development environments, including local blockchain development and Hardhat. My smart-contract work is primarily focused on academic, prototype, and research-oriented systems such as evidence registries. Production smart contracts require additional formal testing, security review, access-control analysis, gas optimization, and deployment controls.",

    category: "Blockchain",

    audience: [
      "Technical",
      "Client",
      "Developer"
    ],

    tags: [
      "Solidity",
      "Ethereum",
      "Hardhat",
      "Smart Contracts"
    ]
  },


  // ==========================================================
  // PROJECTS
  // ==========================================================

  {
    id: "featured-project",

    question: "What is your most significant technical project?",

    answer:
      "One of my primary projects is ChainForensics, a blockchain-backed IoT digital forensics platform. It combines IoT event collection, MQTT messaging, deterministic evidence serialization, SHA-256 hashing, Ethereum smart contracts, IPFS-based storage, and forensic visualization to explore tamper-evident evidence preservation and chain of custody.",

    category: "Projects",

    audience: [
      "General",
      "Recruiter",
      "Technical",
      "Client"
    ],

    priority: "Primary",

    featured: true,

    tags: [
      "ChainForensics",
      "IoT",
      "Blockchain",
      "Digital Forensics"
    ],

    relatedProjects: [
      "chainforensics"
    ]
  },


  {
    id: "project-selection",

    question: "What makes your projects different from simple demos?",

    answer:
      "I try to make projects demonstrate engineering decisions rather than only framework usage. For example, ChainForensics addresses evidence integrity and chain of custody; VoteSafe explores authentication, confidentiality, and auditability; the Text Search Engine compares algorithmic strategies and complexity; and the Outing Form Management system addresses a real workflow. Each project is treated as a system with requirements, architecture, implementation constraints, and trade-offs.",

    category: "Projects",

    audience: [
      "Recruiter",
      "Technical",
      "Client"
    ],

    priority: "Primary",

    tags: [
      "Projects",
      "Engineering",
      "Architecture"
    ]
  },


  {
    id: "project-documentation",

    question: "Do you document your projects?",

    answer:
      "Yes. For technically significant projects, I document the problem, architecture, technology choices, data flows, security model, implementation decisions, limitations, and potential future improvements. Where appropriate, documentation also includes API information, deployment instructions, diagrams, and repository information.",

    category: "Projects",

    audience: [
      "Technical",
      "Developer",
      "Recruiter"
    ],

    tags: [
      "Documentation",
      "Architecture",
      "Engineering"
    ]
  },


  // ==========================================================
  // PROCESS
  // ==========================================================

  {
    id: "development-process",

    question: "How does your development process work?",

    answer:
      "My typical process is: 1) understand the problem and requirements, 2) define scope and constraints, 3) design the architecture and data model, 4) identify security considerations and failure modes, 5) implement the core system incrementally, 6) test critical functionality, 7) refine the system based on findings, and 8) document and deploy the result. The exact process is adapted to the project's size and risk level.",

    category: "Process",

    audience: [
      "Client",
      "Technical",
      "Developer"
    ],

    priority: "Primary",

    featured: true,

    tags: [
      "Development Process",
      "Architecture",
      "Testing",
      "Security"
    ]
  },


  {
    id: "requirements",

    question: "What information do you need before starting a project?",

    answer:
      "The most useful starting information is the problem being solved, target users, required functionality, expected platform, important integrations, security or privacy requirements, deadline, deployment expectations, and any existing systems or constraints. A clear problem statement is more valuable than starting with a predetermined technology stack.",

    category: "Process",

    audience: [
      "Client"
    ],

    tags: [
      "Requirements",
      "Discovery",
      "Project Planning"
    ]
  },


  {
    id: "scope-changes",

    question: "How do you handle changes in project scope?",

    answer:
      "I prefer explicit scope management. New requirements are evaluated for their technical impact, dependencies, timeline, security implications, and effect on existing architecture. Small changes can be incorporated during development, while substantial changes should be treated as a revised milestone or scope decision rather than silently added to the original commitment.",

    category: "Process",

    audience: [
      "Client",
      "Technical"
    ],

    tags: [
      "Scope",
      "Project Management",
      "Engineering"
    ]
  },


  {
    id: "testing-process",

    question: "How do you test the systems you build?",

    answer:
      "Testing depends on the system. I use functional testing, API testing, integration testing, debugging, validation of security-critical paths, database checks, and scenario-based testing. Security-focused projects additionally require testing for authorization failures, malformed inputs, integrity violations, and other threats relevant to their threat model.",

    category: "Process",

    audience: [
      "Technical",
      "Developer",
      "Client"
    ],

    tags: [
      "Testing",
      "QA",
      "Security Testing"
    ]
  },


  // ==========================================================
  // SECURITY & PRIVACY
  // ==========================================================

  {
    id: "privacy",

    question: "How do you approach sensitive or private project data?",

    answer:
      "Sensitive data should be minimized, access-controlled, transmitted securely, and stored only when necessary. During development, I prefer using synthetic or anonymized data whenever possible. Production credentials, private keys, passwords, tokens, and other secrets should never be committed to source control and should be managed through appropriate secret-management mechanisms.",

    category: "Cybersecurity",

    audience: [
      "Client",
      "Technical"
    ],

    priority: "Primary",

    tags: [
      "Privacy",
      "Security",
      "Secrets Management",
      "Data Protection"
    ]
  },


  {
    id: "security-limitations",

    question: "Can you guarantee that an application is completely secure?",

    answer:
      "No. No responsible engineer should guarantee absolute security. Security is a risk-management discipline, and vulnerabilities can emerge from software dependencies, infrastructure, configuration, human behavior, new attack techniques, and previously unknown weaknesses. The appropriate goal is to identify relevant threats, reduce attack surface, implement appropriate controls, test them, monitor the system, and continuously improve its security posture.",

    category: "Cybersecurity",

    audience: [
      "Client",
      "Technical",
      "General"
    ],

    priority: "Primary",

    featured: true,

    tags: [
      "Security",
      "Risk",
      "Engineering"
    ]
  },


  // ==========================================================
  // PRICING
  // ==========================================================

  {
    id: "pricing",

    question: "What does a typical project cost?",

    answer:
      "There is no single fixed price because scope, complexity, technology, security requirements, integrations, infrastructure, and delivery expectations can vary significantly. For academic or prototype work, the scope can be defined around milestones. For selected external projects, pricing can be structured around a fixed scope, milestones, or an agreed development engagement. A meaningful estimate requires understanding the actual requirements first.",

    category: "Pricing",

    audience: [
      "Client"
    ],

    priority: "Primary",

    featured: true,

    tags: [
      "Pricing",
      "Projects",
      "Scope"
    ]
  },


  {
    id: "pricing-factors",

    question: "What factors affect project pricing?",

    answer:
      "The major factors are project scope, number of features, architecture complexity, frontend and backend requirements, database design, authentication, third-party integrations, cybersecurity requirements, IoT hardware, blockchain infrastructure, deployment requirements, testing depth, documentation, and ongoing maintenance.",

    category: "Pricing",

    audience: [
      "Client"
    ],

    tags: [
      "Pricing",
      "Scope",
      "Architecture"
    ]
  },


  // ==========================================================
  // TIMELINE
  // ==========================================================

  {
    id: "timeline",

    question: "How long does a project usually take?",

    answer:
      "The timeline depends on scope rather than technology alone. A focused prototype or small module can take days to a few weeks, while a complete full-stack application, IoT system, or security-focused platform can require several weeks or longer. Larger systems are divided into milestones so that architecture, implementation, testing, and review happen progressively.",

    category: "Timeline",

    audience: [
      "Client"
    ],

    priority: "Primary",

    tags: [
      "Timeline",
      "Project Planning"
    ]
  },


  {
    id: "timeline-estimation",

    question: "How do you estimate a project timeline?",

    answer:
      "I break the project into functional and technical components, identify dependencies, estimate implementation and testing effort, account for integration and deployment work, and identify high-risk areas early. Security-sensitive or hardware-dependent work receives additional uncertainty allowance because integration issues can materially affect schedules.",

    category: "Timeline",

    audience: [
      "Client",
      "Technical"
    ],

    tags: [
      "Estimation",
      "Planning",
      "Project Management"
    ]
  },


  // ==========================================================
  // DELIVERABLES
  // ==========================================================

  {
    id: "deliverables",

    question: "What do you deliver at the end of a project?",

    answer:
      "Depending on the project, deliverables can include source code, Git repositories, frontend applications, backend services, APIs, database schemas, architecture diagrams, configuration files, deployment instructions, technical documentation, testing information, security considerations, and demonstration material. Hardware-oriented projects can additionally include firmware, wiring or architecture documentation, and integration details.",

    category: "Services",

    audience: [
      "Client",
      "Technical"
    ],

    priority: "Primary",

    tags: [
      "Deliverables",
      "Documentation",
      "Source Code"
    ]
  },


  {
    id: "source-code",

    question: "Will I receive the source code?",

    answer:
      "For projects where source-code delivery is part of the agreed scope, yes. The repository structure, access model, licensing, deployment configuration, documentation, and ownership terms should be established before development begins.",

    category: "Services",

    audience: [
      "Client"
    ],

    tags: [
      "Source Code",
      "GitHub",
      "Delivery"
    ]
  },


  // ==========================================================
  // IOT / HARDWARE
  // ==========================================================

  {
    id: "hardware-poc",

    question: "Can you build IoT hardware prototypes?",

    answer:
      "Yes. I have experience with Arduino, ESP32, ESP8266, sensors, actuators, MQTT, and hardware-to-software integration. I can develop academic and proof-of-concept systems that connect embedded hardware with software services. Production hardware requires additional electrical engineering, PCB design, certification, manufacturing, enclosure design, reliability testing, and specialized hardware expertise where applicable.",

    category: "IoT",

    audience: [
      "Client",
      "Technical",
      "Recruiter"
    ],

    priority: "Primary",

    tags: [
      "Arduino",
      "ESP32",
      "ESP8266",
      "IoT",
      "Hardware"
    ]
  },


  // ==========================================================
  // COLLABORATION
  // ==========================================================

  {
    id: "collaboration",

    question: "Can you work as part of an engineering team?",

    answer:
      "Yes. I am comfortable working with Git-based workflows, issue tracking, structured repositories, documentation, API contracts, modular codebases, and collaborative development practices. I can contribute as a developer, security-focused engineer, or technical project contributor depending on the team's needs.",

    category: "Collaboration",

    audience: [
      "Recruiter",
      "Client",
      "Technical"
    ],

    priority: "Primary",

    tags: [
      "Git",
      "GitHub",
      "Teamwork",
      "Engineering"
    ]
  },


  {
    id: "open-source",

    question: "Do you work with open-source technologies?",

    answer:
      "Yes. My projects use and build around open-source technologies such as React, Next.js, Node.js, PostgreSQL, Docker, Hardhat, Ethereum tooling, IPFS technologies, Python libraries, and security tooling. I use open-source software where it provides a strong technical foundation while paying attention to licensing, dependencies, maintenance, and security.",

    category: "Collaboration",

    audience: [
      "Developer",
      "Technical",
      "Recruiter"
    ],

    tags: [
      "Open Source",
      "GitHub",
      "Development"
    ]
  },


  // ==========================================================
  // RECRUITMENT / INTERNSHIPS
  // ==========================================================

  {
    id: "internship",

    question: "Are you currently open to internships?",

    answer:
      "Yes. I am open to internship opportunities where I can contribute to real engineering work and continue developing practical experience. I am particularly interested in Cybersecurity, Security Engineering, IoT Security, Blockchain, Full-Stack Development, Backend Engineering, and related software engineering roles.",

    category: "Internships",

    audience: [
      "Recruiter",
      "General"
    ],

    priority: "Primary",

    featured: true,

    tags: [
      "Internship",
      "Career",
      "Recruitment"
    ],

    relatedSkills: [
      "Cybersecurity",
      "IoT Security",
      "Blockchain",
      "Full-Stack Development"
    ]
  },


  {
    id: "internship-value",

    question: "What can you contribute as an intern?",

    answer:
      "I can contribute across implementation, debugging, security analysis, backend development, frontend development, database work, technical documentation, testing, and research-oriented engineering. My strongest value comes from being able to work across system boundaries and connect software engineering with cybersecurity, IoT, and blockchain concepts.",

    category: "Internships",

    audience: [
      "Recruiter",
      "Technical"
    ],

    priority: "Primary",

    tags: [
      "Internship",
      "Engineering",
      "Cybersecurity",
      "Full-Stack"
    ]
  },


  {
    id: "recruiter-project-evidence",

    question: "How can a recruiter evaluate your technical ability?",

    answer:
      "The best evidence is through the projects, repositories, architecture documentation, technical decisions, and demonstrated implementations in this portfolio. Instead of relying only on a list of technologies, I try to show where and why a technology was used, what problem it solved, and what engineering constraints were involved.",

    category: "Internships",

    audience: [
      "Recruiter",
      "Technical"
    ],

    priority: "Primary",

    featured: true,

    tags: [
      "Recruitment",
      "Projects",
      "Portfolio",
      "Evidence"
    ]
  },


  // ==========================================================
  // AVAILABILITY / CONTACT
  // ==========================================================

  {
    id: "start-project",

    question: "What are the next steps to start a project?",

    answer:
      "Start with a short project brief describing the problem, target users, required functionality, preferred timeline, and any technical constraints. I can then determine whether the project aligns with my current capabilities and availability, clarify the scope, identify major technical considerations, and define an appropriate development plan.",

    category: "Availability",

    audience: [
      "Client"
    ],

    priority: "Primary",

    featured: true,

    tags: [
      "Contact",
      "Project",
      "Discovery"
    ],

    cta: {
      label: "Start a Conversation",
      href: "/contact"
    }
  },


  {
    id: "contact",

    question: "How can I contact you?",

    answer:
      "The preferred contact method is the Contact page on this portfolio or email at rishvinreddy@gmail.com. For professional opportunities, you can also connect with me through LinkedIn or explore my public engineering work through GitHub.",

    category: "Availability",

    audience: [
      "General",
      "Recruiter",
      "Client"
    ],

    priority: "Primary",

    featured: true,

    tags: [
      "Contact",
      "Email",
      "LinkedIn",
      "GitHub"
    ],

    cta: {
      label: "Contact Me",
      href: "/contact"
    },

    order: 99
  }
];


// ============================================================
// FAQ HELPERS
// ============================================================

export const featuredFAQs = faqKnowledge.filter(
  (faq) => faq.featured
);


export const primaryFAQs = faqKnowledge.filter(
  (faq) => faq.priority === "Primary"
);


export const getFAQsByCategory = (
  category: FAQCategory
): FAQ[] => {
  return faqKnowledge
    .filter((faq) => faq.category === category)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
};


export const getFAQsByAudience = (
  audience: FAQAudience
): FAQ[] => {
  return faqKnowledge.filter((faq) =>
    faq.audience?.includes(audience)
  );
};


export const searchFAQs = (
  query: string
): FAQ[] => {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) {
    return faqKnowledge;
  }

  return faqKnowledge.filter((faq) => {
    const searchableText = [
      faq.question,
      faq.answer,
      faq.category,
      ...(faq.tags ?? []),
      ...(faq.keywords ?? []),
      ...(faq.relatedSkills ?? [])
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
};

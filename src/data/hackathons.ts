export type HackathonStatus =
  | "registered"
  | "participating"
  | "submitted"
  | "completed"
  | "finalist"
  | "winner";

export type TechnicalDomain =
  | "Cybersecurity"
  | "Full-Stack Engineering"
  | "Cloud and DevOps"
  | "IoT and Embedded Systems"
  | "Blockchain and Web3"
  | "Data and Machine Learning"
  | "Social Impact"
  | "Open Innovation";

export interface HackathonEvidence {
  githubUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  presentationUrl?: string;
  submissionUrl?: string;
  articleUrl?: string;
  certificateUrl?: string;
}

export interface ArchitectureLayer {
  layer: string;
  components: string[];
  description: string;
}

export interface HackathonEntry {
  id: string;
  title: string;
  tagline: string;
  event: string;
  organizer: string;
  track?: string;
  year: number;
  dates: string;
  status: HackathonStatus;
  statusLabel: string;
  domains: TechnicalDomain[];
  role: string;
  team: string;
  summary: string;
  problem: string;
  solution: string;
  technicalDecisions: string[];
  rishvinContributions: string[];
  metricsAndOutcomes: { label: string; value: string; detail?: string }[];
  techStack: string[];
  architectureOverview: string;
  architectureLayers?: ArchitectureLayer[];
  evidence: HackathonEvidence;
  isFeatured?: boolean;
  lessonsLearned?: string;
}

export const HACKATHON_DOMAINS: TechnicalDomain[] = [
  "Cloud and DevOps",
  "Full-Stack Engineering",
  "Cybersecurity",
  "Blockchain and Web3",
  "Data and Machine Learning",
  "Social Impact",
  "IoT and Embedded Systems",
  "Open Innovation",
];

export const HACKATHON_STATUSES: { value: HackathonStatus; label: string }[] = [
  { value: "submitted", label: "Submitted" },
  { value: "completed", label: "Completed" },
  { value: "winner", label: "Winner" },
  { value: "finalist", label: "Finalist" },
  { value: "participating", label: "In Progress" },
  { value: "registered", label: "Registered" },
];

export const hackathons: HackathonEntry[] = [
  {
    id: "heatcredit-environmental-hacks-2026",
    title: "HeatCredit — Environmental Resilience Decision Engine",
    tagline: "AWS-native climate intelligence platform and knapsack budget optimizer mitigating urban heat island risks.",
    event: "Environmental Hacks 2026",
    organizer: "WeMakeDevs & AWS (Bharat Builds Tour - Event 02)",
    track: "Track 02 — Heat and Water Resilience",
    year: 2026,
    dates: "February – March 2026",
    status: "submitted",
    statusLabel: "Submitted · In Official Evaluation",
    domains: ["Cloud and DevOps", "Full-Stack Engineering", "Social Impact", "Data and Machine Learning"],
    role: "Lead Cloud Architect & Full-Stack Engineer",
    team: "Build Bros",
    summary:
      "A climate adaptation system that ingests real-time meteorological telemetry and evaluates physical structures across 7 vulnerability dimensions. Implements a constrained 0/1 knapsack algorithm that maximizes heat reduction per dollar invested under strict municipal or homeowner budgets.",
    problem:
      "Urban heat island (UHI) effects exacerbate thermal stress across dense communities and legacy infrastructure. Property owners and municipal urban planners lack transparent, cost-quantified engineering tools to model which interventions (cool roofs, high-albedo coatings, window glazing, insulation) deliver the highest thermal resilience under constrained capital expenditure budgets.",
    solution:
      "Engineered an automated serverless analytics pipeline on AWS. Ingests Open-Meteo climate data, normalizes building physical parameters, calculates multidimensional Heat Vulnerability Scores (HVS), and solves a dynamic 0/1 knapsack optimization matrix to produce actionable retrofitting portfolios with predicted temperature reduction.",
    technicalDecisions: [
      "Selected AWS SAM (Serverless Application Model) over raw CloudFormation for reproducible, declarative IaC deployments and local debugging parity.",
      "Adopted Amazon DynamoDB with a single-table design using composite partition keys (USER#<id> / SCENARIO#<id>) for single-digit millisecond reads.",
      "Engineered the 0/1 Knapsack optimizer inside an optimized AWS Lambda execution layer in TypeScript to enforce mathematical guarantees over heuristic guesses.",
      "Built OpenAPI 3.0 schema contracts with automated contract testing to eliminate drift between backend payloads and client visualization state.",
    ],
    rishvinContributions: [
      "Architected the complete AWS serverless infrastructure orchestrating AWS Lambda, HTTP API Gateway, and DynamoDB storage.",
      "Implemented the core dynamic programming 0/1 knapsack retrofitting optimizer with budget boundary enforcement.",
      "Developed 141 comprehensive automated unit and integration tests achieving comprehensive test coverage across all 7 API routes.",
      "Designed and deployed the Next.js glassmorphic dashboard on AWS Amplify with interactive scenario modeling and real-time chart projections.",
      "Authored the exhaustive 21-criteria submission write-up covering system architecture, security posture, and climate impact models.",
    ],
    metricsAndOutcomes: [
      {
        label: "Automated Tests",
        value: "141 Passing",
        detail: "Exhaustive unit and integration test suite across all 7 OpenAPI routes",
      },
      {
        label: "API Architecture",
        value: "7 Endpoints",
        detail: "Production OpenAPI 3.0 compliant endpoints deployed via AWS SAM",
      },
      {
        label: "Evaluation Matrix",
        value: "21 / 21",
        detail: "All technical and environmental impact submission criteria satisfied",
      },
      {
        label: "Execution Latency",
        value: "<180ms P95",
        detail: "Optimized cold starts and single-table DynamoDB querying",
      },
    ],
    techStack: [
      "AWS SAM",
      "AWS Lambda",
      "Amazon DynamoDB",
      "Amazon API Gateway",
      "TypeScript",
      "Next.js",
      "Open-Meteo API",
      "AWS Amplify",
      "Tailwind CSS",
    ],
    architectureOverview:
      "A serverless, event-driven architecture where an AWS Amplify-hosted Next.js frontend interacts with an Amazon API Gateway HTTP API. Requests trigger TypeScript AWS Lambda microservices that fetch live meteorological telemetry, compute thermal vulnerability matrices, execute knapsack optimization, and persist scenario artifacts to Amazon DynamoDB.",
    architectureLayers: [
      {
        layer: "Client & Presentation",
        components: ["Next.js App", "AWS Amplify Hosting", "Tailwind CSS", "Recharts"],
        description: "Responsive scenario builder with real-time budget sliders and live vulnerability dials.",
      },
      {
        layer: "API Gateway & Ingress",
        components: ["Amazon API Gateway HTTP API", "CORS Configuration", "OpenAPI 3.0 Contract"],
        description: "Low-latency HTTP routing with payload size validation and structured error handling.",
      },
      {
        layer: "Compute & Optimization",
        components: ["AWS Lambda (Node.js/TypeScript)", "0/1 Knapsack Algorithm", "HVS Scoring Engine"],
        description: "Stateless compute functions executing building vulnerability analysis and budget-constrained portfolio optimization.",
      },
      {
        layer: "Data & External Feeds",
        components: ["Amazon DynamoDB (Single-table)", "Open-Meteo REST API"],
        description: "Durable persistence for user scenarios and historical assessments paired with real-time weather feeds.",
      },
    ],
    evidence: {
      githubUrl: "https://github.com/RishvinReddy/heatcredit-environmental-hacks-2026",
      demoUrl: "https://feature-phase-3-building-evidence.d6yb0i87oun6i.amplifyapp.com/",
      videoUrl: "https://youtu.be/YSq04cWQ8as",
      articleUrl: "https://lnkd.in/p/gzhSDWzy",
      submissionUrl: "https://github.com/RishvinReddy/heatcredit-environmental-hacks-2026/blob/main/SUBMISSION_WRITEUP.md",
    },
    isFeatured: true,
    lessonsLearned:
      "Balancing algorithmic rigor with serverless execution budgets taught me to optimize dynamic programming space complexity. Decoupling the meteorological ingestion layer with client-side caching drastically cut redundant external network requests.",
  },
  {
    id: "wbos-first-commit-2026",
    title: "WBOS — WhatsApp Business Operating System",
    tagline: "Event-driven commerce orchestration platform bringing ERP-grade order processing directly into Meta WhatsApp.",
    event: "First Commit 2026",
    organizer: "First Commit Innovation Challenge",
    track: "Cloud-Native Commerce & Developer Infrastructure",
    year: 2026,
    dates: "January – February 2026",
    status: "submitted",
    statusLabel: "Submitted · Live Architecture Deployment",
    domains: ["Cloud and DevOps", "Full-Stack Engineering"],
    role: "Co-Lead System Architect & Cloud Engineer",
    team: "Rishvin Reddy & Navari Yashwanth Reddy",
    summary:
      "A high-throughput conversational commerce backend orchestrating the Meta WhatsApp Cloud API with asynchronous AWS EventBridge buses and SQS queues. Enables real-time catalog discovery, cart lifecycles, inventory locking, and instant PDF invoice generation directly within chat.",
    problem:
      "Small and medium businesses in mobile-first markets process high transaction volumes over WhatsApp but struggle with manual receipt creation, untracked inventory, and race conditions during high-volume promotions due to the absence of automated ERP integrations.",
    solution:
      "Architected an event-driven AWS serverless backend that decouples incoming Meta webhook web traffic from asynchronous order execution. Utilizes Amazon EventBridge for business event fan-out, DynamoDB transactions for inventory locking, and Amazon Cognito MFA for secure merchant administration.",
    technicalDecisions: [
      "Decoupled webhook ingestion with Amazon SQS buffer to guarantee 200 OK acknowledgments to Meta within 3 seconds, eliminating duplicate webhook delivery.",
      "Used Amazon EventBridge as the central choreography spine for event-driven order events (OrderPlaced, InventoryReserved, InvoiceGenerated).",
      "Enforced DynamoDB TransactWriteItems to maintain transactional isolation and prevent overselling across concurrent buyer chat sessions.",
      "Secured the merchant management dashboard using Amazon Cognito User Pools with enforced Multi-Factor Authentication (MFA).",
    ],
    rishvinContributions: [
      "Engineered the webhook ingestion engine and queue buffering pipeline to reliably handle bursts in inbound chat events.",
      "Implemented transactional inventory decrement logic with optimistic locking on Amazon DynamoDB.",
      "Configured enterprise-grade authentication with Amazon Cognito User Pools, role-based access control, and MFA.",
      "Co-developed the React merchant analytics dashboard and deployed the production stack onto AWS Amplify.",
    ],
    metricsAndOutcomes: [
      {
        label: "Architecture",
        value: "100% Serverless",
        detail: "Zero idle infrastructure cost with automatic scaling on burst traffic",
      },
      {
        label: "Security Posture",
        value: "Cognito MFA",
        detail: "Strict multi-factor authentication protecting all merchant admin operations",
      },
      {
        label: "Event Ingestion",
        value: "Asynchronous",
        detail: "EventBridge bus decoupling chat ingress from database writes",
      },
      {
        label: "Deployment",
        value: "Live on AWS",
        detail: "Active production deployment verified on AWS Amplify",
      },
    ],
    techStack: [
      "TypeScript",
      "AWS Lambda",
      "Amazon EventBridge",
      "Amazon SQS",
      "Amazon DynamoDB",
      "Amazon Cognito",
      "AWS Amplify",
      "React",
      "Meta WhatsApp Cloud API",
      "Tailwind CSS",
    ],
    architectureOverview:
      "Inbound messages from Meta's WhatsApp Cloud API hit an Amazon API Gateway endpoint which validates webhook signatures and buffers events into SQS. Lambda consumers parse customer intents, publish domain events to an Amazon EventBridge event bus, and update DynamoDB transactional tables. Notifications, payment links, and receipts are routed back through WhatsApp API outbound channels.",
    architectureLayers: [
      {
        layer: "Chat Ingress & Webhook",
        components: ["Meta WhatsApp Cloud API", "Amazon API Gateway", "Amazon SQS"],
        description: "Validates HMAC-SHA256 signatures and buffers inbound conversational payloads to prevent timeout retries.",
      },
      {
        layer: "Event Choreography",
        components: ["Amazon EventBridge Bus", "AWS Lambda Handlers"],
        description: "Routes order state changes across independent consumer functions (Inventory, Invoicing, Dispatch).",
      },
      {
        layer: "Storage & Transactions",
        components: ["Amazon DynamoDB (TransactWriteItems)"],
        description: "Maintains atomic locks on product SKU inventory and stores immutable order receipts.",
      },
      {
        layer: "Merchant Portal",
        components: ["React Dashboard", "Amazon Cognito MFA", "AWS Amplify"],
        description: "Role-based administrative control panel allowing merchants to view real-time orders, manage inventory, and track revenues.",
      },
    ],
    evidence: {
      githubUrl: "https://github.com/RishvinReddy/wbos-first-commit",
      demoUrl: "https://main.d3ezkpn1mvdx2a.amplifyapp.com",
      submissionUrl: "https://github.com/RishvinReddy/wbos-first-commit/blob/main/README.md",
    },
    isFeatured: true,
    lessonsLearned:
      "Working with Meta's strict webhook latency timeouts reinforced the power of decoupling ingestion from processing. Introducing Amazon EventBridge allowed independent business services to evolve without modifying the core chat handler.",
  },
  {
    id: "chainforensics-innovation-challenge",
    title: "ChainForensics — Digital Evidence Custody Platform",
    tagline: "Consortium blockchain network enforcing verifiable chain-of-custody and tamper-evident forensic audit trails.",
    event: "State Cyber Innovation & Academic Grand Challenge",
    organizer: "Academic & Cyber Forensics Consortium",
    track: "Cybersecurity, Digital Forensics & Web3",
    year: 2024,
    dates: "January – March 2024",
    status: "completed",
    statusLabel: "Completed · Artifacts & Code Published",
    domains: ["Cybersecurity", "Blockchain and Web3", "Full-Stack Engineering"],
    role: "Sole Blockchain & Full-Stack Architect",
    team: "Solo Project",
    summary:
      "A decentralized evidence management system running on Hyperledger Fabric and IPFS. Eliminates digital tampering in forensic legal investigations by capturing an immutable ledger of evidence handoffs, interactions, and cryptographic integrity verifications.",
    problem:
      "Digital forensic evidence is susceptible to chain-of-custody contamination, improper evidence handling, and court dismissal due to lack of verifiable, tamper-evident non-repudiation between the point of seizure and legal courtroom submission.",
    solution:
      "Engineered chaincode smart contracts on a permissioned Hyperledger Fabric network validating identity via cryptographic signatures. Stores content-addressed large disk images and memory dumps on IPFS while logging cryptographic SHA-256 state transitions on the ledger.",
    technicalDecisions: [
      "Chose Hyperledger Fabric over public EVM networks to satisfy strict government evidence confidentiality, zero gas fee overhead, and explicit node authorization.",
      "Decoupled large forensic disk images onto IPFS using cryptographic content identifiers (CIDs), keeping the distributed ledger lightweight and performant.",
      "Implemented strict Role-Based Access Control (RBAC) ensuring only validated forensic analysts and law enforcement officers can execute state updates.",
    ],
    rishvinContributions: [
      "Engineered chaincode smart contracts in Go enforcing legal evidentiary state machines.",
      "Configured multi-organization Hyperledger Fabric dockerized peer nodes and certificate authorities.",
      "Developed the Next.js evidence tracking UI and Node.js REST API gateway wrapping the Fabric SDK.",
      "Integrated SHA-256 automated hash validation for forensic artifact uploads.",
    ],
    metricsAndOutcomes: [
      {
        label: "Cryptographic Integrity",
        value: "SHA-256 Hashing",
        detail: "Deterministic hashing of all digital evidence generated immediately at point of seizure",
      },
      {
        label: "Consortium Consensus",
        value: "Hyperledger Fabric",
        detail: "Permissioned Byzantine-fault-tolerant enterprise blockchain infrastructure",
      },
      {
        label: "Distributed Storage",
        value: "IPFS Decoupled",
        detail: "Content-addressed off-chain storage for forensic dumps without bloat",
      },
    ],
    techStack: [
      "Hyperledger Fabric",
      "Go",
      "Solidity",
      "TypeScript",
      "Next.js",
      "Docker",
      "IPFS",
      "Node.js",
      "Tailwind CSS",
    ],
    architectureOverview:
      "A consortium blockchain where law enforcement and judicial validation nodes execute endorsement policies. An API gateway communicates with the Fabric network via gRPC, while IPFS nodes manage off-chain storage for gigabyte-scale disk images.",
    evidence: {
      githubUrl: "https://github.com/RishvinReddy/ChainForensics",
    },
    isFeatured: false,
    lessonsLearned:
      "Permissioned enterprise blockchains require deep alignment on certificate authority hierarchies and endorsement policies. Keeping payloads off-chain via IPFS was essential for scale.",
  },
  {
    id: "votesafe-systems-challenge",
    title: "VoteSafe — Biometric Voter Verification & Ledger",
    tagline: "High-integrity electoral prototype pairing multi-factor biometric hashing with AES-256-GCM encrypted ledgers.",
    event: "Campus Cybersecurity & Systems Challenge",
    organizer: "Department of Computer Science & Engineering",
    track: "Security, Cryptography & Systems",
    year: 2023,
    dates: "September – November 2023",
    status: "completed",
    statusLabel: "Completed · Working Prototype Demonstrated",
    domains: ["Cybersecurity", "Full-Stack Engineering"],
    role: "Lead Systems & Security Engineer",
    team: "Rishvin Reddy & Research Peers",
    summary:
      "A secure electronic ballot verification prototype designed to prevent double voting and voter identity spoofing using one-way biometric hashing and client-side encryption.",
    problem:
      "Traditional electronic voting systems struggle with the conflicting dual requirement of complete voter anonymity alongside verifiable single-ballot casting integrity and auditability.",
    solution:
      "Implemented an AES-256-GCM encrypted ledger coupled with irreversible biometric template hashes to guarantee vote anonymity while proving single-cast integrity.",
    technicalDecisions: [
      "Used AES-256-GCM with distinct initialization vectors for each ballot to ensure semantic security and cryptographic authenticity.",
      "Separated voter authentication tokens from ballot records to mathematically prevent correlation between voter identities and their chosen candidates.",
      "Implemented an append-only audit trail with cryptographic checkpoint signatures for independent recounting.",
    ],
    rishvinContributions: [
      "Architected the cryptographic ballot sealing mechanism using Node.js Crypto API.",
      "Constructed the database schema with row-level integrity checks in PostgreSQL.",
      "Designed the React verification interface with client-side credential verification.",
    ],
    metricsAndOutcomes: [
      {
        label: "Cryptographic Standard",
        value: "AES-256-GCM",
        detail: "Authenticated encryption guaranteeing data privacy and tampering prevention",
      },
      {
        label: "Anonymity Model",
        value: "Zero Voter Linkage",
        detail: "Cryptographically separated identity tokens from cast ballot choices",
      },
      {
        label: "Audit Trail",
        value: "100% Verifiable",
        detail: "Append-only checkpoint signatures validated against synthetic load datasets",
      },
    ],
    techStack: [
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "Crypto API",
      "Tailwind CSS",
    ],
    architectureOverview:
      "Voter biometric vectors are converted into irreversible SHA-256 hashes upon check-in. Once authenticated, a single-use blind token is minted, enabling the voter to cast an AES-256-GCM encrypted ballot recorded directly to an append-only database ledger.",
    evidence: {
      githubUrl: "https://github.com/RishvinReddy/VoteSafe",
    },
    isFeatured: false,
    lessonsLearned:
      "Separating authentication from authorization in high-stakes cryptographic systems is paramount. Blind tokens provided the required mathematical barrier between identity and choice.",
  },
];

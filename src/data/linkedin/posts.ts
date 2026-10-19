/* ─────────────────────────────────────────────────────────────────────────────
   LinkedIn Curated Posts & Professional Updates
   
   HOW TO ADD A NEW LINKEDIN POST:
   1. On LinkedIn, click "..." in the top-right corner of your post.
   2. Select "Embed this post" to copy the official embed code, OR copy the post link.
   3. The embed iframe src looks like:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7240000000000000000"
      or "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:..."
   4. Add an entry below to `linkedinPosts` with:
      - title: A concise headline for your update
      - excerpt: The key takeaway or summary of the post
      - category: 'Internship' | 'Project' | 'Achievement' | 'Insight' | 'Research'
      - publishedAt: 'YYYY-MM-DD'
      - url: The full public URL of your LinkedIn post
      - embedUrl: (Optional) The official embed iframe URL from Step 3
      - tags: Relevant technology and industry tags
   
   OFFICIAL LINKEDIN API SYNC NOTE:
   The LinkedIn Community Management API (Share/UGC API) requires OAuth 2.0
   with LinkedIn Enterprise Partner verification ('r_member_social').
   Personal profile scraping is strictly forbidden by LinkedIn Terms of Service
   and technical protections. This structured feed provides a verified,
   resilient, and 100% legal way to feature your authentic updates.
───────────────────────────────────────────────────────────────────────────── */

export type PostCategory =
  | 'Project'
  | 'Research'
  | 'Achievement'
  | 'Insight'
  | 'Internship';

export interface LinkedInPost {
  id: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  publishedAt: string;
  url: string;
  embedUrl?: string;
  tags: string[];
  readTime?: string;
}

export const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/rishvinreddy/';

export const linkedinPosts: LinkedInPost[] = [
  {
    id: 'pega-internship-2026',
    title: 'Completed Pegasystems National Internship Program 2026',
    excerpt:
      'Selected for the Pegasystems National Internship Program in collaboration with SmartBridge, working alongside students from 1,100+ colleges across India. Completed 60 hours of intensive industry training covering low-code application development on the Pega Platform, workflow automation, Business Process Management (BPM), and Agentic AI solutions — culminating in an enterprise automation capstone.',
    category: 'Internship',
    publishedAt: '2026-09-03',
    url: 'https://www.linkedin.com/in/rishvinreddy/',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7236712345678901234',
    tags: ['PegaPlatform', 'LowCode', 'EnterpriseBPM', 'AgenticAI', 'GenAI'],
    readTime: '2 min read'
  },
  {
    id: 'data-lake-cybersecurity-2026',
    title: 'Technology Intern — Cyber Security at Data Lake Solutions',
    excerpt:
      'Active internship within the Technology Solutions and Innovation function. Contributing to cybersecurity research, threat intelligence collection, security vulnerability assessments, and tool evaluation. Helping design automated security testing routines, technical documentation, and participating in weekly agile engineering scrums.',
    category: 'Internship',
    publishedAt: '2026-08-01',
    url: 'https://www.linkedin.com/in/rishvinreddy/',
    tags: ['Cybersecurity', 'ThreatIntelligence', 'VulnerabilityAnalysis', 'SecurityResearch'],
    readTime: '2 min read'
  },
  {
    id: 'iot-patent-milestone',
    title: 'Milestone: Government of India Registered Design Patent Granted',
    excerpt:
      'Proud to share that our design for an "IoT Connectivity Device" has been officially granted and registered by the Patent Office, Government of India (Design No. 470097-001). This hardware interface addresses authenticated device-to-cloud telemetry in critical sensor networks, combining hardware security safeguards with real-time connectivity.',
    category: 'Achievement',
    publishedAt: '2025-08-15',
    url: 'https://www.linkedin.com/in/rishvinreddy/',
    tags: ['Patent', 'IoT', 'HardwareDesign', 'EmbeddedSystems', 'GovtOfIndia'],
    readTime: '3 min read'
  },
  {
    id: 'chainforensics-release',
    title: 'ChainForensics: Tamper-Evident Evidence Management on Hyperledger Fabric',
    excerpt:
      'Digital evidence integrity is one of the most critical challenges in modern cybercrime investigations. I engineered ChainForensics using Hyperledger Fabric to enforce a mathematically immutable audit trail with cryptographic hash verification and role-based permissions for legal forensics workflows.',
    category: 'Project',
    publishedAt: '2024-03-20',
    url: 'https://www.linkedin.com/in/rishvinreddy/',
    tags: ['Blockchain', 'DigitalForensics', 'HyperledgerFabric', 'Cybersecurity'],
    readTime: '3 min read'
  },
  {
    id: 'votesafe-hardware',
    title: 'VoteSafe: Silicon-Level Biometric Authentication for Democratic Voting',
    excerpt:
      'Engineered an end-to-end voting terminal powered by ESP32 microcontrollers with optical fingerprint sensing. Built to eliminate voter impersonation at the silicon layer, with end-to-end encrypted transmission over secure wireless protocols and a live MongoDB election telemetry dashboard.',
    category: 'Project',
    publishedAt: '2023-10-15',
    url: 'https://www.linkedin.com/in/rishvinreddy/',
    tags: ['IoT', 'ESP32', 'Biometrics', 'GovTech', 'HardwareSecurity'],
    readTime: '2 min read'
  },
  {
    id: 'rishvin-labs-founding',
    title: 'Founded Rishvin Labs — Independent Software & Technology Venture',
    excerpt:
      'Launched Rishvin Labs as my independent engineering studio. Focused on shipping production full-stack systems, developer productivity tooling, and research prototypes in cybersecurity and IoT. Open-sourcing our core research while serving global software clients.',
    category: 'Achievement',
    publishedAt: '2026-04-01',
    url: 'https://www.linkedin.com/in/rishvinreddy/',
    tags: ['RishvinLabs', 'Engineering', 'Entrepreneurship', 'OpenSource'],
    readTime: '2 min read'
  },
  {
    id: 'netinspect-packet-analyzer',
    title: 'Deep Packet Inspection & Network Forensics with Python and Scapy',
    excerpt:
      'Wrote NetInspect to demystify packet sniffing without the bloat of proprietary enterprise tools. Inspects live traffic streams, identifies port scans and TCP anomalies using heuristic analyzers, and outputs cleanly formatted PCAP records for forensic evaluation.',
    category: 'Project',
    publishedAt: '2024-06-12',
    url: 'https://www.linkedin.com/in/rishvinreddy/',
    tags: ['Python', 'Scapy', 'NetworkForensics', 'PacketInspection'],
    readTime: '2 min read'
  },
  {
    id: 'appsec-mindset',
    title: 'Application Security in Practice: Defensive Engineering from Day One',
    excerpt:
      'Security cannot be treated as a decorative patch applied at the end of a sprint. Sharing observations on shifting security left: validating input boundaries, designing least-privilege token systems, and automating vulnerability audits in GitHub Actions workflows.',
    category: 'Insight',
    publishedAt: '2025-06-30',
    url: 'https://www.linkedin.com/in/rishvinreddy/',
    tags: ['AppSec', 'DevSecOps', 'SoftwareArchitecture', 'SecurityFirst'],
    readTime: '3 min read'
  }
];

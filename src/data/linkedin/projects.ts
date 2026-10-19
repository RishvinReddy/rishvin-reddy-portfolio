/* ─────────────────────────────────────────────────────────────────────────────
   LinkedIn Featured Projects & Case Studies
   Directly linked to verified case studies in the portfolio.
───────────────────────────────────────────────────────────────────────────── */

export interface FeaturedProject {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  portfolioUrl: string;
  githubUrl?: string;
  domain: string;
  badge?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'ChainForensics',
    slug: 'chainforensics',
    tagline: 'Hyperledger Fabric Digital Evidence Management',
    description:
      'Enterprise blockchain architecture designed for digital forensics investigations. Enforces an immutable audit log, cryptographic hash verification, and strict role-based access controls to guarantee legal chain of custody.',
    highlights: [
      'Immutable evidence audit trail backed by private consortium ledger.',
      'Cryptographic SHA-256 verification prevents evidence tampering.',
      'Role-based permissions for investigators, forensic examiners, and legal officers.'
    ],
    stack: ['Hyperledger Fabric', 'Node.js', 'React', 'Docker', 'IPFS', 'Cryptography'],
    portfolioUrl: '/portfolio/chainforensics',
    githubUrl: 'https://github.com/RishvinReddy',
    domain: 'Blockchain · Forensics',
    badge: 'Flagship Architecture'
  },
  {
    name: 'VoteSafe',
    slug: 'votesafe',
    tagline: 'Biometric ESP32 Fingerprint Voting System',
    description:
      'Tamper-resistant IoT voting terminal combining hardware biometric authentication with end-to-end encrypted vote transmission. Guarantees single-voter integrity at the silicon level with an encrypted real-time dashboard for election monitoring.',
    highlights: [
      'Silicon-level fingerprint verification using ESP32 microcontroller.',
      'End-to-end encrypted transmission over secure wireless protocols.',
      'Real-time administrative telemetry dashboard with MongoDB persistence.'
    ],
    stack: ['ESP32', 'Embedded C++', 'Node.js', 'Express', 'MongoDB', 'Hardware Design'],
    portfolioUrl: '/portfolio/votesafe',
    githubUrl: 'https://github.com/RishvinReddy',
    domain: 'IoT · GovTech',
    badge: 'Hardware & Silicon'
  },
  {
    name: 'NetInspect',
    slug: 'netinspect',
    tagline: 'Real-Time Network Packet Analyzer & IDS',
    description:
      'High-performance Python network traffic inspection tool utilizing Scapy for deep packet analysis. Features custom protocol dissection, anomaly detection algorithms, and live PCAP streaming for security engineers.',
    highlights: [
      'Real-time packet sniffing and dissection across TCP/UDP/ICMP/DNS.',
      'Rule-based heuristic detection for suspicious port scans and payload anomalies.',
      'Interactive desktop analysis interface built with PyQt5 and custom charting.'
    ],
    stack: ['Python', 'Scapy', 'PyQt5', 'Socket Programming', 'Network Security'],
    portfolioUrl: '/portfolio/netinspect',
    githubUrl: 'https://github.com/RishvinReddy',
    domain: 'Cybersecurity · Networking',
    badge: 'Security Tooling'
  },
  {
    name: 'Smart Irrigation',
    slug: 'smart-irrigation',
    tagline: 'Precision AgriTech IoT Telemetry Network',
    description:
      'Automated agricultural telemetry system with multi-sensor environmental arrays, soil moisture threshold triggers, and MQTT pump actuation. Visualized through a Node-RED industrial dashboard for remote farm stewardship.',
    highlights: [
      'Closed-loop automated water distribution reducing wastage by over 35%.',
      'Lightweight MQTT pub/sub protocol designed for low-bandwidth rural deployments.',
      'Continuous telemetry logging with historical humidity and temperature analytics.'
    ],
    stack: ['Arduino', 'MQTT', 'Node-RED', 'Python', 'Sensors & Actuators'],
    portfolioUrl: '/portfolio/smart-irrigation',
    githubUrl: 'https://github.com/RishvinReddy',
    domain: 'IoT · AgriTech',
    badge: 'Precision IoT'
  }
];

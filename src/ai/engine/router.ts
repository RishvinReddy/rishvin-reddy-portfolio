import Fuse from 'fuse.js';

export enum Intent {
  COMMAND = "COMMAND",
  PROJECT_SEARCH = "PROJECT_SEARCH",
  SPECIFIC_PROJECT_INFO = "SPECIFIC_PROJECT_INFO",
  SKILLS_INFO = "SKILLS_INFO",
  RESUME_INFO = "RESUME_INFO",
  FAQ_INFO = "FAQ_INFO",
  CONTACT_INFO = "CONTACT_INFO",
  PATENT_INFO = "PATENT_INFO",
  EXPLAIN_CODE = "EXPLAIN_CODE",
  GENERAL = "GENERAL",
}

export interface ParsedIntent {
  intent: Intent;
  query: string;
  command?: string;
  args?: string[];
}

// Training dataset for intents
const intentTrainingData = [
  // PROJECT_SEARCH
  { text: "show me your projects", intent: Intent.PROJECT_SEARCH },
  { text: "what have you built", intent: Intent.PROJECT_SEARCH },
  { text: "do you have a portfolio", intent: Intent.PROJECT_SEARCH },
  { text: "what did you make", intent: Intent.PROJECT_SEARCH },
  { text: "tell me about chainforensics", intent: Intent.PROJECT_SEARCH },
  { text: "what is vote", intent: Intent.PROJECT_SEARCH },
  
  // SKILLS_INFO
  { text: "what is your tech stack", intent: Intent.SKILLS_INFO },
  { text: "what programming languages do you know", intent: Intent.SKILLS_INFO },
  { text: "what are your skills", intent: Intent.SKILLS_INFO },
  { text: "are you good at react", intent: Intent.SKILLS_INFO },
  { text: "do you know python", intent: Intent.SKILLS_INFO },
  { text: "what frameworks do you use", intent: Intent.SKILLS_INFO },
  
  // RESUME_INFO
  { text: "where did you go to college", intent: Intent.RESUME_INFO },
  { text: "what is your education", intent: Intent.RESUME_INFO },
  { text: "can i see your resume", intent: Intent.RESUME_INFO },
  { text: "what is your cgpa", intent: Intent.RESUME_INFO },
  { text: "where did you graduate from", intent: Intent.RESUME_INFO },
  { text: "what degree do you have", intent: Intent.RESUME_INFO },
  
  // FAQ_INFO
  { text: "how much do you charge", intent: Intent.FAQ_INFO },
  { text: "what are your rates", intent: Intent.FAQ_INFO },
  { text: "how long does a project take", intent: Intent.FAQ_INFO },
  { text: "what is the timeline", intent: Intent.FAQ_INFO },
  { text: "how do we start", intent: Intent.FAQ_INFO },
  { text: "what is the process", intent: Intent.FAQ_INFO },
  
  // CONTACT_INFO
  { text: "how can i contact you", intent: Intent.CONTACT_INFO },
  { text: "what is your email", intent: Intent.CONTACT_INFO },
  { text: "where is your linkedin", intent: Intent.CONTACT_INFO },
  { text: "i want to hire you", intent: Intent.CONTACT_INFO },
  { text: "let's work together", intent: Intent.CONTACT_INFO },
  { text: "reach out to you", intent: Intent.CONTACT_INFO },
  
  // PATENT_INFO
  { text: "do you have any patents", intent: Intent.PATENT_INFO },
  { text: "what did you invent", intent: Intent.PATENT_INFO },
  { text: "tell me about your inventions", intent: Intent.PATENT_INFO },
  { text: "intellectual property", intent: Intent.PATENT_INFO },
  
  // EXPLAIN_CODE
  { text: "explain this code", intent: Intent.EXPLAIN_CODE },
  { text: "what does this file do", intent: Intent.EXPLAIN_CODE },
  { text: "how does this script work", intent: Intent.EXPLAIN_CODE },
  { text: "analyze this code", intent: Intent.EXPLAIN_CODE },
  { text: "can you explain what i'm looking at", intent: Intent.EXPLAIN_CODE },
  
  // SPECIFIC_PROJECT_INFO
  { text: "how does it work", intent: Intent.SPECIFIC_PROJECT_INFO },
  { text: "explain the architecture", intent: Intent.SPECIFIC_PROJECT_INFO },
  { text: "what is the tech stack for this", intent: Intent.SPECIFIC_PROJECT_INFO },
  { text: "how was this built", intent: Intent.SPECIFIC_PROJECT_INFO },
];

const fuse = new Fuse(intentTrainingData, {
  keys: ['text'],
  threshold: 0.4, // lower is more strict
  includeScore: true,
});

export function parseIntent(message: string, currentContextId?: string, isFileOpen?: boolean): ParsedIntent {
  const trimmed = message.trim();
  const lower = trimmed.toLowerCase();

  // 1. Exact Commands
  if (trimmed.startsWith('/')) {
    const parts = trimmed.split(' ');
    const cmd = parts[0].substring(1).toLowerCase();
    const args = parts.slice(1);
    
    if (cmd === 'explain' && isFileOpen) {
      return { intent: Intent.EXPLAIN_CODE, query: trimmed, command: cmd, args };
    }
    
    return { intent: Intent.COMMAND, query: trimmed, command: cmd, args };
  }

  // 2. Run NLP classification
  const results = fuse.search(lower);
  
  if (results.length > 0) {
    const bestMatch = results[0];
    // If we match a specific project intent but no project context, fallback
    if (bestMatch.item.intent === Intent.SPECIFIC_PROJECT_INFO && !currentContextId) {
      // Fallback
    } else {
      return { intent: bestMatch.item.intent, query: trimmed };
    }
  }

  // Fallback heuristic for code explanation if they just typed "what is this" while a file is open
  if (isFileOpen && (lower.includes('what') || lower.includes('explain') || lower.includes('how')) && (lower.includes('this') || lower.includes('it') || lower.includes('file') || lower.includes('code'))) {
    return { intent: Intent.EXPLAIN_CODE, query: trimmed };
  }

  return { intent: Intent.GENERAL, query: trimmed };
}

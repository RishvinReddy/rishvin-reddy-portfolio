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
  RECOMMENDATIONS_INFO = "RECOMMENDATIONS_INFO",
  RECRUITER_INFO = "RECRUITER_INFO",
  NAVIGATE = "NAVIGATE",
  EXPLAIN_CODE = "EXPLAIN_CODE",
  GENERAL = "GENERAL",
  GREETING = "GREETING",
  SYNTHESIS = "SYNTHESIS" // For multi-domain questions
}

export interface ParsedIntent {
  intent: Intent;
  query: string;
  command?: string;
  args?: string[];
  entities: string[];
}

// Training dataset for intents
const intentTrainingData = [
  // GREETING
  { text: "hello", intent: Intent.GREETING },
  { text: "hi", intent: Intent.GREETING },
  { text: "hey", intent: Intent.GREETING },
  { text: "good morning", intent: Intent.GREETING },
  { text: "yo", intent: Intent.GREETING },
  { text: "greetings", intent: Intent.GREETING },
  { text: "how are you", intent: Intent.GREETING },

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
  { text: "what is your work experience", intent: Intent.RESUME_INFO },
  { text: "where did you work", intent: Intent.RESUME_INFO },
  { text: "pega internship", intent: Intent.RESUME_INFO },
  
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
  { text: "iot patent", intent: Intent.PATENT_INFO },
  { text: "iot connectivity device", intent: Intent.PATENT_INFO },
  { text: "government of india patent", intent: Intent.PATENT_INFO },
  
  // RECOMMENDATIONS_INFO
  { text: "what do people say about rishvin", intent: Intent.RECOMMENDATIONS_INFO },
  { text: "show me recommendations", intent: Intent.RECOMMENDATIONS_INFO },
  { text: "what are your recommendations", intent: Intent.RECOMMENDATIONS_INFO },
  { text: "testimonials", intent: Intent.RECOMMENDATIONS_INFO },
  { text: "endorsements", intent: Intent.RECOMMENDATIONS_INFO },
  { text: "what do mentors say about you", intent: Intent.RECOMMENDATIONS_INFO },
  { text: "who recommended you", intent: Intent.RECOMMENDATIONS_INFO },
  { text: "professors recommendations", intent: Intent.RECOMMENDATIONS_INFO },
  { text: "pega mentor recommendation", intent: Intent.RECOMMENDATIONS_INFO },
  { text: "sachith reddy recommendation", intent: Intent.RECOMMENDATIONS_INFO },
  
  // RECRUITER_INFO
  { text: "why should we hire rishvin", intent: Intent.RECRUITER_INFO },
  { text: "why hire you", intent: Intent.RECRUITER_INFO },
  { text: "recruiter overview", intent: Intent.RECRUITER_INFO },
  { text: "what are your core strengths", intent: Intent.RECRUITER_INFO },
  { text: "what makes you stand out", intent: Intent.RECRUITER_INFO },
  { text: "what roles are you looking for", intent: Intent.RECRUITER_INFO },
  { text: "are you open to work", intent: Intent.RECRUITER_INFO },
  { text: "availability for full time", intent: Intent.RECRUITER_INFO },
  { text: "tell me about your leadership", intent: Intent.RECRUITER_INFO },
  { text: "interview summary", intent: Intent.RECRUITER_INFO },

  // NAVIGATE
  { text: "take me to projects", intent: Intent.NAVIGATE },
  { text: "scroll to recommendations", intent: Intent.NAVIGATE },
  { text: "go to experience", intent: Intent.NAVIGATE },
  { text: "show patent section", intent: Intent.NAVIGATE },
  { text: "take me to about", intent: Intent.NAVIGATE },
  { text: "jump to contact", intent: Intent.NAVIGATE },
  { text: "scroll to labs", intent: Intent.NAVIGATE },
  { text: "show knowledge graph", intent: Intent.NAVIGATE },

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
  { text: "what about its security", intent: Intent.SPECIFIC_PROJECT_INFO },

  // SYNTHESIS
  { text: "how does your cybersecurity background help you build projects", intent: Intent.SYNTHESIS },
  { text: "what skills did you use in chainforensics", intent: Intent.SYNTHESIS },
  { text: "how do your skills relate to your projects", intent: Intent.SYNTHESIS },
];

const fuse = new Fuse(intentTrainingData, {
  keys: ['text'],
  threshold: 0.45,
  includeScore: true,
});

// A simple dictionary for entity extraction
const KNOWN_ENTITIES = [
  "react", "python", "javascript", "typescript", "node.js", "blockchain", "iot", "cybersecurity",
  "chainforensics", "votesafe", "wob", "smart budget planner", "outing form management", "resume", "patent",
  "recommendations", "endorsements", "mentors", "pega", "recruiter", "interview", "navigate", "scroll"
];

function extractEntities(query: string): string[] {
  const lowerQuery = query.toLowerCase();
  return KNOWN_ENTITIES.filter(entity => lowerQuery.includes(entity));
}

export function parseIntent(message: string, currentContextId?: string, isFileOpen?: boolean): ParsedIntent {
  const trimmed = message.trim();
  const lower = trimmed.toLowerCase();
  
  const entities = extractEntities(lower);

  // 1. Exact Commands
  if (trimmed.startsWith('/')) {
    const parts = trimmed.split(' ');
    const cmd = parts[0].substring(1).toLowerCase();
    const args = parts.slice(1);
    
    if (cmd === 'explain' && isFileOpen) {
      return { intent: Intent.EXPLAIN_CODE, query: trimmed, command: cmd, args, entities };
    }
    if (cmd === 'recruiter' || cmd === 'interview') {
      return { intent: Intent.RECRUITER_INFO, query: trimmed, command: cmd, args, entities };
    }
    if (cmd === 'nav' || cmd === 'goto' || cmd === 'scroll') {
      return { intent: Intent.NAVIGATE, query: trimmed, command: cmd, args, entities };
    }
    
    return { intent: Intent.COMMAND, query: trimmed, command: cmd, args, entities };
  }

  // 2. Direct heuristics for high-intent keywords
  if (
    lower.startsWith('take me to') ||
    lower.startsWith('scroll to') ||
    lower.startsWith('go to') ||
    lower.startsWith('jump to') ||
    lower.startsWith('navigate to') ||
    lower.startsWith('show me the section') ||
    lower.includes('scroll down to')
  ) {
    return { intent: Intent.NAVIGATE, query: trimmed, entities };
  }

  if (
    lower.includes('why hire') ||
    lower.includes('why should we hire') ||
    lower.includes('recruiter') ||
    lower.includes('interview') ||
    lower.includes('stand out') ||
    lower.includes('superpower') ||
    lower.includes('hire rishvin')
  ) {
    return { intent: Intent.RECRUITER_INFO, query: trimmed, entities };
  }

  if (lower.includes('recommendation') || lower.includes('endorse') || lower.includes('testimonial') || lower.includes('mentor said') || lower.includes('professors said')) {
    return { intent: Intent.RECOMMENDATIONS_INFO, query: trimmed, entities };
  }

  if (lower.includes('patent') || lower.includes('invent') || lower.includes('470097')) {
    return { intent: Intent.PATENT_INFO, query: trimmed, entities };
  }

  // 3. Coreference Resolution heuristics
  let resolvedQuery = lower;
  if ((lower.includes(" it ") || lower.includes(" this ") || lower.includes(" its ")) && currentContextId) {
    resolvedQuery += ` ${currentContextId}`;
  }

  // 4. Run NLP classification
  const results = fuse.search(resolvedQuery);
  
  if (results.length > 0) {
    const bestMatch = results[0];
    
    // Coreference Check
    if (bestMatch.item.intent === Intent.SPECIFIC_PROJECT_INFO && !currentContextId && entities.length === 0) {
      return { intent: Intent.GENERAL, query: trimmed, entities };
    }
    
    // Multi-domain check
    if (entities.length > 1 && bestMatch.item.intent === Intent.PROJECT_SEARCH && lower.includes("skills")) {
      return { intent: Intent.SYNTHESIS, query: trimmed, entities };
    }

    return { intent: bestMatch.item.intent, query: trimmed, entities };
  }

  // Fallback heuristic for code explanation
  if (isFileOpen && (lower.includes('what') || lower.includes('explain') || lower.includes('how')) && (lower.includes('this') || lower.includes('it') || lower.includes('file') || lower.includes('code'))) {
    return { intent: Intent.EXPLAIN_CODE, query: trimmed, entities };
  }

  return { intent: Intent.GENERAL, query: trimmed, entities };
}

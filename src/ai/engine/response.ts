import { Context } from './context';
import { Intent, ParsedIntent } from './router';
import {
  searchProjects,
  searchSkills,
  getResumeInfo,
  getProjectById,
  searchFAQ,
  getRecommendations,
  getPatentInfo,
  getRecruiterSummary,
  RecruiterSummary,
  findNavTarget,
  NavTarget,
  NAV_TARGETS,
} from './retrieval';
import { ProjectKnowledge } from '../knowledge/projects';
import { SkillCategory } from '../knowledge/skills';
import { Recommendation } from '@/data/recommendations';

export type AIResponseData =
  | { type: "text"; content: string; actions?: {label: string, action: string}[] }
  | { type: "project"; project: ProjectKnowledge; actions?: {label: string, action: string}[] }
  | { type: "project_list"; projects: ProjectKnowledge[]; actions?: {label: string, action: string}[] }
  | { type: "skills"; skills: SkillCategory[]; actions?: {label: string, action: string}[] }
  | { type: "resume"; info: ReturnType<typeof getResumeInfo>; actions?: {label: string, action: string}[] }
  | { type: "recommendations"; recommendations: Recommendation[]; actions?: {label: string, action: string}[] }
  | { type: "patent"; patent: ReturnType<typeof getPatentInfo>; actions?: {label: string, action: string}[] }
  | { type: "recruiter"; recruiter: RecruiterSummary; actions?: {label: string, action: string}[] }
  | { type: "navigate"; target: NavTarget; actions?: {label: string, action: string}[] };

// Templates
const GREETINGS = [
  "Hello! I'm Rishvin's local AI assistant. How can I help you today?",
  "Hi there! I run entirely in your browser with zero latency. What would you like to explore about Rishvin's engineering work?",
  "Hey! I'm an on-device neural index built to answer questions about Rishvin's portfolio, IoT patent, skills, and endorsements. Ask me anything!"
];

const ACKNOWLEDGEMENTS = [
  "Great question.",
  "Here's what I found in the knowledge base:",
  "Let me break that down for you.",
  "Here are the details:"
];

function getRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateResponse(parsed: ParsedIntent, context: Context): { data: AIResponseData, newContext?: Context } {
  const { intent, query, command, args, entities } = parsed;
  const newContext = { ...context };

  if (intent === Intent.GREETING) {
    return {
      data: {
        type: "text",
        content: getRandom(GREETINGS),
        actions: [
          { label: "IoT Patent 🛡️", action: "/patent" },
          { label: "Recommendations ⭐", action: "/recommendations" },
          { label: "Projects 🔍", action: "/projects" },
          { label: "Skills ⚡", action: "/skills" },
        ]
      }
    };
  }

  if (intent === Intent.COMMAND) {
    return handleCommand(command || '', args || [], context);
  }

  if (intent === Intent.EXPLAIN_CODE) {
    if (!context.activeFileContent || !context.activeFile) {
      return { data: { type: "text", content: "You don't have any code files open right now! Open a file from the repository explorer on the left first." } };
    }
    return { data: { type: "text", content: `Code explanation for ${context.activeFile} (Local AI representation).` } };
  }

  if (intent === Intent.RECOMMENDATIONS_INFO) {
    const recs = getRecommendations();
    return {
      data: {
        type: "recommendations",
        recommendations: recs,
        actions: [
          { label: "View on LinkedIn ↗", action: "/linkedin" },
          { label: "Contact Rishvin", action: "/contact" }
        ]
      }
    };
  }

  if (intent === Intent.PATENT_INFO) {
    const pat = getPatentInfo();
    return {
      data: {
        type: "patent",
        patent: pat,
        actions: [
          { label: "IoT Projects", action: "iot" },
          { label: "Technical Skills", action: "/skills" },
          { label: "Contact", action: "/contact" }
        ]
      }
    };
  }

  if (intent === Intent.SPECIFIC_PROJECT_INFO) {
    let targetProjectId = context.activeTopic || context.activeProject;
    const mentionedProject = entities.find(e => ['chainforensics', 'votesafe', 'smart budget planner', 'outing form management'].includes(e));
    if (mentionedProject) {
      targetProjectId = mentionedProject.replace(/ /g, '-');
    }

    if (targetProjectId) {
      const proj = getProjectById(targetProjectId);
      if (proj) {
        newContext.activeTopic = proj.id;
        if (query.toLowerCase().includes('architecture')) {
          return { data: { type: "text", content: `${getRandom(ACKNOWLEDGEMENTS)}\n\n**${proj.name} Architecture**:\n${proj.architecture.overview}` }, newContext };
        }
        if (query.toLowerCase().includes('security')) {
          return { data: { type: "text", content: `${getRandom(ACKNOWLEDGEMENTS)}\n\n**Security Model**:\n${proj.security?.overview || 'No specific security model detailed.'}` }, newContext };
        }
        if (query.toLowerCase().includes('stack') || query.toLowerCase().includes('tech')) {
          return { data: { type: "text", content: `${getRandom(ACKNOWLEDGEMENTS)}\n\n**Tech Stack**:\n${proj.stack.join(', ')}` }, newContext };
        }
        return { 
          data: { type: "project", project: proj }, 
          newContext 
        };
      }
    }
  }

  if (intent === Intent.PROJECT_SEARCH) {
    const searchTarget = entities.length > 0 ? entities[0] : query.replace(/projects?|built|made|portfolio/gi, '').trim();
    const projects = searchProjects(searchTarget);
    
    if (projects.length === 1) {
      newContext.activeTopic = projects[0].id;
      return {
        data: { 
          type: "project", 
          project: projects[0],
          actions: [
            { label: 'Architecture', action: `/architecture ${projects[0].id}` },
            { label: 'Tech Stack', action: `/stack ${projects[0].id}` }
          ]
        },
        newContext
      };
    } else if (projects.length > 1) {
      return { data: { type: "project_list", projects } };
    } else {
      return { data: { type: "text", content: "I couldn't find any specific projects matching that. Try `/projects` to see them all." } };
    }
  }

  if (intent === Intent.SYNTHESIS) {
    return {
      data: {
        type: "text",
        content: `Rishvin specializes in the intersection of Systems Engineering, Cybersecurity, and IoT.\n\nFor example, in **ChainForensics**, rather than building a standard analytics tool, he applied zero-trust cryptographic verification and blockchain heuristics. In his **IoT Connectivity Device Patent** (Indian Patent No. 470097-001), he designed secure telemetry and hardware authentication protocols.`,
        actions: [
          { label: "IoT Patent", action: "/patent" },
          { label: "Explore Projects", action: "/projects" }
        ]
      }
    };
  }

  if (intent === Intent.SKILLS_INFO) {
    const results = searchSkills(query.replace(/skills?|tech|stack/gi, '').trim());
    return { data: { type: "skills", skills: results } };
  }

  if (intent === Intent.RESUME_INFO) {
    const info = getResumeInfo();
    return { data: { type: "resume", info } };
  }

  if (intent === Intent.CONTACT_INFO) {
    const info = getResumeInfo();
    return { 
      data: { 
        type: "text", 
        content: `You can reach out to Rishvin directly:\n\n- **Email**: ${info.profile.email}\n- **LinkedIn**: [linkedin.com/in/rishvinreddy](${info.profile.linkedin})\n- **GitHub**: [github.com/RishvinReddy](${info.profile.github})\n- **Location**: ${info.profile.location}\n\nStatus: **${info.profile.availability}**`,
        actions: [
          { label: "Open Contact Form", action: "/contact" },
          { label: "View Recommendations", action: "/recommendations" }
        ]
      }
    };
  }

  if (intent === Intent.FAQ_INFO) {
    const results = searchFAQ(query.replace(/services?|cost|price|timeline|process|deliverables/gi, '').trim());
    if (results.length > 0) {
      const topMatches = results.slice(0, 2);
      const list = topMatches.map(f => `**${f.question}**\n${f.answer}`).join('\n\n');
      return { data: { type: "text", content: `${getRandom(ACKNOWLEDGEMENTS)}\n\n${list}` } };
    } else {
      return { data: { type: "text", content: "I'm not exactly sure about that specific detail. Try asking about services, pricing, timelines, patent, or recommendations!" } };
    }
  }

  if (intent === Intent.RECRUITER_INFO) {
    const recruiter = getRecruiterSummary();
    return {
      data: {
        type: "recruiter",
        recruiter,
        actions: [
          { label: "IoT Patent 🛡️", action: "/patent" },
          { label: "Recommendations ⭐", action: "/recommendations" },
          { label: "Featured Projects 🔍", action: "/projects" },
          { label: "Contact Directly 📬", action: "/contact" }
        ]
      }
    };
  }

  if (intent === Intent.NAVIGATE) {
    const target = findNavTarget(query);
    if (target) {
      return {
        data: {
          type: "navigate",
          target,
          actions: [
            { label: `Scroll to ${target.name}`, action: `/nav ${target.id}` },
            { label: "Recruiter Summary 💼", action: "/recruiter" }
          ]
        }
      };
    }
    return {
      data: {
        type: "text",
        content: `Where would you like to navigate? Available sections:\n${NAV_TARGETS.map(t => `- **${t.name}** (\`/nav ${t.id}\`)`).join('\n')}`,
        actions: NAV_TARGETS.slice(0, 4).map(t => ({ label: t.name, action: `/nav ${t.id}` }))
      }
    };
  }

  // General Chat Fallback
  return { 
    data: { 
      type: "text", 
      content: "I'm Rishvin's local AI engine running entirely in your browser with zero external API calls. Ask me about his IoT patent, verified LinkedIn recommendations, recruiter summary, projects, or say 'take me to projects' to navigate the page!",
      actions: [
        { label: 'Recruiter Brief 💼', action: '/recruiter' },
        { label: 'IoT Patent 🛡️', action: '/patent' },
        { label: 'Recommendations ⭐', action: '/recommendations' },
        { label: 'Featured Projects 🔍', action: '/projects' },
        { label: 'Tech Stack ⚡', action: '/skills' }
      ]
    }
  };
}

function handleCommand(cmd: string, args: string[], context: Context): { data: AIResponseData, newContext?: Context } {
  if (cmd === 'help') {
    return {
      data: {
        type: "text",
        content: `**Available Commands & Features**:\n- \`/recruiter\` - Recruiter & Tech Interview brief\n- \`/nav <section>\` - Automatically scroll & highlight page sections\n- \`/patent\` - View Indian Design Patent details\n- \`/recommendations\` - View verified LinkedIn recommendations\n- \`/projects\` - List all engineering projects\n- \`/skills\` - Show technical stack & domains\n- \`/resume\` - Show education and credentials\n- \`/contact\` - Direct contact channels & email\n- \`/open <project_id>\` - Load specific project context\n- \`/architecture <project_id>\` - Show architecture breakdown\n- \`/clear\` - Clear conversation`
      }
    };
  }

  if (cmd === 'recruiter' || cmd === 'interview') {
    const recruiter = getRecruiterSummary();
    return {
      data: {
        type: "recruiter",
        recruiter,
        actions: [
          { label: "IoT Patent 🛡️", action: "/patent" },
          { label: "Recommendations ⭐", action: "/recommendations" },
          { label: "Featured Projects 🔍", action: "/projects" },
          { label: "Contact Directly 📬", action: "/contact" }
        ]
      }
    };
  }

  if (cmd === 'nav' || cmd === 'goto' || cmd === 'scroll') {
    const targetQuery = args.join(' ') || '';
    const target = findNavTarget(targetQuery) || (args[0] ? NAV_TARGETS.find(t => t.id === args[0].toLowerCase()) : undefined);
    if (target) {
      return {
        data: {
          type: "navigate",
          target,
          actions: [
            { label: `Jump to ${target.name}`, action: `/nav ${target.id}` }
          ]
        }
      };
    }
    return {
      data: {
        type: "text",
        content: `Please specify a valid section. Examples:\n${NAV_TARGETS.map(t => `- \`/nav ${t.id}\` (${t.name})`).join('\n')}`
      }
    };
  }

  if (cmd === 'patent') {
    const pat = getPatentInfo();
    return { data: { type: "patent", patent: pat } };
  }

  if (cmd === 'recommendations') {
    const recs = getRecommendations();
    return { data: { type: "recommendations", recommendations: recs } };
  }
  
  if (cmd === 'projects') {
    const projects = searchProjects('');
    return { data: { type: "project_list", projects } };
  }

  if (cmd === 'skills') {
    const skills = searchSkills('');
    return { data: { type: "skills", skills } };
  }

  if (cmd === 'resume') {
    const info = getResumeInfo();
    return { data: { type: "resume", info } };
  }

  if (cmd === 'contact') {
    const info = getResumeInfo();
    return { 
      data: {
        type: "text",
        content: `**Direct Contact Channels**:\n\n- **Email**: ${info.profile.email}\n- **LinkedIn**: ${info.profile.linkedin}\n- **GitHub**: ${info.profile.github}\n- **Location**: ${info.profile.location}\n\nStatus: **${info.profile.availability}**`
      }
    };
  }

  if (cmd === 'open' || cmd === 'architecture' || cmd === 'stack' || cmd === 'security') {
    const id = args[0] || context.activeTopic || context.activeProject;
    if (!id) return { data: { type: "text", content: `Please specify a project ID, e.g. /${cmd} chainforensics` } };
    
    const proj = getProjectById(id);
    if (!proj) return { data: { type: "text", content: `Project '${id}' not found.` } };

    if (cmd === 'open') {
      return { data: { type: "project", project: proj } };
    } else if (cmd === 'architecture') {
      return { data: { type: "text", content: `**Architecture for ${proj.name}**:\n${proj.architecture.overview}` } };
    } else if (cmd === 'stack') {
      return { data: { type: "text", content: `**Tech Stack for ${proj.name}**:\n${proj.stack.join(', ')}` } };
    } else if (cmd === 'security') {
      return { data: { type: "text", content: `**Security Model for ${proj.name}**:\n${proj.security?.overview || 'No detailed security model.'}` } };
    }
  }

  return { data: { type: "text", content: `Unknown command: /${cmd}. Type \`/help\` to see all commands.` } };
}

export function generateCodeHeuristic() {
  return "Local code analysis is disabled in this mode.";
}

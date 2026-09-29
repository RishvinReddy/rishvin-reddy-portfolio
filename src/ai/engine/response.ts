import { Context } from './context';
import { Intent, ParsedIntent } from './router';
import { searchProjects, searchSkills, getResumeInfo, getProjectById, searchFAQ } from './retrieval';
import { ProjectKnowledge } from '../knowledge/projects';
import { SkillCategory } from '../knowledge/skills';

export type AIResponseData =
  | { type: "text"; content: string; actions?: {label: string, action: string}[] }
  | { type: "project"; project: ProjectKnowledge; actions?: {label: string, action: string}[] }
  | { type: "project_list"; projects: ProjectKnowledge[]; actions?: {label: string, action: string}[] }
  | { type: "skills"; skills: SkillCategory[]; actions?: {label: string, action: string}[] }
  | { type: "resume"; info: ReturnType<typeof getResumeInfo>; actions?: {label: string, action: string}[] };

// Templates
const GREETINGS = [
  "Hello! I'm Rishvin's local AI assistant. How can I help you today?",
  "Hi there! I run entirely in your browser. What would you like to know about Rishvin's work?",
  "Hey! I'm an on-device AI built to answer questions about Rishvin's engineering portfolio. Ask me anything!"
];

const ACKNOWLEDGEMENTS = [
  "Great question.",
  "Here's what I found:",
  "Let me break that down for you.",
  "Sure thing!"
];

function getRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateResponse(parsed: ParsedIntent, context: Context): { data: AIResponseData, newContext?: Context } {
  const { intent, query, command, args, entities } = parsed;
  const newContext = { ...context };

  if (intent === Intent.GREETING) {
    return { data: { type: "text", content: getRandom(GREETINGS) } };
  }

  if (intent === Intent.COMMAND) {
    return handleCommand(command || '', args || [], context);
  }

  if (intent === Intent.EXPLAIN_CODE) {
    if (!context.activeFileContent || !context.activeFile) {
      return { data: { type: "text", content: "You don't have any code files open right now! Open a file from the repository explorer on the left first." } };
    }
    // Simple text response for code explanation
    return { data: { type: "text", content: `Code explanation for ${context.activeFile} (Local AI representation).` } };
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
      data: { type: "text", content: `That's a great question crossing multiple domains.\n\nRishvin frequently combines his deep knowledge of Cybersecurity and IoT to build secure systems like ChainForensics. Rather than just using a framework, he applies threat modeling and secure-by-design principles (from his Cybersecurity skills) to the architecture (e.g., IoT data collection).` }
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
        content: `You can reach out to Rishvin here:\n\n- Email: ${info.profile.email}\n- LinkedIn: ${info.profile.linkedin}\n- GitHub: ${info.profile.github}\n- Location: ${info.profile.location}\n\nRishvin is currently ${info.profile.availability}.` 
      }
    };
  }

  if (intent === Intent.PATENT_INFO) {
    const info = getResumeInfo();
    if (!info.patent) return { data: { type: "text", content: "I couldn't find any patent information." } };
    const pat = info.patent;
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: { type: "text", content: `Patent Information\n\nTitle: ${pat.title}\nNumber: ${(pat as any).applicationNumber || pat.number}\nRole: ${pat.role}\nDomain: ${pat.domain}\n\n${pat.description}` }
    };
  }

  if (intent === Intent.FAQ_INFO) {
    const results = searchFAQ(query.replace(/services?|cost|price|timeline|process|deliverables/gi, '').trim());
    if (results.length > 0) {
      const topMatches = results.slice(0, 2);
      const list = topMatches.map(f => `${f.question}\n${f.answer}`).join('\n\n');
      return { data: { type: "text", content: `${getRandom(ACKNOWLEDGEMENTS)}\n\n${list}` } };
    } else {
      return { data: { type: "text", content: "I'm not exactly sure. Try asking about my services, pricing, timelines, or process." } };
    }
  }

  // General Chat
  return { 
    data: { 
      type: "text", 
      content: "I'm Rishvin's local AI engine. I run entirely in your browser with no external API calls! You can ask me about Rishvin's projects, skills, patent, contact info, or type `/help` for commands.",
      actions: [
        { label: 'Show Projects', action: '/projects' },
        { label: 'Show Skills', action: '/skills' },
        { label: 'Contact', action: '/contact' }
      ]
    }
  };
}

function handleCommand(cmd: string, args: string[], context: Context): { data: AIResponseData, newContext?: Context } {
  if (cmd === 'help') {
    return { data: { type: "text", content: `Available Commands:\n- /projects - List all projects\n- /skills - Show tech stack\n- /resume - Show education and certifications\n- /contact - Show contact information\n- /open <project_id> - Load specific project context\n- /architecture <project_id> - Show architecture for a project` } };
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
      data: { type: "text", content: `You can reach out to Rishvin here:\n\nEmail: ${info.profile.email}\nLinkedIn: ${info.profile.linkedin}\nGitHub: ${info.profile.github}\nLocation: ${info.profile.location}\n\nRishvin is currently ${info.profile.availability}.` }
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
      return { data: { type: "text", content: `Architecture for ${proj.name}:\n${proj.architecture.overview}` } };
    } else if (cmd === 'stack') {
      return { data: { type: "text", content: `Tech Stack for ${proj.name}:\n${proj.stack.join(', ')}` } };
    } else if (cmd === 'security') {
      return { data: { type: "text", content: `Security for ${proj.name}:\n${proj.security?.overview || 'No detailed security model.'}` } };
    }
  }

  return { data: { type: "text", content: `Unknown command: /${cmd}` } };
}

export function generateCodeHeuristic(_file: string, _content: string) {
  return "Local code analysis is disabled in this mode.";
}

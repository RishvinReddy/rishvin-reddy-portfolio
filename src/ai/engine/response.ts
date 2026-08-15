import { Context, ChatMessage } from './context';
import { Intent, ParsedIntent } from './router';
import { searchProjects, searchSkills, getResumeInfo, getProjectById, searchFAQ } from './retrieval';

export function generateResponse(parsed: ParsedIntent, context: Context): { response: string, actions?: {label: string, action: string}[], newContext?: Context } {
  const { intent, query, command, args } = parsed;

  if (intent === Intent.COMMAND) {
    return handleCommand(command || '', args || [], context);
  }

  if (intent === Intent.EXPLAIN_CODE) {
    if (!context.activeFileContent || !context.activeFile) {
      return { response: "You don't have any code files open right now! Open a file from the repository explorer on the left first." };
    }
    const explanation = generateCodeHeuristic(context.activeFile, context.activeFileContent);
    return { response: explanation };
  }

  if (intent === Intent.SPECIFIC_PROJECT_INFO && context.activeProject) {
    const proj = getProjectById(context.activeProject);
    if (proj) {
      if (query.toLowerCase().includes('architecture')) {
        return { response: `**${proj.name} Architecture**:\n${proj.architecture}` };
      }
      if (query.toLowerCase().includes('security')) {
        return { response: `**Security Model**:\n${proj.securityModel || 'No specific security model detailed.'}` };
      }
      if (query.toLowerCase().includes('stack') || query.toLowerCase().includes('tech')) {
        return { response: `**Tech Stack**:\n${proj.stack.join(', ')}` };
      }
      return { response: `${proj.name} features:\n${proj.features.map(f => `- ${f}`).join('\n')}` };
    }
  }

  if (intent === Intent.PROJECT_SEARCH) {
    const projects = searchProjects(query.replace(/projects?|built|made|portfolio/gi, '').trim());
    if (projects.length === 1) {
      const proj = projects[0];
      return {
        response: `**${proj.name}**\n${proj.description}\n\nStack: ${proj.stack.join(', ')}`,
        actions: [
          { label: 'Architecture', action: `/architecture ${proj.id}` },
          { label: 'Tech Stack', action: `/stack ${proj.id}` }
        ],
        newContext: { ...context, activeProject: proj.id }
      };
    } else if (projects.length > 1) {
      const list = projects.map(p => `- **${p.name}**: ${p.shortDescription}`).join('\n');
      return { response: `Here are some relevant projects:\n${list}\n\nType \`/open <project_id>\` to learn more.` };
    } else {
      return { response: "I couldn't find any specific projects matching that. Try `/projects` to see them all." };
    }
  }

  if (intent === Intent.SKILLS_INFO) {
    const results = searchSkills(query.replace(/skills?|tech|stack/gi, '').trim());
    const list = results.map(r => `**${r.category}**: ${r.skills.join(', ')}`).join('\n\n');
    return { response: `Here is Rishvin's relevant tech stack:\n\n${list}` };
  }

  if (intent === Intent.RESUME_INFO) {
    const info = getResumeInfo();
    const ed = info.education.map(e => `**${e.institution}**\n${e.degree} (${e.duration})\n${e.details.map(d=>`- ${d}`).join('\n')}`).join('\n\n');
    const certs = info.certifications.map(c => `- ${c.name} (${c.issuer})`).join('\n');
    return { response: `**Profile**: ${info.profile.name} | CGPA: ${info.profile.cgpa} | ${info.profile.availability}\n\n**Education**\n${ed}\n\n**Certifications**\n${certs}` };
  }

  if (intent === Intent.CONTACT_INFO) {
    const info = getResumeInfo();
    return { 
      response: `You can reach out to Rishvin here:\n\n- **Email**: ${info.profile.email}\n- **LinkedIn**: [LinkedIn](${info.profile.linkedin})\n- **GitHub**: [GitHub](${info.profile.github})\n- **Location**: ${info.profile.location}\n\nRishvin is currently ${info.profile.availability}.` 
    };
  }

  if (intent === Intent.PATENT_INFO) {
    const info = getResumeInfo();
    return {
      response: `**Patent Information**\n\n- **Title**: ${info.patent.title}\n- **Number**: ${info.patent.number}\n- **Role**: ${info.patent.role}\n- **Domain**: ${info.patent.domain}\n\n${info.patent.description}`
    };
  }

  if (intent === Intent.FAQ_INFO) {
    const results = searchFAQ(query.replace(/services?|cost|price|timeline|process|deliverables/gi, '').trim());
    if (results.length > 0) {
      const topMatches = results.slice(0, 2);
      const list = topMatches.map(f => `**${f.question}**\n${f.answer}`).join('\n\n');
      return { response: `${list}` };
    } else {
      return { response: "I'm not exactly sure. Try asking about my services, pricing, timelines, or process." };
    }
  }

  // General Chat
  return { 
    response: "I'm Rishvin's local AI engine. I run entirely in your browser with no external API calls! You can ask me about Rishvin's projects, skills, patent, contact info, or type `/help` for commands.",
    actions: [
      { label: 'Show Projects', action: '/projects' },
      { label: 'Show Skills', action: '/skills' },
      { label: 'Show Patent', action: 'Tell me about your patent' },
      { label: 'Contact', action: '/contact' }
    ]
  };
}

function handleCommand(cmd: string, args: string[], context: Context) {
  if (cmd === 'help') {
    return { response: `**Available Commands**:\n- \`/projects\` - List all projects\n- \`/skills\` - Show tech stack\n- \`/resume\` - Show education and certifications\n- \`/contact\` - Show contact information\n- \`/open <project_id>\` - Load specific project context\n- \`/architecture <project_id>\` - Show architecture for a project` };
  }
  
  if (cmd === 'projects') {
    const projects = searchProjects('');
    const list = projects.map(p => `- **${p.name}** (\`${p.id}\`)`).join('\n');
    return { response: `**Rishvin's Projects**:\n${list}\n\nType \`/open <id>\` to explore one.` };
  }

  if (cmd === 'skills') {
    const skills = searchSkills('');
    const list = skills.map(r => `**${r.category}**: ${r.skills.join(', ')}`).join('\n');
    return { response: `**Tech Stack**:\n\n${list}` };
  }

  if (cmd === 'resume') {
    const info = getResumeInfo();
    const ed = info.education.map(e => `**${e.institution}**\n${e.degree} (${e.duration})\n${e.details.map(d=>`- ${d}`).join('\n')}`).join('\n\n');
    const certs = info.certifications.map(c => `- ${c.name} (${c.issuer})`).join('\n');
    return { response: `**Profile**: ${info.profile.name} | CGPA: ${info.profile.cgpa} | ${info.profile.availability}\n\n**Education**\n${ed}\n\n**Certifications**\n${certs}` };
  }

  if (cmd === 'contact') {
    const info = getResumeInfo();
    return { 
      response: `You can reach out to Rishvin here:\n\n- **Email**: ${info.profile.email}\n- **LinkedIn**: [LinkedIn](${info.profile.linkedin})\n- **GitHub**: [GitHub](${info.profile.github})\n- **Location**: ${info.profile.location}\n\nRishvin is currently ${info.profile.availability}.` 
    };
  }

  if (cmd === 'open' || cmd === 'architecture' || cmd === 'stack' || cmd === 'security') {
    const id = args[0] || context.activeProject;
    if (!id) return { response: `Please specify a project ID, e.g. \`/${cmd} chainforensics\`` };
    
    const proj = getProjectById(id);
    if (!proj) return { response: `Project '${id}' not found.` };

    let resText = '';
    if (cmd === 'open') {
      resText = `Loaded context for **${proj.name}**.\n\n${proj.description}`;
    } else if (cmd === 'architecture') {
      resText = `**${proj.name} Architecture**:\n${proj.architecture}`;
    } else if (cmd === 'stack') {
      resText = `**${proj.name} Stack**:\n${proj.stack.join(', ')}`;
    } else if (cmd === 'security') {
      resText = `**${proj.name} Security**:\n${proj.securityModel || 'No detailed security model.'}`;
    }

    return { 
      response: resText, 
      newContext: { ...context, activeProject: proj.id },
      actions: cmd === 'open' ? [
        { label: 'Architecture', action: `/architecture ${proj.id}` },
        { label: 'Tech Stack', action: `/stack ${proj.id}` },
        { label: 'Security Model', action: `/security ${proj.id}` }
      ] : undefined
    };
  }

  return { response: `Command not recognized: /${cmd}. Type \`/help\` for a list of commands.` };
}

function generateCodeHeuristic(filename: string, content: string): string {
  const lines = content.split('\\n');
  const numLines = lines.length;
  let ext = filename.split('.').pop()?.toLowerCase();
  
  let lang = ext;
  if (ext === 'ts' || ext === 'tsx') lang = 'TypeScript';
  else if (ext === 'js' || ext === 'jsx') lang = 'JavaScript';
  else if (ext === 'py') lang = 'Python';
  else if (ext === 'md') lang = 'Markdown';
  else if (ext === 'json') lang = 'JSON';

  let imports = 0;
  let functions = 0;
  let classes = 0;

  for (const line of lines) {
    const l = line.trim();
    if (l.startsWith('import ') || l.startsWith('const ') && l.includes('require(')) imports++;
    if (l.startsWith('function ') || l.includes('=> {') || l.includes(') {')) functions++;
    if (l.startsWith('class ')) classes++;
  }

  let description = `This is a **${lang}** file named \`${filename}\` with roughly **${numLines} lines of code**.\\n\\n`;
  description += `**Local Heuristic Analysis:**\\n`;
  
  if (imports > 0) {
    description += `- It pulls in ${imports} external dependencies/modules.\\n`;
  }
  if (classes > 0) {
    description += `- It defines ${classes} classes.\\n`;
  }
  if (functions > 0) {
    description += `- It contains approximately ${functions} functional blocks or methods.\\n`;
  }

  if (content.includes('React') || content.includes('useState') || ext === 'tsx') {
    description += `- It appears to be a React component, likely responsible for rendering UI.\\n`;
  }

  if (content.includes('processUserMessage') || content.includes('Intent')) {
    description += `- This file seems to be part of the local AI Engine logic!\\n`;
  }

  description += `\\nHere is a snippet of the code:\\n\`\`\`${ext}\\n${lines.slice(0, 15).join('\\n')}\\n// ... (truncated)\\n\`\`\``;

  return description;
}

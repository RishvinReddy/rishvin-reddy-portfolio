import Fuse from 'fuse.js';
import { projectsKnowledge, ProjectKnowledge } from '../knowledge/projects';
import { skillsKnowledge, SkillCategory } from '../knowledge/skills';
import { educationKnowledge, certificationsKnowledge, profileKnowledge, patentKnowledge, researchInterestsKnowledge, achievementsKnowledge, professionalInterestsKnowledge } from '../knowledge/resume';
import { faqKnowledge, FAQ } from '../knowledge/faq';
import { RECOMMENDATIONS, Recommendation } from '@/data/recommendations';

const projectFuse = new Fuse(projectsKnowledge, {
  keys: ['name', 'shortDescription', 'description', 'stack', 'features.name', 'features.description', 'technologies.name'],
  threshold: 0.4,
});

const faqFuse = new Fuse(faqKnowledge, {
  keys: ['question', 'answer', 'category', 'tags', 'keywords', 'relatedSkills', 'relatedProjects'],
  threshold: 0.4,
});

const recFuse = new Fuse(RECOMMENDATIONS, {
  keys: ['name', 'title', 'relationship', 'excerpt', 'fullText'],
  threshold: 0.4,
});

export function searchProjects(query: string): ProjectKnowledge[] {
  if (!query.trim()) return projectsKnowledge;
  return projectFuse.search(query).map(result => result.item);
}

export function getProjectById(id: string): ProjectKnowledge | undefined {
  return projectsKnowledge.find(p => p.id === id);
}

export function searchSkills(query: string): SkillCategory[] {
  if (!query.trim()) return skillsKnowledge;
  const lowerQuery = query.toLowerCase();
  
  return skillsKnowledge.map(category => {
    // Check if category matches
    if (category.category.toLowerCase().includes(lowerQuery)) {
      return category;
    }
    // Filter specific skills
    const matchingSkills = category.skills.filter(s => s.toLowerCase().includes(lowerQuery));
    if (matchingSkills.length > 0) {
      return { ...category, skills: matchingSkills };
    }
    return null;
  }).filter(Boolean) as SkillCategory[];
}

export function searchFAQ(query: string): FAQ[] {
  if (!query.trim()) return faqKnowledge;
  return faqFuse.search(query).map(result => result.item);
}

export function getResumeInfo() {
  return {
    profile: profileKnowledge,
    education: educationKnowledge,
    certifications: certificationsKnowledge,
    patent: patentKnowledge,
    researchInterests: researchInterestsKnowledge,
    achievements: achievementsKnowledge,
    professionalInterests: professionalInterestsKnowledge
  };
}

export function getPatentInfo() {
  return patentKnowledge;
}

export function getRecommendations(): Recommendation[] {
  return RECOMMENDATIONS;
}

export function searchRecommendations(query: string): Recommendation[] {
  if (!query.trim()) return RECOMMENDATIONS;
  return recFuse.search(query).map(result => result.item);
}

export function getProjectsBySkill(skill: string): ProjectKnowledge[] {
  const lowerSkill = skill.toLowerCase();
  return projectsKnowledge.filter(p => p.stack.some(s => s.toLowerCase() === lowerSkill));
}

export interface RecruiterSummary {
  candidate: string;
  role: string;
  headline: string;
  availability: string;
  location: string;
  cgpa: string;
  degrees: string[];
  topHighlights: string[];
  coreStrengths: string[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}

export function getRecruiterSummary(): RecruiterSummary {
  return {
    candidate: profileKnowledge.name,
    role: profileKnowledge.title,
    headline: profileKnowledge.headline,
    availability: "Open to Full-Time Software Engineer, Systems, and Founding roles",
    location: profileKnowledge.location,
    cgpa: profileKnowledge.cgpa,
    degrees: educationKnowledge.map((e) => `${e.degree} — ${e.institution}`),
    topHighlights: [
      "Granted Indian Patent No. 470097-001 (IoT Real-Time Physical Resource Monitoring)",
      "Founder of Rishvin Labs & creator of 8+ full-stack and systems architectures",
      "Published IEEE research author & Certified Pega System Architect",
      "4 verified tech lead & professor recommendations on LinkedIn"
    ],
    coreStrengths: [
      "Systems & Low-level (C/C++, Embedded IoT, Network Protocols, Linux)",
      "Modern Full-Stack (TypeScript, Next.js, React, Node.js, TailwindCSS)",
      "High Agency, Rapid Prototyping, and End-to-End Ownership"
    ],
    contact: {
      email: profileKnowledge.email,
      linkedin: profileKnowledge.linkedin,
      github: profileKnowledge.github
    }
  };
}

export interface NavTarget {
  id: string;
  name: string;
  description: string;
  keywords: string[];
}

export const NAV_TARGETS: NavTarget[] = [
  { id: "home", name: "Home & Intro", description: "Hero section with signature and editorial greeting", keywords: ["home", "intro", "hero", "top", "start"] },
  { id: "about-v3", name: "About & Engineering Philosophy", description: "Background, credentials, GitHub stats and skillset", keywords: ["about", "bio", "education", "background", "philosophy"] },
  { id: "patent-section", name: "Granted IoT Patent", description: "Government of India Patent No. 470097-001", keywords: ["patent", "invention", "intellectual property", "iot patent", "470097"] },
  { id: "rishvin-labs-hub", name: "Rishvin Labs Hub", description: "Studio initiatives, active products and experiments", keywords: ["labs", "rishvin labs", "studio", "incubator", "products"] },
  { id: "projects", name: "Featured Projects", description: "Interactive deep-dives into software architectures", keywords: ["projects", "work", "portfolio", "apps", "code"] },
  { id: "github-knowledge-graph", name: "GitHub Knowledge Graph", description: "Interactive visual network of repos and tech stack", keywords: ["graph", "knowledge graph", "network", "visualizer", "nodes"] },
  { id: "experience", name: "Experience & Timeline", description: "Career timeline, Pega internship and university leadership", keywords: ["experience", "timeline", "career", "history", "jobs", "internship", "pega"] },
  { id: "recommendations", name: "Verified Recommendations", description: "Endorsements from mentors, professors and leads", keywords: ["recommendations", "testimonials", "endorsements", "reviews", "mentors"] },
  { id: "contact", name: "Contact & Footer", description: "Direct email, social links and newsletter", keywords: ["contact", "email", "reach out", "hire", "footer", "message"] }
];

export function findNavTarget(query: string): NavTarget | undefined {
  const lower = query.toLowerCase();
  for (const target of NAV_TARGETS) {
    if (lower.includes(target.id) || lower.includes(target.name.toLowerCase())) {
      return target;
    }
    for (const kw of target.keywords) {
      if (lower.includes(kw)) {
        return target;
      }
    }
  }
  return undefined;
}

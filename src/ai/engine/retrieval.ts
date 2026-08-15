import Fuse from 'fuse.js';
import { projectsKnowledge, ProjectKnowledge } from '../knowledge/projects';
import { skillsKnowledge, SkillCategory } from '../knowledge/skills';
import { educationKnowledge, certificationsKnowledge, profileKnowledge, patentKnowledge, researchInterestsKnowledge, achievementsKnowledge, professionalInterestsKnowledge } from '../knowledge/resume';
import { faqKnowledge, FAQ } from '../knowledge/faq';

const projectFuse = new Fuse(projectsKnowledge, {
  keys: ['name', 'shortDescription', 'description', 'stack', 'features.name', 'features.description', 'technologies.name'],
  threshold: 0.4,
});

const faqFuse = new Fuse(faqKnowledge, {
  keys: ['question', 'answer', 'category', 'tags', 'keywords', 'relatedSkills', 'relatedProjects'],
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

export function getProjectsBySkill(skill: string): ProjectKnowledge[] {
  const lowerSkill = skill.toLowerCase();
  return projectsKnowledge.filter(p => p.stack.some(s => s.toLowerCase() === lowerSkill));
}

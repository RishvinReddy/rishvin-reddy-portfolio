/* ─────────────────────────────────────────────────────────────────────────────
   LinkedIn Content Data Hub
   Consolidated entry point re-exporting profile, education, skills,
   certifications, achievements, projects, posts, and verified experience.
───────────────────────────────────────────────────────────────────────────── */

import { EXPERIENCE, type Experience } from '@/data/experience';

export * from './linkedin/profile';
export * from './linkedin/projects';
export * from './linkedin/posts';

/* Direct verified experience from portfolio data */
export const verifiedExperience: Experience[] = EXPERIENCE;

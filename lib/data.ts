import type { SkillCategory, Project, ExperienceEntry } from '@/types';
import siteConfig from '@/config/site.config';
import skillsRaw from '@/content/skills.json';
import projectsRaw from '@/content/projects.json';
import experienceRaw from '@/content/experience.json';

export const skills = skillsRaw as SkillCategory[];
export const projects = projectsRaw as Project[];
export const experience = experienceRaw as ExperienceEntry[];
export { siteConfig };

export interface SkillItem {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  years?: number;
  evidence?: string;
}

export interface SkillCategory {
  category: string;
  icon?: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  results: string[];
  tech: string[];
  type: 'professional' | 'personal';
  repoPublic: boolean;
  company: string | null;
  period?: string;
  highlight?: boolean;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: { start: string; end: string | null };
  periodLabel: string;
  duration: string;
  location: string;
  industry: string;
  teamSize: number | null;
  achievements: string[];
  techStack: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
  sub: string;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  role: string;
  tagline: string;
  location: string;
  availability: boolean;
  availabilityLabel: string;
  siteUrl: string;
  description: string;
  keywords: string[];
  ogImage: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    githubUsername: string;
    leetcode: string;
    codeforces: string;
    hackerrank: string;
    cvUrl: string;
  };
  nav: NavItem[];
  metrics: Metric[];
  features: {
    darkModeDefault: boolean;
    githubStatsWidget: boolean;
    animatedMetrics: boolean;
    blogSection: boolean;
  };
  education: Array<{
    degree: string;
    institution: string;
    location: string;
    period: string;
    distinction: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string | null;
    year: number | null;
    url: string | null;
  }>;
}

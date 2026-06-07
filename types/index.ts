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

export interface ExperienceRole {
  id: string;
  roleKey: string;
  period: { start: string; end: string | null };
  techStack: string[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  teamSize: number | null;
  roles: ExperienceRole[];
}

export interface ExperienceTranslation {
  role: string;
  periodLabel: string;
  duration: string;
  industry: string;
  achievements: string[];
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
  publications: Array<{
    type: 'talk' | 'article' | 'whitepaper';
    title: string;
    event?: string;
    platform?: string;
    date: string;
    description: string;
    descriptionKey: 'ragAdk' | 'highAvailability' | 'restVsGrpc' | 'voiceInterface' | 'pastSelf';
    videoUrl?: string;
    slidesUrl?: string;
    url?: string;
    thumbnail: string;
  }>;
  community: Array<{
    type: 'competition' | 'award' | 'meetup';
    title: string;
    role: string;
    description: string;
    year: string;
    icon: string;
  }>;
  socialStats: {
    github: {
      repos: string;
      stars: string;
    };
    leetcode: {
      problems: string;
      rating: string;
    };
    codeforces: {
      rating: string;
    };
  };
}

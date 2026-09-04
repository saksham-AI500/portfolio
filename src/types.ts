export type CursorMode =
  | 'default'
  | 'pointer'
  | 'project'
  | 'external'
  | 'three'
  | 'text'
  | 'hidden';

export interface CursorState {
  mode: CursorMode;
  label?: string;
  active: boolean;
  isClicking: boolean;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'AI / ML' | 'AI Engineering' | 'Backend' | 'Mobile';
  summary: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  stats?: string;
  accent: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    tag: string;
    description: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  verificationStatus: 'Verified';
  issueYear: string;
  credentialUrl?: string;
  badge: string;
  description: string;
}

export interface EducationData {
  degree: string;
  field: string;
  institution: string;
  location: string;
  timeline: string;
  semesterInfo: string;
  coursework: {
    code: string;
    title: string;
    category: string;
  }[];
}

export interface ContactInfo {
  tagline: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  location: string;
}

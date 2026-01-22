export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Contact {
  platform: string;
  url: string;
  label: string;
}

export interface PortfolioConfig {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  avatar: string;
  ctaPrimary: {
    label: string;
    url: string;
  };
  ctaSecondary: {
    label: string;
    url: string;
  };
  meta: {
    title: string;
    description: string;
  };
  highlights: string[];
  projects: Project[];
  contacts: Contact[];
  footer: {
    text: string;
    year: number;
  };
}

export type ThemeName = 'terminal' | 'blueprint' | 'paper' | 'brutalist';

export interface ThemeDefinition {
  name: ThemeName;
  label: string;
  variables: Record<string, string>;
}

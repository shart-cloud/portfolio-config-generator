import { create } from 'zustand';
import { PortfolioConfig, Project, Contact, ThemeName } from '../types/portfolio';
import { defaultConfig } from '../constants/defaultConfig';
import { applyTheme } from '../themes/definitions';

interface PortfolioStore {
  config: PortfolioConfig;
  avatarFile: File | null;
  avatarPreviewUrl: string | null;
  activeTheme: ThemeName;

  updateConfig: (partial: Partial<PortfolioConfig>) => void;
  updateBio: (index: number, value: string) => void;
  addBio: () => void;
  removeBio: (index: number) => void;
  updateProject: (index: number, project: Partial<Project>) => void;
  addProject: () => void;
  removeProject: (index: number) => void;
  updateContact: (index: number, contact: Partial<Contact>) => void;
  addContact: () => void;
  removeContact: (index: number) => void;
  updateHighlight: (index: number, value: string) => void;
  addHighlight: () => void;
  removeHighlight: (index: number) => void;
  setAvatar: (file: File | null) => void;
  setTheme: (theme: ThemeName) => void;
  updateCtaPrimary: (partial: Partial<PortfolioConfig['ctaPrimary']>) => void;
  updateCtaSecondary: (partial: Partial<PortfolioConfig['ctaSecondary']>) => void;
  updateMeta: (partial: Partial<PortfolioConfig['meta']>) => void;
  updateFooter: (partial: Partial<PortfolioConfig['footer']>) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set, get) => ({
  config: defaultConfig,
  avatarFile: null,
  avatarPreviewUrl: null,
  activeTheme: 'terminal',

  updateConfig: (partial) =>
    set((state) => ({
      config: { ...state.config, ...partial },
    })),

  updateBio: (index, value) =>
    set((state) => {
      const bio = [...state.config.bio];
      bio[index] = value;
      return { config: { ...state.config, bio } };
    }),

  addBio: () =>
    set((state) => ({
      config: { ...state.config, bio: [...state.config.bio, ''] },
    })),

  removeBio: (index) =>
    set((state) => ({
      config: {
        ...state.config,
        bio: state.config.bio.filter((_, i) => i !== index),
      },
    })),

  updateProject: (index, project) =>
    set((state) => {
      const projects = [...state.config.projects];
      projects[index] = { ...projects[index], ...project };
      return { config: { ...state.config, projects } };
    }),

  addProject: () =>
    set((state) => ({
      config: {
        ...state.config,
        projects: [
          ...state.config.projects,
          { title: '', description: '', tags: [] },
        ],
      },
    })),

  removeProject: (index) =>
    set((state) => ({
      config: {
        ...state.config,
        projects: state.config.projects.filter((_, i) => i !== index),
      },
    })),

  updateContact: (index, contact) =>
    set((state) => {
      const contacts = [...state.config.contacts];
      contacts[index] = { ...contacts[index], ...contact };
      return { config: { ...state.config, contacts } };
    }),

  addContact: () =>
    set((state) => ({
      config: {
        ...state.config,
        contacts: [
          ...state.config.contacts,
          { platform: '', url: '', label: '' },
        ],
      },
    })),

  removeContact: (index) =>
    set((state) => ({
      config: {
        ...state.config,
        contacts: state.config.contacts.filter((_, i) => i !== index),
      },
    })),

  updateHighlight: (index, value) =>
    set((state) => {
      const highlights = [...state.config.highlights];
      highlights[index] = value;
      return { config: { ...state.config, highlights } };
    }),

  addHighlight: () =>
    set((state) => ({
      config: { ...state.config, highlights: [...state.config.highlights, ''] },
    })),

  removeHighlight: (index) =>
    set((state) => ({
      config: {
        ...state.config,
        highlights: state.config.highlights.filter((_, i) => i !== index),
      },
    })),

  setAvatar: (file) => {
    const currentUrl = get().avatarPreviewUrl;
    if (currentUrl) {
      URL.revokeObjectURL(currentUrl);
    }

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      set({
        avatarFile: file,
        avatarPreviewUrl: previewUrl,
        config: { ...get().config, avatar: previewUrl },
      });
    } else {
      set({
        avatarFile: null,
        avatarPreviewUrl: null,
        config: { ...get().config, avatar: '' },
      });
    }
  },

  setTheme: (theme) => {
    applyTheme(theme);
    set({ activeTheme: theme });
  },

  updateCtaPrimary: (partial) =>
    set((state) => ({
      config: {
        ...state.config,
        ctaPrimary: { ...state.config.ctaPrimary, ...partial },
      },
    })),

  updateCtaSecondary: (partial) =>
    set((state) => ({
      config: {
        ...state.config,
        ctaSecondary: { ...state.config.ctaSecondary, ...partial },
      },
    })),

  updateMeta: (partial) =>
    set((state) => ({
      config: {
        ...state.config,
        meta: { ...state.config.meta, ...partial },
      },
    })),

  updateFooter: (partial) =>
    set((state) => ({
      config: {
        ...state.config,
        footer: { ...state.config.footer, ...partial },
      },
    })),
}));

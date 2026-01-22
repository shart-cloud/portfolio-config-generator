import { ThemeDefinition, ThemeName } from '../types/portfolio';

export const themes: Record<ThemeName, ThemeDefinition> = {
  // TERMINAL - Phosphor green CRT aesthetic
  terminal: {
    name: 'terminal',
    label: 'Terminal',
    variables: {
      // Core colors
      '--bg-primary': '#0a0a0a',
      '--bg-secondary': '#0f0f0f',
      '--bg-card': '#111111',
      '--text-primary': '#00ff41',
      '--text-secondary': '#00cc33',
      '--text-muted': '#008f26',
      '--accent-primary': '#00ff41',
      '--accent-secondary': '#00cc33',
      '--border-color': '#00ff4130',
      '--shadow-color': 'rgba(0, 255, 65, 0.15)',
      '--tag-bg': '#00ff4115',
      '--tag-text': '#00ff41',

      // Typography
      '--font-display': '"VT323", monospace',
      '--font-body': '"JetBrains Mono", monospace',
      '--font-mono': '"JetBrains Mono", monospace',

      // Effects
      '--glow-color': '#00ff41',
      '--glow-intensity': '0 0 10px',
      '--scanline-opacity': '0.03',
      '--noise-opacity': '0.02',

      // Editor specific
      '--editor-bg': '#0a0a0a',
      '--editor-border': '#00ff4130',
      '--editor-input-bg': '#0f0f0f',
      '--editor-input-border': '#00ff4140',
      '--editor-input-focus': '#00ff41',
    },
  },

  // BLUEPRINT - Technical architectural drawing
  blueprint: {
    name: 'blueprint',
    label: 'Blueprint',
    variables: {
      // Core colors
      '--bg-primary': '#0a1628',
      '--bg-secondary': '#0d1f3c',
      '--bg-card': '#112240',
      '--text-primary': '#e6f4ff',
      '--text-secondary': '#8ec8f0',
      '--text-muted': '#5a8cb8',
      '--accent-primary': '#00d4ff',
      '--accent-secondary': '#0099cc',
      '--border-color': '#00d4ff40',
      '--shadow-color': 'rgba(0, 212, 255, 0.1)',
      '--tag-bg': '#00d4ff20',
      '--tag-text': '#00d4ff',

      // Typography
      '--font-display': '"Orbitron", sans-serif',
      '--font-body': '"IBM Plex Mono", monospace',
      '--font-mono': '"IBM Plex Mono", monospace',

      // Effects
      '--grid-color': '#00d4ff15',
      '--grid-size': '20px',
      '--crosshair-color': '#00d4ff30',

      // Editor specific
      '--editor-bg': '#0a1628',
      '--editor-border': '#00d4ff30',
      '--editor-input-bg': '#0d1f3c',
      '--editor-input-border': '#00d4ff40',
      '--editor-input-focus': '#00d4ff',
    },
  },

  // PAPER - Vintage technical manual
  paper: {
    name: 'paper',
    label: 'Paper',
    variables: {
      // Core colors
      '--bg-primary': '#f5f0e6',
      '--bg-secondary': '#ebe4d6',
      '--bg-card': '#fffdf8',
      '--text-primary': '#2c2416',
      '--text-secondary': '#4a4035',
      '--text-muted': '#7a6f60',
      '--accent-primary': '#8b4513',
      '--accent-secondary': '#6b3410',
      '--border-color': '#c4b8a5',
      '--shadow-color': 'rgba(44, 36, 22, 0.08)',
      '--tag-bg': '#8b451320',
      '--tag-text': '#6b3410',

      // Typography
      '--font-display': '"Playfair Display", serif',
      '--font-body': '"Courier Prime", monospace',
      '--font-mono': '"Courier Prime", monospace',

      // Effects
      '--paper-texture': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
      '--stamp-color': '#8b4513',

      // Editor specific
      '--editor-bg': '#fffdf8',
      '--editor-border': '#c4b8a5',
      '--editor-input-bg': '#f5f0e6',
      '--editor-input-border': '#c4b8a5',
      '--editor-input-focus': '#8b4513',
    },
  },

  // BRUTALIST - Raw anti-design
  brutalist: {
    name: 'brutalist',
    label: 'Brutalist',
    variables: {
      // Core colors
      '--bg-primary': '#ffffff',
      '--bg-secondary': '#f0f0f0',
      '--bg-card': '#ffffff',
      '--text-primary': '#000000',
      '--text-secondary': '#333333',
      '--text-muted': '#666666',
      '--accent-primary': '#ff0000',
      '--accent-secondary': '#cc0000',
      '--border-color': '#000000',
      '--shadow-color': 'transparent',
      '--tag-bg': '#000000',
      '--tag-text': '#ffffff',

      // Typography
      '--font-display': '"Bebas Neue", sans-serif',
      '--font-body': '"Space Mono", monospace',
      '--font-mono': '"Space Mono", monospace',

      // Effects
      '--border-width': '3px',
      '--brutalist-offset': '4px',

      // Editor specific
      '--editor-bg': '#ffffff',
      '--editor-border': '#000000',
      '--editor-input-bg': '#ffffff',
      '--editor-input-border': '#000000',
      '--editor-input-focus': '#ff0000',
    },
  },
};

export function applyTheme(themeName: ThemeName): void {
  const theme = themes[themeName];
  const root = document.documentElement;

  // Remove previous theme class
  root.classList.remove('theme-terminal', 'theme-blueprint', 'theme-paper', 'theme-brutalist');

  // Add new theme class
  root.classList.add(`theme-${themeName}`);

  // Apply CSS variables
  Object.entries(theme.variables).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
}

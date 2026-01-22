import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { PortfolioConfig, ThemeName } from '../types/portfolio';
import { serializeConfig, slugify } from './configSerializer';
import { themes } from '../themes/definitions';

function generateReadme(config: PortfolioConfig, themeName: ThemeName): string {
  const theme = themes[themeName];

  return `# ${config.name} - Portfolio Configuration

This configuration was generated using the Portfolio Config Generator.

## Contents

- \`config.ts\` - Your portfolio configuration
- \`avatar.*\` - Your avatar image (if uploaded)
- \`README.md\` - This file

## Theme

Selected theme: **${theme.label}**

## CSS Variables

Add these CSS variables to your portfolio's stylesheet:

\`\`\`css
:root {
${Object.entries(theme.variables)
  .map(([prop, value]) => `  ${prop}: ${value};`)
  .join('\n')}
}
\`\`\`

## Usage

1. Copy \`config.ts\` to your portfolio project
2. Copy the avatar file to your assets directory
3. Update the avatar path in \`config.ts\` if needed
4. Import and use the configuration in your portfolio

\`\`\`typescript
import { portfolioConfig } from './config';
\`\`\`

## Generated

Date: ${new Date().toISOString().split('T')[0]}
`;
}

function generateTypesFile(): string {
  return `export interface Project {
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
`;
}

function getFileExtension(file: File): string {
  const name = file.name;
  const lastDot = name.lastIndexOf('.');
  return lastDot !== -1 ? name.substring(lastDot + 1) : 'png';
}

export async function exportPortfolio(
  config: PortfolioConfig,
  avatarFile: File | null,
  themeName: ThemeName
): Promise<void> {
  const zip = new JSZip();

  const hasAvatar = avatarFile !== null;
  const configContent = serializeConfig(config, hasAvatar);
  zip.file('config.ts', configContent);

  zip.file('types.ts', generateTypesFile());

  if (avatarFile) {
    const ext = getFileExtension(avatarFile);
    zip.file(`avatar.${ext}`, avatarFile);
  }

  const readmeContent = generateReadme(config, themeName);
  zip.file('README.md', readmeContent);

  const blob = await zip.generateAsync({ type: 'blob' });
  const filename = `${slugify(config.name)}-portfolio.zip`;
  saveAs(blob, filename);
}

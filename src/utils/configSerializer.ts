import { PortfolioConfig } from '../types/portfolio';

export function serializeConfig(config: PortfolioConfig, hasAvatar: boolean): string {
  const avatarPath = hasAvatar ? './avatar' : '';

  const configWithAvatar = {
    ...config,
    avatar: avatarPath ? `'${avatarPath}'` : "''",
  };

  const formatValue = (value: unknown, indent: number = 0): string => {
    const spaces = '  '.repeat(indent);
    const innerSpaces = '  '.repeat(indent + 1);

    if (value === null || value === undefined) {
      return 'null';
    }

    if (typeof value === 'string') {
      if (value.startsWith("'") && value.endsWith("'")) {
        return value;
      }
      const escaped = value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      return `'${escaped}'`;
    }

    if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }

    if (Array.isArray(value)) {
      if (value.length === 0) return '[]';
      const items = value.map((item) => `${innerSpaces}${formatValue(item, indent + 1)}`);
      return `[\n${items.join(',\n')}\n${spaces}]`;
    }

    if (typeof value === 'object') {
      const entries = Object.entries(value);
      if (entries.length === 0) return '{}';
      const props = entries.map(([key, val]) => {
        const formattedKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key}'`;
        return `${innerSpaces}${formattedKey}: ${formatValue(val, indent + 1)}`;
      });
      return `{\n${props.join(',\n')}\n${spaces}}`;
    }

    return String(value);
  };

  return `import { PortfolioConfig } from './types';

export const portfolioConfig: PortfolioConfig = ${formatValue(configWithAvatar)};
`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

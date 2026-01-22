import { PortfolioConfig } from './types';

export const portfolioConfig: PortfolioConfig = {
  name: 'Alex jared gore ',
  title: 'DevOps Engineer',
  tagline: 'Building reliable infrastructure and streamlining deployments',
  bio: [
    'DevOps engineer with 5+ years of experience in cloud infrastructure, CI/CD pipelines, and container orchestration.',
    'Passionate about automation, observability, and helping teams ship faster with confidence.'
  ],
  avatar: '',
  ctaPrimary: {
    label: 'View Resume',
    url: '/resume.pdf'
  },
  ctaSecondary: {
    label: 'Get in Touch',
    url: '#contact'
  },
  meta: {
    title: 'Alex Chen - DevOps Engineer',
    description: 'DevOps engineer specializing in cloud infrastructure, CI/CD, and Kubernetes.'
  },
  highlights: [
    'AWS & GCP certified',
    'Kubernetes specialist',
    'Terraform expert',
    'GitOps advocate'
  ],
  projects: [
    {
      title: 'Infrastructure as Code Framework',
      description: 'Modular Terraform framework for multi-cloud deployments with built-in security best practices.',
      tags: [
        'Terraform',
        'AWS',
        'GCP',
        'Security'
      ],
      github: 'https://github.com/example/iac-framework'
    },
    {
      title: 'CI/CD Pipeline Generator',
      description: 'CLI tool that generates optimized GitHub Actions workflows based on project structure.',
      tags: [
        'GitHub Actions',
        'Node.js',
        'DevOps'
      ],
      link: 'https://example.com/pipeline-gen',
      github: 'https://github.com/example/pipeline-gen'
    },
    {
      title: 'Kubernetes Monitoring Stack',
      description: 'Pre-configured observability stack with Prometheus, Grafana, and custom dashboards.',
      tags: [
        'Kubernetes',
        'Prometheus',
        'Grafana'
      ],
      github: 'https://github.com/example/k8s-monitoring'
    }
  ],
  contacts: [
    {
      platform: 'GitHub',
      url: 'https://github.com/alexchen',
      label: 'github.com/alexchen'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/alexchen',
      label: 'linkedin.com/in/alexchen'
    },
    {
      platform: 'Email',
      url: 'mailto:alex@example.com',
      label: 'alex@example.com'
    }
  ],
  footer: {
    text: 'Built with React & TypeScript',
    year: 2026
  }
};

import { type Template } from '../types/template';

const TEMPLATES_KEY = 'structify_templates';

export function loadTemplates(): Template[] {
  const stored = localStorage.getItem(TEMPLATES_KEY);
  return stored ? JSON.parse(stored) : getDefaultTemplates();
}

export function saveTemplateToStorage(templates: Template[]) {
  localStorage.setItem(TEMPLATES_KEY, JSON.stringify(templates));
}

function getDefaultTemplates(): Template[] {
  return [
    {
      id: '1',
      name: 'React Application',
      framework: 'React',
      description: 'Modern React application structure with TypeScript',
      tags: ['react', 'typescript', 'frontend'],
      structure: {
        id: 'root',
        name: 'src',
        type: 'folder',
        children: [
          {
            id: 'components',
            name: 'components',
            type: 'folder',
            children: [],
          },
          {
            id: 'hooks',
            name: 'hooks',
            type: 'folder',
            children: [],
          },
          {
            id: 'utils',
            name: 'utils',
            type: 'folder',
            children: [],
          },
        ],
      },
    },
    // Add more default templates...
  ];
}
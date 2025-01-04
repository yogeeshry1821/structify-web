import { type FolderNode } from '../types/folder';
import { generateId } from './helpers';

export async function parseOpenApi(content: string): Promise<FolderNode> {
  const spec = JSON.parse(content);
  
  // Create base structure
  const structure: FolderNode = {
    id: generateId(),
    name: 'api',
    type: 'folder',
    children: [
      {
        id: generateId(),
        name: 'controllers',
        type: 'folder',
        children: [],
      },
      {
        id: generateId(),
        name: 'models',
        type: 'folder',
        children: [],
      },
      {
        id: generateId(),
        name: 'routes',
        type: 'folder',
        children: [],
      },
    ],
  };

  // Parse paths and create corresponding structure
  if (spec.paths) {
    for (const [path] of Object.entries(spec.paths)) {
      const routeName = path.split('/')[1];
      if (routeName) {
        addRouteStructure(structure, routeName);
      }
    }
  }

  return structure;
}

function addRouteStructure(structure: FolderNode, routeName: string) {
  // Add controller
  const controllersFolder = structure.children?.find(c => c.name === 'controllers');
  if (controllersFolder) {
    controllersFolder.children = [
      ...(controllersFolder.children || []),
      {
        id: generateId(),
        name: `${routeName}Controller.ts`,
        type: 'file',
      },
    ];
  }

  // Add route
  const routesFolder = structure.children?.find(c => c.name === 'routes');
  if (routesFolder) {
    routesFolder.children = [
      ...(routesFolder.children || []),
      {
        id: generateId(),
        name: `${routeName}.routes.ts`,
        type: 'file',
      },
    ];
  }
}
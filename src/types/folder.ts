export interface FolderNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  children?: FolderNode[];
  content?: string;
}
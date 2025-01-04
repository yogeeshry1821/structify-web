import { FolderNode } from "./folder";
export interface Template {
  id: string;
  name: string;
  framework: string;
  description: string;
  tags: string[];
  structure: FolderNode;
}

export interface TemplateConfig {
  name: string;
  framework: string;
  description: string;
  tags: string[];
  variables?: Record<string, string>;
}
import React from 'react';
import { FolderTree, Copy } from 'lucide-react';
import { type Template } from '../../types/template';

interface TemplateCardProps {
  template: Template;
  isActive: boolean;
  onSelect: () => void;
}

export function TemplateCard({ template, isActive, onSelect }: TemplateCardProps) {
  return (
    <div
      className={`p-6 rounded-lg border-2 transition-all cursor-pointer
        ${isActive 
          ? 'border-indigo-600 bg-indigo-50' 
          : 'border-gray-200 hover:border-indigo-300 bg-white'}`}
      onClick={onSelect}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <FolderTree className={`w-6 h-6 ${isActive ? 'text-indigo-600' : 'text-gray-500'}`} />
          <div>
            <h3 className="font-medium text-gray-900">{template.name}</h3>
            <p className="text-sm text-gray-500">{template.framework}</p>
          </div>
        </div>
        <Copy className="w-5 h-5 text-gray-400 hover:text-indigo-600" />
      </div>
      
      <p className="mt-4 text-sm text-gray-600">{template.description}</p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {template.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
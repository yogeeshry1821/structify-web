import React from 'react';
import { FolderTree, Save, Plus } from 'lucide-react';
import { useTemplates } from '../../hooks/useTemplates';
import { TemplateCard } from './TemplateCard';
import { type Template } from '../../types/template';

export function TemplateSelector() {
  const { templates, activeTemplate, setActiveTemplate } = useTemplates();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Project Templates</h2>
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
          <Plus className="w-4 h-4 mr-2" />
          New Template
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            isActive={template.id === activeTemplate?.id}
            onSelect={() => setActiveTemplate(template)}
          />
        ))}
      </div>
    </div>
  );
}
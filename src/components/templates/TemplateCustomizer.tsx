import React from 'react';
import { Save } from 'lucide-react';
import { useTemplateCustomization } from '../../hooks/useTemplateCustomization';
import { FolderStructure } from '../common/FolderStructure';

export function TemplateCustomizer() {
  const { structure, updateStructure, saveTemplate } = useTemplateCustomization();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Customize Template</h2>
        <button
          onClick={saveTemplate}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Template
        </button>
      </div>

      <FolderStructure
        structure={structure}
        onChange={updateStructure}
      />
    </div>
  );
}
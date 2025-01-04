import React from 'react';
import { Folder, File, ChevronRight, ChevronDown, Plus, Trash } from 'lucide-react';
import { type FolderNode } from '../../types/folder';

interface FolderStructureProps {
  structure: FolderNode;
  onChange?: (structure: FolderNode) => void;
  readOnly?: boolean;
}

export function FolderStructure({ structure, onChange, readOnly = false }: FolderStructureProps) {
  const [expanded, setExpanded] = React.useState(true);

  const toggleExpand = () => setExpanded(!expanded);

  const handleAddItem = (type: 'file' | 'folder') => {
    if (readOnly || !onChange) return;
    // Implementation for adding items
  };

  const handleDelete = () => {
    if (readOnly || !onChange) return;
    // Implementation for deleting items
  };

  return (
    <div className="pl-4">
      <div className="flex items-center space-x-2">
        <button onClick={toggleExpand} className="p-1 hover:bg-gray-100 rounded">
          {expanded ? (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          )}
        </button>
        <Folder className="w-5 h-5 text-indigo-500" />
        <span className="text-gray-900">{structure.name}</span>
        
        {!readOnly && (
          <div className="ml-auto flex items-center space-x-2">
            <button
              onClick={() => handleAddItem('file')}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <Plus className="w-4 h-4 text-gray-500" />
            </button>
            <button
              onClick={handleDelete}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <Trash className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        )}
      </div>

      {expanded && structure.children && (
        <div className="ml-4 mt-2 space-y-2">
          {structure.children.map((child) => (
            <FolderStructure
              key={child.id}
              structure={child}
              onChange={onChange}
              readOnly={readOnly}
            />
          ))}
        </div>
      )}
    </div>
  );
}
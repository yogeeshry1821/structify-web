import React from 'react';
import { Upload, RefreshCw } from 'lucide-react';
import { useApiParser } from '../../hooks/useApiParser';
import { FolderStructure } from '../common/FolderStructure';

export function ApiStructureGenerator() {
  const { structure, loading, parseApi } = useApiParser();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      await parseApi(selectedFile);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">API Structure Generator</h2>
        <div className="flex space-x-4">
          <label className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 cursor-pointer">
            <Upload className="w-4 h-4 mr-2" />
            Upload API Spec
            <input
              type="file"
              className="hidden"
              accept=".json,.yaml,.yml"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <RefreshCw className="w-6 h-6 text-indigo-600 animate-spin" />
        </div>
      ) : structure ? (
        <FolderStructure structure={structure} readOnly />
      ) : (
        <div className="text-center py-12 text-gray-500">
          Upload an OpenAPI or Swagger specification to generate the structure
        </div>
      )}
    </div>
  );
}
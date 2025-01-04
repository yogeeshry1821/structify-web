import React from 'react';
import { Upload, FileUp } from 'lucide-react';
import { Tooltip } from '../Tooltip';

export function UploadGuide() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Upload Your Diagram</h2>
        <p className="mt-2 text-gray-600">
          Start by uploading your system design diagram. We support multiple formats
          to make it easy to get started.
        </p>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
        <Tooltip content="Click or drag a file to upload">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Upload className="w-12 h-12 text-gray-400" />
            </div>
            <div>
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                <FileUp className="w-4 h-4 mr-2" />
                Choose File
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Supported formats: PNG, JPG, SVG, or import directly from Figma
            </p>
          </div>
        </Tooltip>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-medium text-gray-900 mb-2">Pro Tips:</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• Use clear, high-resolution diagrams for better parsing</li>
          <li>• Label components and connections clearly</li>
          <li>• Include all necessary system components in your diagram</li>
        </ul>
      </div>
    </div>
  );
}
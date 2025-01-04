import { GitBranch, Download } from 'lucide-react';
import { Tooltip } from '../Tooltip';

export function IntegrationGuide() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Project Integration</h2>
        <p className="mt-2 text-gray-600">
          Choose how to integrate the generated structure with your existing project.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Tooltip content="Download as a ZIP file">
          <button className="p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
            <div className="flex flex-col items-center space-y-4">
              <Download className="w-8 h-8 text-indigo-600" />
              <div className="text-center">
                <h3 className="font-medium text-gray-900">Download Structure</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Get a ZIP file with your complete folder structure
                </p>
              </div>
            </div>
          </button>
        </Tooltip>

        <Tooltip content="Initialize a new Git repository">
          <button className="p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
            <div className="flex flex-col items-center space-y-4">
              <GitBranch className="w-8 h-8 text-indigo-600" />
              <div className="text-center">
                <h3 className="font-medium text-gray-900">Git Integration</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Initialize a new repository with your structure
                </p>
              </div>
            </div>
          </button>
        </Tooltip>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-medium text-gray-900 mb-2">Next Steps:</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• Add your project files to the structure</li>
          <li>• Configure build tools and dependencies</li>
          <li>• Start developing with your organized codebase</li>
        </ul>
      </div>
    </div>
  );
}

import { Settings2, FolderTree } from 'lucide-react';
import { Tooltip } from '../Tooltip';

export function CustomizationGuide() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Customize Your Structure</h2>
        <p className="mt-2 text-gray-600">
          Fine-tune your generated folder structure to match your project needs perfectly.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Tooltip content="Click to edit folder names and structure">
          <div className="p-6 bg-white rounded-lg border border-gray-200 space-y-4">
            <div className="flex items-center space-x-2">
              <FolderTree className="w-5 h-5 text-indigo-600" />
              <span className="font-medium text-gray-900">Structure Preview</span>
            </div>
            <div className="pl-4 border-l-2 border-gray-200 space-y-2">
              <div className="text-gray-600">src/</div>
              <div className="pl-4 text-gray-600">components/</div>
              <div className="pl-4 text-gray-600">services/</div>
              <div className="pl-4 text-gray-600">utils/</div>
            </div>
          </div>
        </Tooltip>

        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <div className="flex items-center space-x-2">
            <Settings2 className="w-5 h-5 text-indigo-600" />
            <span className="font-medium text-gray-900">Customization Options</span>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Rename folders and files</li>
            <li>• Add or remove components</li>
            <li>• Rearrange structure</li>
            <li>• Save as template</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { type FolderNode } from '../types/folder';
import { parseOpenApi } from '../utils/apiParser';

export function useApiParser() {
  const [structure, setStructure] = useState<FolderNode | null>(null);
  const [loading, setLoading] = useState(false);

  const parseApi = async (file: File) => {
    try {
      setLoading(true);
      const content = await file.text();
      const parsedStructure = await parseOpenApi(content);
      setStructure(parsedStructure);
    } catch (error) {
      console.error('Failed to parse API specification:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    structure,
    loading,
    parseApi,
  };
}
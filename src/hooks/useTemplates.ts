import { useState, useEffect } from 'react';
import { type Template } from '../types/template';
import { loadTemplates, saveTemplateToStorage } from '../utils/storage';

export function useTemplates() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [activeTemplate, setActiveTemplate] = useState<Template | null>(null);

  useEffect(() => {
    const loadedTemplates = loadTemplates();
    setTemplates(loadedTemplates);
  }, []);

  const addTemplate = (template: Template) => {
    setTemplates((prev) => [...prev, template]);
    saveTemplateToStorage([...templates, template]);
  };

  return {
    templates,
    activeTemplate,
    setActiveTemplate,
    addTemplate,
  };
}
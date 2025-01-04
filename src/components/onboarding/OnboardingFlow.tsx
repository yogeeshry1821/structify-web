import  { useState } from 'react';
import { OnboardingStep } from './OnboardingStep';
import { UploadGuide } from './steps/UploadGuide';
import { CustomizationGuide } from './steps/CustomizationGuide';
import { IntegrationGuide } from './steps/IntegrationGuide';
import { ProgressIndicator } from './ProgressIndicator';

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: 'Upload Your Diagram',
      component: UploadGuide,
    },
    {
      title: 'Customize Structure',
      component: CustomizationGuide,
    },
    {
      title: 'Project Integration',
      component: IntegrationGuide,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ProgressIndicator 
        steps={steps.map(s => s.title)} 
        currentStep={currentStep} 
      />
      
      <OnboardingStep
        key={currentStep}
        step={steps[currentStep]}
        onNext={() => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))}
        onBack={() => setCurrentStep(prev => Math.max(prev - 1, 0))}
        isFirst={currentStep === 0}
        isLast={currentStep === steps.length - 1}
      />
    </div>
  );
}
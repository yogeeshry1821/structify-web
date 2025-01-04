import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface OnboardingStepProps {
  step: {
    title: string;
    component: React.ComponentType;
  };
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function OnboardingStep({ step, onNext, onBack, isFirst, isLast }: OnboardingStepProps) {
  const StepComponent = step.component;

  return (
    <div className="space-y-8">
      <StepComponent />
      
      <div className="flex justify-between pt-6">
        {!isFirst && (
          <button
            onClick={onBack}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
        )}
        
        {!isLast ? (
          <button
            onClick={onNext}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 ml-auto"
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        ) : (
          <button
            onClick={onNext}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 ml-auto"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        )}
      </div>
    </div>
  );
}
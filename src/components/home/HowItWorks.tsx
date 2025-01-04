import React from 'react';
import { Upload, Cpu, Download } from 'lucide-react';

interface StepProps {
    icon: React.ElementType;
    step: string;
    title: string;
    description: string;
}

function Step({ icon: Icon, step, title, description }: StepProps) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-indigo-600" />
            </div>
            <span className="text-sm font-medium text-indigo-600 mb-2">Step {step}</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 max-w-sm">{description}</p>
        </div>
    );
}

export function HowItWorks() {
    const steps = [
        {
            icon: Upload,
            step: "1",
            title: "Upload Your Design",
            description: "Upload your system design diagram in any common format - PNG, JPG, or directly from your design tool."
        },
        {
            icon: Cpu,
            step: "2",
            title: "Parse with Structify",
            description: "Our AI analyzes your diagram, identifying components, relationships, and architectural patterns."
        },
        {
            icon: Download,
            step: "3",
            title: "Generate & Download",
            description: "Get your complete codebase structure with all necessary files, folders, and configurations."
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        How It Works
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Three simple steps to transform your system design into code
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <Step key={index} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
}
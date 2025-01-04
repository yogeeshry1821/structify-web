import React from 'react';
import { FileCode, Workflow, Zap, Code2, GitBranch, Lock } from 'lucide-react';

interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    return (
        <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

export function Features() {
    const features = [
        {
            icon: FileCode,
            title: "Intelligent Diagram Parsing",
            description: "Convert system design diagrams into structured code with our advanced AI-powered parsing engine."
        },
        {
            icon: Workflow,
            title: "API Endpoint Generation",
            description: "Automatically generate RESTful API endpoints and documentation from your architecture diagrams."
        },
        {
            icon: Zap,
            title: "Real-time Structure Creation",
            description: "Watch your folder structure materialize instantly as you upload your system design diagrams."
        },
        {
            icon: Code2,
            title: "Multi-Framework Support",
            description: "Generate code structures for multiple frameworks including React, Node.js, and Django."
        },
        {
            icon: GitBranch,
            title: "Version Control Ready",
            description: "Created structures are Git-ready with pre-configured .gitignore and README files."
        },
        {
            icon: Lock,
            title: "Security First",
            description: "Built-in security best practices and configuration templates for your generated structure."
        }
    ];

    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Transform Your Development Workflow
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Powerful features to streamline your development process from design to implementation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
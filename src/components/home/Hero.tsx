import React from 'react';
import { Code2, Play, ArrowRight, Boxes, Workflow, Zap } from 'lucide-react';
import { FeatureItem } from './FeatureItem';

export function Hero() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center px-4 py-1.5 bg-indigo-50 rounded-full mb-6">
                            <span className="text-indigo-600 text-sm font-medium">Now in Beta</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Transform System Design
                            <span className="text-indigo-600"> Into Code</span>
                            <br />
                            Seamlessly
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                            Turn your system architecture diagrams into production-ready code instantly.
                            Structify bridges the gap between design and implementation with AI-powered precision.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
                            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                            <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
                                View Demo
                                <Play className="ml-2 w-5 h-5" />
                            </button>
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                            <FeatureItem icon={Code2} text="Instant Code Generation" />
                            <FeatureItem icon={Workflow} text="Multiple Framework Support" />
                            <FeatureItem icon={Boxes} text="Microservices Architecture" />
                            <FeatureItem icon={Zap} text="Real-time Collaboration" />
                        </ul>
                    </div>

                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
                            alt="System Design Visualization"
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
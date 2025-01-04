import React from 'react';
import { Code2 } from 'lucide-react';

export function About() {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="w-16 h-16 bg-indigo-50 rounded-lg flex items-center justify-center mb-6">
                            <Code2 className="w-8 h-8 text-indigo-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                            Empowering Developers to Build Faster
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Structify was born from a simple idea: what if we could eliminate the tedious process
                            of manually creating project structures? Our mission is to streamline the development
                            workflow by bridging the gap between system design and implementation.
                        </p>
                        <p className="text-xl text-gray-600">
                            Today, we're proud to offer a cutting-edge CLI tool that transforms your system design
                            diagrams into production-ready folder structures, saving developers countless hours
                            and ensuring consistent, well-organized codebases.
                        </p>
                    </div>
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                            alt="Team collaboration"
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
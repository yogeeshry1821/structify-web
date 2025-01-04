import React from 'react';
import { Menu } from 'lucide-react';

export function Header() {
    return (
        <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-indigo-600">Structify</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                        <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
                        <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                        <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100">
                            Get Started
                        </button>
                    </div>

                    <button className="md:hidden">
                        <Menu className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </nav>
        </header>
    );
}
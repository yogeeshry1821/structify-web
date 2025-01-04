import React from 'react';

interface FeatureItemProps {
    icon: React.ElementType;
    text: string;
}

export function FeatureItem({ icon: Icon, text }: FeatureItemProps) {
    return (
        <li className="flex items-center space-x-2 text-gray-600">
            <Icon className="w-5 h-5 text-indigo-500" />
            <span>{text}</span>
        </li>
    );
}
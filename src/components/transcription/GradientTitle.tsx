import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GradientTitleProps {
  text: string;
  icon: LucideIcon;
}

export function GradientTitle({ text, icon: Icon }: GradientTitleProps) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <Icon className="h-6 w-6 text-teal-500" />
      <h2 className="text-xl font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
        {text}
      </h2>
    </div>
  );
}
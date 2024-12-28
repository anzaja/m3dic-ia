import React from 'react';
import { FileText } from 'lucide-react';
import { GradientTitle } from './GradientTitle';

interface FormattedSectionProps {
  formattedText: string;
  onTextChange: (text: string) => void;
}

export function FormattedSection({ formattedText, onTextChange }: FormattedSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <GradientTitle text="Formatted Text" icon={FileText} />
      
      <textarea
        value={formattedText}
        onChange={(e) => onTextChange(e.target.value)}
        className="w-full h-40 p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                   bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                   focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        placeholder="Formatted text will appear here..."
      />
    </div>
  );
}
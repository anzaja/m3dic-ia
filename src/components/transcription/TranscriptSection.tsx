import React from 'react';
import { MessageSquare } from 'lucide-react';
import { GradientTitle } from './GradientTitle';

interface TranscriptSectionProps {
  transcript: string;
}

export function TranscriptSection({ transcript }: TranscriptSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <GradientTitle text="Audio Transcript" icon={MessageSquare} />
      
      <textarea
        value={transcript}
        readOnly
        className="w-full h-40 p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                   bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                   focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        placeholder="Transcript will appear here..."
      />
    </div>
  );
}
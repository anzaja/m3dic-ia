import React from 'react';
import { Mic } from 'lucide-react';
import { GradientTitle } from './GradientTitle';
import { RecordingButton } from './RecordingButton';

interface RecordingSectionProps {
  isRecording: boolean;
  isProcessing: boolean;
  onToggleRecording: () => void;
}

export function RecordingSection({ 
  isRecording, 
  isProcessing, 
  onToggleRecording 
}: RecordingSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <GradientTitle text="Recording" icon={Mic} />
      
      <div className="flex flex-col items-center space-y-4">
        <RecordingButton 
          isRecording={isRecording}
          isProcessing={isProcessing}
          onClick={onToggleRecording}
        />
        
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Press to start recording your audio for transcription.
        </p>
      </div>
    </div>
  );
}
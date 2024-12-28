import React from 'react';
import { Mic } from 'lucide-react';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface RecordingButtonProps {
  isRecording: boolean;
  isProcessing: boolean;
  onClick: () => void;
}

export function RecordingButton({ isRecording, isProcessing, onClick }: RecordingButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isProcessing}
      className={`
        flex items-center space-x-2 px-6 py-3 rounded-lg font-medium text-white
        transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${isRecording 
          ? 'bg-red-500 hover:bg-red-600 focus:ring-red-500' 
          : 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 focus:ring-teal-500'
        }
      `}
    >
      {isProcessing ? (
        <LoadingSpinner />
      ) : (
        <Mic className="h-5 w-5" />
      )}
      <span>
        {isProcessing 
          ? 'Processing...' 
          : isRecording 
            ? 'Stop Recording' 
            : 'Start Recording'
        }
      </span>
    </button>
  );
}
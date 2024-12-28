import React, { useState } from 'react';
import { Stethoscope } from 'lucide-react';
import { RecordingSection } from '../components/transcription/RecordingSection';
import { TranscriptSection } from '../components/transcription/TranscriptSection';
import { FormattedSection } from '../components/transcription/FormattedSection';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { useRecording } from '../hooks/useRecording';

export function TranscriptionPage() {
  const [transcript, setTranscript] = useState('');
  const [formattedText, setFormattedText] = useState('');
  const { isRecording, isProcessing, error, toggleRecording } = useRecording();

  const handleToggleRecording = async () => {
    const text = await toggleRecording();
    if (text) {
      setTranscript(text);
      setFormattedText(text);
    }
  };

  const handleFormattedTextChange = (text: string) => {
    setFormattedText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-3 mb-8">
          <Stethoscope className="h-8 w-8 text-teal-500" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
            Transcribe and Format
          </h1>
        </div>

        {error && <ErrorMessage message={error} />}

        <div className="space-y-6">
          <RecordingSection 
            isRecording={isRecording}
            isProcessing={isProcessing}
            onToggleRecording={handleToggleRecording}
          />
          
          <TranscriptSection transcript={transcript} />
          
          <FormattedSection 
            formattedText={formattedText}
            onTextChange={handleFormattedTextChange}
          />
        </div>
      </div>
    </div>
  );
}
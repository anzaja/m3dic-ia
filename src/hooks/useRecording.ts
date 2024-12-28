import { useState } from 'react';
import { startRecording, stopRecording } from '../utils/recording';
import { sendAudioToWebhook } from '../utils/transcription';

export function useRecording() {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleRecording = async () => {
    setError(null);

    if (!isRecording) {
      try {
        await startRecording();
        setIsRecording(true);
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Failed to start recording';
        setError(message);
      }
    } else {
      try {
        setIsProcessing(true);
        const audioBlob = await stopRecording();
        setIsRecording(false);
        const text = await sendAudioToWebhook(audioBlob);
        return text;
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Failed to process recording';
        setError(message);
        return null;
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return {
    isRecording,
    isProcessing,
    error,
    toggleRecording
  };
}
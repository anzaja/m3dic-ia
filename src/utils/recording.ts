export interface RecordingState {
  isRecording: boolean;
  audioBlob: Blob | null;
}

let mediaRecorder: MediaRecorder | null = null;
let audioChunks: Blob[] = [];

export const startRecording = async (): Promise<void> => {
  try {
    // Request permissions first
    await navigator.mediaDevices.getUserMedia({ audio: true });
    
    // Create new stream after permission is granted
    const stream = await navigator.mediaDevices.getUserMedia({ 
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100
      }
    });
    
    mediaRecorder = new MediaRecorder(stream);
    audioChunks = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunks.push(event.data);
      }
    };

    mediaRecorder.start();
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'NotAllowedError') {
        throw new Error('Microphone permission denied. Please allow microphone access to record audio.');
      } else if (error.name === 'NotFoundError') {
        throw new Error('No microphone found. Please connect a microphone and try again.');
      }
    }
    throw error;
  }
};

export const stopRecording = async (): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    if (!mediaRecorder) {
      reject(new Error('Recording has not been started'));
      return;
    }

    const handleStop = () => {
      try {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        mediaRecorder?.stream.getTracks().forEach(track => track.stop());
        mediaRecorder = null;
        audioChunks = [];
        resolve(audioBlob);
      } catch (error) {
        reject(error);
      }
    };

    mediaRecorder.onstop = handleStop;
    mediaRecorder.stop();
  });
};
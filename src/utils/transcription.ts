export const sendAudioToWebhook = async (audioBlob: Blob): Promise<string> => {
  const formData = new FormData();
  formData.append('file', audioBlob, 'audio.webm');

  try {
    const response = await fetch('https://hook.us1.make.com/c2vm1zvwzkgreg5f71mm0nhjiqt92qj3', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.text) {
      throw new Error('Invalid response format from transcription service');
    }

    return data.text;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Transcription failed: ${error.message}`);
    }
    throw new Error('Transcription failed: Unknown error');
  }
};
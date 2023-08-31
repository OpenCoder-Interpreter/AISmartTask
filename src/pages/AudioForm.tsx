import React, { useState, FormEvent } from 'react';
import axios from 'axios';

interface AudioFormProps {
    onAudioGenerated: (url: string) => void;
}

const AudioForm: React.FC<AudioFormProps> = ({ onAudioGenerated }) => {
    const [file, setFile] = useState<File | null>(null);
    const [bpm, setBpm] = useState<string>("");
    const [duration, setDuration] = useState<string>("5");
    const [iterations, setIterations] = useState<string>("7");
    const [outputDurationRange, setOutputDurationRange] = useState<string>("20-30");

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        if (file) {
            formData.append('audio', file);
        }
        formData.append('bpm', bpm);
        formData.append('duration', duration);
        formData.append('iterations', iterations);
        formData.append('outputDurationRange', outputDurationRange);

        try {
            // const response = await axios.post('/api/generateAudio', formData, {
            const response = await axios.post('https://a8ccb8e2913b.ngrok.app/generate', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                responseType: 'arraybuffer',
            });

            const blob = new Blob([response.data], { type: 'audio/wav' });
            const url = window.URL.createObjectURL(blob);

            onAudioGenerated(url); // Update the state in the parent component
        } catch (error) {
            console.error('Error generating audio:', error);
        }
    };

return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 rounded shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-4">Generate Audio</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Upload Audio</label>
            <input type="file" accept=".wav" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} className="mt-1 p-2 w-full border rounded-md"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">BPM</label>
            <input type="text" placeholder="BPM" value={bpm} onChange={(e) => setBpm(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Prompt Duration</label>
            <input type="text" placeholder="Prompt Duration" value={duration} onChange={(e) => setDuration(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Iterations</label>
            <input type="text" placeholder="Iterations" value={iterations} onChange={(e) => setIterations(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Output Duration Range</label>
            <input type="text" placeholder="Output Duration Range" value={outputDurationRange} onChange={(e) => setOutputDurationRange(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200">
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AudioForm;
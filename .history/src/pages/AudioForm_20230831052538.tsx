import  { useState, FormEvent } from 'react';

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

        // Create FormData and append the necessary information
        const formData = new FormData();
        if (file) {
            formData.append('audio', file);
        }
        formData.append('bpm', bpm);
        formData.append('duration', duration);
        formData.append('iterations', iterations);
        formData.append('outputDurationRange', outputDurationRange);

        // Fetch your API here and get the audio URL
        // Assume the URL is generatedAudioUrl
        // onAudioGenerated(generatedAudioUrl);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept=".wav" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
            <input type="text" placeholder="BPM" value={bpm} onChange={(e) => setBpm(e.target.value)} />
            <input type="text" placeholder="Prompt Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
            <input type="text" placeholder="Iterations" value={iterations} onChange={(e) => setIterations(e.target.value)} />
            <input type="text" placeholder="Output Duration Range" value={outputDurationRange} onChange={(e) => setOutputDurationRange(e.target.value)} />
            <button type="submit">Generate</button>
        </form>
    );
};

export default AudioForm;
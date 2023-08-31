import React, { useState } from 'react';
import AudioForm from './AudioForm';
import AudioPlayer from './AudioPlayer';
import '../styles/Form.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Form: React.FC = () => {
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    const handleAudioGenerated = (generatedAudioUrl: string) => {
        setAudioUrl(generatedAudioUrl);
    };

    return (
        <>
        <Header/>
        <div className="flex-box flex-col bg-slate-600 w-full">
            <div className="p-6 w-full">
                <AudioForm onAudioGenerated={handleAudioGenerated} />
            </div>
            <div className="p-6 w-full">
                {audioUrl && <AudioPlayer audioUrl={audioUrl} />}

            </div>
        </div>
        <Footer/>
        </>

    );
};

export default Form;
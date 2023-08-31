import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div><div>
            <a href="https://vitejs.dev">
                <img src='audiocraft.jpeg' className="logo" alt="logo" />
            </a>

        </div>
            <h1>GPTAudioCraft</h1>
            <div className="card">

                <p>
                    Library for audio processing and generation with deep learning. It features the state-of-the-art EnCodec audio compressor / tokenizer, along with MusicGen, a simple and controllable music generation LM with textual and melodic conditioning.
                </p>
            </div>

            <button onClick={() => navigate("/")}>
                sonic-meow
            </button>
            <p className="read-the-docs">
                A group of cool cats from the GATO framework are making smooth sounds for your listening pleasure.
            </p></div>
    )
}

export default Home
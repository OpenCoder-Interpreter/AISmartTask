import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src='audiocraft.jpeg' className="logo" alt="Vite logo" />
        </a>
       
      </div>
      <h1>GPTAudioCraft</h1>
      <div className="card">
        <button>
        sonic-meow
        </button>
        <p>
        Library for audio processing and generation with deep learning. It features the state-of-the-art EnCodec audio compressor / tokenizer, along with MusicGen, a simple and controllable music generation LM with textual and melodic conditioning.
        </p>
      </div>
      <p className="read-the-docs">
      A group of cool cats from the GATO framework are making smooth sounds for your listening pleasure.
      </p>
    </>
  )
}

export default App

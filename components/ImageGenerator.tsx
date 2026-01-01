
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PROMPT } from '../constants';

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('Watercolor of an ancient Greek pillar in a mountain mist, 2:7 aspect ratio, small owl with glowing blue underwings perched on top, vignette edges');
  const [generating, setGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setGenerating(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { text: `${SYSTEM_PROMPT}\n\nUser request: ${prompt}. Ensure the aspect ratio is tall and narrow (2:7).` }
          ]
        },
        config: {
          imageConfig: {
            aspectRatio: "9:16", // Note: Using 9:16 as standard tall, 2:7 is custom prompt request
          }
        }
      });

      let found = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setGeneratedImage(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
          found = true;
          break;
        }
      }
      
      if (!found) {
        setError("The model didn't return an image part. Please try again with a clearer prompt.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to generate visual concept.");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-stone-200 p-8 rounded-lg shadow-xl max-w-4xl mx-auto my-20">
      <h2 className="serif text-3xl mb-6 text-stone-800">Visual Concept Generator</h2>
      <p className="text-stone-600 mb-8 italic">
        This tool simulates our next task: creating custom 2:7 aspect ratio visuals with the high-tech Nyctimene overlay.
      </p>

      <div className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full h-32 p-4 bg-stone-50 border border-stone-300 rounded focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all outline-none text-stone-800"
          placeholder="Describe the pillar scene..."
        />
        
        <button
          onClick={handleGenerate}
          disabled={generating}
          className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 disabled:bg-stone-400 text-white font-semibold transition-all shadow-lg glow-blue flex justify-center items-center gap-2"
        >
          {generating ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Summoning Nyctimene...
            </>
          ) : 'Generate Concept Visual'}
        </button>
      </div>

      {error && (
        <div className="mt-6 p-4 bg-red-50 text-red-600 border border-red-200 rounded">
          {error}
        </div>
      )}

      {generatedImage && (
        <div className="mt-12 flex flex-col items-center">
          <div className="relative group">
            <img 
              src={generatedImage} 
              alt="Generated concept" 
              className="max-w-xs shadow-2xl border-4 border-white transition-transform group-hover:scale-[1.02]" 
            />
            <div className="absolute inset-0 watercolor-fade-left pointer-events-none border border-cyan-400 opacity-20"></div>
          </div>
          <p className="mt-4 text-stone-500 text-sm uppercase tracking-widest">Architectural Scaffolding - Concept {Math.floor(Math.random() * 1000)}</p>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;


import React, { useState } from 'react';
import { PILLARS } from './constants';
import { Pillar, AppState } from './types';
import PillarLayout from './components/PillarLayout';
import ImageGenerator from './components/ImageGenerator';

const App: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [appState, setAppState] = useState<AppState>(AppState.EXPLORING);

  const nextPillar = () => {
    setActivePillarIndex((prev) => (prev + 1) % PILLARS.length);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevPillar = () => {
    setActivePillarIndex((prev) => (prev - 1 + PILLARS.length) % PILLARS.length);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Overlay */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto bg-stone-900/10 backdrop-blur-md px-6 py-2 rounded-full border border-stone-200/20">
           <span className="serif text-2xl font-bold tracking-tighter text-stone-800">
             Are<span className="text-cyan-600 neon-text">Té</span>Cracy
           </span>
        </div>
        
        <div className="flex gap-4 pointer-events-auto">
          <button 
            onClick={() => setAppState(AppState.EXPLORING)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${appState === AppState.EXPLORING ? 'bg-cyan-600 text-white shadow-lg' : 'bg-white/50 text-stone-600 hover:bg-white'}`}
          >
            Pillars
          </button>
          <button 
            onClick={() => setAppState(AppState.GENERATING)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${appState === AppState.GENERATING ? 'bg-cyan-600 text-white shadow-lg' : 'bg-white/50 text-stone-600 hover:bg-white'}`}
          >
            AI Workshop
          </button>
        </div>
      </nav>

      <main className="transition-opacity duration-500">
        {appState === AppState.EXPLORING ? (
          <>
            <PillarLayout pillar={PILLARS[activePillarIndex]} />
            
            {/* Context Switcher - Sticky Bottom */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 bg-white/80 backdrop-blur-xl px-8 py-4 rounded-full shadow-2xl border border-stone-200">
               <button 
                onClick={prevPillar}
                className="p-2 hover:text-cyan-600 transition-colors"
               >
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                 </svg>
               </button>
               
               <div className="flex gap-3">
                 {PILLARS.map((p, idx) => (
                   <button 
                     key={p.id}
                     onClick={() => setActivePillarIndex(idx)}
                     className={`w-3 h-3 rounded-full transition-all ${idx === activePillarIndex ? 'bg-cyan-500 scale-125' : 'bg-stone-300'}`}
                   />
                 ))}
               </div>

               <button 
                onClick={nextPillar}
                className="p-2 hover:text-cyan-600 transition-colors"
               >
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                 </svg>
               </button>
            </div>
          </>
        ) : (
          <div className="pt-32 pb-20 px-4">
            <ImageGenerator />
          </div>
        )}
      </main>

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default App;

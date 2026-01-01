
import React from 'react';
import { Pillar } from '../types';

interface PillarLayoutProps {
  pillar: Pillar;
}

const PillarLayout: React.FC<PillarLayoutProps> = ({ pillar }) => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row">
      {/* Tall Narrow Border Image (2:7 Aspect Ratio Simulation) */}
      <div className="md:w-[28%] w-full h-[400px] md:h-screen sticky top-0 overflow-hidden">
        <div className="absolute inset-0 watercolor-fade-left">
          <img 
            src={pillar.imagePlaceholder} 
            alt={pillar.title}
            className="w-full h-full object-cover opacity-40 grayscale-[0.2] sepia-[0.1]"
          />
          {/* Nyctimene Overlay / Glow Effect */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 pointer-events-none">
             <div className="relative">
                <div className="w-16 h-16 bg-cyan-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute top-0 left-0 text-cyan-400 glow-blue opacity-80">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
                  </svg>
                </div>
             </div>
          </div>
        </div>
        <div className="absolute inset-0 vignette pointer-events-none"></div>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-8 md:px-20 py-16 md:py-32 bg-transparent z-10">
        <div className="max-w-2xl">
          <header className="mb-12">
            <span className="text-cyan-600 font-semibold tracking-widest uppercase text-sm mb-2 block neon-text">
              The Primary Pillars
            </span>
            <h1 className="serif text-6xl md:text-8xl text-stone-800 mb-4 lowercase italic">
              {pillar.title}
            </h1>
            <div className="w-24 h-px bg-cyan-400 shadow-[0_0_8px_rgba(0,243,255,1)]"></div>
          </header>

          <section className="space-y-8">
            <p className="serif text-3xl text-stone-500 italic leading-relaxed">
              "{pillar.meaning}"
            </p>
            
            <div className="serif text-xl md:text-2xl text-stone-700 leading-relaxed space-y-6">
              <p>
                {pillar.description}
              </p>
              <p>
                As we return to the ruins of the past, we find them not silent, but humming with a new frequency. 
                Nyctimene perches upon the weathered Doric stone, her wings casting a soft neon-blue radiance 
                upon the ancient marble. The foundation remains, but the scaffolding is entirely new—architected 
                for an era where intelligence and virtue are intertwined.
              </p>
              <p>
                This pillar represents one of the core structural supports of the AreTéCracy OS. 
                Like the small but vigilant Glaux, it stands 6 to 8 inches in literal stature within our logo, 
                yet its philosophical weight supports the entire weight of the demos.
              </p>
            </div>

            <details className="pt-12 group">
              <summary className="cursor-pointer list-none">
                <div className="px-8 py-3 bg-stone-900 text-stone-100 hover:bg-stone-800 transition-colors serif text-lg flex items-center gap-3 w-fit">
                  Supporting Scaffolding
                  <svg
                    className="w-5 h-5 text-cyan-400 glow-blue transition-transform group-open:rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </summary>

              <div className="mt-6 rounded-2xl border border-stone-200/70 bg-white/60 p-6">
                <p className="serif text-lg text-stone-700 leading-relaxed">
                  The supporting pillars that reinforce <span className="italic">{pillar.title}</span> create a tiered scaffolding 
                  linking upward and downward across the model. This structural integrity ensures resilience in decentralized governance.
                </p>

                <div className="mt-5 flex flex-col gap-4">
                  <div>
                    <div className="text-sm font-semibold tracking-widest uppercase text-stone-500">
                      Scaffolding above
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-sm border border-stone-200">Philosophical Foundation</span>
                      <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-sm border border-stone-200">Metaphysical Framework</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold tracking-widest uppercase text-stone-500">
                      Scaffolding below
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-sm border border-stone-200">Procedural Implementation</span>
                      <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-sm border border-stone-200">Community Validation</span>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            {/* Find out more section */}
            <div className="pt-16 border-t border-stone-200/50">
              <h3 className="serif text-2xl text-stone-800 mb-6 italic">Pathways to Arete</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="#" className="group p-5 rounded-xl border border-transparent hover:border-cyan-200 hover:bg-white/40 transition-all duration-300">
                  <div className="text-cyan-600 font-bold text-xs uppercase tracking-widest mb-2 group-hover:neon-text transition-all">Protocol Alpha</div>
                  <div className="serif text-xl text-stone-800 mb-2">The Agora Algorithm</div>
                  <p className="text-stone-500 text-sm leading-relaxed">Discover how we process mass-deliberation without the noise of traditional social media.</p>
                </a>
                <a href="#" className="group p-5 rounded-xl border border-transparent hover:border-cyan-200 hover:bg-white/40 transition-all duration-300">
                  <div className="text-cyan-600 font-bold text-xs uppercase tracking-widest mb-2 group-hover:neon-text transition-all">Foundational Wisdom</div>
                  <div className="serif text-xl text-stone-800 mb-2">The Ethics of Alētheia</div>
                  <p className="text-stone-500 text-sm leading-relaxed">Exploring the role of truth-unconcealment in the era of generative intelligence.</p>
                </a>
                <a href="#" className="group p-5 rounded-xl border border-transparent hover:border-cyan-200 hover:bg-white/40 transition-all duration-300">
                  <div className="text-cyan-600 font-bold text-xs uppercase tracking-widest mb-2 group-hover:neon-text transition-all">Future Sight</div>
                  <div className="serif text-xl text-stone-800 mb-2">Nyctimene’s Watch</div>
                  <p className="text-stone-500 text-sm leading-relaxed">A deep dive into the vigilant AI oversight that protects our digital Isopoliteia.</p>
                </a>
                <a href="#" className="group p-5 rounded-xl border border-transparent hover:border-cyan-200 hover:bg-white/40 transition-all duration-300">
                  <div className="text-cyan-600 font-bold text-xs uppercase tracking-widest mb-2 group-hover:neon-text transition-all">Expansion</div>
                  <div className="serif text-xl text-stone-800 mb-2">Tertiary Scaffolding</div>
                  <p className="text-stone-500 text-sm leading-relaxed">Preview the upcoming modules for cultural and environmental flourishing.</p>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Decorative Feather in Foreground */}
      <div className="fixed bottom-10 right-10 opacity-60 hover:opacity-100 transition-opacity pointer-events-none">
        <div className="relative">
          <div className="w-12 h-1 bg-cyan-300 blur-xl absolute -bottom-2 -left-2 rotate-45"></div>
          <svg className="w-12 h-12 text-stone-400 glow-blue transform rotate-[30deg]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21,3C21,3 15.14,3 12.35,3.61C10,4.12 7.72,5.27 5.75,7.03C4,8.58 2.5,10.5 1.5,12.72C1.21,13.36 1,14.05 1,14.75C1,16.5 2,18 4,18C5,18 6,17.5 7,17C7,17 7.5,16.75 8,16.5C8.5,16.25 10,15.5 10.5,15.25C11,15 12,14.5 13,14C14.5,13.25 16,12.25 17.5,11.25C19,10.25 20.5,9.25 21.5,8C22.5,6.75 23,5 23,3.5C23,3.22 22.78,3 22.5,3H21M12.35,3.61C12.35,3.61 12.35,3.61 12.35,3.61M5.75,7.03L5.75,7.03M1.5,12.72L1.5,12.72" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PillarLayout;

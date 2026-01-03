// SAVE THIS AS: D:\GitHub\Pillars-Showcase\src\main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const PILLARS = [
  {
    id: 'isonomia',
    title: 'Isonomia',
    greek: 'ΙΣΟΝΟΜΙΑ',
    description: 'The foundation of equality before the law. In the AreTéCracy model, Isonomia is enhanced by AI-driven neutral arbitration, ensuring that the code of governance applies to all without bias or exception.',
    meaning: 'Equality of Law',
    image: './images/Pillar One almost Pixel Perfect.png'
  },
  {
    id: 'isegoria',
    title: 'Isegoria',
    greek: 'ΙΣΗΓΟΡΙΑ',
    description: 'The right of every citizen to speak in the assembly. We reimagine this through high-bandwidth communication protocols that allow for mass-deliberative consensus, protected by the ever-watchful Nyctimene.',
    meaning: 'Equality of Speech',
    image: './images/Nyctimene_Over_Delphi_Misty_Morning_Watercolor_Vertical.png'
  },
  {
    id: 'isopoliteia',
    title: 'Isopoliteia',
    greek: 'ΙΣΟΠΟΛΙΤΕΙΑ',
    description: 'Equality of political rights and citizenship. In our new OS for democracy, this translates to verifiable, secure digital identities that empower every individual with sovereign control over their democratic participation.',
    meaning: 'Equality of Rights',
    image: './images/Nyctimene_Over_Olympia_Curved_Pillars_Watercolor_Vertical.png'
  },
  {
    id: 'isoeudaimonia',
    title: 'IsoEudaimonia',
    greek: 'ΙΣΟΕΥΔΑΙΜΟΝΙΑ',
    description: 'The collective pursuit of flourishing. Beyond mere survival, AreTéCracy architects a society where technology serves the well-being and peak potential (Arete) of every citizen, guided by ancient wisdom and tech-enhanced foresight.',
    meaning: 'Equal Flourishing',
    image: './images/Nyctimene_over_Taormina_Theater_Sicily_Watercolor_Vertical.png'
  }
]

function App() {
  const [currentPillar, setCurrentPillar] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(false)

  const nextPillar = () => {
    setIsLoading(true)
    setTimeout(() => {
      setCurrentPillar((prev) => (prev + 1) % PILLARS.length)
      setIsLoading(false)
    }, 200)
  }

  const prevPillar = () => {
    setIsLoading(true)
    setTimeout(() => {
      setCurrentPillar((prev) => (prev - 1 + PILLARS.length) % PILLARS.length)
      setIsLoading(false)
    }, 200)
  }

  const goToPillar = (index) => {
    setIsLoading(true)
    setTimeout(() => {
      setCurrentPillar(index)
      setIsLoading(false)
    }, 200)
  }

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav>
        <h1>Are<span>Té</span>Cracy</h1>
      </nav>

      {/* Main Content */}
      <div className="container">
        <h2>The Four Pillars of Isotétes</h2>
        
        {/* Pillar Display */}
        <div className={`pillar-card ${isLoading ? 'loading' : ''}`}>
          <img 
            src={PILLARS[currentPillar].image} 
            alt={PILLARS[currentPillar].title}
            className="pillar-image"
            onError={(e) => {
              e.target.style.backgroundColor = '#e5e7eb'
              e.target.style.display = 'block'
              e.target.alt = 'Image: ' + PILLARS[currentPillar].title
            }}
          />
          <div className="pillar-content">
            <div className="greek-accent">{PILLARS[currentPillar].greek}</div>
            <h3>{PILLARS[currentPillar].title}</h3>
            <p className="pillar-meaning">{PILLARS[currentPillar].meaning}</p>
            <p className="pillar-description">{PILLARS[currentPillar].description}</p>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="nav-controls">
          <button 
            onClick={prevPillar}
            className="nav-button"
            aria-label="Previous pillar"
          >
            ← Previous
          </button>
          
          {/* Dots */}
          <div className="dots-nav">
            {PILLARS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPillar(index)}
                className={`dot ${index === currentPillar ? 'active' : ''}`}
                aria-label={`Go to ${PILLARS[index].title}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextPillar}
            className="nav-button"
            aria-label="Next pillar"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>Democracy 3.0 - Ancient wisdom, modern technology, no politicians</p>
        <p className="copyright">© 2026 AreTéCracy.org | 11 years in development</p>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

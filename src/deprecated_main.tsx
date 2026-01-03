// SAVE THIS AS: D:\GitHub\Pillars-Showcase\src\main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'

const PILLARS = [
  {
    id: 'isonomia',
    title: 'Isonomia',
    description: 'The foundation of equality before the law. In the AreTéCracy model, Isonomia is enhanced by AI-driven neutral arbitration.',
    meaning: 'Equality of Law',
    image: './images/Pillar One almost Pixel Perfect.png'
  },
  {
    id: 'isegoria',
    title: 'Isegoria',
    description: 'The right of every citizen to speak in the assembly. We reimagine this through high-bandwidth communication protocols.',
    meaning: 'Equality of Speech',
    image: './images/Nyctimene_Over_Delphi_Misty_Morning_Watercolor_Vertical.png'
  },
  {
    id: 'isopoliteia',
    title: 'Isopoliteia',
    description: 'Equality of political rights and citizenship. Every individual has sovereign control over their democratic participation.',
    meaning: 'Equality of Rights',
    image: './images/Nyctimene_Over_Olympia_Curved_Pillars_Watercolor_Vertical.png'
  },
  {
    id: 'isoeudaimonia',
    title: 'IsoEudaimonia',
    description: 'The collective pursuit of flourishing. A society where technology serves the well-being of every citizen.',
    meaning: 'Pursuit of Flourishing',
    image: './images/Nyctimene_over_Taormina_Theater_Sicily_Watercolor_Vertical.png'
  }
]

function App() {
  const [currentPillar, setCurrentPillar] = React.useState(0)

  const nextPillar = () => {
    setCurrentPillar((prev) => (prev + 1) % PILLARS.length)
  }

  const prevPillar = () => {
    setCurrentPillar((prev) => (prev - 1 + PILLARS.length) % PILLARS.length)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafaf3', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <nav style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
          Are<span style={{ color: '#0891b2' }}>Té</span>Cracy
        </h1>
      </nav>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px' }}>
          The Four Pillars of Isotétes
        </h2>
        
        {/* Pillar Display */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <img 
            src={PILLARS[currentPillar].image} 
            alt={PILLARS[currentPillar].title}
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onError={(e) => {
              e.target.style.backgroundColor = '#e5e7eb'
              e.target.style.display = 'block'
              e.target.alt = 'Image: ' + PILLARS[currentPillar].title
            }}
          />
          <div style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>
              {PILLARS[currentPillar].title}
            </h3>
            <p style={{ color: '#0891b2', fontSize: '1.25rem', marginBottom: '20px', fontStyle: 'italic' }}>
              {PILLARS[currentPillar].meaning}
            </p>
            <p style={{ color: '#4b5563', fontSize: '1.1rem', lineHeight: '1.8' }}>
              {PILLARS[currentPillar].description}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px' }}>
          <button 
            onClick={prevPillar}
            style={{
              padding: '12px 24px',
              backgroundColor: '#374151',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            ← Previous
          </button>
          
          {/* Dots */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {PILLARS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPillar(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: index === currentPillar ? '#0891b2' : '#d1d5db',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
          
          <button 
            onClick={nextPillar}
            style={{
              padding: '12px 24px',
              backgroundColor: '#374151',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Next →
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '40px', marginTop: '80px', textAlign: 'center' }}>
        <p>Democracy 3.0 - Ancient wisdom, modern technology, no politicians</p>
        <p style={{ marginTop: '10px', color: '#9ca3af' }}>© 2026 AreTéCracy.org</p>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

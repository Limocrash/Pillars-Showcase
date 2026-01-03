// Full-height image layout with overlapping panels
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Main Four Pillars of Isotétes
const MAIN_PILLARS = [
  {
    id: 'isonomia',
    title: 'Isonomia',
    greek: 'ΙΣΟΝΟΜΙΑ',
    description: 'The foundation of equality before the law. In the AreTéCracy model, Isonomia is enhanced by AI-driven neutral arbitration, ensuring that the code of governance applies to all without bias or exception.',
    meaning: 'Equality of Law',
    image: './images/Pillar One almost Pixel Perfect.png',
    borderSide: 'left',
    supportingPillars: ['dikaiosis', 'eunomia', 'sophrosyne']
  },
  {
    id: 'isegoria',
    title: 'Isegoria',
    greek: 'ΙΣΗΓΟΡΙΑ',
    description: 'The right of every citizen to speak in the assembly. We reimagine this through high-bandwidth communication protocols that allow for mass-deliberative consensus, protected by the ever-watchful Nyctimene.',
    meaning: 'Equality of Speech',
    image: './images/Nyctimene_Over_Delphi_Misty_Morning_Watercolor_Vertical.png',
    borderSide: 'left',
    supportingPillars: ['parrhesia', 'logodosia', 'akroasis']
  },
  {
    id: 'isopoliteia',
    title: 'Isopoliteia',
    greek: 'ΙΣΟΠΟΛΙΤΕΙΑ',
    description: 'Equality of political rights and citizenship. In our new OS for democracy, this translates to verifiable, secure digital identities that empower every individual with sovereign control over their democratic participation.',
    meaning: 'Equality of Rights',
    image: './images/Nyctimene_Over_Olympia_Curved_Pillars_Watercolor_Vertical.png',
    borderSide: 'right',
    supportingPillars: ['homonoia', 'koinonia', 'autarkeia']
  },
  {
    id: 'isoeudaimonia',
    title: 'IsoEudaimonia',
    greek: 'ΙΣΟΕΥΔΑΙΜΟΝΙΑ',
    description: 'The collective pursuit of flourishing. Beyond mere survival, AreTéCracy architects a society where technology serves the well-being and peak potential (Arete) of every citizen.',
    meaning: 'Equal Flourishing',
    image: './images/Nyctimene_over_Taormina_Theater_Sicily_Watercolor_Vertical.png',
    borderSide: 'right',
    supportingPillars: ['arete', 'paideia', 'eudaimonia']
  }
]

// Supporting Pillars
const SUPPORTING_PILLARS = {
  dikaiosis: { title: 'Dikaiosis', meaning: 'Restorative Justice' },
  eunomia: { title: 'Eunomia', meaning: 'Good Governance' },
  sophrosyne: { title: 'Sophrosyne', meaning: 'Balanced Wisdom' },
  parrhesia: { title: 'Parrhesia', meaning: 'Frank Speech' },
  logodosia: { title: 'Logodosia', meaning: 'Transparency' },
  akroasis: { title: 'Akroasis', meaning: 'Active Listening' },
  homonoia: { title: 'Homonoia', meaning: 'Consensus' },
  koinonia: { title: 'Koinonia', meaning: 'Community' },
  autarkeia: { title: 'Autarkeia', meaning: 'Self-Sufficiency' },
  arete: { title: 'Arete', meaning: 'Excellence' },
  paideia: { title: 'Paideia', meaning: 'Education' },
  eudaimonia: { title: 'Eudaimonia', meaning: 'Flourishing' }
}

function App() {
  const [currentPillar, setCurrentPillar] = React.useState(0)
  const [showSupporting, setShowSupporting] = React.useState(false)
  const current = MAIN_PILLARS[currentPillar]

  return (
    <div className="fullscreen-container">
      {/* Fixed Navigation */}
      <nav className="fixed-nav">
        <h1 className="logo">Are<span>Té</span>Cracy</h1>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#pillars" className="active">Pillars</a>
          <a href="#framework">Framework</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* Full-height image background */}
      <div className="image-container">
        <img 
          src={current.image} 
          alt={current.title}
          className="full-image"
        />
        {/* Gradient overlay for text readability */}
        <div className={`gradient-overlay ${current.borderSide}`}></div>
      </div>

      {/* Content panel that overlaps the image */}
      <div className={`content-panel ${current.borderSide}`}>
        <div className="panel-inner">
          <div className="greek-accent">{current.greek}</div>
          <h2 className="pillar-title">{current.title}</h2>
          <p className="pillar-meaning">{current.meaning}</p>
          <p className="pillar-description">{current.description}</p>
          
          {/* Supporting pillars button */}
          <button 
            className="supporting-toggle"
            onClick={() => setShowSupporting(!showSupporting)}
          >
            {showSupporting ? 'Hide' : 'Show'} Supporting Pillars
          </button>
          
          {/* Supporting pillars list */}
          {showSupporting && (
            <div className="supporting-list">
              {current.supportingPillars.map(id => (
                <div key={id} className="supporting-item">
                  <h4>{SUPPORTING_PILLARS[id].title}</h4>
                  <span>{SUPPORTING_PILLARS[id].meaning}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Compact pillar navigation */}
      <div className="pillar-nav-compact">
        {MAIN_PILLARS.map((pillar, index) => (
          <button
            key={pillar.id}
            className={`nav-pill ${index === currentPillar ? 'active' : ''}`}
            onClick={() => {
              setCurrentPillar(index)
              setShowSupporting(false)
            }}
          >
            <span className="nav-greek">{pillar.greek.charAt(0)}</span>
            <span className="nav-title">{pillar.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

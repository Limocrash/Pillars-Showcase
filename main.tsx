// SAVE THIS AS: D:\GitHub\Pillars-Showcase\src\main.tsx
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
    supportingPillars: ['dikaiosis', 'eunomia', 'sophrosyne']
  },
  {
    id: 'isegoria',
    title: 'Isegoria',
    greek: 'ΙΣΗΓΟΡΙΑ',
    description: 'The right of every citizen to speak in the assembly. We reimagine this through high-bandwidth communication protocols that allow for mass-deliberative consensus, protected by the ever-watchful Nyctimene.',
    meaning: 'Equality of Speech',
    image: './images/Nyctimene_Over_Delphi_Misty_Morning_Watercolor_Vertical.png',
    supportingPillars: ['parrhesia', 'logodosia', 'akroasis']
  },
  {
    id: 'isopoliteia',
    title: 'Isopoliteia',
    greek: 'ΙΣΟΠΟΛΙΤΕΙΑ',
    description: 'Equality of political rights and citizenship. In our new OS for democracy, this translates to verifiable, secure digital identities that empower every individual with sovereign control over their democratic participation.',
    meaning: 'Equality of Rights',
    image: './images/Nyctimene_Over_Olympia_Curved_Pillars_Watercolor_Vertical.png',
    supportingPillars: ['homonoia', 'koinonia', 'autarkeia']
  },
  {
    id: 'isoeudaimonia',
    title: 'IsoEudaimonia',
    greek: 'ΙΣΟΕΥΔΑΙΜΟΝΙΑ',
    description: 'The collective pursuit of flourishing. Beyond mere survival, AreTéCracy architects a society where technology serves the well-being and peak potential (Arete) of every citizen, guided by ancient wisdom and tech-enhanced foresight.',
    meaning: 'Equal Flourishing',
    image: './images/Nyctimene_over_Taormina_Theater_Sicily_Watercolor_Vertical.png',
    supportingPillars: ['arete', 'paideia', 'eudaimonia']
  }
]

// Supporting Pillars (second tier)
const SUPPORTING_PILLARS = {
  // Isonomia supports
  dikaiosis: {
    title: 'Dikaiosis',
    greek: 'ΔΙΚΑΙΩΣΙΣ',
    meaning: 'Restorative Justice',
    description: 'Justice as restoration, not retribution.',
    subPillars: ['apokatastasis', 'metanoia']
  },
  eunomia: {
    title: 'Eunomia',
    greek: 'ΕΥΝΟΜΙΑ',
    meaning: 'Good Governance',
    description: 'Well-crafted laws from collective wisdom.',
    subPillars: ['nomothesia', 'synesis']
  },
  sophrosyne: {
    title: 'Sophrosyne',
    greek: 'ΣΩΦΡΟΣΥΝΗ',
    meaning: 'Balanced Wisdom',
    description: 'Moderation and self-control in governance.',
    subPillars: []
  },
  
  // Isegoria supports
  parrhesia: {
    title: 'Parrhesia',
    greek: 'ΠΑΡΡΗΣΙΑ',
    meaning: 'Frank Speech',
    description: 'The courage to speak truth to power.',
    subPillars: []
  },
  logodosia: {
    title: 'Logodosia',
    greek: 'ΛΟΓΟΔΟΣΙΑ',
    meaning: 'Transparency',
    description: 'Radical accountability in all decisions.',
    subPillars: ['diaphanes', 'katharotes']
  },
  akroasis: {
    title: 'Akroasis',
    greek: 'ΑΚΡΟΑΣΙΣ',
    meaning: 'Active Listening',
    description: 'The duty to hear all voices.',
    subPillars: []
  },
  
  // Isopoliteia supports
  homonoia: {
    title: 'Homonoia',
    greek: 'ΟΜΟΝΟΙΑ',
    meaning: 'Consensus',
    description: 'Unity through 70% agreement thresholds.',
    subPillars: ['symphonia', 'syneidesis']
  },
  koinonia: {
    title: 'Koinonia',
    greek: 'ΚΟΙΝΩΝΙΑ',
    meaning: 'Community',
    description: 'Shared fellowship and mutual support.',
    subPillars: []
  },
  autarkeia: {
    title: 'Autarkeia',
    greek: 'ΑΥΤΑΡΚΕΙΑ',
    meaning: 'Self-Sufficiency',
    description: 'Local resilience in global systems.',
    subPillars: []
  },
  
  // IsoEudaimonia supports
  arete: {
    title: 'Arete',
    greek: 'ΑΡΕΤΗ',
    meaning: 'Excellence',
    description: 'The pursuit of peak human potential.',
    subPillars: ['andreia', 'phronesis']
  },
  paideia: {
    title: 'Paideia',
    greek: 'ΠΑΙΔΕΙΑ',
    meaning: 'Education',
    description: 'Lifelong cultivation of wisdom.',
    subPillars: ['episteme', 'techne']
  },
  eudaimonia: {
    title: 'Eudaimonia',
    greek: 'ΕΥΔΑΙΜΟΝΙΑ',
    meaning: 'Flourishing',
    description: 'The good life, well lived.',
    subPillars: []
  }
}

// Sub-pillars (third tier)
const SUB_PILLARS = {
  apokatastasis: { title: 'Apokatastasis', meaning: 'Restoration to wholeness' },
  metanoia: { title: 'Metanoia', meaning: 'Transformation of mind' },
  nomothesia: { title: 'Nomothesia', meaning: 'Law-giving process' },
  synesis: { title: 'Synesis', meaning: 'Understanding together' },
  diaphanes: { title: 'Diaphanes', meaning: 'Complete transparency' },
  katharotes: { title: 'Katharotes', meaning: 'Purity of process' },
  symphonia: { title: 'Symphonia', meaning: 'Harmonious agreement' },
  syneidesis: { title: 'Syneidesis', meaning: 'Shared consciousness' },
  andreia: { title: 'Andreia', meaning: 'Courage in action' },
  phronesis: { title: 'Phronesis', meaning: 'Practical wisdom' },
  episteme: { title: 'Episteme', meaning: 'Scientific knowledge' },
  techne: { title: 'Techne', meaning: 'Crafted skill' }
}

function App() {
  const [currentPillar, setCurrentPillar] = React.useState(0)
  const [expandedSupporting, setExpandedSupporting] = React.useState(null)
  const [showSupportingPillars, setShowSupportingPillars] = React.useState(false)
  const [selectedSupporting, setSelectedSupporting] = React.useState(null)

  const handlePillarClick = (index) => {
    setCurrentPillar(index)
    setShowSupportingPillars(true)
    setExpandedSupporting(null)
    setSelectedSupporting(null)
  }

  const handleSupportingClick = (supportingId) => {
    setSelectedSupporting(supportingId)
    const pillar = SUPPORTING_PILLARS[supportingId]
    if (pillar.subPillars && pillar.subPillars.length > 0) {
      setExpandedSupporting(expandedSupporting === supportingId ? null : supportingId)
    }
  }

  const currentMainPillar = MAIN_PILLARS[currentPillar]
  const displayPillar = selectedSupporting 
    ? SUPPORTING_PILLARS[selectedSupporting]
    : currentMainPillar

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="main-nav">
        <h1>Are<span>Té</span>Cracy</h1>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#pillars" className="active">Pillars</a>
          <a href="#framework">Framework</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        <h2>The Four Pillars of Isotétes</h2>
        
        {/* Hierarchical Pillar Navigation */}
        <div className="pillar-nav-container">
          {/* Main Pillars Row */}
          <div className="main-pillars-row">
            {MAIN_PILLARS.map((pillar, index) => (
              <div 
                key={pillar.id}
                className={`main-pillar-item ${index === currentPillar ? 'active' : ''}`}
                onClick={() => handlePillarClick(index)}
              >
                <div className="pillar-icon">
                  <div className="greek-letter">{pillar.greek.charAt(0)}</div>
                </div>
                <h4>{pillar.title}</h4>
                <span className="pillar-subtitle">{pillar.meaning}</span>
              </div>
            ))}
          </div>

          {/* Supporting Pillars Row (appears when main pillar selected) */}
          {showSupportingPillars && (
            <div className="supporting-pillars-row">
              {currentMainPillar.supportingPillars.map(supportingId => {
                const supporting = SUPPORTING_PILLARS[supportingId]
                return (
                  <div 
                    key={supportingId}
                    className={`supporting-pillar-item ${selectedSupporting === supportingId ? 'active' : ''}`}
                    onClick={() => handleSupportingClick(supportingId)}
                  >
                    <h5>{supporting.title}</h5>
                    <span className="supporting-subtitle">{supporting.meaning}</span>
                    {supporting.subPillars.length > 0 && (
                      <span className="expand-indicator">
                        {expandedSupporting === supportingId ? '−' : '+'}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {/* Sub-pillars Row (appears when supporting pillar with children is selected) */}
          {expandedSupporting && SUPPORTING_PILLARS[expandedSupporting].subPillars.length > 0 && (
            <div className="sub-pillars-row">
              {SUPPORTING_PILLARS[expandedSupporting].subPillars.map(subId => {
                const sub = SUB_PILLARS[subId]
                return (
                  <div key={subId} className="sub-pillar-item">
                    <h6>{sub.title}</h6>
                    <span className="sub-subtitle">{sub.meaning}</span>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Content Display */}
        <div className="pillar-display-card">
          {!selectedSupporting && (
            <img 
              src={currentMainPillar.image} 
              alt={currentMainPillar.title}
              className="pillar-image"
              onError={(e) => {
                e.target.style.backgroundColor = '#e5e7eb'
                e.target.alt = 'Image loading...'
              }}
            />
          )}
          <div className="pillar-content">
            <div className="greek-accent">{displayPillar.greek}</div>
            <h3>{displayPillar.title}</h3>
            <p className="pillar-meaning">{displayPillar.meaning}</p>
            <p className="pillar-description">{displayPillar.description}</p>
            
            {selectedSupporting && (
              <button 
                className="back-button"
                onClick={() => {
                  setSelectedSupporting(null)
                  setExpandedSupporting(null)
                }}
              >
                ← Back to {currentMainPillar.title}
              </button>
            )}
          </div>
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

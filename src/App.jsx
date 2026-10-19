// Week 8 starter: React State & Interactive Components
// TODO: Break down your week 7 monolithic component into separate components
// Each component should manage its own state as appropriate

import './App.css'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <div className="portfolio">
      <Navbar />
      <Projects />

      {/* TODO: Import and add components here:
          - <Navbar />
          - <Hero />
          - <About />
          - <Skills />
          - <Projects />
          - <Contact />
          - <Footer />
      */}
    </div>
  )
}

export default App

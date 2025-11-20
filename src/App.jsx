import React, { useRef, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Configurator from './components/Configurator'
import Gallery from './components/Gallery'
import About from './components/About'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [selectedType, setSelectedType] = useState('m3')

  const sections = {
    home: useRef(null),
    features: useRef(null),
    configurator: useRef(null),
    gallery: useRef(null),
    about: useRef(null),
  }

  const onScrollTo = (key) => {
    const el = document.getElementById(key)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#020617]">
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}

      <Navbar onSelectType={setSelectedType} onScrollTo={onScrollTo} />

      <main>
        <Hero onStart={() => onScrollTo('configurator')} ref={sections.home} />
        <Features ref={sections.features} />
        <Configurator selectedType={selectedType} ref={sections.configurator} />
        <Gallery ref={sections.gallery} />
        <About ref={sections.about} />
      </main>

      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-[520px] h-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[620px] h-[620px] rounded-full bg-blue-700/10 blur-3xl" />
      </div>
    </div>
  )
}

export default App

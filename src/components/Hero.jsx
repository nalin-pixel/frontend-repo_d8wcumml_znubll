import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = ({ onStart }) => {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28">
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a1022] to-[#0d0f1a]" />
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur text-cyan-300 text-xs">BMW M Series</div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100">
            BMW M Series 3D Experience
          </h1>
          <p className="mt-4 text-slate-300/90 leading-relaxed">
            Rasakan konfigurator 3D yang imersif untuk BMW M Series. Putar 360°, ubah warna eksterior, velg, knalpot, dan tema interior — semua secara real-time.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button onClick={onStart} className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all">
              Start Configuring
            </button>
            <a href="#configurator" className="px-6 py-3 rounded-xl border border-white/10 text-slate-200 hover:bg-white/5">Learn More</a>
          </div>
        </div>
        <div className="relative h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
          <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* gradient accents */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero

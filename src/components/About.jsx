import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#050914] to-[#020617]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-slate-100 text-3xl font-bold mb-4">About This Project</h2>
        <p className="text-slate-300/90 leading-relaxed">
          BMW M Series 3D Configurator adalah proyek showcase untuk menampilkan konsep konfigurator otomotif modern dengan sentuhan futuristik. Ini bukan produk resmi dari BMW. Tujuannya adalah memberikan pengalaman eksplorasi 3D yang premium dan elegan.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#configurator" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20">Contact for Collaboration</a>
          <a href="#gallery" className="px-5 py-2.5 rounded-xl border border-white/10 text-slate-200 hover:bg-white/5">View More Projects</a>
        </div>
      </div>
    </section>
  )
}

export default About

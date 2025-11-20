import React from 'react'

const items = new Array(8).fill(0).map((_,i)=>({ id:i, src:`https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1000&auto=format&fit=crop`, alt:`BMW angle ${i+1}` }))

const Gallery = () => {
  return (
    <section id="gallery" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0f1e] to-[#020617]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-slate-100 text-3xl font-bold mb-10">Gallery</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={it.src} alt={it.alt} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

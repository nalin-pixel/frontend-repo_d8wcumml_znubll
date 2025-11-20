import React from 'react'
import { Rotate3D, Palette, SteeringWheel, Sparkles } from 'lucide-react'

const features = [
  { icon: Rotate3D, title: '360° 3D Rotation', desc: 'Putar mobil secara interaktif untuk melihat setiap sudut.' },
  { icon: Palette, title: 'Live Color & Interior', desc: 'Ubah warna eksterior dan tema interior secara real-time.' },
  { icon: SteeringWheel, title: 'Wheels & Exhaust Variants', desc: 'Pilih model velg dan tipe knalpot favorit Anda.' },
  { icon: Sparkles, title: 'Preset Driving Styles', desc: 'Track, Street, dan Luxury siap digunakan.' },
]

const Features = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#070b17] to-[#0b0f1a]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-slate-100 text-3xl font-bold mb-10">Fitur Unggulan</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all">
              <f.icon className="text-cyan-300" />
              <h3 className="mt-4 text-slate-100 font-semibold">{f.title}</h3>
              <p className="mt-1 text-slate-300/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

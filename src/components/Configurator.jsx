import React, { useMemo, useState } from 'react'
import { RotateCcw, Save, Camera, ZoomIn, ZoomOut } from 'lucide-react'

const colors = [
  { name: 'White', value: '#f8fafc' },
  { name: 'Black', value: '#0b0f1a' },
  { name: 'Blue', value: '#1d4ed8' },
  { name: 'Red', value: '#dc2626' },
  { name: 'Yellow', value: '#eab308' },
  { name: 'Green', value: '#22c55e' },
  { name: 'Frozen Grey', value: '#9aa0a6' },
]

const wheels = [
  'M Performance 1',
  'M Performance 2',
  'Track Style',
  'Luxury Style',
]

const exhausts = [
  'Standard',
  'Carbon Tip',
  'Titanium Blue',
  'Black Edition',
]

const interiors = [
  'Black Alcantara',
  'Red Leather',
  'Beige Luxury',
  'Blue Stitching',
]

const typePresets = {
  m2: { color: '#1d4ed8', wheel: wheels[0], exhaust: exhausts[0], interior: interiors[0] },
  m3: { color: '#dc2626', wheel: wheels[2], exhaust: exhausts[2], interior: interiors[1] },
  m4: { color: '#0b0f1a', wheel: wheels[1], exhaust: exhausts[3], interior: interiors[3] },
  m5: { color: '#9aa0a6', wheel: wheels[3], exhaust: exhausts[1], interior: interiors[2] },
  m8: { color: '#f8fafc', wheel: wheels[1], exhaust: exhausts[0], interior: interiors[0] },
}

const stylePresets = [
  { name: 'Track', set: { color: '#dc2626', wheel: wheels[2], exhaust: exhausts[2], interior: 'Black Alcantara' } },
  { name: 'Street', set: { color: '#1d4ed8', wheel: wheels[0], exhaust: exhausts[0], interior: 'Blue Stitching' } },
  { name: 'Luxury', set: { color: '#9aa0a6', wheel: wheels[3], exhaust: exhausts[1], interior: 'Beige Luxury' } },
]

const Mock3D = ({ color }) => {
  // Simple mock visual to simulate 3D using layered gradients and highlights
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative w-[90%] max-w-3xl aspect-[16/9]">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-white/10" />
        {/* Car body */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg width="760" height="360" viewBox="0 0 760 360" className="drop-shadow-[0_40px_80px_rgba(0,255,255,0.15)]">
            <defs>
              <linearGradient id="bodyGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor={color} stopOpacity="0.9" />
                <stop offset="100%" stopColor={color} stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path d="M40 220 C 140 120, 280 90, 380 120 C 450 140, 620 120, 720 170 L720 220 L40 220 Z" fill="url(#bodyGrad)" stroke="#1f2937" strokeWidth="3" />
            {/* windows */}
            <path d="M200 170 C 260 130, 400 120, 520 150 L520 180 L200 180 Z" fill="#0b1324" opacity="0.85" />
            {/* wheels */}
            <circle cx="240" cy="220" r="34" fill="#0f172a" stroke="#334155" />
            <circle cx="580" cy="220" r="34" fill="#0f172a" stroke="#334155" />
            <circle cx="240" cy="220" r="18" fill="#111827" stroke="#64748b" />
            <circle cx="580" cy="220" r="18" fill="#111827" stroke="#64748b" />
            {/* headlights */}
            <circle cx="690" cy="190" r="4" fill="#cffafe" />
            <circle cx="705" cy="188" r="4" fill="#bae6fd" />
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.12),transparent_60%)]" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-slate-400">Rotate 360° & Zoom simulation</div>
      </div>
    </div>
  )
}

const Configurator = ({ selectedType }) => {
  const initial = useMemo(() => typePresets[selectedType] || typePresets.m3, [selectedType])
  const [color, setColor] = useState(initial.color)
  const [wheel, setWheel] = useState(initial.wheel)
  const [exhaust, setExhaust] = useState(initial.exhaust)
  const [interior, setInterior] = useState(initial.interior)

  const applyStylePreset = (preset) => {
    setColor(preset.color)
    setWheel(preset.wheel)
    setExhaust(preset.exhaust)
    setInterior(preset.interior)
  }

  const reset = () => {
    setColor(initial.color)
    setWheel(initial.wheel)
    setExhaust(initial.exhaust)
    setInterior(initial.interior)
  }

  return (
    <section id="configurator" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712] to-[#020617]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        {/* Left: 3D visual */}
        <div className="relative h-[520px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
          <div className="absolute top-3 right-3 z-10 flex items-center gap-2 text-slate-300/80">
            <button className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20"><ZoomIn size={16}/></button>
            <button className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20"><ZoomOut size={16}/></button>
          </div>
          <Mock3D color={color} />
        </div>

        {/* Right: Controls */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h3 className="text-slate-100 font-semibold mb-4">Exterior Color</h3>
            <div className="flex flex-wrap gap-3">
              {colors.map(c => (
                <button key={c.name} onClick={() => setColor(c.value)} title={c.name} className={`w-9 h-9 rounded-full border ${color === c.value ? 'ring-2 ring-cyan-400 border-transparent' : 'border-white/20'} `} style={{ backgroundColor: c.value }} />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h3 className="text-slate-100 font-semibold mb-4">Wheels / Velg</h3>
            <div className="grid grid-cols-2 gap-3">
              {wheels.map(w => (
                <button key={w} onClick={() => setWheel(w)} className={`px-3 py-2 rounded-xl border ${wheel===w?'border-cyan-400 bg-cyan-400/10':'border-white/15 hover:bg-white/10'} text-slate-200`}>{w}</button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h3 className="text-slate-100 font-semibold mb-4">Exhaust / Knalpot</h3>
            <div className="grid grid-cols-2 gap-3">
              {exhausts.map(e => (
                <button key={e} onClick={() => setExhaust(e)} className={`px-3 py-2 rounded-xl border ${exhaust===e?'border-cyan-400 bg-cyan-400/10':'border-white/15 hover:bg-white/10'} text-slate-200`}>{e}</button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h3 className="text-slate-100 font-semibold mb-4">Interior</h3>
            <div className="grid grid-cols-2 gap-3">
              {interiors.map(i => (
                <button key={i} onClick={() => setInterior(i)} className={`px-3 py-2 rounded-xl border ${interior===i?'border-cyan-400 bg-cyan-400/10':'border-white/15 hover:bg-white/10'} text-slate-200`}>{i}</button>
              ))}
            </div>
            <div className="mt-3">
              <button className="px-3 py-2 text-sm rounded-lg border border-white/15 text-slate-300 hover:bg-white/10">View Interior</button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h3 className="text-slate-100 font-semibold mb-4">Preset by Tipe</h3>
            <div className="flex flex-wrap gap-3">
              {stylePresets.map(p => (
                <button key={p.name} onClick={() => applyStylePreset(p.set)} className="px-3 py-2 rounded-xl border border-white/15 hover:bg-white/10 text-slate-200">{p.name}</button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={reset} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 text-slate-200 hover:bg-white/10"><RotateCcw size={16}/> Reset Config</button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 text-slate-200 hover:bg-white/10"><Save size={16}/> Save Preset</button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 text-slate-200 hover:bg-white/10"><Camera size={16}/> Screenshot</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Configurator

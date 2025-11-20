import React, { useState } from 'react'
import { Menu, ChevronDown } from 'lucide-react'

const types = [
  { key: 'm2', label: 'M2 Competition' },
  { key: 'm3', label: 'M3 Competition' },
  { key: 'm4', label: 'M4 Competition' },
  { key: 'm5', label: 'M5 Competition' },
  { key: 'm8', label: 'M8 Competition' },
]

const Navbar = ({ onSelectType, onScrollTo }) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <button className="lg:hidden text-slate-200" onClick={() => setOpen(v => !v)} aria-label="Open menu">
                <Menu size={22} />
              </button>
              <div className="text-slate-100 font-semibold tracking-wide">
                BMW M 3D Configurator
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-6 text-sm">
              {['Home','Features','Configurator','Gallery','About'].map(item => (
                <button key={item} onClick={() => onScrollTo(item.toLowerCase())} className="text-slate-300 hover:text-cyan-300 transition-colors">
                  {item}
                </button>
              ))}

              <div className="relative">
                <button onClick={() => setOpen(v => !v)} className="inline-flex items-center gap-1 text-slate-200 hover:text-cyan-300">
                  Tipe <ChevronDown size={16} />
                </button>
                {open && (
                  <div className="absolute right-0 mt-3 w-56 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-md p-2 shadow-2xl">
                    {types.map(t => (
                      <button key={t.key} onClick={() => { onSelectType(t.key); setOpen(false) }} className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-white/10">
                        {t.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* mobile */}
          {open && (
            <div className="lg:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {['Home','Features','Configurator','Gallery','About'].map(item => (
                <button key={item} onClick={() => { onScrollTo(item.toLowerCase()); setOpen(false) }} className="block w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-white/10">
                  {item}
                </button>
              ))}
              <div className="pt-2">
                <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">Tipe</div>
                <div className="grid grid-cols-2 gap-2">
                  {types.map(t => (
                    <button key={t.key} onClick={() => { onSelectType(t.key); setOpen(false) }} className="px-3 py-2 rounded-lg text-slate-200 bg-white/5 hover:bg-white/10">
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar

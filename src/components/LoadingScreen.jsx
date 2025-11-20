import React, { useEffect, useState } from 'react'

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + Math.random() * 12)
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setDone(true)
            setTimeout(onFinish, 500)
          }, 400)
        }
        return next
      })
    }, 250)
    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${done ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="w-full h-full absolute inset-0 flex items-center justify-center">
        {/* Car silhouette with headlight glow */}
        <div className="relative w-[360px] h-[180px]">
          <svg viewBox="0 0 360 180" className="w-full h-full drop-shadow-[0_0_30px_rgba(59,130,246,0.25)]">
            <defs>
              <linearGradient id="body" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#0b1020" />
                <stop offset="100%" stopColor="#101828" />
              </linearGradient>
            </defs>
            {/* Simplified sports car silhouette */}
            <path d="M20 110 C60 60, 140 50, 200 70 C240 80, 300 70, 340 95 L340 110 L20 110 Z" fill="url(#body)" stroke="#1f2a44" strokeWidth="2" opacity="0.9" />
            {/* Wheels */}
            <circle cx="100" cy="110" r="18" fill="#0f172a" stroke="#334155"/>
            <circle cx="270" cy="110" r="18" fill="#0f172a" stroke="#334155"/>
            {/* Headlights */}
            <g>
              <circle cx="325" cy="98" r="4" className="headlight-glow" />
              <circle cx="312" cy="96" r="4" className="headlight-glow" />
            </g>
          </svg>
          {/* Glow halos */}
          <div className="absolute top-[74px] right-[22px] w-24 h-12 bg-cyan-400/0 rounded-full blur-2xl animate-headlight" />
          <div className="absolute top-[70px] right-[46px] w-20 h-10 bg-cyan-300/0 rounded-full blur-2xl animate-headlight-delay" />
        </div>
      </div>

      <div className="absolute bottom-24 text-center px-6">
        <p className="text-cyan-200/80 text-sm tracking-wide mb-3">Loading your BMW M Series 3D experience…</p>
        <div className="w-72 h-1.5 bg-white/10 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-400 rounded-full transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen

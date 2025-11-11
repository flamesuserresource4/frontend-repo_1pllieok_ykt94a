import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  const containerRef = useRef(null)

  // Cursor reactive tilt for the shirt mock
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-50, 50], [10, -10]), { stiffness: 150, damping: 15 })
  const ry = useSpring(useTransform(x, [-50, 50], [-10, 10]), { stiffness: 150, damping: 15 })
  const tX = useSpring(x, { stiffness: 120, damping: 12 })
  const tY = useSpring(y, { stiffness: 120, damping: 12 })

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const px = e.clientX - (rect.left + rect.width / 2)
    const py = e.clientY - (rect.top + rect.height / 2)
    x.set(Math.max(-50, Math.min(50, px / 6)))
    y.set(Math.max(-50, Math.min(50, py / 6)))
  }

  const handleMouseLeave = () => {
    x.set(0); y.set(0)
  }

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white" ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* gradient veil to blend with brand colors; pointer events disabled so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center">
        {/* Shirt display with hover zoom and cursor-reactive tilt */}
        <motion.div
          style={{ rotateX: rx, rotateY: ry, x: tX, y: tY }}
          className="group relative w-[280px] sm:w-[360px] md:w-[440px] aspect-[4/5] rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_80px_-20px_rgba(147,51,234,0.6)]"
        >
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <img
              src="/shirt.png"
              alt="Positivity Kaizen Tee"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            {/* fallback pattern if no image available */}
            <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.25),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.25),transparent_40%)]">
              <div className="text-left p-6">
                <p className="text-sm uppercase tracking-widest text-fuchsia-300/80">Positivity Kaizen</p>
                <h3 className="mt-2 text-2xl font-semibold">Signature Anime Tee</h3>
                <p className="mt-2 text-white/70">Add your shirt.png to public/ for a full preview.</p>
              </div>
            </div>
          </div>
          {/* subtle glow on hover */}
          <div className="pointer-events-none absolute -inset-2 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'linear-gradient(90deg, rgba(168,85,247,0.35), rgba(56,189,248,0.35))' }} />
        </motion.div>

        {/* Tagline with neon hover glow */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-10 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
        >
          <span className="neon-text cursor-pointer align-middle">Embrace Your Positivity Kaizen Journey</span>
        </motion.h1>

        {/* CTA */}
        <motion.a
          href="#details"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 shadow-[0_10px_30px_-10px_rgba(99,102,241,0.6)] transition hover:translate-y-[-2px] hover:bg-white/20 hover:shadow-[0_18px_40px_-12px_rgba(168,85,247,0.8)]"
        >
          Shop the Tee
        </motion.a>

        {/* Scroll hint */}
        <div className="mt-10 text-white/60 text-xs">Scroll to explore ↓</div>
      </div>
    </section>
  )
}

export default Hero

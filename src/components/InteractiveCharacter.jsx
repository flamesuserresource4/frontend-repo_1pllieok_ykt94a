import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Parallax, reacts to scroll; acts as an anime-style character silhouette card
const InteractiveCharacter = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1.04])

  return (
    <section ref={ref} className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(60%_60%_at_50%_100%, rgba(56,189,248,0.1), transparent), radial-gradient(40%_40%_at_10%_10%, rgba(168,85,247,0.08), transparent)' }} />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2">
        <motion.div style={{ y, scale }} className="relative order-2 md:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img src="/character.png" alt="Anime Character" className="h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none' }} />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="text-xs uppercase tracking-widest text-fuchsia-300/80">Interactive</div>
                <div className="mt-2 text-2xl font-semibold">Feel the Energy</div>
                <p className="mt-2 text-white/70">Add character.png to public/ for a fully custom look.</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="order-1 md:order-2">
          <h3 className="text-2xl sm:text-3xl font-bold">Live Anime Motion</h3>
          <p className="mt-3 text-white/70">The hero reacts to your cursor; this section breathes with parallax. Its like the character is training as you scroll.</p>
          <ul className="mt-6 space-y-3 text-white/80">
            <li>• Subtle parallax depth for immersion</li>
            <li>• Smooth, GPU-friendly animations</li>
            <li>• Mobile-optimized interactions</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default InteractiveCharacter

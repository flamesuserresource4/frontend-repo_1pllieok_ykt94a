import React from 'react'
import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1520975954732-35dd222996f6?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511253819057-5401cc83b9df?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542060748-10c28b62716b?q=80&w=800&auto=format&fit=crop',
]

const InstagramFeed = () => {
  return (
    <section id="feed" className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <h3 className="text-2xl sm:text-3xl font-bold">Community Vibes</h3>
          <a href="#" className="text-sm text-white/70 hover:text-white">@positivitykaizen</a>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {images.map((src, i) => (
            <motion.a
              key={src}
              href={src}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <img src={src} alt="IG" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-fuchsia-400/0 transition group-hover:ring-4 group-hover:ring-fuchsia-400/40" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramFeed

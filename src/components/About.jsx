import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, HeartHandshake, Lightbulb, Shirt } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: 'easeOut' } })
}

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
        >
          The Design Philosophy
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 max-w-2xl text-white/70"
        >
          A blend of anime energy and continuous improvement. Minimal, bold, and uplifting.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            { icon: Lightbulb, title: 'Concept', text: 'Inspired by growth, grit, and neon city nights.' },
            { icon: Shirt, title: 'Fabric', text: 'Premium cotton blend. Soft, breathable, durable.' },
            { icon: HeartHandshake, title: 'Fit', text: 'Athletic comfort fit with room to move.' },
            { icon: Sparkles, title: 'Care', text: 'Colorfast print. Easy care, long lasting.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="flex items-start gap-4">
                <item.icon className="h-6 w-6 text-fuchsia-300" />
                <div>
                  <div className="text-lg font-semibold">{item.title}</div>
                  <div className="mt-1 text-white/70">{item.text}</div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(600px 200px at 10% 0%, rgba(168,85,247,0.35), transparent), radial-gradient(600px 200px at 90% 100%, rgba(56,189,248,0.35), transparent)'}} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

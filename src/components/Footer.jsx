import React from 'react'
import { Instagram, Twitter, Youtube } from 'lucide-react'

const IconLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer" className="rounded-full p-2 transition hover:scale-110 hover:text-fuchsia-300">
    {children}
  </a>
)

const Footer = () => {
  return (
    <footer className="relative bg-black py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <div className="text-sm uppercase tracking-widest text-white/60">Positivity Kaizen</div>
            <div className="mt-1 text-white/70">Embrace the journey. Improve daily.</div>
          </div>
          <div className="flex items-center gap-3">
            <IconLink href="#"><Instagram className="h-5 w-5" /></IconLink>
            <IconLink href="#"><Twitter className="h-5 w-5" /></IconLink>
            <IconLink href="#"><Youtube className="h-5 w-5" /></IconLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import InteractiveCharacter from './components/InteractiveCharacter'
import InstagramFeed from './components/InstagramFeed'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen w-full bg-black text-white">
        <Hero />
        <About />
        <InteractiveCharacter />
        <InstagramFeed />
        <Footer />
      </div>
    </LazyMotion>
  )
}

export default App

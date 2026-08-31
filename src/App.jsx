import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import About from './components/About'
import EducationCV from './components/EducationCV'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.body.className = `theme-${theme}`
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className={`portfolio-app theme-${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Portfolio />
        <About />
        <EducationCV />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

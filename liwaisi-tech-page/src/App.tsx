import './App.css'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="hero-container">
      <header className="navbar">
        <div className="logo">
          <img src="/src/assets/icons/Logo.svg" alt="LIWAISI Logo" className="logo-img" />
        </div>
        <nav className="nav-desktop">
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#impact">Impact</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="nav-mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
              <a href="#impact" onClick={() => setMenuOpen(false)}>Impact</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <main className="hero-main">
        <section className="hero-text">
          <h1 className="hero-title">TECHNOLOGY<br/>WITH HEART</h1>
          <p className="hero-description">
            At LIWAISI, we believe the countryside doesn't need solutions brought from outside, but tools built with its people, its knowledge, and its reality.
          </p>
          <button className="hero-btn">GET STARTED</button>
        </section>
        <section className="hero-image">
          {/* Aquí irá la imagen que el usuario proveerá */}
          <img src="/ruta/a/tu/imagen.png" alt="Hero" className="main-hero-img" />
        </section>
      </main>
    </div>
  )
}

export default App

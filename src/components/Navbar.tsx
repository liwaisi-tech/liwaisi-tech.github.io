import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { texts } from '../assets/texts';
import { Lang } from '../types/Lang';

interface NavbarProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}

export const Navbar = ({ lang, onLangChange }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
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
      <div className="nav-actions">
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <select
          className="lang-selector hide-mobile"
          value={lang}
          onChange={e => onLangChange(e.target.value as Lang)}
          aria-label="Seleccionar idioma"
        >
          <option value={Lang.ES}>ES</option>
          <option value={Lang.EN}>EN</option>
        </select>
      </div>
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
  );
}; 
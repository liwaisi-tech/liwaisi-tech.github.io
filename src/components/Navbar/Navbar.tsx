import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { texts } from '../../assets/texts';
import { Lang } from '../../types/Lang';
import { IMAGES } from '../../config/images';
import styles from './Navbar.module.css';

interface NavbarProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}

export const Navbar = ({ lang, onLangChange }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Determinar el idioma (es/en)
  const langKey = typeof lang === 'string' ? lang : (lang === Lang.ES ? 'es' : 'en');
  const navTexts = texts[langKey].navbar;
  return (
    <header className={styles['navbar']}>
      <div className={styles['logo']}>
        <img src={IMAGES.LOGO} alt="LIWAISI Logo" className={styles['logo-img']} />
      </div>
      <nav className={styles['nav-desktop']}>
        <a href="#about">{navTexts.about}</a>
        <a href="#programs">{navTexts.programs}</a>
        <a href="#impact">{navTexts.impact}</a>
        <a href="#contact">{navTexts.contact}</a>
      </nav>
      <div className={styles['nav-actions']}>
        <button className={styles['nav-hamburger']} onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <select
          className={`${styles['lang-selector']} ${styles['hide-mobile']}`}
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
            className={styles['nav-mobile']}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <a href="#about" onClick={() => setMenuOpen(false)}>{navTexts.about}</a>
            <a href="#programs" onClick={() => setMenuOpen(false)}>{navTexts.programs}</a>
            <a href="#impact" onClick={() => setMenuOpen(false)}>{navTexts.impact}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>{navTexts.contact}</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}; 
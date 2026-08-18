import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { texts } from '../../../assets/texts';
import { Lang } from '../../types/Lang';
import { IMAGES } from '../../config/images';
import styles from './Navbar.module.css';

interface NavbarProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  activeSection: string;
}

export const Navbar = ({ lang, onLangChange, activeSection }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Determinar el idioma (es/en)
  const langKey = typeof lang === 'string' ? lang : (lang === Lang.ES ? 'es' : 'en');
  const navTexts = texts[langKey].navbar;

  const handleNavigate = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 96;
      const offset = 100;
      const elementPosition = element.offsetTop - navbarHeight - offset;
      
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  return (
    <header className={styles['navbar']}>
      <div className={styles['logo']}>
        <img src={IMAGES.LOGO} alt="LIWAISI Logo" className={styles['logo-img']} />
      </div>
      <nav className={styles['nav-desktop']}>
        <a href="#hero" className={activeSection === 'hero' ? styles['active-link'] : ''} onClick={(e) => handleNavigate(e, 'hero')}>{navTexts.home}</a>
        <a href="#caracteristicas" className={activeSection === 'caracteristicas' ? styles['active-link'] : ''} onClick={(e) => handleNavigate(e, 'caracteristicas')}>{navTexts.product}</a>
        <a href="#impacto" className={activeSection === 'impacto' ? styles['active-link'] : ''} onClick={(e) => handleNavigate(e, 'impacto')}>{navTexts.impact}</a>
        <a href="#postula" className={activeSection === 'postula' ? styles['active-link'] : ''} onClick={(e) => handleNavigate(e, 'postula')}>{navTexts.pilot}</a>
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
            <a href="#hero" className={activeSection === 'hero' ? styles['active-link'] : ''} onClick={(e) => handleNavigate(e, 'hero')}>{navTexts.home}</a>
            <a href="#caracteristicas" className={activeSection === 'caracteristicas' ? styles['active-link'] : ''} onClick={(e) => handleNavigate(e, 'caracteristicas')}>{navTexts.product}</a>
            <a href="#impacto" className={activeSection === 'impacto' ? styles['active-link'] : ''} onClick={(e) => handleNavigate(e, 'impacto')}>{navTexts.impact}</a>
            <a href="#postula" className={activeSection === 'postula' ? styles['active-link'] : ''} onClick={(e) => handleNavigate(e, 'postula')}>{navTexts.pilot}</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}; 
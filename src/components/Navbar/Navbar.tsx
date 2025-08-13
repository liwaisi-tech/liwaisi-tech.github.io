import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { texts } from '../../assets/texts';
import { Lang } from '../../types/Lang';
import { IMAGES } from '../../config/images';
import { ContactForm } from '../ContactForm/ContactForm';
import styles from './Navbar.module.css';

interface NavbarProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  activeSection: string;
}

export const Navbar = ({ lang, onLangChange, activeSection }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  
  // Determinar el idioma (es/en)
  const langKey = typeof lang === 'string' ? lang : (lang === Lang.ES ? 'es' : 'en');
  const navTexts = texts[langKey].navbar;

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowContactForm(true);
    setMenuOpen(false);
  };

  const handleCloseForm = () => {
    setShowContactForm(false);
  };
  return (
    <header className={styles['navbar']}>
      <div className={styles['logo']}>
        <img src={IMAGES.LOGO} alt="LIWAISI Logo" className={styles['logo-img']} />
      </div>
      <nav className={styles['nav-desktop']}>
        <a href="#about" className={activeSection === 'about' ? styles['active-link'] : ''}>{navTexts.about}</a>
        <a href="#hero" className={activeSection === 'hero' ? styles['active-link'] : ''}>{navTexts.hero}</a>
        <a href="#community" className={activeSection === 'community' ? styles['active-link'] : ''}>{navTexts.programs}</a>
        <a href="#impact" className={activeSection === 'impact' ? styles['active-link'] : ''}>{navTexts.impact}</a>
        <a href="#partners" className={activeSection === 'partners' ? styles['active-link'] : ''}>{navTexts.parners}</a>
        <a href="#footer" className={activeSection === 'footer' ? styles['active-link'] : ''} onClick={handleContactClick}>{navTexts.contact}</a>
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
            <a href="#about" className={activeSection === 'about' ? styles['active-link'] : ''} onClick={() => setMenuOpen(false)}>{navTexts.about}</a>
            <a href="#hero" className={activeSection === 'hero' ? styles['active-link'] : ''} onClick={() => setMenuOpen(false)}>{navTexts.hero}</a>
            <a href="#community" className={activeSection === 'community' ? styles['active-link'] : ''} onClick={() => setMenuOpen(false)}>{navTexts.programs}</a>
            <a href="#impact" className={activeSection === 'impact' ? styles['active-link'] : ''} onClick={() => setMenuOpen(false)}>{navTexts.impact}</a>
            <a href="#partners" className={activeSection === 'partners' ? styles['active-link'] : ''} onClick={() => setMenuOpen(false)}>{navTexts.parners}</a>
            <a href="#footer" className={activeSection === 'footer' ? styles['active-link'] : ''} onClick={handleContactClick}>{navTexts.contact}</a>
          </motion.nav>
        )}
      </AnimatePresence>

      {showContactForm && (
        <div className={styles['modal-overlay']} onClick={handleCloseForm}>
          <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles['modal-close']} 
              onClick={handleCloseForm}
              aria-label="Cerrar formulario"
            >
              ×
            </button>
            <ContactForm lang={langKey as 'es' | 'en'} />
          </div>
        </div>
      )}
    </header>
  );
}; 
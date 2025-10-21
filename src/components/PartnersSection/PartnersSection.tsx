import { useState } from 'react';
import { texts } from '../../assets/texts';
import { IMAGES } from '../../config/images';
import { ContactForm } from '../ContactForm/ContactForm';
import styles from './PartnersSection.module.css';

interface PartnersSectionProps {
  lang: 'es' | 'en';
}

export const PartnersSection = ({ lang }: PartnersSectionProps) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handlePartnerClick = () => {
    setShowContactForm(true);
  };

  const handleCloseForm = () => {
    setShowContactForm(false);
  };

  return (
    <>
      <section id="partners" className={styles['partners-section']}>
        <h2 className={styles['partners-title']}>{texts[lang].partners.title}</h2>
        <div className={styles['carousel-logos-wrapper']}>
          <div className={styles['carousel-logos']}>
            <a href="https://nelisglobal.org/" target="_blank" rel="noopener noreferrer">
              <img className={styles['partner-logo']} src={IMAGES.NELIS} alt="Nelis Global" />
            </a>
            <img className={styles['partner-logo']} src={IMAGES.ECOingenio} alt="ECOIngenio" />
            <a href="https://www.instagram.com/rincon_verde/" target="_blank" rel="noopener noreferrer">
              <img className={styles['partner-logo']} src={IMAGES.RINCON_VERDE} alt="Rincón Verde" />
            </a>
            <a href="https://omlatam.org/" target="_blank" rel="noopener noreferrer">
              <img className={styles['partner-logo']} src={IMAGES.OMLATAM} alt="OMLATAM" />
            </a>
            <a href="https://www.instagram.com/almadoterracol/" target="_blank" rel="noopener noreferrer">
              <img className={styles['partner-logo']} src={IMAGES.ALMA_DO} alt="Alma do Terra" />
            </a>
            <a href="https://www.pachaecohub.com/" target="_blank" rel="noopener noreferrer">
              <img className={styles['partner-logo']} src={IMAGES.PACHA} alt="Pacha" />
            </a>
            {/* Duplicamos los logos para efecto infinito */}
            <a href="https://nelisglobal.org/" target="_blank" rel="noopener noreferrer">
              <img className={styles['partner-logo']} src={IMAGES.NELIS} alt="Nelis Global" />
            </a>
            <img className={styles['partner-logo']} src={IMAGES.ECOingenio} alt="ECOIngenio" />
            <a href="https://www.instagram.com/rincon_verde/" target="_blank" rel="noopener noreferrer">
              <img className={styles['partner-logo']} src={IMAGES.RINCON_VERDE} alt="Rincón Verde" />
            </a>
            <a href="https://omlatam.org/" target="_blank" rel="noopener noreferrer">
              <img className={styles['partner-logo']} src={IMAGES.OMLATAM} alt="OMLATAM" />
            </a>
            <a href="https://www.instagram.com/almadoterracol/" target="_blank" rel="noopener noreferrer">
              <img className={styles['partner-logo']} src={IMAGES.ALMA_DO} alt="Alma do Terra" />
            </a>
            <a href="https://www.pachaecohub.com/" target="_blank" rel="noopener noreferrer">
              <img className={styles['partner-logo']} src={IMAGES.PACHA} alt="Pacha" />
            </a>
          </div>
        </div>
        <button 
          className={styles['partners-btn']} 
          onClick={handlePartnerClick}
        >
          {texts[lang].partners.button}
        </button>
      </section>

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
            <ContactForm lang={lang} onSuccess={handleCloseForm} />
          </div>
        </div>
      )}
    </>
  );
}; 
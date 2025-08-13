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
            <img className={styles['partner-logo']} src={IMAGES.NELIS} alt="Nelis Global" />
            <img className={styles['partner-logo']} src={IMAGES.ECOingenio} alt="ECOIngenio" />
            <img className={styles['partner-logo']} src={IMAGES.RINCON_VERDE} alt="Rincón Verde" />
            <img className={styles['partner-logo']} src={IMAGES.OMLATAM} alt="OMLATAM" />
            <img className={styles['partner-logo']} src={IMAGES.ALMA_DO} alt="Alma do Terra" />
            <img className={styles['partner-logo']} src={IMAGES.PACHA} alt="Pacha" />
            {/* Duplicamos los logos para efecto infinito */}
            <img className={styles['partner-logo']} src={IMAGES.NELIS} alt="Nelis Global" />
            <img className={styles['partner-logo']} src={IMAGES.ECOingenio} alt="ECOIngenio" />
            <img className={styles['partner-logo']} src={IMAGES.RINCON_VERDE} alt="Rincón Verde" />
            <img className={styles['partner-logo']} src={IMAGES.OMLATAM} alt="OMLATAM" />
            <img className={styles['partner-logo']} src={IMAGES.ALMA_DO} alt="Alma do Terra" />
            <img className={styles['partner-logo']} src={IMAGES.PACHA} alt="Pacha" />
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
            <ContactForm lang={lang} />
          </div>
        </div>
      )}
    </>
  );
}; 
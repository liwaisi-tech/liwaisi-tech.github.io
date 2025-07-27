import { texts } from '../../assets/texts';
import { IMAGES } from '../../config/images';
import styles from './PartnersSection.module.css';

interface PartnersSectionProps {
  lang: 'es' | 'en';
}

export const PartnersSection = ({ lang }: PartnersSectionProps) => (
  <section id="partners" className={styles['partners-section']}>
    <h2 className={styles['partners-title']}>{texts[lang].partners.title}</h2>
    <div className={styles['carousel-logos-wrapper']}>
      <div className={styles['carousel-logos']}>
        <img className={styles['partner-logo']} src={IMAGES.NELIS} alt="Nelis Global" />
        <img className={styles['partner-logo']} src={IMAGES.ECOingenio} alt="ECOIngenio" />
        <img className={styles['partner-logo']} src={IMAGES.RINCON_VERDE} alt="Rincón Verde" />
        <img className={styles['partner-logo']} src={IMAGES.OMLATAM} alt="OMLATAM" />
        <img className={styles['partner-logo']} src={IMAGES.ALMA_DO} alt="Alma do Terra" />
        {/* Duplicamos los logos para efecto infinito */}
        <img className={styles['partner-logo']} src={IMAGES.NELIS} alt="Nelis Global" />
        <img className={styles['partner-logo']} src={IMAGES.ECOingenio} alt="ECOIngenio" />
        <img className={styles['partner-logo']} src={IMAGES.RINCON_VERDE} alt="Rincón Verde" />
        <img className={styles['partner-logo']} src={IMAGES.OMLATAM} alt="OMLATAM" />
        <img className={styles['partner-logo']} src={IMAGES.ALMA_DO} alt="Alma do Terra" />
      </div>
    </div>
    <button className={styles['partners-btn']}>{texts[lang].partners.button}</button>
  </section>
); 
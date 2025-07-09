import { texts } from '../../assets/texts';
import { IMAGES } from '../../config/images';
import styles from './PartnersSection.module.css';

interface PartnersSectionProps {
  lang: 'es' | 'en';
}

export const PartnersSection = ({ lang }: PartnersSectionProps) => (
  <section className={styles['partners-section']}>
    <h2 className={styles['partners-title']}>{texts[lang].partners.title}</h2>
    <div className={styles['partners-carousel']}>
      <button className={styles['carousel-arrow']}>&#60;</button>
      <img className={styles['partner-logo']} src={IMAGES.PARTNER_AGRONOMOS} alt="Partner 1" />
      <button className={styles['carousel-arrow']}>&#62;</button>
    </div>
    <div className={styles['carousel-dots']}>
      <span className={`${styles['dot']} ${styles['active']}`}></span>
      <span className={styles['dot']}></span>
      <span className={styles['dot']}></span>
      <span className={styles['dot']}></span>
      <span className={styles['dot']}></span>
      <span className={styles['dot']}></span>
      <span className={styles['dot']}></span>
      <span className={styles['dot']}></span>
      <span className={styles['dot']}></span>
      <span className={styles['dot']}></span>
    </div>
    <button className={styles['partners-btn']}>{texts[lang].partners.button}</button>
  </section>
); 
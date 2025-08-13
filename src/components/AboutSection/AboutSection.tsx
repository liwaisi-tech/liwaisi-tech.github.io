import React from 'react';
import { texts } from '../../assets/texts';
import { IMAGES } from '../../config/images';
import styles from './AboutSection.module.css';

interface AboutSectionProps {
  lang: 'es' | 'en';
}

export const AboutSection = ({ lang }: AboutSectionProps) => (
  <section id="about" className={styles['about-section']}>
    <h2 className={styles['about-title']}>
      {texts[lang].about.title}
    </h2>
    <div className={styles['about-container']}>
      <div className={styles['about-image']}>
        <img src={IMAGES.VALORES_DESKTOP} alt="Valores" />
      </div>
      <div className={styles['about-content']}>
        <p className={styles['about-description']}>
          {texts[lang].about.description}
        </p>
        <h3 className={styles['about-how-title']}>
          {texts[lang].about.howTitle}
        </h3>
        <p className={styles['about-how-description']}>
          {texts[lang].about.howDescription}
        </p>
      </div>
    </div>
  </section>
); 
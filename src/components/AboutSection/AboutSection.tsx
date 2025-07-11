import React from 'react';
import { texts } from '../../assets/texts';
import styles from './AboutSection.module.css';

interface AboutSectionProps {
  lang: 'es' | 'en';
}

export const AboutSection = ({ lang }: AboutSectionProps) => (
  <section id="about" className={styles['about-section']}>
    <h2 className={styles['about-title']}>
      {texts[lang].about.title}
    </h2>
    <p className={styles['about-description']}>
      {texts[lang].about.description}
    </p>
  </section>
); 
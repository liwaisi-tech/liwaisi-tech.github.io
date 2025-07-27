import React from 'react';
import { texts } from '../../assets/texts';
import styles from './AboutSection.module.css';

interface AboutSectionProps {
  lang: 'es' | 'en';
}

export const AboutSection = ({ lang }: AboutSectionProps) => (
  <>
    <section id="impact" className={styles['impact-section']}>
      <h2 className={styles['impact-title']}>Nuestras intervenciones</h2>
      <div className={styles['impact-cards']}>
        <div className={styles['impact-card']}>
          <div className={styles['impact-card-title']}>IA para la gestión del riego</div>
          <div className={styles['impact-card-desc']}><strong>Recomendamos una gestión eficiente del agua basada en datos, machine learning e inteligencia artificial.</strong></div>
          <ul className={styles['impact-card-list']}>
            <li><span className={styles['impact-card-icon']}>💧</span>Recopilamos y consolidamos datos meteorológicos de estaciones públicas para calcular la evapotranspiración hiperlocal.</li>
            <li><span className={styles['impact-card-icon']}>🛰️</span>Usando una matriz de múltiples satélites e IA, creamos un coeficiente de cultivo específico del sitio para cada campo. No utilizamos hardware.</li>
            <li><span className={styles['impact-card-icon']}>📊</span>Proporcionamos recomendaciones de riego específicas, en texto simple, que permiten al agricultor regar según necesidades reales.</li>
          </ul>
        </div>
        <div className={styles['impact-card']}>
          <div className={styles['impact-card-title']}>Conversión de Riego</div>
          <div className={styles['impact-card-desc']}><strong>Transformamos sistemas de riego tradicionales en inteligentes y sostenibles.</strong></div>
          <ul className={styles['impact-card-list']}>
            <li><span className={styles['impact-card-icon']}>🔄</span>Modernización de infraestructura de riego en comunidades rurales.</li>
            <li><span className={styles['impact-card-icon']}>🌱</span>Capacitación a agricultores en el uso de nuevas tecnologías para el riego eficiente.</li>
            <li><span className={styles['impact-card-icon']}>📈</span>Mejora comprobada en la productividad y ahorro de agua.</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="about" className={styles['about-section']}>
      <h2 className={styles['about-title']}>
        {texts[lang].about.title}
      </h2>
      <p className={styles['about-description']}>
        {texts[lang].about.description}
      </p>
    </section>
  </>
); 
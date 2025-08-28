import { texts } from '../../assets/texts';
import styles from './ImpactSection.module.css';

interface ImpactSectionProps {
  lang: 'es' | 'en';
}

export const ImpactSection = ({ lang }: ImpactSectionProps) => (
  <section id="impact" className={styles['impact-section']}>
    <h2 className={styles['impact-title']}>{texts[lang].impact.title}</h2>
    <div className={styles['impact-cards']}>
      <div className={styles['impact-card']}>
        <div className={styles['impact-card-title']}>{texts[lang].impact.card1.title}</div>
        <div className={styles['impact-card-desc']}><strong>{texts[lang].impact.card1.description}</strong></div>
        <ul className={styles['impact-card-list']}>
          <li><span className={styles['impact-card-icon']}>💧</span>{texts[lang].impact.card1.points[0]}</li>
          <li><span className={styles['impact-card-icon']}>🛰️</span>{texts[lang].impact.card1.points[1]}</li>
          <li><span className={styles['impact-card-icon']}>📊</span>{texts[lang].impact.card1.points[2]}</li>
        </ul>
      </div>
      <div className={styles['impact-card']}>
        <div className={styles['impact-card-title']}>{texts[lang].impact.card2.title}</div>
        <div className={styles['impact-card-desc']}><strong>{texts[lang].impact.card2.description}</strong></div>
        <ul className={styles['impact-card-list']}>
          <li><span className={styles['impact-card-icon']}>🔄</span>{texts[lang].impact.card2.points[0]}</li>
          <li><span className={styles['impact-card-icon']}>🌱</span>{texts[lang].impact.card2.points[1]}</li>
          <li><span className={styles['impact-card-icon']}>📈</span>{texts[lang].impact.card2.points[2]}</li>
        </ul>
      </div>
    </div>
  </section>
);

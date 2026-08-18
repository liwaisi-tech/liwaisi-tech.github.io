import { texts } from '../../../assets/texts';
import styles from './ImpactSection.module.css';

interface ImpactSectionProps {
  lang: 'es' | 'en';
}

export const ImpactSection = ({ lang }: ImpactSectionProps) => {
  const cases = texts[lang].impact.cases;

  return (
    <section id="impact" className={styles['impact-section']}>
      <h2 className={styles['impact-title']}>{texts[lang].impact.title}</h2>
      <div className={styles['impact-cards']}>
        {Object.entries(cases).map(([key, item]) => (
          <div key={key} className={styles['impact-card']}>
            <div className={styles['impact-card-title']}>{item.title}</div>
            <div className={styles['impact-card-desc']}><strong>{item.description}</strong></div>
            <ul className={styles['impact-card-list']}>
              {item.points.map((pt: string, idx: number) => (
                <li key={idx}><span className={styles['impact-card-icon']}>•</span>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

import { texts } from '../../assets/texts';
import styles from './Hero.module.css';

interface HeroProps {
  lang: 'es' | 'en';
  background: string;
}

export const Hero = ({ lang, background }: HeroProps) => (
  <main
    className={styles['hero-main']}
    style={{
      background: `linear-gradient(rgba(16,48,53,0.7), rgba(16,48,53,0.7)), url(${background}) center center/cover no-repeat`
    }}
  >
    <section className={styles['hero-text']}>
      <h1 className={styles['hero-title']}>{texts[lang].hero.title.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</h1>
      <p className={styles['hero-description']}>{texts[lang].hero.description}</p>
      <button className={styles['hero-btn']}>{texts[lang].hero.button}</button>
    </section>
  </main>
); 
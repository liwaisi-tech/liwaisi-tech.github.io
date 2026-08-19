import { texts } from '../../../assets/texts';
import styles from './Hero.module.css';
import { useIsMobile } from '../../hooks/useIsMobile';
import { IMAGES } from '../../config/images';

interface HeroProps {
  lang: 'es' | 'en';
}

export const Hero = ({ lang }: HeroProps) => {
  const isMobile = useIsMobile();
  const background = isMobile ? IMAGES.HERO_BACKGROUND_MOBILE : IMAGES.HERO_BACKGROUND;

  return (
    <main
      id="hero"
      className={styles['hero-main']}
      style={{
        background: `linear-gradient(rgba(16,48,53,0.7), rgba(16,48,53,0.7)), url(${background}) center center/cover no-repeat`
      }}
    >
      <section className={styles['hero-text']}>
        <h1 className={styles['hero-title']}>{texts[lang].hero.title}</h1>
        <p className={styles['hero-description']}>{texts[lang].hero.subtitle}</p>
        <a 
          href="#postula" 
          className={styles['hero-btn']}
        >
          {texts[lang].hero.cta}
        </a>
      </section>
    </main>
  );
}; 
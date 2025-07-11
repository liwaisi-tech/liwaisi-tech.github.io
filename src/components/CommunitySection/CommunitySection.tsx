import { useState, useEffect } from 'react';
import { texts } from '../../assets/texts';
import { IMAGES } from '../../config/images';
import { useIsMobile } from '../../hooks/useIsMobile';
import styles from './CommunitySection.module.css';

interface CommunitySectionProps {
  lang: 'es' | 'en';
}

export const CommunitySection = ({ lang }: CommunitySectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();

  // Array con todas las imágenes (desktop y mobile)
  const images = [
    { desktop: IMAGES.EN_SESION_DESKTOP, mobile: IMAGES.EN_SESION_MOBILE, alt: 'Uva' },
    { desktop: IMAGES.TABRAJO_HUERTA_DESKTOP, mobile: IMAGES.TABRAJO_HUERTA_MOBILE, alt: 'Plátano' },
    { desktop: IMAGES.SENSOR_DESKTOP, mobile: IMAGES.SENSOR_MOBILE, alt: 'Nuez' },
    { desktop: IMAGES.INSTALACION_DESKTOP, mobile: IMAGES.INSTALACION_MOBILE, alt: 'Tomate' },
    { desktop: IMAGES.TALLER_DESKTOP, mobile: IMAGES.TALLER_MOBILE, alt: 'Café' },
    { desktop: IMAGES.MONITOREO_DESKTOP, mobile: IMAGES.MONITOREO_MOBILE, alt: 'Riego' },
    { desktop: IMAGES.LABORATORIO_DESKTOP, mobile: IMAGES.LABORATORIO_MOBILE, alt: 'Naranjas' },
    { desktop: IMAGES.PRACTICA_HUERTA_DESKTOP, mobile: IMAGES.PRACTICA_HUERTA_MOBILE, alt: 'Maíz' }
  ];

  // Total de slides (8 imágenes / 2 por slide = 4 slides)
  const totalSlides = images.length / 2;

  // Efecto para el slide automático
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, totalSlides]);

  // Obtener las imágenes del slide actual
  const getCurrentImages = () => {
    const startIndex = currentSlide * 2;
    return images.slice(startIndex, startIndex + 2);
  };

  return (
    <section className={styles['community-section']}>
      <div className={styles['community-content']}>
        <h2 className={styles['community-title']}>{texts[lang].community.title}</h2>
        <p className={styles['community-desc']}>{texts[lang].community.description}</p>
        <a
          href="https://www.youtube.com/@LiwaisiTech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles['community-btn']}>{texts[lang].community.button}</button>
        </a>
      </div>
      
      <div 
        className={styles['community-gallery']}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={styles['slide-container']}>
          {getCurrentImages().map((image, index) => (
            <img 
              key={`${currentSlide}-${index}`}
              src={isMobile ? image.mobile : image.desktop}
              alt={image.alt}
              className={styles['slide-image']}
              loading={currentSlide === 0 && index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        
        {/* Indicadores de slide */}
        <div className={styles['slide-indicators']}>
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`${styles['indicator']} ${
                index === currentSlide ? styles['indicator-active'] : ''
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
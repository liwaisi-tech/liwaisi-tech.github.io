import { useState, useEffect } from 'react';
import { texts } from '../../assets/texts';
import { IMAGES } from '../../config/images';
import styles from './CommunitySection.module.css';

interface CommunitySectionProps {
  lang: 'es' | 'en';
}

export const CommunitySection = ({ lang }: CommunitySectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // const [imagesPerSlide, setImagesPerSlide] = useState(2); // Removed as per edit hint

  // Array con todas las imágenes
  const images = [
    { src: IMAGES.COMMUNITY_UVA, alt: 'Uva' },
    { src: IMAGES.COMMUNITY_NARANJAS, alt: 'Naranjas' },
    { src: IMAGES.COMMUNITY_RIEGO, alt: 'Riego' },
    { src: IMAGES.COMMUNITY_NUEZ, alt: 'Nuez' },
    { src: IMAGES.COMMUNITY_PLATANO, alt: 'Plátano' },
    { src: IMAGES.COMMUNITY_CAFE, alt: 'Café' },
    { src: IMAGES.COMMUNITY_TOMATE, alt: 'Tomate' },
    { src: IMAGES.COMMUNITY_MAIZ, alt: 'Maíz' }
  ];

  // Detectar si es mobile para mostrar solo una imagen // Removed as per edit hint
  // useEffect(() => {
  //   const checkMobile = () => {
  //     setImagesPerSlide(window.innerWidth <= 700 ? 1 : 2);
  //   };
  //   checkMobile();
  //   window.addEventListener('resize', checkMobile);
  //   return () => window.removeEventListener('resize', checkMobile);
  // }, []);

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
              src={image.src} 
              alt={image.alt}
              className={styles['slide-image']}
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
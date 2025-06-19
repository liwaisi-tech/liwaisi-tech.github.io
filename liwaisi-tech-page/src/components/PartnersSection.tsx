import { texts } from '../assets/texts';
import { IMAGES } from '../config/images';

interface PartnersSectionProps {
  lang: 'es' | 'en';
}

export const PartnersSection = ({ lang }: PartnersSectionProps) => (
  <section className="partners-section">
    <h2 className="partners-title">{texts[lang].partners.title}</h2>
    <div className="partners-carousel">
      <button className="carousel-arrow">&#60;</button>
      <img className="partner-logo" src={IMAGES.PARTNER_AGRONOMOS} alt="Partner 1" />
      <button className="carousel-arrow">&#62;</button>
    </div>
    <div className="carousel-dots">
      <span className="dot active"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
    <button className="partners-btn">{texts[lang].partners.button}</button>
  </section>
); 
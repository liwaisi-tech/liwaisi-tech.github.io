import { texts } from '../assets/texts';
import { IMAGES } from '../config/images';

interface CommunitySectionProps {
  lang: 'es' | 'en';
}

export const CommunitySection = ({ lang }: CommunitySectionProps) => (
  <section className="community-section">
    <div className="community-content">
      <h2 className="community-title">{texts[lang].community.title}</h2>
      <p className="community-desc">{texts[lang].community.description}</p>
      <button className="community-btn">{texts[lang].community.button}</button>
    </div>
    <div className="community-gallery">
      <img src={IMAGES.COMMUNITY_UVA} alt="Uva" />
      <img src={IMAGES.COMMUNITY_NARANJAS} alt="Naranjas" />
      <img src={IMAGES.COMMUNITY_RIEGO} alt="Riego" />
      <img src={IMAGES.COMMUNITY_NUEZ} alt="Nuez" />
    </div>
  </section>
); 
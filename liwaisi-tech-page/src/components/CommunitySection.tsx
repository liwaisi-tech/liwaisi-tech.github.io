import { texts } from '../assets/texts';

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
      <img src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80" alt="Uva" />
      <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Naranjas" />
      <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Riego" />
      <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80" alt="Nuez" />
    </div>
  </section>
); 
import { texts } from '../assets/texts';

interface FooterProps {
  lang: 'es' | 'en';
}

export const Footer = ({ lang }: FooterProps) => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-social">
        <strong>{texts[lang].footer.follow}</strong>
        <div className="footer-icons">
          <a href="#" aria-label="Facebook"><span className="icon">&#xf09a;</span></a>
          <a href="#" aria-label="Twitter"><span className="icon">&#xf099;</span></a>
          <a href="#" aria-label="LinkedIn"><span className="icon">&#xf0e1;</span></a>
          <a href="#" aria-label="YouTube"><span className="icon">&#xf167;</span></a>
          <a href="#" aria-label="Instagram"><span className="icon">&#xf16d;</span></a>
          <a href="#" aria-label="Medium"><span className="icon">&#xf23a;</span></a>
        </div>
      </div>
      <div className="footer-contact">
        <strong>{texts[lang].footer.contact}</strong>
        <div className="footer-email">
          <span className="icon">&#xf0e0;</span> {texts[lang].footer.email}
        </div>
      </div>
    </div>
    <div className="footer-legal">
      {texts[lang].footer.legal}
    </div>
    <hr className="footer-divider" />
    <div className="footer-claim">
      <strong>{texts[lang].footer.claim}</strong>
    </div>
  </footer>
); 
import { texts } from '../../assets/texts';
import styles from './Footer.module.css';

interface FooterProps {
  lang: 'es' | 'en';
}

export const Footer = ({ lang }: FooterProps) => (
  <footer id="footer" className={styles['footer']}>
    <div className={styles['footer-content']}>
      <div className={styles['footer-social']}>
        <strong>{texts[lang].footer.follow}</strong>
        <div className={styles['footer-icons']}>
          <a href="#" aria-label="Facebook"><span className={styles['icon']}>&#xf09a;</span></a>
          <a href="#" aria-label="Twitter"><span className={styles['icon']}>&#xf099;</span></a>
          <a href="#" aria-label="LinkedIn"><span className={styles['icon']}>&#xf0e1;</span></a>
          <a href="#" aria-label="YouTube"><span className={styles['icon']}>&#xf167;</span></a>
          <a href="#" aria-label="Instagram"><span className={styles['icon']}>&#xf16d;</span></a>
          <a href="#" aria-label="Medium"><span className={styles['icon']}>&#xf23a;</span></a>
        </div>
      </div>
      <div className={styles['footer-contact']}>
        <strong>{texts[lang].footer.contact}</strong>
        <div className={styles['footer-email']}>
          <span className={styles['icon']}>&#xf0e0;</span> {texts[lang].footer.email}
        </div>
      </div>
    </div>
    <div className={styles['footer-legal']}>
      {texts[lang].footer.legal}
    </div>
    <hr className={styles['footer-divider']} />
    <div className={styles['footer-claim']}>
      <strong>{texts[lang].footer.claim}</strong>
    </div>
  </footer>
); 
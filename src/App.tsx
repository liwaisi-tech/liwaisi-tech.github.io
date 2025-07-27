import './App.css'
import { IMAGES } from './config/images'
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { CommunitySection } from "./components/CommunitySection/CommunitySection";
import { PartnersSection } from "./components/PartnersSection/PartnersSection";
import { Footer } from "./components/Footer/Footer";
import { Lang } from './types/Lang'
import { useEffect, useState } from 'react'
import { AboutSection } from "./components/AboutSection/AboutSection";

function getAppLang(): Lang {
  const browserLang = navigator.language.slice(0, 2)
  if (browserLang === Lang.ES) return Lang.ES
  return Lang.EN
}

function App() {
  const [lang, setLang] = useState<Lang>(getAppLang());
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['partners', 'hero', 'community', 'impact', 'footer'];
      let found = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = section;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="hero-container">
      <Navbar lang={lang} onLangChange={setLang} activeSection={activeSection} />
      <Hero lang={lang} />
      <CommunitySection lang={lang} />
      <AboutSection lang={lang} />
      <PartnersSection lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}

export default App

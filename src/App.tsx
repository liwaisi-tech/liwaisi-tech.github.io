import './App.css'
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { Lang } from './types/Lang'
import { useEffect, useState } from 'react'
import { ImpactSection } from "./components/ImpactSection/ImpactSection";

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
      const sections = ['hero', 'caracteristicas', 'impacto', 'postula', 'footer'];
      const viewportCenter = window.innerHeight / 2;
      let found = 'hero';
      let minDistance = Infinity;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);
          
          if (distance < minDistance && rect.top < viewportCenter && rect.bottom > viewportCenter) {
            minDistance = distance;
            found = sectionId;
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
      <ImpactSection lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}

export default App


import './App.css'
import heroBg from './assets/images/Clases.png'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CommunitySection } from './components/CommunitySection'
import { PartnersSection } from './components/PartnersSection'
import { Footer } from './components/Footer'
import { Lang } from './types/Lang'
import { useState } from 'react'

function getAppLang(): Lang {
  const browserLang = navigator.language.slice(0, 2)
  if (browserLang === Lang.ES) return Lang.ES
  return Lang.EN
}

function App() {
  const [lang, setLang] = useState<Lang>(getAppLang())
  return (
    <div className="hero-container">
      <Navbar lang={lang} onLangChange={setLang} />
      <Hero lang={lang} background={heroBg} />
      <CommunitySection lang={lang} />
      <PartnersSection lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}

export default App

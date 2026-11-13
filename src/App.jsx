import { useState, useEffect } from 'react';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Stats from './components/Stats.jsx';
import Services from './components/Services.jsx';
import Features from './components/Features.jsx';
import Team from './components/Team.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import {
  company,
  navLinks,
  hero,
  about,
  stats,
  services,
  serviceCategories,
  features,
  team,
  faqs,
  contactInfo,
  socialLinks,
  footerColumns,
} from './data/siteData.js';

// Read the saved theme (if any) so the choice survives a page refresh.
function getInitialTheme() {
  try {
    const saved = localStorage.getItem('skyloom-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // localStorage can be unavailable (private mode, sandboxed iframes)
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  // STATE FEATURE #2 – Theme Switcher (Dark / Light)
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('skyloom-theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <>
      <Navbar
        brand={company.name}
        links={navLinks}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero {...hero} />
        <About {...about} />
        <Stats items={stats} />
        <Services items={services} categories={serviceCategories} />
        <Features items={features} />
        <Team members={team} />
        <FAQ items={faqs} />
        <Contact info={contactInfo} />
      </main>

      <Footer
        company={company}
        columns={footerColumns}
        socials={socialLinks}
      />

      <ScrollToTop />
    </>
  );
}

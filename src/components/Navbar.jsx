import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar({ brand, links, theme, onToggleTheme }) {
  // STATE FEATURE #1 – Mobile Navigation Toggle
  const [menuOpen, setMenuOpen] = useState(false);
  // Adds a shadow/blur once the page has been scrolled
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu automatically when resizing up to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} aria-label="Main navigation">
      <div className="container navbar__inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand__logo" aria-hidden="true">S</span>
          <span className="brand__name">{brand}</span>
        </a>

        <ul id="primary-menu" className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button
            type="button"
            className="icon-btn theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>

          <button
            type="button"
            className="icon-btn menu-toggle"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Dim the page behind the mobile menu; clicking it closes the menu */}
      {menuOpen && <div className="nav-backdrop" onClick={closeMenu} aria-hidden="true" />}
    </nav>
  );
}

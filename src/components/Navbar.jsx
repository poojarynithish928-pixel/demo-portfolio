import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, FileText, Sparkles } from 'lucide-react';
import { navigationLinks, personalInfo } from '../data/portfolioData';
import '../styles/navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navigationLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="content-container navbar-container">
        {/* Brand Logo */}
        <a href="#" className="brand-link" aria-label="Nithish Poojary Home">
          <div className="brand-badge">NP</div>
          <div className="brand-name">
            <span className="brand-title">{personalInfo.name}</span>
            <span className="brand-subtitle">PORTFOLIO</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="nav-menu">
            {navigationLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            aria-label="Visit LinkedIn Profile"
          >
            <span>LinkedIn</span>
            <ExternalLink size={15} />
          </a>
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ width: '100%' }}
              onClick={handleLinkClick}
            >
              <span>Visit LinkedIn</span>
              <ExternalLink size={15} />
            </a>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={handleLinkClick}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

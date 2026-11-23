import React, { useState, useEffect } from 'react';
import { navItems, personalData } from '../../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle background blur intensity
      setScrolled(window.scrollY > 40);

      // Robust viewport-relative scroll spy
      const sections = ['hero', 'about', 'stack', 'projects', 'experience', 'journey', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Monogram */}
        <a 
          href="#hero" 
          className="brand-logo interactive" 
          onClick={(e) => handleNavClick(e, '#hero')}
          data-cursor-text="Top"
        >
          <span className="brand-symbol">&lt;/&gt;</span>
          <span className="brand-text">
            DEV<span className="brand-accent">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link interactive ${isActive ? 'is-active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    data-cursor-text="Go"
                  >
                    {item.label}
                    {isActive && <span className="active-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action / Availability Status */}
        <div className="navbar-actions">
          <a 
            href="#contact" 
            className="navbar-status-badge interactive" 
            onClick={(e) => handleNavClick(e, '#contact')}
            data-cursor-text="Hire"
          >
            <span className="status-pulse-dot" />
            <span className="status-text">Available</span>
          </a>

          <a 
            href="#contact" 
            className="navbar-cta-btn interactive" 
            onClick={(e) => handleNavClick(e, '#contact')}
            data-cursor-text="Contact"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} className="nav-cta-arrow" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle-btn interactive"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Staggered Entrance */}
      <div 
        className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`} 
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-content">
          <span className="mobile-drawer-label">NAVIGATION</span>
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navItems.map((item, index) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <li 
                    key={item.label} 
                    className="mobile-nav-item"
                    style={{ '--item-idx': index }}
                  >
                    <a
                      href={item.href}
                      className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      <span className="mobile-nav-number font-mono">0{index + 1}</span>
                      <span className="mobile-nav-title">{item.label}</span>
                      {isActive && <span className="mobile-active-dot" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <div className="mobile-status-wrapper">
              <span className="status-pulse-dot" />
              <span>Available for opportunities</span>
            </div>
            <a
              href="#contact"
              className="btn btn-primary mobile-cta-btn"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

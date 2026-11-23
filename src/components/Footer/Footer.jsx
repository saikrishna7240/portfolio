import React from 'react';
import { personalData } from '../../data/portfolioData';
import { ArrowUp, Terminal, Heart, Sparkles } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root" aria-label="Site Footer">
      <div className="container footer-container">
        
        {/* Top Tier: Tagline & Back To Top */}
        <div className="footer-top-row">
          <div className="footer-brand-meta">
            <span className="footer-brand-name font-mono">
              &lt;DEV /&gt;
            </span>
            <span className="footer-tagline">
              {personalData.name} — {personalData.tagline}
            </span>
          </div>

          <button
            type="button"
            className="back-to-top-btn interactive"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            data-cursor-text="Top"
          >
            <span className="font-mono">BACK TO TOP</span>
            <div className="arrow-btn-circle">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>

        {/* Bottom Tier: Credits & System Health */}
        <div className="footer-bottom-row font-mono">
          <div className="footer-copyright">
            © {new Date().getFullYear()} • Crafted with engineering rigor & intentional design.
          </div>

          <div className="footer-system-status">
            <span className="status-pulse-dot" />
            <span>ARCHITECTURE: REACT 19 + VITE • DEPLOYMENT: ZERO-DEBT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

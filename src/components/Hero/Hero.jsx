import React, { useState } from 'react';
import { personalData } from '../../data/portfolioData';
import HeroPortrait from './HeroPortrait';
import SystemArchitectureCanvas from './SystemArchitectureCanvas';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../common/Icons';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Mail, 
  Terminal, 
  Sparkles,
  User,
  Activity
} from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const [activeView, setActiveView] = useState('portrait'); // 'portrait' | 'architecture'

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const wordsLine1 = personalData.headline.line1.split(' ');
  const wordsLine2 = personalData.headline.line2.split(' ');

  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      {/* Subtle Ambient Radial Glow */}
      <div className="hero-ambient-glow" aria-hidden="true" />
      <div className="hero-ambient-glow-secondary" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-grid">
          
          {/* Left Column: Editorial Typography & Actions */}
          <div className="hero-content">
            
            {/* Top Micro-Header */}
            <div className="hero-meta-bar">
              <div className="hero-role-tag">
                <Terminal size={14} className="tag-icon" />
                <span>{personalData.roleTitle}</span>
              </div>

              <div className="status-pill interactive" data-cursor-text="Active">
                <span className="pulsing-dot" />
                <span>{personalData.availability}</span>
              </div>
            </div>

            {/* Oversized Editorial Headline with Staggered Word Reveal */}
            <h1 
              className="hero-title"
              aria-label={`${personalData.headline.line1} ${personalData.headline.line2}`}
            >
              <span className="hero-title-row">
                {wordsLine1.map((word, i) => (
                  <span key={i} className="hero-word-mask">
                    <span 
                      className="hero-word" 
                      style={{ animationDelay: `${0.12 + i * 0.08}s` }}
                    >
                      {word}&nbsp;
                    </span>
                  </span>
                ))}
              </span>
              <span className="hero-title-row title-emphasis">
                {wordsLine2.map((word, i) => (
                  <span key={i} className="hero-word-mask">
                    <span 
                      className="hero-word word-accent" 
                      style={{ animationDelay: `${0.12 + (wordsLine1.length + i) * 0.08}s` }}
                    >
                      {word}&nbsp;
                    </span>
                  </span>
                ))}
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="hero-description">
              {personalData.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <button 
                type="button"
                className="btn btn-primary interactive hero-cta-btn"
                onClick={() => scrollTo('projects')}
                data-cursor-text="View"
              >
                <span>View Projects</span>
                <ArrowDown size={15} className="btn-arrow btn-arrow-down" />
              </button>

              <button 
                type="button"
                className="btn btn-secondary interactive hero-cta-btn"
                onClick={() => scrollTo('contact')}
                data-cursor-text="Write"
              >
                <span>Contact Me</span>
                <ArrowUpRight size={15} className="btn-arrow btn-arrow-up-right" />
              </button>
            </div>

            {/* Social Links & Location Bar */}
            <div className="hero-social-strip">
              <div className="social-links-group" aria-label="Social Profiles">
                <a 
                  href={personalData.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn interactive"
                  aria-label="GitHub Profile"
                  data-cursor-text="Code"
                >
                  <GithubIcon size={18} />
                </a>

                <a 
                  href={personalData.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn interactive"
                  aria-label="LinkedIn Profile"
                  data-cursor-text="Connect"
                >
                  <LinkedinIcon size={18} />
                </a>

                <a 
                  href={personalData.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn interactive"
                  aria-label="Instagram Profile"
                  data-cursor-text="Visuals"
                >
                  <InstagramIcon size={18} />
                </a>

                <a 
                  href={`mailto:${personalData.socials.email}`} 
                  className="social-icon-btn interactive"
                  aria-label="Email Address"
                  data-cursor-text="Mail"
                >
                  <Mail size={18} />
                </a>
              </div>

              <div className="hero-location-spec">
                <span className="spec-dot" />
                <span className="spec-text">{personalData.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Showcase & Interactive Visuals */}
          <div className="hero-visual-col">
            
            {/* View Mode Switcher Pill */}
            <div className="hero-view-switch-wrapper">
              <div className="hero-view-switch-pill" role="tablist" aria-label="Hero visual view mode">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeView === 'portrait'}
                  className={`view-switch-btn interactive ${activeView === 'portrait' ? 'is-active' : ''}`}
                  onClick={() => setActiveView('portrait')}
                  data-cursor-text="Portrait"
                >
                  <User size={13} className={activeView === 'portrait' ? 'text-lime' : ''} />
                  <span>Profile Portrait</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={activeView === 'architecture'}
                  className={`view-switch-btn interactive ${activeView === 'architecture' ? 'is-active' : ''}`}
                  onClick={() => setActiveView('architecture')}
                  data-cursor-text="Mesh"
                >
                  <Activity size={13} className={activeView === 'architecture' ? 'text-lime' : ''} />
                  <span>System Mesh</span>
                </button>
              </div>
            </div>

            {/* Active Visual Mode */}
            {activeView === 'portrait' ? (
              <HeroPortrait />
            ) : (
              <div className="hero-architecture-window">
                <div className="frame-header">
                  <div className="window-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <div className="window-title font-mono">
                    <Sparkles size={12} className="text-lime" />
                    <span>runtime.sys // architecture_node_graph</span>
                  </div>
                  <div className="window-badge">60 FPS</div>
                </div>

                <div className="architecture-frame-body">
                  <SystemArchitectureCanvas />
                </div>

                <div className="frame-footer">
                  <span className="footer-code">// Drag or hover cursor to interact with runtime network nodes</span>
                  <span className="footer-spec font-mono">PROD • VER: 2.4</span>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-cue">
          <button 
            type="button" 
            className="scroll-cue-btn interactive" 
            onClick={() => scrollTo('about')}
            aria-label="Scroll to About section"
            data-cursor-text="Down"
          >
            <span className="cue-line" />
            <span className="cue-text">SCROLL TO DISCOVER</span>
            <ArrowDown size={12} className="cue-arrow" />
          </button>
        </div>

      </div>
    </section>
  );
}

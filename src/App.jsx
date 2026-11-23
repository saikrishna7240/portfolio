import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Journey from './components/Journey/Journey';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  useEffect(() => {
    // Subtle IntersectionObserver to add reveal animations when sections enter viewport
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.section, .project-editorial-card, .timeline-node, .reveal-on-scroll').forEach((el) => {
        el.classList.add('in-viewport');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-viewport');
            // Unobserve once revealed to keep performance optimal
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const observeTargets = () => {
      const targets = document.querySelectorAll('.section, .project-editorial-card, .timeline-node, .reveal-on-scroll');
      targets.forEach((el) => observer.observe(el));
    };

    observeTargets();

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      {/* Skip to Main Content for Accessibility */}
      <a href="#hero" className="sr-only">
        Skip to main content
      </a>

      {/* Subtle Grain Overlay for Editorial Film Feel */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Understated Ambient Gradient Motion Layer */}
      <div className="ambient-background-mesh" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
      </div>

      {/* Custom Precision Magnetic Cursor */}
      <CustomCursor />

      {/* Minimal Floating Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main id="main-content">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Journey />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}

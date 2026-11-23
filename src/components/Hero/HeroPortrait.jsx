import React, { useState, useRef } from 'react';
import profileImg from '../../assets/profile.jpg';
import { personalData } from '../../data/portfolioData';
import { Sparkles, Award } from 'lucide-react';
import './HeroPortrait.css';

export default function HeroPortrait() {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, px: 0, py: 0, active: false });
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    // Respect accessibility settings
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!frameRef.current) return;

    const rect = frameRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Subtle, natural tilt angles (max ~5-6 deg)
    setTilt({
      rx: -(y * 8),
      ry: x * 8,
      px: x * 10,
      py: y * 10,
      active: true
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, px: 0, py: 0, active: false });
  };

  return (
    <div className="hero-portrait-container">
      {/* Ambient Breathing Glow */}
      <div className="portrait-ambient-glow" aria-hidden="true" />

      {/* 3D Motion Frame Card */}
      <div 
        className="hero-portrait-card"
        ref={frameRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: tilt.active 
            ? `perspective(1000px) rotateX(${tilt.rx.toFixed(2)}deg) rotateY(${tilt.ry.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)` 
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
        }}
      >
        {/* Precision Corner Reticles */}
        <span className="portrait-corner-reticle reticle-tl" aria-hidden="true">+</span>
        <span className="portrait-corner-reticle reticle-tr" aria-hidden="true">+</span>
        <span className="portrait-corner-reticle reticle-bl" aria-hidden="true">+</span>
        <span className="portrait-corner-reticle reticle-br" aria-hidden="true">+</span>

        {/* Top Editorial Spec Bar */}
        <div className="portrait-header-bar">
          <div className="header-bar-left">
            <span className="live-status-beacon" />
            <span className="portrait-name font-mono">{personalData.name.toUpperCase()}</span>
          </div>
          <span className="portrait-role-badge font-mono">FULL STACK</span>
        </div>

        {/* Real Photo with matching natural aspect ratio (571x767) */}
        <div className="portrait-image-wrapper">
          <img 
            src={profileImg} 
            alt={`${personalData.name} - Full Stack Developer portrait`}
            className="portrait-actual-image"
            loading="eager"
            decoding="async"
          />

          {/* Smooth editorial gradient overlay for readability */}
          <div className="portrait-bottom-vignette" aria-hidden="true" />
        </div>

        {/* Floating Chip 1: Availability & High-Impact Roles (Bottom Left) */}
        <div 
          className="portrait-chip chip-status interactive"
          data-cursor-text="Active"
          style={{
            transform: tilt.active 
              ? `translate3d(${tilt.px * -1}px, ${tilt.py * -1}px, 24px)` 
              : 'translate3d(0, 0, 0)'
          }}
        >
          <div className="chip-beacon-wrap">
            <span className="chip-beacon-core" />
            <span className="chip-beacon-pulse" />
          </div>
          <div className="chip-meta">
            <span className="chip-sub font-mono">STATUS // AVAILABLE</span>
            <span className="chip-title">Ready for High-Impact Roles</span>
          </div>
        </div>

        {/* Floating Chip 2: Tech Architecture Domain (Bottom Right) */}
        <div 
          className="portrait-chip chip-tech interactive"
          data-cursor-text="FullStack"
          style={{
            transform: tilt.active 
              ? `translate3d(${tilt.px * 1}px, ${tilt.py * -0.8}px, 24px)` 
              : 'translate3d(0, 0, 0)'
          }}
        >
          <div className="chip-icon-wrap">
            <Sparkles size={13} className="text-lime" />
          </div>
          <div className="chip-meta">
            <span className="chip-sub font-mono">ENGINEERING STACK</span>
            <span className="chip-title">React • Node • Cloud</span>
          </div>
        </div>

      </div>
    </div>
  );
}

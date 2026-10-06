import { ArrowDown, ArrowUpRight, Github, Linkedin, Sparkles } from "lucide-react";
import { profile } from "../../data/portfolio";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-grid" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <div className="hero-content">
        <div className="hero-copy reveal">
          <div className="eyebrow"><Sparkles size={15} /> Available for opportunities</div>
          <p className="hero-kicker">Hello, I'm</p>
          <h1>Saikrishna<br /><span>Bitla.</span></h1>
          <h2>{profile.role}</h2>
          <p className="hero-text">{profile.tagline}</p>

          <div className="hero-actions">
            <a className="primary-btn" href="#projects">Explore My Work <ArrowUpRight size={18}/></a>
            <a className="ghost-btn" href="/Saikrishna_Bitla_Resume.pdf" download>Download Resume</a>
          </div>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/></a>
            <a href={`mailto:${profile.email}`}>✉</a>
          </div>
        </div>

        <div className="hero-visual reveal-delay">
          <div className="profile-frame">
            <div className="profile-glow" />
            <img src="/profile.png" alt="Saikrishna Bitla profile placeholder" />
            <div className="floating-card card-top"><span>01</span><b>Build.</b></div>
            <div className="floating-card card-bottom"><span>02</span><b>Learn.</b></div>
          </div>
        </div>
      </div>

      <a className="scroll-hint" href="#about"><span>Scroll to explore</span><ArrowDown size={16}/></a>
    </section>
  );
}
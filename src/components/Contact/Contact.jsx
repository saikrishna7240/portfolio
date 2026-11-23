import React, { useState, useEffect } from 'react';
import { contactData, personalData } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../common/Icons';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Globe, 
  Clock, 
  Sparkles 
} from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  
  // Form State
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Web Application',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success

  // Live Time in Bangalore (IST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { 
        timeZone: 'Asia/Kolkata', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormState({
        name: '',
        email: '',
        projectType: 'Web Application',
        message: ''
      });
      setTimeout(() => setFormStatus('idle'), 6000);
    }, 1200);
  };

  const getSocialIcon = (name) => {
    switch (name) {
      case 'GitHub': return <GithubIcon size={18} />;
      case 'LinkedIn': return <LinkedinIcon size={18} />;
      case 'Instagram': return <InstagramIcon size={18} />;
      default: return <Mail size={18} />;
    }
  };

  return (
    <section id="contact" className="section contact-section" aria-label="Contact and Inquiries">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>{contactData.sectionTag}</span>
          </div>
          <h2 className="section-title contact-headline">
            <span>{contactData.headline.line1}</span>
            <span className="text-lime">{contactData.headline.line2}</span>
          </h2>
          <p className="section-subtitle">
            {contactData.supportingText}
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          
          {/* Left Column: Direct Inquiries & Social Cards */}
          <div className="contact-details-col">
            
            {/* Direct Email Card with One-Click Copy */}
            <div className="email-action-card">
              <span className="action-card-label font-mono">// DIRECT TRANSMISSION</span>
              <div className="email-display-row">
                <span className="email-address-text font-mono">{contactData.email}</span>
                <button
                  type="button"
                  className="copy-btn interactive"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  data-cursor-text={copied ? "Done" : "Copy"}
                >
                  {copied ? <Check size={16} className="text-lime" /> : <Copy size={16} />}
                  <span className="font-mono">{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
              <p className="email-subtext">
                Typically responding within 24 hours. Open to full-time roles, contracts, and architecture consulting.
              </p>
            </div>

            {/* Social Channels Grid */}
            <div className="socials-channels-list">
              <span className="channels-label font-mono">// VERIFIED NETWORKS</span>
              <div className="channels-grid">
                {contactData.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-card interactive"
                    data-cursor-text="Visit"
                  >
                    <div className="channel-icon-wrap">
                      {getSocialIcon(social.name)}
                    </div>
                    <div className="channel-info">
                      <span className="channel-name">{social.name}</span>
                      <span className="channel-handle font-mono">{social.handle}</span>
                    </div>
                    <ArrowUpRight size={16} className="channel-arrow" />
                  </a>
                ))}
              </div>
            </div>

            {/* Real-time Status & Timezone Widget */}
            <div className="location-telemetry-card font-mono">
              <div className="telemetry-item">
                <Globe size={15} className="text-lime" />
                <span>{personalData.location}</span>
              </div>
              <div className="telemetry-item">
                <Clock size={15} className="text-lime" />
                <span>{personalData.timezone} • {currentTime || 'Loading local time...'}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div className="contact-form-col">
            <div className="contact-form-frame">
              <div className="form-frame-header">
                <div className="frame-window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="form-frame-title font-mono">
                  dispatch_message.sh
                </span>
                <span className="form-frame-status font-mono text-lime">
                  ● ENCRYPTED
                </span>
              </div>

              {formStatus === 'success' ? (
                <div className="form-success-state">
                  <div className="success-icon-wrap">
                    <Check size={32} className="text-lime" />
                  </div>
                  <h3 className="success-title">Transmission Received</h3>
                  <p className="success-desc">
                    Thank you for reaching out. Your dispatch has been logged and forwarded directly to my primary inbox. I will review and reply promptly.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setFormStatus('idle')}
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label font-mono">
                      01 // YOUR NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label font-mono">
                      02 // EMAIL ADDRESS *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="project-type" className="form-label font-mono">
                      03 // SUBJECT / PROJECT TYPE
                    </label>
                    <select
                      id="project-type"
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="form-select font-mono"
                    >
                      <option value="Web Application">Full Stack Web Application</option>
                      <option value="Frontend Engineering">Frontend Engineering / React</option>
                      <option value="AI Integration">AI / Machine Learning Exploration</option>
                      <option value="Full-time Role">Full-time Engineering Role</option>
                      <option value="Other">General Inquiry / Idea Discussion</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label font-mono">
                      04 // MESSAGE / BRIEF *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Tell me about what you're building, timeline, or how I can help..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn btn-primary form-submit-btn interactive"
                    data-cursor-text="Send"
                  >
                    <span>
                      {formStatus === 'submitting' ? 'DISPATCHING PAYLOAD...' : "SEND MESSAGE"}
                    </span>
                    <Send size={15} className="btn-send-icon" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

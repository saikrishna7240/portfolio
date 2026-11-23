import React from 'react';
import { experienceData } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal, ArrowUpRight } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section" aria-label="Professional Experience">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="section-title">
            Real-world engineering. Production discipline.
          </h2>
          <p className="section-subtitle">
            Hands-on development experience collaborating on production-oriented codebases, optimizing interfaces, and delivering value in cross-functional teams.
          </p>
        </div>

        {/* Premium Timeline Grid */}
        <div className="experience-timeline-grid">
          
          {/* Left: Summary & Philosophy */}
          <div className="experience-overview-card">
            <div className="overview-header">
              <Terminal size={18} className="text-lime" />
              <span className="overview-label font-mono">// WORK CULTURE & MINDSET</span>
            </div>
            
            <p className="overview-text">
              "Great engineering isn't just about writing code in isolation—it's about understanding how components integrate into the wider business, communicating clearly in code reviews, and upholding high craftsmanship in production."
            </p>

            <div className="overview-metrics-list">
              <div className="overview-metric-item">
                <span className="metric-num font-mono">100%</span>
                <span className="metric-desc">Commitment to semantic, accessible web standards</span>
              </div>
              <div className="overview-metric-item">
                <span className="metric-num font-mono">&lt;100ms</span>
                <span className="metric-desc">Target interaction latency across all UI state trees</span>
              </div>
              <div className="overview-metric-item">
                <span className="metric-num font-mono">Clean</span>
                <span className="metric-desc">Predictable component architecture with zero bloat</span>
              </div>
            </div>
          </div>

          {/* Right: Timeline Track */}
          <div className="experience-track">
            {experienceData.map((exp, index) => (
              <div key={index} className="timeline-node">
                
                {/* Node Line & Marker */}
                <div className="timeline-marker-column">
                  <div className="timeline-dot">
                    <span className="dot-inner" />
                  </div>
                  <div className="timeline-stem" />
                </div>

                {/* Node Content Card */}
                <div className="timeline-card">
                  
                  {/* Card Header */}
                  <div className="timeline-card-header">
                    <div>
                      <div className="role-badge-row">
                        <span className="role-type-pill font-mono">{exp.type}</span>
                        <span className="role-status-pill font-mono">{exp.status}</span>
                      </div>
                      <h3 className="timeline-role-title">
                        {exp.role}
                      </h3>
                      <h4 className="timeline-company-name">
                        {exp.company}
                      </h4>
                    </div>

                    <div className="timeline-date-badge font-mono">
                      <Calendar size={13} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Overview Paragraph */}
                  <p className="timeline-overview-text">
                    {exp.overview}
                  </p>

                  {/* Responsibilities */}
                  <div className="timeline-responsibilities">
                    <span className="res-title font-mono">// KEY RESPONSIBILITIES</span>
                    <ul className="res-list">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="res-item">
                          <CheckCircle2 size={15} className="text-lime res-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Deliverables / Outcomes */}
                  {exp.keyOutcomes && (
                    <div className="timeline-outcomes-box">
                      <span className="outcomes-title font-mono">SHIPPED OUTCOMES</span>
                      <ul className="outcomes-list">
                        {exp.keyOutcomes.map((outcome, idx) => (
                          <li key={idx} className="outcome-item">
                            <span className="outcome-bullet font-mono">→</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies Used */}
                  <div className="timeline-tech-row">
                    <span className="tech-row-label font-mono">STACK:</span>
                    <div className="tech-row-pills">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-mini-pill font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

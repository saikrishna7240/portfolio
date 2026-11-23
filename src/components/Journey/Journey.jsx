import React, { useState } from 'react';
import { journeyData } from '../../data/portfolioData';
import { Compass, Lightbulb, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import './Journey.css';

export default function Journey() {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);

  const activeMilestone = journeyData.milestones[activeMilestoneIndex];

  return (
    <section id="journey" className="section journey-section" aria-label="Development Journey & Milestones">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>{journeyData.sectionTag}</span>
          </div>
          <h2 className="section-title">
            {journeyData.title}
          </h2>
          <p className="section-subtitle">
            {journeyData.subtitle}
          </p>
        </div>

        {/* Interactive Roadmap Layout */}
        <div className="journey-interactive-layout">
          
          {/* Milestone Selection Track */}
          <div className="journey-steps-track">
            {journeyData.milestones.map((milestone, idx) => {
              const isSelected = activeMilestoneIndex === idx;

              return (
                <button
                  key={milestone.id}
                  type="button"
                  className={`milestone-step-btn interactive ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setActiveMilestoneIndex(idx)}
                  data-cursor-text="Inspect"
                >
                  <div className="step-left">
                    <span className="step-number font-mono">{milestone.step}</span>
                    <div className="step-text-wrap">
                      <span className="step-period font-mono">{milestone.period}</span>
                      <span className="step-title">{milestone.title}</span>
                    </div>
                  </div>

                  <div className="step-right">
                    <span className="step-tag-pill font-mono">{milestone.tags[0]}</span>
                    <ChevronRight size={16} className="step-chevron" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Milestone Showcase Card */}
          <div className="journey-detail-card">
            <div className="detail-card-header">
              <div className="detail-meta">
                <span className="detail-phase-tag font-mono">PHASE {activeMilestone.step} // ROADMAP</span>
                <h3 className="detail-title">{activeMilestone.title}</h3>
              </div>
              <div className="detail-badge font-mono">
                <Compass size={13} className="text-lime" />
                <span>{activeMilestone.period}</span>
              </div>
            </div>

            <div className="detail-card-body">
              <p className="detail-description">
                {activeMilestone.description}
              </p>

              <div className="detail-takeaway-box">
                <div className="takeaway-header">
                  <Lightbulb size={16} className="text-lime" />
                  <span className="font-mono">CORE LESSON & TAKEAWAY</span>
                </div>
                <p className="takeaway-text">
                  “{activeMilestone.takeaway}”
                </p>
              </div>

              <div className="detail-tags-section">
                <span className="tags-header font-mono">TECHNOLOGIES & COMPETENCIES</span>
                <div className="detail-tags-list">
                  {activeMilestone.tags.map((tag) => (
                    <span key={tag} className="detail-tag font-mono">
                      <CheckCircle2 size={12} className="text-lime" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="detail-card-footer">
              <span className="footer-spec font-mono">CONTINUOUS EVOLUTION • STEP {activeMilestoneIndex + 1} OF {journeyData.milestones.length}</span>
              <div className="footer-nav-buttons">
                <button
                  type="button"
                  className="step-nav-btn font-mono"
                  disabled={activeMilestoneIndex === 0}
                  onClick={() => setActiveMilestoneIndex(prev => prev - 1)}
                  aria-label="Previous Milestone"
                >
                  PREV
                </button>
                <button
                  type="button"
                  className="step-nav-btn font-mono"
                  disabled={activeMilestoneIndex === journeyData.milestones.length - 1}
                  onClick={() => setActiveMilestoneIndex(prev => prev + 1)}
                  aria-label="Next Milestone"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

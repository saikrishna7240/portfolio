import React, { useState } from 'react';
import { aboutData } from '../../data/portfolioData';
import { Code2, Compass, Layers, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import './About.css';

export default function About() {
  const [activeTab, setActiveTab] = useState('philosophy');
  const [selectedPillar, setSelectedPillar] = useState(0);

  return (
    <section id="about" className="section about-section" aria-label="About Section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>{aboutData.sectionTag}</span>
          </div>
          <h2 className="section-title">
            {aboutData.title}
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="about-editorial-grid">
          
          {/* Left: Prose & Interactive Pillars */}
          <div className="about-prose-column">
            <div className="about-lead-block">
              <p className="about-lead-paragraph">
                {aboutData.leadParagraph}
              </p>
              <p className="about-secondary-paragraph">
                {aboutData.secondaryParagraph}
              </p>
            </div>

            {/* Core Pillars Interactive List */}
            <div className="about-pillars-container">
              <span className="pillars-label">// CORE ARCHITECTURAL PILLARS</span>
              <div className="pillars-list">
                {aboutData.principles.map((principle, index) => {
                  const isSelected = selectedPillar === index;
                  return (
                    <button
                      key={principle.number}
                      type="button"
                      className={`pillar-item interactive ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => setSelectedPillar(index)}
                      data-cursor-text="Select"
                    >
                      <div className="pillar-header">
                        <span className="pillar-num">{principle.number}</span>
                        <span className="pillar-title">{principle.title}</span>
                        <ChevronRight 
                          size={16} 
                          className={`pillar-arrow ${isSelected ? 'is-rotated' : ''}`} 
                        />
                      </div>
                      <div className="pillar-body">
                        <p className="pillar-description">{principle.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="about-stats-grid">
              {aboutData.stats.map((stat) => (
                <div key={stat.label} className="about-stat-card">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Interactive Engineering Ledger / Terminal */}
          <div className="about-interactive-column">
            <div className="engineering-ledger">
              
              {/* Ledger Tab Navigation */}
              <div className="ledger-header">
                <div className="ledger-tabs">
                  <button
                    type="button"
                    className={`ledger-tab interactive ${activeTab === 'philosophy' ? 'is-active' : ''}`}
                    onClick={() => setActiveTab('philosophy')}
                    data-cursor-text="View"
                  >
                    <Code2 size={14} />
                    <span>philosophy.ts</span>
                  </button>

                  <button
                    type="button"
                    className={`ledger-tab interactive ${activeTab === 'principles' ? 'is-active' : ''}`}
                    onClick={() => setActiveTab('principles')}
                    data-cursor-text="View"
                  >
                    <Compass size={14} />
                    <span>system_rules.json</span>
                  </button>

                  <button
                    type="button"
                    className={`ledger-tab interactive ${activeTab === 'stack' ? 'is-active' : ''}`}
                    onClick={() => setActiveTab('stack')}
                    data-cursor-text="View"
                  >
                    <Layers size={14} />
                    <span>decisions.md</span>
                  </button>
                </div>

                <div className="ledger-indicator">
                  <span className="status-pulse-dot" />
                  <span>READONLY</span>
                </div>
              </div>

              {/* Ledger Content Body */}
              <div className="ledger-body">
                {activeTab === 'philosophy' && (
                  <div className="code-snippet-view">
                    <pre className="code-content">
                      <code>
{`/**
 * @file philosophy.ts
 * @author Full Stack Developer
 * @description Principles that guide every line of code I ship.
 */

export interface DeveloperMindset {
  principles: string[];
  executionStrategy: 'iterative' | 'pragmatic';
  aiIntegration: boolean;
}

export const corePhilosophy: DeveloperMindset = {
  principles: [
    "Build tools that genuinely solve real human friction",
    "Keep code modular, typed, and easy for teams to reason about",
    "Design with intentional whitespace and accessible typography",
    "Embrace AI not as a replacement, but as an amplifier for creativity"
  ],
  executionStrategy: 'pragmatic',
  aiIntegration: true
};

// Continuous feedback loop
export async function buildProduct(idea: string) {
  const architecture = planArchitecture(idea);
  const validatedSolution = await iterate(architecture);
  return shipWithCraft(validatedSolution);
}`}
                      </code>
                    </pre>
                  </div>
                )}

                {activeTab === 'principles' && (
                  <div className="principles-view">
                    <div className="rule-item">
                      <CheckCircle2 size={16} className="text-lime" />
                      <div>
                        <span className="rule-title">01 / State Predictability Over Clever Hacks</span>
                        <p className="rule-desc">Keep application state deterministic. Prefer standard patterns and clear data flows over obscure micro-optimizations.</p>
                      </div>
                    </div>

                    <div className="rule-item">
                      <CheckCircle2 size={16} className="text-lime" />
                      <div>
                        <span className="rule-title">02 / Respect The Browser's Native Primitives</span>
                        <p className="rule-desc">Semantic HTML and modern CSS variables outperform heavy bloat libraries every single time. Ship less JavaScript whenever possible.</p>
                      </div>
                    </div>

                    <div className="rule-item">
                      <CheckCircle2 size={16} className="text-lime" />
                      <div>
                        <span className="rule-title">03 / Micro-Interactions That Respect Attention</span>
                        <p className="rule-desc">Animations should guide the eye and convey system feedback—never distract or delay user actions.</p>
                      </div>
                    </div>

                    <div className="rule-item">
                      <CheckCircle2 size={16} className="text-lime" />
                      <div>
                        <span className="rule-title">04 / Accessible By Default</span>
                        <p className="rule-desc">High contrast ratios, semantic landmarks, and keyboard navigability are non-negotiable foundations.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="decisions-view">
                    <div className="decision-card">
                      <div className="decision-header">
                        <span className="decision-tag">FRONTEND</span>
                        <span className="decision-name">React + Vite + Modern CSS</span>
                      </div>
                      <p className="decision-p">Chosen for rapid development loops, ecosystem maturity, declarative component hierarchies, and clean styling without Tailwind bloat.</p>
                    </div>

                    <div className="decision-card">
                      <div className="decision-header">
                        <span className="decision-tag">BACKEND</span>
                        <span className="decision-name">Node.js + Express + REST</span>
                      </div>
                      <p className="decision-p">Asynchronous event-driven I/O provides supreme throughput for lightweight micro-endpoints and scalable real-time integrations.</p>
                    </div>

                    <div className="decision-card">
                      <div className="decision-header">
                        <span className="decision-tag">EMERGING TECH</span>
                        <span className="decision-name">Computer Vision & Assistive AI</span>
                      </div>
                      <p className="decision-p">Exploring client-side neural inference (Tensor-based gesture classification) to bridge communication gaps in apps like SignBridge AI.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Ledger Footer */}
              <div className="ledger-footer">
                <span className="ledger-footer-info">UTF-8 • TSX / JSON MODE</span>
                <span className="ledger-footer-status text-lime">● READY TO SHIP</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

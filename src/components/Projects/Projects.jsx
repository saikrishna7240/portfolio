import React, { useState } from 'react';
import { projectsData } from '../../data/portfolioData';
import ProjectPreviewMockup from './ProjectPreviewMockup';
import { GithubIcon } from '../common/Icons';
import { 
  ExternalLink, 
  Layers, 
  CheckCircle, 
  Sparkles, 
  Maximize2, 
  X, 
  ArrowUpRight,
  Cpu
} from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedModalProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedModalProject(null);
    document.body.style.overflow = 'unset';
  };

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--card-mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--card-mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className="section projects-section" aria-label="Featured Projects Showcase">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>SELECTED WORKS</span>
          </div>
          <h2 className="section-title">
            Crafted with intent. Engineered for production.
          </h2>
          <p className="section-subtitle">
            A showcase of enterprise systems, intelligent neural interfaces, and responsive digital products built with modern full-stack architectures.
          </p>
        </div>

        {/* Editorial Project Showcase List (Alternating Asymmetric Layout) */}
        <div className="projects-showcase-list">
          {projectsData.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article 
                key={project.id}
                className={`project-editorial-card ${isReversed ? 'is-reversed' : ''}`}
                aria-label={`Project: ${project.title}`}
                onMouseMove={handleCardMouseMove}
              >
                {/* Visual Preview Half */}
                <div className="project-visual-container">
                  <div className="project-browser-frame">
                    {/* Browser Chrome Header */}
                    <div className="browser-chrome-bar">
                      <div className="chrome-controls">
                        <span className="dot dot-red" />
                        <span className="dot dot-yellow" />
                        <span className="dot dot-green" />
                      </div>
                      <div className="chrome-address">
                        <span className="address-protocol">https://</span>
                        <span className="address-domain">{project.id}.prod.app</span>
                      </div>
                      <button 
                        type="button" 
                        className="quick-expand-btn interactive"
                        onClick={() => openProjectModal(project)}
                        aria-label={`Expand architecture details for ${project.title}`}
                        data-cursor-text="Zoom"
                      >
                        <Maximize2 size={13} />
                      </button>
                    </div>

                    {/* Rich Interactive Mockup Content with Image Zoom */}
                    <div className="browser-viewport">
                      <ProjectPreviewMockup project={project} />
                    </div>

                    {/* Quick Metric Bar */}
                    <div className="browser-metrics-strip">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="metric-chip">
                          <span className="metric-chip-label">{metric.label}:</span>
                          <span className="metric-chip-value font-mono">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Editorial Content Half */}
                <div className="project-narrative-container">
                  <div className="project-meta-strip">
                    <span className="project-index font-mono">0{index + 1} //</span>
                    <span className="project-category-badge">{project.category}</span>
                  </div>

                  <h3 className="project-headline">
                    {project.title}
                  </h3>

                  <p className="project-tagline-text">
                    {project.tagline}
                  </p>

                  <p className="project-description-text">
                    {project.shortDescription}
                  </p>

                  {/* Key Highlights / Features */}
                  <div className="project-features-list">
                    <span className="features-label font-mono">// CORE CAPABILITIES</span>
                    <ul>
                      {project.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="feature-item">
                          <CheckCircle size={14} className="feature-check text-lime" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="project-tech-pills">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag-pill font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: Live Demo, GitHub, Architecture Details */}
                  <div className="project-action-row">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary interactive proj-action-btn"
                      data-cursor-text="Demo"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} className="proj-btn-icon proj-arrow-diag" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary interactive proj-action-btn"
                      data-cursor-text="Repo"
                    >
                      <GithubIcon size={15} className="proj-btn-icon proj-code-icon" />
                      <span>Source Code</span>
                    </a>

                    <button
                      type="button"
                      className="btn btn-ghost project-inspect-link interactive"
                      onClick={() => openProjectModal(project)}
                      data-cursor-text="Inspect"
                    >
                      <Cpu size={14} className="proj-btn-icon proj-cpu-icon" />
                      <span>Spec Sheet</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Extended Architecture Blueprint Modal */}
        {selectedModalProject && (
          <div className="project-modal-backdrop" onClick={closeProjectModal}>
            <div 
              className="project-modal-window" 
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
            >
              {/* Modal Window Header */}
              <div className="modal-header">
                <div className="modal-header-meta">
                  <span className="modal-category font-mono">{selectedModalProject.category}</span>
                  <h3 id="modal-project-title" className="modal-title">{selectedModalProject.title}</h3>
                </div>
                <button 
                  type="button"
                  className="modal-close-btn interactive"
                  onClick={closeProjectModal}
                  aria-label="Close architecture modal"
                  data-cursor-text="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                <div className="modal-summary-panel">
                  <p className="modal-lead-desc">{selectedModalProject.shortDescription}</p>
                  
                  <div className="modal-metrics-grid">
                    {selectedModalProject.metrics.map(m => (
                      <div key={m.label} className="modal-metric-card">
                        <span className="modal-metric-val font-mono">{m.value}</span>
                        <span className="modal-metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-details-grid">
                  <div className="modal-col">
                    <h4 className="modal-col-title font-mono">// FULL CAPABILITY MATRIX</h4>
                    <ul className="modal-feature-list">
                      {selectedModalProject.features.map((feat, idx) => (
                        <li key={idx} className="modal-feature-item">
                          <CheckCircle size={14} className="text-lime" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-col">
                    <h4 className="modal-col-title font-mono">// ARCHITECTURAL STACK</h4>
                    <div className="modal-stack-tags">
                      {selectedModalProject.techStack.map(t => (
                        <span key={t} className="tech-tag-pill font-mono">{t}</span>
                      ))}
                    </div>

                    <div className="modal-action-box">
                      <a 
                        href={selectedModalProject.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary interactive"
                      >
                        <span>Launch Production Application</span>
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <span className="font-mono text-muted">// PRODUCTION SPECIFICATION • VERIFIED SYSTEM</span>
                <button type="button" className="btn btn-ghost" onClick={closeProjectModal}>
                  Close Sheet
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

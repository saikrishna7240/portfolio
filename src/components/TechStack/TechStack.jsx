import React, { useState, useMemo } from 'react';
import { techStackData } from '../../data/portfolioData';
import { 
  Layers, 
  Search, 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Check, 
  Cpu 
} from 'lucide-react';
import './TechStack.css';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState(null);

  // Category Icon Resolver
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend': return <Code size={16} />;
      case 'backend': return <Server size={16} />;
      case 'database': return <Database size={16} />;
      case 'tools': return <Wrench size={16} />;
      default: return <Layers size={16} />;
    }
  };

  // Flatten & filter technologies
  const allSkills = useMemo(() => {
    return techStackData.categories.flatMap(cat => 
      cat.skills.map(skill => ({
        ...skill,
        categoryId: cat.id,
        categoryName: cat.name
      }))
    );
  }, []);

  const filteredSkills = useMemo(() => {
    return allSkills.filter(skill => {
      const matchesCategory = activeCategory === 'all' || skill.categoryId === activeCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            skill.note.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            skill.level.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allSkills, activeCategory, searchQuery]);

  return (
    <section id="stack" className="section stack-section" aria-label="Technology Stack">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>{techStackData.sectionTag}</span>
          </div>
          <h2 className="section-title">
            {techStackData.title}
          </h2>
          <p className="section-subtitle">
            {techStackData.subtitle}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="stack-control-bar">
          
          {/* Category Tabs */}
          <div className="category-filter-tabs">
            <button
              type="button"
              className={`filter-tab interactive ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('all')}
              data-cursor-text="Filter"
            >
              <Layers size={14} />
              <span>All Disciplines ({allSkills.length})</span>
            </button>

            {techStackData.categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`filter-tab interactive ${activeCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                data-cursor-text="Filter"
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="stack-search-wrapper">
            <Search size={15} className="search-icon" />
            <input
              type="text"
              placeholder="Filter technologies (e.g. React, Node, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="stack-search-input"
              aria-label="Filter technologies"
            />
            {searchQuery && (
              <button 
                type="button" 
                className="search-clear-btn" 
                onClick={() => setSearchQuery('')}
                aria-label="Clear filter"
              >
                ×
              </button>
            )}
          </div>

        </div>

        {/* Technical Grid Display */}
        <div className="stack-grid">
          {filteredSkills.map((tech) => {
            const isSelected = selectedTech?.name === tech.name;
            return (
              <div
                key={tech.name}
                className={`tech-card interactive ${isSelected ? 'is-active-card' : ''}`}
                onClick={() => setSelectedTech(isSelected ? null : tech)}
                data-cursor-text="Inspect"
              >
                <div className="tech-card-header">
                  <div className="tech-title-wrap">
                    <span className="tech-name">{tech.name}</span>
                    <span className="tech-category-pill">{tech.categoryName}</span>
                  </div>
                  <span className="tech-level-tag">{tech.level}</span>
                </div>

                <p className="tech-note">
                  {tech.note}
                </p>

                <div className="tech-card-footer">
                  <div className="tech-status-dot">
                    <span className="dot-mini" />
                    <span>PRODUCTION ACTIVE</span>
                  </div>
                  <span className="tech-inspect-prompt">
                    {isSelected ? 'Selected' : 'Click to inspect'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Architectural Blueprint Banner */}
        <div className="stack-blueprint-banner">
          <div className="blueprint-left">
            <Cpu size={20} className="text-lime" />
            <div>
              <span className="blueprint-title">ARCHITECTURAL DESIGN PRINCIPLE</span>
              <p className="blueprint-desc">
                Favor native web primitives and strong modular boundaries. Avoid bloated frameworks when pure semantic code and clean state architectures perform with greater velocity and zero debt.
              </p>
            </div>
          </div>
          <div className="blueprint-right">
            <span className="blueprint-stat">100% PRODUCTION READY</span>
            <span className="blueprint-sub">ZERO RUNTIME BLOAT</span>
          </div>
        </div>

      </div>
    </section>
  );
}

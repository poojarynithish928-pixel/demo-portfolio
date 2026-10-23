import React from 'react';
import { Code2, Server, Wrench, AlertCircle, Cpu } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (index) => {
    switch (index) {
      case 0:
        return <Code2 size={22} />;
      case 1:
        return <Server size={22} />;
      case 2:
      default:
        return <Wrench size={22} />;
    }
  };

  return (
    <section className="section-wrapper" id="skills">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Stack</span>
          </div>
          <h2 className="section-title">{skillsData.sectionTitle}</h2>
          <p className="section-subtitle">{skillsData.sectionSubtitle}</p>
        </div>

        {/* Clear Placeholder Disclaimer */}
        {skillsData.isPlaceholder && (
          <div className="placeholder-banner">
            <AlertCircle size={18} />
            <div>
              <strong>Notice:</strong> {skillsData.placeholderNotice}
            </div>
          </div>
        )}

        {/* Skills Category Grid */}
        <div className="skills-grid">
          {skillsData.categories.map((category, idx) => (
            <div key={category.name} className="skill-category-card card-glass">
              <div className="skill-category-header">
                <div className="skill-icon-wrapper">
                  {getCategoryIcon(idx)}
                </div>
                <span className="placeholder-indicator">Editable Slot</span>
              </div>

              <h3 className="skill-category-title">{category.name}</h3>
              <p className="skill-category-desc">{category.description}</p>

              <div className="skill-tags-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

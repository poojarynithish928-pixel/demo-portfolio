import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, AlertCircle, History } from 'lucide-react';
import { timelineData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section-wrapper" id="timeline">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <History size={14} />
            <span>Milestones & Timeline</span>
          </div>
          <h2 className="section-title">{timelineData.sectionTitle}</h2>
          <p className="section-subtitle">{timelineData.sectionSubtitle}</p>
        </div>

        {/* Clear Placeholder Disclaimer */}
        {timelineData.isPlaceholder && (
          <div className="placeholder-banner" style={{ maxWidth: '800px', margin: '0 auto 2.5rem' }}>
            <AlertCircle size={18} />
            <div>
              <strong>Timeline Notice:</strong> {timelineData.placeholderNotice}
            </div>
          </div>
        )}

        {/* Timeline List */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {timelineData.items.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-node"></div>
              <div className="timeline-card card-glass">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <div className="timeline-institution">
                      {item.type === 'education' ? (
                        <GraduationCap size={16} style={{ color: 'var(--accent-cyan)' }} />
                      ) : (
                        <Briefcase size={16} style={{ color: 'var(--accent-indigo)' }} />
                      )}
                      <span>{item.institution}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="timeline-period">{item.period}</span>
                    <span className="placeholder-indicator">Editable</span>
                  </div>
                </div>

                <p className="timeline-desc">{item.description}</p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <MapPin size={13} />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

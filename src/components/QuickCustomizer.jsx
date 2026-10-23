import React, { useState } from 'react';
import { Settings2, X, FileCode, CheckCircle, ExternalLink, Code } from 'lucide-react';

export default function QuickCustomizer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="customizer-drawer">
        <button
          onClick={() => setIsOpen(true)}
          className="customizer-toggle-btn"
          aria-label="Open customization guide"
        >
          <Settings2 size={16} />
          <span>Edit & Customize Data</span>
        </button>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div
          className="customizer-modal-overlay"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="customizer-title"
        >
          <div
            className="customizer-modal-card card-glass"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="customizer-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FileCode size={20} style={{ color: 'var(--accent-cyan)' }} />
                <h3 id="customizer-title" style={{ fontSize: '1.25rem' }}>
                  How to Personalize Your Portfolio
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="customizer-modal-close"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              All portfolio content is decoupled from UI logic and stored in a single centralized file:
            </p>

            <div className="code-snippet-box">
              src/data/portfolioData.js
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.25rem' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle size={15} style={{ color: 'var(--accent-cyan)' }} />
                  Updating Projects
                </h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  In <code>portfolioData.js</code>, navigate to <code>projectsData.projects</code>. Replace the sample objects with your actual repository title, description, GitHub URL, and tech tags.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle size={15} style={{ color: 'var(--accent-cyan)' }} />
                  Updating Skills
                </h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Update <code>skillsData.categories</code> with your verified programming languages, frameworks, databases, and developer tools.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle size={15} style={{ color: 'var(--accent-cyan)' }} />
                  Updating Resume / Biodata PDF
                </h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Replace <code>public/Profile.pdf</code> with your latest updated resume PDF file anytime.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-primary"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

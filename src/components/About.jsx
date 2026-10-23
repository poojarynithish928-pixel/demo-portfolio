import React from 'react';
import { User, MapPin, Mail, Linkedin, FileDown, CheckCircle, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section className="section-wrapper" id="about">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Authentic background, verified details, and technical focus based in Bengaluru.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="about-grid">
          {/* Narrative Text Column */}
          <div className="about-text-content">
            <div className="card-glass" style={{ padding: '2.25rem' }}>
              <div className="about-card-badge">
                <ShieldCheck size={14} />
                <span>Verified Personal Details</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>
                Engineering Mindset & Digital Craft
              </h3>
              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx} className="about-paragraph" style={{ marginBottom: idx < personalInfo.bio.length - 1 ? '1.25rem' : '0' }}>
                  {paragraph}
                </p>
              ))}

              <div style={{ marginTop: '1.75rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)' }}>
                  Interested in discussing technology, web architecture, or potential engineering opportunities?
                  Feel free to connect directly via email or LinkedIn.
                </p>
              </div>
            </div>
          </div>

          {/* Verified Snapshot Card */}
          <div className="about-verified-card card-glass">
            <div className="about-avatar-row">
              <div className="about-avatar">NP</div>
              <div className="about-avatar-info">
                <h3>{personalInfo.name}</h3>
                <span style={{ fontSize: '0.8125rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  Verified Identity
                </span>
              </div>
            </div>

            <div className="about-details-list">
              <div className="about-detail-item">
                <MapPin size={18} />
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location</span>
                  <strong>{personalInfo.location}</strong>
                </div>
              </div>

              <div className="about-detail-item">
                <Mail size={18} />
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email</span>
                  <strong>{personalInfo.email}</strong>
                </div>
              </div>

              <div className="about-detail-item">
                <Linkedin size={18} />
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>Professional Network</span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="about-detail-item">
                <CheckCircle size={18} />
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>Primary Source</span>
                  <span style={{ color: 'var(--text-secondary)' }}>Biodata PDF Export</span>
                </div>
              </div>
            </div>

            {/* Resume / Biodata Link */}
            <div className="resume-download-box">
              <div className="resume-info">
                <span className="resume-title">Source Biodata PDF</span>
                <span className="resume-subtitle">Verified LinkedIn Export</span>
              </div>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.5rem 0.85rem', fontSize: '0.8125rem' }}
                download="Nithish_Poojary_Profile.pdf"
              >
                <FileDown size={15} />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { MapPin, ArrowRight, ExternalLink, Mail, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* Background radial spotlight */}
      <div className="hero-glow-spot" aria-hidden="true"></div>

      <div className="content-container">
        <div className="hero-content">
          {/* Availability Status Badge */}
          <div className="hero-status-pill">
            <span className="status-dot-pulse"></span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Main Name Heading */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Verified Location Badge */}
          <div className="hero-location-badge">
            <MapPin size={15} />
            <span>{personalInfo.location}</span>
          </div>

          {/* Professional Introduction */}
          <p className="hero-description">
            Passionate about modern software engineering, web technologies, and building
            impactful digital solutions. Welcome to my personal space where I document my technical
            journey, projects, and verified credentials.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <Mail size={18} />
              <span>Get in Touch</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span>View LinkedIn Profile</span>
              <ExternalLink size={16} />
            </a>
            <a href="#projects" className="btn btn-outline">
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Verified Stats Grid */}
          <div className="hero-stats-grid">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="hero-stat-card">
                <div className="hero-stat-value">
                  {stat.value}
                  {stat.isVerified && <CheckCircle2 size={15} className="verified-icon" />}
                </div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

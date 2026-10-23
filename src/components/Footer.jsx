import React from 'react';
import { ArrowUp, Mail, Linkedin, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="content-container footer-inner">
        {/* Brand statement */}
        <div className="footer-brand">
          <span className="footer-name">{personalInfo.name}</span>
          <span className="footer-desc">
            Personal Portfolio • Verified details from biodata • {personalInfo.location}
          </span>
        </div>

        {/* Links */}
        <div className="footer-links">
          <a
            href={`mailto:${personalInfo.email}`}
            className="footer-link"
            aria-label="Email Nithish"
          >
            <Mail size={15} />
            <span>Email</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={15} />
            <span>LinkedIn</span>
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Biodata PDF"
          >
            <FileText size={15} />
            <span>Biodata PDF</span>
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

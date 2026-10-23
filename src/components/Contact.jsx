import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Copy, Check, Send, ExternalLink, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setShowToast(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);

    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Direct Channels</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project, role, or technical collaboration in mind? Reach out directly.
          </p>
        </div>

        {/* Featured Contact Card */}
        <div className="contact-card card-glass">
          <div className="contact-icon-halo">
            <Mail size={28} />
          </div>

          <h3 className="contact-headline">
            Let's start a conversation.
          </h3>
          <p className="contact-subtext">
            I am currently based in Bengaluru and actively responsive across email and LinkedIn.
            Feel free to drop me a note or connect on professional networks.
          </p>

          {/* Contact Details Grid */}
          <div className="contact-channels-grid">
            {/* Email Channel */}
            <div className="contact-channel-item">
              <span className="channel-label">
                <Mail size={13} />
                <span>Primary Email</span>
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="channel-value"
                style={{ color: 'var(--accent-cyan)' }}
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Location Channel */}
            <div className="contact-channel-item">
              <span className="channel-label">
                <MapPin size={13} />
                <span>Base Location</span>
              </span>
              <span className="channel-value">
                {personalInfo.location}
              </span>
            </div>

            {/* LinkedIn Channel */}
            <div className="contact-channel-item">
              <span className="channel-label">
                <Linkedin size={13} />
                <span>Verified Network</span>
              </span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-value"
                style={{ color: 'var(--accent-cyan)' }}
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="contact-actions-row">
            <a
              href={`mailto:${personalInfo.email}?subject=Portfolio%20Inquiry%20-%20Nithish%20Poojary`}
              className="btn btn-primary"
            >
              <Send size={16} />
              <span>Send Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className={`copy-btn ${copied ? 'copied' : ''}`}
              aria-label="Copy email address to clipboard"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
            </button>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Linkedin size={16} />
              <span>Connect on LinkedIn</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Toast Notification */}
      {showToast && (
        <div className="toast-notification" role="status" aria-live="polite">
          <Check size={18} />
          <span>Email copied to clipboard: {personalInfo.email}</span>
        </div>
      )}
    </section>
  );
}

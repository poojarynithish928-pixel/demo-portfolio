import React from 'react';
import { FolderGit2, Github, ExternalLink, AlertCircle, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="section-wrapper" id="projects">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Showcase & Work</span>
          </div>
          <h2 className="section-title">{projectsData.sectionTitle}</h2>
          <p className="section-subtitle">{projectsData.sectionSubtitle}</p>
        </div>

        {/* Clear Placeholder Disclaimer */}
        {projectsData.isPlaceholder && (
          <div className="placeholder-banner">
            <AlertCircle size={18} />
            <div>
              <strong>Sample Layout Notice:</strong> {projectsData.placeholderNotice}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.projects.map((project) => (
            <article key={project.id} className="project-card card-glass">
              <div className="project-card-header">
                <span className="project-category-tag">{project.category}</span>
                <span className="placeholder-indicator">Sample Project</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Highlights */}
              <ul className="project-highlights-list">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="project-tech-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="project-actions">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={15} />
                  <span>Repository</span>
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                  aria-label={`View Live Demo of ${project.title}`}
                >
                  <ExternalLink size={15} />
                  <span>Live Preview</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

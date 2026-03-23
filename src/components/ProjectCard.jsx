import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaTools, FaLightbulb } from 'react-icons/fa';
import './ProjectCard.css';

// One accent colour per project index
const ACCENTS = ['#22d3ee', '#a855f7', '#f59e0b'];

function ProjectCard({ title, problemStatement, insights, tools, githubLink, liveLink, index = 0 }) {
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <div className="project-card glass-card">
      {/* Coloured top accent bar */}
      <div className="project-accent-bar" style={{ background: accent }} />

      <div className="project-header">
        <div className="project-accent-dot" style={{ background: accent }} />
        <h3 className="project-title">{title}</h3>
      </div>

      <div className="project-body">
        <div className="project-section">
          <h4 className="section-heading">
            <FaLightbulb className="section-icon problem-icon" /> Problem Statement
          </h4>
          <p className="section-text">{problemStatement}</p>
        </div>

        <div className="project-section">
          <h4 className="section-heading">
            <FaChartLine className="section-icon insight-icon" /> Core Insights
          </h4>
          <ul className="insights-list">
            {insights?.map((insight, i) => (
              <li key={i}>{insight}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-footer">
        <div className="project-section">
          <h4 className="section-heading" style={{ fontSize: '0.85rem', marginBottom: '0.4rem' }}>
            <FaTools className="section-icon text-muted" /> Tools Used
          </h4>
          <div className="project-tools">
            {tools?.map((tool, i) => (
              <span key={i} className="tool-badge">{tool}</span>
            ))}
          </div>
        </div>

        <div className="project-links">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-gh-btn"
              style={{ borderColor: accent, color: accent }}
            >
              <FaGithub /> View on GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-live-btn"
              style={{ background: accent }}
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

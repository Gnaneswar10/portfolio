import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaExclamationCircle, FaTools } from 'react-icons/fa';
import './ProjectCard.css';

function ProjectCard({ title, problemStatement, insights, tools, githubLink, liveLink }) {
  return (
    <div className="project-card glass-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
      </div>
      
      <div className="project-body">
        <div className="project-section">
          <h4 className="section-heading"><FaExclamationCircle className="section-icon problem-icon" /> Problem Statement</h4>
          <p className="section-text">{problemStatement}</p>
        </div>

        <div className="project-section">
          <h4 className="section-heading"><FaChartLine className="section-icon insight-icon" /> Core Insights</h4>
          <ul className="insights-list">
            {insights?.map((insight, index) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-footer">
        <div className="project-section">
          <h4 className="section-heading" style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}><FaTools className="section-icon text-muted" /> Tools Used</h4>
          <div className="project-tools">
            {tools?.map((tool, index) => (
              <span key={index} className="tool-badge">{tool}</span>
            ))}
          </div>
        </div>
        
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}>
              <FaGithub /> GitHub
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-link btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}>
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

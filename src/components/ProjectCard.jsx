import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

function ProjectCard({ title, description, tools, githubLink, liveLink }) {
  return (
    <div className="project-card glass-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      
      <div className="project-tools">
        {tools.map((tool, index) => (
          <span key={index} className="tool-badge">{tool}</span>
        ))}
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
  );
}

export default ProjectCard;

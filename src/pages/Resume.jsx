import React from 'react';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';
import { FaDownload } from 'react-icons/fa';
import './Resume.css';

function Resume() {
  return (
    <PageTransition>
      <div className="page-wrapper container section-padding resume-page">
        <h2 className="section-title gradient-text">My Resume</h2>
        <p className="section-subtitle">
          Preview or download my professional resume.
        </p>

        <div className="resume-actions">
          <a href="/resume.pdf" download="Gnaneswar_Raju_Resume.pdf" className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaDownload /> Download Resume
          </a>
        </div>

        <div className="resume-viewer glass-card">
          <div className="pdf-container">
            {/* Embedded PDF - falls back to a message if PDF isn't supported or file is missing */}
            <object data="/resume.pdf" type="application/pdf" width="100%" height="100%">
              <div className="pdf-fallback">
                <p>It appears you don't have a PDF plugin for this browser.</p>
                <a href="/resume.pdf">Click here to download the PDF file.</a>
              </div>
            </object>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Resume;

import React from 'react';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';
import { FaDownload, FaGraduationCap, FaMedal } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Resume.css';

function Resume() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 900;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0, 
      ...(isMobile && { boxShadow: ["var(--card-shadow)", "0 15px 40px rgba(99, 102, 241, 0.5)", "var(--card-shadow)"] }),
      transition: { 
        type: 'spring', stiffness: 100,
        ...(isMobile && { boxShadow: { duration: 1.5, times: [0, 0.3, 1] } })
      } 
    }
  };

  return (
    <PageTransition>
      <div className="page-wrapper container section-padding resume-page">
        <h2 className="section-title gradient-text">My Resume</h2>
        <p className="section-subtitle">
          Preview my professional resume or download it directly.
        </p>

        <motion.div 
          className="resume-layout"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Sidebar - Quick Facts */}
          <motion.div className="resume-sidebar glass-card" variants={itemVariants}>
            <div className="sidebar-profile">
              <div className="sidebar-img-wrapper">
                <img src="/profile.jpg" alt="Gnaneswar Raju" className="sidebar-img" />
              </div>
              <h3>Gnaneswar Raju</h3>
              <p className="gradient-text">Data Analyst & Developer</p>
            </div>

            <div className="sidebar-section">
              <h4><FaGraduationCap /> Education</h4>
              <p><strong>B.Tech in Computer Science</strong><br/>Lovely Professional University<br/>Est. 2027</p>
            </div>

            <div className="sidebar-section">
              <h4><FaMedal /> Core Competencies</h4>
              <div className="badge-container">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Power BI</span>
                <span className="skill-tag">Python & SQL</span>
              </div>
            </div>

            <Button 
              variant="primary" 
              style={{ width: '100%', marginTop: 'auto', display: 'flex', justifyContent: 'center', gap: '0.5rem' }} 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Gnaneswar_Raju_Resume.pdf';
                link.click();
              }}
            >
              <FaDownload /> Download PDF
            </Button>
          </motion.div>

          {/* Right Sidebar - PDF Viewer */}
          <motion.div className="resume-viewer glass-card" variants={itemVariants}>
            <div className="pdf-container">
              <object data="/resume.pdf" type="application/pdf" width="100%" height="100%">
                <div className="pdf-fallback">
                  <p>It appears you don't have a PDF plugin for this browser.</p>
                  <a href="/resume.pdf">Click here to download the PDF file.</a>
                </div>
              </object>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}

export default Resume;

import React from 'react';
import PageTransition from '../components/PageTransition';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaBuilding } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Certifications.css';

function Certifications() {
  const certs = [
    {
      title: 'Master Generative AI and Generative AI Tools',
      issuer: 'Udemy',
      date: '2024',
      description: 'Comprehensive course covering Generative AI concepts, tools, and practical applications using modern AI frameworks.',
      skills: ['Generative AI', 'Prompt Engineering', 'LLMs'],
      link: 'https://drive.google.com/file/d/1YZGpOB68Zk_qJ3xpJBxGNR7d3LPXlSiW/view',
    },
    {
      title: 'Computational Theory: Language Principle & Finite Automata',
      issuer: 'Infosys',
      date: '2024',
      description: 'In-depth study of formal languages, finite automata, and the theoretical foundations of computation.',
      skills: ['Automata Theory', 'Formal Languages', 'TOC'],
      link: 'https://drive.google.com/file/d/1giIwhTUuBKaF_xPepKQQ6q5wuQBmJNb4/view',
    },
    {
      title: 'Social Networks',
      issuer: 'NPTEL',
      date: '2023',
      description: 'Study of network structures, graph theory, information diffusion, and the science behind social networks.',
      skills: ['Graph Theory', 'Network Analysis', 'Data Science'],
      link: 'https://drive.google.com/file/d/1-dSBVaAJbDud9rvSOjEERm-8YFBkGNG2/view',
    },
    {
      title: 'Legacy Responsive Web Design (300 hours)',
      issuer: 'freeCodeCamp',
      date: '2023',
      description: '300-hour certification covering HTML, CSS, responsive layouts, flexbox, and accessibility standards.',
      skills: ['HTML', 'CSS', 'Flexbox', 'Responsive Design'],
      link: 'https://www.freecodecamp.org/certification/gnaeswarraju2006/responsive-web-design',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden:   { opacity: 0, y: 30 },
    visible:  { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } },
  };

  return (
    <PageTransition>
      <div className="page-wrapper container section-padding">
        <h2 className="section-title gradient-text">Certifications</h2>
        <p className="section-subtitle">
          Hover over a card to see the details — click to view the certificate.
        </p>

        <motion.div
          className="certs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certs.map((cert, index) => (
            <motion.div key={index} className="cert-flip-container" variants={itemVariants}>
              <div className="cert-flip-inner">

                {/* ── FRONT ── */}
                <div className="cert-face cert-front">
                  <div className="cert-banner" />
                  <div className="cert-front-body">
                    <div className="cert-icon-circle">
                      <FaCertificate />
                    </div>
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer">
                      <FaBuilding className="cert-meta-icon" /> {cert.issuer}
                    </p>
                    <span className="cert-hint">Hover to flip ↻</span>
                  </div>
                </div>

                {/* ── BACK ── */}
                <div className="cert-face cert-back">
                  <div className="cert-back-header">
                    <FaCertificate className="cert-back-icon" />
                    <span className="cert-back-issuer">{cert.issuer}</span>
                  </div>
                  <h3 className="cert-back-title">{cert.title}</h3>
                  <p className="cert-back-desc">{cert.description}</p>
                  <div className="cert-skills">
                    {cert.skills.map(s => (
                      <span key={s} className="cert-skill-tag">{s}</span>
                    ))}
                  </div>
                  <div className="cert-date">
                    <FaCalendarAlt /> {cert.date}
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-view-btn"
                  >
                    View Certificate <FaExternalLinkAlt />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}

export default Certifications;

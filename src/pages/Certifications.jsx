import React from 'react';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';
import { FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Certifications.css';

function Certifications() {
  const certs = [
    { 
      title: 'Master Generative AI and Generative AI Tools', 
      issuer: 'Udemy', 
      link: 'https://drive.google.com/file/d/1YZGpOB68Zk_qJ3xpJBxGNR7d3LPXlSiW/view' 
    },
    { 
      title: 'Computational Theory: Language Principle & Finite Automata Theory', 
      issuer: 'Infosys', 
      link: 'https://drive.google.com/file/d/1giIwhTUuBKaF_xPepKQQ6q5wuQBmJNb4/view' 
    },
    { 
      title: 'Social Networks', 
      issuer: 'NPTEL', 
      link: 'https://drive.google.com/file/d/1-dSBVaAJbDud9rvSOjEERm-8YFBkGNG2/view' 
    },
    { 
      title: 'Legacy Responsive Web Design (300 hours)', 
      issuer: 'FreeCodeCamp', 
      link: 'https://www.freecodecamp.org/certification/gnaeswarraju2006/responsive-web-design' 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } }
  };

  return (
    <PageTransition>
      <div className="page-wrapper container section-padding">
        <h2 className="section-title gradient-text">Certifications</h2>
        <p className="section-subtitle">
          Continuous learning and verified skills representation.
        </p>

        <motion.div 
          className="certs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certs.map((cert, index) => (
            <motion.div key={index} className="cert-card glass-card" variants={itemVariants}>
              <div className="cert-icon-wrapper">
                <FaCertificate className="cert-main-icon" />
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              
              <div className="cert-action">
                <Button 
                  variant="outline" 
                  style={{ width: '100%', padding: '0.5rem 1rem' }}
                  onClick={() => window.open(cert.link, '_blank', 'noopener,noreferrer')}
                >
                  View Certificate
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}

export default Certifications;

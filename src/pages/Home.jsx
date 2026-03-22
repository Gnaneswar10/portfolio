import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';
import { FaLaptopCode, FaFileAlt, FaPaperPlane, FaBriefcase, FaFileDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 10, mass: 0.8 } 
    }
  };

  return (
    <PageTransition>
      <div className="page-wrapper container home-container">
        <motion.div 
          className="home-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="home-content-inner">
            <h1 className="name">
              Hello, I'm <br />
              <span className="gradient-text">Gnaneswar Raju</span>
            </h1>
            <h2 className="home-subtitle" style={{ lineHeight: 1.6 }}>
              <TypeAnimation
                sequence={[
                  'Aspiring Data Analyst',
                  2000,
                  'Turning Data into Meaningful Insights',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </h2>
          <p className="home-description">
            Passionate Computer Science student skilled in data analytics, machine learning, and software development. Experienced in building data-driven dashboards, predictive systems, and algorithm simulations.
          </p>
          <div className="home-cta">
            <Button size="lg" onClick={() => navigate('/projects')}>
              <FaBriefcase style={{ marginRight: '0.5rem' }} /> Projects
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/resume')}>
              <FaFileDownload style={{ marginRight: '0.5rem' }} /> Resume
            </Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('/contact')}>
              <FaPaperPlane style={{ marginRight: '0.5rem' }} /> Contact
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="home-image-container" // Kept original class name for consistency with CSS
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="image-wrapper">
            <img src="/profile.jpg" alt="Gnaneswar Raju" className="profile-image" />
            <div className="decoration-blob blob-1"></div>
            <div className="decoration-blob blob-2"></div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}

export default Home;

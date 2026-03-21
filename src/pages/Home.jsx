import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';
import { FaLaptopCode, FaFileAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="greeting" variants={itemVariants}>Hello, I'm</motion.h2>
          <motion.h1 className="name gradient-text" variants={itemVariants}>Gnaneswar Raju</motion.h1>
          <motion.h3 className="title" variants={itemVariants}>
            Aspiring Data Analyst <span className="divider">|</span> Data Science Enthusiast <span className="divider">|</span> Problem Solver
          </motion.h3>
          <motion.p className="bio" variants={itemVariants}>
            Passionate Computer Science student skilled in data analytics, machine learning, and software development. 
            Experienced in building data-driven dashboards, predictive systems, and algorithm simulations.
          </motion.p>
          <motion.div className="cta-group" variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={() => navigate('/projects')} style={{ flex: 1, minWidth: '140px' }}>
              <FaLaptopCode /> Projects
            </Button>
            <Button variant="primary" onClick={() => navigate('/resume')} style={{ flex: 1, minWidth: '140px' }}>
              <FaFileAlt /> Resume
            </Button>
            <Button variant="primary" onClick={() => navigate('/contact')} style={{ flex: 1, minWidth: '140px' }}>
              <FaPaperPlane /> Contact
            </Button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="home-image-container"
          initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
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

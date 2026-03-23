import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';
import { FaPaperPlane, FaBriefcase, FaFileDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="page-wrapper container home-container">
        
        {/* ── LEFT: Text Content ── */}
        <motion.div
          className="home-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="greeting">Hello, I'm</span>

          <h1 className="name">
            <span className="gradient-text">Gnaneswar Raju</span>
          </h1>

          <h2 className="home-subtitle">
            <TypeAnimation
              sequence={[
                'Aspiring Data Analyst',
                2000,
                'Turning Data into Insights',
                2000,
                'ML & Software Developer',
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ lineHeight: 1.4 }}
            />
          </h2>

          <p className="home-description">
            Passionate Computer Science student skilled in data analytics, machine learning, 
            and software development. Experienced in building data-driven dashboards, 
            predictive systems, and algorithm simulations.
          </p>

          <div className="home-cta">
            <Button size="lg" onClick={() => navigate('/projects')}>
              <FaBriefcase style={{ marginRight: '0.5rem' }} /> Projects
            </Button>
            <Button size="lg" onClick={() => navigate('/resume')}>
              <FaFileDownload style={{ marginRight: '0.5rem' }} /> Resume
            </Button>
            <Button size="lg" onClick={() => navigate('/contact')}>
              <FaPaperPlane style={{ marginRight: '0.5rem' }} /> Contact
            </Button>
          </div>
        </motion.div>

        {/* ── RIGHT: Profile Image ── */}
        <motion.div
          className="home-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
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

import React from 'react';
import Button from '../components/Button';
import { FaPaperPlane, FaBriefcase, FaFileDownload, FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaChartBar, FaFileExcel } from 'react-icons/fa';
import { SiOpenjdk, SiPython, SiMysql, SiDjango } from 'react-icons/si';
import { motion } from 'framer-motion';
import ScrambleText from '../components/ScrambleText';
import './Home.css';

const stats = [
  { value: '3',   label: 'Projects' },
  { value: '15+', label: 'Skills' },
  { value: '3',   label: 'Certifications' },
];

const techStack = [
  { icon: SiOpenjdk,   label: 'Java' },
  { icon: SiPython,    label: 'Python' },
  { icon: SiMysql,     label: 'MySQL' },
  { icon: FaChartBar,  label: 'Power BI' },
  { icon: SiDjango,    label: 'Django' },
  { icon: FaFileExcel, label: 'Excel' },
];

function Home() {
  return (
    <>
      <div className="page-wrapper container home-container">

        {/* ── LEFT: Text Content ── */}
        <motion.div
          className="home-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Greeting & Name */}
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">
            <span className="gradient-text">Gnaneswar Raju</span>
          </h1>

          {/* Animated Role */}
          <h2 className="home-subtitle">
            <ScrambleText
              phrases={[
                'Aspiring Data Analyst',
                'Turning Data into Insights',
                'ML & Software Developer',
              ]}
              className="scramble-phrase"
              scrambleDuration={900}
              holdDuration={2200}
            />
          </h2>

          {/* Bio */}
          <p className="home-description">
            Passionate Computer Science student skilled in data analytics, machine learning,
            and software development. Experienced in building data-driven dashboards,
            predictive systems, and algorithm simulations.
          </p>

          {/* ── Tech Stack Icons ── */}
          <div className="tech-stack">
            {techStack.map(({ icon: Icon, label }) => (
              <motion.span
                key={label}
                className="tech-badge"
                title={label}
                whileHover={{ scale: 1.2, y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Icon />
              </motion.span>
            ))}
          </div>

          {/* ── CTA Buttons ── */}
          <div className="home-cta">
            <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <FaBriefcase style={{ marginRight: '0.5rem' }} /> Projects
            </Button>
            <Button size="lg" onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}>
              <FaFileDownload style={{ marginRight: '0.5rem' }} /> Resume
            </Button>
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <FaPaperPlane style={{ marginRight: '0.5rem' }} /> Contact
            </Button>
          </div>

          {/* ── Social Links ── */}
          <div className="social-links">
            <motion.a
              href="https://github.com/Gnaneswar10"
              target="_blank" rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -4, scale: 1.15 }}
              title="GitHub"
            ><FaGithub /></motion.a>
            <motion.a
              href="https://linkedin.com/in/gnaneswar-raju"
              target="_blank" rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -4, scale: 1.15 }}
              title="LinkedIn"
            ><FaLinkedin /></motion.a>
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gnaneswarraju10@gmail.com"
              target="_blank" rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -4, scale: 1.15 }}
              title="Email"
            ><FaEnvelope /></motion.a>
          </div>

          {/* ── Quick Stats ── */}
          <div className="stats-bar">
            {stats.map(({ value, label }, i) => (
              <React.Fragment key={label}>
                <div className="stat-item">
                  <span className="stat-value">{value}</span>
                  <span className="stat-label">{label}</span>
                </div>
                {i < stats.length - 1 && <div className="stat-divider" />}
              </React.Fragment>
            ))}
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
          <div className="image-ring">
            <div className="image-wrapper">
              <img src="/profile.jpg" alt="Gnaneswar Raju" className="profile-image" />
              <div className="decoration-blob blob-1"></div>
              <div className="decoration-blob blob-2"></div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaChevronDown />
      </motion.div>

    </>
  );
}

export default Home;

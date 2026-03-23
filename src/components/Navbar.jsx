import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Navbar.css';

const sections = [
  { name: 'Home',           id: 'home' },
  { name: 'About',          id: 'about' },
  { name: 'Skills',         id: 'skills' },
  { name: 'Projects',       id: 'projects' },
  { name: 'Training',       id: 'training' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Achievements',   id: 'achievements' },
  { name: 'Contact',        id: 'contact' },
];

function Navbar({ theme, toggleTheme, activeId }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container container">
        {/* Logo */}
        <div className="nav-logo">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
            style={{ textDecoration: 'none' }}
          >
            <span className="gradient-text" style={{ fontWeight: 700, fontSize: '1.5rem' }}>
              GR Portfolio
            </span>
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(o => !o)} aria-label="Toggle Menu">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        {/* Nav links */}
        <ul className={isOpen ? 'nav-links mobile-active' : 'nav-links'}>
          {sections.map(({ name, id }) => (
            <li key={id} style={{ position: 'relative' }}>
              <a
                href={`#${id}`}
                className={`nav-link${activeId === id ? ' active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              >
                <span className="link-text">{name}</span>
                {activeId === id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="nav-active-box"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}

          {/* Resume — standalone page */}
          <li style={{ position: 'relative' }}>
            <NavLink
              to="/resume"
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {({ isActive }) => (
                <>
                  <span className="link-text">Resume</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="nav-active-box"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          </li>

          {/* Theme toggle */}
          <li className="theme-toggle-wrapper">
            <button
              onClick={() => { toggleTheme(); setIsOpen(false); }}
              className="theme-toggle"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

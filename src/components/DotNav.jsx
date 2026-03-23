import React from 'react';
import { motion } from 'framer-motion';
import './DotNav.css';

const sections = [
  { id: 'home',           label: 'Home' },
  { id: 'about',          label: 'About' },
  { id: 'skills',         label: 'Skills' },
  { id: 'projects',       label: 'Projects' },
  { id: 'training',       label: 'Training' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements',   label: 'Achievements' },
  { id: 'contact',        label: 'Contact' },
];

function DotNav({ activeId }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="dot-nav" aria-label="Section Navigation">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          className={`dot-btn${activeId === id ? ' dot-active' : ''}`}
          onClick={() => scrollTo(id)}
          aria-label={`Scroll to ${label}`}
          title={label}
        >
          {activeId === id && (
            <motion.span
              className="dot-ring"
              layoutId="dot-ring"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      ))}
    </nav>
  );
}

export default DotNav;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Training', path: '/training' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container container">
        <div className="nav-logo">
          <NavLink to="/">
            <span className="gradient-text" style={{ fontWeight: 700, fontSize: '1.5rem' }}>GR Portfolio</span>
          </NavLink>
        </div>
        <div className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
        
        <ul className={isOpen ? "nav-links mobile-active" : "nav-links"}>
          {links.map(link => (
            <li key={link.name}>
              <NavLink 
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="theme-toggle-wrapper">
            <button onClick={() => { toggleTheme(); closeMenu(); }} className="theme-toggle" aria-label="Toggle Theme">
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem 1rem',
      borderTop: '1px solid var(--card-border)',
      marginTop: 'auto'
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
        <a href="https://github.com/Gnaneswar10" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem' }}>
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/gnaneswar-raju" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem' }}>
          <FaLinkedin />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gnaneswarraju10@gmail.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem' }}>
          <FaEnvelope />
        </a>
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Gnaneswar Raju. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/gnaneswarraju10@gmail.com", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setStatus('Message sent successfully! I will get back to you soon.');
        e.target.reset();
      } else {
        setStatus('Failed to send. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please check your connection.');
    }
    
    setTimeout(() => setStatus(''), 7000);
  };

  return (
    <PageTransition>
      <div className="page-wrapper container section-padding contact-page">
        <h2 className="section-title gradient-text">Get In Touch</h2>
        <p className="section-subtitle">
          Have a question or want to work together? Let's connect!
        </p>

        <div className="contact-content">
          <div className="contact-info glass-card">
            <h3 className="contact-heading">Contact Information</h3>
            <p className="contact-desc">
              Fill out the form and I will get back to you within 24 hours.
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <span>gnaneswarraju10@gmail.com</span>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>Remote / Relocation</span>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-circle">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-circle">
                <FaGithub />
              </a>
              <a href="mailto:gnaneswarraju10@gmail.com" className="social-circle">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper glass-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="How can I help you?" required></textarea>
              </div>
              
              <Button variant="primary" type="submit" style={{ marginTop: '1rem', width: '100%' }}>
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
              </Button>

              {status && (
                <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.95rem', color: status.includes('success') ? '#10b981' : '#f43f5e' }}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Contact;

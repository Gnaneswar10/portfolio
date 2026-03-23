import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
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
    <div className="page-wrapper container section-padding contact-page">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="section-subtitle">
            Have a question or want to work together? Let's connect!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="contact-heading">Contact Information</h3>
            <p className="contact-desc">
              Fill out the form and I will get back to you within 24 hours.
            </p>
            
            <div className="info-items">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gnaneswarraju10@gmail.com" target="_blank" rel="noopener noreferrer" className="info-card">
                <div className="info-icon-wrapper">
                  <FaEnvelope className="info-icon" />
                </div>
                <div className="info-details">
                  <h4>Email</h4>
                  <span>gnaneswarraju10@gmail.com</span>
                </div>
              </a>
              <a href="tel:7095877212" className="info-card">
                <div className="info-icon-wrapper">
                  <FaPhone className="info-icon" />
                </div>
                <div className="info-details">
                  <h4>Phone</h4>
                  <span>+91 7095877212</span>
                </div>
              </a>
              <div className="info-card">
                <div className="info-icon-wrapper">
                  <FaMapMarkerAlt className="info-icon" />
                </div>
                <div className="info-details">
                  <h4>Location</h4>
                  <span>Remote / Relocation</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://linkedin.com/in/gnaneswar-raju" target="_blank" rel="noopener noreferrer" className="social-circle">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Gnaneswar10" target="_blank" rel="noopener noreferrer" className="social-circle">
                <FaGithub />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gnaneswarraju10@gmail.com" target="_blank" rel="noopener noreferrer" className="social-circle">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>
        </div>
    </div>
  );
}

export default Contact;

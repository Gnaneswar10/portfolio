import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Training from './pages/Training';
import Certifications from './pages/Certifications';
import Achievements from './pages/Achievements';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from './components/ScrollToTop';

function AppContent({ theme, toggleTheme }) {
  const location = useLocation();

  useEffect(() => {
    if (window.innerWidth > 900) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('mobile-glow-active');
        } else {
          entry.target.classList.remove('mobile-glow-active');
        }
      });
    }, { threshold: 0.5 }); // Triggers when half the card is visible

    const timeout = setTimeout(() => {
      const cards = document.querySelectorAll('.glass-card');
      cards.forEach(card => observer.observe(card));
    }, 600); // 600ms delay ensures framer-motion finishes sliding them in

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/training" element={<Training />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Set initial theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <ScrollToTop />
      <AppContent theme={theme} toggleTheme={toggleTheme} />
    </Router>
  );
}

export default App;

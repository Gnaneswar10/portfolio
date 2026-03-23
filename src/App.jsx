import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import Starfield from './components/Starfield';
import MouseGlow from './components/MouseGlow';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTop from './components/BackToTop';
import DotNav from './components/DotNav';
import { Analytics } from '@vercel/analytics/react';

// All scrollable section IDs in order
const SECTIONS = [
  'home','about','skills','projects',
  'training','certifications','achievements','resume','contact',
];

function AppContent({ theme, toggleTheme }) {
  const [activeId, setActiveId] = useState('home');

  // Single source-of-truth IntersectionObserver for both Navbar and DotNav
  useEffect(() => {
    const observers = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollProgressBar />
      <Starfield />
      <MouseGlow />
      <Navbar theme={theme} toggleTheme={toggleTheme} activeId={activeId} />
      <DotNav activeId={activeId} />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
      <Analytics />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <Router>
      <AppContent theme={theme} toggleTheme={toggleTheme} />
    </Router>
  );
}

export default App;

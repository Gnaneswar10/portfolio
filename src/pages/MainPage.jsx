import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Training from './Training';
import Certifications from './Certifications';
import Achievements from './Achievements';
import Contact from './Contact';
import PlanetDecoration from '../components/PlanetDecoration';

const sectionStyle = { position: 'relative', overflow: 'hidden' };

function MainPage() {
  return (
    <>
      <section id="home" style={sectionStyle}>
        <PlanetDecoration type="sun" />
        <Home />
      </section>

      <section id="about" style={sectionStyle}>
        <PlanetDecoration type="earth" />
        <About />
      </section>

      <section id="skills" style={sectionStyle}>
        <PlanetDecoration type="mars" />
        <Skills />
      </section>

      <section id="projects" style={sectionStyle}>
        <PlanetDecoration type="saturn" />
        <Projects />
      </section>

      <section id="training" style={sectionStyle}>
        <PlanetDecoration type="comet" />
        <Training />
      </section>

      <section id="certifications" style={sectionStyle}>
        <PlanetDecoration type="moon" />
        <Certifications />
      </section>

      <section id="achievements" style={sectionStyle}>
        <PlanetDecoration type="star" />
        <Achievements />
      </section>

      <section id="contact" style={sectionStyle}>
        <PlanetDecoration type="nebula" />
        <Contact />
      </section>
    </>
  );
}

export default MainPage;

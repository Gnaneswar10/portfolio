import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Training from './Training';
import Certifications from './Certifications';
import Achievements from './Achievements';
import Contact from './Contact';

function MainPage() {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="training"><Training /></section>
      <section id="certifications"><Certifications /></section>
      <section id="achievements"><Achievements /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default MainPage;

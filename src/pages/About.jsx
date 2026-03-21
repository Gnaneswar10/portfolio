import React from 'react';
import PageTransition from '../components/PageTransition';
import { FaGraduationCap, FaSeedling, FaCodeBranch } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <PageTransition>
      <div className="page-wrapper container section-padding about-page">
        <h2 className="section-title gradient-text">About Me</h2>
        <p className="section-subtitle">
          My journey, background, and what drives my passion for technology.
        </p>

        <div className="about-content">
          <div className="about-text glass-card">
            <h3>Hi, I’m Gnaneswar Raju</h3>
            <p>
              A dedicated Computer Science undergraduate specializing in Data Science, Analytics, and Software Development.
            </p>
            <p>
              I am passionate about building data-driven and efficient solutions that solve real-world problems. With a strong foundation in programming and analytics, I have hands-on experience developing interactive dashboards, machine learning models, and system-based applications using modern tools and technologies.
            </p>
            <p>
              In addition to software development, I have developed a keen interest in Data Science and Analytics. I have worked extensively with tools like Excel and Power BI to analyze datasets, create key performance indicators, and generate meaningful insights that support data-driven decision-making. My projects reflect my ability to combine analytical thinking with practical implementation.
            </p>
            <p>
              I am continuously enhancing my technical expertise by exploring advanced concepts in machine learning, data visualization, and system design. I enjoy working on projects that integrate data analysis with real-world applications, helping businesses and users make informed decisions.
            </p>
            <p>
              Currently, I am pursuing a Bachelor of Technology in Computer Science and Engineering at Lovely Professional University. I am actively seeking opportunities where I can apply my skills, contribute to impactful projects, and grow as a data professional in a dynamic environment.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card glass-card">
              <FaGraduationCap className="highlight-icon" />
              <h4>Education</h4>
              <p>Lovely Professional University</p>
              <span>Data Science (2023-2027)</span>
            </div>
            
            <div className="highlight-card glass-card">
              <FaCodeBranch className="highlight-icon" />
              <h4>Focus Area</h4>
              <p>Data & AI</p>
              <span>Machine Learning & Analytics</span>
            </div>

            <div className="highlight-card glass-card">
              <FaSeedling className="highlight-icon" />
              <h4>Philosophy</h4>
              <p>Continuous Growth</p>
              <span>Lifelong learner & problem solver</span>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default About;

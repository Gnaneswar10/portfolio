import React from 'react';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Global Electronics Retail Analytics',
      description: 'Built an interactive Power BI dashboard analyzing global sales data. Created KPIs using DAX and identified trends such as top products, revenue regions, and seasonal patterns.',
      tools: ['Power BI', 'DAX', 'Excel'],
      githubLink: 'https://github.com'
    },
    {
      title: 'Diabetes Prediction System',
      description: 'Machine learning model to predict diabetes risk. Performed comprehensive data preprocessing, feature selection, and evaluation. Successfully deployed using Streamlit for user interaction.',
      tools: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
      githubLink: 'https://github.com'
    },
    {
      title: 'Intelligent CPU Scheduler',
      description: 'Visual simulator of CPU scheduling algorithms supporting FCFS, SJF, Round Robin, and Priority scheduling. Provides real-time comparison of scheduling performance.',
      tools: ['C++', 'HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com'
    },
    {
      title: 'Swiftcart E-Commerce API',
      description: 'Engineered a tailored backend routing architecture and RESTful APIs for a robust e-commerce application platform, focusing on seamless data flow and robust user endpoints.',
      tools: ['JavaScript', 'HTML/CSS', 'Backend Routing'],
      githubLink: 'https://github.com/Gnaneswar10/swiftcart'
    }
  ];

  return (
    <PageTransition>
      <div className="page-wrapper container section-padding">
        <h2 className="section-title gradient-text">Featured Projects</h2>
        <p className="section-subtitle">
          Showcasing my work in data analytics, machine learning, and software development.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default Projects;

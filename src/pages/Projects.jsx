import React from 'react';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
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

        <motion.div 
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } }
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}

export default Projects;

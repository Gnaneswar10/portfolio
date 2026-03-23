import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Global Electronics Retail Analytics',
      problemStatement: 'The enterprise lacked visibility into their global sales performance, making it difficult to identify critical revenue-driving regions and uncover hidden underperforming product categories.',
      insights: [
        'Identified the top 3 most profitable core products driving over 40% of standard overall revenue.',
        'Revealed key seasonal purchasing patterns, empowering stakeholders to aggressively optimize inventory restocks.'
      ],
      tools: ['Power BI', 'DAX', 'Excel'],
      githubLink: 'https://github.com/Gnaneswar10/PowerBI_Report_Retail_Analytics'
    },
    {
      title: 'Diabetes Prediction System',
      problemStatement: 'Healthcare professionals urgently required an early-warning diagnostic mechanism to rapidly identify patients at high risk of developing diabetes based on complex, intersecting clinical factors.',
      insights: [
        'Engineered a highly accurate classification model, minimizing false negatives by precisely weighting patient glucose levels against BMI.',
        'Developed an interactive dashboard enabling medical practitioners to instantly input live patient data and evaluate risk probabilities.'
      ],
      tools: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
      githubLink: 'https://github.com/Gnaneswar10/Predictive_Analytics_Diabetes'
    },
    {
      title: 'SwiftCart – E-Commerce Web App',
      problemStatement: 'A modern e-commerce deployment required a scalable, secure, and lightning-fast backend REST architecture to flawlessly handle high-volume data flows across product inventories and user endpoint queries.',
      insights: [
        'Engineered a tailored backend routing network that drastically optimized database fetch speeds and response times.',
        'Established impenetrable, secure RESTful APIs seamlessly bridging the frontend rendering systems with backend SQL datastores.'
      ],
      tools: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
      githubLink: 'https://github.com/Gnaneswar10/swiftcart'
    }
  ];

  return (
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
              <ProjectCard {...project} index={index} />
            </motion.div>
          ))}
        </motion.div>
    </div>
  );
}

export default Projects;

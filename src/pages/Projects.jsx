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
      title: 'Intelligent CPU Scheduler – Scheduling the CP',
      problemStatement: 'Understanding complex Operating System scheduling algorithms like FCFS, SJF, and Round Robin can be difficult through theory alone; students need a visual, interactive way to compare their real-time performance.',
      insights: [
        'Developed an interactive simulator to visually demonstrate key CPU scheduling algorithms (FCFS, SJF, Round Robin, Priority Scheduling).',
        'Used algorithmic techniques and real-time visualizations to allow users to compare performance metrics like waiting time and turnaround time dynamically.',
        'Enhanced OS conceptual learning by providing side-by-side real-time visual comparisons of different scheduling strategies.'
      ],
      tools: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'C++'],
      githubLink: 'https://github.com/Gnaneswar10/Intelligent_CPU_scheduler'
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

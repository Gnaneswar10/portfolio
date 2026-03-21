import React from 'react';
import PageTransition from '../components/PageTransition';
import { FaLaptopCode, FaCheckCircle, FaBriefcase, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Training.css';

function Training() {
  const experiences = [
    {
      title: 'Cloud Infrastructure Training',
      organization: 'Microsoft Azure',
      status: 'Completed',
      icon: <FaCloud />,
      details: [
        "Mastered core concepts of Azure Architecture and cloud services.",
        "Awarded a trophy for Introduction to Cloud Infrastructure."
      ],
      tools: ['Azure', 'Cloud Infrastructure']
    },
    {
      title: 'Java Maestro Training',
      organization: 'Training Program',
      status: 'Completed',
      icon: <FaLaptopCode />,
      details: [
        "Developed a time-tracking system using Bootstrap, PHP, and MySQL",
        "Implemented scheduling, reminders, and workflow logic",
        "Designed a responsive UI for efficient task management"
      ],
      tools: ['Java', 'PHP', 'MySQL', 'Bootstrap']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <PageTransition>
      <div className="page-wrapper container section-padding">
        <h2 className="section-title gradient-text">Experience & Training</h2>
        <p className="section-subtitle">
          Professional internships, training, and continuous learning that enhanced my practical skills.
        </p>

        <motion.div 
          className="timeline-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} className="timeline-item glass-card" variants={itemVariants}>
              <div className="timeline-icon">
                {exp.icon}
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">{exp.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ color: 'var(--text-color)', fontWeight: '500' }}>{exp.organization}</span>
                  <span className="timeline-duration">{exp.status}</span>
                </div>
                
                <ul className="timeline-details">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="check-icon" /> {detail}
                    </li>
                  ))}
                </ul>
                
                <div className="timeline-tools">
                  {exp.tools.map((tool, idx) => (
                    <span key={idx} className="tool-badge">{tool}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}

export default Training;

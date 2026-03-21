import React from 'react';
import PageTransition from '../components/PageTransition';
import { FaLaptopCode, FaCheckCircle, FaBriefcase, FaCloud } from 'react-icons/fa';
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

  return (
    <PageTransition>
      <div className="page-wrapper container section-padding">
        <h2 className="section-title gradient-text">Experience & Training</h2>
        <p className="section-subtitle">
          Professional internships, training, and continuous learning that enhanced my practical skills.
        </p>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item glass-card">
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
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default Training;

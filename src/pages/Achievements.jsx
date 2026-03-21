import React from 'react';
import PageTransition from '../components/PageTransition';
import { FaTrophy, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Achievements.css';

function Achievements() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 900;

  const achievementsList = [
    "Awarded the trophy for 'Introduction to Cloud Infrastructure: Azure Architecture and Services'.",
    "Solved over 70+ algorithmic coding problems on LeetCode, demonstrating strong data structure proficiency.",
    "Built multiple real-world projects in Data Analytics & Machine Learning.",
    "Developed interactive dashboards that provide actionable business insights.",
    "Completed 300+ hours of certified web development and programming training."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, x: 0, 
      ...(isMobile && { boxShadow: ["var(--card-shadow)", "0 15px 40px rgba(99, 102, 241, 0.5)", "var(--card-shadow)"] }),
      transition: { 
        type: 'spring', stiffness: 100,
        ...(isMobile && { boxShadow: { duration: 1.5, times: [0, 0.3, 1] } })
      } 
    }
  };

  return (
    <PageTransition>
      <div className="page-wrapper container section-padding">
        <div className="achievements-header text-center">
          <FaTrophy className="header-icon" />
          <h2 className="section-title gradient-text">Key Achievements</h2>
          <p className="section-subtitle">
            Milestones and highlights from my academic and technical journey.
          </p>
        </div>

        <motion.div 
          className="achievements-list glass-card"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {achievementsList.map((item, index) => (
            <motion.div key={index} className="achievement-row" variants={itemVariants}>
              <div className="achievement-icon">
                <FaStar />
              </div>
              <p className="achievement-text">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}

export default Achievements;

import React from 'react';
import { FaTrophy, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Achievements.css';

const achievementsList = [
  {
    icon: '🏆',
    text: "Awarded the trophy for 'Introduction to Cloud Infrastructure: Azure Architecture and Services'.",
  },
  {
    icon: '💻',
    text: 'Solved over 70+ algorithmic coding problems on LeetCode, demonstrating strong data structure proficiency.',
  },
  {
    icon: '📊',
    text: 'Built multiple real-world projects in Data Analytics & Machine Learning.',
  },
  {
    icon: '📈',
    text: 'Developed interactive dashboards that provide actionable business insights.',
  },
  {
    icon: '🎓',
    text: 'Completed 300+ hours of certified web development and programming training.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 14 } },
};

function Achievements() {
  return (
    <div className="page-wrapper container section-padding">
      <div className="achievements-header text-center">
        <FaTrophy className="header-icon" />
        <h2 className="section-title gradient-text">Key Achievements</h2>
        <p className="section-subtitle">
          Milestones and highlights from my academic and technical journey.
        </p>
      </div>

      <motion.div
        className="achievements-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {achievementsList.map((item, index) => (
          <motion.div key={index} className="achievement-card glass-card" variants={itemVariants}>
            <div className="achievement-emoji">{item.icon}</div>
            <p className="achievement-text">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Achievements;

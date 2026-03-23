import React from 'react';
import { motion } from 'framer-motion';
import './SkillBadge.css';

function SkillBadge({ name, icon, level }) {
  return (
    <div className="skill-card glass-card">
      <div className="skill-header">
        <div className="skill-icon">{icon}</div>
        <h4 className="skill-name">{name}</h4>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-progress-bg">
        <motion.div
          className="skill-progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default SkillBadge;

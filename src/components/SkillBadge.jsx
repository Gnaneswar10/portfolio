import React from 'react';
import { motion } from 'framer-motion';
import './SkillBadge.css';

function SkillBadge({ name, icon, level }) {
  return (
    <div className="skill-card glass-card">
      <div className="skill-header">
        <div className="skill-icon">{icon}</div>
        <h4 className="skill-name">{name}</h4>
      </div>
      <div className="skill-progress-bg">
        <motion.div 
          className="skill-progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
    </div>
  );
}

export default SkillBadge;

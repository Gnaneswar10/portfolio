import React from 'react';
import PageTransition from '../components/PageTransition';
import SkillBadge from '../components/SkillBadge';
import { 
  FaPython, FaJava, FaCode, FaHtml5, FaCss3Alt, 
  FaDatabase, FaChartBar, FaBrain, FaLightbulb, 
  FaUsers, FaSyncAlt, FaLaptopCode, FaChartPie, FaCloud 
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Skills.css';

function Skills() {
  const technicalSkills = [
    { name: 'Python', icon: <FaPython color="#3776AB" />, level: 90 },
    { name: 'Java', icon: <FaJava color="#ed8b00" />, level: 85 },
    { name: 'C++', icon: <FaCode color="#00599C" />, level: 80 },
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" />, level: 95 },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" />, level: 90 },
    { name: 'Django', icon: <FaLaptopCode color="#092E20" />, level: 75 },
    { name: 'MySQL / Adv. SQL', icon: <FaDatabase color="#4479A1" />, level: 85 },
    { name: 'Power BI', icon: <FaChartPie color="#F2C811" />, level: 80 },
    { name: 'Excel', icon: <FaChartBar color="#217346" />, level: 90 },
    { name: 'Azure Cloud', icon: <FaCloud color="#0089D6" />, level: 75 },
    { name: 'Full-Stack Dev', icon: <FaLaptopCode color="#6366f1" />, level: 85 },
  ];

  const dataSkills = [
    { name: 'Data Analysis', icon: <FaChartBar color="#6366f1" />, level: 92 },
    { name: 'Data Visualization', icon: <FaChartPie color="#f43f5e" />, level: 88 },
    { name: 'Machine Learning', icon: <FaBrain color="#10b981" />, level: 80 },
    { name: 'Dashboard Dev', icon: <FaLaptopCode color="#0ea5e9" />, level: 85 },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: <FaLightbulb color="#fbbf24" />, level: 95 },
    { name: 'Leadership', icon: <FaUsers color="#8b5cf6" />, level: 85 },
    { name: 'Teamwork', icon: <FaUsers color="#ec4899" />, level: 90 },
    { name: 'Adaptability', icon: <FaSyncAlt color="#14b8a6" />, level: 90 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, scale: 1, y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 12 } 
    }
  };

  return (
    <PageTransition>
      <div className="page-wrapper container section-padding">
        <h2 className="section-title gradient-text">My Skills</h2>
        <p className="section-subtitle">
          A combination of technical expertise, data analytics proficiency, and essential soft skills.
        </p>

        <div className="skills-grid-wrapper">
          <div className="skills-section">
            <h3 className="skills-category-title">Technical Skills</h3>
            <motion.div className="skills-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {technicalSkills.map(skill => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <SkillBadge {...skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="skills-section">
            <h3 className="skills-category-title">Data Skills</h3>
            <motion.div className="skills-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {dataSkills.map(skill => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <SkillBadge {...skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="skills-section">
            <h3 className="skills-category-title">Soft Skills</h3>
            <motion.div className="skills-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {softSkills.map(skill => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <SkillBadge {...skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Skills;

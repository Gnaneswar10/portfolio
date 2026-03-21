import React from 'react';
import PageTransition from '../components/PageTransition';
import SkillBadge from '../components/SkillBadge';
import { 
  FaPython, FaJava, FaCode, FaHtml5, FaCss3Alt, 
  FaDatabase, FaChartBar, FaBrain, FaLightbulb, 
  FaUsers, FaSyncAlt, FaLaptopCode, FaChartPie, FaCloud 
} from 'react-icons/fa';
import './Skills.css';

function Skills() {
  const technicalSkills = [
    { name: 'Python', icon: <FaPython />, level: 90 },
    { name: 'Java', icon: <FaJava />, level: 85 },
    { name: 'C++', icon: <FaCode />, level: 80 },
    { name: 'HTML', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS', icon: <FaCss3Alt />, level: 90 },
    { name: 'Django', icon: <FaLaptopCode />, level: 75 },
    { name: 'MySQL / Adv. SQL', icon: <FaDatabase />, level: 85 },
    { name: 'Power BI', icon: <FaChartPie />, level: 80 },
    { name: 'Excel', icon: <FaChartBar />, level: 90 },
    { name: 'Azure Cloud', icon: <FaCloud />, level: 75 },
    { name: 'Full-Stack Dev', icon: <FaLaptopCode />, level: 85 },
  ];

  const dataSkills = [
    { name: 'Data Analysis', icon: <FaChartBar />, level: 92 },
    { name: 'Data Visualization', icon: <FaChartPie />, level: 88 },
    { name: 'Machine Learning', icon: <FaBrain />, level: 80 },
    { name: 'Dashboard Dev', icon: <FaLaptopCode />, level: 85 },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: <FaLightbulb />, level: 95 },
    { name: 'Leadership', icon: <FaUsers />, level: 85 },
    { name: 'Teamwork', icon: <FaUsers />, level: 90 },
    { name: 'Adaptability', icon: <FaSyncAlt />, level: 90 },
  ];

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
            <div className="skills-grid">
              {technicalSkills.map(skill => (
                <SkillBadge key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3 className="skills-category-title">Data Skills</h3>
            <div className="skills-grid">
              {dataSkills.map(skill => (
                <SkillBadge key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3 className="skills-category-title">Soft Skills</h3>
            <div className="skills-grid">
              {softSkills.map(skill => (
                <SkillBadge key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Skills;

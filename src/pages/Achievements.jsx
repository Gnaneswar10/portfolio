import React from 'react';
import PageTransition from '../components/PageTransition';
import { FaTrophy, FaStar } from 'react-icons/fa';
import './Achievements.css';

function Achievements() {
  const achievementsList = [
    "Awarded the trophy for 'Introduction to Cloud Infrastructure: Azure Architecture and Services'.",
    "Built multiple real-world projects in Data Analytics & Machine Learning.",
    "Developed interactive dashboards that provide actionable business insights.",
    "Completed 300+ hours of certified web development and programming training."
  ];

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

        <div className="achievements-list glass-card">
          {achievementsList.map((item, index) => (
            <div key={index} className="achievement-row">
              <div className="achievement-icon">
                <FaStar />
              </div>
              <p className="achievement-text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default Achievements;

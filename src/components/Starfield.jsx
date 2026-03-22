import React from 'react';
import './Starfield.css';

function Starfield() {
  return (
    <div className="global-starfield-bg">
      {/* Dynamic Star Distribution */}
      {[...Array(100)].map((_, i) => (
        <div 
          key={`star-${i}`} 
          className="star" 
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
      {/* Shooting Asteroids */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={`ast-${i}`} 
          className="asteroid" 
          style={{
            top: `${Math.random() * 100}%`,
            left: `-10%`,
            animationDuration: `${Math.random() * 6 + 8}s`,
            animationDelay: `${Math.random() * 15}s`
          }}
        ></div>
      ))}
    </div>
  );
}

export default Starfield;

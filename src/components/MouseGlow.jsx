import React, { useState, useEffect } from 'react';
import './MouseGlow.css';

function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for smoother performance
      window.requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="mouse-glow" 
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
    ></div>
  );
}

export default MouseGlow;

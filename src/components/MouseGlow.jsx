import React, { useEffect, useRef, useState } from 'react';
import './MouseGlow.css';

function MouseGlow() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ x: -100, y: -100 });
  const ring    = useRef({ x: -100, y: -100 });
  const rafId   = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      // Dot snaps instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top  = `${e.clientY}px`;
      }
    };

    // Detect hoverable elements
    const onOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select, label')) {
        setHovering(true);
      }
    };
    const onOut = () => setHovering(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    // Spring-lerp the ring toward the cursor
    const LERP = 0.12;
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * LERP;
      ring.current.y += (pos.current.y - ring.current.y) * LERP;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top  = `${ring.current.y}px`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Trailing spring ring */}
      <div
        ref={ringRef}
        className={`cursor-ring${hovering ? ' cursor-ring--hover' : ''}`}
      />
      {/* Snappy center dot */}
      <div
        ref={dotRef}
        className={`cursor-dot${hovering ? ' cursor-dot--hover' : ''}`}
      />
    </>
  );
}

export default MouseGlow;

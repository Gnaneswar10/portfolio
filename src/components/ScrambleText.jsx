import React, { useEffect, useState, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?';

function buildFrame(target, progress) {
  // Left side = locked-in real chars, right side = random scramble
  const locked = Math.floor(progress * target.length);
  return target
    .split('')
    .map((char, i) => {
      if (char === ' ') return ' ';
      if (i < locked) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join('');
}

/**
 * Props:
 *   phrases: string[]   — list of phrases to cycle through
 *   className: string   — CSS class for the span
 *   scrambleDuration: number  — ms to scramble (default 1000)
 *   holdDuration: number      — ms to hold final text (default 2200)
 */
function ScrambleText({
  phrases,
  className,
  scrambleDuration = 1000,
  holdDuration = 2200,
}) {
  const [display, setDisplay] = useState('');
  const phraseIdx = useRef(0);
  const rafId     = useRef(null);
  const timerRef  = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const runPhrase = () => {
      const phrase = phrases[phraseIdx.current];
      let startTime = null;

      const tick = (now) => {
        if (cancelled) return;
        if (!startTime) startTime = now;
        const elapsed  = now - startTime;
        const progress = Math.min(elapsed / scrambleDuration, 1);

        setDisplay(buildFrame(phrase, progress));

        if (progress < 1) {
          rafId.current = requestAnimationFrame(tick);
        } else {
          setDisplay(phrase); // ensure a clean final frame
          timerRef.current = setTimeout(() => {
            if (cancelled) return;
            phraseIdx.current = (phraseIdx.current + 1) % phrases.length;
            runPhrase();
          }, holdDuration);
        }
      };

      rafId.current = requestAnimationFrame(tick);
    };

    runPhrase();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId.current);
      clearTimeout(timerRef.current);
    };
  }, [phrases, scrambleDuration, holdDuration]);

  return <span className={className}>{display}</span>;
}

export default ScrambleText;

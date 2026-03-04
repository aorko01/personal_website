'use client';

import { useEffect, useRef } from 'react';

export default function SkillBar({ name, level, status }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = `${level}%`;
          }
        });
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className={`skill-badge ${status}`}>{status}</span>
      </div>
      <div className="skill-bar-bg">
        <div
          ref={barRef}
          className="skill-bar-fill"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}

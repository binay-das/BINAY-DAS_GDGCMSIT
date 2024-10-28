// ProgressBar.jsx
import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <div className="progress-container fixed top-0 left-0 w-full h-[15px] bg-black/10 z-[9999]">
      <div
        className="progress-bar fixed top-0 left-0 w-0 h-[7px] rounded-lg transition-all duration-[90ms] ease-in-out bg-gradient-to-r from-blue-600 via-blue-300 to-cyan-400 shadow-[0_0_4px_rgba(0,166,255,0.7),_0_0_10px_rgba(255,255,255,0.7)]"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

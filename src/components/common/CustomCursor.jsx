import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const dotsRef = useRef([]);

  useEffect(() => {
    const updateCursorPosition = (clientX, clientY) => {
      setCursor({
        x: clientX + window.scrollX,
        y: clientY + window.scrollY,
      });
    };

    const handleMouseMove = (e) => {
      updateCursorPosition(e.clientX, e.clientY);
    };

    const handleScroll = () => {
      // Recalculate the cursor's position to keep the dots in the same spot during scroll
      setCursor((prevCursor) => ({
        x: prevCursor.x,
        y: prevCursor.y,
      }));
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    const draw = () => {
      let { x, y } = cursor;

      dotsRef.current.forEach((dot, index) => {
        const nextDot = dotsRef.current[index + 1] || dotsRef.current[0];

        dot.style.left = `${x - 8}px`;
        dot.style.top = `${y - 10}px`;

        x += (nextDot.offsetLeft - dot.offsetLeft) * 0.3;
        y += (nextDot.offsetTop - dot.offsetTop) * 0.3;

        dot.style.transform = `scale(${1 - index * 0.01})`;
      });
    };

    const intervalId = setInterval(draw, 1);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cursor]);

  return (
    <>
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="dot absolute z-[1000] rounded-full pointer-events-none bg-[#7fffd4] transition-transform transition-opacity duration-100 ease-linear will-change-transform will-change-opacity"
          style={{
            width: `${24 - i * 0.3}px`,
            height: `${24 - i * 0.3}px`,
            opacity: `${1 - i * 0.02}`,
          }}
        />
      ))}
    </>
  );
}
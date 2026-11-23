import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    // Only enable custom cursor on devices with fine pointer (mouse) and no reduced motion
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);
    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Track hoverable targets
    const handleMouseOver = (e) => {
      const targetEl = e.target.closest('a, button, [role="button"], input, textarea, select, .interactive, .project-card, .tech-card');
      if (targetEl) {
        setHovered(true);
        const customText = targetEl.getAttribute('data-cursor-text');
        setCursorText(customText || '');
      } else {
        setHovered(false);
        setCursorText('');
      }
    };

    // Smooth Lerp animation for trailing ring
    const render = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    animFrameId.current = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={cursorDotRef}
        className={`custom-cursor-dot ${hovered ? 'is-hovered' : ''} ${clicked ? 'is-clicked' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={cursorRingRef}
        className={`custom-cursor-ring ${hovered ? 'is-hovered' : ''} ${clicked ? 'is-clicked' : ''}`}
        aria-hidden="true"
      >
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </div>
    </>
  );
}

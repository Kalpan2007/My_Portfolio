// src/components/CustomCursor.tsx
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  // Optimize spring config for better performance
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    let rafId: number;
    const checkMobile = () => window.innerWidth <= 768;
    setIsMobile(checkMobile());

    const moveHandler = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });
    };

    if (!checkMobile()) {
      window.addEventListener('mousemove', moveHandler, { passive: true });
    }

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none will-change"
      style={{ x: springX, y: springY }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_10px_cyan] will-change-transform"
      >
        <path
          d="M2 2 L28 12 L20 16 L24 28 L16 20 L2 28 Z"
          fill="#00ffff"
          stroke="#00ffff"
          strokeWidth="0.5"
        />
      </svg>
    </motion.div>
  );
};

export default CustomCursor;

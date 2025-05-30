// src/components/CustomCursor.tsx
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);

    const moveHandler = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    if (!checkMobile) {
      window.addEventListener('mousemove', moveHandler);
    }

    return () => {
      if (!checkMobile) {
        window.removeEventListener('mousemove', moveHandler);
      }
    };
  }, []);

  if (isMobile) return null;

  const springX = useSpring(cursorX, { damping: 20, stiffness: 300 });
  const springY = useSpring(cursorY, { damping: 20, stiffness: 300 });

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none"
      style={{
        x: springX,
        y: springY,
        translateX: '-10px',
        translateY: '-10px',
      }}
    >
      {/* Sharper Cursor Shape with Clean Glow */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_10px_cyan]"
      >
        {/* Sharper Cursor Path */}
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

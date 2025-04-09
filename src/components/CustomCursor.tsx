import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    const hoverElements = document.querySelectorAll('a, button, .group');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', () => setIsHovering(true));
      el.addEventListener('mouseleave', () => setIsHovering(false));
    });
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 12, // Offset to center the cursor
        y: mousePosition.y - 12,
        scale: isHovering ? 1.5 : 1,
        opacity: 0.8,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      <div
        className={`w-6 h-6 rounded-full border-2 ${
          isHovering ? 'border-blue-400 bg-blue-400/20' : 'border-gray-400 bg-gray-400/20'
        }`}
      />
    </motion.div>
  );
};

export default CustomCursor;
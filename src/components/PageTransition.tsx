import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const isMobile = window.innerWidth <= 768;

  const variants = {
    initial: {
      opacity: 0,
      y: isMobile ? 0 : 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: isMobile ? 0 : -20,
      transition: {
        duration: isMobile ? 0.2 : 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
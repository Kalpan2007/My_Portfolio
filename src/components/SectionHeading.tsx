import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  icon?: ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      {icon && (
        <div className="bg-gray-800 p-3 rounded-xl mb-4">
          {icon}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold relative">
        {title}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></span>
      </h2>
    </motion.div>
  );
};
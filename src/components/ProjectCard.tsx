// src/components/ProjectCard.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // If you're using a utility function for conditional classnames (optional)

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  demoLink: string;
  codeLink: string;
  image: string;  // Assuming you want to display an image for the project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  demoLink,
  codeLink,
  image,
}) => {
  const [transform, setTransform] = useState("rotateX(0deg)");

  const handleMouseEnter = () => {
    setTransform("rotateX(15deg) scale(1.05)");
  };

  const handleMouseLeave = () => {
    setTransform("rotateX(0deg) scale(1)");
  };

  return (
    <motion.div
      className="relative w-72 h-96 bg-black rounded-xl overflow-hidden shadow-lg group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `perspective(800px) ${transform}` }}
    >
      <img src={image} alt={title} className="w-full h-1/2 object-cover" />
      
      <div className="p-4 text-white flex flex-col h-full justify-between">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-slate-300">{description}</p>
        
        <div className="flex space-x-2 text-sm text-gray-400">
          {techStack.map((tech) => (
            <span key={tech} className="bg-gray-800 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex justify-between">
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View Demo</a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">View Code</a>
        </div>
      </div>
    </motion.div>
  );
};

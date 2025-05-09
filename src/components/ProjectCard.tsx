import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the props interface for the ProjectCard component
interface ProjectCardProps {
  children: React.ReactNode;
  title: string;
  href?: string;
  className?: string;
}

// Custom class name combiner utility function
const cns = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

// Project Card Component (with all the 3D pin effects)
const ProjectCard: React.FC<ProjectCardProps> = ({ children, title, href, className }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="relative cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pin Head */}
      <motion.div
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 z-20"
        style={{
          boxShadow: isHovered 
            ? "0 0 12px rgba(34, 211, 238, 0.6), 0 0 4px rgba(34, 211, 238, 0.8) inset" 
            : "0 0 0 rgba(0,0,0,0)",
          transformStyle: "preserve-3d",
          transform: isHovered 
            ? "translateZ(70px) scale(1.1)" 
            : "translateZ(0px) scale(0)",
          opacity: isHovered ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
      />
      
      {/* Pin Stem */}
      <motion.div
        className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-16 z-10"
        style={{
          background: "linear-gradient(to bottom, #22d3ee, transparent)",
          boxShadow: isHovered ? "0 0 8px rgba(34, 211, 238, 0.3)" : "none",
          transformStyle: "preserve-3d",
          transformOrigin: "top center",
          transform: isHovered 
            ? "translateZ(50px) scaleY(1.1)" 
            : "translateZ(0px) scaleY(0)",
          opacity: isHovered ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
      />

      {/* Floating View Project Button - Now at top near pin */}
      <motion.div
        className="absolute top-6 left-1/2 transform -translate-x-1/2 z-30"
        style={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : -10,
          transition: "all 0.4s ease-out",
          transformStyle: "preserve-3d",
          transform: isHovered 
            ? "translateZ(80px)" 
            : "translateZ(0px)",
        }}
      >
        <a
          href={href || "#"}
          className="px-4 py-1.5 bg-cyan-500/90 rounded-full text-xs font-medium text-white flex items-center gap-1 border border-cyan-300/30"
          style={{ boxShadow: "0 0 15px rgba(34, 211, 238, 0.4)" }}
        >
          <span>View Project</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </motion.div>

      {/* Card */}
      <motion.div
        className={cns(
          "relative backdrop-blur-sm rounded-xl border",
          "transition-all duration-500 ease-out",
          className || "h-64"
        )}
        style={{
          background: "linear-gradient(to bottom right, rgba(8, 145, 178, 0.1), rgba(14, 116, 144, 0.05))",
          borderColor: isHovered ? "rgba(34, 211, 238, 0.3)" : "rgba(34, 211, 238, 0.1)",
          transformStyle: "preserve-3d",
          transformOrigin: "center top",
          transform: isHovered 
            ? "rotateX(25deg) scale(0.95)" 
            : "rotateX(0deg) scale(1)",
          boxShadow: isHovered 
            ? "0 20px 25px -5px rgba(6, 182, 212, 0.15), 0 30px 30px -20px rgba(0,0,0,0.5)" 
            : "0 0 0 rgba(0,0,0,0)",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
      >
        {/* Card Content with Z-translation */}
        <motion.div
          className="p-6 relative z-10"
          style={{
            transformStyle: "preserve-3d",
            transform: isHovered 
              ? "translateZ(30px)" 
              : "translateZ(0px)",
            transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
        >
          {children}
        </motion.div>

        {/* Enhanced cyan glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.15), transparent 70%)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.4s ease-out",
          }}
        />
        
        {/* Pin Impact Point (small circle where pin enters card) */}
        <motion.div
          className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400/80"
          style={{
            opacity: isHovered ? 1 : 0,
            boxShadow: "0 0 8px rgba(34, 211, 238, 0.7)",
            transition: "all 0.4s ease-out",
          }}
        />
      </motion.div>
    </div>
  );
};

export default ProjectCard;
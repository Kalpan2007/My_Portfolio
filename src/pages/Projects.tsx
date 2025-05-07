"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react"; // Import for title icon
import { cns } from "../lib/utils";

// Project data array
const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio built with React and Tailwind CSS",
    href: "https://yourportfolio.com",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "path/to/image"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    href: "https://project2.com",
    tags: ["Next.js", "MongoDB", "Stripe"],
    image: "path/to/image"
  },
  // Add more projects up to 9...
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-100 py-20 px-4">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code2 className="w-8 h-8 text-blue-500" />
          <h1 className="text-4xl font-bold">Projects</h1>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my collection of projects that showcase my skills in web development,
          design, and problem-solving.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            href={project.href}
            className="h-[300px] group"
          >
            <div className="space-y-4">
              <div className="relative h-32 w-full overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ProjectCard>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({
  children,
  title,
  href,
  className,
}: {
  children: React.ReactNode;
  title: string;
  href: string;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={cns(
          "relative bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800",
          "transition-all duration-500 ease-out origin-top",
          className
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered 
            ? "rotateX(30deg) scale(0.9)"
            : "rotateX(0deg) scale(1)",
        }}
      >
        {/* Pin Effect */}
        <motion.div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-20"
          style={{
            background: "linear-gradient(to bottom, #22d3ee, transparent)",
            transformStyle: "preserve-3d",
            transform: isHovered 
              ? "translateZ(50px)" 
              : "translateZ(0px)",
            opacity: isHovered ? 1 : 0,
            transition: "all 0.3s ease-out",
          }}
        />
        <motion.div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400"
          style={{
            transformStyle: "preserve-3d",
            transform: isHovered 
              ? "translateZ(60px)" 
              : "translateZ(0px)",
            opacity: isHovered ? 1 : 0,
            transition: "all 0.3s ease-out",
            boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
          }}
        />

        {/* Card Content with Z-translation */}
        <motion.div
          className="p-6"
          style={{
            transformStyle: "preserve-3d",
            transform: isHovered 
              ? "translateZ(30px)" 
              : "translateZ(0px)",
            transition: "transform 0.3s ease-out",
          }}
        >
          {children}
        </motion.div>

        {/* Enhanced shadow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
          }}
        />
      </motion.div>

      {/* Floating Title */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
        style={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 20,
          transition: "all 0.3s ease-out",
          transformStyle: "preserve-3d",
          transform: isHovered 
            ? "translateZ(40px)" 
            : "translateZ(0px)",
        }}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-900/90 rounded-full text-sm font-medium text-gray-200 whitespace-nowrap"
        >
          {title}
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;
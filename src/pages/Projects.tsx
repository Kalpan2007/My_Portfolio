import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import ProjectCard from "../components/Projectcard"; // Import the improved ProjectCard component
import { BottomNav } from '../components/BottomNav';
import PageTransition from "../components/PageTransition";
// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio built with React and Tailwind CSS",
    href: "https://yourportfolio.com",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "/api/placeholder/400/320"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    href: "https://project2.com",
    tags: ["Next.js", "MongoDB", "Stripe"],
    image: "/api/placeholder/400/320"
  },
  {
    id: 3,
    title: "Aceternity UI",
    description: "Customizable Tailwind CSS and Framer Motion Components",
    href: "/ui.aceternity.com",
    tags: ["React", "Tailwind", "Design System"],
    image: "/api/placeholder/400/320"
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <PageTransition>
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
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            href={project.href}
            className="h-64 md:h-80 group"
          >
            <div className="space-y-4">
              <div className="relative h-32 w-full overflow-hidden rounded-lg border border-cyan-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-cyan-50">{project.title}</h3>
              <p className="text-cyan-200/70 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-cyan-900/50 border border-cyan-500/20 rounded-full text-cyan-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ProjectCard>
        ))}
      </div>
      
      <BottomNav />
    </div>
    </PageTransition>
  );
};

export default Projects;
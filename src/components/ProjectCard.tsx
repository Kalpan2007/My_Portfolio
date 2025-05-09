import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

// Custom class name combiner utility function
const cns = (...classes) => classes.filter(Boolean).join(" ");

// Project Card Component (with all the 3D pin effects)
const ProjectCard = ({ children, title, href, className }) => {
  const [isHovered, setIsHovered] = React.useState(false);

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

// Demo of example project cards with the new cyan theme
export default function CyanThemedProjectCardsDemo() {
  // Sample projects for demo
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern portfolio built with React and Tailwind CSS",
      tags: ["React", "Tailwind", "Framer Motion"],
      image: "/api/placeholder/400/320"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tags: ["Next.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/400/320"
    },
    {
      id: 3,
      title: "Aceternity UI",
      description: "Customizable Tailwind CSS and Framer Motion Components",
      tags: ["React", "Tailwind", "Design System"],
      image: "/api/placeholder/400/320"
    }
  ];

  return (
    <div className="bg-[#0f172a] p-8 min-h-screen">
      {/* Title Section */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <Code2 className="w-6 h-6 text-cyan-400" />
        <h1 className="text-2xl font-bold text-white">Cyan 3D Project Cards</h1>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} title={project.title} href="#">
            <div className="space-y-4">
              <div className="relative h-32 w-full overflow-hidden rounded-lg border border-cyan-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
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
    </div>
  );
}
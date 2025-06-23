import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import ProjectCard from '../components/ProjectCard';
import ProjectModal, { ProjectDetail } from "../components/ProjectModel";
import { BottomNav } from "../components/BottomNav";
import PageTransition from "../components/PageTransition";
import ProjectsData from "../Project_Data/Data";

const categoryOptions = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "React", value: "react" },
];

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [type, setType] = useState<"development" | "uiux">("development");
  const [category, setCategory] = useState("all");

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filtered projects
  const filteredProjects = ProjectsData.filter(
    (project) =>
      project.type === type &&
      (type === "uiux" ||
        category === "all" ||
        (project.category && project.category === category))
  );

  const openProjectModal = (project: ProjectDetail) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0f172a] text-gray-100 pt-16 pb-24 px-3 sm:px-4 md:py-20">
        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto">
          {/* Toggle Button */}
          <div className="flex gap-2">
            <button
              className={`px-4 py-1.5 rounded-l-full font-semibold transition-colors ${
                type === "development"
                  ? "bg-cyan-600 text-white"
                  : "bg-slate-800 text-cyan-300"
              }`}
              onClick={() => setType("development")}
            >
              Development
            </button>
            <button
              className={`px-4 py-1.5 rounded-r-full font-semibold transition-colors ${
                type === "uiux"
                  ? "bg-cyan-600 text-white"
                  : "bg-slate-800 text-cyan-300"
              }`}
              onClick={() => setType("uiux")}
            >
              UI/UX
            </button>
          </div>
          {/* Category Dropdown (only for development) */}
          {type === "development" && (
            <select
              className="px-3 py-1.5 rounded-md bg-slate-800 text-cyan-200 border border-cyan-500/20 outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categoryOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
            <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base px-4">
            Explore my collection of projects that showcase my skills in web development,
            design, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              href={project.liveUrl}
              className="h-[280px] md:h-80"
              onClick={() => openProjectModal(project)}
              project={project}
              isMobile={isMobile}
            >
              <div className="space-y-3 md:space-y-4">
                <div className="relative h-28 md:h-32 w-full overflow-hidden rounded-lg border border-cyan-500/20">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent"></div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-cyan-50 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-cyan-200/70 text-xs md:text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.tags.slice(0, isMobile ? 3 : 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] md:text-xs px-2 py-0.5 md:py-1 bg-cyan-900/50 
                               border border-cyan-500/20 rounded-full text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > (isMobile ? 3 : 4) && (
                    <span className="text-[10px] md:text-xs text-cyan-300">
                      +{project.tags.length - (isMobile ? 3 : 4)} more
                    </span>
                  )}
                </div>
              </div>
            </ProjectCard>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeProjectModal}
          project={selectedProject}
          isMobile={isMobile}
        />

        <BottomNav />
      </div>
    </PageTransition>
  );
};

export default Projects;
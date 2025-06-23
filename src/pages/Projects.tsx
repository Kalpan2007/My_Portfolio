import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Filter, ChevronDown, X } from "lucide-react";
import ProjectCard from '../components/ProjectCard';
import ProjectModal, { ProjectDetail } from "../components/ProjectModel";
import { BottomNav } from "../components/BottomNav";
import PageTransition from "../components/PageTransition";
import ProjectsData from "../Project_Data/Data";

const categoryOptions = [
  { label: "All Projects", value: "all", icon: "🚀" },
  { label: "Full Stack", value: "fullstack", icon: "⚡" },
  { label: "Frontend", value: "frontend", icon: "🎨" },
  { label: "Backend", value: "backend", icon: "⚙️" },
  { label: "React", value: "react", icon: "⚛️" },
];

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [type, setType] = useState<"development" | "uiux">("development");
  const [category, setCategory] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  const handleCategorySelect = (value: string) => {
    setCategory(value);
    setIsDropdownOpen(false);
  };

  const selectedCategoryOption = categoryOptions.find(opt => opt.value === category) || categoryOptions[0];

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0f172a] text-gray-100 pt-16 pb-24 px-3 sm:px-4 md:py-20">
        {/* Enhanced Filter Bar */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-slate-900/50 to-slate-800/30 border border-cyan-500/20 backdrop-blur-sm">
            
            {/* Project Type Toggle */}
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-cyan-400" />
              <div className="relative bg-slate-800/50 rounded-full p-1 border border-cyan-500/30">
                <div className="flex">
                  <button
                    className={`relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                      type === "development"
                        ? "text-white"
                        : "text-cyan-300 hover:text-white"
                    }`}
                    onClick={() => setType("development")}
                  >
                    {type === "development" && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full shadow-lg shadow-cyan-500/30"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      💻 Development
                    </span>
                  </button>
                  <button
                    className={`relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                      type === "uiux"
                        ? "text-white"
                        : "text-cyan-300 hover:text-white"
                    }`}
                    onClick={() => setType("uiux")}
                  >
                    {type === "uiux" && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full shadow-lg shadow-cyan-500/30"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      🎨 UI/UX
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Category Dropdown (only for development) */}
            {type === "development" && (
              <div className="dropdown-container relative">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 min-w-[200px] cursor-none"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="text-2xl">{selectedCategoryOption.icon}</span>
                  <span className="text-cyan-100 font-medium flex-1 text-left">
                    {selectedCategoryOption.label}
                  </span>
                  <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50"
                    >
                      <div className="p-2">
                        {categoryOptions.map((option, index) => (
                          <motion.button
                            key={option.value}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ 
                              backgroundColor: "rgba(6, 182, 212, 0.1)",
                              x: 4
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 cursor-none ${
                              category === option.value
                                ? "bg-cyan-600/20 text-cyan-300 border border-cyan-500/30"
                                : "text-gray-300 hover:text-white"
                            }`}
                            onClick={() => handleCategorySelect(option.value)}
                          >
                            <span className="text-xl">{option.icon}</span>
                            <span className="font-medium">{option.label}</span>
                            {category === option.value && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                              />
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Project Count */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
              <span className="text-sm text-gray-400">Projects:</span>
              <motion.span 
                key={filteredProjects.length}
                initial={{ scale: 1.2, color: "#06b6d4" }}
                animate={{ scale: 1, color: "#ffffff" }}
                className="text-sm font-bold"
              >
                {filteredProjects.length}
              </motion.span>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="p-3 rounded-xl bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30"
            >
              <Code2 className="w-8 h-8 text-cyan-400" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              My Projects
            </h1>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4 leading-relaxed">
            Explore my collection of projects that showcase my skills in web development,
            design, and problem-solving. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Projects Grid with Enhanced Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  y: -50, 
                  scale: 0.9,
                  transition: { duration: 0.3 }
                }}
                whileHover={{ y: -8 }}
              >
                <ProjectCard
                  title={project.title}
                  href={project.liveUrl}
                  className="h-[320px] md:h-[350px]"
                  onClick={() => openProjectModal(project)}
                  project={project}
                >
                  <div className="space-y-4">
                    <div className="relative h-32 md:h-36 w-full overflow-hidden rounded-lg border border-cyan-500/20 group">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-lg md:text-xl font-bold text-cyan-50 line-clamp-1 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-cyan-200/70 text-sm md:text-base line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, isMobile ? 3 : 4).map((tag, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="text-xs px-3 py-1.5 bg-gradient-to-r from-cyan-900/50 to-blue-900/30 
                                     border border-cyan-500/30 rounded-full text-cyan-200 
                                     hover:border-cyan-400/50 transition-all duration-200"
                          >
                            {tag}
                          </motion.span>
                        ))}
                        {project.tags.length > (isMobile ? 3 : 4) && (
                          <span className="text-xs text-cyan-400 font-medium">
                            +{project.tags.length - (isMobile ? 3 : 4)} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </ProjectCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No Projects Found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more projects.</p>
          </motion.div>
        )}

        {/* Project Modal */}
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeProjectModal}
          project={selectedProject}
        />

        <BottomNav />
      </div>
    </PageTransition>
  );
};

export default Projects;
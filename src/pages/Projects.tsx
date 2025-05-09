import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import ProjectCard from "../components/Projectcard";
import ProjectModal, { ProjectDetail } from "../components/ProjectModel";
import { BottomNav } from "../components/BottomNav";
import PageTransition from "../components/PageTransition";
import projectsData from "../Project_Data/Data"; // Import the detailed project data

const Projects: React.FC = () => {
  // State for controlling the modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  // Function to open the modal with the selected project
  const openProjectModal = (project: ProjectDetail) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

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
            <Code2 className="w-8 h-8 text-cyan-400" />
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
              href={project.liveUrl}
              className="h-64 md:h-80"
              onClick={() => openProjectModal(project)}
              project={project}
            >
              <div className="space-y-4">
                <div className="relative h-32 w-full overflow-hidden rounded-lg border border-cyan-500/20">
                  <img
                    src={project.images[0]}
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
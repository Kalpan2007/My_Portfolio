import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Play } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetail | null;
}

export interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  images: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  technologies?: string[];
  features?: string[];
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Reset state when modal opens with new project
  useEffect(() => {
    if (isOpen) {
      setActiveImageIndex(0);
      setIsVideoPlaying(false);
    }
  }, [isOpen, project?.id]);
  
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: { 
                type: "spring", 
                damping: 25, 
                stiffness: 300 
              }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.95, 
              y: 10,
              transition: { duration: 0.2 }
            }}
            className="fixed inset-0 sm:inset-10 md:inset-20 z-50 overflow-hidden" // Updated insets
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 h-full overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 rounded-none sm:rounded-xl"> {/* Removed rounded corners on mobile */}
              {/* Close button - moved for better mobile access */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="fixed top-4 right-4 p-2 rounded-full bg-slate-800/90 border border-slate-700 z-50 text-gray-400 hover:text-white"
                onClick={onClose}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
              
              <div className="h-full overflow-y-auto custom-scrollbar">
                <div className="p-4 sm:p-6 md:p-8"> {/* Adjusted padding for mobile */}
                  {/* Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
                    className="mt-8 sm:mt-0" // Added top margin on mobile for close button
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h2>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 bg-cyan-900/50 border border-cyan-500/20 rounded-full text-cyan-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Media Section - adjusted heights */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.2 } }}
                    className="mb-6 sm:mb-8 relative"
                  >
                    <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden border border-cyan-500/20 bg-slate-800/40">
                      {/* Handle video content */}
                      {project.videoUrl && activeImageIndex === project.images.length && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          {isVideoPlaying ? (
                            <iframe 
                              src={`${project.videoUrl}?autoplay=1`} 
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                              <div className="p-4 rounded-full bg-cyan-600/80 backdrop-blur-sm shadow-lg shadow-cyan-500/30">
                                <Play className="w-12 h-12" />
                              </div>
                              <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors" />
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* Images */}
                      {activeImageIndex < project.images.length && (
                        <img
                          src={project.images[activeImageIndex]}
                          alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      )}
                      
                      {/* Image Navigation Arrows */}
                      {project.images.length > 1 && (
                        <>
                          <button 
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                            onClick={() => {
                              const totalItems = project.videoUrl ? project.images.length + 1 : project.images.length;
                              setActiveImageIndex((prev) => (prev - 1 + totalItems) % totalItems);
                              setIsVideoPlaying(false);
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button 
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                            onClick={() => {
                              const totalItems = project.videoUrl ? project.images.length + 1 : project.images.length;
                              setActiveImageIndex((prev) => (prev + 1) % totalItems);
                              setIsVideoPlaying(false);
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                    
                    {/* Thumbnails - adjusted for mobile */}
                    {(project.images.length > 1 || project.videoUrl) && (
                      <div className="flex gap-1.5 sm:gap-2 mt-2 sm:mt-3 overflow-x-auto pb-2 custom-scrollbar">
                        {project.images.map((img, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`h-14 sm:h-16 w-20 sm:w-24 flex-shrink-0 rounded-md overflow-hidden border-2 cursor-pointer transition-all
                              ${activeImageIndex === idx ? 'border-cyan-500 shadow-md shadow-cyan-500/30' : 'border-slate-700'}`}
                            onClick={() => {
                              setActiveImageIndex(idx);
                              setIsVideoPlaying(false);
                            }}
                          >
                            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                  
                  {/* Project Information - adjusted grid for mobile */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Left Column - Description */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                      className="lg:col-span-2"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Project Overview</h3>
                      <div className="prose prose-sm prose-invert max-w-none">
                        <p className="text-sm sm:text-base text-gray-300">{project.longDescription || project.description}</p>
                        
                        {/* Features with adjusted spacing */}
                        {project.features && project.features.length > 0 && (
                          <div className="mt-4 sm:mt-6">
                            <h4 className="text-base sm:text-lg font-medium text-white mb-2">Key Features</h4>
                            <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base text-gray-300">
                              {project.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                    
                    {/* Right Column - Technical Details & Links */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
                      className="space-y-6"
                    >
                      {/* Tech Stack */}
                      {project.technologies && project.technologies.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-2 py-1 bg-slate-800 border border-slate-700 rounded-full text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Links */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Links</h3>
                        <div className="space-y-2">
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors text-white"
                            >
                              <Github className="w-5 h-5" />
                              <span>View Source Code</span>
                            </a>
                          )}
                          
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-cyan-800 hover:bg-cyan-700 rounded-lg border border-cyan-700 transition-colors text-white"
                            >
                              <ExternalLink className="w-5 h-5" />
                              <span>Live Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
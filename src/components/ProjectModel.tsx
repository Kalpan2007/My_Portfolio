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
  figmaUrl?: string;
  type?: string;
}

// Helper function to get YouTube embed URL
function getEmbedUrl(url: string) {
  if (!url) return "";
  if (url.includes("youtube.com/watch?v=")) {
    const id = url.split("v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  return url;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile for modal-specific behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Enhanced state reset with scroll position reset
  useEffect(() => {
    if (isOpen) {
      setActiveImageIndex(0);
      setIsVideoPlaying(false);
      
      // Reset scroll position when modal opens
      setTimeout(() => {
        const modalContent = document.querySelector('.modal-scrollable-content');
        if (modalContent) {
          modalContent.scrollTop = 0;
        }
      }, 100);
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

  // Prevent body scroll when modal is open and ensure modal can scroll
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = "0";
    } else {
      // Restore body scroll
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isOpen]);

  if (!project) return null;

  const modalVariants = {
    initial: { opacity: 0, scale: isMobile ? 1 : 0.9, y: isMobile ? 50 : 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: isMobile ? "tween" : "spring", 
        damping: isMobile ? undefined : 25, 
        stiffness: isMobile ? undefined : 300,
        duration: isMobile ? 0.3 : undefined
      }
    },
    exit: { 
      opacity: 0, 
      scale: isMobile ? 1 : 0.95, 
      y: isMobile ? 50 : 10,
      transition: { duration: isMobile ? 0.2 : 0.2 }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]"
            onClick={onClose}
          />

          {/* Modal Container - Fixed positioning with proper overflow */}
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
            <motion.div
              key={project.id}
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative w-full h-full max-w-6xl max-h-full bg-gradient-to-br from-slate-900 to-slate-950 rounded-none sm:rounded-xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - Fixed position */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/90 border border-slate-700 z-[110] text-gray-400 hover:text-white"
                onClick={onClose}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              {/* Scrollable Content Container */}
              <div className="modal-scrollable-content h-full overflow-y-auto overflow-x-hidden">
                <div className="p-4 sm:p-6 md:p-8 min-h-full">
                  {/* Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
                    className="mt-8 sm:mt-0 mb-6"
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

                  {/* Media Section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.2 } }}
                    className="mb-6 sm:mb-8 relative"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-cyan-500/20 bg-slate-800/40">
                      {/* Show video as first item if available */}
                      {project.videoUrl && activeImageIndex === 0 ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          {isVideoPlaying ? (
                            <div className="w-full h-full">
                              <iframe
                                src={`${getEmbedUrl(project.videoUrl)}?autoplay=1`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          ) : (
                            <div
                              className="absolute inset-0 flex items-center justify-center cursor-pointer"
                              onClick={() => setIsVideoPlaying(true)}
                            >
                              <div className="p-4 rounded-full bg-cyan-600/80 backdrop-blur-sm shadow-lg shadow-cyan-500/30">
                                <Play className="w-12 h-12" />
                              </div>
                              <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors" />
                            </div>
                          )}
                        </div>
                      ) : (
                        <img
                          src={
                            project.videoUrl
                              ? project.images[activeImageIndex - 1]
                              : project.images[activeImageIndex]
                          }
                          alt={`${project.title} screenshot ${project.videoUrl ? activeImageIndex : activeImageIndex + 1}`}
                          className="w-full h-full object-contain bg-black"
                        />
                      )}

                      {/* Navigation Arrows */}
                      {(project.images.length > 1 || project.videoUrl) && (
                        <>
                          <button
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                            onClick={() => {
                              const totalItems = project.images.length + (project.videoUrl ? 1 : 0);
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
                              const totalItems = project.images.length + (project.videoUrl ? 1 : 0);
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

                    {/* Thumbnails */}
                    {(project.images.length > 1 || project.videoUrl) && (
                      <div className="flex gap-1.5 sm:gap-2 mt-2 sm:mt-3 overflow-x-auto pb-2">
                        {project.videoUrl && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`h-14 sm:h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border-2 cursor-pointer transition-all
                              ${activeImageIndex === 0 ? 'border-cyan-500 shadow-md shadow-cyan-500/30' : 'border-slate-700'}`}
                            onClick={() => {
                              setActiveImageIndex(0);
                              setIsVideoPlaying(false);
                            }}
                          >
                            <div className="w-full h-full flex items-center justify-center bg-black">
                              <Play className="w-8 h-8 text-cyan-400" />
                            </div>
                          </motion.div>
                        )}
                        {project.images.map((img, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`h-14 sm:h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border-2 cursor-pointer transition-all
                              ${activeImageIndex === (project.videoUrl ? idx + 1 : idx) ? 'border-cyan-500 shadow-md shadow-cyan-500/30' : 'border-slate-700'}`}
                            onClick={() => {
                              setActiveImageIndex(project.videoUrl ? idx + 1 : idx);
                              setIsVideoPlaying(false);
                            }}
                          >
                            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>

                  {/* Project Information */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Left Column - Description */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                      className="lg:col-span-2"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Project Overview</h3>
                      <div className="prose prose-sm prose-invert max-w-none">
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{project.longDescription || project.description}</p>

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

                      {/* Links Section */}
                      <div className="flex flex-wrap gap-3 mt-6">
                        {project.type === "uiux" ? (
                          project.figmaUrl && (
                            <a
                              href={project.figmaUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-900 border-2 border-cyan-400 text-cyan-400 font-bold shadow-lg hover:shadow-cyan-400/50 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <rect x="4" y="2" width="6" height="6" rx="3" fill="#ff7262"/>
                                <rect x="4" y="8" width="6" height="6" rx="3" fill="#a259ff"/>
                                <rect x="4" y="14" width="6" height="6" rx="3" fill="#1abcfe"/>
                                <rect x="10" y="2" width="6" height="6" rx="3" fill="#0acf83"/>
                                <circle cx="13" cy="11" r="3" fill="#f24e1e"/>
                              </svg>
                              <span>View on Figma</span>
                              <div className="group-hover:translate-x-1 transition-transform duration-200">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M7 17L17 7"/>
                                  <path d="M7 7h10v10"/>
                                </svg>
                              </div>
                            </a>
                          )
                        ) : (
                          <>
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-900 border-2 border-gray-500 text-gray-300 font-bold shadow-lg hover:shadow-gray-500/50 hover:bg-gray-500 hover:text-gray-900 transition-all duration-300"
                              >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                                <span>GitHub Repo</span>
                                <div className="group-hover:translate-x-1 transition-transform duration-200">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7"/>
                                    <path d="M7 7h10v10"/>
                                  </svg>
                                </div>
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-900 border-2 border-blue-500 text-blue-300 font-bold shadow-lg hover:shadow-blue-500/50 hover:bg-blue-500 hover:text-gray-900 transition-all duration-300"
                              >
                                <span>Live Demo</span>
                                <div className="group-hover:translate-x-1 transition-transform duration-200">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7"/>
                                    <path d="M7 7h10v10"/>
                                  </svg>
                                </div>
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Add some bottom padding to ensure content doesn't get cut off */}
                  <div className="h-8"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
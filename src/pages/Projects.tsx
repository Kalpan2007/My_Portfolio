import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import BackToDashboard from '../components/BackToDashboard';

const projects = [  
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=300&h=200&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=300&h=200&fit=crop",
    tags: ["React", "Firebase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
    tags: ["React", "D3.js", "Node.js"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
const navigate = useNavigate(); 

  return (
    <PageTransition>
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <BackToDashboard />
          </div>

          <h1 className="text-4xl font-bold mb-8">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-sm rounded-3xl overflow-hidden bg-white/5"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-300"
                    >
                      <Github size={16} /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900/80 backdrop-blur-md border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <BackToDashboard />
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/skills')}
                className="px-6 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-all"
              >
                Skills
              </button>
              <button
                onClick={() => navigate('/experience')}
                className="px-6 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-all"
              >
                Experience
              </button>
              <button
                onClick={() => navigate('/certificates')}
                className="px-6 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-all"
              >
                Certificates
              </button>
              <button
                onClick={() => navigate('/about')}
                className="px-6 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-all"
              >
                About
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
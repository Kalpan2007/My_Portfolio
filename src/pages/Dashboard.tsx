import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Github , Twitter , Linkedin ,ArrowRight ,Download , Code , Mail , Award , Globe , Briefcase , Laptop , Terminal } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const [isMobile] = useState(() => window.innerWidth < 768);

  // Simplified variants - no animation on mobile
  const pageVariants = !isMobile
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }
    : {};

  // Optimized card container component
  const Card = ({ children, className, onClick }) => (
    <div
      className={`
        relative rounded-xl
        ${isMobile ? 'bg-white/5' : 'bg-white/5 backdrop-blur-sm'}
        border border-white/10
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );

  return (
    <motion.div
      variants={pageVariants}
      initial={!isMobile && 'initial'}
      animate={!isMobile && 'animate'}
      className="min-h-screen p-4 sm:p-6 lg:p-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 md:grid-rows-5 md:h-[calc(100vh-4rem)]">
        {/* Profile Card - Static, no animations */}
        <Card className="col-span-1 md:col-span-2 md:row-span-4 p-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-blue-500/30 shadow-md">
              <img
                src="https://res.cloudinary.com/dxdrzit6x/image/upload/v1745993853/PXL_20250114_114831859.PORTRAIT-ghB93Tpx_i9oxjr.jpg"
                alt="Kalpan Kaneriya"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-100 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
              Kalpan Kaneriya
            </h1>
            <p className="text-lg text-gray-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Full Stack Developer / UI-UX Designer
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition shadow-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              <Download className="w-5 h-5" />
              <span className="text-base">Download Resume</span>
            </a>
          </div>
        </Card>

        {/* Projects Card */}
        <Card
          className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-1 p-6"
          onClick={() => navigate('/projects')}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Laptop className="w-8 h-8 text-blue-400" />
              <h2 className="text-xl font-bold">Projects</h2>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-400" />
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                Portfolio
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                E-commerce
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                UI Components
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Explore my latest web development projects
            </p>
          </div>
        </Card>

        {/* Experience Card */}
        <Card
          className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3 p-6"
          onClick={() => navigate('/experience')}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Briefcase className="w-8 h-8 text-blue-400" />
              <h2 className="text-xl font-bold">Experience</h2>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-400" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-300">Web Development Intern</p>
            <p className="text-xs text-gray-400">
              Building real-world projects and gaining hands-on experience
            </p>
          </div>
        </Card>

        {/* Skills Card */}
        <Card
          className="col-span-1 md:col-span-2 md:col-start-3 md:row-start-5 p-6"
          onClick={() => navigate('/skills')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Terminal className="w-8 h-8 text-blue-400" />
              <h2 className="text-xl font-bold">Skills</h2>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-400" />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
              React
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
              Node.js
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
              MongoDB
            </span>
          </div>
        </Card>

        {/* About Me Card */}
        <Card
          className="col-span-1 md:col-span-2 md:col-start-1 md:row-start-5 p-6"
          onClick={() => navigate('/about')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Code className="w-8 h-8 text-blue-400" />
              <h2 className="text-xl font-bold">About Me</h2>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-400" />
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Learn more about my journey and passion for web development
          </p>
        </Card>

        {/* Certificates Card */}
        <Card
          className="col-span-1 md:row-span-2 md:col-start-5 md:row-start-1 p-6"
          onClick={() => navigate('/certificates')}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-blue-400" />
              <h2 className="text-xl font-bold">Certificates</h2>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-sm text-gray-400">
            View my certifications and achievements
          </p>
        </Card>

        {/* Other Side Card */}
        <Card
          className="col-span-1 md:row-span-2 md:col-start-5 md:row-start-3 p-6"
          onClick={() => navigate('/My_Other_Side')}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Globe className="w-8 h-8 text-blue-400" />
              <h2 className="text-xl font-bold">Other Side</h2>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-400" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-300">Cricket Enthusiast</p>
            <p className="text-sm text-gray-300">Mobile Gaming</p>
          </div>
        </Card>

        {/* Contact Card */}
        <Card
          className="col-span-1 md:col-start-5 md:row-start-5 p-6"
          onClick={() => navigate('/contact')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Mail className="w-8 h-8 text-blue-400" />
              <h2 className="text-xl font-bold">Contact</h2>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-400" />
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Let's connect and discuss opportunities
          </p>
        </Card>
      </div>
    </motion.div>
  );
};

export default Dashboard;
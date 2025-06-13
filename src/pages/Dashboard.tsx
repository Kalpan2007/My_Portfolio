import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Github , Twitter , Linkedin ,ArrowRight ,Download , Code , Mail , Award , Globe , Briefcase , Laptop , Terminal , Home ,FileCode , MessagesSquare ,  } from 'lucide-react';
import { FloatingDock } from '../components/FloatingDock';
import ProjectImageScroll from '../components/ProjectImageScroll'; // Import the new component

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
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Profile Image */}
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-blue-500/30 shadow-lg">
                <img
                  src="https://res.cloudinary.com/dxdrzit6x/image/upload/v1745993853/PXL_20250114_114831859.PORTRAIT-ghB93Tpx_i9oxjr.jpg"
                  alt="Kalpan Kaneriya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="space-y-2">
              <h1 className="text-5xl font-black tracking-tight bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent drop-shadow-xl">
                Kalpan Kaneriya
              </h1>
              <p className="text-2xl font-medium text-blue-200/90">
                Full Stack Developer / UI-UX Designer
              </p>
            </div>

            {/* Download Resume Button */}
        
            <a
              href="/resume.pdf"
              download
              className="group relative px-10 py-5 rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4 text-white font-semibold text-lg">
                <Download className="w-6 h-6" />
                <span>Download Resume</span>
              </div>
            </a>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-5 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              {[
                { href: 'https://github.com/YourUsername', label: 'GitHub', Icon: Github },
                { href: 'https://leetcode.com/YourUsername', label: 'LeetCode', Icon: Code },
                { href: 'https://linkedin.com/in/YourUsername', label: 'LinkedIn', Icon: Linkedin },
                { href: 'https://twitter.com/YourUsername', label: 'Twitter', Icon: Twitter },
                {
                  href: 'https://instagram.com/YourUsername',
                  label: 'Instagram',
                  Icon: () => (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-blue-300 group-hover:text-blue-400 fill-current"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  ),
                },
              ].map(({ href, label, Icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <span className="absolute -top-9 scale-0 px-2 py-1 text-xs font-medium text-white bg-black/70 rounded-md backdrop-blur-sm group-hover:scale-100 transition-transform">
                    {label}
                  </span>
                  <Icon className="w-6 h-6 text-blue-300 group-hover:text-blue-400" />
                </a>
              ))}
            </div>
          </div>
        </Card>

        {/* Projects Card */}
        <Card
          className="col-span-1 md:col-span-2 md:row-span-2 p-6"
          onClick={() => navigate('/projects')}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Code className="w-8 h-8 text-blue-400" />
                <h2 className="text-xl font-bold">Projects</h2>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-400" />
            </div>
            
            {/* Project tags */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                Web Development
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                UI/UX Design
              </span>
            </div>

            {/* Add the image scroll here */}
            <div className="-mx-6 mt-4">
              <ProjectImageScroll />
            </div>
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
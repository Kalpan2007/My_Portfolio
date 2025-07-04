import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Github, Twitter, Linkedin, ArrowRight, Download, Code, Mail, Award, Globe, Briefcase, Laptop, Terminal, Home, FileCode, MessagesSquare,Youtube } from 'lucide-react';
import { FloatingDock } from '../components/FloatingDock';
import ProjectImageScroll from '../components/ProjectImageScroll'; 
import ExperienceGlowCard from '../components/ExperienceGlowCard';
import FloatingCertificates from '../components/FloatingCertificates';
import TextFadeIn from '../components/TextFadeIn';

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
        bg-gradient-to-br from-[#0e1726] to-[#1e293b]
        border border-blue-500/30 shadow-md
        hover:shadow-blue-500/30 hover:scale-[1.02]
        transition-transform duration-300
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );

// Use sessionStorage for per-session animation
  const [showFadeIn, setShowFadeIn] = useState(false);

  useEffect(() => {
    const hasAnimated = sessionStorage.getItem('dashboardTextFadeIn');
    if (!hasAnimated) {
      setShowFadeIn(true);
      sessionStorage.setItem('dashboardTextFadeIn', 'true');
    }
  }, []);

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
              href="/Kalpan_Resume.pdf"
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
                { href: 'https://github.com/kalpan2007', label: 'GitHub', Icon: Github },
                { href: 'https://leetcode.com/u/kalpan_2007', label: 'LeetCode', Icon: Code },
                { href: 'https://linkedin.com/in/3kz', label: 'LinkedIn', Icon: Linkedin },
                { href: 'https://x.com/KalpanKaneriya', label: 'Twitter', Icon: Twitter },
                { href: 'https://www.youtube.com/@3kverse', label: 'YouTube', Icon: Youtube},
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
                Full Stack
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                UI/UX Design
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                Extention
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                Frontend
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                Backend
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
          className="col-span-1 md:col-span-2 md:row-span-2 p-6"
          onClick={() => navigate('/experience')}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <Briefcase className="w-8 h-8 text-blue-400" />
                <h2 className="text-xl font-bold">Experience</h2>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-400" />
            </div>

            <p className="text-sm text-gray-400 mb-4">Leading UI/UX design at Eduztrik</p>

            {/* Experience Glow Card */}
            <ExperienceGlowCard />
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
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
              Figma
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
              Git & Github
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
              C++
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
          <div className="flex flex-col h-full">
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

            {/* Add FloatingCertificates here */}
            <div className="mt-4">
              <FloatingCertificates />
            </div>
          </div>
        </Card>

        <Card
      className="col-span-1 md:row-span-2 md:col-start-5 md:row-start-3 p-6"
      onClick={() => navigate('/My_Other_Side')}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <Globe className="w-8 h-8 text-blue-400 drop-shadow-lg" />
          <h2 className="text-xl font-bold text-white">Other Side</h2>
        </div>
        <ArrowRight className="w-5 h-5 text-blue-400" />
      </div>
      <div className="space-y-2 py-6">
        {showFadeIn ? (
          <TextFadeIn
            lines={[
              { text: "Life beyond code?", className: "text-sm text-slate-300" },
              { text: "Absolutely.", className: "text-sm text-blue-400 font-bold" },
              { text: "That’s where the real energy and perspective come from.", className: "text-sm text-blue-200" },
            ]}
            delay={700}
          />
        ) : (
          <>
            <p className="text-sm text-slate-300 font-medium tracking-wide text-shadow-glow">
              Life beyond code?
            </p>
            <p className="text-sm text-blue-400 font-bold font-medium tracking-wide text-shadow-glow">
              Absolutely.
            </p>
            <p className="text-sm text-blue-200 font-medium tracking-wide text-shadow-glow">
              That’s where the real energy and perspective come from.
            </p>
          </>
        )}
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
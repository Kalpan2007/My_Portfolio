import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Github, Twitter, Linkedin, ArrowRight, Download,
  Code, Mail, Award, Globe, Briefcase, Laptop, Terminal,
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: 'easeIn' } },
  };

  const cardVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5, type: 'spring', stiffness: 100 },
    }),
  };

  // Navigation items
  const navItems = [
    { title: 'Profile', icon: <Code />, route: '/', span: 'col-span-2 row-span-4 md:col-span-2 md:row-span-4' },
    { title: 'Projects', icon: <Laptop />, route: '/projects', span: 'col-span-2 md:col-span-1' },
    { title: 'About Me', icon: <Code />, route: '/about', span: 'col-span-2 md:col-span-1' },
    { title: 'Certificates', icon: <Award />, route: '/certificates', span: 'col-span-2 md:col-span-1' },
    { title: 'Other Side', icon: <Globe />, route: '/My_Other_Side', span: 'col-span-2 md:col-span-1' },
    { title: 'Skills', icon: <Terminal />, route: '/skills', span: 'col-span-2 md:col-span-1' },
    { title: 'Experience', icon: <Briefcase />, route: '/experience', span: 'col-span-2 md:col-span-1' },
    { title: 'Connect', icon: <Mail />, route: '/contact', span: 'col-span-2 md:col-span-1' },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 bg-[#0f172a]">
      {/* Desktop Layout */}
      <div className="hidden md:block max-w-7xl mx-auto">
        <div className="grid grid-cols-6 gap-4">
          {/* Profile Card - Large left section */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            custom={0}
            className="col-span-2 row-span-4 p-6 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-6 h-full justify-center">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-blue-500/30">
                <img
                  src="https://res.cloudinary.com/dxdrzit6x/image/upload/v1745993853/PXL_20250114_114831859.PORTRAIT-ghB93Tpx_i9oxjr.jpg"
                  alt="Kalpan Kaneriya"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold text-gray-100">Kalpan Kaneriya</h1>
              <p className="text-lg text-gray-200">Full Stack Developer / UI-UX Designer</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Grid Cards */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            custom={1}
            className="col-span-4 grid grid-cols-2 gap-4"
          >
            {navItems.slice(1).map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                custom={index + 2}
                className="p-6 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer"
                onClick={() => navigate(item.route)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-blue-400">{item.icon}</div>
                    <h2 className="text-xl font-bold text-white">{item.title}</h2>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-400" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-4">
        {navItems.map((item, index) => (
          <motion.div
            key={item.title}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            custom={index}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            onClick={() => navigate(item.route)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-blue-400">{item.icon}</div>
                <h2 className="text-lg font-bold text-white">{item.title}</h2>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
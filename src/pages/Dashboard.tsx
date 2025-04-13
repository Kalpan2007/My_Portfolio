import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Github, Twitter, Linkedin, ArrowRight, Download,
  Code, Mail, Award, Globe, Briefcase,
} from 'lucide-react';
import profileImage from '../assets/PXL_20250114_114831859.PORTRAIT.jpg'; 
import About_Me_Img from '../assets/About-img.png'; 

const Dashboard = () => {
  const navigate = useNavigate();

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: 'easeIn' } },
  };

  const cardVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5, type: 'spring', stiffness: 100 },
    }),
    hover: { scale: 1.03, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', transition: { duration: 0.3 } },
  };

  const profileVariants = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.6, type: 'spring', stiffness: 80 },
    },
    hover: { y: -5, transition: { duration: 0.3 } },
  };

  const cards = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "About Me",
      content: (
        <div className="flex flex-col items-center space-y-3">
          <div className="relative h-24 w-full">
            <img src={About_Me_Img} alt="About" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-lg" />
            <p className="absolute bottom-2 left-2 text-sm text-white">My Story</p>
          </div>
        </div>
      ),
      route: "/about",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-400" />,
      title: "Projects",
      content: (
        <div className="flex flex-col items-center space-y-3">
          <div className="flex gap-2">
           This is  All My Projects 
          </div>
        </div>
      ),
      route: "/projects",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,
      title: "Certificates",
      content: (
        <div className="flex flex-col items-center y-3">
          <p className="text-sm text-gray-400">These are the certificates ,</p>
          <p className="text-sm text-gray-400">I’ve earned from various platforms.</p>
        </div>
      ),
      route: "/certificates",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-400" />,
      title: "Experience",
      content: (
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-100">2 Years in Development</p>
          <p className="text-xs text-gray-200">Internships & Freelance</p>
        </div>
      ),
      route: "/experience",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Beyond Code",
      content: (
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-100">Cricket</p>
          <p className="text-sm text-gray-100">Mobile Gaming</p>
        </div>
      ),
      route: "/beyond-code",
    },
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Skills",
      content: (
        <div className="flex flex-col items-center space-y-2">
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">React</span>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">MongoDB</span>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Node.js</span>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Express</span>
          </div>
        </div>
      ),
      route: "/skills",
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-400" />,
      title: "Contact",
      content: (
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-100">Let’s connect!</p>
        </div>
      ),
      route: "/contact",
    },
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen p-4 text-gray-100 mt-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Profile Card (center aligned) */}
        <motion.div
          variants={profileVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="lg:col-start-2 lg:row-start-1 lg:row-end-3 p-6 rounded-3xl bg-white/5 backdrop-blur-sm shadow-lg transition-all duration-300 hover:bg-white/10 h-[400px] w-full max-w-[600px] mx-auto"
        >
          <div className="flex flex-col items-center text-center space-y-6 h-full justify-center">
            <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-blue-500/30 shadow-md">
              <img
                src={profileImage}
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
              <a href="#" className="text-gray-300 hover:text-blue-400 transition drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
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
        </motion.div>

        {/* Other Cards */}
        {cards.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onClick={card.route ? () => navigate(card.route) : undefined}
            className={`p-6 rounded-3xl bg-white/5 backdrop-blur-sm shadow-lg transition-all duration-300 hover:bg-white/10 h-[200px] w-full cursor-${card.route ? "pointer" : "default"}`}
          >
            <div className="flex flex-col items-center text-center space-y-4 h-full justify-center relative">
              {card.icon}
              <h2 className="text-xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                {card.title}
              </h2>
              {card.content}
              {card.route && !card.isLink && (
                <div className="absolute bottom-4 right-4">
                  <ArrowRight className="w-6 h-6 text-blue-400 hover:text-blue-300 transition" onClick={() => navigate(card.route)} />
                </div>
              )}
              {card.isLink && (
                <button
                  onClick={(e) => { e.stopPropagation(); window.location.href = "/resume.pdf"; }}
                  className="mt-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm flex items-center gap-1 shadow-md transition"
                >
                  Download <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Dashboard;
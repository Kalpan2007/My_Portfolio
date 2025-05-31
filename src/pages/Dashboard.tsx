import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Github, Twitter, Linkedin, ArrowRight, Download,
  Code, Mail, Award, Globe, Briefcase, Laptop, Terminal ,
} from 'lucide-react';

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
            <img src="https://res.cloudinary.com/dxdrzit6x/image/upload/v1745993849/About-img-CBqeJdI__fzy6wo.png" alt="About" className="w-full h-full object-cover rounded-lg" />
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
          <p className="text-xs text-gray-200">Internship</p>
        </div>
      ),
      route: "/experience",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "My Other Side	",
      content: (
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-100">Cricket</p>
          <p className="text-sm text-gray-100">Mobile Gaming</p>
        </div>
      ),
      route: "/My_Other_Side	",
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
      className="min-h-screen p-8 md:p-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 md:grid-rows-5 md:h-[calc(100vh-4rem)]">
        {/* Profile Card */}
        <motion.div
          variants={profileVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="col-span-1 md:col-span-2 md:row-span-4 p-6 rounded-3xl bg-white/5 backdrop-blur-sm shadow-lg transition-all duration-100 hover:bg-white/10 min-h-[400px]"
        >
          <div className="flex flex-col items-center text-center space-y-6 h-full justify-center">
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

        {/* Projects Card */}
        <motion.div
          custom={1}
          variants={cardVariants}
          className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-1 p-6 rounded-3xl bg-white/5 backdrop-blur-sm shadow-lg hover:bg-white/10 cursor-pointer min-h-[200px]"
          onClick={() => navigate("/projects")}
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
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Portfolio</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">E-commerce</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">UI Components</span>
            </div>
            <p className="text-sm text-gray-400">Explore my latest web development projects</p>
          </div>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          custom={2}
          variants={cardVariants}
          className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3 p-6 rounded-3xl bg-white/5 backdrop-blur-sm shadow-lg hover:bg-white/10 cursor-pointer min-h-[180px]"
          onClick={() => navigate("/experience")}
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
            <p className="text-xs text-gray-400">Building real-world projects and gaining hands-on experience</p>
          </div>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          custom={3}
          variants={cardVariants}
          className="col-span-1 md:col-span-2 md:col-start-3 md:row-start-5 p-6 rounded-3xl bg-white/5 backdrop-blur-sm shadow-lg hover:bg-white/10 cursor-pointer min-h-[150px]"
          onClick={() => navigate("/skills")}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Terminal className="w-8 h-8 text-blue-400" />
              <h2 className="text-xl font-bold">Skills</h2>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-400" />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">React</span>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Node.js</span>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">MongoDB</span>
          </div>
        </motion.div>

        {/* About Me Card */}
        <motion.div
          custom={0}
          variants={cardVariants}
          className="col-span-1 md:col-span-2 md:col-start-1 md:row-start-5 p-6 rounded-3xl bg-white/5 backdrop-blur-sm shadow-lg hover:bg-white/10 cursor-pointer min-h-[150px]"
          onClick={() => navigate("/about")}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Code className="w-8 h-8 text-blue-400" />
              <h2 className="text-xl font-bold">About Me</h2>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-400" />
          </div>
          <p className="mt-3 text-sm text-gray-400">Learn more about my journey and passion for web development</p>
        </motion.div>

        {/* Certificates Card */}
        <motion.div
          custom={4}
          variants={cardVariants}
          className="col-span-1 md:row-span-2 md:col-start-5 md:row-start-1 p-6 rounded-3xl bg-white/5 backdrop-blur-sm shadow-lg hover:bg-white/10 cursor-pointer min-h-[180px]"
          onClick={() => navigate("/certificates")}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-blue-400" />
              <h2 className="text-xl font-bold">Certificates</h2>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-sm text-gray-400">View my certifications and achievements</p>
        </motion.div>

        {/* Other Side Card */}
        <motion.div
          custom={5}
          variants={cardVariants}
          className="col-span-1 md:row-span-2 md:col-start-5 md:row-start-3 p-6 rounded-3xl bg-white/5 backdrop-blur-sm shadow-lg hover:bg-white/10 cursor-pointer min-h-[180px]"
          onClick={() => navigate("/My_Other_Side")}
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
        </motion.div>

        {/* Contact Card */}
        <motion.div
          custom={6}
          variants={cardVariants}
          className="col-span-1 md:col-start-5 md:row-start-5 p-6 rounded-3xl bg-white/5 backdrop-blur-sm shadow-lg hover:bg-white/10 cursor-pointer min-h-[150px]"
          onClick={() => navigate("/contact")}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Mail className="w-8 h-8 text-blue-400" />
              <h2 className="text-xl font-bold">Contact</h2>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-400" />
          </div>
          <p className="mt-3 text-sm text-gray-400">Let's connect and discuss opportunities</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
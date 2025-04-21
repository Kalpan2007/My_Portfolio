import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '../assets/About-img.png';
import { useNavigate } from 'react-router-dom';
import BackToDashboard from '../components/BackToDashboard';

const About: React.FC = () => {
  const navigate = useNavigate();
  const welcomeRef = useRef(null);
  const educationRef = useRef(null);
  const techRef = useRef(null);
  const whoAmIRef = useRef(null);

  const isWelcomeInView = useInView(welcomeRef, { once: true, amount: 0.2 });
  const isEducationInView = useInView(educationRef, { once: true, amount: 0.2 });
  const isTechInView = useInView(techRef, { once: true, amount: 0.2 });
  const isWhoAmIInView = useInView(whoAmIRef, { once: true, amount: 0.2 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -15, y: 50 },
    visible: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const cardHover = {
    hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.3)', transition: { duration: 0.3 } },
  };

  const typewriterVariants = {
    hidden: { width: 0 },
    visible: (i: number) => ({
      width: 'auto',
      transition: { delay: i * 0.3, duration: 0.8, ease: 'easeInOut' },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
      {/* Welcome Screen */}
      <section ref={welcomeRef} className="min-h-screen flex items-center justify-center relative">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={isWelcomeInView ? 'visible' : 'hidden'}
          className="text-center z-10 p-6"
        >
          <motion.h1
            className="text-5xl font-bold text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
            variants={typewriterVariants}
            custom={0}
            initial="hidden"
            animate={isWelcomeInView ? 'visible' : 'hidden'}
          >
            Welcome to the Journey of 3K
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            variants={typewriterVariants}
            custom={1}
            initial="hidden"
            animate={isWelcomeInView ? 'visible' : 'hidden'}
          >
            Scroll down to explore my world.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 text-white"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Education Journey */}
      <section ref={educationRef} className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isEducationInView ? 'visible' : 'hidden'}
          className="text-4xl font-bold text-center text-white mb-12 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
        >
          My Education Journey
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700 hidden md:block"></div>
          {[
            {
              title: '10th Standard',
              date: '2022',
              desc: 'Completed my 10th grade, laying the foundation for my academic journey.',
              icon: '🏫',
            },
            {
              title: '12th PCM - 92%',
              date: '2024',
              desc: 'Secured 92% in PCM and ranked 2121 in Gujarat ACPC.',
              icon: '🎓',
            },
            {
              title: 'Rai University x CodingGita',
              date: '2024 - Present',
              desc: 'Pursuing CSE with CodingGita’s guidance. Scored 9.95 CGPA in my 1st semester.',
              icon: '📚',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={isEducationInView ? 'visible' : 'hidden'}
              variants={rotateIn}
              className="mb-8 flex flex-col md:flex-row items-center justify-between w-full"
            >
              <div className="order-1 w-full md:w-5/12 mb-4 md:mb-0"></div>
              <div className="z-10 flex items-center order-1 bg-gray-800 shadow-xl w-10 h-10 md:w-8 md:h-8 rounded-full ring-8 ring-gray-900 justify-center">
                <span className="text-2xl md:text-xl">{item.icon}</span>
              </div>
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="order-1 bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg w-full md:w-5/12 ml-0 md:ml-6 text-center md:text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-100">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
                <p className="text-sm text-gray-500 mt-2">{item.date}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Journey */}
      <section ref={techRef} className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isTechInView ? 'visible' : 'hidden'}
          className="text-4xl font-bold text-center text-white mb-12 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
        >
          My Tech Journey
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700 hidden md:block"></div>
          {[
            {
              title: 'Start Learning HTML, CSS, JS',
              date: 'August 2024',
              desc: 'Began my journey into basic web development with HTML, CSS, and JavaScript.',
              icon: '🌐',
            },
            {
              title: 'UI/UX Design with Figma & GitHub',
              date: 'September 2024',
              desc: 'Explored UI/UX design using Figma, learned GitHub, and practiced problem-solving.',
              icon: '🎨',
            },
            {
              title: 'MERN Stack Basics',
              date: 'October 2024 - January 2025',
              desc: 'Started learning the fundamentals of the MERN stack (MongoDB, Express.js, React, Node.js).',
              icon: '💻',
            },
            {
              title: 'Advanced Tools & Frameworks',
              date: 'February 2025 - Present',
              desc: 'Delving into Tailwind, MUI, Chakra, and gaining additional knowledge.',
              icon: '🚀',
            },
            {
              title: 'Continuing Learning DSA and New Skills',
              date: 'March 2025 - Ongoing',
              desc: 'Focusing on Data Structures and Algorithms (DSA) and exploring new upcoming skills.',
              icon: '📚',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={isTechInView ? 'visible' : 'hidden'}
              variants={rotateIn}
              className="mb-8 flex flex-col md:flex-row items-center justify-between w-full"
            >
              <div className="order-1 w-full md:w-5/12 mb-4 md:mb-0"></div>
              <div className="z-10 flex items-center order-1 bg-gray-800 shadow-xl w-10 h-10 md:w-8 md:h-8 rounded-full ring-8 ring-gray-900 justify-center">
                <span className="text-2xl md:text-xl">{item.icon}</span>
              </div>
              <motion.div
                variants={cardHover}
                whileHover="hover"
                className="order-1 bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg w-full md:w-5/12 ml-0 md:ml-6 text-center md:text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-100">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
                <p className="text-sm text-gray-500 mt-2">{item.date}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who I Am Now */}
      <section ref={whoAmIRef} className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isWhoAmIInView ? 'visible' : 'hidden'}
          className="text-4xl font-bold text-center text-white mb-12 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
        >
          Who I Am Now
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isWhoAmIInView ? 'visible' : 'hidden'}
            className="w-full md:w-1/2 relative rounded-xl overflow-hidden"
          >
            <motion.img
              src={profileImage}
              alt="Kalpan Kaneriya"
              className="w-full h-auto max-h-[500px] md:max-h-[400px] object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={isWhoAmIInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center text-white text-xl font-semibold p-4">
              Crafting the Future
            </div>
          </motion.div>
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isWhoAmIInView ? 'visible' : 'hidden'}
            className="w-full md:w-1/2 space-y-6"
          >
            <motion.h3
              variants={fadeInRight}
              initial="hidden"
              animate={isWhoAmIInView ? 'visible' : 'hidden'}
              custom={0}
              className="text-2xl font-bold text-gray-200 border-b-2 border-blue-400 inline-block pb-1"
            >
              My Current Identity
            </motion.h3>
            <motion.p
              variants={fadeInRight}
              initial="hidden"
              animate={isWhoAmIInView ? 'visible' : 'hidden'}
              custom={1}
              className="text-base text-gray-300 leading-relaxed bg-gray-800/50 p-4 rounded-lg shadow-inner"
            >
              I am a full-stack MERN developer and UI/UX designer, passionate about creating functional, visually stunning, and intuitive digital experiences.
            </motion.p>
            <motion.p
              variants={fadeInRight}
              initial="hidden"
              animate={isWhoAmIInView ? 'visible' : 'hidden'}
              custom={2}
              className="text-base text-gray-300 leading-relaxed bg-gray-800/50 p-4 rounded-lg shadow-inner"
            >
              With a strong foundation in React, Node.js, Express.js, and MongoDB, I build scalable and efficient web applications with precision and elegance.
            </motion.p>
            <motion.p
              variants={fadeInRight}
              initial="hidden"
              animate={isWhoAmIInView ? 'visible' : 'hidden'}
              custom={3}
              className="text-base text-gray-300 leading-relaxed bg-gray-800/50 p-4 rounded-lg shadow-inner"
            >
              On the design front, I craft user-centric interfaces using Figma, ensuring every pixel and interaction enhances the user experience.
            </motion.p>
            <motion.p
              variants={fadeInRight}
              initial="hidden"
              animate={isWhoAmIInView ? 'visible' : 'hidden'}
              custom={4}
              className="text-base text-gray-300 leading-relaxed bg-gray-800/50 p-4 rounded-lg shadow-inner"
            >
              Currently, I’m enhancing my skills with DSA, advanced frameworks like Tailwind and Chakra, and exploring new technologies to shape the future of web development.
            </motion.p>
          </motion.div>
        </div>
      </section>
      <div className="w-full bg-gray-900/80 backdrop-blur-md border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <BackToDashboard />
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/projects')}
                className="px-6 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-all"
              >
                Projects
              </button>
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
                onClick={() => navigate('/contact')}
                className="px-6 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-all"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
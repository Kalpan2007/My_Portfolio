import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '../assets/About-img.png';

const About: React.FC = () => {
  const welcomeRef = useRef(null);
  const aboutRef = useRef(null);
  const codingRef = useRef(null);
  const educationRef = useRef(null);

  const isWelcomeInView = useInView(welcomeRef, { once: true, amount: 0.2 });
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.2 });
  const isCodingInView = useInView(codingRef, { once: true, amount: 0.2 });
  const isEducationInView = useInView(educationRef, { once: true, amount: 0.2 });

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

      {/* About Me */}
      <section ref={aboutRef} className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isAboutInView ? 'visible' : 'hidden'}
          className="text-4xl font-bold text-center text-white mb-12 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isAboutInView ? 'visible' : 'hidden'}
            className="w-full md:w-1/2 relative rounded-xl overflow-hidden"
          >
            <motion.img
              src={profileImage}
              alt="Kalpan Kaneriya"
              className="w-full h-full max-h-[400px] object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center text-white text-xl font-semibold p-4">
              Crafting the Future
            </div>
          </motion.div>
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isAboutInView ? 'visible' : 'hidden'}
            className="w-full md:w-1/2 space-y-6"
          >
            <motion.h3
              variants={fadeInRight}
              initial="hidden"
              animate={isAboutInView ? 'visible' : 'hidden'}
              custom={0}
              className="text-2xl font-bold text-gray-200 border-b-2 border-blue-400 inline-block pb-1"
            >
              Who Am I?
            </motion.h3>
            <motion.p
              variants={fadeInRight}
              initial="hidden"
              animate={isAboutInView ? 'visible' : 'hidden'}
              custom={1}
              className="text-base text-gray-300 leading-relaxed bg-gray-800/50 p-4 rounded-lg shadow-inner"
            >
              I’m a full-stack MERN maestro and a detail-driven UI/UX designer, crafting digital experiences that are not only functional—but visually stunning and intuitive.
            </motion.p>
            <motion.p
              variants={fadeInRight}
              initial="hidden"
              animate={isAboutInView ? 'visible' : 'hidden'}
              custom={2}
              className="text-base text-gray-300 leading-relaxed bg-gray-800/50 p-4 rounded-lg shadow-inner"
            >
              On the development front, I dive deep into React, Node.js, Express.js, and MongoDB, building scalable, efficient, and high-performing web applications. I don’t just write code—I sculpt it with elegance and precision.
            </motion.p>
            <motion.p
              variants={fadeInRight}
              initial="hidden"
              animate={isAboutInView ? 'visible' : 'hidden'}
              custom={3}
              className="text-base text-gray-300 leading-relaxed bg-gray-800/50 p-4 rounded-lg shadow-inner"
            >
              On the design side, I bring interfaces to life using tools like Figma, transforming complex ideas into clean, user-centric designs. From wireframes to prototypes, I ensure every pixel serves a purpose and every interaction feels natural.
            </motion.p>
            <motion.p
              variants={fadeInRight}
              initial="hidden"
              animate={isAboutInView ? 'visible' : 'hidden'}
              custom={4}
              className="text-base text-gray-300 leading-relaxed bg-gray-800/50 p-4 rounded-lg shadow-inner"
            >
              With an obsession for optimization and a love for clean, maintainable code, I leverage modern tools and AI to supercharge workflows. Whether it’s the backend logic or the frontend finesse—I’m here to make products that not only work, but wow.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Coding Journey */}
      <section ref={codingRef} className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isCodingInView ? 'visible' : 'hidden'}
          className="text-4xl font-bold text-center text-white mb-12 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
        >
          My Coding Journey
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
          {[
            {
              title: 'JNV BK (9th - 12th)',
              date: '2020 - 2024',
              desc: 'Basic learning phase. Got my first interest in coding here.',
              icon: '🏫',
            },
            {
              title: 'Rai University',
              date: '2024 - Present',
              desc: 'Currently exploring advanced development & real-world projects.',
              icon: '🎓',
            },
            {
              title: 'Coding Experience',
              date: 'Ongoing',
              desc: 'Frontend Focus (React, GSAP, ShadCN, Three.js, Tailwind) & Backend Basics (Node.js, Express, MongoDB, Firebase)',
              icon: '💻',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={isCodingInView ? 'visible' : 'hidden'}
              variants={rotateIn}
              className="mb-12 flex items-center justify-between w-full"
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-10 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full ring-8 ring-gray-900">
                <span className="text-xl">{item.icon}</span>
              </div>
              <div className="order-1 bg-gray-800 p-6 rounded-lg shadow-lg w-5/12 ml-6">
                <h3 className="text-xl font-semibold text-gray-100">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
                <p className="text-sm text-gray-500 mt-2">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section ref={educationRef} className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isEducationInView ? 'visible' : 'hidden'}
          className="text-4xl font-bold text-center text-white mb-12 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
        >
          Education
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: 'Rai University x CodingGita',
              desc: 'Pursuing CSE with CodingGita’s guidance. Scored 9.95 CGPA in my 1st semester.',
            },
            {
              title: '12th PCM - 92%',
              desc: 'Secured 92% in PCM and ranked 2121 in Gujarat ACPC.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{ ...fadeInUp, ...cardHover }}
              initial="hidden"
              animate={isEducationInView ? 'visible' : 'hidden'}
              whileHover="hover"
              custom={i}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-200 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
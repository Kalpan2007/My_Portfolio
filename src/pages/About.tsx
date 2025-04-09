import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import profileImage from '../assets/IMG-20241108-WA0021.jpg'; // Adjust path as needed

const About: React.FC = () => {
  // Refs for inView detection
  const welcomeRef = useRef(null);
  const educationRef = useRef(null);
  const codingRef = useRef(null);
  const statusRef = useRef(null);

  const isWelcomeInView = useInView(welcomeRef, { once: true, amount: 0.2 });
  const isEducationInView = useInView(educationRef, { once: true, amount: 0.2 });
  const isCodingInView = useInView(codingRef, { once: true, amount: 0.2 });
  const isStatusInView = useInView(statusRef, { once: true, amount: 0.2 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const scrollIndicator = {
    hidden: { y: 0 },
    visible: { y: [0, -10, 0], transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } },
  };

  // Typewriter effect simulation with Framer Motion
  const typewriterVariants = {
    hidden: { width: 0 },
    visible: (i: number) => ({
      width: '100%',
      transition: { delay: i * 0.1, duration: 0.1, ease: 'linear' },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 overflow-x-hidden">
      {/* Welcome Screen */}
      <section ref={welcomeRef} className="min-h-screen flex items-center justify-center relative bg-gray-900">
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
            Welcome to the journey of 3K
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            variants={typewriterVariants}
            custom={1}
            initial="hidden"
            animate={isWelcomeInView ? 'visible' : 'hidden'}
          >
            Scroll down to witness the evolution.
          </motion.p>
        </motion.div>
        <motion.div
          variants={scrollIndicator}
          animate="visible"
          className="absolute bottom-10 text-white"
        >
          <svg
            className="w-8 h-8 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Education Timeline */}
      <section ref={educationRef} className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isEducationInView ? 'visible' : 'hidden'}
          className="text-4xl font-bold text-center text-white mb-12 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
        >
          The Journey of 3K
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="relative">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={isEducationInView ? 'visible' : 'hidden'}
                  custom={i}
                  className="timeline-item mb-8 flex items-center"
                >
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200">
                      {i === 0 && 'JNV BK - First Touch with Tech'}
                      {i === 1 && '10th: 88%'}
                      {i === 2 && '12th: 92%'}
                      {i === 3 && 'Rai University - CS Journey Begins'}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {i === 0 && 'School computer lab sparked my interest.'}
                      {i === 1 && 'Strong academic foundation.'}
                      {i === 2 && 'Excelled in academics.'}
                      {i === 3 && 'Coding became my life with Gita’s guidance.'}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isEducationInView ? 'visible' : 'hidden'}
            className="w-full md:w-1/2"
          >
            <div className="relative w-full h-64">
              <img
                src={profileImage}
                alt="Kalpan Kaneriya"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl">
                Fade-in Story
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coding Journey */}
      <section ref={codingRef} className="py-20 px-4 max-w-7xl mx-auto bg-gray-800">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isCodingInView ? 'visible' : 'hidden'}
          className="text-4xl font-bold text-center text-white mb-12 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
        >
          Coding Journey
        </motion.h2>
        <div className="space-y-8">
          {['HTML/CSS/JS Start', 'Figma & GitHub', 'React & Tailwind', 'Firebase & MongoDB'].map((phase, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              animate={isCodingInView ? 'visible' : 'hidden'}
              custom={i}
              className="coding-phase bg-white/10 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-200">{phase}</h3>
              <p className="text-sm text-gray-400 mt-2">
                {i === 0 && 'August 2024, started with curiosity.'}
                {i === 1 && 'Learned design and versioning.'}
                {i === 2 && 'Mastered dynamic apps and styling.'}
                {i === 3 && 'Explored backend with Firebase and MongoDB.'}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Current Status */}
      <section ref={statusRef} className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isStatusInView ? 'visible' : 'hidden'}
          className="text-4xl font-bold text-center text-white mb-12 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
        >
          Current Status
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isStatusInView ? 'visible' : 'hidden'}
            className="w-full md:w-1/2"
          >
            <div className="relative w-full h-64">
              <img
                src={profileImage}
                alt="Kalpan Kaneriya"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </motion.div>
          <div className="w-full md:w-1/2 space-y-4">
            <motion.h3
              variants={fadeInUp}
              initial="hidden"
              animate={isStatusInView ? 'visible' : 'hidden'}
              custom={0}
              className="text-2xl font-bold text-gray-200"
            >
              MERN Stack Developer / UI/UX Designer
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate={isStatusInView ? 'visible' : 'hidden'}
              custom={1}
              className="text-sm text-gray-400"
            >
              Aaj main ek passionate MERN Stack Developer hoon jise frontend se le kar backend tak ka end-to-end control hai. Par uske sath hi, main ek dedicated UI/UX Designer bhi hoon – jo design ko feel karta hai, sirf dekhte nahi.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate={isStatusInView ? 'visible' : 'hidden'}
              custom={2}
              className="text-sm text-gray-400"
            >
              Main believe karta hoon ki ek acha project tabhi possible hai jab design aur dev dono ek rhythm me chalein. Yeh safar abhi shuru hi hua hai — aur main tayyar hoon naye challenges ke liye.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
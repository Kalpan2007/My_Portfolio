import React from 'react';
import { motion } from 'framer-motion';

const OtherSide = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white overflow-hidden px-6 py-12 flex flex-col items-center">
      
      {/* Intro Text */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          I am not just code or a developer...
        </h2>
        <p className="text-lg md:text-xl text-gray-400">
          I live, I play, I create memories.
        </p>
      </motion.div>

      {/* Glowing Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative w-[300px] h-[400px] bg-white/10 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/20 p-6 flex flex-col items-center justify-center"
      >
        <div className="absolute top-[-40px] w-[4px] h-[40px] bg-blue-500 rounded-full"></div>
        <div className="w-[100px] h-[100px] bg-blue-500/30 rounded-full mb-4"></div>
        <h3 className="text-xl font-semibold">My Other Side</h3>
        <p className="text-sm text-gray-300 mt-2 text-center">
          A glimpse into who I am beyond the keyboard.
        </p>
      </motion.div>

      {/* Cricket and Gaming Cards */}
      <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-5xl w-full">
        
        {/* Cricket */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-white/5 rounded-xl border border-white/10 shadow-lg"
        >
          <h4 className="text-2xl font-bold mb-4">🏏 Cricket</h4>
          <p className="text-gray-400 mb-4">
            The field where I unleash discipline, focus, and teamwork.
          </p>
          <div className="flex gap-3">
            <img src="/images/cricket1.jpg" className="w-1/3 rounded-lg" alt="Cricket 1" />
            <img src="/images/cricket2.jpg" className="w-1/3 rounded-lg" alt="Cricket 2" />
            <img src="/images/cricket3.jpg" className="w-1/3 rounded-lg" alt="Cricket 3" />
          </div>
        </motion.div>

        {/* Gaming */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-6 bg-white/5 rounded-xl border border-white/10 shadow-lg"
        >
          <h4 className="text-2xl font-bold mb-4">🎮 Gaming</h4>
          <p className="text-gray-400 mb-4">
            Where strategy meets fun and reflexes take over.
          </p>
          <div className="flex gap-3">
            <img src="/images/game1.jpg" className="w-1/3 rounded-lg" alt="Game 1" />
            <img src="/images/game2.jpg" className="w-1/3 rounded-lg" alt="Game 2" />
            <img src="/images/game3.jpg" className="w-1/3 rounded-lg" alt="Game 3" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OtherSide;

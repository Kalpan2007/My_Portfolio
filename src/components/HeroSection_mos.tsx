import React from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#1a1f35]">
      {/* Background radial pattern */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#1d284d_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40 animate-bg-shift" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          {/* Main Text */}
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            There's more to me than just code...
          </h1>

          {/* "I Love" Section */}
          <div className="h-12 md:h-16 flex items-center justify-center text-xl md:text-3xl font-medium text-cyan-400 mb-8">
            <span className="mr-3">I Like</span>
            <ReactTyped
              strings={[
                'Cricket 🏏',
                'Gaming 🎮',
                'Photography 📸',
                'Music 🎵',
              ]}
              typeSpeed={100}
              backSpeed={50}
              loop
              className="text-cyan-400"
            />
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Dive into my world of passions and discover what keeps me inspired beyond the keyboard.
          </motion.p>
        </motion.div>

        {/* Explore Button */}
        
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce"
      >
        <ChevronDown className="h-8 w-8 text-white" />
      </motion.div>
    </section>
  );
};
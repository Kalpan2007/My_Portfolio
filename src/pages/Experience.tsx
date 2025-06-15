import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { BottomNav } from '../components/BottomNav';
import { Briefcase, Star, Sparkles, Award } from 'lucide-react';

const experiences = [
  {
    position: "UI/UX Designer Intern",
    company: "Company - Eduztrik",
    duration: "March 2025 – Present",
    description: "Contributing as the lead UI/UX designer for Eduztrik's core platform, focusing on creating intuitive and visually compelling user experiences across web applications.",
    responsibilities: [
      "Designed user-centric web interfaces from scratch using Figma",
      "Collaborated closely with developers to implement pixel-perfect designs",
      "Conducted UX research and translated insights into design improvements",
      "Crafted design systems and reusable UI components for scalability",
      "Actively participated in team discussions, sprint planning, and reviews"
    ]
  }
];

const Experience = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0f172a] text-gray-100">
        {/* Header Section */}
        <div className="pt-8 sm:pt-12 md:pt-16 pb-8 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8 sm:mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Experience</h1>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                My professional journey and internship experiences in web development and design
              </p>
            </motion.div>

            {/* Special Internship Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-8 sm:mb-12"
            >
              {/* Glowing Background Effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur-lg opacity-75 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-3xl blur-xl opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-cyan-500/30 overflow-hidden">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse"></div>
                </div>
                
                {/* Sparkle Effects */}
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Star className="w-5 h-5 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                
                {/* Content */}
                <div className="relative p-6 sm:p-8 md:p-10">
                  {/* Header with Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-6 h-6 text-cyan-400" />
                        <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-xs sm:text-sm font-medium">
                          Current Internship
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                        {experiences[0].position}
                      </h2>
                      <h3 className="text-lg sm:text-xl text-gray-300 mb-2">{experiences[0].company}</h3>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="px-4 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-lg text-cyan-300 text-sm sm:text-base font-medium">
                        {experiences[0].duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {experiences[0].description}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      Key Responsibilities
                    </h4>
                    <div className="grid gap-3">
                      {experiences[0].responsibilities.map((resp, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 + 0.3 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-cyan-500/10 hover:border-cyan-500/20 transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm sm:text-base">{resp}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Glow Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-60"></div>
                </div>
              </div>
            </motion.div>

            {/* Future Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-gray-700/50">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
                  Looking Forward
                </h3>
                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                  Currently focused on my internship at Eduztrik while continuously learning and growing. 
                  Open to new opportunities and collaborations in web development and UI/UX design.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pb-20 sm:pb-24">
          <BottomNav />
        </div>
      </div>
    </PageTransition>
  );
};

export default Experience;
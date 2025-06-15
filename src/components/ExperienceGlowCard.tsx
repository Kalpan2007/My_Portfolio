import { motion } from 'framer-motion';
import { Paintbrush } from 'lucide-react';

const ExperienceGlowCard: React.FC = () => {
  return (
    <motion.div 
      className="relative p-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30 
                 rounded-xl border border-blue-500/20 hover:border-blue-500/40 
                 transition-colors duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start space-x-4">
        {/* Company Icon */}
        <motion.div 
          className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center"
          animate={{ 
            boxShadow: ["0 0 10px rgba(59, 130, 246, 0.1)", "0 0 20px rgba(59, 130, 246, 0.2)", "0 0 10px rgba(59, 130, 246, 0.1)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Paintbrush className="w-5 h-5 text-blue-400" />
        </motion.div>

        {/* Content */}
        <div className="flex-1 space-y-2">
          <div>
            <h3 className="text-sm font-semibold text-blue-50">UI/UX Designer Intern</h3>
            <p className="text-xs text-blue-300">Eduztrik • March 2025 - Present</p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
              Figma
            </span>
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
              UI Design
            </span>
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
              UX Research
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceGlowCard;
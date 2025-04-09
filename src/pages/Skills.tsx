import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const skillCategories = {
  Frontend: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Redux", level: 85 }
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "GraphQL", level: 75 }
  ],
  Tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Figma", level: 85 },
    { name: "VS Code", level: 95 }
  ]
};

const Skills = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </button>

          <h1 className="text-4xl font-bold mb-8">Skills</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="backdrop-blur-sm rounded-3xl p-8 bg-white/5"
              >
                <h2 className="text-2xl font-bold mb-6">{category}</h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
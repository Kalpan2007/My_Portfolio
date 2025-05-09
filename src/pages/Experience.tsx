import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { BottomNav } from '../components/BottomNav';

const experiences = [
  {
    position: "UI/UX Designer Intern",
    company: "Company - Eduztrik",
    duration: "March 2025 – Present",
    description: "Contributing as the lead UI/UX designer for Eduztrik’s core platform, focusing on creating intuitive and visually compelling user experiences across web applications.",
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
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold mb-8">Experience</h1>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-sm rounded-3xl p-8 bg-white/5"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="text-2xl font-bold">{exp.position}</h2>
                  <span className="text-blue-400">{exp.duration}</span>
                </div>
                <h3 className="text-xl text-gray-300 mb-4">{exp.company}</h3>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav/>
    </PageTransition>
  );
};

export default Experience;
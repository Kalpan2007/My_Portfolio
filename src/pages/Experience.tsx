import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import BackToDashboard from '../components/BackToDashboard';

const experiences = [
  {
    position: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    duration: "2022 - Present",
    description: "Leading development of enterprise web applications using MERN stack.",
    responsibilities: [
      "Architected and implemented scalable web applications",
      "Led a team of 5 developers",
      "Improved application performance by 40%"
    ]
  },
  {
    position: "Frontend Developer",
    company: "Digital Innovations",
    duration: "2020 - 2022",
    description: "Developed responsive web applications using React and modern frontend technologies.",
    responsibilities: [
      "Built responsive user interfaces",
      "Implemented state management solutions",
      "Optimized application performance"
    ]
  },
  {
    position: "UI/UX Designer",
    company: "Creative Studio",
    duration: "2019 - 2020",
    description: "Designed user interfaces and experiences for web and mobile applications.",
    responsibilities: [
      "Created user-centered designs",
      "Conducted user research",
      "Developed UI component libraries"
    ]
  }
];

const Experience = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <BackToDashboard />
          </div>

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
    </PageTransition>
  );
};

export default Experience;
import Pagetrasition from '../components/PageTransition';
import { useNavigate } from 'react-router-dom';
import BackToDashboard from '../components/BackToDashboard';

const skillsData = {
  Frontend: [
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      description: "Markup language for structuring web content.",
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      description: "Stylesheet language for designing websites.",
    },
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      description: "Programming language for interactivity.",
    },
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "JavaScript library for building UIs.",
    },
    {
      name: "Tailwind CSS",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042",
      description: "Utility-first CSS framework for fast UI building.",
    },
    {
      name: "Material UI",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      description: "React UI library with prebuilt components.",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description: "JavaScript runtime for backend.",
    },
    {
      name: "Express",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      description: "Minimal web framework for Node.js.",
    },
    {
      name: "MongoDB",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      description: "NoSQL database for modern apps.",
    },
    {
      name: "RESTful APIs",
      img: "https://www.vectorlogo.zone/logos/json/json-icon.svg",
      description: "Design pattern for backend endpoints.",
    },
    {
      name: "JWT",
      img: "data:image/png;base64,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",
      description: "Token-based authentication method.",
    },
  ],
  Tools: [
    {
      name: "Git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      description: "Version control system.",
    },
    {
      name: "GitHub",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      description: "Code hosting platform.",
    },
    {
      name: "Figma",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      description: "Collaborative UI/UX design tool.",
    },
    {
      name: "Postman",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      description: "API platform for building and testing APIs.",
    },
    {
      name: "C++",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      description: "Object-oriented programming language.",
    },
  ],
};

const Skills = () => {
  const navigate = useNavigate();

  return (
    <Pagetrasition>
      <div className="flex flex-col min-h-screen">
        {/* Main Content */}
        <div className="flex-grow p-8">
          <div className="max-w-7xl mx-auto">
            

            <h1 className="text-4xl font-bold text-center mb-8 text-white">My Skills</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skillsData).map(([category, skills], index) => (
                <div key={index} className="backdrop-blur-sm rounded-3xl overflow-hidden bg-white/5">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
                    <div className="divide-y divide-gray-700"> {/* Added divider */}
                      {skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-4 py-4"> {/* Added padding for spacing */}
                          <img
                            src={skill.img}
                            alt={skill.name}
                            className="w-10 h-10 object-contain"
                          />
                          <div>
                            <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                            <p className="text-sm text-gray-400">{skill.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="w-full bg-gray-900/80 backdrop-blur-md border-t border-gray-800">
          <div className="max-w-7xl mx-auto py-4 px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <BackToDashboard />
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => navigate('/projects')}
                  className="px-4 py-2 bg-white/10 rounded-md text-sm hover:bg-white/20 transition-all"
                >
                  Projects
                </button>
                <button
                  onClick={() => navigate('/experience')}
                  className="px-4 py-2 bg-white/10 rounded-md text-sm hover:bg-white/20 transition-all"
                >
                  Experience
                </button>
                <button
                  onClick={() => navigate('/certificates')}
                  className="px-4 py-2 bg-white/10 rounded-md text-sm hover:bg-white/20 transition-all"
                >
                  Certificates
                </button>
                <button
                  onClick={() => navigate('/about')}
                  className="px-4 py-2 bg-white/10 rounded-md text-sm hover:bg-white/20 transition-all"
                >
                  About
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Pagetrasition>
  );
};

export default Skills;

import React from "react";
import Pagetrasition from '../components/PageTransition'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
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
      name: "VS Code",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      description: "Popular code editor.",
    },
    {
      name: "Figma",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      description: "Collaborative UI/UX design tool.",
    },
    {
      name: "C++",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      description: "Object-oriented programming language.",
    },
  ],
};

const Skills = () => {
  return (
    <Pagetrasition>
     <div className="absolute top-4 left-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <ArrowLeft size={20} />
            <span className="text-sm sm:text-base">Back to Dashboard</span>
          </button>
        </div>
    <div className="relative w-full flex flex-col items-center px-4 sm:px-10 mt-20 font-sans">
      <h2 className="text-center text-white text-3xl sm:text-4xl font-bold bg-[#0f172a] px-6 py-3 rounded-lg border border-[#3b82f6] shadow-[0_0_15px_#3b82f6] mb-20">
        MY SKILLS
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-start gap-16 sm:gap-28">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="flex flex-col items-center">
            <div className="text-[#60a5fa] text-xl font-semibold mb-6 underline underline-offset-4">
              {category}
            </div>
            <div className="flex flex-col gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="relative group">
                  <div className="flex items-center gap-3 border border-[#3b82f6] text-white px-4 py-2 rounded-full hover:scale-105 transition-transform cursor-pointer bg-[#1e293b]/30 shadow-[0_0_12px_#3b82f6] backdrop-blur-md animate-float">
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-6 h-6 object-contain animate-pulse"
                    />
                    <span className="text-sm sm:text-base">{skill.name}</span>
                  </div>

                  {/* Hover Card */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-30 hidden group-hover:flex flex-col bg-[#0f172a] text-white text-xs sm:text-sm border border-[#3b82f6] rounded-md p-3 shadow-[0_0_15px_#3b82f6] w-56 text-center transition-all duration-300">
                    {skill.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Float animation */}
      <style jsx>{`
        .animate-float {
          animation: floaty 4s ease-in-out infinite;
        }
        @keyframes floaty {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
    </Pagetrasition>
  );
};

export default Skills;

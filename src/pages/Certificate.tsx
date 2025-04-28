import React from "react";
import { useNavigate } from "react-router-dom";
import Jsf from '../assets/Js_01_img.png';
import BackToDashboard from '../components/BackToDashboard';
import { Home } from 'lucide-react';

// Certificate data - you can add more here
const certificatesData = [
  {
    title: "Advanced JavaScript Patterns",
    issuer: "AIM4YOU Finance & Investing",
    date: "April 2024",
    description: "Mastered advanced JavaScript design patterns including module pattern, singleton, factory, observer and MVC architecture.",
    img: Jsf,
    topics: ["Factory", "Observer", "MVC", "ES6+", "Modular JS"]
  },
  {
    title: "Advanced JavaScript Patterns",
    issuer: "AIM4YOU Finance & Investing",
    date: "April 2024",
    description: "Mastered advanced JavaScript design patterns including module pattern, singleton, factory, observer and MVC architecture.",
    img: Jsf,
    topics: ["Factory", "Observer", "MVC", "ES6+", "Modular JS"]
  },
  {
    title: "Advanced JavaScript Patterns",
    issuer: "AIM4YOU Finance & Investing",
    date: "April 2024",
    description: "Mastered advanced JavaScript design patterns including module pattern, singleton, factory, observer and MVC architecture.",
    img: Jsf,
    topics: ["Factory", "Observer", "MVC", "ES6+", "Modular JS"]
  },
  {
    title: "Advanced JavaScript Patterns",
    issuer: "AIM4YOU Finance & Investing",
    date: "April 2024",
    description: "Mastered advanced JavaScript design patterns including module pattern, singleton, factory, observer and MVC architecture.",
    img: Jsf,
    topics: ["Factory", "Observer", "MVC", "ES6+", "Modular JS"]
  },
];

const CertificateCard = ({ certificate }) => {
  return (
    <div className="group w-full [perspective:1000px]">
      {/* Increased height for larger cards */}
      <div className="relative w-full h-[400px] sm:h-[450px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front Side - Increased padding and size */}
        <div className="absolute w-full h-full rounded-xl bg-[#0f172a]/90 border border-blue-500 shadow-lg p-6 flex items-center justify-center [backface-visibility:hidden]">
          <img
            src={certificate.img}
            alt={certificate.title}
            className="max-h-full max-w-full object-contain rounded-md shadow-md"
          />
        </div>

        {/* Back Side - Adjusted spacing for larger card */}
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-blue-700 text-white p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">
            {certificate.title}
          </h3>
          <p className="text-base text-gray-300 mb-6 px-4">
            {certificate.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-auto">
            {certificate.topics?.map((topic, i) => (
              <span
                key={i}
                className="text-sm px-4 py-1.5 rounded-full bg-blue-800/20 border border-blue-400 text-blue-200"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Certificates = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-8 bg-[#0f172a]">

      <div className="max-w-7xl mx-auto">
        {/* Title Section with added instruction */}
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl sm:text-4xl font-bold bg-[#0f172a] px-6 py-3 rounded-lg border border-[#3b82f6] shadow-[0_0_15px_#3b82f6] mb-4 mx-auto w-fit">
            MY CERTIFICATES
          </h2>
          <p className="text-blue-400 text-sm sm:text-base mt-4 animate-pulse">
            ✨ Hover over certificates to explore details ✨
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificatesData.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </div>
      </div>

      {/* Replace the old navigation with this new one */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto">
        <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/30 rounded-full px-2 sm:px-4 py-2 shadow-lg">
          <div className="flex items-center justify-start gap-1.5 sm:gap-4 no-scrollbar overflow-x-auto">
            <button
              onClick={() => navigate('/')}
              className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800/80 rounded-full flex-shrink-0 flex items-center justify-center hover:bg-gray-700/80 transition-all cursor-none"
            >
              <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </button>
            {[
              { path: '/projects', label: 'Projects' },
              { path: '/skills', label: 'Skills' },
              { path: '/experience', label: 'Experience' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Connect' },
              { path: '/My_Other_Side', label: 'Other Side' }
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="text-[11px] sm:text-sm text-gray-300 hover:text-white px-1.5 sm:px-3 py-1 rounded-full hover:bg-white/10 transition-all cursor-none whitespace-nowrap flex-shrink-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Remove the old navigation bar */}
      {/* Remove this entire section
      <div className="w-full bg-gray-900/80 backdrop-blur-md border-t border-gray-800 mt-8">
        ... old navigation code ...
      </div>
      */}
    </div>
  );
};

export default Certificates;

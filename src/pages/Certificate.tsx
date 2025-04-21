import React from "react";
import { useNavigate } from "react-router-dom";
import Jsf from '../assets/Js_01_img.png';
import BackToDashboard from '../components/BackToDashboard';

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
];

const CertificateCard = ({ certificate }) => {
  return (
    <div className="group w-full [perspective:1000px]">
      <div className="relative w-full h-[300px] sm:h-[320px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front Side */}
        <div className="absolute w-full h-full rounded-xl bg-[#0f172a]/90 border border-blue-500 shadow-lg p-4 flex items-center justify-center [backface-visibility:hidden]">
          <img
            src={certificate.img}
            alt={certificate.title}
            className="max-h-full max-w-full object-contain rounded-md shadow-md"
          />
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-blue-700 text-white p-5 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center text-center">
          <h3 className="text-xl font-bold text-blue-400 mb-2">
            {certificate.title}
          </h3>
          <p className="text-sm text-gray-300 mb-4 px-2">
            {certificate.description}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-auto">
            {certificate.topics?.map((topic, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-blue-800/20 border border-blue-400 text-blue-200"
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
      <div className="absolute top-4 left-4">
        <BackToDashboard />
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-3xl sm:text-4xl font-bold bg-[#0f172a] px-6 py-3 rounded-lg border border-[#3b82f6] shadow-[0_0_15px_#3b82f6] mb-16 mx-auto w-fit">
          MY CERTIFICATES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificatesData.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;

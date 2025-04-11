import React from "react";
import { useNavigate } from "react-router-dom";

// Certificate data - 9 certificates total
const certificatesData = [
  {
    title: "Advanced JavaScript Patterns",
    issuer: "AIM4YOU Finance & Investing",
    date: "April 2024",
    description: "Mastered advanced JavaScript design patterns including module pattern, singleton, factory, observer and MVC architecture.",
    img: "/api/placeholder/320/180"
  },
  {
    title: "React.js Certification",
    issuer: "Meta",
    date: "February 2024",
    description: "Comprehensive course covering React fundamentals, hooks, state management, and building complex applications.",
    img: "/api/placeholder/320/180"
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "December 2023",
    description: "Completed intensive bootcamp covering front-end, back-end, databases, and deployment of full-stack applications.",
    img: "/api/placeholder/320/180"
  },
  {
    title: "MongoDB Database Administration",
    issuer: "MongoDB University",
    date: "October 2023",
    description: "Specialized certification in MongoDB database design, optimization, security, and administration.",
    img: "/api/placeholder/320/180"
  },
  {
    title: "UI/UX Design Principles",
    issuer: "Interaction Design Foundation",
    date: "August 2023",
    description: "Comprehensive training in user interface design, user experience principles, wireframing and prototyping.",
    img: "/api/placeholder/320/180"
  },
  {
    title: "Node.js Backend Development",
    issuer: "Coursera",
    date: "June 2023",
    description: "In-depth course on building scalable backends with Node.js, Express, and integrating with databases.",
    img: "/api/placeholder/320/180"
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2023",
    description: "Certification validating cloud expertise and understanding of AWS architecture, services, and security.",
    img: "/api/placeholder/320/180"
  },
  {
    title: "TypeScript Mastery",
    issuer: "Pluralsight",
    date: "March 2023",
    description: "Advanced TypeScript concepts including generics, interfaces, types, and integration with modern frameworks.",
    img: "/api/placeholder/320/180"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "January 2023",
    description: "Certification in creating responsive layouts, flexbox, CSS grid and mobile-first web design principles.",
    img: "/api/placeholder/320/180"
  }
];

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
    onClick={() => navigate("/")}
      className="flex items-center gap-2 text-gray-400 hover:text-white transition"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="m12 19-7-7 7-7"/>
        <path d="M19 12H5"/>
      </svg>
      <span className="text-sm sm:text-base">Back to Dashboard</span>
    </button>
  );
};

const CertificateCard = ({ certificate }) => {
  return (
    <div className="bg-[#0f172a]/80 border border-[#3b82f6] rounded-xl shadow-lg overflow-hidden w-full transition-all hover:scale-105 hover:shadow-xl">
      <div className="overflow-hidden border-b border-[#3b82f6]/40">
        <img 
          src={certificate.img} 
          alt={certificate.title} 
          className="w-full h-40 object-cover transition-transform hover:scale-110 duration-300"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-white text-lg font-bold mb-2 line-clamp-1">{certificate.title}</h3>
        <div className="flex justify-between items-center mb-3">
          <p className="text-[#60a5fa] text-sm font-medium truncate max-w-[60%]">{certificate.issuer}</p>
          <span className="text-gray-400 text-xs bg-[#1e293b] px-2 py-1 rounded">{certificate.date}</span>
        </div>
        
        <p className="text-gray-300 text-sm border-t border-[#3b82f6]/30 pt-3 mt-2 line-clamp-3">
          {certificate.description}
        </p>
      </div>
    </div>
  );
};

const Certificates = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen py-20 px-4 sm:px-8 bg-[#0f172a]">
      <div className="absolute top-4 left-4">
        <BackButton />
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
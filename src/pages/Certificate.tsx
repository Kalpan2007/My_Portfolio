import { useNavigate } from "react-router-dom";
import { BottomNav } from '../components/BottomNav';
import PageTransition from '../components/PageTransition';

// Certificate data - you can add more here
const certificatesData = [
  {
    title: "Introduction to JavaScript",
    issuer: "Sololearn",
    description: "Completed a foundational JavaScript course covering core programming concepts, including functions, loops, conditions, DOM manipulation, and ES6+ features, with practical and theoretical understanding.",
    img: 'https://res.cloudinary.com/dxdrzit6x/image/upload/v1745994133/daf7a3e3-434d-4496-8a6b-7d99a520e5be_nolncv.png', 
    topics: ["Variables", "Functions", "Loops", "Conditions", "Events", "DOM", "Basics of ES6"]
  } , 
  {
    title: "JavaScript Intermediate",
    issuer: "Sololearn",
    description: "Completed an intermediate-level JavaScript course focused on deeper programming concepts such as scope, closures, callbacks, and ES6+ features, with practical exercises to strengthen problem-solving and coding fluency.",
    img: 'https://res.cloudinary.com/dxdrzit6x/image/upload/v1745993850/Js_01_img-Bu2qmYFf_jnd5xc.png',
    topics: ["Scope", "Closures", "Callbacks", "Arrays & Objects", "ES6+", "Functions", "Intermediate Logic"]
  } , 
  
  
  
];

const CertificateCard = ({ certificate }) => {
  return (
    <PageTransition>
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
    </PageTransition>
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

      
     <BottomNav />
    </div>
  );
};

export default Certificates;

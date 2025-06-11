import { useState } from "react";
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
  const [isFlipped, setIsFlipped] = useState(false);
  const isMobile = window.innerWidth < 1024;

  return (
    <PageTransition>
      <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[450px]">
        {/* Card Container */}
        <div 
          className="w-full h-full cursor-pointer group"
          onClick={() => isMobile && setIsFlipped(!isFlipped)} // Only trigger on mobile
        >
          {/* Front Side */}
          <div 
            className={`
              absolute inset-0 w-full h-full rounded-xl 
              bg-[#0f172a]/90 border border-blue-500 
              shadow-lg p-4 sm:p-6 
              transition-all duration-500 ease-in-out
              ${isMobile ? (
                isFlipped ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              ) : (
                'lg:group-hover:opacity-0 lg:group-hover:scale-95 opacity-100 scale-100'
              )}
            `}
          >
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={certificate.img}
                alt={certificate.title}
                className="max-h-full max-w-full object-contain rounded-md shadow-md"
                draggable="false"
              />
            </div>
          </div>

          {/* Back Side */}
          <div 
            className={`
              absolute inset-0 w-full h-full rounded-xl
              bg-gradient-to-br from-[#1e293b] to-[#0f172a] 
              border border-blue-700 text-white
              p-4 sm:p-8 
              transition-all duration-500 ease-in-out
              ${isMobile ? (
                isFlipped ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              ) : (
                'lg:group-hover:opacity-100 lg:group-hover:scale-100 opacity-0 scale-95'
              )}
            `}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4">
                  {certificate.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-6 overflow-y-auto max-h-[150px] scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent">
                  {certificate.description}
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {certificate.topics?.map((topic, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm px-3 py-1 rounded-full 
                             bg-blue-800/20 border border-blue-400 text-blue-200"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Indicator - Only show on mobile */}
        {isMobile && (
          <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-blue-400/80">
            Tap to {isFlipped ? 'view certificate' : 'see details'}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

const Certificates = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12 sm:py-20 px-4 sm:px-8 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold bg-[#0f172a] px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-[#3b82f6] shadow-[0_0_15px_#3b82f6] mb-4 mx-auto w-fit">
            MY CERTIFICATES
          </h2>
          <p className="text-blue-400 text-sm sm:text-base mt-4 animate-pulse">
            ✨ Tap certificates to explore details ✨
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomNav } from '../components/BottomNav';
import PageTransition from '../components/PageTransition';

const certificatesData = [
  {
    title: "GitHub Copilot Fundamentals",
    issuer: "Microsoft x Simplilearn SkillUp",
    description: "Completed a foundational course on GitHub Copilot focused on leveraging AI to assist in code generation, while reinforcing core programming principles, logical thinking, and AI-human collaboration for efficient and creative development.",
    img: "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750758634/Github-Copilot-Fundamental_xmazsw.jpg",
    credentialUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0ODc2IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODM1MzA2MF84Njk5NTI2MTc0NzQyMjU5NjExMi5wbmciLCJ1c2VybmFtZSI6IkthbHBhbiBLYW5lcml5YSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fdashboard%2Fcertificate&%24web_only=true&_branch_match_id=1360491066572688441&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FV97VM8vQKTQlwDUmyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAPgrARxBAAAA",
    topics: ["AI Coding", "GitHub Copilot", "Prompting", "Coding Efficiency", "Logic Building", "Developer Mindset", "Human-AI Collaboration"]
  },
  {
    title: "Amazon DocumentDB",
    issuer: "AWS x Simplilearn SkillUp",
    description: "Completed a course on Amazon DocumentDB (MongoDB-compatible) covering scalable document-based data models, high-availability architecture, real-world NoSQL use cases, and AWS-native integrations for performance-driven applications.",
    img: "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750758487/AWS_DOCUMENTDB_page-0001_k1qcob.jpg",
    credentialUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0NDkwIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODM3NDA1OV84Njk5NTI2MTc0Nzg5NTM2NTkzMi5wbmciLCJ1c2VybmFtZSI6IkthbHBhbiBLYW5lcml5YSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7421%2FGetting-Started-with-Amazon-DocumentDB-%2528with-MongoDB-compatibility%2529%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1360491066572688441&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVzw42SwkrMfF3DUmyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDALJ27MxBAAAA",
    topics: ["DocumentDB", "NoSQL", "High Availability", "Nested Queries", "Scaling on AWS", "JSON Aggregation", "MongoDB Compatibility"]
  },
  {
    title: "Azure Fundamentals",
    issuer: "Simplilearn SkillUp",
    description: "Completed a fundamentals-level course on Microsoft Azure covering cloud services, storage, web apps, VMs, DevOps tools, and real-world interview prep, gaining core insights into Azure’s ecosystem and its role in the cloud landscape.",
    img: "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750757944/Microsoft_Azure_Fundametal_Simplilearn_page-0001_shgail.jpg",
    credentialUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzI4IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODM5OTE1MV84Njk5NTI2MTc0ODQyNjkyMjczNS5wbmciLCJ1c2VybmFtZSI6IkthbHBhbiBLYW5lcml5YSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4225%2FAzure-Fundamentals%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1360491066572688441&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVj8pODQ%2BOCnXxCkmyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDANPEqEFBAAAA",
    topics: ["Azure Services", "Web Apps", "Storage & VMs", "DevOps", "Cloud Basics", "Azure vs AWS vs GCP", "Cloud Interview Prep"]
  },
  {
    title: "Azure Fundamentals (Hands-on Training)",
    issuer: "Microsoft x Rai University",
    description: "Completed a 2-day hands-on training on Azure Fundamentals covering essential cloud concepts, services, and real-world application of Azure technologies, organized by Rai University in collaboration with Microsoft.",
    img: "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750759693/Microsoft_Adzure_Fundamental_trainnig_page-0001_otxcv5.jpg",
    credentialUrl: "https://drive.google.com/file/d/1ebVe6qBk18BSg9jYPsHvaBIlb5cjQOhK/view?usp=drive_link",
    topics: ["Azure Basics", "Cloud Concepts", "Hands-on Labs", "Cloud Services", "Training Program", "Microsoft Azure", "Cloud Fundamentals"]
  },
  {
    title: "Power BI (Hands-on Training)",
    issuer: "Microsoft x Rai University",
    description: "Completed a hands-on Power BI training program organized by Rai University in collaboration with Microsoft, covering data visualization, dashboards, DAX functions, and real-time analytics using Power BI tools and best practices.",
    img: "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750759706/Microsoft_power_bi_Training_page-0001_pahbgj.jpg",
    credentialUrl: "https://drive.google.com/file/d/1RipU2hLaIMN7muPNcu9PnMGbMo9Y4v5b/view?usp=drive_link",
    topics: ["Power BI", "Data Visualization", "Dashboards", "DAX", "Reports", "Analytics", "Microsoft BI Tools"]
  },
  {
    title: "Hack With Gujarat – Hackathon Participant",
    issuer: "DevXpanse",
    description: "Participated in the Hack With Gujarat hackathon, leading team '4Miners' through ideation, development, and teamwork. Demonstrated leadership, collaboration, and problem-solving under pressure during an open-source innovation sprint.",
    img: "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750760919/Hack_With_Gujarat_Partcipation_ajhwij.jpg",
    credentialUrl: "https://drive.google.com/file/d/1YF46DpVy_w8-bCnMeKG6U4bZGEvr3b1S/view?usp=drive_link",
    topics: ["Hackathon", "Team Leadership", "Open Source", "Problem Solving", "Project Coordination", "Innovation", "Collaboration"]
  },
  {
    title: "Node.js Fundamentals",
    issuer: "HackerRank",
    description: "Completed a foundational Node.js course focused on asynchronous programming, event-driven architecture, real-time data handling, and building robust, scalable backends with practical applications and problem-solving scenarios.",
    img: "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750758787/nodejs_basic_certificate_page-0001_so0vwq.jpg",
    credentialUrl: "https://www.hackerrank.com/certificates/41c95ccb1eb2",
    topics: ["Node.js", "EventEmitter", "Async Programming", "Real-time Data", "Backend Logic", "Validation", "Scalable Systems"]
  },

  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    description: "Earned the Problem Solving (Basic) Certificate by mastering key algorithmic thinking, structured logic, and optimized solutions across challenges involving arrays, graphs, and patterns like prefix sums and sliding windows.",
    img: "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750759415/problem_solving_basic_certificate_page-0001_pw2obl.jpg",
    credentialUrl: "https://www.hackerrank.com/certificates/c22c01e73092",
    topics: ["Algorithms", "Data Structures", "Prefix Sum", "Sliding Window", "Graph Traversal", "Optimization", "Logical Thinking"]
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    description: "Completed the React (Basic) Certificate focused on practical UI building, state management, and reusable component logic through real-world tasks like sorting data and building dynamic slideshow apps using clean, structured React code.",
    img: "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750759575/React_Baisc_Hackerrank_my4kl8.jpg",
    credentialUrl: "https://www.hackerrank.com/certificates/fd4ec8a7c8af",
    topics: ["React.js", "JSX", "State Management", "Component Logic", "Dynamic Rendering", "Sorting UI", "Frontend Problem Solving"]
  },
  {
    title: "Introduction to JavaScript",
    issuer: "Sololearn",
    description: "Completed a foundational JavaScript course covering core programming concepts, including functions, loops, conditions, DOM manipulation, and ES6+ features, with practical and theoretical understanding.",
    img: "https://res.cloudinary.com/dxdrzit6x/image/upload/v1745994133/daf7a3e3-434d-4496-8a6b-7d99a520e5be_nolncv.png",
    credentialUrl: "https://www.sololearn.com/certificates/CC-JWWBYZO3",
    topics: ["Variables", "Functions", "Loops", "Conditions", "Events", "DOM", "Basics of ES6"]
  },
  {
    title: "JavaScript Intermediate",
    issuer: "Sololearn",
    description: "Completed an intermediate-level JavaScript course focused on deeper programming concepts such as scope, closures, callbacks, and ES6+ features, with practical exercises to strengthen problem-solving and coding fluency.",
    img: "https://res.cloudinary.com/dxdrzit6x/image/upload/v1745993850/Js_01_img-Bu2qmYFf_jnd5xc.png",
    credentialUrl: "https://www.sololearn.com/certificates/CC-OW1BM95B",
    topics: ["Scope", "Closures", "Callbacks", "Arrays & Objects", "ES6+", "Functions", "Intermediate Logic"]
  },
];

const CertificateCard = ({ certificate, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isMobile = window.innerWidth < 1024;

  const handleCredentialClick = (e) => {
    e.stopPropagation();
    window.open(certificate.credentialUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <PageTransition>
      <div className="relative w-full h-[400px] sm:h-[450px] group">
        {/* Card Container */}
        <div
          className="w-full h-full cursor-pointer perspective-1000"
          onClick={() => isMobile && setIsFlipped(!isFlipped)}
        >
          {/* Front Side */}
          <div
            className={`
              absolute inset-0 w-full h-full rounded-xl 
              bg-[#0f172a]/90 border border-blue-500 
              shadow-lg shadow-blue-500/20 p-4 sm:p-6 
              transition-all duration-700 ease-in-out transform-gpu
              ${isMobile ? (
                isFlipped ? 'opacity-0 scale-95 rotate-y-180' : 'opacity-100 scale-100 rotate-y-0'
              ) : (
                'lg:group-hover:opacity-0 lg:group-hover:scale-95 lg:group-hover:rotate-y-180 opacity-100 scale-100 rotate-y-0'
              )}
            `}
          >
            <div className="w-full h-full flex flex-col items-center justify-center relative">
              {/* Certificate Image */}
              <img
                src={certificate.img}
                alt={certificate.title}
                className="w-[350px] h-[250px] object-contain rounded-md shadow-lg transition-transform duration-300 group-hover:scale-105"
                draggable="false"
              />

              {/* Title and Issuer */}
              <div className="mt-4 text-center">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  {certificate.title}
                </h3>
                <p className="text-blue-400 text-sm mt-1">
                  {certificate.issuer}
                </p>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div
            className={`
              absolute inset-0 w-full h-full rounded-xl
              bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#0f172a] 
              border border-blue-700 text-white
              p-4 sm:p-6 
              transition-all duration-700 ease-in-out transform-gpu
              shadow-xl shadow-blue-500/30
              ${isMobile ? (
                isFlipped ? 'opacity-100 scale-100 rotate-y-0' : 'opacity-0 scale-95 rotate-y-180'
              ) : (
                'lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:rotate-y-0 opacity-0 scale-95 rotate-y-180'
              )}
            `}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="text-center mb-4">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {certificate.title}
                </h3>
                <p className="text-blue-300 text-sm font-medium">
                  Issued by {certificate.issuer}
                </p>
              </div>
              <div className="flex-1 mb-4">
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed overflow-y-auto max-h-[120px] scrollbar-thin scrollbar-thumb-blue-500/30 scrollbar-track-transparent">
                  {certificate.description}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-blue-400 text-xs font-semibold mb-2 text-center">SKILLS ACQUIRED</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {certificate.topics?.map((topic, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full 
                               bg-blue-900/30 border border-blue-400/50 text-blue-200
                               transition-all duration-300 hover:bg-blue-800/40 hover:border-blue-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <button
                  onClick={handleCredentialClick}
                  className="inline-flex items-center gap-2 px-4 py-2 
                           bg-gradient-to-r from-blue-600 to-cyan-600 
                           hover:from-blue-500 hover:to-cyan-500 
                           text-white text-sm font-semibold rounded-lg 
                           transition-all duration-300 transform hover:scale-105 
                           shadow-lg hover:shadow-blue-500/50
                           border border-blue-400/30"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Credential
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Indicator */}
        {isMobile && (
          <div className="absolute -bottom-6 left-0 right-0 text-center">
            <div className="inline-flex items-center gap-2 text-xs text-blue-400/80 bg-[#0f172a]/80 px-3 py-1 rounded-full border border-blue-500/30">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
              Tap to {isFlipped ? 'view certificate' : 'see details'}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

const Certificates = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12 sm:py-20 px-4 sm:px-8 bg-[#0f172a] relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold 
                         bg-gradient-to-r from-[#0f172a] to-[#1e293b] 
                         px-6 sm:px-8 py-3 sm:py-4 rounded-xl 
                         border border-[#3b82f6] shadow-[0_0_30px_#3b82f6] 
                         mb-4 mx-auto w-fit
                         hover:shadow-[0_0_40px_#3b82f6] transition-all duration-300">
            MY CERTIFICATES
          </h2>
          <p className="text-blue-400 text-sm sm:text-base mt-4 animate-pulse">
            ✨ {window.innerWidth < 1024 ? 'Tap' : 'Hover over'} certificates to explore details & credentials ✨
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {certificatesData.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} index={index} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Certificates;
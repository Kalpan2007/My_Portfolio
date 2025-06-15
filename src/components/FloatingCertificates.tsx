import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FloatingCertificates: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const desktopCertificates = [
    {
      src: 'https://img.freepik.com/free-vector/flat-certificate-template_52683-61537.jpg?ga=GA1.1.1203808723.1750003632&semt=ais_hybrid&w=740',
      position: { left: '0%', top: '15%' },
      rotate: -4
    },
    {
      src: 'https://img.freepik.com/free-vector/flat-certificate-template_52683-61537.jpg?ga=GA1.1.1203808723.1750003632&semt=ais_hybrid&w=740',
      position: { left: '35%', top: '40%' },
      rotate: 3
    }
  ];

  const mobileCertificates = [
    {
      src: '/certificates/certificate1.jpg',
      position: { left: '5%', top: '10%' },
      rotate: -2
    },
    {
      src: '/certificates/certificate2.jpg',
      position: { left: '35%', top: '5%' },
      rotate: 1
    },
    {
      src: '/certificates/certificate3.jpg',
      position: { left: '65%', top: '15%' },
      rotate: -1
    },
    {
      src: '/certificates/certificate4.jpg',
      position: { left: '20%', top: '40%' },
      rotate: 2
    },
    {
      src: '/certificates/certificate5.jpg',
      position: { left: '50%', top: '35%' },
      rotate: -2
    }
  ];

  const activeCertificates = isMobile ? mobileCertificates : desktopCertificates;

  return (
    <div className={`relative ${isMobile ? 'h-40' : 'h-36'} overflow-hidden`}>
      {activeCertificates.map((cert, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: cert.position.left,
            top: cert.position.top,
            zIndex: index
          }}
          animate={{
            y: [0, -6, 0],
            rotate: [cert.rotate - 0.5, cert.rotate + 0.5, cert.rotate - 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.6,
            ease: "easeInOut",
          }}
        >
          <div 
            className={`relative overflow-hidden transform transition-all duration-300 
                       hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 rounded-md
                       ${isMobile ? 'w-20 h-14' : 'w-32 h-20'}`}
            style={{
              transform: `rotate(${cert.rotate}deg)`,
              boxShadow: '0 2px 4px rgba(59, 130, 246, 0.1)'
            }}
          >
            <img
              src={cert.src}
              alt={`Certificate ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCertificates;
import { motion } from 'framer-motion';

const ProjectImageScroll: React.FC = () => {
  const projectImages = [
    'data:image/jpeg;base64,...', // your existing image
    '/project2.jpg',
    '/project3.jpg',
    '/project4.jpg',
    '/project5.jpg',
    '/project6.jpg',
    '/project7.jpg',
    '/project8.jpg',
    '/project9.jpg',
    '/project10.jpg',
  ];

  return (
    <div className="relative w-full h-24 sm:h-32 md:h-40 overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-sm"></div>
      
      {/* Images container */}
      <motion.div
        className="flex gap-4 absolute py-2"
        animate={{
          x: [0, -2400], // Increased movement range
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40, // Slower animation
            ease: "linear",
          },
        }}
      >
        {/* Double the images for seamless loop */}
        {[...projectImages, ...projectImages].map((image, index) => (
          <motion.div
            key={index}
            className="relative w-36 sm:w-44 md:w-52 h-20 sm:h-28 md:h-36 flex-shrink-0 
                     rounded-xl overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 
                       transition-transform duration-500"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t 
                          from-blue-900/50 via-blue-900/20 to-transparent 
                          group-hover:opacity-0 transition-opacity duration-300">
            </div>
            
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 
                       bg-blue-500/20 transition-opacity duration-300"
              initial={false}
              whileHover={{ 
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Side fade effects */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
    </div>
  );
};

export default ProjectImageScroll;
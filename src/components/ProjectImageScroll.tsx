import { motion } from 'framer-motion';

const ProjectImageScroll: React.FC = () => {
  const projectImages = [
    'https://res.cloudinary.com/dxdrzit6x/image/upload/v1750666584/Screenshot_2025-06-23_134609_gltegu.png', 
    'https://res.cloudinary.com/dxdrzit6x/image/upload/v1750681853/Screenshot_2025-06-23_175924_dd0l0j.png',
    'https://res.cloudinary.com/dxdrzit6x/image/upload/v1750685452/Screenshot_2025-06-23_185919_tybcvb.png',
    'https://res.cloudinary.com/dxdrzit6x/image/upload/v1750688528/Screenshot_2025-06-23_195029_lmn5ij.png',
    'https://res.cloudinary.com/dxdrzit6x/image/upload/v1750689804/Screenshot_2025-06-23_201228_p9a8jq.png',
    'https://res.cloudinary.com/dxdrzit6x/image/upload/v1750751815/Screenshot_2025-06-24_132636_ycedei.png',
    'https://res.cloudinary.com/dxdrzit6x/image/upload/v1750754155/Screenshot_2025-06-24_140351_vfpegp.png',
    'https://res.cloudinary.com/dxdrzit6x/image/upload/v1750755073/Screenshot_2025-06-24_142058_zfc5rk.png',
    'https://res.cloudinary.com/dxdrzit6x/image/upload/v1750755316/Screenshot_2025-06-24_142500_lc22wl.png',
    'https://res.cloudinary.com/dxdrzit6x/image/upload/v1750694982/Screenshot_2025-06-23_213848_k821o4.png',
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
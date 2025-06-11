import { motion } from 'framer-motion';

export const FloatingDock = ({ items }) => {
  return (
    <motion.div 
      className="flex items-center justify-center gap-3 sm:gap-4 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg max-w-fit mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {items.map((item, i) => (
        <motion.a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl hover:bg-white/10 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute -top-12 scale-0 px-3 py-2 text-sm font-medium text-white bg-black/70 rounded-md backdrop-blur-sm group-hover:scale-100 transition-transform">
            {item.title}
          </span>
          {item.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};
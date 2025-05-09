import { useNavigate, useLocation } from 'react-router-dom';
import { Home, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import debounce from 'lodash.debounce';

const routes = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/experience', label: 'Experience' },
  { path: '/about', label: 'About' },
  { path: '/certificates', label: 'Certificates' },
  { path: '/contact', label: 'Connect' },
  { path: '/My_Other_Side', label: 'Other Side' }
];

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navScrollRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);
  const isMobile = window.innerWidth <= 768;

  // Debounced scroll handler
  const handleScroll = useMemo(
    () =>
      debounce((direction: 'left' | 'right') => {
        if (navScrollRef.current) {
          const scrollAmount = isMobile ? 100 : 200;
          const currentScroll = navScrollRef.current.scrollLeft;
          
          navScrollRef.current.scrollTo({
            left: currentScroll + (direction === 'left' ? -scrollAmount : scrollAmount),
            behavior: 'smooth'
          });
        }
      }, 100),
    [isMobile]
  );

  // Optimized scroll check
  const handleScrollCheck = useCallback(() => {
    if (navScrollRef.current) {
      const hasOverflow = navScrollRef.current.scrollWidth > navScrollRef.current.clientWidth;
      const hasLeftScroll = navScrollRef.current.scrollLeft > 10;
      const hasRightScroll = 
        navScrollRef.current.scrollLeft < 
        navScrollRef.current.scrollWidth - navScrollRef.current.clientWidth - 10;
      
      setShowLeftScroll(hasOverflow && hasLeftScroll);
      setShowRightScroll(hasOverflow && hasRightScroll);
    }
  }, []);

  useEffect(() => {
    handleScrollCheck();
    window.addEventListener('resize', handleScrollCheck);
    return () => window.removeEventListener('resize', handleScrollCheck);
  }, [handleScrollCheck]);

  // Check if route is active
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto">
      <motion.div 
        className="nav-glassmorphism relative bg-gray-900/40 backdrop-blur-lg border border-cyan-700/30 rounded-full px-2 sm:px-4 py-2 shadow-lg shadow-cyan-900/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {showLeftScroll && (
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-gray-800/90 border border-cyan-500/30 rounded-full flex-shrink-0 flex items-center justify-center hover:bg-cyan-900/80 transition-all duration-300 cursor-none"
          >
            <ChevronLeft className="w-4 h-4 text-cyan-300" />
          </button>
        )}

        <div 
          ref={navScrollRef}
          className="flex items-center justify-start gap-2 sm:gap-4 overflow-x-auto scrollbar-hide"
          onScroll={handleScrollCheck}
        >
          {routes.map((route, index) => (
            <button
              key={route.path}
              onClick={() => navigate(route.path)}
              className={`
                text-[11px] sm:text-sm px-1.5 sm:px-3 py-1 rounded-full transition-all cursor-none whitespace-nowrap flex-shrink-0
                ${isActive(route.path) 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'}
              `}
            >
              {index === 0 ? (
                <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              ) : (
                route.label
              )}
            </button>
          ))}
        </div>

        {showRightScroll && (
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-gray-800/90 border border-cyan-500/30 rounded-full flex-shrink-0 flex items-center justify-center hover:bg-cyan-900/80 transition-all duration-300 cursor-none"
          >
            <ChevronRight className="w-4 h-4 text-cyan-300" />
          </button>
        )}
      </motion.div>
    </div>
  );
};
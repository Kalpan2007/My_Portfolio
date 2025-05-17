import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { debounce } from 'lodash'; // Add this import
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import { SmoothCursor } from './components/CustomCursor'; 
import Aboutme from "./pages/About"
import Certificate from './pages/Certificate';
import Loader from './components/Loader'; // 👈 Import loader
import ScrollToTop from './components/ScrollToTop';
import OtherSection from './pages/OtherSide'

const router = createBrowserRouter(
  [
    { path: "/", element: <Dashboard /> },
    { path: "/projects", element: <Projects /> },
    { path: "/experience", element: <Experience /> },
    { path: "/skills", element: <Skills /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <Aboutme /> },
    { path: "/certificates", element: <Certificate /> },
    { path: "/My_Other_Side", element: <OtherSection /> }
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  

  useEffect(() => {
    // Handle mobile viewport height
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    const checkDevice = debounce(() => {
      const isMobile = window.innerWidth <= 768;
      setIsMobileOrTablet(isMobile);
      setViewportHeight(); // Update viewport height

      document.documentElement.style.setProperty(
        '--animate-bg', 
        isMobile ? 'none' : 'bg-shift 20s linear infinite'
      );
      
      document.body.classList.toggle('cursor-none', !isMobile);
    }, 100);

    // Initial check
    checkDevice();
    setViewportHeight();

    // Add event listeners
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', setViewportHeight);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', setViewportHeight);
      checkDevice.cancel();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), isMobileOrTablet ? 1500 : 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#1a1f35] text-gray-100 ${
      isMobileOrTablet ? 'mobile-optimized' : ''
    }`}>
      {/* Only show background pattern on desktop */}
      {!isMobileOrTablet && (
        <div className="fixed inset-0 w-full h-full bg-[radial-gradient(#1d284d_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40 animate-bg-shift" />
      )}
      
      {!isMobileOrTablet && <SmoothCursor />}

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader onFinish={() => setIsLoading(false)} />
        ) : (
          <RouterProvider router={router} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

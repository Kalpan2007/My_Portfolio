import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { debounce } from 'lodash';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import  SmoothCursor  from './components/CustomCursor';
import Aboutme from './pages/About';
import Certificate from './pages/Certificate';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import OtherSection from './pages/OtherSide';

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
  }, [isMobileOrTablet]);

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#1a1f35] text-gray-100 ${
          isMobileOrTablet ? 'mobile-optimized' : ''
        }`}
      >
        {/* Only show background pattern on desktop */}
        {!isMobileOrTablet && (
          <div
            className="fixed inset-0 w-full h-full bg-[radial-gradient(#1d284d_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40 animate-bg-shift"
          />
        )}

        {!isMobileOrTablet && <SmoothCursor />}

        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loader onFinish={() => setIsLoading(false)} />
          ) : (
            <>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<Aboutme />} />
                <Route path="/certificates" element={<Certificate />} />
                <Route path="/My_Other_Side" element={<OtherSection />} />
              </Routes>
            </>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
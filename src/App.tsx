import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/My_Other_Side" element={<OtherSection />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth <= 768;
      setIsMobileOrTablet(isMobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#1a1f35] text-gray-100 overflow-hidden ${!isMobileOrTablet ? 'cursor-none-important' : ''}`}>
        <div className="fixed inset-0 w-full h-full bg-[radial-gradient(#1d284d_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40 animate-bg-shift" />
        
        {!isMobileOrTablet && <SmoothCursor />}

        {isLoading ? (
          <Loader onFinish={() => setIsLoading(false)} />
        ) : (
          <AnimatedRoutes />
        )}
      </div>
    </Router>
  );
}

export default App;

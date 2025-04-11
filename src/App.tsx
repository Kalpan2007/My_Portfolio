import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor';
import Aboutme from "./pages/About"
import Certificate from './pages/Certificate'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#1a1f35] text-gray-100 overflow-hidden">
        <div className="fixed inset-0 w-full h-full bg-[radial-gradient(#1d284d_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40 animate-bg-shift" />
        <CustomCursor /> {/* Add the custom cursor here */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<Aboutme />} />
            <Route path='/certificates' element={<Certificate />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
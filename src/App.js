import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Metrics from './components/sections/Metrics';
import Leadership from './components/sections/Leadership';
import Industries from './components/sections/Industries';
import Experience from './components/sections/Experience';
import TechEcosystem from './components/sections/TechEcosystem';


function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative bg-black text-white selection:bg-brand-amber/30 selection:text-white overflow-x-hidden antialiased">
      {/* Premium Progress Bar with Brand Glow */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none">
        <motion.div
          className="h-full bg-brand-amber origin-left shadow-[0_0_15px_rgba(251,191,36,0.8)]"
          style={{ scaleX }}
        />
      </div>

      {/* Modern Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />

      <Navbar />
      <Hero />
      <Metrics />
      <div className="section-divider" />
      <Leadership />
      <Industries />
      <Experience />
      <TechEcosystem />
      <Footer />
    </div>
  );
}

export default App;
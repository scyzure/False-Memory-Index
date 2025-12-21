
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Gallery from './components/Gallery';
import CollectionView from './components/CollectionView';
import PhotoView from './components/PhotoView';

const Header = () => {
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMouseY(e.clientY);
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const threshold = 100;
  const headerOpacity = Math.max(0, 1 - (mouseY - threshold) / 300);
  const headerTranslateY = Math.min(0, -(mouseY - threshold) / 5);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-12 py-16 pointer-events-none flex justify-center">
      <motion.div 
        className="pointer-events-auto"
        animate={{ 
          opacity: headerOpacity,
          y: headerTranslateY,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 120, mass: 0.5 }}
      >
        <Link to="/">
          <h1 className="text-xl md:text-2xl font-serif font-bold tracking-[0.6em] uppercase transition-all duration-700 hover:tracking-[0.8em] text-neutral-200">
            False Memory Index
          </h1>
        </Link>
      </motion.div>
    </header>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative h-screen w-screen overflow-hidden bg-[#050505]">
        <Header />
        <main className="h-full w-full">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Gallery />} />
              <Route path="/collection/:id" element={<CollectionView />} />
              <Route path="/photo/:id" element={<PhotoView />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
};

export default App;

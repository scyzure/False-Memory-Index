
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COLLECTIONS } from '../constants';

const Gallery: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const velocityRef = useRef(0);
  const requestRef = useRef<number>(null);

  const maxSpeed = 15;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const mouseX = e.clientX;
      const offset = (mouseX - centerX) / centerX;
      velocityRef.current = -offset * maxSpeed;
    };

    const animate = () => {
      positionRef.current += velocityRef.current;
      const trackWidth = trackRef.current?.scrollWidth || 0;
      const visibleWidth = window.innerWidth;
      const minX = -(trackWidth - visibleWidth + 400);
      const maxX = 400;

      if (positionRef.current > maxX) {
        positionRef.current = maxX;
        velocityRef.current *= 0.1;
      }
      if (positionRef.current < minX) {
        positionRef.current = minX;
        velocityRef.current *= 0.1;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full h-full flex items-center overflow-hidden"
    >
      <div 
        ref={trackRef}
        className="flex gap-32 px-[35vw] items-center will-change-transform"
      >
        {COLLECTIONS.map((collection, idx) => (
          <Link 
            key={collection.id} 
            to={`/collection/${collection.id}`}
            className="group relative flex-shrink-0"
          >
            <div 
              className="relative h-[65vh] w-[450px] overflow-hidden rounded-sm transition-all duration-[1200ms] group-hover:scale-[1.01]"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent), linear-gradient(to bottom, transparent, black 2%, black 98%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent), linear-gradient(to bottom, transparent, black 2%, black 98%, transparent)',
                WebkitMaskComposite: 'source-in'
              }}
            >
              <img 
                src={collection.coverUrl} 
                alt={collection.title}
                className="w-full h-full object-cover grayscale-[0.1] opacity-90 scale-105 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-[1500ms]" />
            </div>
            
            <div className="mt-8 text-center space-y-2 opacity-70 group-hover:opacity-100 transition-opacity duration-1000">
               <h3 className="text-sm uppercase tracking-[0.8em] font-medium text-white">{collection.title}</h3>
               <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-400">Collection Vol_{idx.toString().padStart(2, '0')}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]" />
      <div className="absolute bottom-12 w-full flex justify-center pointer-events-none">
        <p className="text-[8px] uppercase tracking-[0.6em] text-neutral-600 opacity-60">
          Navigate Collections via cursor proximity
        </p>
      </div>
    </motion.div>
  );
};

export default Gallery;

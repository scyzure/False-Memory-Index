
import React, { useRef, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COLLECTIONS } from '../constants';

const CollectionView: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const collection = COLLECTIONS.find(c => c.id === id);
  const sceneRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  const velocityRef = useRef({ x: 0, y: 0 });
  const targetVelocityRef = useRef({ x: 0, y: 0 });
  const currentRotationRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>(null);

  const radius = 850;
  const maxSpeed = 0.003;

  const points = useMemo(() => {
    if (!collection) return [];
    const count = collection.photos.length;
    return collection.photos.map((photo, i) => {
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      return {
        photo,
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
      };
    });
  }, [collection, radius]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = viewerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const offsetX = (e.clientX - rect.left - cx) / cx;
      const offsetY = (e.clientY - rect.top - cy) / cy;

      targetVelocityRef.current = {
        y: offsetX * maxSpeed,
        x: -offsetY * maxSpeed,
      };
    };

    const animate = () => {
      velocityRef.current.x += (targetVelocityRef.current.x - velocityRef.current.x) * 0.05;
      velocityRef.current.y += (targetVelocityRef.current.y - velocityRef.current.y) * 0.05;

      currentRotationRef.current.x += velocityRef.current.x;
      currentRotationRef.current.y += velocityRef.current.y;

      if (sceneRef.current) {
        sceneRef.current.style.transform = `
          translate(-50%, -50%) 
          rotateX(${currentRotationRef.current.x}rad) 
          rotateY(${currentRotationRef.current.y}rad)
        `;
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

  if (!collection) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-[#050505] overflow-hidden"
      ref={viewerRef}
      style={{ perspective: '1400px' }}
    >
      <div 
        ref={sceneRef}
        className="absolute top-1/2 left-1/2 transition-transform will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {points.map((p) => (
          <Link
            key={p.photo.id}
            to={`/photo/${p.photo.id}`}
            className="absolute group flex items-center justify-center"
            style={{
              width: '300px',
              height: '200px',
              transform: `translate3d(${p.x}px, ${p.y}px, ${p.z}px)`,
              transformStyle: 'preserve-3d',
              marginLeft: '-150px',
              marginTop: '-100px',
            }}
          >
            <div className="relative w-full h-full overflow-hidden transition-all duration-700 group-hover:scale-110">
              <img 
                src={p.photo.url} 
                alt={p.photo.title}
                className="w-full h-full object-cover grayscale-[0.2] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                style={{
                  maskImage: 'radial-gradient(circle, black 40%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)'
                }}
              />
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </Link>
        ))}
      </div>

      <div className="absolute top-12 left-12 pointer-events-none">
        <h2 className="text-xs uppercase tracking-[0.8em] text-neutral-300 mb-2">{collection.title}</h2>
        <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-500">{collection.description}</p>
      </div>

      <button 
        onClick={() => navigate('/')}
        className="absolute bottom-12 right-12 text-[10px] uppercase tracking-[0.4em] text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-1"
      >
        Return Home
      </button>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
    </motion.div>
  );
};

export default CollectionView;

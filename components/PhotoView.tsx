
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PHOTOS } from '../constants';

const PhotoView: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const photo = PHOTOS.find(p => p.id === id);

  if (!photo) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[200] bg-[#050505] overflow-y-auto pt-32 pb-20 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div 
          className="relative overflow-hidden mx-auto cursor-zoom-out mb-12"
          onClick={() => navigate(-1)}
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black 3%, black 97%, transparent), linear-gradient(to right, transparent, black 3%, black 97%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 3%, black 97%, transparent), linear-gradient(to right, transparent, black 3%, black 97%, transparent)',
          }}
        >
          <motion.img 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            src={photo.url} 
            alt={photo.title} 
            className="w-full h-auto object-contain max-h-[75vh] mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl uppercase tracking-[0.6em] text-neutral-100 font-medium mb-1">{photo.title}</h2>
              <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
                Index Ref: {photo.id} // Location: {photo.location}
              </p>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed font-light max-w-md">
              {photo.description}
            </p>
          </div>

          <div className="border-l border-neutral-900 pl-12 space-y-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-[9px] uppercase tracking-[0.4em] text-neutral-600 font-bold mb-4">Metadata</h4>
                <div className="grid grid-cols-2 gap-y-4">
                  <div>
                    <span className="text-[8px] uppercase tracking-[0.2em] text-neutral-600 block mb-1">Year</span>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest">{photo.year}</span>
                  </div>
                  <div>
                    <span className="text-[8px] uppercase tracking-[0.2em] text-neutral-600 block mb-1">Category</span>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest">{photo.category}</span>
                  </div>
                  {photo.technicalDetails && (
                    <div className="col-span-2">
                      <span className="text-[8px] uppercase tracking-[0.2em] text-neutral-600 block mb-1">Technical Notes</span>
                      <p className="text-[10px] text-neutral-500 uppercase tracking-widest">
                        {photo.technicalDetails}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => navigate(-1)}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.4em] text-neutral-600 hover:text-white transition-colors"
      >
        Return to Index
      </button>
    </motion.div>
  );
};

export default PhotoView;

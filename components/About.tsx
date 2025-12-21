
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-8 py-20"
    >
      <h1 className="text-7xl font-serif mb-16 leading-none">
        Capturing the <br /> <span className="italic">unspoken.</span>
      </h1>
      
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-6 text-neutral-400 leading-relaxed">
          <p>
            Echoes is a multidisciplinary studio focused on visual storytelling through the lens of minimalism and high-contrast aesthetics. Based between the rugged landscapes of Iceland and the urban density of Tokyo.
          </p>
          <p>
            My work explores the relationship between light and shadow, permanence and transience. I believe every photograph is a conversation with time, a fragile echo of a moment that will never repeat.
          </p>
        </div>
        
        <div className="space-y-12">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-4">Exhibitions</h4>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between border-b border-neutral-900 pb-2">
                <span>The Void, Tokyo</span>
                <span className="text-neutral-600">2023</span>
              </li>
              <li className="flex justify-between border-b border-neutral-900 pb-2">
                <span>Silent Frames, Berlin</span>
                <span className="text-neutral-600">2022</span>
              </li>
              <li className="flex justify-between border-b border-neutral-900 pb-2">
                <span>Nordic Echoes, Oslo</span>
                <span className="text-neutral-600">2021</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-4">Awards</h4>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between border-b border-neutral-900 pb-2">
                <span>Leica Street Portraitist</span>
                <span className="text-neutral-600">2024</span>
              </li>
              <li className="flex justify-between border-b border-neutral-900 pb-2">
                <span>Sony World Photo Awards</span>
                <span className="text-neutral-600">2023</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-32 grayscale hover:grayscale-0 transition-all duration-1000">
         <img 
          src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1600" 
          alt="Studio View" 
          className="w-full aspect-[21/9] object-cover rounded-sm"
        />
      </div>
    </motion.div>
  );
};

export default About;

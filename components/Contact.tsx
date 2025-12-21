
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-8 py-20"
    >
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <h1 className="text-6xl font-serif mb-8">Let's <br /> create.</h1>
          <p className="text-neutral-500 mb-12 uppercase tracking-widest text-xs">
            Open for commissions & collaborations.
          </p>
          
          <div className="space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-1">General Inquiries</p>
              <a href="mailto:studio@echoes.com" className="text-xl hover:text-neutral-400 transition-colors">studio@echoes.com</a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-1">Commercial Representation</p>
              <p className="text-xl">Agency Art + Shadows</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-1">Location</p>
              <p className="text-xl">Based in the Shadows.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Name" 
                required
                className="w-full bg-transparent border-b border-neutral-800 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                value={formState.name}
                onChange={e => setFormState({...formState, name: e.target.value})}
              />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email" 
                required
                className="w-full bg-transparent border-b border-neutral-800 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                value={formState.email}
                onChange={e => setFormState({...formState, email: e.target.value})}
              />
            </div>
            <div className="relative group">
              <textarea 
                rows={4} 
                placeholder="Message" 
                required
                className="w-full bg-transparent border-b border-neutral-800 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700 resize-none"
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
              />
            </div>
            
            <button 
              type="submit"
              className="w-full py-6 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors disabled:bg-neutral-600"
              disabled={submitted}
            >
              {submitted ? "Message Received" : "Send Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

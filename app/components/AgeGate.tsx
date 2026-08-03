'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function AgeGate() {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  useEffect(() => {
    const verified = localStorage.getItem('grove_age_verified');
    setIsVerified(verified === 'true');
  }, []);

  useEffect(() => {
    if (isVerified === false) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isVerified]);

  const handleEnter = () => {
    localStorage.setItem('grove_age_verified', 'true');
    setIsVerified(true);
  };

  const handleExit = () => {
    window.location.href = 'https://google.com';
  };

  if (isVerified === null) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isVerified && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest p-6 backdrop-blur-xl"
        >
          {/* Dark Forest / Gold Luxury Modal */}
          <div className="flex flex-col items-center max-w-md w-full px-8 py-14 text-center card-dark rounded-2xl relative overflow-hidden">
            
            {/* Subtle glow behind logo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[var(--color-gold)] opacity-10 blur-3xl rounded-full" />

            {/* Crest / Logo */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative w-24 h-24 mb-6 z-10"
            >
              <Image
                src="/images/grove-crest.png"
                alt="The Grove Reserve"
                fill
                sizes="96px"
                className="object-contain drop-shadow-md"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="z-10 w-full flex flex-col items-center"
            >
              <h1 className="font-serif text-2xl md:text-3xl text-gold-gradient mb-3">
                PRIVATE ALLOCATION ACCESS
              </h1>

              <div className="gold-divider w-12 mb-6" />

              <p className="font-sans text-sm text-[var(--color-muted)] mb-10 max-w-[280px] font-light leading-relaxed">
                Are you 18 years or older?
              </p>

              {/* Actions */}
              <div className="flex flex-col w-full gap-4">
                <button
                  onClick={handleEnter}
                  className="btn-gold py-4 px-10 rounded-sm text-xs font-semibold w-full"
                >
                  [ ENTER VAULT ]
                </button>
                
                <button
                  onClick={handleExit}
                  className="btn-outline-gold py-4 px-10 rounded-sm text-xs w-full"
                >
                  [ EXIT ]
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

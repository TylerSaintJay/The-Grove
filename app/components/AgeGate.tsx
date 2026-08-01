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
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF9F6] p-6"
        >
          {/* Minimalist Age Gate Content */}
          <div className="flex flex-col items-center max-w-md w-full px-8 py-12 text-center bg-white shadow-[0_4px_40px_rgba(0,0,0,0.03)] border border-[rgba(26,26,26,0.05)] rounded-2xl">
            
            {/* Crest / Logo */}
            <div className="relative w-24 h-24 mb-8">
              <Image
                src="/images/grove-crest.png"
                alt="The Grove Reserve"
                fill
                sizes="96px"
                className="object-contain"
                priority
              />
            </div>

            <h1 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
              Are you 18 or older?
            </h1>

            <p className="font-sans text-sm text-[#1A1A1A]/70 mb-10 max-w-[280px] font-light leading-relaxed">
              You must be of legal age to enter this site.
            </p>

            {/* Actions */}
            <div className="flex flex-col w-full gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={handleEnter}
                className="btn-primary py-4 px-10 rounded-sm text-xs tracking-widest font-semibold flex-1"
              >
                YES
              </button>
              
              <button
                onClick={handleExit}
                className="btn-secondary py-4 px-10 rounded-sm text-xs tracking-widest flex-1"
              >
                NO
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

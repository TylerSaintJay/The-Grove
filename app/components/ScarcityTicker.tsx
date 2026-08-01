'use client';

import { motion } from 'framer-motion';

export default function ScarcityTicker() {
  return (
    <motion.div
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="sticky top-0 z-40 bg-[#1A1A1A] border-b border-[#1A1A1A] py-2 px-6 flex flex-col sm:flex-row justify-between items-center gap-1.5"
    >
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80 animate-pulse" />
        <span className="font-sans tracking-[0.15em] text-[10px] text-white uppercase font-medium">
          INAUGURAL PRE-RELEASE: ACTIVE
        </span>
      </div>

      <div className="font-sans tracking-[0.1em] text-[10px] text-white/70 uppercase">
        Batch 01 (Pre-Release): 14 Units Serialized [01/14 – 14/14]
      </div>
    </motion.div>
  );
}

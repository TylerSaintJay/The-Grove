'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScarcityTicker() {
  const [stock, setStock] = useState({ reserved: 14, total: 20 });

  useEffect(() => {
    fetch('/inventory.json')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data.reservedUnits === 'number') {
          setStock({
            reserved: data.reservedUnits,
            total: data.totalUnits || 20,
          });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <motion.div
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="sticky top-0 z-40 bg-[#0b1f16] border-b border-[rgba(223,186,107,0.15)] py-2.5 px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs"
    >
      <div className="flex items-center gap-2.5">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
        <span className="font-sans tracking-[0.2em] text-[10px] sm:text-[11px] text-[var(--color-gold)] uppercase font-semibold">
          LOT SECTION: 001 • INAUGURAL MICRO-DROP
        </span>
      </div>

      <div className="flex items-center gap-4 text-[10px] sm:text-[11px] font-sans">
        <span className="text-[#f4f1ea]/80 tracking-wider">
          Allocation Status:{' '}
          <strong className="text-[var(--color-gold)] font-mono font-medium">
            {stock.reserved} / {stock.total} Units Reserved
          </strong>
        </span>
        <span className="hidden md:inline-block text-[var(--color-gold-muted)]/60">•</span>
        <span className="hidden md:inline-block text-[var(--color-gold-muted)] tracking-wider uppercase text-[10px]">
          Johannesburg Express & Nationwide Dispatch
        </span>
      </div>
    </motion.div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TARGET_DATE = new Date('2026-08-08T00:00:00+02:00').getTime(); // SAST is UTC+2

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <div className="h-32"></div>;
  }

  const isComplete =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-3xl font-serif bg-gradient-to-r from-[#C5A059] via-[#E5C17C] to-[#C5A059] bg-clip-text text-transparent">
          Allocations Open
        </h3>
      </motion.div>
    );
  }

  const Segment = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center justify-center p-4 border border-[rgba(197,160,89,0.15)] bg-white/5 backdrop-blur-sm rounded-lg">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-5xl font-serif bg-gradient-to-b from-[#E5C17C] via-[#C5A059] to-[#C5A059] bg-clip-text text-transparent leading-none mb-2"
        >
          {value.toString().padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
      <span
        style={{ fontFamily: 'var(--font-cinzel)' }}
        className="text-[#D4C49A] text-xs tracking-[0.3em] uppercase"
      >
        {label}
      </span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 w-full max-w-2xl">
        <Segment label="Days" value={timeLeft.days} />
        <Segment label="Hours" value={timeLeft.hours} />
        <Segment label="Mins" value={timeLeft.minutes} />
        <Segment label="Secs" value={timeLeft.seconds} />
      </div>
      <p className="text-[#D4C49A] text-sm tracking-widest uppercase">
        Batch 01 Main Allocation Arrival
      </p>
    </motion.div>
  );
}

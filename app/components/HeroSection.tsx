'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {
  onOpenVerify: () => void;
}

export default function HeroSection({ onOpenVerify }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest"
    >
      {/* Background canister image, dimmed */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lifestyle-canister.jpg"
          alt="The Grove Reserve"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f16] via-transparent to-[#0b1f16]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-24">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 border border-[var(--color-gold)] rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" />
          <span className="font-sans text-[10px] tracking-[0.3em] text-[var(--color-gold)] uppercase">
            LOT 001 • Inaugural Micro-Drop
          </span>
        </motion.div>

        {/* Logo Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative w-28 h-28 mx-auto mb-8"
        >
          <Image
            src="/images/grove-crest.png"
            alt="The Grove Reserve"
            fill
            sizes="112px"
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#f4f1ea] mb-6 leading-tight"
        >
          Hand-Sealed Luxury<br />
          <span className="text-gold-gradient">Botanical Reserve</span>
        </motion.h1>

        <div className="gold-divider w-20 mx-auto mb-8" />

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-sans text-base md:text-lg text-[var(--color-muted)] max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Limited-run 3.5g precision canisters. Sealed at source for maximum terpene preservation. Numbered, authenticated, reserved.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#catalog"
            className="btn-gold py-4 px-10 rounded-sm text-xs font-bold w-full sm:w-auto"
          >
            [ CLAIM ALLOCATION ]
          </a>
          <button
            onClick={onOpenVerify}
            className="btn-outline-gold py-4 px-10 rounded-sm text-xs font-bold w-full sm:w-auto"
          >
            [ VERIFY LOT UNIT ]
          </button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] tracking-[0.3em] text-[var(--color-muted)] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-[var(--color-gold)] to-transparent"
          />
        </motion.div>

      </div>
    </section>
  );
}

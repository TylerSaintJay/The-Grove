'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {
  onOpenVerify: () => void;
}

export default function HeroSection({ onOpenVerify }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest pt-12 pb-20"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(223,186,107,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f16] via-transparent to-[#0b1f16]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[var(--color-gold)]/60 rounded-full bg-[#122b20]/60 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" />
          <span className="font-sans text-[10px] tracking-[0.25em] text-[var(--color-gold)] uppercase font-semibold">
            LOT SECTION: 001 • INAUGURAL PRE-ROLL DROP
          </span>
        </motion.div>

        {/* Logo Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative w-20 h-20 sm:w-24 sm:h-24 mb-6 bg-transparent"
        >
          <Image
            src="/images/grove-crest.png"
            alt="The Grove Reserve"
            fill
            sizes="96px"
            className="object-contain drop-shadow-[0_0_20px_rgba(223,186,107,0.3)] bg-transparent"
            priority
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#f4f1ea] mb-5 leading-[1.1] tracking-tight"
        >
          Hand-Crafted Luxury<br />
          <span className="text-gold-gradient">Botanical Pre-Rolls</span>
        </motion.h1>

        <div className="gold-divider w-24 mb-6" />

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-sans text-sm sm:text-base text-[var(--color-muted)] max-w-xl mx-auto mb-8 leading-relaxed font-light"
        >
          Pure single-source <strong className="text-[#f4f1ea] font-medium">White Widow • AAA</strong> flower. Sealed at source in tactile brushed vinyl pop-top tubes with gold foil serialization and terpene isolation.
        </motion.p>

        {/* Hero Product Visual Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative w-48 h-64 sm:w-60 sm:h-80 mb-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(223,186,107,0.25)_0%,transparent_65%)] blur-2xl pointer-events-none" />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/preroll-single.png"
              alt="The Grove Reserve Pre-Roll Tube - White Widow AAA"
              fill
              sizes="(max-width: 768px) 192px, 240px"
              className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
              priority
            />
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
        >
          <a
            href="#catalog"
            className="btn-gold py-4 px-8 rounded-sm text-xs font-bold w-full sm:w-auto text-center"
          >
            [ CLAIM ALLOCATION — R150 ]
          </a>
          <button
            onClick={onOpenVerify}
            className="btn-outline-gold py-4 px-8 rounded-sm text-xs font-bold w-full sm:w-auto"
          >
            [ VERIFY LOT UNIT ]
          </button>
        </motion.div>

        {/* Quick Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[11px] text-[var(--color-muted)]/80 font-sans tracking-wider uppercase"
        >
          <span className="flex items-center gap-1.5">
            <span className="text-[var(--color-gold)]">⚡</span> JHB Same-Day (Uber Connect)
          </span>
          <span className="text-[var(--color-gold)]/40">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-[var(--color-gold)]">📦</span> The Courier Guy Nationwide
          </span>
          <span className="text-[var(--color-gold)]/40">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-[var(--color-gold)]">🔒</span> 24h Terpene Guarantee
          </span>
        </motion.div>

      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

const slides = [
  {
    id: 'logo-slide',
    type: 'logo',
    src: '/images/grove-crest.png',
    alt: 'The Grove Reserve Logo',
  },
  {
    id: 'canister-slide',
    type: 'product',
    src: '/images/vessel-35g.png',
    alt: 'The Grove Reserve 3.5g Canister',
  },
  {
    id: 'lifestyle-slide',
    type: 'product',
    src: '/images/lifestyle-canister.jpg',
    alt: 'The Grove Reserve Lifestyle',
  },
  {
    id: 'macro-slide',
    type: 'product',
    src: '/images/macro-foil.jpg',
    alt: 'Gold Foil Matrix Detail',
  },
  {
    id: 'dual-slide',
    type: 'product',
    src: '/images/dual-tins.png',
    alt: 'The Grove Reserve Dual Tins',
  }
];

export default function HeroSection({ onOpenCheckout }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-white overflow-hidden pb-16">
      
      {/* Top Header Navigation (Minimalist) */}
      <header className="absolute top-0 left-0 w-full z-20 px-6 py-6 flex items-center justify-between border-b border-[rgba(26,26,26,0.05)] bg-white/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image src="/images/grove-crest.png" alt="Crest" fill sizes="40px" className="object-contain" />
          </div>
          <div>
            <span className="font-serif text-sm tracking-[0.15em] text-[#1A1A1A] font-medium block leading-none">THE GROVE</span>
            <span className="font-cinzel text-[9px] tracking-[0.2em] text-[#C5A059] block mt-1">RESERVE</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-xs font-sans tracking-[0.1em] text-[#1A1A1A]/80 uppercase">
          <a href="#vessel" className="hover:text-[#C5A059] transition-colors">The Collection</a>
          <a href="#authenticate" className="hover:text-[#C5A059] transition-colors">Heritage</a>
        </nav>

        <button
          onClick={onOpenCheckout}
          className="btn-primary px-6 py-3 text-[10px]"
        >
          Allocations
        </button>
      </header>

      {/* Main Slider Content */}
      <div className="relative flex-grow flex items-center justify-center pt-24">
        
        {/* Carousel Slider */}
        <div className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center bg-[#FAF9F6] mx-6 lg:mx-12 rounded-sm overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className={`relative ${slides[currentSlide].type === 'logo' ? 'w-48 h-48 md:w-64 md:h-64' : 'w-full h-full max-w-lg'}`}>
                <Image
                  src={slides[currentSlide].src}
                  alt={slides[currentSlide].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <button onClick={prevSlide} className="absolute left-4 p-2 text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors">
            <ChevronLeft strokeWidth={1} size={32} />
          </button>
          <button onClick={nextSlide} className="absolute right-4 p-2 text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors">
            <ChevronRight strokeWidth={1} size={32} />
          </button>
        </div>

      </div>

      {/* Hero Typography & CTA (Below Slider) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-12 flex flex-col items-center">
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-xs md:text-sm tracking-[0.2em] text-[#C5A059] uppercase mb-4"
        >
          Inaugural Pre-Release
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] mb-6 tracking-tight"
        >
          Reserved for the Few.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-sm md:text-base text-[#1A1A1A]/70 max-w-2xl mb-8 leading-relaxed font-light"
        >
          Curated 3.5g Micro-Batches. Nitrogen-sealed in precision aluminum canisters with gold foil and hand-textured linen labels. A standard beyond luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onOpenCheckout}
            className="btn-primary px-10 py-4 text-xs"
          >
            Claim Allocation — R590
          </button>
        </motion.div>

      </div>

    </section>
  );
}

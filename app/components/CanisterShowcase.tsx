'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CanisterShowcaseProps {
  onOpenCheckout?: () => void;
}

export default function CanisterShowcase({ onOpenCheckout }: CanisterShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'pre-release' | 'main-vault'>('pre-release');

  return (
    <section id="vessel" className="py-24 bg-white relative overflow-hidden border-t border-[rgba(26,26,26,0.05)]">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="font-sans text-[10px] tracking-[0.2em] text-[#1A1A1A]/50 uppercase mb-4">Engineering & Serialization</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A]">The Vessel</h2>
          <div className="gold-divider w-12 mx-auto mt-8" />
        </div>

        {/* 3 Spacious Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-3xl text-[#C5A059] block mb-3">01</span>
            <h3 className="font-serif text-lg text-[#1A1A1A] mb-2">75mm × 22mm Aluminum</h3>
            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
              Oxygen & light barrier protection. Food-grade aluminum engineered for complete environmental isolation.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-3xl text-[#C5A059] block mb-3">02</span>
            <h3 className="font-serif text-lg text-[#1A1A1A] mb-2">Nitrogen Purged</h3>
            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
              Preserving 100% terpene integrity. Flush-purged with zero oxygen contact from seal to breach.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-3xl text-[#C5A059] block mb-3">03</span>
            <h3 className="font-serif text-lg text-[#1A1A1A] mb-2">Gold Serial Matrix</h3>
            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
              Every unit individually numbered. Post-production authentication via foil matrix code.
            </p>
          </div>
        </div>

        {/* Clean Image Showcase Frame */}
        <div className="flex flex-col items-center">
          
          {/* Toggle */}
          <div className="flex items-center gap-2 mb-10 p-1 rounded-sm bg-[#FAF9F6] border border-[rgba(26,26,26,0.05)]">
            <button
              onClick={() => setActiveTab('pre-release')}
              className={`px-8 py-3 text-xs font-sans transition-all rounded-sm ${
                activeTab === 'pre-release'
                  ? 'bg-white text-[#1A1A1A] font-medium shadow-sm border border-[rgba(26,26,26,0.05)]'
                  : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
              }`}
            >
              Inaugural Pre-Release
            </button>
            <button
              onClick={() => setActiveTab('main-vault')}
              className={`px-8 py-3 text-xs font-sans transition-all rounded-sm ${
                activeTab === 'main-vault'
                  ? 'bg-white text-[#1A1A1A] font-medium shadow-sm border border-[rgba(26,26,26,0.05)]'
                  : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
              }`}
            >
              Batch 01 Main Vault
            </button>
          </div>

          {/* Clean Showcase Frame */}
          <div className="relative w-full max-w-3xl aspect-[16/9] bg-[#FAF9F6] flex items-center justify-center p-6">
            <AnimatePresence mode="wait">
              {activeTab === 'pre-release' ? (
                <motion.div
                  key="pre-release"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/images/vessel-35g.png"
                    alt="Pre-release Canister"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-contain"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="main-vault"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/images/dual-tins.png"
                    alt="Main Vault Tins"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {onOpenCheckout && (
            <button
              onClick={onOpenCheckout}
              className="btn-primary px-10 py-4 mt-12 text-xs"
            >
              Claim Allocation — R590
            </button>
          )}

        </div>

      </div>
    </section>
  );
}

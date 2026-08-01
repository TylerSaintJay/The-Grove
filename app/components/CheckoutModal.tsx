'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, Check } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSerial, setSelectedSerial] = useState<string | null>('04');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [slideDirection, setSlideDirection] = useState(1);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      if (!selectedSerial) setSelectedSerial('04');
    }
  }, [isOpen]);

  const handleNext = () => {
    setSlideDirection(1);
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setSlideDirection(-1);
    setCurrentStep((prev) => prev - 1);
  };

  const handleComplete = () => {
    if (!selectedSerial || !name || !city) return;
    
    const message = `Hello Vault Desk, I would like to reserve Unit #${selectedSerial}/014 from The Grove Inaugural Pre-Release (R590). Name: ${name}, City: ${city}.`;
    const whatsappUrl = `https://wa.me/27XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const claimedUnits = ['01', '03', '07'];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-50"
          />

          {/* Slide-over Panel */}
          <motion.div
            initial={isMobile ? { y: '100%' } : { x: '100%' }}
            animate={isMobile ? { y: 0 } : { x: 0 }}
            exit={isMobile ? { y: '100%' } : { x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className={`fixed z-50 bg-[#070D0B] border-[rgba(197,160,89,0.2)] flex flex-col ${
              isMobile
                ? 'bottom-0 left-0 right-0 h-[88vh] rounded-t-2xl border-t'
                : 'right-0 top-0 bottom-0 w-full max-w-md border-l shadow-2xl'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[rgba(197,160,89,0.15)] shrink-0">
              <div className="flex items-center gap-3">
                {currentStep > 1 && (
                  <button onClick={handleBack} className="p-1 text-[#D4C49A] hover:text-[#E5C17C] transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}
                <div>
                  <h2 className="font-serif text-lg text-white">Private Concierge</h2>
                  <span className="font-cinzel text-[9px] tracking-widest text-[#C5A059] block">RESERVE ALLOCATION</span>
                </div>
              </div>
              <button onClick={onClose} className="p-2 text-[#D4C49A] hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 relative">
              <AnimatePresence custom={slideDirection} mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: slideDirection > 0 ? 15 : -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: slideDirection > 0 ? -15 : 15 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Step 1: Unit Selection */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <span className="font-cinzel text-xs text-[#C5A059] tracking-widest block mb-1">STEP 01</span>
                        <h3 className="font-serif text-xl text-white font-semibold">Select Serialized Unit</h3>
                        <p className="text-xs text-[#D4C49A]/80 mt-1 font-light">Choose from available units in the Inaugural Pre-Release drop.</p>
                      </div>

                      <div className="grid grid-cols-4 gap-2.5">
                        {Array.from({ length: 14 }, (_, i) => {
                          const num = (i + 1).toString().padStart(2, '0');
                          const isClaimed = claimedUnits.includes(num);
                          const isSelected = selectedSerial === num;
                          
                          return (
                            <button
                              key={num}
                              disabled={isClaimed}
                              onClick={() => setSelectedSerial(num)}
                              className={`p-3 rounded-lg border text-center font-mono text-xs transition-all ${
                                isClaimed
                                  ? 'opacity-30 cursor-not-allowed border-white/5 bg-white/5 text-white/40'
                                  : isSelected
                                  ? 'border-[#C5A059] bg-[#C5A059]/20 text-[#E5C17C] font-bold shadow-md'
                                  : 'border-[rgba(197,160,89,0.15)] bg-white/5 text-white hover:border-[#C5A059]'
                              }`}
                            >
                              <span>#{num}</span>
                            </button>
                          );
                        })}
                      </div>

                      <button
                        disabled={!selectedSerial}
                        onClick={handleNext}
                        className="w-full gold-btn-primary py-4 rounded-lg text-xs font-bold tracking-widest mt-6"
                      >
                        CONTINUE TO DETAILS
                      </button>
                    </div>
                  )}

                  {/* Step 2: Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <span className="font-cinzel text-xs text-[#C5A059] tracking-widest block mb-1">STEP 02</span>
                        <h3 className="font-serif text-xl text-white font-semibold">Connoisseur Information</h3>
                        <p className="text-xs text-[#D4C49A]/80 mt-1 font-light">Provide your name and city for concierge delivery.</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-cinzel text-[#C5A059] uppercase mb-1.5 tracking-widest">FULL NAME</label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full bg-[#0A231C] border border-[rgba(197,160,89,0.25)] rounded-lg px-4 py-3.5 text-white font-sans text-sm focus:outline-none focus:border-[#C5A059]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-cinzel text-[#C5A059] uppercase mb-1.5 tracking-widest">CITY</label>
                          <select
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full bg-[#0A231C] border border-[rgba(197,160,89,0.25)] rounded-lg px-4 py-3.5 text-white font-sans text-sm focus:outline-none focus:border-[#C5A059]"
                          >
                            <option value="" disabled>Select city...</option>
                            <option value="Cape Town">Cape Town</option>
                            <option value="Sandton">Sandton</option>
                            <option value="Johannesburg">Johannesburg</option>
                            <option value="Pretoria">Pretoria</option>
                            <option value="Durban">Durban</option>
                            <option value="Stellenbosch">Stellenbosch</option>
                          </select>
                        </div>
                      </div>

                      <button
                        disabled={!name || !city}
                        onClick={handleNext}
                        className="w-full gold-btn-primary py-4 rounded-lg text-xs font-bold tracking-widest disabled:opacity-40"
                      >
                        REVIEW ALLOCATION SUMMARY
                      </button>
                    </div>
                  )}

                  {/* Step 3: Confirmation */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <span className="font-cinzel text-xs text-[#C5A059] tracking-widest block mb-1">STEP 03</span>
                        <h3 className="font-serif text-xl text-white font-semibold">Confirm Allocation</h3>
                      </div>

                      <div className="luxury-card rounded-xl p-6 space-y-3 font-sans text-xs">
                        <div className="flex justify-between py-2 border-b border-white/5">
                          <span className="text-[#D4C49A]">Vessel</span>
                          <span className="font-bold text-white">3.5g Nitrogen Canister</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-white/5">
                          <span className="text-[#D4C49A]">Serial Number</span>
                          <span className="font-mono font-bold text-[#E5C17C]">#{selectedSerial} / 014</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-white/5">
                          <span className="text-[#D4C49A]">Allocation Fee</span>
                          <span className="font-bold text-emerald-400">R590.00</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-white/5">
                          <span className="text-[#D4C49A]">Connoisseur</span>
                          <span className="font-bold text-white">{name}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-[#D4C49A]">City</span>
                          <span className="font-bold text-white">{city}</span>
                        </div>
                      </div>

                      <button
                        onClick={handleComplete}
                        className="w-full gold-btn-primary py-4 rounded-lg text-xs font-bold tracking-widest"
                      >
                        COMPLETE VIA WHATSAPP CONCIERGE
                      </button>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

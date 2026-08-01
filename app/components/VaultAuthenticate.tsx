'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type AuthState = 'idle' | 'verifying' | 'verified' | 'invalid';

export default function VaultAuthenticate() {
  const [serial, setSerial] = useState('');
  const [authState, setAuthState] = useState<AuthState>('idle');

  useEffect(() => {
    if (serial.length === 0) {
      setAuthState('idle');
      return;
    }

    const pattern = /^\d{3}\/\d{3}$/;
    
    if (pattern.test(serial)) {
      setAuthState('verifying');
      const timer = setTimeout(() => {
        setAuthState('verified');
      }, 1200);
      return () => clearTimeout(timer);
    } else if (serial.length >= 7) {
      setAuthState('invalid');
    } else {
      setAuthState('idle');
    }
  }, [serial]);

  return (
    <section id="authenticate" className="py-24 bg-[#FAF9F6] min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-xl w-full px-6 text-center relative z-10">
        
        <p className="font-sans text-[10px] tracking-[0.2em] text-[#1A1A1A]/50 uppercase mb-3">Verify Your Allocation</p>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] mb-4">Vault Authenticate</h2>
        <div className="gold-divider w-12 mx-auto mb-10" />

        <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mb-10 font-light leading-relaxed max-w-sm mx-auto">
          Enter the hand-stamped gold foil serial code located on the back matrix label of your canister to verify unit origin.
        </p>

        {/* Input Box */}
        <div className="relative max-w-sm mx-auto mb-8">
          <input
            type="text"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
            placeholder="e.g., 004/014"
            className="w-full bg-white border border-[rgba(26,26,26,0.1)] rounded-sm px-6 py-4 text-[#1A1A1A] text-center font-mono text-xl tracking-widest focus:outline-none focus:border-[#C5A059] transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            maxLength={7}
          />
        </div>

        {/* Result Area */}
        <div className="min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            
            {authState === 'verifying' && (
              <motion.div
                key="verifying"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3 text-[#1A1A1A]/70 text-xs font-mono"
              >
                <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span>Authenticating...</span>
              </motion.div>
            )}

            {authState === 'invalid' && (
              <motion.div
                key="invalid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-red-500 font-mono text-xs"
              >
                Format not recognized (Use format ###/014)
              </motion.div>
            )}

            {authState === 'verified' && (
              <motion.div
                key="verified"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white border border-[rgba(26,26,26,0.05)] rounded-sm p-8 text-left w-full shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
              >
                <div className="text-emerald-600 font-mono text-xs mb-6 flex items-center gap-2 font-semibold">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">✓</span> Authenticated
                </div>
                
                <div className="space-y-4 text-xs font-sans">
                  <div className="flex justify-between items-center py-2 border-b border-[rgba(26,26,26,0.05)]">
                    <span className="text-[#1A1A1A]/60 uppercase tracking-wider text-[10px]">Batch</span>
                    <span className="text-[#1A1A1A] font-medium">01 (Inaugural Pre-Release)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[rgba(26,26,26,0.05)]">
                    <span className="text-[#1A1A1A]/60 uppercase tracking-wider text-[10px]">Vessel</span>
                    <span className="text-[#1A1A1A] font-medium">75mm Nitrogen Canister</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[#1A1A1A]/60 uppercase tracking-wider text-[10px]">Terpene Lock</span>
                    <span className="text-emerald-600 font-medium">100% Preserved</span>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

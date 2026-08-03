'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Shield } from 'lucide-react';

interface VerifyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthState = 'idle' | 'verifying' | 'verified' | 'invalid';

export default function VerifyDrawer({ isOpen, onClose }: VerifyDrawerProps) {
  const [serial, setSerial] = useState('');
  const [authState, setAuthState] = useState<AuthState>('idle');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      document.body.classList.remove('overflow-hidden');
      setSerial('');
      setAuthState('idle');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  useEffect(() => {
    if (serial.length === 0) {
      setAuthState('idle');
      return;
    }
    const pattern = /^LOT001-\d{3}$/i;
    if (pattern.test(serial)) {
      setAuthState('verifying');
      const timer = setTimeout(() => setAuthState('verified'), 1400);
      return () => clearTimeout(timer);
    } else if (serial.length >= 10) {
      setAuthState('invalid');
    } else {
      setAuthState('idle');
    }
  }, [serial]);

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
            className="fixed inset-0 z-40 bg-[#0b1f16]/80 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[#0b1f16] border-l border-[rgba(223,186,107,0.15)] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-[rgba(223,186,107,0.1)]">
              <div>
                <p className="font-sans text-[10px] tracking-[0.25em] text-[var(--color-gold)] uppercase mb-1">
                  Authentication
                </p>
                <h2 className="font-serif text-xl text-[#f4f1ea]">Verify LOT Unit</h2>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full border border-[rgba(223,186,107,0.2)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors"
              >
                <X size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-8 py-10">
              <div className="flex items-center gap-3 mb-8">
                <Shield size={18} color="#dfba6b" strokeWidth={1.5} />
                <p className="font-sans text-sm text-[var(--color-muted)] font-light leading-relaxed">
                  Enter the hand-stamped serial code found on the gold foil matrix label of your canister.
                </p>
              </div>

              {/* Input */}
              <div className="relative mb-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={serial}
                  onChange={(e) => setSerial(e.target.value.toUpperCase())}
                  placeholder="e.g., LOT001-018"
                  maxLength={10}
                  className="w-full bg-[#122b20] border border-[rgba(223,186,107,0.2)] rounded-sm px-6 py-4 text-[#f4f1ea] text-center font-mono text-xl tracking-widest focus:outline-none focus:border-[var(--color-gold)] transition-all placeholder:text-[var(--color-muted)]/50"
                />
              </div>
              <p className="text-center font-sans text-[10px] text-[var(--color-muted)]/60 mb-8 tracking-wider">
                Format: LOT001-###
              </p>

              {/* Result Area */}
              <div className="min-h-[160px] flex items-center justify-center">
                <AnimatePresence mode="wait">

                  {authState === 'idle' && (
                    <motion.p
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="font-sans text-xs text-[var(--color-muted)]/60 text-center tracking-wider"
                    >
                      Awaiting serial input…
                    </motion.p>
                  )}

                  {authState === 'verifying' && (
                    <motion.div
                      key="verifying"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 text-[var(--color-gold)] text-xs font-mono"
                    >
                      <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse" />
                      Authenticating with vault registry…
                    </motion.div>
                  )}

                  {authState === 'invalid' && (
                    <motion.div
                      key="invalid"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 font-mono text-xs text-center"
                    >
                      Serial not recognized. Use format LOT001-###
                    </motion.div>
                  )}

                  {authState === 'verified' && (
                    <motion.div
                      key="verified"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="card-dark rounded-xl p-6 w-full"
                    >
                      <div className="flex items-center gap-3 mb-5">
                        <CheckCircle size={18} color="#4ade80" strokeWidth={2} />
                        <span className="font-mono text-xs text-green-400 font-semibold">
                          Authenticated
                        </span>
                      </div>
                      <div className="space-y-4">
                        {[
                          ['Series', 'LOT 001 — Inaugural Micro-Drop'],
                          ['Status', 'Authentic • Original Reserve'],
                          ['Vessel', '75mm Precision Aluminum Canister'],
                          ['Terpene Lock', '100% Preserved'],
                        ].map(([label, value]) => (
                          <div key={label} className="flex justify-between items-center py-2 border-b border-[rgba(223,186,107,0.1)] last:border-0">
                            <span className="font-sans text-[10px] tracking-wider text-[var(--color-muted)] uppercase">{label}</span>
                            <span className="font-sans text-xs text-[#f4f1ea] font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

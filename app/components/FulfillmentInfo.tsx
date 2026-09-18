'use client';

import { motion } from 'framer-motion';
import { Zap, Truck, Shield, Clock, RefreshCw, Lock } from 'lucide-react';

export default function FulfillmentInfo() {
  return (
    <section id="fulfillment" className="py-24 bg-forest relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-[10px] tracking-[0.3em] text-[var(--color-gold)] uppercase mb-3 font-semibold">
            DISCREET DISPATCH & POLICIES
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#f4f1ea] mb-4">
            White-Glove Fulfillment Protocol
          </h2>
          <div className="gold-divider w-16 mx-auto mb-4" />
          <p className="font-sans text-xs sm:text-sm text-[var(--color-muted)] font-light leading-relaxed">
            Standard operating procedures and fulfillment standards adapted for verified adult connoisseurs.
          </p>
        </div>

        {/* Top Two Delivery Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {/* Option 1: Uber Connect (JHB Only) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-dark rounded-2xl p-8 flex flex-col justify-between border border-[rgba(223,186,107,0.2)]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-[rgba(223,186,107,0.1)] flex items-center justify-center">
                  <Zap size={22} color="#dfba6b" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] tracking-widest text-[var(--color-gold)] bg-[rgba(223,186,107,0.1)] px-3 py-1 rounded-full border border-[var(--color-gold)]/30 uppercase">
                  JHB Metro Exclusive
                </span>
              </div>

              <p className="font-sans text-[10px] tracking-[0.25em] text-[var(--color-gold)] uppercase mb-2">
                Local Express Dispatch
              </p>
              <h3 className="font-serif text-2xl text-[#f4f1ea] mb-4">
                Uber Connect (Johannesburg)
              </h3>
              <div className="gold-divider mb-6" />

              <p className="font-sans text-sm text-[var(--color-muted)] leading-relaxed font-light mb-6">
                Direct, same-day delivery across the Johannesburg metropolitan area. Once Instant EFT clears, your order is sealed and dispatched within 60–90 minutes.
              </p>

              <ul className="space-y-2.5 text-xs text-[#f4f1ea]/80 font-sans mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--color-gold)]">✓</span> Delivery rate calculated upon live pin drop
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--color-gold)]">✓</span> Real-time Uber driver tracking link sent to your WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--color-gold)]">✓</span> Same-day orders cut-off: 17:00 daily
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[rgba(223,186,107,0.1)] flex items-center justify-between text-xs">
              <span className="text-[var(--color-muted)]">Dispatch Zone</span>
              <span className="font-mono text-[var(--color-gold)] font-medium">Johannesburg Metro Hub</span>
            </div>
          </motion.div>

          {/* Option 2: The Courier Guy (Nationwide) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="card-dark rounded-2xl p-8 flex flex-col justify-between border border-[rgba(223,186,107,0.2)]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-[rgba(223,186,107,0.1)] flex items-center justify-center">
                  <Truck size={22} color="#dfba6b" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] tracking-widest text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30 uppercase">
                  Free over R600
                </span>
              </div>

              <p className="font-sans text-[10px] tracking-[0.25em] text-[var(--color-gold)] uppercase mb-2">
                Nationwide Door-to-Door
              </p>
              <h3 className="font-serif text-2xl text-[#f4f1ea] mb-4">
                The Courier Guy (Nationwide)
              </h3>
              <div className="gold-divider mb-6" />

              <p className="font-sans text-sm text-[var(--color-muted)] leading-relaxed font-light mb-6">
                Overnight express door-to-door delivery across South Africa. Packed in discreet, opaque flyers with tamper-evident security seals and secure OTP/PIN release.
              </p>

              <ul className="space-y-2.5 text-xs text-[#f4f1ea]/80 font-sans mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--color-gold)]">✓</span> R95 flat-rate overnight express (Major centres)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--color-gold)]">✓</span> <strong>FREE courier delivery</strong> on orders R600 or more
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--color-gold)]">✓</span> Full waypoint tracking link provided on dispatch
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[rgba(223,186,107,0.1)] flex items-center justify-between text-xs">
              <span className="text-[var(--color-muted)]">Coverage</span>
              <span className="font-mono text-[var(--color-gold)] font-medium">All 9 South African Provinces</span>
            </div>
          </motion.div>

        </div>

        {/* Policy Grid (Inspired by Skyff420 Best Practices) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Policy 1: Instant EFT & eWallet Settlement */}
          <div className="card-dark p-6 rounded-xl border border-[rgba(223,186,107,0.15)]">
            <div className="w-10 h-10 rounded-full bg-[rgba(223,186,107,0.1)] flex items-center justify-center mb-4">
              <Clock size={18} color="#dfba6b" />
            </div>
            <h4 className="font-serif text-lg text-[#f4f1ea] mb-2">
              Payment Settlement
            </h4>
            <p className="font-sans text-xs text-[var(--color-muted)] leading-relaxed font-light">
              Orders are confirmed upon receipt of Proof of Payment (POP) in your WhatsApp thread. We support Instant EFT (all major banks), Capitec Pay, and FNB eWallet.
            </p>
          </div>

          {/* Policy 2: 24-Hour Terpene & Seal Guarantee */}
          <div className="card-dark p-6 rounded-xl border border-[rgba(223,186,107,0.15)]">
            <div className="w-10 h-10 rounded-full bg-[rgba(223,186,107,0.1)] flex items-center justify-center mb-4">
              <RefreshCw size={18} color="#dfba6b" />
            </div>
            <h4 className="font-serif text-lg text-[#f4f1ea] mb-2">
              24-Hour Seal Guarantee
            </h4>
            <p className="font-sans text-xs text-[var(--color-muted)] leading-relaxed font-light">
              All botanical sales are final once opened. However, if an item arrives with a broken tamper seal or incorrect strain, report within 24 hours with a photograph for immediate exchange.
            </p>
          </div>

          {/* Policy 3: Absolute Privacy & Discreet Packaging */}
          <div className="card-dark p-6 rounded-xl border border-[rgba(223,186,107,0.15)]">
            <div className="w-10 h-10 rounded-full bg-[rgba(223,186,107,0.1)] flex items-center justify-center mb-4">
              <Lock size={18} color="#dfba6b" />
            </div>
            <h4 className="font-serif text-lg text-[#f4f1ea] mb-2">
              Discreet & Odor-Tight
            </h4>
            <p className="font-sans text-xs text-[var(--color-muted)] leading-relaxed font-light">
              Every pre-roll is housed inside an aroma-locking pop-top tube. Parcels are shipped in plain, unbranded security flyers with no external mention of botanical contents.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

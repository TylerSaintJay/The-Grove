'use client';

import { motion } from 'framer-motion';
import { Truck, Zap, MapPin, Shield } from 'lucide-react';

export default function FulfillmentInfo() {
  return (
    <section className="py-24 bg-forest">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-[10px] tracking-[0.25em] text-[var(--color-gold)] uppercase mb-4">
            White-Glove Fulfillment
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#f4f1ea] mb-4">
            Delivered to Your Door
          </h2>
          <div className="gold-divider w-16 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Option 1: Uber Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-dark rounded-2xl p-8"
          >
            <div className="w-12 h-12 rounded-full bg-[rgba(223,186,107,0.1)] flex items-center justify-center mb-6">
              <Zap size={22} color="#dfba6b" strokeWidth={1.5} />
            </div>
            <p className="font-sans text-[10px] tracking-[0.25em] text-[var(--color-gold)] uppercase mb-2">
              Metro Express
            </p>
            <h3 className="font-serif text-2xl text-[#f4f1ea] mb-4">
              Uber Connect
            </h3>
            <div className="gold-divider mb-6" />
            <p className="font-sans text-sm text-[var(--color-muted)] leading-relaxed font-light mb-6">
              Same-day dispatch for Johannesburg, Cape Town, and Durban metro areas. Your allocation arrives sealed and authenticated within 60–90 minutes of confirmation.
            </p>
            <div className="flex items-center gap-2">
              <MapPin size={14} color="#dfba6b" strokeWidth={1.5} />
              <span className="font-sans text-xs text-[var(--color-gold)]">JHB · CPT · DBN</span>
            </div>
          </motion.div>

          {/* Option 2: Courier Guy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="card-dark rounded-2xl p-8"
          >
            <div className="w-12 h-12 rounded-full bg-[rgba(223,186,107,0.1)] flex items-center justify-center mb-6">
              <Truck size={22} color="#dfba6b" strokeWidth={1.5} />
            </div>
            <p className="font-sans text-[10px] tracking-[0.25em] text-[var(--color-gold)] uppercase mb-2">
              Nationwide
            </p>
            <h3 className="font-serif text-2xl text-[#f4f1ea] mb-4">
              The Courier Guy
            </h3>
            <div className="gold-divider mb-6" />
            <p className="font-sans text-sm text-[var(--color-muted)] leading-relaxed font-light mb-6">
              Discreet door-to-door overnight express delivery across all of South Africa. Your canister is sealed and tracked from our facility directly to your address.
            </p>
            <div className="flex items-center gap-2">
              <Shield size={14} color="#dfba6b" strokeWidth={1.5} />
              <span className="font-sans text-xs text-[var(--color-gold)]">Nationwide · Tracked · Discreet</span>
            </div>
          </motion.div>

        </div>

        {/* Fulfillment Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-10 font-sans text-xs text-[var(--color-muted)] tracking-wider"
        >
          Fulfillment is confirmed via WhatsApp Concierge after Instant EFT payment.
        </motion.p>

      </div>
    </section>
  );
}

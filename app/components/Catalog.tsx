'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { generateWhatsAppLink } from '../../utils/whatsapp';

const DELIVERY_OPTIONS = [
  {
    id: 'uber',
    label: 'Uber Connect',
    desc: 'Same-day express, 60–90 mins',
    icon: '⚡',
  },
  {
    id: 'courier',
    label: 'The Courier Guy',
    desc: 'Nationwide overnight express',
    icon: '📦',
  },
];

export default function Catalog() {
  const [delivery, setDelivery] = useState<'uber' | 'courier'>('uber');

  const deliveryLabel =
    delivery === 'uber' ? 'Uber Connect' : 'The Courier Guy';

  const handleAllocate = (item: string) => {
    const url = generateWhatsAppLink(item, deliveryLabel);
    window.open(url, '_blank');
  };

  return (
    <section id="catalog" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-[10px] tracking-[0.25em] text-[var(--color-gold-muted)] uppercase mb-4">
            LOT 001 — The Offering
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] mb-4">
            Claim Your Allocation
          </h2>
          <div className="gold-divider w-16 mx-auto" />
        </div>

        {/* Delivery Selector */}
        <div className="flex justify-center mb-14">
          <div className="flex gap-3 p-1.5 bg-white border border-[rgba(26,26,26,0.06)] rounded-full shadow-sm">
            {DELIVERY_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setDelivery(opt.id as 'uber' | 'courier')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-sans font-medium transition-all ${
                  delivery === opt.id
                    ? 'bg-[var(--color-forest)] text-[var(--color-gold)] shadow'
                    : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                <span>{opt.icon}</span>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Single Product: The Flower Reserve */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white border border-[rgba(26,26,26,0.06)] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.05)] flex flex-col md:flex-row">

            {/* Image Panel */}
            <div className="relative w-full md:w-80 aspect-square md:aspect-auto bg-[#FAF9F6] flex-shrink-0">
              <Image
                src="/images/vessel-35g.png"
                alt="The Grove Reserve 3.5g Canister"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-contain p-8"
              />
              {/* LOT badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-[var(--color-forest)] rounded-full">
                <span className="font-sans text-[9px] tracking-[0.25em] text-[var(--color-gold)] uppercase">LOT 001</span>
              </div>
            </div>

            {/* Details Panel */}
            <div className="flex flex-col justify-between p-8 md:p-10 flex-1">
              <div>
                <p className="font-sans text-[10px] tracking-[0.25em] text-[var(--color-gold-muted)] uppercase mb-3">
                  01 / The Flower Reserve
                </p>
                <h3 className="font-serif text-3xl text-[#1A1A1A] mb-4">
                  3.5g Precision Canister
                </h3>
                <div className="gold-divider mb-6" />
                <ul className="space-y-3 mb-8">
                  {[
                    '3.5g Hand-Sealed Canister',
                    'High-Barrier Aluminum Shell',
                    'LOT 001 Individually Serialized',
                    'Terpene Lock Guarantee',
                    'Gold Foil Authentication Matrix',
                  ].map((spec) => (
                    <li key={spec} className="flex items-center gap-3 text-sm text-[#1A1A1A]/70 font-sans font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-serif text-4xl text-[#1A1A1A] mb-6">
                  R590
                </p>
                <button
                  onClick={() => handleAllocate('The Flower Reserve (3.5g Canister)')}
                  className="btn-gold py-4 px-8 rounded-sm text-xs font-bold w-full md:w-auto"
                >
                  [ ALLOCATE FLOWER — R590 ]
                </button>
                <p className="mt-4 font-sans text-[10px] text-[#1A1A1A]/40 tracking-wider">
                  Delivery via: <span className="text-[var(--color-gold-muted)] font-medium">{deliveryLabel}</span>
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

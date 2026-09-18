'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check, Zap, Truck, ShieldCheck } from 'lucide-react';
import { generateWhatsAppLink, DeliveryMethod } from '../../utils/whatsapp';

interface ProductTier {
  id: string;
  badge?: string;
  name: string;
  subtitle: string;
  price: number;
  perUnitPrice?: string;
  image: string;
  specs: string[];
  featured?: boolean;
}

const PRODUCTS: ProductTier[] = [
  {
    id: 'single',
    badge: 'Single Tube',
    name: '01 / The Reserve Pre-Roll',
    subtitle: 'Single Connoisseur Tube',
    price: 150,
    perUnitPrice: 'R150 / tube',
    image: '/images/preroll-single.png',
    specs: [
      '1× 1.2g White Widow • AAA Pre-Roll',
      'Tactile Brushed Dark Green Vinyl Wrap',
      'Matte Black Child-Resistant Pop-Top Tube',
      'Gold Foil Authenticity Matrix & Serial',
      'Nitrogen-Purged Terpene Lock',
    ],
  },
  {
    id: 'trio',
    badge: 'Popular Selection',
    name: '02 / The Reserve Trio',
    subtitle: '3-Tube Connoisseur Pack',
    price: 420,
    perUnitPrice: 'R140 / tube • Save R30',
    image: '/images/preroll-trio.png',
    featured: true,
    specs: [
      '3× 1.2g Hand-Crafted Pre-Roll Tubes',
      'Curated LOT SECTION: 001 Batch',
      'Tactile Brushed Finish with Gold Crest Caps',
      'Individually Serialized Matrix Codes',
      'Ideal for Weekend Sessions & Gifting',
    ],
  },
  {
    id: 'vault-pack',
    badge: 'Best Value • Free Shipping',
    name: '03 / Collector’s Vault Case',
    subtitle: '5-Tube Allocation Bundle',
    price: 650,
    perUnitPrice: 'R130 / tube • Free Nationwide Courier',
    image: '/images/preroll-trio.png',
    specs: [
      '5× 1.2g Hand-Crafted Pre-Roll Tubes',
      'FREE Door-to-Door Courier Guy Delivery (R95 Value)',
      'Consecutive LOT 001 Serial Numbers',
      'Double-Sealed Tamper-Evident Packaging',
      'Priority Invitation Access to LOT 002',
    ],
  },
];

export default function Catalog() {
  const [delivery, setDelivery] = useState<DeliveryMethod>('uber');
  const [strain] = useState<string>('White Widow • AAA');

  const handleAllocate = (product: ProductTier) => {
    const url = generateWhatsAppLink(product.name, product.price, delivery, strain);
    window.open(url, '_blank');
  };

  return (
    <section id="catalog" className="py-24 bg-[#FAF9F6] border-t border-[rgba(26,26,26,0.06)]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-sans text-[10px] tracking-[0.3em] text-[var(--color-gold-muted)] uppercase mb-3 font-semibold">
            LOT SECTION: 001 • ALLOCATION DESK
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] mb-4">
            Curated Pre-Roll Allocations
          </h2>
          <div className="gold-divider w-16 mx-auto mb-4" />
          <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 font-light leading-relaxed">
            Select your pre-roll quantity below. Each tube is nitrogen-purged in tactile brushed vinyl with child-resistant pop-top closure.
          </p>
        </div>

        {/* Fulfillment Method Selector Bar */}
        <div className="max-w-xl mx-auto mb-16">
          <p className="text-center font-sans text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/50 mb-3 font-medium">
            Step 1: Choose Your Fulfillment Method
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 bg-white border border-[rgba(26,26,26,0.08)] rounded-xl shadow-sm">
            <button
              type="button"
              onClick={() => setDelivery('uber')}
              className={`flex items-start gap-3 p-3.5 rounded-lg text-left transition-all ${
                delivery === 'uber'
                  ? 'bg-[#0b1f16] text-[#f4f1ea] shadow-md border border-[var(--color-gold)]/40'
                  : 'text-[#1A1A1A]/70 hover:bg-[#FAF9F6]'
              }`}
            >
              <Zap size={18} className={delivery === 'uber' ? 'text-[var(--color-gold)] mt-0.5' : 'text-[#1A1A1A]/50 mt-0.5'} />
              <div>
                <span className="block font-sans text-xs font-semibold tracking-wide">
                  Uber Connect (JHB Only)
                </span>
                <span className={`block font-sans text-[11px] ${delivery === 'uber' ? 'text-[#a3b1a8]' : 'text-[#1A1A1A]/50'}`}>
                  Same-day express (60–90 min) • Live pin drop rate
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setDelivery('courier')}
              className={`flex items-start gap-3 p-3.5 rounded-lg text-left transition-all ${
                delivery === 'courier'
                  ? 'bg-[#0b1f16] text-[#f4f1ea] shadow-md border border-[var(--color-gold)]/40'
                  : 'text-[#1A1A1A]/70 hover:bg-[#FAF9F6]'
              }`}
            >
              <Truck size={18} className={delivery === 'courier' ? 'text-[var(--color-gold)] mt-0.5' : 'text-[#1A1A1A]/50 mt-0.5'} />
              <div>
                <span className="block font-sans text-xs font-semibold tracking-wide">
                  The Courier Guy (Nationwide)
                </span>
                <span className={`block font-sans text-[11px] ${delivery === 'courier' ? 'text-[#a3b1a8]' : 'text-[#1A1A1A]/50'}`}>
                  R95 flat rate • FREE on orders over R600
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* 3-Tier Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRODUCTS.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className={`relative rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                prod.featured
                  ? 'bg-[#0b1f16] text-[#f4f1ea] border-2 border-[var(--color-gold)] shadow-2xl scale-[1.02] md:-translate-y-2'
                  : 'bg-white text-[#1A1A1A] border border-[rgba(26,26,26,0.08)] shadow-md hover:shadow-xl'
              }`}
            >
              {/* Card Ribbon / Badge */}
              <div
                className={`py-2 px-4 text-center font-sans text-[10px] tracking-[0.25em] uppercase font-bold ${
                  prod.featured
                    ? 'bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-muted)] text-[#0b1f16]'
                    : 'bg-[#FAF9F6] text-[#1A1A1A]/70 border-b border-[rgba(26,26,26,0.06)]'
                }`}
              >
                {prod.badge}
              </div>

              {/* Product Visual */}
              <div className="relative w-full h-56 p-4 flex items-center justify-center bg-gradient-to-b from-transparent to-black/5">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-2"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`font-serif text-xl sm:text-2xl mb-1 ${prod.featured ? 'text-[#f4f1ea]' : 'text-[#1A1A1A]'}`}>
                    {prod.name}
                  </h3>
                  <p className={`font-sans text-xs mb-4 ${prod.featured ? 'text-[#a3b1a8]' : 'text-[#1A1A1A]/60'}`}>
                    {prod.subtitle}
                  </p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className={`font-serif text-3xl sm:text-4xl font-semibold ${prod.featured ? 'text-[var(--color-gold)]' : 'text-[#1A1A1A]'}`}>
                      R{prod.price}
                    </span>
                    {prod.perUnitPrice && (
                      <span className={`font-sans text-xs ${prod.featured ? 'text-[#a3b1a8]' : 'text-[#1A1A1A]/50'}`}>
                        ({prod.perUnitPrice})
                      </span>
                    )}
                  </div>

                  <div className={`h-px w-full mb-6 ${prod.featured ? 'bg-[var(--color-gold)]/20' : 'bg-black/10'}`} />

                  {/* Specs List */}
                  <ul className="space-y-3 mb-8">
                    {prod.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-2.5 text-xs font-sans leading-relaxed">
                        <Check
                          size={15}
                          className={`mt-0.5 flex-shrink-0 ${
                            prod.featured ? 'text-[var(--color-gold)]' : 'text-emerald-600'
                          }`}
                        />
                        <span className={prod.featured ? 'text-[#f4f1ea]/90 font-light' : 'text-[#1A1A1A]/80 font-light'}>
                          {spec}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Action Trigger */}
                <div>
                  <button
                    type="button"
                    onClick={() => handleAllocate(prod)}
                    className={`w-full py-4 px-6 rounded-sm text-xs font-bold tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-2 ${
                      prod.featured
                        ? 'btn-gold shadow-lg hover:shadow-[0_0_20px_rgba(223,186,107,0.4)]'
                        : 'bg-[#0b1f16] text-[#dfba6b] hover:bg-[#122b20] border border-[#dfba6b]/40'
                    }`}
                  >
                    <span>[ CLAIM {prod.badge?.toUpperCase()} — R{prod.price} ]</span>
                  </button>
                  <p className={`text-center font-sans text-[10px] mt-3 tracking-wide ${prod.featured ? 'text-[#a3b1a8]/80' : 'text-[#1A1A1A]/50'}`}>
                    Fulfillment: {delivery === 'uber' ? 'Uber Connect (JHB)' : 'The Courier Guy (SA)'}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Ordering Protocol Banner */}
        <div className="mt-16 bg-white border border-[rgba(26,26,26,0.08)] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 font-serif font-bold">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#1A1A1A] mb-1">
                Direct WhatsApp VIP Allocation Protocol
              </h4>
              <p className="font-sans text-xs text-[#1A1A1A]/70 leading-relaxed font-light max-w-2xl">
                Clicking any allocation button generates your pre-formatted order payload directly to our WhatsApp Concierge desk. Instant EFT settlement details are issued immediately upon confirmation.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 text-center md:text-right">
            <span className="font-mono text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 block mb-1">
              Active Drop • LOT 001
            </span>
            <span className="font-sans text-[11px] text-[#1A1A1A]/50">
              Johannesburg & Nationwide
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070D0B] border-t border-[rgba(197,160,89,0.15)] py-16 px-6 relative">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Crest */}
        <div className="relative w-14 h-14 mx-auto opacity-70 mb-4 bg-transparent">
          <Image
            src="/images/grove-crest.png"
            alt="The Grove Crest"
            fill
            sizes="56px"
            className="object-contain bg-transparent"
          />
        </div>

        <div className="gold-divider w-24 mx-auto my-4" />

        {/* Wordmark */}
        <h2 
          className="font-cinzel text-xs tracking-[0.3em] text-[#C5A059] mb-1 uppercase"
        >
          THE GROVE RESERVE
        </h2>

        <p className="font-cinzel text-[10px] text-[#D4C49A]/60 tracking-[0.25em] uppercase mb-8">
          Heritage Lot Section • South Africa
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <a href="#" className="text-[#D4C49A]/40 hover:text-[#C5A059] transition-colors" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a href="#" className="text-[#D4C49A]/40 hover:text-[#C5A059] transition-colors" aria-label="WhatsApp">
            <Phone size={18} strokeWidth={1.5} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-[#D4C49A]/40 font-sans">
          © 2026 The Grove. All allocations subject to availability and member verification.
        </p>

      </div>
    </footer>
  );
}

import os

# ============================================================
# 1. Navbar.tsx
# ============================================================
navbar = """'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Shop', href: '#catalog' },
  { label: 'Fulfillment', href: '#fulfillment' },
  { label: 'Verify', href: '#verify' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
        transition: 'all 0.4s ease',
        backgroundColor: scrolled ? 'rgba(11,31,22,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(223,186,107,0.15)' : 'none',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo + Wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          aria-label="The Grove Reserve"
        >
          <div style={{ position: 'relative', width: '32px', height: '32px', flexShrink: 0, backgroundColor: 'transparent' }}>
            <Image src="/images/grove-crest.png" alt="The Grove Reserve" fill sizes="32px" className="object-contain" priority />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '13px', color: '#dfba6b', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              The Grove Reserve
            </span>
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: '8px', color: '#a3b1a8', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              LOT SECTION: 001
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.22em', color: '#a3b1a8', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.3s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#dfba6b')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a3b1a8')}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="#catalog"
            onClick={(e) => { e.preventDefault(); handleNavClick('#catalog'); }}
            className="hidden sm:inline-flex btn-gold"
            style={{ fontSize: '9px', padding: '8px 18px', borderRadius: '2px', textDecoration: 'none' }}
          >
            Claim LOT 001
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', flexDirection: 'column', gap: '5px' }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block', width: '20px', height: '1.5px', backgroundColor: '#dfba6b', transition: 'all 0.3s',
                transform: menuOpen && i === 0 ? 'rotate(45deg) translateY(6.5px)' : menuOpen && i === 2 ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', backgroundColor: 'rgba(11,31,22,0.98)', borderTop: '1px solid rgba(223,186,107,0.1)' }}
            className="md:hidden"
          >
            <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  style={{ textAlign: 'left', fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '0.25em', color: '#a3b1a8', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 0', borderBottom: '1px solid rgba(223,186,107,0.1)' }}
                >
                  {label}
                </button>
              ))}
              <a
                href="#catalog"
                onClick={(e) => { e.preventDefault(); handleNavClick('#catalog'); }}
                className="btn-gold"
                style={{ textAlign: 'center', fontSize: '9px', padding: '12px 18px', borderRadius: '2px', textDecoration: 'none', marginTop: '8px' }}
              >
                Claim LOT 001
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
"""

# ============================================================
# 2. RefOverlay.tsx
# ============================================================
ref_overlay = """'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const REF_LABELS: Record<string, string> = {
  card: 'VIP Card Verified',
  menu: 'Menu QR Verified',
  instagram: 'Instagram Visitor',
  facebook: 'Facebook Visitor',
};

export default function RefOverlay() {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref && REF_LABELS[ref]) {
      setLabel(REF_LABELS[ref]);
      const t = setTimeout(() => setLabel(null), 5000);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <AnimatePresence>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)', zIndex: 60 }}
          role="alert"
          aria-live="polite"
        >
          <div style={{
            background: 'rgba(11,31,22,0.96)', border: '1px solid rgba(223,186,107,0.5)',
            backdropFilter: 'blur(16px)', borderRadius: '4px', padding: '14px 24px',
            display: 'flex', alignItems: 'center', gap: '12px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)', minWidth: '260px',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#dfba6b', flexShrink: 0, boxShadow: '0 0 8px rgba(223,186,107,0.6)' }} />
            <div>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '12px', color: '#dfba6b', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>
                {label}
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '9px', color: '#a3b1a8', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '3px 0 0' }}>
                LOT 001 Allocation Unlocked
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
"""

# ============================================================
# 3. Footer.tsx (full rebuild)
# ============================================================
footer = """'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#050e09', borderTop: '1px solid rgba(197,160,89,0.12)', padding: '80px 24px 48px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Crest */}
        <div style={{ position: 'relative', width: '52px', height: '52px', marginBottom: '20px', opacity: 0.8, backgroundColor: 'transparent' }}>
          <Image src="/images/grove-crest.png" alt="The Grove Reserve" fill sizes="52px" className="object-contain bg-transparent" />
        </div>

        <div style={{ width: '48px', height: '1px', background: 'linear-gradient(to right, transparent, #dfba6b, transparent)', marginBottom: '20px' }} />

        <h2 style={{ fontFamily: 'var(--font-cinzel-var, var(--font-playfair))', fontSize: '11px', letterSpacing: '0.35em', color: '#C5A059', marginBottom: '6px', textTransform: 'uppercase', fontWeight: 500 }}>
          The Grove Reserve
        </h2>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '9px', color: 'rgba(212,196,154,0.45)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '40px' }}>
          Heritage Lot Section &bull; Johannesburg, South Africa
        </p>

        {/* Quick Nav */}
        <div style={{ display: 'flex', gap: '32px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[['Shop LOT 001', '#catalog'], ['Verify Unit', '#verify'], ['Fulfillment', '#fulfillment']].map(([label, href]) => (
            <a key={href} href={href}
              style={{ fontFamily: 'var(--font-inter)', fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(163,177,168,0.6)', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#dfba6b')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(163,177,168,0.6)')}
            >{label}</a>
          ))}
        </div>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '24px', marginBottom: '40px' }}>
          {[
            {
              href: 'https://instagram.com', label: 'Instagram',
              svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><circle cx="12" cy="12" r="5"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            },
            {
              href: 'https://facebook.com', label: 'Facebook',
              svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            },
            {
              href: 'https://wa.me/27720000000', label: 'WhatsApp',
              svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            },
          ].map(({ href, label, svg }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer" aria-label={label}
              style={{ color: 'rgba(212,196,154,0.3)', transition: 'color 0.3s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#dfba6b')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(212,196,154,0.3)')}
            >{svg}</a>
          ))}
        </div>

        <div style={{ width: '100%', height: '1px', background: 'rgba(223,186,107,0.07)', marginBottom: '28px' }} />

        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '9.5px', color: 'rgba(212,196,154,0.3)', lineHeight: 1.8, maxWidth: '560px', marginBottom: '12px' }}>
          The Grove Reserve operates in compliance with the South African Cannabis for Private Purposes Act. Products are reserved exclusively for persons aged 18 and older. Not for resale. LOT allocations subject to availability and member verification.
        </p>

        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '9px', color: 'rgba(212,196,154,0.2)', letterSpacing: '0.05em' }}>
          &copy; 2026 The Grove Reserve. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
"""

base = r'C:\Users\Admin\.gemini\antigravity\scratch\the-grove-reserve\app\components'
with open(os.path.join(base, 'Navbar.tsx'), 'w', encoding='utf-8') as f:
    f.write(navbar)
with open(os.path.join(base, 'RefOverlay.tsx'), 'w', encoding='utf-8') as f:
    f.write(ref_overlay)
with open(os.path.join(base, 'Footer.tsx'), 'w', encoding='utf-8') as f:
    f.write(footer)

print("All 3 components written successfully")

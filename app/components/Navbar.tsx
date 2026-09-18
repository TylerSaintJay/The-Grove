'use client';

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

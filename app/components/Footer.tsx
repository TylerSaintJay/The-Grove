'use client';

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

'use client';

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

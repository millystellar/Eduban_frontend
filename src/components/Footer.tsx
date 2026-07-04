'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || '/api'}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(24, 35, 30, 0.12)',
      background: 'linear-gradient(180deg, #f4efe3 0%, #efe7d8 100%)',
      paddingTop: '3.5rem',
      paddingBottom: '2rem',
    }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* ── Four-column grid ─────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>

          {/* Product */}
          <div>
            <h3 style={{ margin: '0 0 1rem', fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#124f43' }}>Product</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.75rem' }}>
              <li><Link href="/courses" style={linkStyle}>Courses</Link></li>
              <li><Link href="/credentials" style={linkStyle}>Credentials</Link></li>
              <li><Link href="/pricing" style={linkStyle}>Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 style={{ margin: '0 0 1rem', fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#124f43' }}>Resources</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.75rem' }}>
              <li>
                <a href="https://github.com/millystellar/Eduban_frontend/blob/main/README.md" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  Docs
                </a>
              </li>
              <li>
                <a href="https://github.com/millystellar" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{ margin: '0 0 1rem', fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#124f43' }}>Legal</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.75rem' }}>
              <li><Link href="/privacy" style={linkStyle}>Privacy Policy</Link></li>
              <li><Link href="/terms" style={linkStyle}>Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#124f43' }}>Newsletter</h3>
            <p style={{ margin: '0 0 0.875rem', fontSize: '0.88rem', color: '#5a685f', lineHeight: 1.6 }}>
              Stay up to date with the latest news.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'grid', gap: '0.5rem' }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                disabled={status === 'loading' || status === 'success'}
                style={inputStyle}
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                style={status === 'success' ? { ...btnStyle, background: '#1f6f5f', cursor: 'default' } : btnStyle}
              >
                {status === 'loading' ? 'Subscribing…' : status === 'success' ? 'Subscribed ✓' : 'Subscribe'}
              </button>
              {status === 'error' && (
                <p style={{ margin: 0, fontSize: '0.82rem', color: '#a94b2d' }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* ── Bottom bar ───────────────────────────────────────── */}
        <div style={{
          borderTop: '1px solid rgba(24, 35, 30, 0.12)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <p style={{ margin: 0, fontSize: '0.84rem', color: '#5a685f' }}>
            © <span suppressHydrationWarning>{year}</span> Eduban. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href="https://github.com/millystellar" target="_blank" rel="noopener noreferrer" style={socialStyle}>GitHub</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

/* ── Shared inline style objects ─────────────────────────────── */
const linkStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#5a685f',
  textDecoration: 'none',
  transition: 'color 150ms ease',
};

const inputStyle: React.CSSProperties = {
  padding: '0.5rem 0.75rem',
  borderRadius: '999px',
  border: '1px solid rgba(24, 35, 30, 0.18)',
  background: 'rgba(255, 250, 240, 0.82)',
  fontSize: '0.88rem',
  color: '#18231e',
  outline: 'none',
};

const btnStyle: React.CSSProperties = {
  padding: '0.5rem 1rem',
  borderRadius: '999px',
  border: 'none',
  background: 'linear-gradient(135deg, #1f6f5f, #124f43)',
  color: '#fff',
  fontWeight: 700,
  fontSize: '0.88rem',
  cursor: 'pointer',
  transition: 'opacity 150ms ease',
};

const socialStyle: React.CSSProperties = {
  fontSize: '0.84rem',
  color: '#5a685f',
  textDecoration: 'none',
  fontWeight: 600,
};

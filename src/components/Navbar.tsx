'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'Offres', href: '/offres' },
  { label: 'Comment ça marche', href: '/comment-ca-marche' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '16px 6%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : 'none',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.06)' : 'none',
        transition: 'all .3s ease',
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontWeight: 800, fontSize: 19, color: '#0F172A', letterSpacing: '-0.5px' }}>
            Lead<span style={{ color: '#2563EB' }}>SEO</span>
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-desktop">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{
              color: pathname === l.href ? '#0F172A' : '#64748B',
              fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color .2s',
            }}>
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href="/contact" className="nav-desktop" style={{
            background: '#2563EB', color: '#fff',
            padding: '9px 22px', borderRadius: 8,
            fontSize: 14, fontWeight: 600, textDecoration: 'none',
            boxShadow: '0 2px 12px rgba(37,99,235,0.3)',
          }}>
            Démarrer →
          </Link>
          <button onClick={() => setOpen(true)} className="nav-mobile-btn" style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 4,
            display: 'none', flexDirection: 'column', gap: 5,
          }}>
            {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: 22, height: 2, background: '#0F172A', borderRadius: 2 }} />)}
          </button>
        </div>
      </nav>

      {open && (
        <div style={{
          position: 'fixed', inset: 0, background: '#fff',
          zIndex: 200, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 36,
        }}>
          <button onClick={() => setOpen(false)} style={{
            position: 'absolute', top: 24, right: '6%',
            background: 'none', border: 'none', color: '#64748B',
            fontSize: 30, cursor: 'pointer', lineHeight: 1,
          }}>✕</button>
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              color: '#0F172A', fontSize: 24, fontWeight: 700, textDecoration: 'none',
            }}>{l.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} style={{
            background: '#2563EB', color: '#fff',
            padding: '14px 40px', borderRadius: 10,
            fontSize: 16, fontWeight: 700, textDecoration: 'none',
          }}>Démarrer →</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 720px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}

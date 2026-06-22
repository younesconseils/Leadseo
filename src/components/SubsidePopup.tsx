'use client'
import { useState, useEffect } from 'react'

export default function SubsidePopup({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => setVisible(true), 10)
    } else {
      setVisible(false)
      setTimeout(() => { document.body.style.overflow = '' }, 300)
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <span
        onClick={() => setOpen(true)}
        style={{
          cursor: 'pointer',
          position: 'relative',
          display: 'inline-block',
          color: 'inherit',
        }}
      >
        {children}
        <span style={{
          position: 'absolute',
          bottom: -2, left: 0, right: 0,
          height: 2,
          background: 'linear-gradient(90deg, #3B82F6, #6366F1)',
          borderRadius: 2,
          opacity: 0.7,
        }} />
      </span>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: visible ? 'rgba(10,18,40,0.6)' : 'rgba(10,18,40,0)',
            backdropFilter: visible ? 'blur(8px)' : 'blur(0px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
            transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: 24,
              maxWidth: 520,
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 40px 100px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.05)',
              transform: visible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.97)',
              opacity: visible ? 1 : 0,
              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
            }}
          >
            {/* HEADER avec illustration */}
            <div style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #1D4ED8 100%)',
              padding: '36px 36px 0',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Cercles décoratifs */}
              <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(99,102,241,0.15)' }} />
              <div style={{ position: 'absolute', top: 20, right: 20, width: 80, height: 80, borderRadius: '50%', background: 'rgba(59,130,246,0.2)' }} />

              {/* Badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 20, padding: '5px 12px', marginBottom: 20,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', display: 'inline-block', boxShadow: '0 0 6px #22C55E' }} />
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Exclusif LeadSEO</span>
              </div>

              <h2 style={{
                color: '#fff', fontSize: 28, fontWeight: 900,
                letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 12,
              }}>
                C'est quoi un<br />
                <span style={{ color: '#60A5FA' }}>lead subside ?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.65, marginBottom: 0, maxWidth: 380 }}>
                En Suisse, des milliers de personnes paient une LAMal trop chère sans savoir qu'elles ont droit à un subside. Elles cherchent — vous les trouvez.
              </p>

              {/* Stats row */}
              <div style={{
                display: 'flex', gap: 0,
                marginTop: 28,
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}>
                {[
                  { n: '3', u: 'produits', d: 'par RDV en moyenne' },
                  { n: '25–60', u: 'ans', d: 'classe moyenne' },
                  { n: '100%', u: 'exclusif', d: 'jamais partagé' },
                ].map((s, i) => (
                  <div key={s.u} style={{
                    flex: 1, padding: '18px 16px',
                    borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  }}>
                    <p style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', marginBottom: 1 }}>
                      {s.n} <span style={{ fontSize: 13, fontWeight: 600, color: '#60A5FA' }}>{s.u}</span>
                    </p>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>{s.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* BODY */}
            <div style={{ padding: '28px 36px 32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
                {[
                  {
                    icon: '🎯',
                    titre: 'La porte d\'entrée la plus facile',
                    desc: 'Le prospect cherche à économiser sur sa prime. Il est ouvert, motivé, sans défense. Parfait pour lancer la conversation.',
                  },
                  {
                    icon: '💼',
                    titre: 'Un RDV = 3 ventes potentielles',
                    desc: 'LAMal + complémentaire + 3e pilier. Le subside est le prétexte — l\'assurance complète est la destination.',
                  },
                  {
                    icon: '✅',
                    titre: 'Qualifié. Vérifié. Livré.',
                    desc: 'Numéro suisse vérifié, 4 000 CHF+/mois, pas de poursuites. Joignable dans les 2h suivant sa demande.',
                  },
                ].map(item => (
                  <div key={item.titre} style={{
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                    padding: '14px 16px',
                    background: '#F8FAFC',
                    borderRadius: 12,
                    border: '1px solid #F1F5F9',
                  }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                      background: '#EFF6FF',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>{item.icon}</div>
                    <div>
                      <p style={{ fontWeight: 700, color: '#0F172A', fontSize: 14, marginBottom: 3 }}>{item.titre}</p>
                      <p style={{ color: '#64748B', fontSize: 13, lineHeight: 1.55 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{ display: 'flex', gap: 10 }}>
                <a
                  href="/contact"
                  style={{
                    flex: 1, display: 'block', textAlign: 'center',
                    background: 'linear-gradient(135deg, #1D4ED8, #2563EB)',
                    color: '#fff', textDecoration: 'none',
                    padding: '14px 20px', borderRadius: 12,
                    fontSize: 15, fontWeight: 700,
                    boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Commander mes leads →
                </a>
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    background: '#F1F5F9', border: 'none',
                    borderRadius: 12, padding: '14px 16px',
                    fontSize: 13, color: '#94A3B8', cursor: 'pointer', fontWeight: 600,
                  }}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

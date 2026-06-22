'use client'
import { useState } from 'react'

export default function SubsidePopup({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <span
        onClick={() => setOpen(true)}
        style={{
          cursor: 'pointer',
          borderBottom: '2px dotted #2563EB',
          color: 'inherit',
        }}
      >
        {children}
      </span>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(15,23,42,0.55)',
            backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#fff', borderRadius: 20,
              maxWidth: 480, width: '100%',
              boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
              padding: '28px 32px 24px',
              position: 'relative',
            }}>
              <button
                onClick={() => setOpen(false)}
                style={{
                  position: 'absolute', top: 16, right: 16,
                  background: 'rgba(255,255,255,0.15)', border: 'none',
                  borderRadius: '50%', width: 32, height: 32,
                  color: '#fff', fontSize: 18, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >×</button>
              <div style={{ fontSize: 36, marginBottom: 10 }}>🏥</div>
              <h2 style={{ color: '#fff', fontSize: 22, fontWeight: 900, marginBottom: 8, letterSpacing: '-0.02em' }}>
                C'est quoi un lead subside ?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.6 }}>
                En Suisse, des milliers de personnes ont droit à un subside pour payer leur assurance maladie — mais ne le demandent jamais.
              </p>
            </div>

            {/* Body */}
            <div style={{ padding: '28px 32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
                {[
                  {
                    icon: '💡',
                    titre: 'Un prospect qui cherche à réduire sa prime',
                    desc: "Il paie trop cher. Il a entendu parler des subsides. Il remplit un formulaire pour savoir s'il y a droit.",
                  },
                  {
                    icon: '🎯',
                    titre: 'La porte d\'entrée idéale pour vous',
                    desc: 'Ce prospect est ouvert, motivé, et souvent sans complémentaire. Un rendez-vous = LAMal + complémentaire + 3e pilier.',
                  },
                  {
                    icon: '✅',
                    titre: 'Qualifié, vérifié, 100% exclusif',
                    desc: 'Numéro suisse vérifié, classe moyenne, pas de poursuites. Il ne sera jamais contacté par un autre courtier.',
                  },
                ].map(item => (
                  <div key={item.titre} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: '#EFF6FF', border: '1px solid #BFDBFE',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>{item.icon}</div>
                    <div>
                      <p style={{ fontWeight: 700, color: '#0F172A', fontSize: 14, marginBottom: 3 }}>{item.titre}</p>
                      <p style={{ color: '#64748B', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reassurance banner */}
              <div style={{
                background: '#F0FDF4', border: '1.5px solid #BBF7D0',
                borderRadius: 12, padding: '14px 18px', marginBottom: 24,
              }}>
                <p style={{ fontSize: 13, color: '#166534', lineHeight: 1.6 }}>
                  <strong>Notre expérience terrain :</strong> un lead subside bien traité génère en moyenne 3 produits signés. C'est le meilleur point d'entrée du marché.
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                style={{
                  width: '100%', background: '#2563EB', color: '#fff',
                  border: 'none', borderRadius: 10, padding: '14px',
                  fontSize: 15, fontWeight: 700, cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(37,99,235,0.3)',
                }}
              >
                Parfait, je veux commander →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

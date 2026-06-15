'use client'
import { useState, useEffect } from 'react'

const STEPS = [
  {
    icon: '🔍',
    titre: 'Le prospect cherche',
    desc: 'Il tape « assurance maladie Suisse » sur Google. Il tombe sur notre formulaire.',
    couleur: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.25)',
  },
  {
    icon: '📝',
    titre: 'Il remplit le formulaire',
    desc: 'Nom, prénom, numéro, type d\'assurance recherché. Consentement explicite coché.',
    couleur: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.25)',
  },
  {
    icon: '✅',
    titre: 'Vérification immédiate',
    desc: 'Numéro validé, intention confirmée, doublons vérifiés. Le lead est qualifié.',
    couleur: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
  },
  {
    icon: '📬',
    titre: 'Livré dans votre boîte',
    desc: 'Le lead arrive par email en moins de 2h — réservé pour vous seul, jamais partagé.',
    couleur: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    border: 'rgba(37,99,235,0.25)',
  },
]

export default function AnimationTunnel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % STEPS.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  const step = STEPS[active]

  return (
    <div>
      {/* Steps row */}
      <div style={{ display: 'flex', gap: 0, marginBottom: 32, position: 'relative' }}>
        {/* Connecting line */}
        <div style={{
          position: 'absolute', top: 28, left: '12.5%', right: '12.5%',
          height: 2, background: '#E2E8F0', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', top: 28, left: '12.5%',
          width: `${(active / (STEPS.length - 1)) * 75}%`,
          height: 2, background: '#2563EB', zIndex: 1,
          transition: 'width .5s ease',
        }} />

        {STEPS.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              background: 'none', border: 'none', cursor: 'pointer', position: 'relative', zIndex: 2,
            }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22,
              background: i <= active ? s.couleur : '#F1F5F9',
              border: `3px solid ${i <= active ? s.couleur : '#E2E8F0'}`,
              boxShadow: i === active ? `0 0 0 4px ${s.bg}` : 'none',
              transition: 'all .3s ease',
            }}>
              {i <= active ? s.icon : <span style={{ fontSize: 18, color: '#CBD5E1' }}>{i + 1}</span>}
            </div>
            <span style={{
              fontSize: 12, fontWeight: i === active ? 700 : 500,
              color: i === active ? s.couleur : '#94A3B8',
              transition: 'color .3s',
            }}>
              Étape {i + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Detail card */}
      <div style={{
        background: step.bg,
        border: `1.5px solid ${step.border}`,
        borderRadius: 16,
        padding: '28px 32px',
        display: 'flex', gap: 20, alignItems: 'flex-start',
        transition: 'all .3s ease',
        minHeight: 120,
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 26, flexShrink: 0,
          boxShadow: `0 4px 16px ${step.border}`,
        }}>
          {step.icon}
        </div>
        <div>
          <p style={{ fontSize: 17, fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>{step.titre}</p>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.65 }}>{step.desc}</p>
        </div>
        <div style={{
          marginLeft: 'auto', flexShrink: 0,
          width: 36, height: 36, borderRadius: '50%',
          background: step.couleur, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, color: '#fff', fontWeight: 800,
        }}>
          {active + 1}/{STEPS.length}
        </div>
      </div>

      {/* Dot nav */}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 20 }}>
        {STEPS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? 24 : 8, height: 8,
              borderRadius: 4, border: 'none', cursor: 'pointer',
              background: i === active ? '#2563EB' : '#E2E8F0',
              transition: 'all .3s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}

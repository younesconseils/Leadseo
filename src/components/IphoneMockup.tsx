'use client'
import { useState, useEffect } from 'react'

const SCREENS = [
  { id: 'agenda', label: 'Agenda' },
  { id: 'leads', label: 'Leads du jour' },
  { id: 'commission', label: 'Commissions' },
]

const RDV = [
  { heure: '08:30', nom: 'Marie Leclerc', type: 'LAMal · Famille', canton: 'GE', color: '#4DA3FF' },
  { heure: '09:15', nom: 'Thomas Keller', type: 'Prévoyance LPP', canton: 'VD', color: '#2EE8B6' },
  { heure: '10:00', nom: 'Sofia Armand', type: 'Assurance vie', canton: 'VS', color: '#FFB84D' },
  { heure: '11:30', nom: 'Rachid Benali', type: 'LAMal · Indép.', canton: 'FR', color: '#BBA4FF' },
  { heure: '14:00', nom: 'Julie Meier', type: 'Complémentaire', canton: 'NE', color: '#4DA3FF' },
  { heure: '15:30', nom: 'Pierre Dubois', type: 'Prévoyance', canton: 'GE', color: '#2EE8B6' },
  { heure: '17:00', nom: 'Anna Schmidt', type: 'LAMal · Couple', canton: 'VD', color: '#FFB84D' },
]

const LEADS_JOUR = [
  { initials: 'ML', nom: 'Marie Leclerc',  info: 'Genève · LAMal',     color: '#4DA3FF', statut: 'Appelé ✓',   ok: true  },
  { initials: 'TK', nom: 'Thomas Keller',  info: 'Lausanne · LPP',     color: '#2EE8B6', statut: 'RDV fixé ✓', ok: true  },
  { initials: 'SA', nom: 'Sofia Armand',   info: 'Sion · Vie',          color: '#FFB84D', statut: 'En attente', ok: false },
  { initials: 'RB', nom: 'Rachid Benali',  info: 'Fribourg · LAMal',   color: '#BBA4FF', statut: 'Nouveau',    ok: false },
  { initials: 'JM', nom: 'Julie Meier',    info: 'Neuchâtel · Comp.',   color: '#4DA3FF', statut: 'Nouveau',    ok: false },
]

const COMM_MOIS = [
  { mois: 'Jan', h: 36 },
  { mois: 'Fév', h: 48 },
  { mois: 'Mar', h: 41 },
  { mois: 'Avr', h: 62 },
  { mois: 'Mai', h: 72 },
  { mois: 'Jun', h: 100 },
]

const BG = '#0C1520'   // fond écran (un peu plus clair que le site)

function ScreenAgenda() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: BG }}>
      {/* Header */}
      <div style={{ padding: '14px 16px 10px', background: '#0F1B2C', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <div>
            <p style={{ fontSize: 9, color: '#5A7AA0', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '.1em' }}>Vendredi</p>
            <p style={{ fontSize: 22, fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.03em' }}>13 juin</p>
          </div>
          <div style={{ background: 'rgba(46,232,182,0.15)', border: '1px solid rgba(46,232,182,0.4)', borderRadius: 20, padding: '4px 11px' }}>
            <p style={{ fontSize: 11, color: '#2EE8B6', fontWeight: 800 }}>7 RDV</p>
          </div>
        </div>
        {/* Semaine */}
        <div style={{ display: 'flex', gap: 4 }}>
          {['L','M','M','J','V','S','D'].map((j, i) => (
            <div key={i} style={{
              flex: 1, textAlign: 'center', padding: '5px 0', borderRadius: 8,
              background: i === 4 ? '#4DA3FF' : 'rgba(255,255,255,0.05)',
            }}>
              <p style={{ fontSize: 8, color: i === 4 ? 'rgba(255,255,255,0.75)' : '#3D5878', fontWeight: 600 }}>{j}</p>
              <p style={{ fontSize: 12, fontWeight: 900, color: i === 4 ? '#fff' : '#7A96B8', marginTop: 2 }}>{9+i}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Liste RDV */}
      <div style={{ flex: 1, overflowY: 'hidden', padding: '10px 12px 0' }}>
        {RDV.map((r, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 7 }}>
            <p style={{ fontSize: 9, color: '#3D5878', fontWeight: 600, paddingTop: 6, width: 28, textAlign: 'right', flexShrink: 0 }}>{r.heure}</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: r.color, marginTop: 5, boxShadow: `0 0 6px ${r.color}88` }} />
              {i < RDV.length - 1 && <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.07)', marginTop: 2 }} />}
            </div>
            <div style={{ flex: 1, background: `${r.color}14`, border: `1px solid ${r.color}35`, borderRadius: 9, padding: '6px 10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: '#E8F0FF' }}>{r.nom}</p>
                <span style={{ fontSize: 8, fontWeight: 800, padding: '2px 6px', borderRadius: 4, background: `${r.color}28`, color: r.color }}>{r.canton}</span>
              </div>
              <p style={{ fontSize: 9, color: '#7A96B8', marginTop: 1 }}>{r.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScreenLeads() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: BG }}>
      <div style={{ padding: '14px 16px 10px', background: '#0F1B2C', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontSize: 9, color: '#5A7AA0', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>Aujourd'hui · 13 juin</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <p style={{ fontSize: 19, fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em' }}>Leads du jour</p>
          <div style={{ background: 'rgba(77,163,255,0.15)', border: '1px solid rgba(77,163,255,0.4)', borderRadius: 20, padding: '3px 10px' }}>
            <p style={{ fontSize: 10, fontWeight: 800, color: '#4DA3FF' }}>5 reçus</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { label: 'Appelés',    val: '2', color: '#2EE8B6', bg: 'rgba(46,232,182,0.1)'  },
            { label: 'RDV fixés',  val: '1', color: '#4DA3FF', bg: 'rgba(77,163,255,0.1)'  },
            { label: 'En attente', val: '2', color: '#FFB84D', bg: 'rgba(255,184,77,0.1)'  },
          ].map(s => (
            <div key={s.label} style={{ flex: 1, background: s.bg, border: `1px solid ${s.color}30`, borderRadius: 9, padding: '7px 6px', textAlign: 'center' }}>
              <p style={{ fontSize: 17, fontWeight: 900, color: s.color }}>{s.val}</p>
              <p style={{ fontSize: 8, color: '#5A7AA0', marginTop: 2 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'hidden', padding: '8px 12px 0' }}>
        {LEADS_JOUR.map((l, i) => (
          <div key={i} style={{
            display: 'flex', gap: 10, alignItems: 'center',
            background: l.ok ? `${l.color}0D` : 'rgba(255,255,255,0.03)',
            border: `1px solid ${l.ok ? l.color + '30' : 'rgba(255,255,255,0.06)'}`,
            borderRadius: 10, padding: '8px 10px', marginBottom: 6,
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
              background: l.color + '20', border: `1.5px solid ${l.color}50`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 9, fontWeight: 900, color: l.color,
            }}>{l.initials}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#E8F0FF' }}>{l.nom}</p>
              <p style={{ fontSize: 9, color: '#5A7AA0' }}>{l.info}</p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{
                fontSize: 9, fontWeight: 800, padding: '3px 7px', borderRadius: 5, marginBottom: 3,
                background: l.statut.includes('✓') ? 'rgba(46,232,182,0.15)' : l.statut === 'Nouveau' ? 'rgba(77,163,255,0.15)' : 'rgba(255,184,77,0.15)',
                color: l.statut.includes('✓') ? '#2EE8B6' : l.statut === 'Nouveau' ? '#4DA3FF' : '#FFB84D',
                border: `1px solid ${l.statut.includes('✓') ? 'rgba(46,232,182,0.3)' : l.statut === 'Nouveau' ? 'rgba(77,163,255,0.3)' : 'rgba(255,184,77,0.3)'}`,
              }}>{l.statut}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScreenCommission() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: BG }}>
      <div style={{ padding: '14px 16px 12px', background: '#0F1B2C', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontSize: 9, color: '#5A7AA0', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>2025 · Évolution</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <p style={{ fontSize: 19, fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em' }}>Commissions</p>
            <p style={{ fontSize: 26, fontWeight: 900, color: '#2EE8B6', letterSpacing: '-0.03em', marginTop: 4 }}>5 800 CHF</p>
            <p style={{ fontSize: 9, color: '#5A7AA0', marginTop: 2 }}>Juin 2025</p>
          </div>
          <div style={{ background: 'rgba(46,232,182,0.12)', border: '1px solid rgba(46,232,182,0.35)', borderRadius: 12, padding: '8px 14px', textAlign: 'center' }}>
            <p style={{ fontSize: 17, fontWeight: 900, color: '#2EE8B6' }}>+38%</p>
            <p style={{ fontSize: 9, color: '#5A7AA0', marginTop: 2 }}>vs mai</p>
          </div>
        </div>
      </div>
      <div style={{ padding: '14px 16px 0', flex: 1 }}>
        {/* Graphique */}
        <div style={{ display: 'flex', gap: 5, alignItems: 'flex-end', height: 88, marginBottom: 10 }}>
          {COMM_MOIS.map((m, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%', justifyContent: 'flex-end' }}>
              {i === 5 && (
                <div style={{ background: '#2EE8B6', borderRadius: 3, padding: '1px 4px', fontSize: 7, fontWeight: 900, color: '#07101D' }}>5 800</div>
              )}
              <div style={{
                width: '100%', height: `${m.h}%`, borderRadius: '4px 4px 2px 2px',
                background: i === 5
                  ? 'linear-gradient(180deg, #2EE8B6 0%, rgba(46,232,182,0.3) 100%)'
                  : i === 4 ? 'rgba(77,163,255,0.2)' : 'rgba(255,255,255,0.06)',
                border: i === 5 ? '1px solid rgba(46,232,182,0.5)' : i === 4 ? '1px solid rgba(77,163,255,0.2)' : '1px solid rgba(255,255,255,0.05)',
              }} />
              <p style={{ fontSize: 8, color: i === 5 ? '#2EE8B6' : i === 4 ? '#4DA3FF' : '#3D5878', fontWeight: i >= 4 ? 700 : 400 }}>{m.mois}</p>
            </div>
          ))}
        </div>
        {/* Contrats */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 12 }}>
          <p style={{ fontSize: 8, color: '#3D5878', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>Contrats signés ce mois</p>
          {[
            { nom: 'Marie Leclerc', comm: '420 CHF', type: 'LAMal famille',   color: '#4DA3FF' },
            { nom: 'Thomas Keller', comm: '680 CHF', type: 'Prévoyance LPP',  color: '#2EE8B6' },
            { nom: 'Sofia Armand',  comm: '940 CHF', type: 'Assurance vie',   color: '#FFB84D' },
          ].map((c, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: c.color, flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: '#E8F0FF' }}>{c.nom}</p>
                  <p style={{ fontSize: 9, color: '#3D5878' }}>{c.type}</p>
                </div>
              </div>
              <p style={{ fontSize: 13, fontWeight: 900, color: '#2EE8B6' }}>{c.comm}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const GLOWS = [
  'radial-gradient(ellipse, rgba(77,163,255,0.5) 0%, rgba(77,163,255,0.12) 40%, transparent 70%)',
  'radial-gradient(ellipse, rgba(46,232,182,0.45) 0%, rgba(46,232,182,0.1) 40%, transparent 70%)',
  'radial-gradient(ellipse, rgba(46,232,182,0.45) 0%, rgba(255,184,77,0.1) 40%, transparent 70%)',
]

export default function IphoneMockup() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % 3), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ position: 'relative', width: 320, height: 620 }}>

      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300, height: 520,
        background: GLOWS[active],
        filter: 'blur(40px)',
        transition: 'background 1.2s ease',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Anneau décoratif */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 246, height: 552,
        borderRadius: 50,
        border: `1px solid ${active === 0 ? 'rgba(77,163,255,0.2)' : 'rgba(46,232,182,0.2)'}`,
        transition: 'border-color 1.2s ease',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* iPhone */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        width: 238,
        background: '#11111A',
        borderRadius: 48,
        border: '8px solid #1E1E2C',
        boxShadow: `
          0 0 0 1px rgba(255,255,255,0.1),
          0 60px 120px rgba(0,0,0,0.85),
          0 20px 40px rgba(0,0,0,0.5),
          inset 0 1px 0 rgba(255,255,255,0.1)
        `,
        overflow: 'hidden',
      }}>
        {/* Dynamic Island */}
        <div style={{ background: '#11111A', padding: '14px 0 8px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 90, height: 26, background: '#000', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#1a1a28' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1a1a28' }} />
          </div>
        </div>

        {/* Écran — rendu conditionnel, 0 superposition */}
        <div style={{ height: 462, overflow: 'hidden' }}>
          {active === 0 && <ScreenAgenda />}
          {active === 1 && <ScreenLeads />}
          {active === 2 && <ScreenCommission />}
        </div>

        {/* Home bar */}
        <div style={{ background: '#11111A', padding: '8px 0 16px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 80, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.22)' }} />
        </div>
      </div>

      {/* Badge haut-droite */}
      <div style={{
        position: 'absolute', top: 56, right: -4, zIndex: 5,
        background: 'rgba(8,18,32,0.97)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(46,232,182,0.4)',
        borderRadius: 14, padding: '10px 14px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)',
      }}>
        <p style={{ fontSize: 9, color: '#5A7AA0', marginBottom: 4 }}>RDV aujourd'hui</p>
        <p style={{ fontSize: 28, fontWeight: 900, color: '#2EE8B6', letterSpacing: '-0.04em', lineHeight: 1 }}>7</p>
        <p style={{ fontSize: 9, color: '#3D5878', marginTop: 4 }}>agenda rempli</p>
      </div>

      {/* Badge bas-gauche */}
      <div style={{
        position: 'absolute', bottom: 72, left: -4, zIndex: 5,
        background: 'rgba(8,18,32,0.97)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,184,77,0.4)',
        borderRadius: 14, padding: '10px 14px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)',
      }}>
        <p style={{ fontSize: 9, color: '#5A7AA0', marginBottom: 4 }}>Commission juin</p>
        <p style={{ fontSize: 21, fontWeight: 900, color: '#FFB84D', letterSpacing: '-0.03em', lineHeight: 1 }}>5 800 <span style={{ fontSize: 10, fontWeight: 500 }}>CHF</span></p>
        <p style={{ fontSize: 9, color: '#2EE8B6', marginTop: 4 }}>↑ +38% vs mai</p>
      </div>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, zIndex: 5 }}>
        {SCREENS.map((s, i) => (
          <button key={s.id} onClick={() => setActive(i)} style={{
            width: active === i ? 22 : 6, height: 6, borderRadius: 3,
            background: active === i ? '#4DA3FF' : 'rgba(255,255,255,0.15)',
            border: 'none', cursor: 'pointer', padding: 0,
            transition: 'all 0.3s ease',
          }} />
        ))}
      </div>
    </div>
  )
}

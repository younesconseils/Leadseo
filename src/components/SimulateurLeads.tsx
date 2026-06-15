'use client'
import { useState } from 'react'
import Link from 'next/link'

const PALIERS = [
  { budget: 1000,  prix: 35, label: '1 000 CHF' },
  { budget: 2000,  prix: 35, label: '2 000 CHF' },
  { budget: 3000,  prix: 30, label: '3 000 CHF' },
  { budget: 5000,  prix: 28, label: '5 000 CHF' },
  { budget: 7500,  prix: 20, label: '7 500 CHF' },
  { budget: 10000, prix: 20, label: '10 000 CHF' },
]

export default function SimulateurLeads() {
  const [idx, setIdx] = useState(2) // 3000 CHF par défaut
  const palier = PALIERS[idx]
  const nLeads = Math.floor(palier.budget / palier.prix)
  const economie = palier.prix < 35 ? Math.round((1 - palier.prix / 35) * 100) : 0
  const economieCHF = palier.prix < 35 ? (35 - palier.prix) * nLeads : 0

  return (
    <div style={{ background: '#0F172A', borderRadius: 20, overflow: 'hidden', maxWidth: 860 }}>

      {/* En-tête */}
      <div style={{ padding: 'clamp(20px,5%,36px) clamp(16px,5%,44px) 28px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <p style={{ fontSize: 11, color: '#3B82F6', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 10 }}>
          Simulateur de volume — Leads assurance exclusifs
        </p>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', lineHeight: 1.3, margin: 0 }}>
          Calculez votre rentabilité avant de commander.
        </h3>
      </div>

      {/* Sélecteur budget */}
      <div style={{ padding: 'clamp(16px,5%,28px) clamp(16px,5%,44px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 600, marginBottom: 14, letterSpacing: '.05em' }}>
          VOTRE BUDGET MENSUEL
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {PALIERS.map((p, i) => (
            <button
              key={p.budget}
              onClick={() => setIdx(i)}
              style={{
                padding: '11px 20px', borderRadius: 8, cursor: 'pointer',
                fontSize: 15, fontWeight: 700, border: 'none',
                background: idx === i ? '#2563EB' : 'rgba(255,255,255,0.06)',
                color: idx === i ? '#fff' : 'rgba(255,255,255,0.5)',
                boxShadow: idx === i ? '0 4px 16px rgba(37,99,235,0.4)' : 'none',
                transition: 'all .15s',
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Résultats */}
      <div className="g-sim" style={{ padding: 'clamp(20px,5%,32px) clamp(16px,5%,44px)' }}>
        <div>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 12 }}>Prix par lead</p>
          <p style={{ fontSize: 52, fontWeight: 900, color: '#3B82F6', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 6 }}>
            {palier.prix}<span style={{ fontSize: 20, color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}> CHF</span>
          </p>
          {economie > 0
            ? <p style={{ fontSize: 13, color: '#10B981', fontWeight: 600 }}>−{economie}% vs tarif standard</p>
            : <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Tarif standard</p>
          }
        </div>

        <div>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 12 }}>Leads reçus</p>
          <p style={{ fontSize: 52, fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 6 }}>
            {nLeads}<span style={{ fontSize: 20, color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}> leads</span>
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>100% exclusifs · livraison 2h</p>
        </div>

        <div>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 12 }}>Économie réalisée</p>
          <p style={{ fontSize: 52, fontWeight: 900, color: economie > 0 ? '#10B981' : 'rgba(255,255,255,0.15)', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 6 }}>
            {economie > 0 ? `${economieCHF}` : '—'}<span style={{ fontSize: 20, fontWeight: 600, color: economie > 0 ? '#10B981' : 'rgba(255,255,255,0.15)' }}>{economie > 0 ? ' CHF' : ''}</span>
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>{economie > 0 ? 'vs commande standard' : 'Passez à 3 000 CHF+'}</p>
        </div>
      </div>

      {/* Barre de paliers */}
      <div className="g-paliers" style={{ padding: '0 clamp(16px,5%,44px) 28px' }}>
        {[
          { label: 'Standard', seuil: '< 3 000', prix: '35 CHF' },
          { label: 'Intermédiaire', seuil: '3 000+', prix: '30 CHF' },
          { label: 'Avancé', seuil: '5 000+', prix: '28 CHF' },
          { label: 'Premium', seuil: '7 500+', prix: '20 CHF' },
        ].map((p, i) => {
          const active = (i === 0 && palier.prix === 35 && palier.budget < 3000)
            || (i === 1 && palier.prix === 30)
            || (i === 2 && palier.prix === 28)
            || (i === 3 && palier.prix === 20)
          return (
            <div key={p.label} style={{
              flex: 1, padding: '12px 14px', borderRadius: 8,
              background: active ? 'rgba(37,99,235,0.2)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${active ? 'rgba(59,130,246,0.5)' : 'rgba(255,255,255,0.06)'}`,
            }}>
              <p style={{ fontSize: 15, fontWeight: 900, color: active ? '#3B82F6' : 'rgba(255,255,255,0.2)', marginBottom: 2 }}>{p.prix}</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>{p.seuil} CHF/mois</p>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div style={{
        padding: 'clamp(16px,5%,24px) clamp(16px,5%,44px) clamp(20px,5%,36px)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
      }}>
        <div>
          <p style={{ fontSize: 15, color: '#fff', fontWeight: 700, marginBottom: 4 }}>
            {nLeads} leads assurance exclusifs pour {palier.budget.toLocaleString('fr-CH')} CHF/mois
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            Conformité LPD · Remplacement garanti · Aucun engagement
          </p>
        </div>
        <Link href={`/contact?budget=${palier.budget}`} style={{
          background: '#2563EB', color: '#fff',
          padding: '14px 28px', borderRadius: 8,
          fontSize: 15, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap',
          boxShadow: '0 4px 20px rgba(37,99,235,0.45)',
        }}>
          Commander ces {nLeads} leads assurance →
        </Link>
      </div>
    </div>
  )
}

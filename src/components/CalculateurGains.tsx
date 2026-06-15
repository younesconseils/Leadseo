'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function CalculateurGains() {
  const [nLeads, setNLeads] = useState(20)
  const [commission, setCommission] = useState(800)
  const [conversion, setConversion] = useState(20)

  const contratsMois = Math.round(nLeads * (conversion / 100))
  const gainsMois = contratsMois * commission
  const gainsAn = gainsMois * 12

  return (
    <div style={{ background: '#0F172A', borderRadius: 20, overflow: 'hidden', maxWidth: 860 }}>
      <div style={{ padding: 'clamp(20px,5%,36px) clamp(16px,5%,44px) 28px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 8 }}>
          Combien pouvez-vous gagner ?
        </h3>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', margin: 0 }}>
          Ajustez les curseurs selon votre activité. Le calcul se fait en temps réel.
        </p>
      </div>

      <div className="g-calc" style={{ padding: 'clamp(20px,5%,32px) clamp(16px,5%,44px)' }}>
        {/* Curseurs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <label style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Leads reçus par mois</label>
              <span style={{ fontSize: 16, fontWeight: 800, color: '#3B82F6' }}>{nLeads}</span>
            </div>
            <input
              type="range" min={5} max={100} step={5}
              value={nLeads}
              onChange={e => setNLeads(+e.target.value)}
              style={{ width: '100%', accentColor: '#2563EB', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>5</span>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>100</span>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <label style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Taux de conversion</label>
              <span style={{ fontSize: 16, fontWeight: 800, color: '#3B82F6' }}>{conversion}%</span>
            </div>
            <input
              type="range" min={5} max={50} step={5}
              value={conversion}
              onChange={e => setConversion(+e.target.value)}
              style={{ width: '100%', accentColor: '#2563EB', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>5%</span>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>50%</span>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <label style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Commission par contrat</label>
              <span style={{ fontSize: 16, fontWeight: 800, color: '#3B82F6' }}>{commission.toLocaleString('fr-CH')} CHF</span>
            </div>
            <input
              type="range" min={200} max={3000} step={100}
              value={commission}
              onChange={e => setCommission(+e.target.value)}
              style={{ width: '100%', accentColor: '#2563EB', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>200 CHF</span>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>3 000 CHF</span>
            </div>
          </div>
        </div>

        {/* Résultats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '20px 24px' }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 8 }}>Contrats signés / mois</p>
            <p style={{ fontSize: 40, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>
              {contratsMois}
              <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}> contrats</span>
            </p>
          </div>

          <div style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.35)', borderRadius: 12, padding: '20px 24px' }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 8 }}>Revenus supplémentaires / mois</p>
            <p style={{ fontSize: 40, fontWeight: 900, color: '#3B82F6', letterSpacing: '-0.03em', lineHeight: 1 }}>
              {gainsMois.toLocaleString('fr-CH')}
              <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}> CHF</span>
            </p>
          </div>

          <div style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 12, padding: '20px 24px' }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 8 }}>Sur 12 mois</p>
            <p style={{ fontSize: 40, fontWeight: 900, color: '#10B981', letterSpacing: '-0.03em', lineHeight: 1 }}>
              {gainsAn.toLocaleString('fr-CH')}
              <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}> CHF</span>
            </p>
          </div>

          <Link href="/contact" style={{
            display: 'block', textAlign: 'center',
            background: '#2563EB', color: '#fff',
            padding: '14px 24px', borderRadius: 8,
            fontSize: 15, fontWeight: 700, textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(37,99,235,0.4)',
            marginTop: 4,
          }}>
            Recevoir {nLeads} leads / mois →
          </Link>
        </div>
      </div>
    </div>
  )
}

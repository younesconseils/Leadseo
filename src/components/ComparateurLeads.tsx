'use client'
import { useState } from 'react'

const ROWS = [
  { label: 'Le lead vous est réservé', partage: false, exclusif: true },
  { label: 'Zéro concurrent vous précède', partage: false, exclusif: true },
  { label: 'Prospect encore chaud à l\'appel', partage: false, exclusif: true },
  { label: 'Taux de signature élevé', partage: false, exclusif: true },
  { label: 'Vendu à 5–10 courtiers à la fois', partage: true, exclusif: false },
  { label: 'Prospect déjà contacté plusieurs fois', partage: true, exclusif: false },
  { label: 'Course contre vos concurrents', partage: true, exclusif: false },
  { label: 'Prospect saturé, conversion faible', partage: true, exclusif: false },
]

export default function ComparateurLeads() {
  const [hovered, setHovered] = useState<'partage' | 'exclusif' | null>(null)

  return (
    <div style={{ maxWidth: 820 }}>
      <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #E2E8F0', background: '#fff', boxShadow: '0 4px 32px rgba(0,0,0,0.06)' }}>

        {/* Header row */}
        <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ flex: 2, background: '#F8FAFC', padding: '20px 24px', borderRight: '1px solid #E2E8F0' }}>
            <p style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em' }}>Critère</p>
          </div>
          <div
            onMouseEnter={() => setHovered('partage')}
            onMouseLeave={() => setHovered(null)}
            style={{
              flex: 1, padding: '20px 24px', borderRight: '1px solid #E2E8F0', textAlign: 'center',
              background: hovered === 'partage' ? '#FEF2F2' : '#fff', transition: 'background .2s', cursor: 'default',
            }}>
            <p style={{ fontSize: 13, fontWeight: 800, color: '#DC2626', marginBottom: 4 }}>Contact partagé</p>
            <p style={{ fontSize: 11, color: '#EF4444' }}>Vendu à plusieurs</p>
          </div>
          <div
            onMouseEnter={() => setHovered('exclusif')}
            onMouseLeave={() => setHovered(null)}
            style={{
              flex: 1, padding: '20px 24px', textAlign: 'center',
              background: hovered === 'exclusif' ? '#EFF6FF' : '#fff', transition: 'background .2s', cursor: 'default',
            }}>
            <p style={{ fontSize: 13, fontWeight: 800, color: '#2563EB', marginBottom: 4 }}>Contact réservé</p>
            <p style={{ fontSize: 11, color: '#3B82F6' }}>LeadSEO — 100% pour vous</p>
          </div>
        </div>

        {/* Data rows */}
        {ROWS.map((row, i) => {
          const isLast = i === ROWS.length - 1
          return (
            <div key={i} style={{ display: 'flex', borderBottom: isLast ? 'none' : '1px solid #F1F5F9' }}>
              <div style={{
                flex: 2, padding: '14px 24px', borderRight: '1px solid #E2E8F0',
                background: '#F8FAFC', display: 'flex', alignItems: 'center',
              }}>
                <span style={{ fontSize: 13, color: '#475569', fontWeight: 500 }}>{row.label}</span>
              </div>
              <div
                onMouseEnter={() => setHovered('partage')}
                onMouseLeave={() => setHovered(null)}
                style={{
                  flex: 1, padding: '14px 24px', borderRight: '1px solid #E2E8F0',
                  background: hovered === 'partage' ? '#FEF2F2' : '#fff',
                  transition: 'background .2s', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                {row.partage
                  ? <span style={{ color: '#22C55E', fontSize: 18, fontWeight: 700 }}>✓</span>
                  : <span style={{ color: '#FCA5A5', fontSize: 20 }}>✕</span>
                }
              </div>
              <div
                onMouseEnter={() => setHovered('exclusif')}
                onMouseLeave={() => setHovered(null)}
                style={{
                  flex: 1, padding: '14px 24px',
                  background: hovered === 'exclusif' ? '#EFF6FF' : '#fff',
                  transition: 'background .2s', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                {row.exclusif
                  ? <span style={{ color: '#2563EB', fontSize: 18, fontWeight: 700 }}>✓</span>
                  : <span style={{ color: '#BFDBFE', fontSize: 20 }}>✕</span>
                }
              </div>
            </div>
          )
        })}
      </div>

      {/* Verdict */}
      <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 12, padding: '18px 22px', display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ fontSize: 28 }}>😤</span>
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#DC2626', marginBottom: 4 }}>Contact partagé</p>
            <p style={{ fontSize: 13, color: '#EF4444' }}>Vous êtes en compétition avant même de décrocher le téléphone.</p>
          </div>
        </div>
        <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 12, padding: '18px 22px', display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ fontSize: 28 }}>🎯</span>
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#2563EB', marginBottom: 4 }}>Contact réservé LeadSEO</p>
            <p style={{ fontSize: 13, color: '#3B82F6' }}>Le prospect n'a parlé qu'à vous. C'est votre client à signer.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

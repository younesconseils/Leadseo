'use client'
import { useState } from 'react'
import SubsidePopup from '@/components/SubsidePopup'

const inputStyle = (focus: boolean) => ({
  width: '100%',
  background: '#fff',
  border: `1.5px solid ${focus ? '#2563EB' : '#E2E8F0'}`,
  borderRadius: 8,
  padding: '11px 14px',
  color: '#0F172A',
  fontSize: 15,
  outline: 'none',
  boxSizing: 'border-box' as const,
  transition: 'border-color 0.15s ease',
})

const labelStyle = {
  display: 'block', fontSize: 13, fontWeight: 600, color: '#475569', marginBottom: 8,
}

type State = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<State>('idle')
  const [focused, setFocused] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setState('success')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  const fi = (name: string) => ({
    onFocus: () => setFocused(name),
    onBlur: () => setFocused(''),
    style: inputStyle(focused === name),
  })

  if (state === 'success') {
    return (
      <section style={{ padding: '130px 7% 80px', background: '#fff' }}>
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: '#F0FDF4', border: '2px solid #BBF7D0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 32, margin: '0 auto 28px',
          }}>✅</div>
          <h1 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.03em' }}>
            Commande reçue !
          </h1>
          <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.75, marginBottom: 8 }}>
            On revient vers toi <strong>sous 2 heures</strong> pour confirmer ta commande de leads subside.
          </p>
          <p style={{ color: '#94A3B8', fontSize: 14, marginBottom: 36 }}>
            Un email de confirmation vient d'être envoyé dans ta boîte.
          </p>
          <a href="/" style={{
            display: 'inline-block', background: '#F1F5F9', color: '#0F172A',
            padding: '12px 28px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none',
          }}>Retour à l'accueil</a>
        </div>
      </section>
    )
  }

  return (
    <section style={{ padding: '130px 7% 80px', background: '#fff' }}>
      <div className="g2x" style={{ maxWidth: 1000, margin: '0 auto' }}>

        {/* Left */}
        <div>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, color: '#0F172A', marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Commandez vos <SubsidePopup>leads subside</SubsidePopup>
          </h1>
          <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
            Décrivez votre activité et votre canton. On vous répond sous 2 heures avec votre premier pack.
          </p>

          <div style={{ background: '#EFF6FF', border: '1.5px solid #BFDBFE', borderRadius: 12, padding: '16px 20px', marginBottom: 32 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#1D4ED8', marginBottom: 10 }}>Portrait du lead que vous recevez :</p>
            {['25–60 ans, classe moyenne', '4 000 CHF+/mois, emploi stable', 'LAMal chère ou sans complémentaire', 'Pas de poursuites, bonne santé', 'Suisse Romande, numéro vérifié'].map(item => (
              <p key={item} style={{ fontSize: 13, color: '#1E40AF', marginBottom: 4 }}>✓ {item}</p>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { icon: '⚡', t: 'Réponse sous 2h', d: 'Du lundi au vendredi, 8h–18h' },
              { icon: '🔒', t: '100% exclusif', d: "Votre lead n'est envoyé à personne d'autre" },
              { icon: '🔄', t: 'Remplacement garanti', d: 'Lead non conforme signalé sous 24h ? Remplacé.' },
            ].map(g => (
              <div key={g.t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: '#EFF6FF', border: '1.5px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>{g.icon}</div>
                <div>
                  <p style={{ fontWeight: 700, color: '#0F172A', fontSize: 14, marginBottom: 2 }}>{g.t}</p>
                  <p style={{ color: '#64748B', fontSize: 13 }}>{g.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36, paddingTop: 28, borderTop: '1px solid #E2E8F0' }}>
            <p style={{ color: '#94A3B8', fontSize: 13, marginBottom: 6 }}>Email direct</p>
            <a href="mailto:contact@leadseo.ch" style={{ color: '#2563EB', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>contact@leadseo.ch</a>
          </div>
        </div>

        {/* Form */}
        <div style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 16, padding: '36px 32px' }}>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', marginBottom: 24 }}>Votre commande</p>

          {state === 'error' && (
            <div style={{ background: '#FEF2F2', border: '1.5px solid #FECACA', borderRadius: 8, padding: '12px 16px', marginBottom: 20 }}>
              <p style={{ color: '#991B1B', fontSize: 13, fontWeight: 600 }}>Une erreur est survenue. Réessayez ou écrivez directement à contact@leadseo.ch</p>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div className="g-form-name">
              {[{ n: 'prenom', l: 'Prénom', p: 'Marc' }, { n: 'nom', l: 'Nom', p: 'Dupont' }].map(f => (
                <div key={f.n}>
                  <label style={labelStyle}>{f.l}</label>
                  <input name={f.n} type="text" placeholder={f.p} required {...fi(f.n)} />
                </div>
              ))}
            </div>

            <div>
              <label style={labelStyle}>Email professionnel</label>
              <input name="email" type="email" placeholder="marc@assurance.ch" required {...fi('email')} />
            </div>

            <div>
              <label style={labelStyle}>Téléphone</label>
              <input name="telephone" type="tel" placeholder="+41 79 000 00 00" required {...fi('telephone')} />
            </div>

            <div>
              <label style={labelStyle}>Canton(s) souhaité(s)</label>
              <select name="canton" required style={inputStyle(focused === 'canton')} onFocus={() => setFocused('canton')} onBlur={() => setFocused('')}>
                <option value="">Sélectionnez votre canton</option>
                {['Genève', 'Vaud', 'Fribourg', 'Valais', 'Neuchâtel', 'Jura', 'Berne (francophone)', 'Tous les cantons romands'].map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={labelStyle}>Votre commande</label>
              <select name="budget" required style={inputStyle(focused === 'budget')} onFocus={() => setFocused('budget')} onBlur={() => setFocused('')}>
                <option value="test">Pack test — 500 CHF · 25 leads subside</option>
                <option value="1000">1 000 CHF/mois · ~28 leads à 35 CHF</option>
                <option value="3000">3 000 CHF/mois · ~100 leads à 30 CHF</option>
                <option value="5000">5 000 CHF/mois · ~178 leads à 28 CHF</option>
                <option value="7500">7 500 CHF/mois · ~375 leads à 20 CHF</option>
                <option value="custom">Autre volume — je précise dans le message</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Message (optionnel)</label>
              <textarea name="message" rows={3} placeholder="Précisions sur votre activité, vos critères, vos questions..." style={{ ...inputStyle(focused === 'message'), resize: 'vertical' }} onFocus={() => setFocused('message')} onBlur={() => setFocused('')} />
            </div>

            <button
              type="submit"
              disabled={state === 'loading'}
              style={{
                background: state === 'loading' ? '#93C5FD' : '#2563EB',
                color: '#fff',
                padding: '15px',
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 700,
                border: 'none',
                cursor: state === 'loading' ? 'not-allowed' : 'pointer',
                boxShadow: state === 'loading' ? 'none' : '0 4px 16px rgba(37,99,235,0.3)',
                transition: 'all 0.2s ease',
              }}
            >
              {state === 'loading' ? 'Envoi en cours...' : 'Commander mes leads subside →'}
            </button>

            <p style={{ color: '#94A3B8', fontSize: 12, textAlign: 'center', lineHeight: 1.6 }}>
              Conformité LPD garantie · Leads 100% exclusifs · Réponse sous 2h
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

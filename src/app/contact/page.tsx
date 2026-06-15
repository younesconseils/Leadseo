import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Commander — LeadSEO',
  description: 'Contactez LeadSEO pour commander des leads qualifiés en Suisse. Réponse sous 2 heures.',
}

export default function ContactPage() {
  return (
    <section style={{ padding: '130px 7% 80px', background: '#fff' }}>
      <div className="g2x" style={{ maxWidth: 1000, margin: '0 auto' }}>

        {/* Left */}
        <div>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 900, color: '#0F172A', marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Démarrons ensemble
          </h1>
          <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.75, marginBottom: 40 }}>
            Décrivez-nous votre activité et vos besoins. On vous répond sous 2 heures avec une proposition adaptée.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { icon: '⚡', t: 'Réponse sous 2h', d: 'Du lundi au vendredi, 8h–18h' },
              { icon: '🎯', t: 'Briefing offert', d: '30 min pour calibrer votre campagne' },
              { icon: '🔒', t: 'Exclusivité totale', d: 'Vos leads ne sont partagés avec personne' },
            ].map(g => (
              <div key={g.t} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: '#EFF6FF', border: '1.5px solid #BFDBFE',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                }}>{g.icon}</div>
                <div>
                  <p style={{ fontWeight: 700, color: '#0F172A', fontSize: 15, marginBottom: 3 }}>{g.t}</p>
                  <p style={{ color: '#64748B', fontSize: 13 }}>{g.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #E2E8F0' }}>
            <p style={{ color: '#94A3B8', fontSize: 13, marginBottom: 6 }}>Email direct</p>
            <a href="mailto:contact@leadseo.ch" style={{ color: '#2563EB', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
              contact@leadseo.ch
            </a>
          </div>
        </div>

        {/* Form */}
        <div style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 16, padding: '40px 36px' }}>
          <form
            action="https://formspree.io/f/VOTRE_ID"
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            <div className="g-form-name">
              {[{ n: 'prenom', l: 'Prénom', p: 'Marc' }, { n: 'nom', l: 'Nom', p: 'Dupont' }].map(f => (
                <div key={f.n}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#475569', marginBottom: 8 }}>{f.l}</label>
                  <input name={f.n} type="text" placeholder={f.p} required style={{
                    width: '100%', background: '#fff', border: '1.5px solid #E2E8F0',
                    borderRadius: 8, padding: '11px 14px', color: '#0F172A', fontSize: 15, outline: 'none',
                    boxSizing: 'border-box',
                  }} />
                </div>
              ))}
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#475569', marginBottom: 8 }}>Email professionnel</label>
              <input name="email" type="email" placeholder="marc@entreprise.ch" required style={{
                width: '100%', background: '#fff', border: '1.5px solid #E2E8F0',
                borderRadius: 8, padding: '11px 14px', color: '#0F172A', fontSize: 15, outline: 'none',
                boxSizing: 'border-box',
              }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#475569', marginBottom: 8 }}>Téléphone</label>
              <input name="telephone" type="tel" placeholder="+41 79 000 00 00" style={{
                width: '100%', background: '#fff', border: '1.5px solid #E2E8F0',
                borderRadius: 8, padding: '11px 14px', color: '#0F172A', fontSize: 15, outline: 'none',
                boxSizing: 'border-box',
              }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#475569', marginBottom: 8 }}>Votre secteur d'activité</label>
              <select name="secteur" style={{
                width: '100%', background: '#fff', border: '1.5px solid #E2E8F0',
                borderRadius: 8, padding: '11px 14px', color: '#0F172A', fontSize: 15, outline: 'none',
                boxSizing: 'border-box',
              }}>
                <option value="">Sélectionnez votre secteur</option>
                {['Assurance maladie (LAMal)', 'Prévoyance LPP', 'Assurance vie', 'Assurance auto', 'RC professionnelle', 'Assurance ménage', 'Prévoyance 3e pilier', 'Autre assurance'].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#475569', marginBottom: 8 }}>Budget mensuel souhaité</label>
              <select name="budget" style={{
                width: '100%', background: '#fff', border: '1.5px solid #E2E8F0',
                borderRadius: 8, padding: '11px 14px', color: '#0F172A', fontSize: 15, outline: 'none',
                boxSizing: 'border-box',
              }}>
                <option value="test">Pack test — 500 CHF (10 leads)</option>
                <option value="1000">~1 000 CHF/mois — 28 leads à 35 CHF</option>
                <option value="3000">~3 000 CHF/mois — 100 leads à 30 CHF</option>
                <option value="5000">~5 000 CHF/mois — 178 leads à 28 CHF</option>
                <option value="7500">~7 500 CHF/mois — 375 leads à 20 CHF</option>
                <option value="custom">Autre budget — précisez dans le message</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#475569', marginBottom: 8 }}>Votre message</label>
              <textarea name="message" rows={4} placeholder="Décrivez votre activité, vos besoins, vos questions..." style={{
                width: '100%', background: '#fff', border: '1.5px solid #E2E8F0',
                borderRadius: 8, padding: '11px 14px', color: '#0F172A', fontSize: 15, outline: 'none',
                resize: 'vertical', boxSizing: 'border-box',
              }} />
            </div>

            <button type="submit" style={{
              background: '#2563EB', color: '#fff',
              padding: '15px', borderRadius: 10,
              fontSize: 16, fontWeight: 700, border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(37,99,235,0.3)',
            }}>
              Envoyer ma demande →
            </button>

            <p style={{ color: '#94A3B8', fontSize: 12, textAlign: 'center', lineHeight: 1.6 }}>
              Vos données ne sont jamais revendues. Conformité LPD garantie. Réponse sous 2 heures.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import SimulateurLeads from '@/components/SimulateurLeads'

export const metadata: Metadata = {
  title: 'Offres & Tarifs — Leads subside exclusifs en Suisse',
  description: 'Pack test 25 leads subside à 500 CHF ou volume mensuel dégressif. Profil qualifié : 25-60 ans, classe moyenne, LAMal chère. Exclusifs, conformité LPD.',
}

const FAQ = [
  { q: "Qu'est-ce qu'un lead exclusif ?", r: "Un lead exclusif est transmis à vous seul. Nous ne le vendons à aucun autre courtier ou commercial concurrent. Vous êtes le premier et le seul à le contacter." },
  { q: 'Dans quels types d\'assurance générez-vous des leads ?', r: "Assurance maladie (LAMal), prévoyance LPP, assurance vie, assurance auto, RC professionnelle, assurance ménage et prévoyance 3e pilier. Nous couvrons l'ensemble du marché de l'assurance en Suisse Romande." },
  { q: 'Comment sont qualifiés les leads ?', r: "Chaque lead provient d'un formulaire rempli volontairement par le prospect, qui a explicitement consenti à être contacté. Nous vérifions le numéro et l'intention avant livraison." },
  { q: 'Que se passe-t-il si un lead est non conforme ?', r: "On le remplace sans discussion. Numéro invalide, prospect hors cible ou déjà client chez vous ? Signalez-nous le lead sous 24h et on en envoie un nouveau." },
  { q: "Y a-t-il un engagement de durée ?", r: "Non. Ni pour le pack test, ni pour le volume mensuel. Vous pouvez arrêter à tout moment. Nos clients restent parce que ça fonctionne, pas parce qu'ils y sont contraints." },
  { q: 'Vos pratiques sont-elles conformes à la LPD suisse ?', r: "Oui. Tous nos prospects ont donné un consentement explicite et documenté. Nous collectons et traitons les données dans le respect de la loi fédérale sur la protection des données." },
]

export default function OffresPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: '130px 7% 64px', background: '#fff' }}>
        <div style={{ maxWidth: 760 }}>
          <h1 style={{
            fontSize: 'clamp(34px, 4.5vw, 56px)', fontWeight: 900,
            color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 20,
          }}>
            Des leads subside exclusifs.<br />
            Le prix baisse avec le volume.
          </h1>
          <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.75, maxWidth: 580 }}>
            Testez la qualité avec 25 leads à 500 CHF. Quand vous signez vos premiers contrats, montez en volume — le prix par lead baisse automatiquement.
          </p>
        </div>
      </section>

      {/* Pack test */}
      <section style={{ padding: '0 7% 48px', background: '#fff' }}>
        <div style={{ maxWidth: 900 }}>
          <div className="g-cards" style={{ marginBottom: 48 }}>
            {/* Pack test */}
            <div style={{
              border: '1.5px solid #E2E8F0', borderRadius: 16,
              padding: '32px', background: '#F8FAFC',
            }}>
              <p style={{ fontSize: 13, color: '#64748B', fontWeight: 600, marginBottom: 16 }}>Pack test · une seule fois</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 52, fontWeight: 900, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1 }}>500</span>
                <span style={{ fontSize: 16, color: '#64748B' }}>CHF</span>
              </div>
              <p style={{ fontSize: 14, color: '#94A3B8', marginBottom: 24 }}>25 leads subside exclusifs pour valider la qualité</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  '25 leads subside 100% exclusifs',
                  'Profil : 25-60 ans, 4 000 CHF+/mois, LAMal chère',
                  'Nom, prénom, tél, prime actuelle + canton',
                  'Numéro suisse vérifié, prospect joignable',
                  'Remplacement garanti si non conforme',
                ].map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#475569' }}>
                    <span style={{ color: '#0EA878', flexShrink: 0, fontWeight: 700 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" style={{
                display: 'block', textAlign: 'center',
                background: '#0F172A', color: '#fff',
                padding: '14px 24px', borderRadius: 8,
                fontSize: 15, fontWeight: 700, textDecoration: 'none',
              }}>Démarrer avec le pack test</Link>
            </div>

            {/* Volume — intro */}
            <div style={{
              border: '2px solid #2563EB', borderRadius: 16,
              padding: '32px', background: '#fff',
              boxShadow: '0 8px 40px rgba(37,99,235,0.09)',
            }}>
              <p style={{ fontSize: 13, color: '#2563EB', fontWeight: 600, marginBottom: 16 }}>Volume mensuel · tarif dégressif</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 52, fontWeight: 900, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1 }}>35</span>
                <span style={{ fontSize: 16, color: '#64748B' }}>CHF / lead</span>
              </div>
              <p style={{ fontSize: 14, color: '#94A3B8', marginBottom: 24 }}>Leads subside qualifiés · prix dégressif selon volume</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {[
                  { budget: '3 000 CHF/mois', prix: '30 CHF/lead', leads: '100 leads', eco: '−14%' },
                  { budget: '5 000 CHF/mois', prix: '28 CHF/lead', leads: '178 leads', eco: '−20%' },
                  { budget: '7 500 CHF/mois', prix: '20 CHF/lead', leads: '375 leads', eco: '−43%' },
                ].map(r => (
                  <div key={r.budget} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#F8FAFC', borderRadius: 8 }}>
                    <span style={{ fontSize: 13, color: '#475569', fontWeight: 600 }}>{r.budget}</span>
                    <span style={{ fontSize: 14, fontWeight: 800, color: '#0F172A' }}>{r.prix}</span>
                    <span style={{ fontSize: 12, color: '#0EA878', fontWeight: 700 }}>{r.eco}</span>
                  </div>
                ))}
              </div>

              <Link href="#simulateur" style={{
                display: 'block', textAlign: 'center',
                background: '#2563EB', color: '#fff',
                padding: '14px 24px', borderRadius: 8,
                fontSize: 15, fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(37,99,235,0.3)',
              }}>Calculer mon volume →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simulateur */}
      <section id="simulateur" style={{ padding: '24px 7% 80px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 900 }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>
            Simulez votre commande
          </h2>
          <p style={{ fontSize: 15, color: '#64748B', marginBottom: 32 }}>
            Ajustez votre budget et voyez instantanément votre prix par lead et le nombre de prospects que vous recevez.
          </p>
          <SimulateurLeads />
        </div>
      </section>

      {/* Garanties */}
      <section style={{ padding: '0 7% 64px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 900, display: 'flex', gap: 32, flexWrap: 'wrap', paddingTop: 32, borderTop: '1px solid #E2E8F0' }}>
          {['Aucun engagement · résiliable à tout moment', 'Conformité LPD garantie', 'Remplacement de tout lead non conforme sous 24h'].map(g => (
            <p key={g} style={{ fontSize: 13, color: '#94A3B8' }}>✓ {g}</p>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '72px 7% 80px', background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0F172A', marginBottom: 40 }}>
            Questions fréquentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQ.map(f => (
              <div key={f.q} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: '24px 28px' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', marginBottom: 10 }}>{f.q}</h3>
                <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.75 }}>{f.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 7%', background: '#0F172A', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 900, color: '#fff', marginBottom: 12 }}>
          Prêt à tester ?
        </h2>
        <p style={{ color: '#64748B', fontSize: 16, marginBottom: 32 }}>
          Pack test à 500 CHF · 25 leads subside exclusifs · Réponse sous 2h
        </p>
        <Link href="/contact" style={{
          background: '#2563EB', color: '#fff',
          padding: '15px 36px', borderRadius: 10, fontSize: 16, fontWeight: 700, textDecoration: 'none',
          boxShadow: '0 4px 20px rgba(37,99,235,0.4)',
        }}>Nous contacter →</Link>
      </section>
    </>
  )
}

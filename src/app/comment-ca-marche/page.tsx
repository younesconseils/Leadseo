import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Comment ça marche — LeadSEO',
  description: 'Découvrez comment LeadSEO génère et livre des leads qualifiés et exclusifs pour votre activité commerciale en Suisse. Processus simple en 4 étapes.',
}

const ETAPES = [
  {
    n: '01',
    title: 'Vous nous décrivez votre cible',
    desc: 'Secteur, canton(s), profil du prospect idéal, volume souhaité. 10 minutes de briefing suffisent pour calibrer votre campagne.',
    detail: "On configure les filtres : âge, situation familiale, canton, type de projet. Plus c'est précis, meilleur est le taux de conversion.",
  },
  {
    n: '02',
    title: 'On active vos campagnes',
    desc: 'Nos campagnes digitales (SEO, SEA, réseaux sociaux) captent des prospects qui cherchent activement une assurance en Suisse Romande.',
    detail: 'Chaque prospect remplit un formulaire en ligne avec son accord explicite pour être contacté par un courtier en assurance. Conformité LPD garantie dès la source.',
  },
  {
    n: '03',
    title: 'Qualification et vérification',
    desc: 'Avant livraison, chaque lead est vérifié : numéro valide, intention confirmée, profil correspondant à vos critères.',
    detail: 'Les leads non conformes sont filtrés automatiquement. Vous ne recevez que des prospects réellement intéressés.',
  },
  {
    n: '04',
    title: 'Livraison en temps réel',
    desc: 'Le lead arrive dans votre boîte par email et SMS en moins de 2 heures. Nom, prénom, téléphone, email et contexte de la demande.',
    detail: 'Vous pouvez aussi recevoir les leads directement dans votre CRM via notre intégration (Salesforce, HubSpot, Pipedrive, ou webhook).',
  },
]

export default function CommentCaMarchePage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: '130px 7% 64px', background: '#fff' }}>
        <div style={{ maxWidth: 700 }}>
          <h1 style={{
            fontSize: 'clamp(34px, 4.5vw, 56px)', fontWeight: 900,
            color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 20,
          }}>
            Votre premier lead subside<br />livré en moins de 48h.
          </h1>
          <p style={{ color: '#475569', fontSize: 17, lineHeight: 1.75, maxWidth: 560 }}>
            Un processus simple, transparent, en 4 étapes. De votre briefing à la réception du premier contact qualifié.
          </p>
        </div>
      </section>

      {/* Étapes */}
      <section style={{ padding: '0 7% 80px', background: '#fff' }}>
        <div style={{ maxWidth: 820, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {ETAPES.map((e, i) => (
            <div key={e.n} style={{ display: 'flex', gap: 36, paddingBottom: i < ETAPES.length - 1 ? 48 : 0, position: 'relative' }}>
              {i < ETAPES.length - 1 && (
                <div style={{ position: 'absolute', left: 20, top: 48, width: 1, bottom: 0, background: '#E2E8F0' }} />
              )}
              <div style={{
                width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                background: '#EFF6FF', border: '1.5px solid #BFDBFE',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#2563EB', fontSize: 12, fontWeight: 800,
              }}>{e.n}</div>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0F172A', marginBottom: 10 }}>{e.title}</h2>
                <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.75, marginBottom: 12 }}>{e.desc}</p>
                <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.7, background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: '12px 16px' }}>{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Garanties */}
      <section style={{ padding: '72px 7%', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0F172A', marginBottom: 40 }}>Nos engagements</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: '🔒', t: 'Exclusivité totale', d: 'Chaque lead, un seul acheteur. Jamais partagé.' },
              { icon: '⏱️', t: 'Livraison <2h', d: 'Le lead arrive pendant que le prospect est encore chaud.' },
              { icon: '🔄', t: 'Remplacement garanti', d: 'Lead non conforme signalé sous 24h ? Remplacé.' },
              { icon: '🇨🇭', t: 'Conformité LPD', d: 'Consentement explicite collecté à la source.' },
            ].map(g => (
              <div key={g.t} style={{ background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 14, padding: '24px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 28, flexShrink: 0 }}>{g.icon}</span>
                <div>
                  <p style={{ fontWeight: 700, color: '#0F172A', fontSize: 15, marginBottom: 6 }}>{g.t}</p>
                  <p style={{ color: '#64748B', fontSize: 13, lineHeight: 1.6 }}>{g.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 7%', background: '#0F172A', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>
          Prêt à recevoir vos premiers leads ?
        </h2>
        <p style={{ color: '#64748B', fontSize: 16, marginBottom: 36 }}>Premier lead livré sous 2 heures. Aucun engagement.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ background: '#2563EB', color: '#fff', padding: '15px 36px', borderRadius: 10, fontSize: 16, fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 20px rgba(37,99,235,0.4)' }}>
            Démarrer maintenant →
          </Link>
          <Link href="/offres" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '15px 28px', borderRadius: 10, fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>
            Voir les tarifs
          </Link>
        </div>
      </section>
    </>
  )
}

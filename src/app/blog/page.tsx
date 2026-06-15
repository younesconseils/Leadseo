import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — Ressources pour commerciaux et entreprises en Suisse',
  description: 'Guides, stratégies et conseils pour générer et convertir des leads en Suisse. Acquisition client, prospection, ROI commercial.',
}

const ARTICLES = [
  {
    slug: 'combien-coute-un-lead-qualifie-suisse',
    titre: 'Combien coûte un lead qualifié en Suisse en 2025 ?',
    desc: 'Prix des leads selon le secteur, exclusifs vs partagés, coût par acquisition réel. Le guide complet pour budgéter votre prospection.',
    date: '12 juin 2025',
    readTime: '5 min',
    cat: 'Guide prix',
    catColor: '#2563EB',
    catBg: '#EFF6FF',
  },
  {
    slug: 'leads-exclusifs-vs-partages',
    titre: 'Leads exclusifs vs partagés : lequel choisir ?',
    desc: "Analyse comparative avec calcul de ROI. Dans 90% des cas, les leads exclusifs sont moins chers par contrat signé que les leads partagés.",
    date: '28 mai 2025',
    readTime: '6 min',
    cat: 'Stratégie',
    catColor: '#0EA878',
    catBg: '#F0FDF4',
  },
  {
    slug: 'taux-conversion-lead-commercial',
    titre: "Taux de conversion d'un lead : les chiffres réels par secteur",
    desc: 'Assurance : 15–22%. Immobilier : 8–12%. Finance : 10–18%. On vous donne les benchmarks pour évaluer vos performances.',
    date: '10 mai 2025',
    readTime: '4 min',
    cat: 'Performance',
    catColor: '#D97706',
    catBg: '#FFFBEB',
  },
  {
    slug: 'conformite-lpd-leads-suisse',
    titre: 'LPD et leads en Suisse : ce que tout commercial doit savoir',
    desc: 'La loi fédérale sur la protection des données impose des règles strictes sur la collecte de leads. Ce que vous pouvez et ne pouvez pas faire.',
    date: '2 mai 2025',
    readTime: '7 min',
    cat: 'Conformité',
    catColor: '#DC2626',
    catBg: '#FEF2F2',
  },
  {
    slug: 'pipeline-commercial-suisse',
    titre: 'Comment construire un pipeline commercial solide en Suisse',
    desc: "Les 5 étapes pour structurer son acquisition client en Suisse Romande : sources, qualification, nurturing, closing et réactivation.",
    date: '18 avril 2025',
    readTime: '8 min',
    cat: 'Stratégie',
    catColor: '#0EA878',
    catBg: '#F0FDF4',
  },
]

export default function BlogPage() {
  return (
    <>
      <section style={{ padding: '130px 7% 48px', background: '#fff' }}>
        <div style={{ maxWidth: 860 }}>
          <h1 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 900, color: '#0F172A', marginBottom: 16, letterSpacing: '-0.03em' }}>
            Ressources pour développer votre activité
          </h1>
          <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.75, maxWidth: 540 }}>
            Guides pratiques, benchmarks et stratégies d'acquisition client pour commerciaux en Suisse.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 7% 80px', background: '#fff' }}>
        <div style={{ maxWidth: 860, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {ARTICLES.map((a, i) => (
            <Link key={a.slug} href={`/blog/${a.slug}`} style={{ textDecoration: 'none' }}>
              <article style={{
                background: i === 0 ? '#F8FAFC' : '#fff',
                border: `1.5px solid ${i === 0 ? '#CBD5E1' : '#E2E8F0'}`,
                borderRadius: 14, padding: '28px 32px',
                display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{
                    background: a.catBg, color: a.catColor,
                    fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 6,
                  }}>{a.cat}</span>
                  {i === 0 && <span style={{ background: '#F0FDF4', color: '#0EA878', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 6 }}>À la une</span>}
                  <span style={{ color: '#94A3B8', fontSize: 13 }}>{a.date} · {a.readTime} de lecture</span>
                </div>
                <h2 style={{ fontSize: i === 0 ? 20 : 17, fontWeight: 800, color: '#0F172A', lineHeight: 1.35 }}>{a.titre}</h2>
                <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.7 }}>{a.desc}</p>
                <span style={{ color: '#2563EB', fontSize: 14, fontWeight: 600 }}>Lire l'article →</span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 7%', background: '#0F172A', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Restez informé</h2>
          <p style={{ color: '#64748B', fontSize: 15, marginBottom: 28 }}>
            Recevez nos guides et conseils directement dans votre boîte. Un email par mois, pas de spam.
          </p>
          <Link href="/contact" style={{
            background: '#2563EB', color: '#fff',
            padding: '13px 28px', borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: 'none',
          }}>S'inscrire à la newsletter</Link>
        </div>
      </section>
    </>
  )
}

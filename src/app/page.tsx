import type { Metadata } from 'next'
import Link from 'next/link'
import IphoneMockup from '@/components/IphoneMockup'
import ComparateurLeads from '@/components/ComparateurLeads'
import AnimationTunnel from '@/components/AnimationTunnel'
import CalculateurGains from '@/components/CalculateurGains'

export const metadata: Metadata = {
  title: 'LeadSEO — Leads exclusifs pour courtiers en Suisse',
  description: 'Leads en assurance exclusifs pour courtiers en Suisse Romande. LAMal, LPP, vie, auto, RC. Prospects qualifiés livrés en moins de 2h. Depuis 2021.',
}

const SECTEURS = [
  'Assurance maladie (LAMal)', 'Prévoyance LPP', 'Assurance vie',
  'Assurance auto', 'RC professionnelle', 'Assurance ménage',
  'Assurance invalidité', 'Prévoyance 3e pilier',
]

const CLIENTS = [
  {
    nom: 'Helvetia Conseil',
    lieu: 'Genève',
    secteur: 'Assurance LAMal',
    resultat: '+41 contrats signés en 4 mois',
    chiffre: '41',
    unite: 'contrats',
    detail: 'Marc et son équipe de 3 courtiers reçoivent 30 leads/mois. Taux de conversion : 26%.',
  },
  {
    nom: 'BVG Partners',
    lieu: 'Lausanne',
    secteur: 'Prévoyance LPP',
    resultat: 'Portefeuille multiplié par 2,4',
    chiffre: '×2.4',
    unite: 'portefeuille',
    detail: 'Depuis 6 mois, BVG Partners a arrêté toute prospection à froid. 100% de leur acquisition passe par LeadSEO.',
  },
  {
    nom: 'Assur Romand',
    lieu: 'Fribourg',
    secteur: 'Assurance vie',
    resultat: '68% de taux de décroché',
    chiffre: '68%',
    unite: 'décroché',
    detail: 'Contre 18% en prospection classique. La différence : les prospects savent pourquoi on les appelle.',
  },
  {
    nom: 'Alpine Assurance',
    lieu: 'Valais',
    secteur: 'Assurance auto & RC',
    resultat: '31 contrats en 2 mois',
    chiffre: '31',
    unite: 'contrats',
    detail: 'Des prospects qui avaient demandé à comparer leur assurance auto. Taux de décroché : 71%.',
  },
]

const DOULEURS = [
  {
    avant: '❌ Sans leads subside qualifiés',
    items: [
      'Vous prospectez à froid toute la journée',
      'Les leads sont revendus à 5-10 courtiers en même temps',
      'Le prospect est déjà épuisé avant votre appel',
      'Votre agenda est vide la moitié du mois',
      'Vous perdez du temps sur des profils non éligibles',
    ],
    bg: '#FEF2F2', border: '#FECACA', titleColor: '#DC2626',
  },
  {
    avant: '✅ Avec LeadSEO',
    items: [
      '25-60 ans, classe moyenne, 4 000 CHF+/mois — profil idéal',
      'LAMal chère, pas de complémentaire — 3 produits à vendre',
      '100% exclusif — vous êtes le seul à l\'appeler',
      'Numéro vérifié, prospect joignable et ouvert',
      'Porte d\'entrée pour LAMal, complémentaire et 3e pilier',
    ],
    bg: '#F0FDF4', border: '#BBF7D0', titleColor: '#16A34A',
  },
]

const STEPS = [
  { n: '01', title: 'Vous commandez votre pack', desc: 'Pack test 25 leads à 500 CHF ou volume mensuel. Aucun engagement.' },
  { n: '02', title: 'On qualifie chaque prospect', desc: 'Âge, revenu, prime actuelle, éligibilité subside. Seuls les bons profils passent.' },
  { n: '03', title: 'Numéro vérifié, prospect contactable', desc: 'Numéro suisse valide, prospect informé qu\'un courtier va l\'appeler.' },
  { n: '04', title: 'Le lead arrive dans votre boîte', desc: 'En moins de 2h. Nom, prénom, numéro, prime actuelle, canton. Vous appelez.' },
]

export default function HomePage() {
  return (
    <div style={{ background: '#F7F9FC', color: '#0F172A' }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 580, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }} />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(180deg, rgba(10,18,35,0.55) 0%, rgba(10,18,35,0.82) 60%, rgba(10,18,35,0.97) 100%)',
        }} />
        <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(100px,14vw,140px) 5% 48px', width: '100%' }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>
            Leads subside exclusifs · Suisse Romande · Depuis 2021
          </p>
          <h1 style={{
            fontSize: 'clamp(32px, 6vw, 72px)',
            fontWeight: 900, lineHeight: 1.0,
            letterSpacing: '-0.04em',
            color: '#fff',
            maxWidth: 780,
            marginBottom: 20,
          }}>
            La meilleure porte d'entrée<br />
            <span style={{ color: '#3B82F6' }}>pour vendre de l'assurance.</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, maxWidth: 540, marginBottom: 32 }}>
            Des leads subside 100% exclusifs — 25-60 ans, classe moyenne, LAMal chère, ouverts à changer. La porte d'entrée idéale pour signer de l'assurance maladie, complémentaire ou 3e pilier.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link href="/contact" style={{
              background: '#2563EB', color: '#fff',
              padding: '14px 28px', borderRadius: 8,
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(37,99,235,0.5)',
              whiteSpace: 'nowrap',
            }}>
              Recevoir mes premiers leads →
            </Link>
            <Link href="/offres" style={{
              color: 'rgba(255,255,255,0.65)', fontSize: 14, fontWeight: 500, textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.18)', padding: '14px 20px', borderRadius: 8,
              whiteSpace: 'nowrap',
            }}>
              Voir les tarifs
            </Link>
          </div>
          <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24 }}>
            {[
              { n: 'Depuis 2021', label: 'Expert en génération de leads exclusifs' },
              { n: '100%', label: 'Exclusivité garantie sur chaque lead' },
              { n: '<2h', label: 'Délai de livraison garanti' },
            ].map((s, i) => (
              <div key={s.n} style={{
                paddingRight: 20, marginRight: 20, paddingBottom: 8,
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}>
                <p style={{ fontSize: 20, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', marginBottom: 2 }}>{s.n}</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANDE SECTEURS ───────────────────────────────── */}
      <div style={{
        borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0',
        padding: '14px 5%',
        display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
        background: '#F8FAFC',
      }}>
        <p style={{ color: '#94A3B8', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', whiteSpace: 'nowrap', marginRight: 4 }}>Assurances :</p>
        {SECTEURS.map(s => (
          <span key={s} style={{
            background: '#fff', border: '1.5px solid #E2E8F0',
            color: '#64748B', fontSize: 11, fontWeight: 500,
            padding: '4px 10px', borderRadius: 100, whiteSpace: 'nowrap',
          }}>{s}</span>
        ))}
      </div>

      {/* ── MOCKUP ───────────────────────────────────────── */}
      <section className="hide-mobile" style={{ padding: '64px 5%', background: '#F7F9FC', display: 'flex', justifyContent: 'center' }}>
        <IphoneMockup />
      </section>


      {/* ── AVANT / APRÈS ────────────────────────────────── */}
      <section style={{ padding: '0 5% clamp(48px,8vw,80px)', background: '#F7F9FC' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,40px)', fontWeight: 900, color: '#0F172A', marginBottom: 8, letterSpacing: '-0.025em' }}>
            Ce que change l'exclusivité.
          </h2>
          <p style={{ color: '#64748B', fontSize: 15, marginBottom: 32, maxWidth: 520 }}>
            Un lead partagé n'est plus un lead. C'est une queue d'attente.
          </p>
          <div className="g2">
            {DOULEURS.map(d => (
              <div key={d.avant} style={{ background: d.bg, border: `1.5px solid ${d.border}`, borderRadius: 20, padding: 'clamp(20px,4vw,32px)' }}>
                <p style={{ fontSize: 14, fontWeight: 800, color: d.titleColor, marginBottom: 20 }}>{d.avant}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {d.items.map(item => (
                    <p key={item} style={{ fontSize: 14, color: '#475569', lineHeight: 1.6 }}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARATEUR ──────────────────────────────────── */}
      <section style={{ padding: 'clamp(48px,8vw,80px) 5%', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,40px)', fontWeight: 900, color: '#0F172A', marginBottom: 8, letterSpacing: '-0.025em' }}>
            Partagé ou réservé ?<br />Ce n'est pas la même chose.
          </h2>
          <p style={{ color: '#64748B', fontSize: 15, marginBottom: 36, maxWidth: 560 }}>
            La majorité des plateformes revendent le même lead à 5 ou 10 courtiers.
          </p>
          <ComparateurLeads />
        </div>
      </section>

      {/* ── ANIMATION TUNNEL ─────────────────────────────── */}
      <section style={{ padding: 'clamp(48px,8vw,80px) 5%', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,40px)', fontWeight: 900, color: '#0F172A', marginBottom: 8, letterSpacing: '-0.025em' }}>
            Comment un prospect arrive jusqu'à vous.
          </h2>
          <p style={{ color: '#64748B', fontSize: 15, marginBottom: 36, maxWidth: 560 }}>
            De la recherche Google à votre boîte mail — en moins de 2 heures.
          </p>
          <AnimationTunnel />
        </div>
      </section>

      {/* ── CALCULATEUR DE GAINS ─────────────────────────── */}
      <section style={{ padding: 'clamp(48px,8vw,80px) 5%', background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,40px)', fontWeight: 900, color: '#0F172A', marginBottom: 8, letterSpacing: '-0.025em' }}>
            Combien pouvez-vous gagner ?
          </h2>
          <p style={{ color: '#64748B', fontSize: 15, marginBottom: 36, maxWidth: 560 }}>
            Entrez votre commission moyenne et votre taux de conversion.
          </p>
          <CalculateurGains />
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ────────────────────────────── */}
      <section style={{ padding: 'clamp(48px,8vw,80px) 5%', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="g-ccm">
            <div>
              <h2 style={{ fontSize: 'clamp(22px,3vw,40px)', fontWeight: 900, color: '#0F172A', marginBottom: 12, letterSpacing: '-0.025em' }}>
                Briefing ce matin.<br />Premier lead ce soir.
              </h2>
              <p style={{ color: '#64748B', fontSize: 14, marginBottom: 36, lineHeight: 1.75 }}>
                Pas de contrat à signer. Vous remplissez un formulaire, on calibre votre campagne, et les leads arrivent.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {STEPS.map((s, i) => (
                  <div key={s.n} style={{ display: 'flex', gap: 16, position: 'relative', paddingBottom: i < STEPS.length - 1 ? 28 : 0 }}>
                    {i < STEPS.length - 1 && (
                      <div style={{ position: 'absolute', left: 18, top: 38, width: 2, bottom: 0, background: '#E2E8F0' }} />
                    )}
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                      background: '#EFF6FF', border: '1.5px solid #BFDBFE',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 10, fontWeight: 800, color: '#2563EB',
                    }}>{s.n}</div>
                    <div style={{ paddingTop: 4 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#0F172A', marginBottom: 4 }}>{s.title}</p>
                      <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.6 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <Link href="/comment-ca-marche" style={{ color: '#2563EB', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                  Voir le processus en détail →
                </Link>
              </div>
            </div>
            <div className="g-icons">
              {[
                { icon: '🔒', title: 'Exclusif', desc: '1 lead = 1 seul courtier. Jamais partagé.' },
                { icon: '⚡', title: '<2h livraison', desc: 'Pendant que le prospect est encore chaud.' },
                { icon: '✅', title: 'Vérifié', desc: 'Numéro valide, intention confirmée avant envoi.' },
                { icon: '🔄', title: 'Garanti', desc: 'Non conforme sous 24h ? Remplacé.' },
                { icon: '📱', title: 'Mobile', desc: 'SMS et email. Directement sur votre téléphone.' },
                { icon: '🇨🇭', title: 'LPD', desc: 'Consentement explicite collecté à la source.' },
              ].map(c => (
                <div key={c.title} style={{ background: '#fff', border: '1.5px solid #E2E8F0', borderRadius: 14, padding: '16px 14px' }}>
                  <div style={{ fontSize: 20, marginBottom: 8 }}>{c.icon}</div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', marginBottom: 4 }}>{c.title}</p>
                  <p style={{ fontSize: 12, color: '#64748B', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TARIFS ───────────────────────────────────────── */}
      <section style={{ padding: '0 5% clamp(48px,8vw,80px)', background: '#F7F9FC' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ background: '#0F172A', borderRadius: 20, padding: 'clamp(28px,5vw,52px)' }}>
            <div className="g-tarif">
              <div>
                <h2 style={{ fontSize: 'clamp(18px,2.8vw,32px)', fontWeight: 900, color: '#fff', marginBottom: 12, lineHeight: 1.2, letterSpacing: '-0.025em' }}>
                  Un lead à 35 CHF qui signe un contrat à 1 500 CHF.<br />
                  <span style={{ color: '#94A3B8', fontWeight: 400, fontSize: '0.75em' }}>Le calcul est simple.</span>
                </h2>
                <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.75, maxWidth: 480, marginBottom: 24 }}>
                  Pas d'abonnement obligatoire. Pas de frais cachés. Vous testez avec 10 leads à 500 CHF, vous voyez la qualité, vous décidez.
                </p>
                <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                  {[
                    { val: '500 CHF', label: 'Pack test', sub: '10 leads · une fois' },
                    { val: '35 CHF', label: 'Par lead', sub: 'Dégressif dès 3 000 CHF' },
                  ].map(p => (
                    <div key={p.label}>
                      <p style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{p.val}</p>
                      <p style={{ fontSize: 12, color: '#94A3B8', marginTop: 2 }}>{p.label}</p>
                      <p style={{ fontSize: 11, color: '#475569', marginTop: 1 }}>{p.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
                <Link href="/contact" style={{
                  background: '#2563EB', color: '#fff', padding: '14px 28px', borderRadius: 10,
                  fontSize: 14, fontWeight: 700, textDecoration: 'none', textAlign: 'center', whiteSpace: 'nowrap',
                  boxShadow: '0 4px 20px rgba(37,99,235,0.4)',
                }}>Démarrer →</Link>
                <Link href="/offres" style={{
                  border: '1px solid rgba(255,255,255,0.12)', color: '#fff',
                  padding: '12px 24px', borderRadius: 10, fontSize: 13, fontWeight: 500, textDecoration: 'none', textAlign: 'center',
                }}>Voir les offres</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section style={{ padding: 'clamp(48px,8vw,80px) 5%', background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 680 }}>
          <h2 style={{ fontSize: 'clamp(24px,3.5vw,48px)', fontWeight: 900, color: '#0F172A', marginBottom: 16, lineHeight: 1.08, letterSpacing: '-0.03em' }}>
            Votre prochain RDV est<br />
            dans votre boîte mail.
          </h2>
          <p style={{ color: '#64748B', fontSize: 16, lineHeight: 1.85, marginBottom: 32 }}>
            Décrivez-nous votre activité en 3 minutes. On vous propose un brief de campagne et les premiers leads arrivent le jour même.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
            <Link href="/contact" style={{
              background: '#2563EB', color: '#fff', padding: '15px 28px', borderRadius: 10,
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(37,99,235,0.35)', whiteSpace: 'nowrap',
            }}>Démarrer — pack test 500 CHF →</Link>
            <Link href="/offres" style={{
              border: '1.5px solid #E2E8F0', color: '#0F172A',
              padding: '15px 20px', borderRadius: 10, fontSize: 14, fontWeight: 500, textDecoration: 'none',
              background: '#fff', whiteSpace: 'nowrap',
            }}>Voir les offres</Link>
          </div>
          <p style={{ color: '#CBD5E1', fontSize: 12 }}>
            Réponse sous 2h · Conformité LPD · Aucun engagement
          </p>
        </div>
      </section>

    </div>
  )
}

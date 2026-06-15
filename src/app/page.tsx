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
    avant: '❌ Avant LeadSEO',
    items: [
      'Vous prospectez à froid toute la journée',
      'Vous partagez les mêmes leads que 10 concurrents',
      'Vous perdez 3h à appeler des numéros qui ne répondent pas',
      'Votre agenda est vide la moitié du mois',
      'Vos revenus stagnent depuis des années',
    ],
    bg: '#FEF2F2', border: '#FECACA', titleColor: '#DC2626',
  },
  {
    avant: '✅ Avec LeadSEO',
    items: [
      'Un prospect vous attend — il a demandé à être rappelé',
      'Ce lead est 100% à vous. Personne d\'autre ne l\'appelle',
      'Chaque lead est vérifié. Numéro valide, projet réel',
      'Votre agenda affiche 7 RDV dès lundi matin',
      '+38% de commissions en moyenne après 3 mois',
    ],
    bg: '#F0FDF4', border: '#BBF7D0', titleColor: '#16A34A',
  },
]

const STEPS = [
  { n: '01', title: 'Vous nous décrivez votre client idéal', desc: 'Canton, type d\'assurance, profil. 10 minutes de briefing. On fait le reste.' },
  { n: '02', title: 'On active vos campagnes digitales', desc: 'Nos campagnes captent des prospects qui cherchent activement ce que vous vendez — pas des curieux, des acheteurs.' },
  { n: '03', title: 'Chaque lead est qualifié à la main', desc: 'Numéro vérifié, projet confirmé, profil correspondant à vos critères.' },
  { n: '04', title: 'Le lead arrive sur votre téléphone', desc: 'En moins de 2h. Nom, prénom, numéro, contexte. Il n\'attend que votre appel.' },
]

export default function HomePage() {
  return (
    <div style={{ background: '#F7F9FC', color: '#0F172A' }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 600, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>

        {/* Photo de fond */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }} />
        {/* Overlay sombre pour lisibilité */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(180deg, rgba(10,18,35,0.55) 0%, rgba(10,18,35,0.82) 60%, rgba(10,18,35,0.97) 100%)',
        }} />

        {/* Contenu */}
        <div style={{ position: 'relative', zIndex: 2, padding: '130px 7% 64px', maxWidth: 1200, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>

          {/* Accroche expert */}
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>
            Leads assurance exclusifs · Suisse Romande · Depuis 2021
          </p>

          <h1 style={{
            fontSize: 'clamp(38px, 5.2vw, 72px)',
            fontWeight: 900, lineHeight: 1.0,
            letterSpacing: '-0.04em',
            color: '#fff',
            maxWidth: 780,
            marginBottom: 24,
          }}>
            Votre prochain client<br />
            <span style={{ color: '#3B82F6' }}>vous attend déjà.</span>
          </h1>

          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, maxWidth: 520, marginBottom: 40 }}>
            Des prospects qui cherchent une assurance en Suisse Romande — livrés dans votre boîte mail en moins de 2h. Réservés pour vous seul.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 52 }}>
            <Link href="/contact" style={{
              background: '#2563EB', color: '#fff',
              padding: '16px 32px', borderRadius: 8,
              fontSize: 16, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(37,99,235,0.5)',
            }}>
              Recevoir mes premiers leads →
            </Link>
            <Link href="/offres" style={{
              color: 'rgba(255,255,255,0.65)', fontSize: 15, fontWeight: 500, textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.18)', padding: '16px 24px', borderRadius: 8,
            }}>
              Voir les tarifs
            </Link>
          </div>

          {/* Stats bar */}
          <div style={{
            display: 'flex', gap: 0,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: 28,
          }}>
            {[
              { n: 'Depuis 2021', label: '4 ans d\'expertise en génération de leads exclusifs' },
              { n: '100%', label: 'exclusivité garantie — chaque lead livré à vous seul' },
              { n: '<2h', label: 'délai de livraison garanti après validation' },
            ].map((s, i) => (
              <div key={s.n} style={{
                flex: 1, paddingRight: 28, marginRight: 28,
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}>
                <p style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', marginBottom: 4 }}>{s.n}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANDE SECTEURS ───────────────────────────────── */}
      <div style={{
        borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0',
        padding: '16px 7%',
        display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
        background: '#F8FAFC',
      }}>
        <p style={{ color: '#94A3B8', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', whiteSpace: 'nowrap', marginRight: 8 }}>Assurances :</p>
        {SECTEURS.map(s => (
          <span key={s} style={{
            background: '#fff', border: '1.5px solid #E2E8F0',
            color: '#64748B', fontSize: 12, fontWeight: 500,
            padding: '5px 12px', borderRadius: 100, whiteSpace: 'nowrap',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}>{s}</span>
        ))}
      </div>

      {/* ── MOCKUP CENTRÉ ────────────────────────────────── */}
      <section style={{ padding: '80px 7%', background: '#F7F9FC', display: 'flex', justifyContent: 'center' }}>
        <IphoneMockup />
      </section>

      {/* ── CLIENTS / RÉUSSITES ──────────────────────────── */}
      <section style={{ padding: '80px 7% 100px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.025em', marginBottom: 12 }}>
              Ce qu'on a construit avec nos clients.
            </h2>
            <p style={{ color: '#64748B', fontSize: 16, maxWidth: 520 }}>
              Des résultats réels. Des courtiers en assurance en Suisse Romande.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {CLIENTS.map((c, i) => (
              <div key={c.nom} style={{
                background: i === 0 ? '#0F172A' : '#F8FAFC',
                border: `1.5px solid ${i === 0 ? 'transparent' : '#E2E8F0'}`,
                borderRadius: 20, padding: '36px 40px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
                  <div>
                    <p style={{ fontSize: 17, fontWeight: 800, color: i === 0 ? '#fff' : '#0F172A', marginBottom: 4 }}>{c.nom}</p>
                    <p style={{ fontSize: 13, color: i === 0 ? '#64748B' : '#94A3B8' }}>{c.secteur} · {c.lieu}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: 28, fontWeight: 900, color: i === 0 ? '#0EA878' : '#2563EB', letterSpacing: '-0.03em', lineHeight: 1 }}>{c.chiffre}</p>
                    <p style={{ fontSize: 11, color: i === 0 ? '#475569' : '#94A3B8', marginTop: 2 }}>{c.unite}</p>
                  </div>
                </div>
                <p style={{ fontSize: 15, fontWeight: 700, color: i === 0 ? '#fff' : '#0F172A', marginBottom: 12 }}>{c.resultat}</p>
                <p style={{ fontSize: 14, color: i === 0 ? '#64748B' : '#64748B', lineHeight: 1.75 }}>{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVANT / APRÈS ────────────────────────────────── */}
      <section style={{ padding: '0 7% 100px', background: '#F7F9FC' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: '#0F172A', marginBottom: 12, letterSpacing: '-0.025em' }}>
            Ce que change l'exclusivité.
          </h2>
          <p style={{ color: '#64748B', fontSize: 16, marginBottom: 48, maxWidth: 520 }}>
            Un lead partagé n'est plus un lead. C'est une queue d'attente.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {DOULEURS.map(d => (
              <div key={d.avant} style={{ background: d.bg, border: `1.5px solid ${d.border}`, borderRadius: 20, padding: '36px 32px' }}>
                <p style={{ fontSize: 15, fontWeight: 800, color: d.titleColor, marginBottom: 28 }}>{d.avant}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {d.items.map(item => (
                    <p key={item} style={{ fontSize: 15, color: '#475569', lineHeight: 1.6 }}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARATEUR ──────────────────────────────────── */}
      <section style={{ padding: '0 7% 100px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: '#0F172A', marginBottom: 12, letterSpacing: '-0.025em' }}>
            Partagé ou réservé ?<br />Ce n'est pas la même chose.
          </h2>
          <p style={{ color: '#64748B', fontSize: 16, marginBottom: 48, maxWidth: 560 }}>
            La majorité des plateformes revendent le même lead à 5 ou 10 courtiers. Vous arrivez après vos concurrents, sur un prospect épuisé.
          </p>
          <ComparateurLeads />
        </div>
      </section>

      {/* ── ANIMATION TUNNEL ─────────────────────────────── */}
      <section style={{ padding: '80px 7% 100px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: '#0F172A', marginBottom: 12, letterSpacing: '-0.025em' }}>
            Comment un prospect arrive jusqu'à vous.
          </h2>
          <p style={{ color: '#64748B', fontSize: 16, marginBottom: 48, maxWidth: 560 }}>
            De la recherche Google à votre boîte mail — en moins de 2 heures.
          </p>
          <AnimationTunnel />
        </div>
      </section>

      {/* ── CALCULATEUR DE GAINS ─────────────────────────── */}
      <section style={{ padding: '80px 7% 100px', background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: '#0F172A', marginBottom: 12, letterSpacing: '-0.025em' }}>
            Combien pouvez-vous gagner ?
          </h2>
          <p style={{ color: '#64748B', fontSize: 16, marginBottom: 48, maxWidth: 560 }}>
            Entrez votre commission moyenne et votre taux de conversion. Le résultat est immédiat.
          </p>
          <CalculateurGains />
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ────────────────────────────── */}
      <section style={{ padding: '0 7% 100px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: '#0F172A', marginBottom: 16, letterSpacing: '-0.025em' }}>
              Briefing ce matin.<br />Premier lead ce soir.
            </h2>
            <p style={{ color: '#64748B', fontSize: 15, marginBottom: 48, lineHeight: 1.75 }}>
              Pas de contrat à signer, pas de réunion de lancement. Vous remplissez un formulaire, on calibre votre campagne, et les leads arrivent.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {STEPS.map((s, i) => (
                <div key={s.n} style={{ display: 'flex', gap: 20, position: 'relative', paddingBottom: i < STEPS.length - 1 ? 36 : 0 }}>
                  {i < STEPS.length - 1 && (
                    <div style={{ position: 'absolute', left: 19, top: 42, width: 2, bottom: 0, background: '#E2E8F0' }} />
                  )}
                  <div style={{
                    width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                    background: '#EFF6FF', border: '1.5px solid #BFDBFE',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 800, color: '#2563EB',
                  }}>{s.n}</div>
                  <div style={{ paddingTop: 6 }}>
                    <p style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', marginBottom: 5 }}>{s.title}</p>
                    <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40 }}>
              <Link href="/comment-ca-marche" style={{ color: '#2563EB', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                Voir le processus en détail →
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              { icon: '🔒', title: 'Exclusif', desc: '1 lead = 1 seul courtier. Jamais partagé.' },
              { icon: '⚡', title: '<2h livraison', desc: 'Pendant que le prospect est encore chaud.' },
              { icon: '✅', title: 'Vérifié', desc: 'Numéro valide, intention confirmée avant envoi.' },
              { icon: '🔄', title: 'Garanti', desc: 'Non conforme sous 24h ? Remplacé.' },
              { icon: '📱', title: 'Mobile', desc: 'SMS et email. Directement sur votre téléphone.' },
              { icon: '🇨🇭', title: 'LPD', desc: 'Consentement explicite collecté à la source.' },
            ].map(c => (
              <div key={c.title} style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 14, padding: '18px 16px' }}>
                <div style={{ fontSize: 22, marginBottom: 10 }}>{c.icon}</div>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#0F172A', marginBottom: 5 }}>{c.title}</p>
                <p style={{ fontSize: 12, color: '#64748B', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIFS ───────────────────────────────────────── */}
      <section style={{ padding: '0 7% 100px', background: '#F7F9FC' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            background: '#0F172A', borderRadius: 24, padding: '52px 56px',
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center',
          }}>
            <div>
              <h2 style={{ fontSize: 'clamp(24px,2.8vw,36px)', fontWeight: 900, color: '#fff', marginBottom: 14, lineHeight: 1.15, letterSpacing: '-0.025em' }}>
                Un lead à 50 CHF qui signe un contrat à 1 500 CHF.<br />
                <span style={{ color: '#94A3B8', fontWeight: 400, fontSize: '0.75em' }}>Le calcul est simple.</span>
              </h2>
              <p style={{ color: '#64748B', fontSize: 15, lineHeight: 1.75, maxWidth: 480, marginBottom: 32 }}>
                Pas d'abonnement obligatoire. Pas de frais cachés. Vous testez avec 10 leads à 500 CHF, vous voyez la qualité, vous décidez.
              </p>
              <div style={{ display: 'flex', gap: 40 }}>
                {[
                  { val: '500 CHF', label: 'Pack test', sub: '10 leads · une fois' },
                  { val: '39 CHF', label: 'Pack mensuel', sub: 'Dès 780 CHF/mois' },
                ].map(p => (
                  <div key={p.label}>
                    <p style={{ fontSize: 24, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{p.val}</p>
                    <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 3 }}>{p.label}</p>
                    <p style={{ fontSize: 11, color: '#475569', marginTop: 2 }}>{p.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
              <Link href="/contact" style={{
                background: '#2563EB', color: '#fff', padding: '16px 32px', borderRadius: 10,
                fontSize: 15, fontWeight: 700, textDecoration: 'none', textAlign: 'center', whiteSpace: 'nowrap',
                boxShadow: '0 4px 20px rgba(37,99,235,0.4)',
              }}>Démarrer →</Link>
              <Link href="/offres" style={{
                border: '1px solid rgba(255,255,255,0.12)', color: '#fff',
                padding: '14px 28px', borderRadius: 10, fontSize: 14, fontWeight: 500, textDecoration: 'none', textAlign: 'center',
              }}>Voir les offres</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section style={{ padding: '80px 7%', background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, color: '#0F172A', marginBottom: 20, lineHeight: 1.08, letterSpacing: '-0.03em' }}>
            Votre prochain RDV est<br />
            dans votre boîte mail.
          </h2>
          <p style={{ color: '#64748B', fontSize: 17, lineHeight: 1.85, marginBottom: 40 }}>
            Décrivez-nous votre activité en 3 minutes. On vous propose un brief de campagne et les premiers leads arrivent le jour même.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 20 }}>
            <Link href="/contact" style={{
              background: '#2563EB', color: '#fff', padding: '16px 36px', borderRadius: 10,
              fontSize: 16, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(37,99,235,0.35)',
            }}>Démarrer — pack test 500 CHF →</Link>
            <Link href="/offres" style={{
              border: '1.5px solid #E2E8F0', color: '#0F172A',
              padding: '16px 24px', borderRadius: 10, fontSize: 15, fontWeight: 500, textDecoration: 'none',
              background: '#fff',
            }}>Voir les offres</Link>
          </div>
          <p style={{ color: '#CBD5E1', fontSize: 13 }}>
            Réponse sous 2h · Conformité LPD · 120+ courtiers actifs
          </p>
        </div>
      </section>

    </div>
  )
}

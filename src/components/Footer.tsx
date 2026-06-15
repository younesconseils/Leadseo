import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: '#0F172A',
      padding: '52px 6% 28px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 40, marginBottom: 44,
        }}>
          <div>
            <span style={{ fontWeight: 800, fontSize: 18, color: '#fff', letterSpacing: '-0.5px', display: 'block', marginBottom: 14 }}>
              Lead<span style={{ color: '#3B82F6' }}>SEO</span>
            </span>
            <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.75, maxWidth: 260 }}>
              Leads en assurance qualifiés et exclusifs pour les courtiers en Suisse Romande.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
            <div>
              <p style={{ color: '#334155', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>Navigation</p>
              {[['Offres', '/offres'], ['Comment ça marche', '/comment-ca-marche'], ['Blog', '/blog'], ['Contact', '/contact']].map(([l, h]) => (
                <Link key={h} href={h} style={{ display: 'block', color: '#64748B', fontSize: 14, textDecoration: 'none', marginBottom: 10 }}>{l}</Link>
              ))}
            </div>
            <div>
              <p style={{ color: '#334155', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>Contact</p>
              <a href="mailto:contact@leadseo.ch" style={{ display: 'block', color: '#64748B', fontSize: 14, textDecoration: 'none', marginBottom: 10 }}>contact@leadseo.ch</a>
              <p style={{ color: '#64748B', fontSize: 14 }}>Suisse Romande</p>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ color: '#334155', fontSize: 13 }}>© {new Date().getFullYear()} LeadSEO · Tous droits réservés</p>
          <p style={{ color: '#334155', fontSize: 13 }}>Conforme LPD · Leads exclusifs · Suisse</p>
        </div>
      </div>
    </footer>
  )
}

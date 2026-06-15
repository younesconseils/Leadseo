import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://leadseo.ch'),
  title: { default: 'LeadSEO — Leads qualifiés en Suisse', template: '%s | LeadSEO' },
  description: 'LeadSEO génère des leads qualifiés et exclusifs pour développer votre activité commerciale en Suisse. Livraison en temps réel, conformité LPD.',
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Commander des leads subside — LeadSEO',
  description: 'Commandez vos leads subside exclusifs pour courtiers en assurance. Pack test 25 leads à 500 CHF. Réponse sous 2 heures.',
}

export default function ContactPage() {
  return <ContactForm />
}

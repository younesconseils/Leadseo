import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { prenom, nom, email, telephone, canton, budget, message } = body

  const budgetLabels: Record<string, string> = {
    test: 'Pack test — 500 CHF · 25 leads subside',
    '1000': '1 000 CHF/mois · ~28 leads à 35 CHF',
    '3000': '3 000 CHF/mois · ~100 leads à 30 CHF',
    '5000': '5 000 CHF/mois · ~178 leads à 28 CHF',
    '7500': '7 500 CHF/mois · ~375 leads à 20 CHF',
    custom: 'Autre volume (précisé dans message)',
  }

  try {
    await resend.emails.send({
      from: 'LeadSEO <noreply@leadseo.ch>',
      to: 'contact@leadseo.ch',
      replyTo: email,
      subject: `Nouvelle commande — ${prenom} ${nom} · ${canton}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F172A; padding: 20px 28px; border-radius: 8px 8px 0 0;">
            <span style="color: #fff; font-weight: 700; font-size: 18px;">Lead<span style="color: #3B82F6;">SEO</span></span>
            <span style="color: #64748B; font-size: 13px; margin-left: 12px;">Nouvelle commande</span>
          </div>
          <div style="border: 1px solid #E2E8F0; border-top: none; padding: 28px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #64748B; width: 140px;">Nom</td><td style="padding: 8px 0; color: #0F172A; font-weight: 600;">${prenom} ${nom}</td></tr>
              <tr style="background: #F8FAFC;"><td style="padding: 8px 0; color: #64748B;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748B;">Téléphone</td><td style="padding: 8px 0; color: #0F172A;">${telephone}</td></tr>
              <tr style="background: #F8FAFC;"><td style="padding: 8px 0; color: #64748B;">Canton</td><td style="padding: 8px 0; color: #0F172A;">${canton}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748B;">Commande</td><td style="padding: 8px 0; color: #0F172A; font-weight: 600;">${budgetLabels[budget] || budget}</td></tr>
              ${message ? `<tr style="background: #F8FAFC;"><td style="padding: 8px 0; color: #64748B; vertical-align: top;">Message</td><td style="padding: 8px 0; color: #0F172A;">${message}</td></tr>` : ''}
            </table>
            <div style="margin-top: 20px; padding: 14px; background: #EFF6FF; border-radius: 8px; font-size: 13px; color: #1E40AF;">
              Réponds directement à cet email pour contacter ${prenom}.
            </div>
          </div>
        </div>
      `,
    })

    await resend.emails.send({
      from: 'LeadSEO <noreply@leadseo.ch>',
      to: email,
      subject: `Commande reçue — on revient vers toi sous 2h`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F172A; padding: 20px 28px; border-radius: 8px 8px 0 0;">
            <span style="color: #fff; font-weight: 700; font-size: 18px;">Lead<span style="color: #3B82F6;">SEO</span></span>
          </div>
          <div style="border: 1px solid #E2E8F0; border-top: none; padding: 28px; border-radius: 0 0 8px 8px;">
            <p style="color: #0F172A; font-size: 16px; font-weight: 600; margin: 0 0 12px;">Salut ${prenom}, ta commande est bien reçue.</p>
            <p style="color: #374151; font-size: 14px; line-height: 1.7; margin: 0 0 16px;">On prépare tes leads subside et on revient vers toi <strong>sous 2 heures</strong> pour confirmer les détails.</p>
            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; margin: 0 0 20px; font-size: 13px; color: #475569;">
              <strong style="color: #0F172A;">Récapitulatif :</strong><br/>
              ${budgetLabels[budget] || budget}<br/>
              Canton : ${canton}
            </div>
            <p style="color: #374151; font-size: 14px; line-height: 1.7; margin: 0 0 20px;">Une question ? Réponds directement à cet email ou appelle-nous au <strong>+41 78 343 76 00</strong>.</p>
            <p style="color: #374151; font-size: 14px; margin: 0;">À tout de suite,<br/><strong>Younes — LeadSEO</strong></p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

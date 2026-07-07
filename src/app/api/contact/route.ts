import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY ?? 'placeholder')

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
    const emailAdmin = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- Header -->
  <tr><td style="background:#0F172A;border-radius:12px 12px 0 0;padding:24px 32px;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td><span style="color:#fff;font-size:20px;font-weight:700;letter-spacing:-0.5px;">Lead<span style="color:#3B82F6;">SEO</span></span></td>
        <td align="right"><span style="background:#1E3A8A;color:#93C5FD;font-size:11px;font-weight:600;padding:4px 12px;border-radius:20px;letter-spacing:0.05em;">NOUVELLE COMMANDE</span></td>
      </tr>
    </table>
  </td></tr>

  <!-- Alert bar -->
  <tr><td style="background:#DBEAFE;padding:12px 32px;border-left:1px solid #BFDBFE;border-right:1px solid #BFDBFE;">
    <p style="margin:0;font-size:13px;color:#1E40AF;font-weight:600;">&#128276; Nouvelle commande de leads subside — répondre sous 2h</p>
  </td></tr>

  <!-- Body -->
  <tr><td style="background:#ffffff;padding:32px;border:1px solid #E2E8F0;border-top:none;">

    <!-- Contact info -->
    <p style="margin:0 0 20px;font-size:13px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.08em;">Coordonnées</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;border-radius:10px;overflow:hidden;margin-bottom:24px;">
      <tr style="background:#F8FAFC;">
        <td style="padding:12px 16px;font-size:13px;color:#64748B;width:130px;border-bottom:1px solid #E2E8F0;">Nom</td>
        <td style="padding:12px 16px;font-size:14px;font-weight:700;color:#0F172A;border-bottom:1px solid #E2E8F0;">${prenom} ${nom}</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-size:13px;color:#64748B;border-bottom:1px solid #E2E8F0;">Téléphone</td>
        <td style="padding:12px 16px;font-size:14px;color:#0F172A;border-bottom:1px solid #E2E8F0;"><a href="tel:${telephone}" style="color:#2563EB;font-weight:600;text-decoration:none;">${telephone}</a></td>
      </tr>
      <tr style="background:#F8FAFC;">
        <td style="padding:12px 16px;font-size:13px;color:#64748B;border-bottom:1px solid #E2E8F0;">Email</td>
        <td style="padding:12px 16px;font-size:14px;border-bottom:1px solid #E2E8F0;"><a href="mailto:${email}" style="color:#2563EB;text-decoration:none;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-size:13px;color:#64748B;">Canton</td>
        <td style="padding:12px 16px;font-size:14px;color:#0F172A;font-weight:600;">${canton}</td>
      </tr>
    </table>

    <!-- Commande -->
    <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.08em;">Commande</p>
    <div style="background:#0F172A;border-radius:10px;padding:20px 24px;margin-bottom:24px;">
      <p style="margin:0 0 4px;font-size:12px;color:#64748B;text-transform:uppercase;letter-spacing:0.08em;">Pack sélectionné</p>
      <p style="margin:0;font-size:18px;font-weight:700;color:#ffffff;">${budgetLabels[budget] || budget}</p>
    </div>

    ${message ? `
    <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
    <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px;margin-bottom:24px;">
      <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;">${message}</p>
    </div>` : ''}

    <!-- CTA -->
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding-top:8px;">
          <a href="mailto:${email}" style="display:inline-block;background:#2563EB;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:700;">Répondre à ${prenom} &rarr;</a>
        </td>
      </tr>
    </table>

  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#F8FAFC;border:1px solid #E2E8F0;border-top:none;border-radius:0 0 12px 12px;padding:16px 32px;text-align:center;">
    <p style="margin:0;font-size:12px;color:#94A3B8;">LeadSEO &nbsp;·&nbsp; contact@leadseo.ch &nbsp;·&nbsp; +41 78 343 76 00</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`

    const emailClient = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- Header -->
  <tr><td style="background:#0F172A;border-radius:12px 12px 0 0;padding:24px 32px;">
    <span style="color:#fff;font-size:20px;font-weight:700;letter-spacing:-0.5px;">Lead<span style="color:#3B82F6;">SEO</span></span>
  </td></tr>

  <!-- Body -->
  <tr><td style="background:#ffffff;padding:36px 32px;border:1px solid #E2E8F0;border-top:none;">

    <p style="margin:0 0 8px;font-size:22px;font-weight:700;color:#0F172A;letter-spacing:-0.03em;">Salut ${prenom}, ta commande est confirmée ✓</p>
    <p style="margin:0 0 28px;font-size:15px;color:#475569;line-height:1.7;">On prépare tes leads subside et on revient vers toi <strong style="color:#0F172A;">sous 2 heures</strong>.</p>

    <!-- Recap -->
    <div style="background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;padding:24px;margin-bottom:28px;">
      <p style="margin:0 0 16px;font-size:12px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:0.08em;">Récapitulatif de ta commande</p>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:6px 0;font-size:13px;color:#64748B;width:100px;">Pack</td>
          <td style="padding:6px 0;font-size:14px;color:#0F172A;font-weight:600;">${budgetLabels[budget] || budget}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;font-size:13px;color:#64748B;">Canton</td>
          <td style="padding:6px 0;font-size:14px;color:#0F172A;">${canton}</td>
        </tr>
      </table>
    </div>

    <!-- Garanties -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      <tr>
        <td style="padding:8px 12px;font-size:13px;color:#166534;background:#F0FDF4;border-radius:8px;text-align:center;">✓ 100% exclusif</td>
        <td style="width:8px;"></td>
        <td style="padding:8px 12px;font-size:13px;color:#166534;background:#F0FDF4;border-radius:8px;text-align:center;">✓ Livraison sous 24h</td>
        <td style="width:8px;"></td>
        <td style="padding:8px 12px;font-size:13px;color:#166534;background:#F0FDF4;border-radius:8px;text-align:center;">✓ Remplacement garanti</td>
      </tr>
    </table>

    <p style="margin:0 0 24px;font-size:14px;color:#475569;line-height:1.7;">Une question ? Réponds directement à cet email ou appelle-nous.</p>

    <p style="margin:0;font-size:14px;color:#374151;line-height:1.8;">À tout de suite,<br/><strong style="color:#0F172A;">Younes El Habchi</strong><br/><span style="color:#64748B;">LeadSEO &nbsp;·&nbsp; +41 78 343 76 00</span></p>

  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#F8FAFC;border:1px solid #E2E8F0;border-top:none;border-radius:0 0 12px 12px;padding:16px 32px;text-align:center;">
    <p style="margin:0;font-size:12px;color:#94A3B8;">LeadSEO &nbsp;·&nbsp; leadseo.ch &nbsp;·&nbsp; Suisse Romande</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`

    await resend.emails.send({
      from: 'LeadSEO <noreply@leadseo.ch>',
      to: 'contact@leadseo.ch',
      replyTo: email,
      subject: `🔔 Nouvelle commande — ${prenom} ${nom} · ${canton}`,
      html: emailAdmin,
    })

    await resend.emails.send({
      from: 'LeadSEO <noreply@leadseo.ch>',
      to: email,
      replyTo: 'contact@leadseo.ch',
      subject: `Commande confirmée — on revient vers toi sous 2h`,
      html: emailClient,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

import nodemailer from 'nodemailer'

export async function sendEmail(emailHtml: string, to: string, subject: string, attachements: []) {

  const transporter = nodemailer.createTransport(process.env.SMTP_SERVER)
  const options = {
    from: process.env.SMTP_FROM,
    to,
    subject,
    html: emailHtml,
    attachments: attachements
  }
  const send = await transporter.sendMail(options)

  return send
}

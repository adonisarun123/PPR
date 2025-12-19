import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactSchema } from '@/lib/validations';

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) return null;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.parse(body);

    const transporter = getTransporter();
    const to = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
    const subject = 'New Contact Form Submission';
    const html = `
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${parsed.name}</p>
      <p><strong>Email:</strong> ${parsed.email}</p>
      <p><strong>Phone:</strong> ${parsed.phone || '-'}</p>
      <p><strong>Subject:</strong> ${parsed.subject}</p>
      <p><strong>Preferred Contact:</strong> ${parsed.preferredContact}</p>
      <p><strong>Message:</strong><br/>${parsed.message}</p>
    `;

    if (transporter && to) {
      await transporter.sendMail({
        from: `"Paws Pannai Contact" <${process.env.SMTP_USER}>`,
        to,
        replyTo: parsed.email,
        subject,
        html,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

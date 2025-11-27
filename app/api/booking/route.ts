import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { bookingSchema } from '@/lib/validations';

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

function computePrice(adults: number, children: number, pets: number, nights: number) {
  const base = 5000; // INR
  const perAdult = 1000;
  const perChild = 500;
  const perPet = 300;
  return nights * (base + adults * perAdult + children * perChild + pets * perPet);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = bookingSchema.parse(body);

    const checkIn = new Date(parsed.checkIn);
    const checkOut = new Date(parsed.checkOut);
    const nights = Math.max(1, Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)));
    const total = computePrice(parsed.adults, parsed.children, parsed.pets, nights);
    const reference = `PPR-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

    const transporter = getTransporter();
    const to = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
    const subject = `New Booking Inquiry • ${reference}`;
    const html = `
      <h2>New Booking Inquiry</h2>
      <p><strong>Reference:</strong> ${reference}</p>
      <p><strong>Dates:</strong> ${parsed.checkIn} → ${parsed.checkOut} (${nights} nights)</p>
      <p><strong>Guests:</strong> ${parsed.adults} adults, ${parsed.children} children</p>
      <p><strong>Pets:</strong> ${parsed.pets} (${parsed.petDetails?.type || '-'}, ${parsed.petDetails?.size || '-'})</p>
      <p><strong>Room:</strong> ${parsed.roomPreference || '-'}</p>
      <p><strong>Name:</strong> ${parsed.name}</p>
      <p><strong>Email:</strong> ${parsed.email}</p>
      <p><strong>Phone:</strong> ${parsed.phone}</p>
      <p><strong>Special Requests:</strong><br/>${parsed.specialRequests || '-'}</p>
      <hr/>
      <p><strong>Estimated Price:</strong> ₹${total.toLocaleString('en-IN')}</p>
    `;

    if (transporter && to) {
      await transporter.sendMail({
        from: `"Paws Pannai Booking" <${process.env.SMTP_USER}>`,
        to,
        replyTo: parsed.email,
        subject,
        html,
      });

      // Optional: send guest confirmation
      await transporter.sendMail({
        from: `"Paws Pannai Booking" <${process.env.SMTP_USER}>`,
        to: parsed.email,
        subject: `Booking Inquiry Received • ${reference}`,
        html: `
          <p>Hi ${parsed.name},</p>
          <p>Thank you for your booking inquiry at Paws Pannai Retreat. Your reference number is <strong>${reference}</strong>.</p>
          <p>We will get back to you shortly with availability and confirmation.</p>
          <p>Warm regards,<br/>Paws Pannai Team</p>
        `,
      });
    }

    return NextResponse.json({ ok: true, reference, total, nights });
  } catch (err: any) {
    const message = err?.message || 'Invalid request';
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}



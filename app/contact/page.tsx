import ContactForm from '@/components/shared/ContactForm';
import MapEmbed from '@/components/shared/MapEmbed';
import JsonLd from '@/components/shared/JsonLd';

export const metadata = {
  title: 'Contact | Paws Pannai Retreat',
  description:
    'Get in touch with us for bookings, inquiries, and directions to Paws Pannai Retreat.',
  openGraph: {
    title: 'Contact | Paws Pannai Retreat',
    description:
      'Reach out for assistance with bookings and questions.',
    url:
      (process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com') +
      '/contact',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

export default function ContactPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com';
  const orgId = `${siteUrl}#organization`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${siteUrl}/contact`,
    name: 'Contact',
    isPartOf: { '@id': orgId },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <JsonLd data={jsonLd} />
      <h1>Get in Touch</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 rounded-xl border border-sand-200 bg-white p-6">
          <ContactForm />
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border border-sand-200 bg-white p-6">
            <h3 className="font-serif text-lg">Contact Information</h3>
            <ul className="mt-2 text-sand-700 text-sm space-y-1">
              <li>Address, City, State, IN</li>
              <li>+91-00000-00000</li>
              <li>reservations@pawspannai.com</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sand-200 bg-white p-6">
            <h3 className="font-serif text-lg">Location</h3>
            <div className="mt-3">
              <MapEmbed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



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
    <div className="bg-wood-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <JsonLd data={jsonLd} />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-5xl text-wood-900 mb-6">Get in Touch</h1>
          <div className="h-1 w-24 bg-terracotta-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-wood-700 leading-relaxed">
            We'd love to hear from you. Reach out for bookings, collaborations, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 rounded-organic-lg border border-wood-200 bg-wood-50/50 p-8 md:p-10 shadow-lg relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="rounded-organic-md border border-wood-200 bg-wood-100 p-8 shadow-md hover:border-wood-300 transition-colors">
              <h3 className="font-serif text-2xl text-wood-900 mb-6">Contact Information</h3>
              <ul className="space-y-4 text-wood-700">
                <li className="flex items-start gap-4">
                  <div className="bg-terracotta-100 p-2 rounded-full text-terracotta-700 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <span className="block font-medium text-wood-900">Address</span>
                    100 Acre Farm, Rustic Road,<br />Village & Post, TN
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-terracotta-100 p-2 rounded-full text-terracotta-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <span>+91-98765-43210</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-terracotta-100 p-2 rounded-full text-terracotta-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </div>
                  <span>hello@pawspannai.com</span>
                </li>
              </ul>
            </div>

            <div className="rounded-organic-md border border-wood-200 bg-wood-100 p-8 shadow-md overflow-hidden">
              <h3 className="font-serif text-2xl text-wood-900 mb-6">Location</h3>
              <div className="rounded-lg overflow-hidden ring-2 ring-wood-200">
                <MapEmbed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



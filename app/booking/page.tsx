import BookingForm from '@/components/shared/BookingForm';
import FAQSection from '@/components/shared/FAQSection';
import JsonLd from '@/components/shared/JsonLd';

export const metadata = {
  title: 'Booking | Paws Pannai Retreat',
  description:
    'Send a booking inquiry for your stay—select dates, room, guests, pets, and special requests.',
  openGraph: {
    title: 'Booking | Paws Pannai Retreat',
    description:
      'Plan your stay at our sustainable, pet-friendly eco-retreat.',
    url:
      (process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com') +
      '/booking',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

export default function BookingPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com';
  const orgId = `${siteUrl}#organization`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    '@id': orgId,
    name: 'Paws Pannai Retreat',
    url: siteUrl,
    potentialAction: {
      '@type': 'ReserveAction',
      target: `${siteUrl}/booking`,
      result: {
        '@type': 'LodgingReservation',
        reservationStatus: 'https://schema.org/ReservationPending',
        provider: { '@type': 'Hotel', name: 'Paws Pannai Retreat' },
      },
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <JsonLd data={jsonLd} />
      <h1>Book Your Stay</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 rounded-xl border border-sand-200 bg-white p-6">
          <BookingForm />
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border border-sand-200 bg-white p-6">
            <h3 className="font-serif text-lg">Booking Policies</h3>
            <p className="mt-2 text-sand-700 text-sm">
              Check-in 2pm • Check-out 11am • Free cancellation up to 72 hours prior.
            </p>
          </div>
          <div className="rounded-xl border border-sand-200 bg-white p-6">
            <h3 className="font-serif text-lg">FAQ</h3>
            <FAQSection />
          </div>
        </div>
      </div>
    </div>
  );
}



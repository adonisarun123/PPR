import PetFriendlySection from '@/components/home/PetFriendlySection';
import JsonLd from '@/components/shared/JsonLd';

export const metadata = {
  title: 'Pet-Friendly | Paws Pannai Retreat',
  description:
    'A paradise for your pets—dedicated pet pool, play areas, accommodations, and on-call veterinary support.',
  openGraph: {
    title: 'Pet-Friendly | Paws Pannai Retreat',
    description:
      'Facilities and services designed for your pets’ comfort and joy.',
    url:
      (process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com') +
      '/pet-friendly',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

export default function PetFriendlyPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com';
  const orgId = `${siteUrl}#organization`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${siteUrl}/pet-friendly`,
    name: 'Pet-Friendly',
    isPartOf: { '@id': orgId },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <JsonLd data={jsonLd} />
      <h1>Pet-Friendly</h1>
      <p className="text-sand-700">
        Everything your pets need to feel at home—safe, spacious, and joyful.
      </p>
      <PetFriendlySection />
    </div>
  );
}



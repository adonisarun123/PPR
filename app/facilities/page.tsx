import ImageGallery from '@/components/shared/ImageGallery';
import JsonLd from '@/components/shared/JsonLd';

export const metadata = {
  title: 'Facilities | Paws Pannai Retreat',
  description:
    'Discover our earthen swimming pool for humans, dedicated pet pool, and beautiful shared spaces.',
  openGraph: {
    title: 'Facilities | Paws Pannai Retreat',
    description:
      'Explore eco-friendly pools and common areas designed for relaxation.',
    url:
      (process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com') +
      '/facilities',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

export default function FacilitiesPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com';
  const orgId = `${siteUrl}#organization`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${siteUrl}/facilities`,
    name: 'Facilities',
    isPartOf: { '@id': orgId },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <JsonLd data={jsonLd} />
      <h1>Facilities</h1>
      <p className="text-sand-700">
        Explore our earthen swimming pool, pet pool, and beautiful common areas.
      </p>
      <ImageGallery />
    </div>
  );
}



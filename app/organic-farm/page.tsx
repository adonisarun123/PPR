import JsonLd from '@/components/shared/JsonLd';

export const metadata = {
  title: 'Organic Farm | Paws Pannai Retreat',
  description:
    'Learn about our organic farming practices, seasonal produce, and farm-to-table experiences.',
  openGraph: {
    title: 'Organic Farm | Paws Pannai Retreat',
    description:
      'Explore our philosophy, seasonal produce, and sustainable farming.',
    url:
      (process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com') +
      '/organic-farm',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

export default function OrganicFarmPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com';
  const orgId = `${siteUrl}#organization`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${siteUrl}/organic-farm`,
    name: 'Organic Farm',
    isPartOf: { '@id': orgId },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <JsonLd data={jsonLd} />
      <h1>Organic Farm</h1>
      <p className="text-sand-700">
        Learn about our farm philosophy, seasonal produce, and farm-to-table dining.
      </p>
      <div className="rounded-xl border border-sand-200 bg-white p-6">
        Seasonal calendar and tours coming soon.
      </div>
    </div>
  );
}



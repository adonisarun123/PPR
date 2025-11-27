import SustainabilitySection from '@/components/home/SustainabilitySection';
import JsonLd from '@/components/shared/JsonLd';

export const metadata = {
  title: 'Sustainability | Paws Pannai Retreat',
  description:
    'Our commitment to earthen architecture, solar energy, chemical-free pools, and organic farming.',
  openGraph: {
    title: 'Sustainability | Paws Pannai Retreat',
    description:
      'Learn about our eco-initiatives and impact metrics.',
    url:
      (process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com') +
      '/sustainability',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

export default function SustainabilityPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com';
  const orgId = `${siteUrl}#organization`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${siteUrl}/sustainability`,
    name: 'Sustainability',
    isPartOf: { '@id': orgId },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <JsonLd data={jsonLd} />
      <h1>Sustainability</h1>
      <p className="text-sand-700">
        Our commitment to sustainable practices—earthen architecture, solar energy,
        and chemical-free pools.
      </p>
      <SustainabilitySection />
    </div>
  );
}



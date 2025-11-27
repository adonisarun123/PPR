import Card from '@/components/ui/Card';
import JsonLd from '@/components/shared/JsonLd';

export const metadata = {
  title: 'Experiences | Paws Pannai Retreat',
  description:
    'Nature walks, farm tours, cooking classes, yoga, pet activities, stargazing, and more.',
  openGraph: {
    title: 'Experiences | Paws Pannai Retreat',
    description:
      'Curated activities to connect with nature and unwind.',
    url:
      (process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com') +
      '/experiences',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

const items = [
  { title: 'Nature Walks', description: 'Wander through serene trails and fields.' },
  { title: 'Farm Tours', description: 'Learn about organic practices and seasonal produce.' },
  { title: 'Cooking Classes', description: 'Farm-to-table cooking with local ingredients.' },
  { title: 'Yoga Sessions', description: 'Rejuvenate with guided sessions in nature.' },
  { title: 'Pet Activities', description: 'Playtime and agility fun for your companions.' },
  { title: 'Stargazing', description: 'Clear skies and celestial storytelling.' },
];

export default function ExperiencesPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com';
  const orgId = `${siteUrl}#organization`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url: `${siteUrl}/experiences`,
    name: 'Experiences',
    isPartOf: { '@id': orgId },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <JsonLd data={jsonLd} />
      <h1>Experiences</h1>
      <p className="mt-2 text-sand-700">
        Curated activities for relaxation, learning, and connection with nature.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((x) => (
          <Card key={x.title} title={x.title} description={x.description} />
        ))}
      </div>
    </div>
  );
}



import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import JsonLd from '@/components/shared/JsonLd';

const rooms = [
  {
    title: 'Garden Villa',
    description: 'Calm, spacious villa overlooking greenery.',
    priceFrom: 8000,
    occupancy: 2,
    bed: 'Queen',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
  },
  {
    title: 'Farmhouse Suite',
    description: 'Earth-cooled suite with handcrafted details.',
    priceFrom: 10000,
    occupancy: 3,
    bed: 'King',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
  },
  {
    title: 'Pet-Friendly Cottage',
    description: 'Comfortable cottage designed for pets.',
    priceFrom: 9000,
    occupancy: 2,
    bed: 'Queen',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
  },
  {
    title: 'Family Lodge',
    description: 'Roomy lodge perfect for families.',
    priceFrom: 12000,
    occupancy: 4,
    bed: '2x Double',
    image: 'https://images.unsplash.com/photo-1499696010181-8f1a1c1d7b3b',
  },
];

export const metadata = {
  title: 'Accommodations | Paws Pannai Retreat',
  description:
    'Explore our Garden Villa, Farmhouse Suite, Pet-Friendly Cottage, and Family Lodge—crafted for comfort and sustainability.',
  openGraph: {
    title: 'Accommodations | Paws Pannai Retreat',
    description:
      'Explore comfortable, sustainable rooms designed for guests and pets.',
    url:
      (process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com') +
      '/accommodations',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

export default function AccommodationsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com';
  const orgId = `${siteUrl}#organization`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    '@id': orgId,
    name: 'Paws Pannai Retreat',
    url: siteUrl,
    petsAllowed: true,
    hasPart: rooms.map((r) => ({
      '@type': 'HotelRoom',
      name: r.title,
      bed: r.bed,
      occupancy: {
        '@type': 'QuantitativeValue',
        value: r.occupancy,
      },
      petsAllowed: true,
      offers: {
        '@type': 'Offer',
        price: r.priceFrom,
        priceCurrency: 'INR',
        url: `${siteUrl}/booking`,
        availability: 'https://schema.org/InStock',
      },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Air Cooling (Earthen)' },
        { '@type': 'LocationFeatureSpecification', name: 'Pet Amenities' },
      ],
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <JsonLd data={jsonLd} />
      <h1>Accommodations</h1>
      <p className="mt-2 text-sand-700">
        Choose from thoughtfully crafted rooms, each blending comfort and sustainability.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map((r) => (
          <Card key={r.title} image={r.image} title={r.title} description={r.description}>
            <Button variant="outline">Book Now</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}



import ImageCarousel from '@/components/shared/ImageCarousel';
import JsonLd from '@/components/shared/JsonLd';
import GalleryBrowser, { type GalleryImage } from '@/components/shared/GalleryBrowser';

export const metadata = {
  title: 'Gallery | Paws Pannai Retreat',
  description:
    'Browse photos of our property, pools, farm, pets, and guest experiences.',
  openGraph: {
    title: 'Gallery | Paws Pannai Retreat',
    description:
      'A visual tour of our sustainable, pet-friendly eco-retreat.',
    url:
      (process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com') +
      '/gallery',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

export default function GalleryPage() {
  // Remote images (Unsplash placeholders) categorized
  const images: GalleryImage[] = [
    // property
    { src: 'https://images.unsplash.com/photo-1600585154340-1e4ce9a0a1d5', alt: 'Farmhouse exterior at golden hour', category: 'property' },
    { src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4', alt: 'Cozy interior with wooden textures', category: 'property' },
    { src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267', alt: 'Serene courtyard with greenery', category: 'property' },
    // pools
    { src: 'https://images.unsplash.com/photo-1505764706515-aa95265c5abc', alt: 'Earthen natural pool for guests', category: 'pools' },
    { src: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42', alt: 'Pet-friendly pool area', category: 'pools' },
    { src: 'https://images.unsplash.com/photo-1563371351-e53ebb744a1d', alt: 'Poolside relaxation space', category: 'pools' },
    // farm
    { src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6', alt: 'Organic farm rows of vegetables', category: 'farm' },
    { src: 'https://images.unsplash.com/photo-1500937381925-6c0f4a9f1c6e', alt: 'Fresh seasonal produce', category: 'farm' },
    { src: 'https://images.unsplash.com/photo-1492496913980-501348b61469', alt: 'Farm-to-table prep', category: 'farm' },
    // pets
    { src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b', alt: 'Dog playing on the lawn', category: 'pets' },
    { src: 'https://images.unsplash.com/photo-1558944351-c6ae4f1f2e9b', alt: 'Cat lounging in the sun', category: 'pets' },
    { src: 'https://images.unsplash.com/photo-1558944351-abcd0f1f2e9b', alt: 'Pets enjoying the pool', category: 'pets' },
    // guests
    { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee', alt: 'Family enjoying weekend retreat', category: 'guests' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', alt: 'Friends dining outdoors', category: 'guests' },
    { src: 'https://images.unsplash.com/photo-1499696010181-8f1a1c1d7b3b', alt: 'Couple relaxing by the pool', category: 'guests' },
    // activities
    { src: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8', alt: 'Nature walk through fields', category: 'activities' },
    { src: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d', alt: 'Cooking class with farm produce', category: 'activities' },
    { src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773', alt: 'Yoga session at sunrise', category: 'activities' },
  ];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com';
  const orgId = `${siteUrl}#organization`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url: `${siteUrl}/gallery`,
    name: 'Gallery',
    isPartOf: { '@id': orgId },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <JsonLd data={jsonLd} />
      <h1>Gallery</h1>
      <p className="text-sand-700">
        A glimpse into our property, pools, farm, and joyful pet moments.
      </p>

      <div className="mt-4">
        <ImageCarousel
          images={images.filter((i) => i.category === 'property').slice(0, 6)}
        />
      </div>

      <GalleryBrowser images={images} />
    </div>
  );
}


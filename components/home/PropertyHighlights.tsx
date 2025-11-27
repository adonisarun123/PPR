'use client';

import Button from '@/components/ui/Button';
import Image from 'next/image';

const sections = [
  {
    title: 'The Farmhouse',
    subtitle: 'Artistic Architecture',
    points: [
      'Handcrafted details with natural materials',
      'Earth-cooled interiors for comfort',
      'Warm, inviting communal spaces',
    ],
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
  },
  {
    title: 'Dual Swimming Pools',
    subtitle: 'Human & Pet Pools',
    points: [
      'Dedicated pet pool for safe play',
      'Natural earthen pool for humans',
      'Chemical-free, eco-friendly filtration',
    ],
    image:
      'https://images.unsplash.com/photo-1505764706515-aa95265c5abc',
  },
  {
    title: 'Organic Farm Experience',
    subtitle: 'Farm-to-Table Living',
    points: [
      'Seasonal, fresh produce',
      'Hands-on farm activities',
      'Sustainable growing practices',
    ],
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
  },
];

export default function PropertyHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-14">
        {sections.map((s, idx) => (
          <div
            key={s.title}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center"
          >
            <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-serif">{s.title}</h3>
              <p className="text-sand-700">{s.subtitle}</p>
              <ul className="list-disc pl-5 space-y-1 text-sand-700">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Button variant="outline" className="mt-3">Learn More</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



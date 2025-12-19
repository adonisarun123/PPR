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
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 bg-wood-50">
      <div className="space-y-24">
        {sections.map((s, idx) => (
          <div
            key={s.title}
            className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-organic-md shadow-xl ring-8 ring-wood-100 ring-offset-2 ring-offset-wood-50">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              {/* Decor element */}
              <div className="absolute -z-10 top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-wood-200/30 rounded-full blur-3xl transform scale-110"></div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <span className="text-terracotta-600 font-serif tracking-widest text-sm uppercase mb-2 block">{s.subtitle}</span>
                <h3 className="text-3xl md:text-4xl font-serif text-wood-900">{s.title}</h3>
              </div>

              <ul className="space-y-4">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-wood-700 leading-relaxed">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-foliage-500 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="mt-6 border-wood-400 text-wood-800 hover:bg-wood-100">
                Explore More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



'use client';

import Button from '@/components/ui/Button';

const sections = [
  {
    title: 'The Farmhouse',
    subtitle: 'Artistic Architecture',
    points: [
      'Handcrafted details with natural materials',
      'Earth-cooled interiors for comfort',
      'Warm, inviting communal spaces',
    ],
  },
  {
    title: 'Dual Swimming Pools',
    subtitle: 'Human & Pet Pools',
    points: [
      'Dedicated pet pool for safe play',
      'Natural earthen pool for humans',
      'Chemical-free, eco-friendly filtration',
    ],
  },
  {
    title: 'Organic Farm Experience',
    subtitle: 'Farm-to-Table Living',
    points: [
      'Seasonal, fresh produce',
      'Hands-on farm activities',
      'Sustainable growing practices',
    ],
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
              <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-sand-100 to-earth-100" />
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



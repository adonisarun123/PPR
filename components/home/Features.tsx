'use client';

import { Home, Dog, Leaf, Waves, Wind, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Luxury Earth Cottages',
    description: 'Sustainable stays with modern amenities and rustic soul.',
  },
  {
    icon: Dog,
    title: 'Pet Paradise',
    description: 'Acres of off-leash areas, swimming pools, and agility courses.',
  },
  {
    icon: Leaf,
    title: 'Organic Living',
    description: 'Farm-to-table dining with fresh produce from our own 100-acre farm.',
  },
  {
    icon: Waves,
    title: 'Natural Pools',
    description: 'Chemical-free swimming ponds that blend seamlessly with nature.',
  },
  {
    icon: Wind,
    title: 'Fresh Air & Freedom',
    description: 'Escape the city smog and breathe the purest air in open fields.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    description: '24/7 onsite staff and secure perimeters for total peace of mind.',
  },
];

export default function Features() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-serif text-4xl text-wood-900 md:text-5xl">
            Experience the <span className="text-terracotta-600">Extraordinary</span>
          </h2>
          <p className="mt-4 text-lg text-sand-600">
            Every detail is crafted for comfort, sustainability, and joy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-terracotta-50 text-terracotta-600 transition-colors group-hover:bg-terracotta-600 group-hover:text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-serif text-2xl text-wood-900">{f.title}</h3>
              <p className="text-sand-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

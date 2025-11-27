'use client';

import { Droplets, Leaf, PawPrint, Sprout } from 'lucide-react';

const features = [
  {
    title: 'Sustainable Architecture',
    description: 'Built with earth, powered by sun',
    Icon: Leaf,
  },
  {
    title: 'Pet Paradise',
    description: "Your furry friends' dream vacation",
    Icon: PawPrint,
  },
  {
    title: 'Organic Farm',
    description: 'Fresh, seasonal, farm-to-table dining',
    Icon: Sprout,
  },
  {
    title: 'Earthen Pools',
    description: 'Natural swimming without chemicals',
    Icon: Droplets,
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center font-serif">What Makes Us Special</h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map(({ title, description, Icon }) => (
          <div
            key={title}
            className="group rounded-xl border border-sand-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-sage-100 p-3 text-sage-700">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif">{title}</h3>
                <p className="mt-1 text-sand-700">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



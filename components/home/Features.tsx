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
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-wood-900 mb-4">What Makes Us Special</h2>
        <div className="h-1 w-20 bg-terracotta-500 mx-auto rounded-full mb-8"></div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
        {features.map(({ title, description, Icon }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-wood-200 bg-wood-100/30 p-8 transition-all duration-300 hover:bg-wood-100 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-terracotta-100/20 transition-transform group-hover:scale-150"></div>

            <div className="relative flex items-start gap-6">
              <div className="shrink-0 rounded-xl bg-foliage-100 p-4 text-foliage-700 ring-1 ring-foliage-200 group-hover:bg-foliage-600 group-hover:text-white transition-colors duration-300">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-serif text-wood-900 mb-2">{title}</h3>
                <p className="text-wood-700 leading-relaxed group-hover:text-wood-800">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



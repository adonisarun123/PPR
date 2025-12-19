'use client';

import { Droplets, Leaf, Recycle, Sun } from 'lucide-react';
import Image from 'next/image';

const metrics = [
  { label: 'Solar Powered', value: '100%', icon: Sun },
  { label: 'Zero Chemical Pools', value: '100%', icon: Droplets },
  { label: 'Organic Farm', value: '100%', icon: Leaf },
  { label: 'Rainwater Harvesting', value: 'Active', icon: Recycle },
];

export default function SustainabilitySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-organic-lg shadow-2xl ring-8 ring-stone-100 ring-offset-2 ring-offset-wood-50">
          <Image
            src="https://images.unsplash.com/photo-1492496913980-501348b61469"
            alt="Sustainable architecture and natural surroundings"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-wood-900/10 mix-blend-overlay"></div>
        </div>

        <div className="space-y-8">
          <div>
            <span className="text-foliage-600 font-serif tracking-widest text-sm uppercase mb-2 block">Eco-Conscious Living</span>
            <h2 className="font-serif text-4xl text-wood-900 mb-4">Rooted in Sustainability</h2>
            <p className="text-wood-700 text-lg leading-relaxed">
              From earthen architecture to solar energy and organic farming,
              sustainability is not just a feature—it's the soul of our retreat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="group rounded-xl border border-wood-200 bg-wood-50 p-5 hover:border-foliage-400 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-foliage-100 p-3 text-foliage-600 group-hover:bg-foliage-600 group-hover:text-white transition-colors duration-300">
                    <m.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-wood-500 font-bold">{m.label}</div>
                    <div className="text-xl font-serif text-wood-900">{m.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a href="/sustainability" className="inline-flex items-center gap-2 text-foliage-700 hover:text-foliage-800 font-medium underline decoration-foliage-300 underline-offset-4 hover:decoration-foliage-600 transition-all">
            Read Our Sustainability Story
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}



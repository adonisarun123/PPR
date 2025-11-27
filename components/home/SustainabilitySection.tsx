'use client';

import { Droplets, Leaf, Recycle, Sun } from 'lucide-react';

const metrics = [
  { label: 'Solar Powered', value: '100%', icon: Sun },
  { label: 'Zero Chemical Pools', value: '100%', icon: Droplets },
  { label: 'Organic Farm', value: '100%', icon: Leaf },
  { label: 'Rainwater Harvesting', value: 'Active', icon: Recycle },
];

export default function SustainabilitySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-sage-100 to-earth-100" />
        <div>
          <h2 className="font-serif">Rooted in Sustainability</h2>
          <p className="mt-3 text-sand-700">
            From earthen architecture to solar energy and organic farming,
            sustainability guides every choice we make.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-sand-200 bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-sage-100 p-3 text-sage-700">
                    <m.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-sand-600">{m.label}</div>
                    <div className="text-xl font-serif">{m.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a href="/sustainability" className="inline-block mt-6 underline">
            Our Sustainability Story
          </a>
        </div>
      </div>
    </section>
  );
}



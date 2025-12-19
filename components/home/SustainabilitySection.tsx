'use client';

import { Droplets, Leaf, Recycle, Sun } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

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
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1492496913980-501348b61469"
            alt="Sustainable architecture and natural surroundings"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        </div>

        <div className="space-y-10">
          <div>
            <span className="mb-4 block font-sans text-sm font-bold uppercase tracking-widest text-foliage-600">
              Our Commitment
            </span>
            <h2 className="font-serif text-5xl text-wood-900 leading-tight">
              Rooted in <br /><span className="text-foliage-600">Sustainability</span>
            </h2>
            <p className="mt-6 text-lg text-sand-600 leading-relaxed">
              We don&apos;t just exist in nature; we protect it. From earthen architecture to solar energy and organic farming,
              sustainability is not just a feature—it&apos;s the soul of our retreat.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="border-l-2 border-foliage-200 pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <m.icon className="w-5 h-5 text-foliage-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-sand-500">{m.label}</span>
                </div>
                <div className="font-serif text-3xl text-wood-900">{m.value}</div>
              </div>
            ))}
          </div>

          <a href="/sustainability">
            <Button variant="secondary" className="bg-foliage-600 hover:bg-foliage-700 text-white border-none shadow-md">
              Read Our Impact Story
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}



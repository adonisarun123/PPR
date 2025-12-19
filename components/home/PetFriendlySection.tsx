'use client';

import { Bath, Dog, Heart, Home, PawPrint, Stethoscope } from 'lucide-react';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const amenities = [
  { icon: PawPrint, title: 'Dedicated Swimming Pool' },
  { icon: Dog, title: 'Spacious Play Areas' },
  { icon: Home, title: 'Pet-Friendly Accommodations' },
  { icon: Bath, title: 'Grooming Services' },
  { icon: Stethoscope, title: 'Veterinary On-Call' },
  { icon: Heart, title: 'Pet Activities & Toys' },
];

export default function PetFriendlySection() {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-5xl text-wood-900 mb-4">A Paradise for Your Pets</h2>
        <div className="h-1 w-24 bg-terracotta-500 mx-auto rounded-full mb-6"></div>
        <p className="text-wood-700 max-w-2xl mx-auto text-lg leading-relaxed">
          Thoughtfully designed spaces and services so your companions enjoy as much as you do.
        </p>
      </div>

      <div className="relative aspect-[16/8] w-full overflow-hidden rounded-organic-lg shadow-xl mb-12 border-4 border-white/50">
        <Image
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
          alt="Happy dog playing on lawn"
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wood-900/60 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white font-serif text-2xl drop-shadow-md">
          "Best vacation ever!" - Rusty
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {amenities.map((a) => (
          <div key={a.title} className="group rounded-xl border border-wood-200 bg-wood-50/80 p-6 hover:shadow-lg hover:border-terracotta-300 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-terracotta-100 p-3 text-terracotta-600 group-hover:bg-terracotta-600 group-hover:text-white transition-colors duration-300">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-serif text-wood-900 group-hover:text-terracotta-700 transition-colors">{a.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a href="/pet-friendly">
          <Button variant="secondary" size="lg" className="border-terracotta-500 text-terracotta-700 hover:bg-terracotta-50">
            Discover Pet-Friendly Features
          </Button>
        </a>
      </div>
    </section>
  );
}



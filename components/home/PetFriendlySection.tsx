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
      <div className="mb-16 max-w-2xl">
        <h2 className="font-serif text-4xl text-wood-900 md:text-5xl">
          A Paradise for <span className="text-terracotta-600">Your Pets</span>
        </h2>
        <p className="mt-6 text-lg text-sand-600 leading-relaxed">
          We believe pets are family. That&apos;s why our entire retreat is designed around their joy, safety, and freedom.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-stone-100 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
            alt="Happy dog playing on lawn"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-terracotta-400 fill-current" />
              <span className="text-sm font-bold uppercase tracking-widest">Guest Favorite</span>
            </div>
            <p className="font-serif text-2xl">&quot;The best vacation my dog has ever had!&quot;</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {amenities.map((a) => (
            <div key={a.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="shrink-0 p-3 bg-terracotta-50 text-terracotta-600 rounded-lg">
                <a.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-wood-900">{a.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <a href="/pet-friendly">
          <Button variant="outline" size="lg" className="border-wood-900 text-wood-900 hover:bg-wood-900 hover:text-white min-w-[200px]">
            Explore Pet Amenities
          </Button>
        </a>
      </div>
    </section>
  );
}



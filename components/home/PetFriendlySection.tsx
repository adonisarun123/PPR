'use client';

import { Bath, Dog, Heart, Home, PawPrint, Stethoscope } from 'lucide-react';
import Button from '@/components/ui/Button';

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
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center font-serif">A Paradise for Your Pets</h2>
      <p className="mt-2 text-center text-sand-700 max-w-2xl mx-auto">
        Thoughtfully designed spaces and services so your companions enjoy as much as you do.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {amenities.map((a) => (
          <div key={a.title} className="rounded-xl border border-sand-200 bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-terracotta-100 p-3 text-terracotta-700">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-serif">{a.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <a href="/pet-friendly">
          <Button variant="secondary" size="lg">Discover Pet-Friendly Features</Button>
        </a>
      </div>
    </section>
  );
}



'use client';

import Image from 'next/image';



const highlights = [
  {
    title: '100 Acres of Exploration',
    description: 'Unleash your spirit of adventure. Roam freely across our expansive farmlands, orchards, and specially designed pet agility parks.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832',
    points: ['Off-Leash Zones', 'Nature Trails', 'Fruit Orchards', 'Swimming Ponds']
  }
];

export default function PropertyHighlights() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="mb-2 block font-sans text-sm font-bold uppercase tracking-widest text-terracotta-600">
            Our Property
          </span>
          <h2 className="font-serif text-5xl text-wood-900 lg:text-6xl">
            Seamlessly Blended <br /> with Nature
          </h2>
        </div>

        <div className="space-y-32">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className={`flex flex-col gap-12 lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
            >
              {/* Image Side */}
              <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-3xl bg-stone-100">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              {/* Text Side */}
              <div className="flex-1 lg:px-8">
                <h3 className="mb-6 font-serif text-4xl text-wood-900">{highlight.title}</h3>
                <p className="mb-8 text-lg text-sand-600 leading-relaxed">{highlight.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {highlight.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-terracotta-500" />
                      <span className="text-wood-800 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

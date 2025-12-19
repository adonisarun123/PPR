'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import { Check } from 'lucide-react';

const activities = [
    'Reused Tyres Agility Course',
    'Miyawaki Forest Trails',
    'Green Acre of Contentment',
    'Pet-Safe Swimming Pool',
    'Filtered Water Stations',
    'Shaded Resting Pods'
];

export default function PetPlayArea() {
    return (
        <section className="py-24 bg-stone-50 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content Side */}
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-terracotta-100 px-4 py-1.5 text-terracotta-700">
                            <span className="text-xs font-bold uppercase tracking-widest">The Main Attraction</span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-6xl text-wood-900 mb-6 leading-[1.1]">
                            The Ultimate <br /> <span className="text-terracotta-600">Pet Playground</span>
                        </h2>
                        <p className="text-xl text-wood-700/80 mb-10 leading-relaxed">
                            Forget the crate. Here, your pet is the VIP. Our 5-acre dedicated activity zone is designed for pure, unadulterated joy. Whether they are swimmers, runners, or explorers, we have it all.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                            {activities.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-terracotta-100">
                                        <Check className="h-3.5 w-3.5 text-terracotta-600" />
                                    </div>
                                    <span className="font-medium text-wood-800">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <a href="/booking?type=activities">
                                <Button size="lg" className="bg-terracotta-600 hover:bg-terracotta-700 text-white rounded-full px-8 h-12 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                    Book A Play Session
                                </Button>
                            </a>
                            <a href="/experiences">
                                <Button variant="outline" size="lg" className="border-wood-300 text-wood-900 hover:bg-white rounded-full px-8 h-12">
                                    View All Activities
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Image Grid Side */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-wood-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
                                        alt="Dog jumping"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-700"
                                        sizes="(min-width: 1024px) 25vw, 50vw"
                                    />
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-3xl bg-wood-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97"
                                        alt="Dog swimming"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-700"
                                        sizes="(min-width: 1024px) 25vw, 50vw"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative aspect-square overflow-hidden rounded-3xl bg-wood-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1534361960057-19889db9621e"
                                        alt="Happy dog running"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-700"
                                        sizes="(min-width: 1024px) 25vw, 50vw"
                                    />
                                </div>
                                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-wood-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1"
                                        alt="Dog training"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-700"
                                        sizes="(min-width: 1024px) 25vw, 50vw"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-terracotta-100/50 blur-3xl rounded-full opacity-50"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

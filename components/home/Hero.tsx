'use client';

import Button from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/main-hero.svg"
          alt="100 acre farm retreat"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Organic texture overlay */}
        <div className="absolute inset-0 bg-wood-900/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-wood-900/60" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center pt-20">

        {/* Rustic Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block rounded-full border border-wood-100/30 bg-wood-900/30 px-6 py-2 backdrop-blur-sm"
        >
          <span className="font-serif text-sm tracking-widest text-wood-50 uppercase">
            100 Acres of Freedom
          </span>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-wood-50 mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Paws Pannai
          <span className="block mt-2 text-3xl md:text-5xl lg:text-6xl text-wood-100 font-light italic">
            Retreat
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg md:text-xl text-wood-100/90 font-sans leading-relaxed text-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Where nature embraces you and your furry friends. Experience the soul of a rustic farm stay.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="/booking">
            <Button variant="primary" size="lg" className="bg-terracotta-600 hover:bg-terracotta-700 text-white border-none shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 min-w-[180px]">
              Book Your Stay
            </Button>
          </a>
          <a href="/about">
            <Button variant="outline" size="lg" className="bg-wood-50/10 text-wood-50 border-wood-50/50 hover:bg-wood-50/20 hover:border-wood-50 backdrop-blur-sm min-w-[180px]">
              Our Farm Story
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 z-10 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-2 text-wood-50/80">
          <span className="text-xs uppercase tracking-widest font-serif">Explore</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-wood-50 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}



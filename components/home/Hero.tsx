'use client';

import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
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
        {/* Modern clean gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta-500 animate-pulse"></span>
            <span className="font-sans text-xs font-medium tracking-widest text-white uppercase">
              100 Acre Farm Retreat
            </span>
          </motion.div>

          <motion.h1
            className="font-serif text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Untamed Nature. <br />
            <span className="text-terracotta-400">Unmatched Comfort.</span>
          </motion.h1>

          <motion.p
            className="mb-10 max-w-xl text-lg md:text-xl text-white/90 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Reconnect with the wild in a sustainable sanctuary designed for you and your pets. Experience the ultimate freedom of space.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="/booking">
              <Button size="lg" className="bg-terracotta-600 hover:bg-terracotta-700 text-white border-0 rounded-full px-10 h-14 text-lg shadow-2xl hover:-translate-y-1 transition-transform">
                Book Your Escape
              </Button>
            </a>
            <a href="/experiences">
              <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-wood-900 rounded-full px-10 h-14 text-lg backdrop-blur-sm transition-all hover:border-white">
                Explore Activities
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Modern Slide Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0 z-10 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex items-center gap-4 text-white/70">
          <div className="h-[1px] w-12 bg-white/50"></div>
          <span className="text-xs uppercase tracking-[0.2em]">Scroll to Discover</span>
        </div>
      </motion.div>
    </section>
  );
}



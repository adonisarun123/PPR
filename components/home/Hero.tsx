'use client';

import Button from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-earth-200 to-earth-50" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="font-serif"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Where Nature, Comfort & Furry Friends Unite
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-sand-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          A Sustainable Retreat Crafted for You and Your Beloved Pets
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a href="/booking">
            <Button variant="primary" size="lg">Book Your Escape</Button>
          </a>
          <a href="/about">
            <Button variant="secondary" size="lg">Explore Our Story</Button>
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center">
        <ChevronDown className="h-6 w-6 animate-bounce text-sand-700" />
      </div>
    </section>
  );
}



'use client';

import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-terracotta-500 to-sage-600 px-6 py-14 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif">Ready for Your Eco-Escape?</h2>
          <p className="mt-2 text-white/90">
            Book your sustainable retreat today and reconnect with nature.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/booking">
              <Button variant="ghost" size="lg" className="bg-white/10 hover:bg-white/20">
                Book Now
              </Button>
            </a>
            <a href="/contact" className="underline">
              Or Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



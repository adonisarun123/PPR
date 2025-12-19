'use client';

import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 mt-20">
      <div className="relative overflow-hidden rounded-organic-lg bg-wood-900 px-6 py-20 text-center text-white shadow-2xl">
        {/* Background Texture/Image */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/images/textures/wood.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-wood-900/90 via-wood-800/80 to-wood-900/90"></div>

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-wood-50">Ready for Your Eco-Escape?</h2>
          <p className="mt-4 text-wood-200 text-lg md:text-xl max-w-xl mx-auto">
            Book your sustainable retreat today and reconnect with nature in its purest form.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/booking">
              <Button size="lg" className="bg-terracotta-600 hover:bg-terracotta-700 text-white min-w-[160px] shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                Book Now
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg" className="border-wood-400 text-wood-100 hover:bg-wood-800 hover:text-white min-w-[160px]">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



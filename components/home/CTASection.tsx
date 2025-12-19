'use client';

import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 mt-20">
      <div className="relative overflow-hidden rounded-3xl bg-wood-900 px-6 py-24 text-center text-white shadow-2xl">
        <div className="absolute inset-0 bg-wood-900"></div>
        {/* Modern gradient accent */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-terracotta-600/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-terracotta-600/10 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-white tracking-tight">Ready to Escape the Ordinary?</h2>
          <p className="mb-10 text-wood-100 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Book your sustainable retreat today and give your pets the holiday they deserve.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="/booking">
              <Button size="lg" className="h-14 px-10 rounded-full bg-white text-wood-900 hover:bg-wood-50 text-lg font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                Book Your Stay
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg" className="h-14 px-10 rounded-full border-wood-600 text-white hover:bg-wood-800/50 hover:border-wood-500 text-lg backdrop-blur-sm">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



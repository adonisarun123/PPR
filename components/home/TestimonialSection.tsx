'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Aarav • Chennai',
    quote:
      'A serene eco-retreat. Our dog loved the pet pool while we relaxed by the earthen pool.',
    rating: 5,
  },
  {
    name: 'Diya • Bengaluru',
    quote:
      'Beautiful architecture and the organic meals were delicious. Truly pet-friendly.',
    rating: 5,
  },
  {
    name: 'Rahul • Coimbatore',
    quote:
      'The farm tour was a highlight. Staff were warm and welcoming to our pup.',
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="text-terracotta-600">
      {'★★★★★☆☆☆☆☆'.slice(5 - count, 10 - count)}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-5xl text-wood-50 mb-4">Guest Stories</h2>
        <div className="h-1 w-24 bg-wood-400 mx-auto rounded-full opacity-60"></div>
      </div>

      <div className="mt-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
          aria-label="Testimonials carousel"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="h-full rounded-2xl border border-wood-700/50 bg-wood-900/40 backdrop-blur-sm p-8 shadow-lg hover:border-wood-600 transition-colors">
                <div className="mb-4">
                  <Stars count={t.rating} />
                </div>
                <p className="italic text-wood-100/90 text-lg leading-relaxed mb-6">“{t.quote}”</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="h-10 w-10 rounded-full bg-wood-700 flex items-center justify-center text-wood-300 font-serif font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div className="text-sm font-medium text-wood-300 uppercase tracking-wide">{t.name}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}



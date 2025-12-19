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



export default function TestimonialSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-serif text-4xl text-wood-50 md:text-5xl">Stories from the Farm</h2>
        <p className="mt-4 text-white/80 text-lg">See what our guests (and their pets) have to say.</p>
      </div>

      <div className="mt-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={32}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
          aria-label="Testimonials carousel"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="h-full rounded-2xl bg-white/10 p-10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
                <div className="mb-6 flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-terracotta-400">★</span>
                  ))}
                </div>
                <p className="font-serif text-2xl text-wood-50 leading-normal mb-8">“{t.quote}”</p>
                <div>
                  <div className="text-sm font-bold text-white uppercase tracking-widest">{t.name}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}



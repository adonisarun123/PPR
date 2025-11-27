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
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center font-serif">Guest Stories</h2>
      <div className="mt-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          aria-label="Testimonials carousel"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="h-full rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
                <Stars count={t.rating} />
                <p className="mt-3 italic text-sand-800">“{t.quote}”</p>
                <div className="mt-4 text-sm text-sand-600">{t.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}



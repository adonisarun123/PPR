'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

type ImageItem = { src: string; alt: string };

type ImageCarouselProps = {
  images: ImageItem[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={16}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      aria-label="Image gallery carousel"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              priority={idx < 2}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}



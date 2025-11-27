'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/ui/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Zoom, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

export type GalleryImage = {
  src: string;
  alt: string;
  category: 'property' | 'pools' | 'farm' | 'pets' | 'guests' | 'activities';
};

type GalleryBrowserProps = {
  images: GalleryImage[];
};

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'property', label: 'Property' },
  { key: 'pools', label: 'Pools' },
  { key: 'farm', label: 'Farm' },
  { key: 'pets', label: 'Pets' },
  { key: 'guests', label: 'Guests' },
  { key: 'activities', label: 'Activities' },
] as const;

export default function GalleryBrowser({ images }: GalleryBrowserProps) {
  const [active, setActive] = useState<(typeof tabs)[number]['key']>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const filtered = useMemo(() => {
    if (active === 'all') return images;
    return images.filter((img) => img.category === active);
  }, [active, images]);

  const openLightbox = (idx: number) => {
    setStartIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            className={`px-3 py-1.5 rounded-md border ${
              active === t.key
                ? 'bg-terracotta-600 text-white border-terracotta-700'
                : 'border-sand-300 hover:bg-sand-100'
            }`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((img, idx) => (
          <button
            key={`${img.src}-${idx}`}
            className="relative aspect-square w-full overflow-hidden rounded-lg"
            onClick={() => openLightbox(idx)}
            aria-label={`Open ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
          </button>
        ))}
      </div>

      <Modal
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title="Gallery"
        className="max-w-5xl"
      >
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Zoom, A11y]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            zoom
            initialSlide={startIndex}
            aria-label="Gallery lightbox"
          >
            {filtered.map((img, idx) => (
              <SwiperSlide key={`${img.src}-lightbox-${idx}`}>
                <div className="swiper-zoom-container">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                      sizes="100vw"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Modal>
    </div>
  );
}



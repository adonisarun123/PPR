'use client';

import Image from 'next/image';
import Button from './Button';

type CardProps = {
  image?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  children?: React.ReactNode;
};

export default function Card({
  image,
  title,
  description,
  ctaLabel,
  onCtaClick,
  children,
}: CardProps) {
  return (
    <div className="group overflow-hidden rounded-organic-md border border-wood-200 bg-wood-50/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-wood-50 hover:-translate-y-1">
      {image ? (
        <div className="relative h-56 w-full overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-wood-900/10 group-hover:bg-transparent transition-colors"></div>
        </div>
      ) : null}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-serif text-wood-900">{title}</h3>
        {description ? <p className="text-wood-700 leading-relaxed">{description}</p> : null}
        {children}
        {ctaLabel ? (
          <Button variant="outline" onClick={onCtaClick} className="w-full justify-center border-wood-300 text-wood-800 hover:bg-wood-100">
            {ctaLabel}
          </Button>
        ) : null}
      </div>
    </div>
  );
}



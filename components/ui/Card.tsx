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
    <div className="group overflow-hidden rounded-xl border border-sand-200 bg-white shadow-sm transition hover:shadow-md">
      {image ? (
        <div className="relative h-48 w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      ) : null}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-serif">{title}</h3>
        {description ? <p className="text-sand-700">{description}</p> : null}
        {children}
        {ctaLabel ? (
          <Button variant="outline" onClick={onCtaClick}>
            {ctaLabel}
          </Button>
        ) : null}
      </div>
    </div>
  );
}



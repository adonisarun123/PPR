'use client';

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-lg bg-gradient-to-br from-sand-100 to-earth-100"
        />
      ))}
    </div>
  );
}



'use client';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div
        aria-label="Loading"
        className="h-12 w-12 animate-spin rounded-full border-4 border-terracotta-400 border-t-transparent"
      />
    </div>
  );
}



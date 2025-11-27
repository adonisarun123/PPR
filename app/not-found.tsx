'use client';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4 p-6">
      <h1 className="text-4xl font-serif">Page not found</h1>
      <p className="text-sand-600 max-w-xl">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <a
        className="px-4 py-2 rounded-md bg-terracotta-600 text-white hover:bg-terracotta-700"
        href="/"
      >
        Back to Home
      </a>
    </div>
  );
}



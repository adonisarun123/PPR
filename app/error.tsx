'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4 p-6">
      <h1 className="text-4xl font-serif">Something went wrong</h1>
      <p className="text-sand-600 max-w-xl">
        We hit a snag while loading this page. Please try again.
      </p>
      <div className="flex gap-3">
        <button
          className="px-4 py-2 rounded-md bg-terracotta-600 text-white hover:bg-terracotta-700"
          onClick={() => reset()}
        >
          Retry
        </button>
        <a
          className="px-4 py-2 rounded-md border border-sand-300 hover:bg-sand-100"
          href="/"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}



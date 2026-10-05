'use client';

import { useEffect, useState } from 'react';

// 10 October 2026, 00:00 IST
const TARGET = new Date('2026-10-10T00:00:00+05:30').getTime();

function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
    done: ms === 0,
  };
}

export default function Countdown() {
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  if (t?.done) {
    return <p className="font-serif text-2xl text-terracotta-300">The celebration is here!</p>;
  }

  const units: [string, number | undefined][] = [
    ['Days', t?.days],
    ['Hours', t?.hours],
    ['Mins', t?.minutes],
    ['Secs', t?.seconds],
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4" aria-label="Countdown to launch">
      {units.map(([label, value]) => (
        <div
          key={label}
          className="flex min-w-0 flex-col items-center rounded-2xl border border-white/15 bg-white/10 px-2 py-3 backdrop-blur-md sm:px-5 sm:py-4"
        >
          <span className="font-serif text-3xl tabular-nums text-white sm:text-4xl">
            {value === undefined ? '--' : String(value).padStart(2, '0')}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-wood-200 sm:text-xs">{label}</span>
        </div>
      ))}
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { siteName } from '@/lib/constants';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import { PawPrint } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${solid
        ? 'bg-wood-50/80 backdrop-blur-md border-b border-wood-200/50 shadow-sm'
        : 'bg-transparent py-2'
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-serif text-xl text-wood-900">
          <PawPrint className="h-6 w-6 text-terracotta-600" />
          <span>{siteName}</span>
        </Link>
        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="hidden md:block">
          <Link href="/booking">
            <Button variant="primary" size="md">Book Activities</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}



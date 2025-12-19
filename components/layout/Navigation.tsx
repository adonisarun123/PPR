'use client';

import Link from 'next/link';
import { navLinks } from '@/lib/constants';

export default function Navigation() {
  return (
    <nav className="flex items-center gap-6 text-sm">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="font-serif tracking-wide text-wood-900 hover:text-terracotta-600 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}



'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { navLinks } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        aria-label="Toggle Menu"
        className="p-2 rounded-md border border-sand-200"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open ? (
        <div className="absolute left-0 right-0 top-16 bg-earth-50 border-t border-sand-200 shadow-md">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md hover:bg-sand-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/booking" onClick={() => setOpen(false)}>
              <Button variant="primary" fullWidth>Book Now</Button>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}



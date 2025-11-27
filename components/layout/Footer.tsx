'use client';

import Link from 'next/link';
import { PawPrint, Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-sand-200 bg-earth-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 font-serif text-xl mb-4">
              <PawPrint className="h-6 w-6 text-terracotta-600" />
              <span>Paws Pannai Retreat</span>
            </div>
            <p className="text-sand-600">
              A sustainable, pet-friendly eco-retreat crafted with earth, powered by the sun,
              and rooted in community.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sand-700">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/accommodations">Accommodations</Link></li>
              <li><Link href="/facilities">Facilities</Link></li>
              <li><Link href="/sustainability">Sustainability</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-3">Contact</h3>
            <ul className="space-y-2 text-sand-700">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Address, City, IN</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-00000-00000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> reservations@pawspannai.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-3">Follow Us</h3>
            <div className="flex gap-3">
              <a aria-label="Instagram" href="#" className="p-2 rounded-md border hover:bg-sand-100">
                <Instagram className="h-5 w-5" />
              </a>
              <a aria-label="Facebook" href="#" className="p-2 rounded-md border hover:bg-sand-100">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <form className="mt-4">
              <label htmlFor="newsletter" className="text-sm text-sand-700">Newsletter</label>
              <div className="mt-2 flex">
                <input id="newsletter" type="email" placeholder="Your email" className="flex-1 rounded-l-md border border-sand-300 px-3 py-2" />
                <button type="submit" className="rounded-r-md bg-sage-600 text-white px-4 hover:bg-sage-700">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-sand-200 text-sm text-sand-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Paws Pannai Retreat. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



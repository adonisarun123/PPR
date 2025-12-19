'use client';

import Link from 'next/link';
import { PawPrint, Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-wood-900 text-wood-100 pt-20 pb-10 overflow-hidden">
      {/* Organic Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 -translate-y-[99%]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[50px] sm:h-[80px] fill-wood-900 rotate-180"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 font-serif text-2xl text-wood-50">
              <PawPrint className="h-8 w-8 text-terracotta-500" />
              <span>Paws Pannai</span>
            </div>
            <p className="text-wood-200/80 leading-relaxed">
              A sustainable, pet-friendly eco-retreat crafted with earth, powered by the sun,
              and rooted in community.
            </p>
            <div className="flex gap-4">
              <a
                aria-label="Instagram"
                href="#"
                className="p-2 rounded-full border border-wood-700 bg-wood-800 text-wood-300 hover:bg-terracotta-600 hover:text-white hover:border-terracotta-600 transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="p-2 rounded-full border border-wood-700 bg-wood-800 text-wood-300 hover:bg-terracotta-600 hover:text-white hover:border-terracotta-600 transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6 text-wood-50">Explore</h3>
            <ul className="space-y-4 text-wood-200/80">
              <li><Link href="/about" className="hover:text-terracotta-400 transition-colors">Our Story</Link></li>
              <li><Link href="/accommodations" className="hover:text-terracotta-400 transition-colors">Accommodations</Link></li>
              <li><Link href="/pet-friendly" className="hover:text-terracotta-400 transition-colors">Pet-Friendly</Link></li>
              <li><Link href="/organic-farm" className="hover:text-terracotta-400 transition-colors">Organic Farm</Link></li>
              <li><Link href="/facilities" className="hover:text-terracotta-400 transition-colors">Facilities</Link></li>
              <li><Link href="/experiences" className="hover:text-terracotta-400 transition-colors">Experiences</Link></li>
              <li><Link href="/sustainability" className="hover:text-terracotta-400 transition-colors">Sustainability</Link></li>
              <li><Link href="/gallery" className="hover:text-terracotta-400 transition-colors">Gallery</Link></li>
              <li><Link href="/reviews" className="hover:text-terracotta-400 transition-colors">Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6 text-wood-50">Contact</h3>
            <ul className="space-y-4 text-wood-200/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-terracotta-500 shrink-0 mt-0.5" />
                <span>100 Acre Farm, Rustic Road,<br />Village & Post, TN</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-terracotta-500" />
                <span>+91-98765-43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-terracotta-500" />
                <span>hello@pawspannai.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6 text-wood-50">Newsletter</h3>
            <p className="text-wood-200/80 mb-4 text-sm">Join our family for updates on new events and farm stories.</p>
            <form className="flex flex-col gap-3">
              <input
                id="newsletter"
                type="email"
                placeholder="Your email address"
                className="w-full rounded-lg bg-wood-800 border border-wood-700 px-4 py-3 text-wood-100 placeholder:text-wood-600 focus:outline-none focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 transition-all"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-terracotta-600 text-white px-4 py-3 font-medium hover:bg-terracotta-700 hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-wood-800 text-sm text-wood-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Paws Pannai Retreat. All rights reserved.</div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-wood-200 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-wood-200 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



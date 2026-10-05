import Image from 'next/image';
import type { Metadata } from 'next';
import {
  CalendarDays,
  Clock,
  Dog,
  Lock,
  MapPin,
  PartyPopper,
  PawPrint,
  UtensilsCrossed,
  Users,
} from 'lucide-react';
import Countdown from '@/components/invite/Countdown';
import { whatsappLink, rsvpWhatsappNumber } from '@/lib/constants';

export const metadata: Metadata = {
  title: "You're Invited | Paws Pannai Retreat Launch — 10 October 2026",
  description: 'An invite-only inauguration for dog parents at Paws Pannai Retreat. Food included.',
  // Invite-only: keep this page out of search engines
  robots: { index: false, follow: false },
  openGraph: {
    title: "You're Invited — Paws Pannai Retreat Launch",
    description: 'Saturday, 10 October 2026 · 3–6 PM · Invite-only · Food included',
    type: 'website',
  },
};

const rsvpLink = whatsappLink(
  "Hi! I'd like to RSVP for the Paws Pannai launch on 10 October 2026.\n\nMy name:\nNumber of people:\nNumber of dogs:\nDog's name(s):",
  rsvpWhatsappNumber,
);

const details = [
  { icon: CalendarDays, label: 'Date', value: 'Saturday, 10 October 2026' },
  { icon: Clock, label: 'Time', value: '3:00 PM – 6:00 PM' },
  { icon: MapPin, label: 'Venue', value: 'Paws Pannai Retreat, near Shoolagiri, Tamil Nadu' },
  { icon: UtensilsCrossed, label: 'Food', value: 'Included for all invited guests' },
];

const highlights = [
  {
    icon: PartyPopper,
    title: 'The Inauguration',
    text: 'Be there as we open the gates to Paws Pannai for the very first time.',
  },
  {
    icon: Dog,
    title: 'Run of the Park',
    text: 'Your dog gets the first run of our brand-new pet park and play areas.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food on Us',
    text: 'Food is included as part of the celebration — just come hungry.',
  },
  {
    icon: Users,
    title: 'Meet the Pack',
    text: 'Meet fellow dog parents from the community in an easy, open-air setting.',
  },
];

export default function InvitePage() {
  return (
    <div className="bg-wood-50" data-dark-hero>
      {/* Hero */}
      <section className="relative -mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e"
            alt="Happy dogs running across an open meadow"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-wood-900/80 via-wood-900/70 to-wood-900/95" />
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-4 pb-16 pt-32 text-center sm:px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-terracotta-400/50 bg-terracotta-600/20 px-4 py-1.5 backdrop-blur-md">
            <Lock className="h-3.5 w-3.5 text-terracotta-300" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-100">
              Invite-Only Event
            </span>
          </div>

          <p className="mb-3 font-serif text-lg italic text-wood-200 sm:text-xl">Dear dog parent, you&apos;re invited to</p>
          <h1 className="mb-6 font-serif text-4xl leading-[1.1] text-white sm:text-6xl md:text-7xl">
            The Grand Launch of <span className="text-terracotta-400">Paws Pannai</span>
          </h1>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-wood-100 sm:text-lg">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-terracotta-400" /> Saturday, 10 October 2026
            </span>
            <span className="hidden text-wood-400 sm:inline">•</span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-5 w-5 text-terracotta-400" /> 3 PM – 6 PM
            </span>
            <span className="hidden text-wood-400 sm:inline">•</span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="h-5 w-5 text-terracotta-400" /> Food included
            </span>
          </div>

          <div className="mb-10 w-full max-w-md">
            <Countdown />
          </div>

          <a
            href={rsvpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-2 rounded-full bg-terracotta-600 px-10 text-lg font-medium text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-terracotta-700 hover:shadow-2xl"
          >
            <PawPrint className="h-5 w-5" /> RSVP on WhatsApp
          </a>
          <p className="mt-4 text-sm text-wood-300">Entry is by invitation only. Please RSVP so we can plan for you and your dog.</p>
        </div>
      </section>

      {/* Event details */}
      <section className="relative mx-auto -mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-wood-200 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
          {details.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-terracotta-100 text-terracotta-600">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-wood-500">{label}</div>
                <div className="mt-1 font-medium text-wood-900">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to expect */}
      <section className="relative overflow-hidden py-24">
        <PawPrint aria-hidden className="absolute -left-8 top-10 h-28 w-28 -rotate-12 text-wood-200/60" />
        <PawPrint aria-hidden className="absolute -right-6 bottom-10 h-24 w-24 rotate-12 text-wood-200/60" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 font-serif text-4xl text-wood-900 md:text-5xl">A day for dogs &amp; their people</h2>
            <p className="text-lg text-wood-700/80">
              We&apos;re inviting a small circle of dog parents to be part of our inauguration — and we&apos;d love
              you and your pup to be among the first through the gates.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-3xl bg-white p-7 ring-1 ring-wood-200 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-foliage-100 text-foliage-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-xl text-wood-900">{title}</h3>
                <p className="text-wood-700/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing RSVP */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-wood-900 px-6 py-16 text-center text-white sm:px-12">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-terracotta-600/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-terracotta-300">
              <Lock className="h-3.5 w-3.5" /> Invite only · 10.10.2026 · 3–6 PM
            </div>
            <h2 className="mb-4 font-serif text-3xl sm:text-4xl">Save your spot</h2>
            <p className="mb-8 text-wood-200">
              Let us know who&apos;s coming — you, your family and your dogs — so we can get the food and the park ready.
            </p>
            <a
              href={rsvpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-10 text-lg font-medium text-wood-900 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-wood-50"
            >
              <PawPrint className="h-5 w-5 text-terracotta-600" /> RSVP on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

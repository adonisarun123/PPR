import Link from 'next/link';
import { Check, Dog, Crown, PawPrint, UserCheck } from 'lucide-react';
import { dogPricing, visitorPricing, whatsappLink } from '@/lib/constants';

const formatINR = (n: number) => `₹${n.toLocaleString('en-IN')}`;

function PawBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <PawPrint className="absolute -left-6 top-16 h-24 w-24 -rotate-12 text-wood-200/60" />
      <PawPrint className="absolute right-10 top-8 h-16 w-16 rotate-12 text-wood-200/50" />
      <PawPrint className="absolute bottom-24 right-[-1.5rem] h-28 w-28 rotate-45 text-wood-200/50" />
      <PawPrint className="absolute bottom-10 left-1/3 h-12 w-12 -rotate-6 text-wood-200/40" />
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="relative scroll-mt-24 overflow-hidden bg-wood-50 py-24">
      <PawBackdrop />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-terracotta-100 px-4 py-1.5 text-terracotta-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-terracotta-600" />
            <span className="text-xs font-bold uppercase tracking-widest">Introductory Pricing</span>
          </div>
          <h2 className="mb-4 font-serif text-4xl leading-tight text-wood-900 md:text-5xl">
            Simple, hourly pricing
          </h2>
          <p className="text-lg text-wood-700/80">
            All rates are per hour. One accompanying person per dog comes in free.
          </p>
        </div>

        {/* Dog plans */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {dogPricing.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-3xl p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                plan.highlight
                  ? 'bg-wood-900 text-wood-50 ring-1 ring-wood-800'
                  : 'bg-white text-wood-900 ring-1 ring-wood-200'
              }`}
            >
              {plan.highlight ? (
                <span className="absolute -top-3 right-8 rounded-full bg-terracotta-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow">
                  Exclusive
                </span>
              ) : null}
              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    plan.highlight ? 'bg-terracotta-600/20 text-terracotta-400' : 'bg-terracotta-100 text-terracotta-600'
                  }`}
                >
                  {plan.highlight ? <Crown className="h-6 w-6" /> : <Dog className="h-6 w-6" />}
                </div>
                <h3 className="font-serif text-2xl">{plan.name}</h3>
              </div>
              <div className="mb-4 flex items-baseline gap-2">
                <span className="font-serif text-5xl">{formatINR(plan.price)}</span>
                <span className={plan.highlight ? 'text-wood-300' : 'text-wood-600'}>{plan.unit}</span>
              </div>
              <p className={`mb-6 ${plan.highlight ? 'text-wood-200' : 'text-wood-700/80'}`}>{plan.description}</p>
              <div className="mt-auto flex items-center gap-2 text-sm">
                <Check className={`h-4 w-4 ${plan.highlight ? 'text-terracotta-400' : 'text-terracotta-600'}`} />
                <span>Includes 1 accompanying person per dog</span>
              </div>
            </div>
          ))}
        </div>

        {/* People */}
        <div className="mt-6 rounded-3xl bg-white p-8 ring-1 ring-wood-200">
          <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-serif text-2xl text-wood-900">Coming along with your dog</h3>
            <span className="text-sm text-wood-600">Per person / hour</span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {visitorPricing.map((v) => (
              <div key={v.id} className="rounded-2xl bg-wood-50 p-5">
                <div className="text-sm text-wood-700">{v.label}</div>
                <div className="mt-1 font-serif text-3xl text-wood-900">
                  {v.price === 0 ? <span className="text-foliage-600">Free</span> : formatINR(v.price)}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-dashed border-terracotta-300 bg-terracotta-50 p-4 text-wood-800">
            <UserCheck className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-600" />
            <p>
              <span className="font-semibold">1 accompanying person per dog is complimentary.</span>{' '}
              Additional visitors are charged at the rates above.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/booking?type=activities"
            className="inline-flex h-12 items-center rounded-full bg-terracotta-600 px-8 font-medium text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-terracotta-700 hover:shadow-xl"
          >
            Book A Play Session
          </Link>
          <a
            href={whatsappLink('Hi! I would like to book a session at Paws Pannai pet park.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center rounded-full border border-wood-300 px-8 font-medium text-wood-900 transition-colors hover:bg-white"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

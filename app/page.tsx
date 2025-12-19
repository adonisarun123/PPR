import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import PetPlayArea from '@/components/home/PetPlayArea';
import PropertyHighlights from '@/components/home/PropertyHighlights';
import PetFriendlySection from '@/components/home/PetFriendlySection';
import SustainabilitySection from '@/components/home/SustainabilitySection';
import TestimonialSection from '@/components/home/TestimonialSection';
import CTASection from '@/components/home/CTASection';
import FadeIn from '@/components/animations/FadeIn';
import JsonLd from '@/components/shared/JsonLd';
import SectionDivider from '@/components/ui/SectionDivider';

export const metadata = {
  title: 'Paws Pannai Retreat | Sustainable Pet-Friendly Eco-Resort',
  description:
    'Experience sustainable luxury with earthen pools, an organic farm, and pet-friendly amenities at Paws Pannai Retreat.',
  openGraph: {
    title: 'Paws Pannai Retreat',
    description:
      'Sustainable, pet-friendly eco-retreat with earthen pools and an organic farm.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paws Pannai Retreat',
    description:
      'Sustainable, pet-friendly eco-retreat with earthen pools and an organic farm.',
    images: ['/og-image.jpg'],
  },
};

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com';
  const orgId = `${siteUrl}#organization`;
  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteUrl,
    name: 'Paws Pannai Retreat',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    publisher: { '@id': orgId },
  };
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    name: 'Paws Pannai Retreat | Home',
    isPartOf: { '@id': orgId },
  };

  return (
    <div className="bg-white">
      <JsonLd data={webSiteJsonLd} />
      <JsonLd data={webPageJsonLd} />

      {/* Hero with transition */}
      <div className="relative">
        <Hero />
      </div>

      <div className="space-y-0">
        {/* Activity First Design */}
        <FadeIn>
          <PetPlayArea />
        </FadeIn>

        <section className="py-20 bg-stone-50/50">
          <FadeIn>
            <Features />
          </FadeIn>
        </section>

        <section className="my-20">
          <FadeIn>
            <PropertyHighlights />
          </FadeIn>
        </section>

        <section className="relative py-20 bg-stone-100">
          <SectionDivider variant="top" className="text-wood-50" />
          <FadeIn>
            <div className="container mx-auto px-4">
              <PetFriendlySection />
            </div>
          </FadeIn>
          <SectionDivider variant="bottom" className="text-wood-50" />
        </section>

        <section className="py-20">
          <FadeIn>
            <SustainabilitySection />
          </FadeIn>
        </section>

        <section className="relative bg-foliage-900 py-24 text-wood-50">
          <SectionDivider variant="top" className="text-wood-50" />
          <FadeIn>
            <TestimonialSection />
          </FadeIn>
          <SectionDivider variant="bottom" className="text-wood-50" />
        </section>

        <FadeIn>
          <CTASection />
        </FadeIn>
      </div>
    </div>
  );
}



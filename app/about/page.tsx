export const metadata = {
  title: 'Our Story | Paws Pannai Retreat',
  description:
    'Discover the origin, vision, and values of Paws Pannai Retreat—crafted sustainably for people and pets.',
};

export default function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com';
  const orgId = `${siteUrl}#organization`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${siteUrl}/about`,
    name: 'Our Story',
    isPartOf: { '@id': orgId },
  };

  return (
    <div className="bg-wood-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-5xl text-wood-900 mb-6">Our Story</h1>
          <div className="h-1 w-24 bg-terracotta-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-wood-700 leading-relaxed">
            Born from a love for nature, craftsmanship, and our animal companions, Paws Pannai
            Retreat brings sustainability and serenity together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-organic-md border border-wood-200 bg-wood-100/50 p-10 hover:shadow-xl transition-all duration-300 group">
            <h3 className="font-serif text-3xl text-wood-900 mb-4 group-hover:text-terracotta-700 transition-colors">Vision</h3>
            <p className="text-lg text-wood-700 leading-relaxed">
              An eco-retreat where humans and pets reconnect with nature in comfort and care.
              We envision a world where luxury doesn't cost the earth.
            </p>
          </div>
          <div className="rounded-organic-md border border-wood-200 bg-wood-100/50 p-10 hover:shadow-xl transition-all duration-300 group">
            <h3 className="font-serif text-3xl text-wood-900 mb-4 group-hover:text-terracotta-700 transition-colors">Mission</h3>
            <p className="text-lg text-wood-700 leading-relaxed">
              Operate responsibly with earth-first design, local community engagement, and authentic experiences
              that leave a minimal footprint while creating maximum joy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



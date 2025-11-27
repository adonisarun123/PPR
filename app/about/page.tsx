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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Our Story</h1>
      <p>
        Born from a love for nature, craftsmanship, and our animal companions, Paws Pannai
        Retreat brings sustainability and serenity together.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-sand-200 bg-white p-6">
          <h3 className="font-serif text-xl">Vision</h3>
          <p className="mt-2 text-sand-700">
            An eco-retreat where humans and pets reconnect with nature in comfort and care.
          </p>
        </div>
        <div className="rounded-xl border border-sand-200 bg-white p-6">
          <h3 className="font-serif text-xl">Mission</h3>
          <p className="mt-2 text-sand-700">
            Operate responsibly with earth-first design, local community, and authentic experiences.
          </p>
        </div>
      </div>
    </div>
  );
}



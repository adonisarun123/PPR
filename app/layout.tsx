import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/shared/JsonLd';
import { siteName } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com'),
  title: 'Paws Pannai Retreat | Sustainable Pet-Friendly Eco-Resort',
  description:
    'Experience sustainable luxury at Paws Pannai Retreat - a beautifully crafted farmhouse with earthen swimming pools, organic farm, and pet-friendly amenities.',
  keywords:
    'eco resort, pet friendly farmhouse, sustainable tourism, organic farm stay, earthen pool',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pawspannai.com';
  const orgId = `${siteUrl}#organization`;
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    '@id': orgId,
    name: siteName,
    url: siteUrl,
    description:
      'Sustainable pet-friendly eco-resort with earthen pools and organic farm.',
    petsAllowed: true,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Swimming Pool' },
      { '@type': 'LocationFeatureSpecification', name: 'Organic Farm' },
      { '@type': 'LocationFeatureSpecification', name: 'Pet Facilities' },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-earth-50 text-sand-900">
        <JsonLd data={orgJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}



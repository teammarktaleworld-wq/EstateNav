import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EstateNav — Bengaluru Real Estate Advisory Engine | Kaveri 2.0 Audited',
  description: 'Institutional-grade research, Kaveri 2.0 title audits, and direct developer allocations across Sarjapur, Whitefield & North Bengaluru corridors. Authorized channel partner for Abhee Ventures.',
  keywords: [
    'Bengaluru Real Estate',
    'Abhee Ventures',
    'Abhee Codename New Dimension',
    'Sarjapur Road Apartments',
    'Whitefield Flats',
    'Kaveri 2.0 audited properties',
    'Direct developer pricing',
    'K-RERA registered projects',
  ],
  authors: [{ name: 'EstateNav Advisory' }],
  openGraph: {
    title: 'EstateNav — Navigate Bengaluru Real Estate with Data-Backed Certainty',
    description: 'Data-backed property discovery, transit radius matching, and direct developer allocations for high-income tech leads and NRI investors.',
    url: 'https://estatenav.vercel.app',
    siteName: 'EstateNav',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'EstateNav Institutional Real Estate Advisory',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'EstateNav',
    description: 'Institutional-grade real estate advisory and direct developer allocations in Bengaluru.',
    url: 'https://estatenav.vercel.app',
    areaServed: ['Sarjapur Road', 'Whitefield', 'Outer Ring Road', 'Hebbal', 'Electronic City'],
    knowsAbout: [
      'K-RERA Compliance',
      'Kaveri 2.0 Title Clearances',
      'Direct Developer Allocations',
      'Abhee Ventures Projects',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-80-0000-0000',
      contactType: 'Sales & Advisory Support',
      areaServed: 'IN',
      availableLanguage: ['English', 'Kannada', 'Hindi'],
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-canvas-950 text-slate-100 antialiased selection:bg-brand-500/20 selection:text-brand-300 min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}


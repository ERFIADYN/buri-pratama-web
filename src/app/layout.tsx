import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { site, isPlaceholder } from '@/data/site';
import { RequestCartProvider } from '@/context/RequestCartContext';

const jakarta = localFont({
  src: './fonts/PlusJakartaSans-Variable.woff2',
  variable: '--font-jakarta',
  display: 'swap',
  weight: '200 800',
});

const title = `${site.name} - ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: site.name,
    title,
    description: site.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: site.description,
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#173A5E',
  width: 'device-width',
  initialScale: 1,
};

// Data terstruktur schema.org. Placeholder tidak ikut dimasukkan.
const jsonLd: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/og-image.png`,
  telephone: `+${site.whatsapp}`,
  ...(isPlaceholder(site.email) ? {} : { email: site.email }),
  ...(isPlaceholder(site.address) && isPlaceholder(site.city)
    ? {}
    : {
        address: {
          '@type': 'PostalAddress',
          ...(isPlaceholder(site.address) ? {} : { streetAddress: site.address }),
          ...(isPlaceholder(site.city) ? {} : { addressLocality: site.city }),
          addressCountry: 'ID',
        },
      }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-navy"
        >
          Lewati ke konten
        </a>
        <RequestCartProvider>{children}</RequestCartProvider>
      </body>
    </html>
  );
}

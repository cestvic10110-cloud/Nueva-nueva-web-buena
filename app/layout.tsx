import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, Jost } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/layout/NavBar'
import { Footer } from '@/components/layout/Footer'
import { safeJsonLd } from '@/lib/jsonld'
import { CookieBanner } from '@/components/shared/CookieBanner'
import { COMPANY, SITE_URL } from '@/lib/constants'

const ORG_ID = `${SITE_URL}/#organization`

const SITE_JSONLD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': ORG_ID,
      name: COMPANY.shortName,
      legalName: COMPANY.name,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logoCesteria.png` },
      image: `${SITE_URL}/images/hero.png`,
      foundingDate: String(COMPANY.founded),
      taxID: COMPANY.nif,
      description: 'Fabricante de cestas de mimbre al por mayor. Más de 50 años de trayectoria al servicio de empresas. Exclusivo B2B desde Valencia, España.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY.address,
        postalCode: COMPANY.postalCode,
        addressLocality: COMPANY.city,
        addressRegion: COMPANY.province,
        addressCountry: 'ES',
      },
      telephone: COMPANY.phoneE164,
      email: COMPANY.email,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      areaServed: { '@type': 'Country', name: 'España' },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: COMPANY.phoneE164,
        email: COMPANY.email,
        areaServed: 'ES',
        availableLanguage: 'es',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY.shortName,
      inLanguage: 'es-ES',
      publisher: { '@id': ORG_ID },
    },
  ],
}

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

// Add viewport meta for mobile devices
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Fabricante de Cestas de Mimbre al por Mayor | Cestería Vicent',
    template: '%s | Cestería Vicent',
  },
  description:
    'Fabricación propia de cestas, bandejas y baúles de mimbre para empresas. Diseño a medida para retail, hostelería y lotes gourmet. Stock permanente desde 1969.',
  keywords: [
    'cestas mimbre mayorista',
    'proveedor cestas B2B',
    'cestas navideñas empresas',
    'cestería Valencia',
    'fabricante cestas España',
  ],
  openGraph: {
    siteName: 'Cestería Vicent',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/images/hero.png', alt: 'Cestas de mimbre de Cestería Vicent' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${dmSans.variable} ${jost.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {/* Skip nav — visually hidden, visible on focus */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4
                     focus:z-[999] focus:px-4 focus:py-2 focus:bg-gold focus:text-ink
                     focus:font-sans focus:text-sm focus:font-medium focus:squircle-sm"
        >
          Saltar al contenido principal
        </a>

        {/* Organization + WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(SITE_JSONLD) }}
        />

        <NavBar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}

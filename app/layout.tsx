import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, Jost } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/layout/NavBar'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/layout/CustomCursor'
import { safeJsonLd } from '@/lib/jsonld'
import { CookieBanner } from '@/components/shared/CookieBanner'

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

export const metadata: Metadata = {
  title: {
    default: 'Cestería Vicent | Fabricante de Cestas de Mimbre al por Mayor en Valencia',
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

        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              '@context': 'https://schema.org',
              '@type': ['Organization', 'LocalBusiness'],
              name: 'Cestería Vicent, S.L.',
              url: 'https://cesteriavicent.es',
              logo: 'https://cesteriavicent.es/icon.svg',
              foundingDate: '1969',
              description: 'Fabricante de cestas de mimbre al por mayor. Más de 50 años de tradición artesanal al servicio de empresas. Exclusivo B2B desde Valencia, España.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'C/ Leonardo Carreres, 24',
                postalCode: '46812',
                addressLocality: 'Aielo de Malferit',
                addressRegion: 'Valencia',
                addressCountry: 'ES',
              },
              telephone: '+34679286178',
              email: 'cesteriavicent@cesteriavicent.es',
              openingHours: 'Mo-Fr 09:00-19:00',
              priceRange: 'B2B',
            }),
          }}
        />

        <CustomCursor />
        <NavBar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}

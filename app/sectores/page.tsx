import Link from 'next/link'
import type { Metadata } from 'next'
import { ScrollReveal }   from '@/components/shared/ScrollReveal'
import { SectoresList }   from '@/components/sectores/SectoresList'
import { SectorJumpNav }  from '@/components/sectores/SectorJumpNav'

export const metadata: Metadata = {
  title: 'Sectores B2B — Lotes de Navidad, Retail, Gourmet, Hostelería e Interiorismo',
  description: 'Fabricante de cestas artesanales para retail, lotes navideños B2B, gourmet premium, regalo corporativo, hostelería de lujo e interiorismo. Proveedor exclusivo B2B desde Valencia, 1969.',
}

export default function SectoresPage() {
  return (
    <>

      {/* ── Hero tipográfico — luz, no negro ── */}
      <section className="light-section grain-light overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-site">

          <ScrollReveal>
            <p
              className="font-sans uppercase tracking-[0.32em] mb-6"
              style={{ fontSize: '0.5rem', color: 'var(--color-text-dim)' }}
            >
              Sectores B2B · Cestería Vicent
            </p>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <h1
              className="font-display italic-serif leading-[0.88] tracking-tight mb-8"
              style={{
                fontSize: 'clamp(3rem, 8vw, 8rem)',
                color: 'var(--color-text-primary)',
                maxWidth: '18ch',
              }}
            >
              Artesanía para{' '}
              <span style={{ color: 'var(--color-rattan)' }}>cada industria.</span>
            </h1>
          </ScrollReveal>

          <div className="h-px mb-8" style={{ backgroundColor: 'var(--color-sand)' }} />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <ScrollReveal delay={100}>
              <p
                className="font-body leading-relaxed"
                style={{
                  fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
                  color: 'var(--color-text-secondary)',
                  maxWidth: '40rem',
                }}
              >
                Como fabricante B2B exclusivo con más de cincuenta años de oficio, entendemos
                que cada sector tiene sus propias exigencias de volumen, plazos y presentación.
                Adaptamos nuestra producción, no al revés.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <SectorJumpNav />
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ── Sectors sticky scroll ── */}
      <SectoresList />

      {/* ── CTA final — light ── */}
      <section className="light-section grain-light section-pad">
        <div className="container-site">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-end">

            <div>
              <ScrollReveal>
                <h2
                  className="font-display italic-serif leading-[0.9] tracking-tight"
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 6rem)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  ¿Su sector<br />
                  <span style={{ color: 'var(--color-rattan)' }}>no está aquí?</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <p
                  className="font-body leading-relaxed mt-6"
                  style={{
                    fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
                    color: 'var(--color-text-secondary)',
                    maxWidth: '36rem',
                  }}
                >
                  Trabajamos con cualquier empresa que necesite presentaciones artesanales de
                  calidad. Cuéntenos su proyecto y le preparamos una propuesta a medida.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={120}>
              <div className="flex flex-col gap-4 items-start lg:items-end">
                <Link
                  href="/contacto"
                  className="font-sans text-[0.72rem] font-medium text-ink bg-gold hover:bg-gold-light
                             transition-colors duration-300 px-8 py-4 squircle-sm
                             tracking-[0.12em] uppercase whitespace-nowrap"
                >
                  Solicitar presupuesto
                </Link>
                <Link
                  href="/catalogo"
                  className="font-body text-sm transition-colors duration-200 link-underline"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Ver catálogo completo →
                </Link>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

    </>
  )
}

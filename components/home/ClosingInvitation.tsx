import Link from 'next/link'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { COMPANY } from '@/lib/constants'

export function ClosingInvitation() {
  return (
    <section className="bg-bark grain section-pad">
      <div className="container-site">

        {/* Divider */}
        <div className="h-px mb-14 md:mb-20" style={{ backgroundColor: 'var(--color-border-dark)' }} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-end">

          {/* Left: quote */}
          <div>
            <ScrollReveal>
              <p
                className="font-display italic-serif text-cream leading-[0.92] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', color: 'var(--color-rattan)' }}
              >
                "No solo vendemos cestas;<br />
                ofrecemos la seguridad<br />
                de un suministro constante."
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex items-center gap-3 mt-8">
                <div className="h-px opacity-50" style={{ width: '3.5rem', backgroundColor: 'var(--color-gold)' }} />
                <p className="font-sans uppercase tracking-[0.22em]"
                   style={{ fontSize: '0.55rem', color: 'var(--color-cream)', opacity: 0.38 }}>
                  Cestería Vicent, S.L. · Desde 1969
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: CTA stack */}
          <ScrollReveal delay={160}>
            <div className="flex flex-col gap-4 items-start lg:items-end">

              <Link
                href="/contacto"
                className="font-sans text-[0.72rem] font-medium text-ink bg-gold hover:bg-gold-light
                           transition-colors duration-300 px-8 py-4 squircle-sm
                           tracking-[0.12em] uppercase whitespace-nowrap"
              >
                Solicitar presupuesto
              </Link>

              <a
                href={`tel:${COMPANY.phone}`}
                className="font-body text-sm text-cream/55 hover:text-cream/85
                           transition-colors duration-200 link-underline"
              >
                {COMPANY.phone}
              </a>

              <p className="font-sans uppercase tracking-[0.16em]"
                 style={{ fontSize: '0.52rem', color: 'var(--color-cream)', opacity: 0.3 }}>
                Lun–Vie · 9:00–19:00 · B2B exclusivo
              </p>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  )
}

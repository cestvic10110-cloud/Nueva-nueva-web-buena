import Link from 'next/link'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import type { CategoryMeta } from '@/lib/types'
import { CatalogSearch } from './CatalogSearch'

interface Props {
  meta: CategoryMeta | null
  count: number
}

export function CatalogHeader({ meta, count }: Props) {
  const title       = meta ? meta.labelPlural : 'Catálogo'
  const description = meta
    ? meta.description
    : 'Soluciones artesanales para empresas exigentes. Fabricante B2B exclusivo desde Valencia, 1969.'

  return (
    <section className="bg-ink grain pt-32 pb-14 md:pt-36 md:pb-16">
      <div className="container-site">

        {/* Title row */}
        <div className="flex items-end justify-between mb-6 gap-8">
          <ScrollReveal>
            <h1
              className="font-display italic-serif text-cream leading-none"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)' }}
            >
              {title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="flex-shrink-0 mb-2">
              <CatalogSearch />
            </div>
          </ScrollReveal>
        </div>

        {/* Gold rule */}
        <div className="h-px bg-gold/25 mb-8" />

        {/* Description + actions */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <ScrollReveal>
            <p
              className="font-body text-cream/65 leading-relaxed"
              style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', maxWidth: '42rem' }}
            >
              {description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex items-center gap-4 flex-shrink-0">
              <a
                href="/catalogo-2026.pdf"
                download
                className="flex items-center gap-2.5 font-sans text-[0.65rem] text-gold
                           hover:text-cream transition-all duration-300 tracking-[0.14em]
                           uppercase border border-gold/40 hover:bg-gold/10
                           px-5 py-3 squircle-sm"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Descargar Catálogo PDF
              </a>
              {meta && (
                <Link
                  href="/catalogo"
                  className="font-sans text-[0.65rem] text-cream/42 hover:text-cream/70
                             transition-colors duration-300 tracking-wide"
                >
                  ← Ver todo
                </Link>
              )}
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}

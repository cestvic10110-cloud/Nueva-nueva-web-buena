import Image from 'next/image'
import Link from 'next/link'
import { getByCategory, getProduct } from '@/lib/catalog'
import { CATEGORY_MAP, COMPANY, SITE_URL } from '@/lib/constants'
import { LANDING_BY_SLUG, landingH1Text, type FamilyLanding } from '@/lib/landings'
import type { CatalogItem } from '@/lib/types'
import { encodeImagePath } from '@/lib/utils'
import { safeJsonLd } from '@/lib/jsonld'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { FaqAccordion } from '@/components/shared/FaqAccordion'
import { ProductCard } from '@/components/catalog/ProductCard'
import { Check } from '@/components/home/TrustTicker'

function landingProducts(l: FamilyLanding): CatalogItem[] {
  if (!l.productIds) return getByCategory(l.category)
  return l.productIds.map(getProduct).filter((p): p is CatalogItem => p !== undefined)
}

/** Plantilla de las páginas por familia: misma estructura que la landing de Navidad. */
export function FamilyLandingPage({ landing }: { landing: FamilyLanding }) {
  const products = landingProducts(landing)
  const cat = CATEGORY_MAP[landing.category]
  const url = `${SITE_URL}/${landing.slug}`
  const related = landing.related.map((s) => LANDING_BY_SLUG[s]).filter(Boolean)
  const whatsappUrl =
    `https://wa.me/${COMPANY.phoneE164.replace('+', '')}?text=` +
    encodeURIComponent(`Hola, me gustaría solicitar presupuesto de ${landingH1Text(landing).toLowerCase()}.`)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: landingH1Text(landing), item: url },
        ],
      },
      {
        '@type': 'ItemList',
        name: landingH1Text(landing),
        itemListElement: products.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${SITE_URL}/catalogo/${p.id}`,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: landing.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />

      {/* ── Portada oscura ── */}
      <section className="on-dark relative overflow-hidden bg-ink min-h-[640px] h-dvh max-h-[960px]">
        <div className="absolute inset-0 md:left-auto md:w-[62%]">
          <Image
            src={encodeImagePath(landing.heroImage)}
            alt={landing.heroAlt}
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 62vw"
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{ background: 'linear-gradient(90deg, #0F0D0B 0%, rgba(15,13,11,0.78) 24%, rgba(15,13,11,0) 58%)' }}
          />
          <div className="absolute inset-0 bg-ink/65 md:hidden" />
        </div>

        <div className="relative z-10 h-full container-site flex flex-col justify-center pt-16">
          <div className="max-w-[36rem]">
            <h1 className="hero-rise">
              <span className="eyebrow block">{landing.eyebrow}</span>
              <span className="headline block mt-6" style={{ fontSize: 'clamp(2.75rem, 5.6vw, 5.5rem)' }}>
                {landing.h1.before} <em>{landing.h1.em}</em>
                {landing.h1.after && <> {landing.h1.after}</>}
              </span>
            </h1>
            <p className="lede mt-7 hero-rise" style={{ maxWidth: '32rem', animationDelay: '80ms' }}>
              {landing.lede}
            </p>
            <div
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 hero-rise"
              style={{ animationDelay: '160ms' }}
            >
              <Link href="/contacto" className="btn btn-light">Solicitar presupuesto</Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
                Consultar por WhatsApp <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Introducción y puntos clave ── */}
      <section className="bg-paper section-y">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-start">
            <ScrollReveal>
              <p className="eyebrow">{cat?.labelPlural ?? landing.category}</p>
              <h2 className="headline mt-5" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)' }}>
                Lo que encontrará <em>en esta gama</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={80} className="space-y-5">
              {landing.intro.map((p) => (
                <p key={p.slice(0, 32)} className="lede">{p}</p>
              ))}
            </ScrollReveal>
          </div>

          <ul className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {landing.highlights.map((h, i) => (
              <ScrollReveal as="li" key={h.title} delay={i * 60}>
                <div className="h-full rounded-[1.75rem] bg-cream p-8">
                  <p className="font-sans text-[0.75rem] font-medium text-text-dim tabular-nums">0{i + 1}</p>
                  <h3 className="mt-3 font-display font-semibold text-text-primary leading-tight"
                      style={{ fontSize: 'clamp(1.4rem, 1.9vw, 1.65rem)' }}>
                    {h.title}
                  </h3>
                  <p className="mt-3 font-body font-normal text-[0.9375rem] leading-relaxed text-text-secondary">{h.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Productos ── */}
      <section className="bg-cream section-y">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <ScrollReveal>
              <p className="eyebrow">{products.length} referencias</p>
              <h2 className="headline mt-5" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}>
                Referencias <em>en catálogo</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <Link href={`/catalogo?categoria=${landing.category}`} className="link-arrow flex-shrink-0">
                Ver {cat?.labelPlural ?? 'la categoría'} en el catálogo <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </ScrollReveal>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {products.map((item, i) => (
              <li key={item.id}>
                <ProductCard item={item} index={i} aspectRatio="1/1" sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Usos ── */}
      <section className="on-dark bg-ink section-y">
        <div className="container-site text-center">
          <ScrollReveal>
            <p className="eyebrow">Exclusivo B2B</p>
            <h2 className="headline mt-5" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}>
              Pensado <em>para su negocio</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80} className="mt-10 flex flex-wrap justify-center gap-3">
            {landing.uses.map((u) => (
              <span key={u} className="inline-flex items-center gap-2.5 rounded-full border border-cream/15 px-5 py-2.5 font-sans text-[0.9375rem] text-cream/85">
                <Check className="text-gold-light" />
                {u}
              </span>
            ))}
          </ScrollReveal>
          <ScrollReveal className="mt-8">
            <p className="font-sans text-[0.875rem] text-cream/55">
              Venta exclusiva a empresas y por cantidades. No atendemos a particulares ni enviamos muestras.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Preguntas frecuentes ── */}
      <section className="bg-cream section-y">
        <div className="container-site grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
          <ScrollReveal className="lg:sticky lg:top-28">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 className="headline mt-5" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)' }}>
              Lo que nos preguntan <em>los compradores</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <FaqAccordion faqs={landing.faqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Familias relacionadas ── */}
      {related.length > 0 && (
        <section className="bg-paper section-y">
          <div className="container-site">
            <ScrollReveal className="text-center mb-12">
              <h2 className="headline" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
                Complete <em>su presentación</em>
              </h2>
            </ScrollReveal>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((r, i) => (
                <ScrollReveal as="li" key={r.slug} delay={i * 60}>
                  <Link
                    href={`/${r.slug}`}
                    className="group flex flex-col h-full overflow-hidden rounded-[1.75rem] bg-cream transition-colors duration-300 hover:bg-bone"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={encodeImagePath(r.heroImage)}
                        alt={r.heroAlt}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-semibold text-text-primary leading-tight" style={{ fontSize: '1.5rem' }}>
                        {landingH1Text(r)}
                      </h3>
                      <span className="link-arrow mt-3">
                        Ver gama <span className="arrow" aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Cierre ── */}
      <section className="bg-cream section-y">
        <div className="container-site text-center">
          <ScrollReveal>
            <h2 className="headline mx-auto" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', maxWidth: '18ch' }}>
              Pida su <em>presupuesto</em>
            </h2>
            <p className="lede mt-6 mx-auto" style={{ maxWidth: '32rem' }}>
              Cuéntenos qué referencias y qué volumen necesita y le preparamos una propuesta a medida.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100} className="mt-10 flex flex-col items-center gap-5">
            <Link href="/contacto" className="btn btn-primary">Solicitar presupuesto</Link>
            <a href={`tel:${COMPANY.phoneE164}`} className="font-sans text-base font-medium text-text-primary hover:text-gold-deep transition-colors duration-200">
              {COMPANY.phone}
            </a>
            <p className="font-sans text-[0.8125rem] text-text-dim">Lun–Vie · 9:00–19:00 · B2B exclusivo</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

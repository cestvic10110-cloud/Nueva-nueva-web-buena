import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getByCategory } from '@/lib/catalog'
import { CATEGORY_MAP, COMPANY, NAVIDAD_LANDING_PATH, SITE_URL } from '@/lib/constants'
import { encodeImagePath } from '@/lib/utils'
import { safeJsonLd } from '@/lib/jsonld'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { ProductCard } from '@/components/catalog/ProductCard'
import { Check } from '@/components/home/TrustTicker'
import { NavidadFaq, type Faq } from '@/components/navidad/NavidadFaq'

/*
 * Reglas de negocio (spec 2026-11-17): solo envase vacío, nunca lotes preparados;
 * solo por cantidades; sin cifras de pedido mínimo, plazos ni precios ("consúltenos").
 */

export const metadata: Metadata = {
  title: 'Cestas Navideñas de Mimbre al por Mayor para Lotes',
  description:
    'Cestas navideñas de mimbre vacías para preparar lotes de Navidad. Venta exclusiva a empresas y por cantidades. Fabricantes en Valencia desde 1969. Pida presupuesto.',
  alternates: { canonical: NAVIDAD_LANDING_PATH },
}

const WHATSAPP_URL =
  `https://wa.me/${COMPANY.phoneE164.replace('+', '')}?text=` +
  encodeURIComponent('Hola, me gustaría solicitar presupuesto de cestas navideñas al por mayor para la campaña de Navidad.')

const CAMPAIGN = [
  {
    title: 'La cesta, vacía',
    body: 'Usted la llena con su producto. No preparamos lotes ni vendemos cestas con contenido.',
  },
  {
    title: 'Siempre por cantidades',
    body: 'Vendemos por volumen, nunca unidades sueltas. Pedido mínimo según referencia: consúltenos.',
  },
  {
    title: 'Reserve con antelación',
    body: 'Stock garantizado desde septiembre y entrega escalonada en lotes. Plazos según volumen: consúltenos.',
  },
  {
    title: 'Personalización según volumen',
    body: 'Adaptamos los acabados a la identidad de su marca; el alcance depende del volumen del pedido.',
  },
]

const MORE_PACKAGING = [
  { slug: 'bandejas',  image: '/Bandejas/4331.png' },
  { slug: 'baules',    image: '/Baules/7280.png' },
  { slug: 'estuches',  image: '/Estuches/5213.png' },
  { slug: 'embalajes', image: '/Embalajes/8500.png' },
  { slug: 'madera',    image: '/Madera/4788.png' },
] as const

const AUDIENCES = [
  { title: 'Montadores de lotes',          body: 'Cestas y envases en volumen para preparar los lotes de la campaña.' },
  { title: 'Supermercados y distribución', body: 'Suministro para grandes superficies, con logística a centros de distribución.' },
  { title: 'Tiendas gourmet',              body: 'Acabados elegantes para presentar delicatessen, vinos y aceites.' },
  { title: 'Empresas',                     body: 'Para las empresas que preparan sus propios lotes para empleados y clientes.' },
]

const FAQS: Faq[] = [
  {
    q: '¿Venden las cestas con producto o lotes ya preparados?',
    a: 'No. Vendemos únicamente el envase vacío: cestas, bandejas, baúles y estuches para que usted prepare sus lotes con su propio producto. No preparamos lotes.',
  },
  {
    q: '¿Cuál es el pedido mínimo?',
    a: 'Vendemos siempre por cantidades, nunca unidades sueltas. El pedido mínimo depende de la referencia: consúltenos y le indicaremos las condiciones para su pedido.',
  },
  {
    q: '¿Con cuánta antelación debo hacer el pedido?',
    a: 'La campaña de Navidad concentra la demanda, por eso le recomendamos reservar con antelación. Tenemos stock garantizado desde septiembre y entregamos de forma escalonada; los plazos dependen del volumen, consúltenos.',
  },
  {
    q: '¿Pueden personalizar las cestas con mi marca?',
    a: 'Sí. Ofrecemos personalización corporativa adaptada a la identidad de su marca; el nivel de personalización depende del volumen del pedido.',
  },
  {
    q: '¿Venden a particulares o envían muestras?',
    a: 'No. Trabajamos exclusivamente con empresas (B2B) y no enviamos muestras.',
  },
  {
    q: '¿Envían a toda España?',
    a: 'Sí. Fabricamos en nuestro taller de Valencia y distribuimos a toda España.',
  },
]

export default function CestasNavidenasPage() {
  const baskets = getByCategory('cestas-navidenas')
  const url = `${SITE_URL}${NAVIDAD_LANDING_PATH}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Cestas navideñas al por mayor', item: url },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Cestas navideñas de mimbre al por mayor',
        itemListElement: baskets.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${SITE_URL}/catalogo/${b.id}`,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map((f) => ({
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

      {/* ── Portada oscura: texto a la izquierda, cesta vacía a la derecha fundida con el fondo ── */}
      <section className="on-dark relative overflow-hidden bg-ink min-h-[640px] h-dvh max-h-[960px]">
        <div className="absolute inset-0 md:left-auto md:w-[62%]">
          <Image
            src={encodeImagePath('/Cestas Navideñas/2012.png')}
            alt="Cesta navideña de mimbre vacía, lista para preparar lotes"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 62vw"
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{ background: 'linear-gradient(90deg, #0F0D0B 0%, rgba(15,13,11,0.75) 22%, rgba(15,13,11,0) 55%)' }}
          />
          <div className="absolute inset-0 bg-ink/60 md:hidden" />
        </div>

        <div className="relative z-10 h-full container-site flex flex-col justify-center pt-16">
          <div className="max-w-[36rem]">
            <h1 className="hero-rise">
              <span className="eyebrow block">Campaña de Navidad · Venta al por mayor</span>
              <span className="headline block mt-6" style={{ fontSize: 'clamp(2.75rem, 5.6vw, 5.5rem)' }}>
                Cestas de mimbre para <em>lotes de Navidad</em> al por mayor
              </span>
            </h1>
            <p className="lede mt-7 hero-rise" style={{ maxWidth: '32rem', animationDelay: '80ms' }}>
              Fabricamos la cesta vacía para que usted prepare sus lotes. Venta exclusiva a empresas y
              siempre por cantidades, desde nuestro taller de Aielo de Malferit (Valencia) desde 1969.
            </p>
            <div
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 hero-rise"
              style={{ animationDelay: '160ms' }}
            >
              <Link href="/contacto" className="btn btn-light">Solicitar presupuesto</Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="link-arrow">
                Consultar por WhatsApp <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cómo trabajamos la campaña ── */}
      <section className="bg-paper section-y">
        <div className="container-site">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <p className="eyebrow">Condiciones para profesionales</p>
            <h2 className="headline mt-5 mx-auto" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', maxWidth: '20ch' }}>
              Cómo trabajamos <em>la campaña navideña</em>
            </h2>
          </ScrollReveal>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAMPAIGN.map((c, i) => (
              <ScrollReveal as="li" key={c.title} delay={i * 60}>
                <div className="h-full rounded-[1.75rem] bg-cream p-8">
                  <p className="font-sans text-[0.75rem] font-medium text-text-dim tabular-nums">0{i + 1}</p>
                  <h3 className="mt-3 font-display font-semibold text-text-primary leading-tight"
                      style={{ fontSize: 'clamp(1.5rem, 2vw, 1.75rem)' }}>
                    {c.title}
                  </h3>
                  <p className="mt-3 font-body font-normal text-[0.9375rem] leading-relaxed text-text-secondary">{c.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {['Stock permanente', 'Precios escalonados por volumen', 'Distribución a toda España'].map((t) => (
              <span key={t} className="flex items-center gap-2.5 font-sans text-[0.9375rem] text-text-primary">
                <Check />
                {t}
              </span>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Nuestras cestas navideñas ── */}
      <section className="bg-cream section-y">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <ScrollReveal>
              <p className="eyebrow">{baskets.length} referencias</p>
              <h2 className="headline mt-5" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}>
                Nuestras <em>cestas navideñas</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <Link href="/catalogo?categoria=cestas-navidenas" className="link-arrow flex-shrink-0">
                Ver la categoría en el catálogo <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </ScrollReveal>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {baskets.map((item, i) => (
              <li key={item.id}>
                <ProductCard item={item} index={i} aspectRatio="1/1" sizes="(max-width:768px) 50vw, 33vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Más envases para sus lotes ── */}
      <section className="bg-paper section-y">
        <div className="container-site">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <p className="eyebrow">Envases decorativos</p>
            <h2 className="headline mt-5" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}>
              Más envases <em>para sus lotes</em>
            </h2>
            <p className="lede mt-6 mx-auto" style={{ maxWidth: '36rem' }}>
              Además de cestas, fabricamos y suministramos otros envases decorativos para presentar sus lotes.
            </p>
          </ScrollReveal>

          <ul className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {MORE_PACKAGING.map(({ slug, image }, i) => {
              const cat = CATEGORY_MAP[slug]
              return (
                <ScrollReveal as="li" key={slug} delay={(i % 5) * 60}>
                  <Link
                    href={`/catalogo?categoria=${slug}`}
                    className="group flex flex-col h-full overflow-hidden rounded-[1.75rem] bg-cream transition-colors duration-300 hover:bg-bone"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={encodeImagePath(image)}
                        alt={cat.labelPlural}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 50vw, 20vw"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-semibold text-text-primary leading-tight" style={{ fontSize: '1.5rem' }}>
                        {cat.labelPlural}
                      </h3>
                      <p className="mt-1.5 font-body font-normal text-[0.875rem] leading-snug text-text-secondary">{cat.description}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ── Para quién trabajamos ── */}
      <section className="on-dark bg-ink section-y">
        <div className="container-site">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <p className="eyebrow">Exclusivo B2B</p>
            <h2 className="headline mt-5" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}>
              Para quién <em>trabajamos</em>
            </h2>
          </ScrollReveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AUDIENCES.map((a, i) => (
              <ScrollReveal as="li" key={a.title} delay={i * 60}>
                <div className="h-full rounded-[1.75rem] bg-soil p-8">
                  <h3 className="font-display font-semibold text-cream leading-tight" style={{ fontSize: '1.6rem' }}>
                    {a.title}
                  </h3>
                  <p className="mt-3 font-body font-normal text-[0.9375rem] leading-relaxed text-cream/65">{a.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </ul>
          <ScrollReveal className="mt-10 text-center">
            <p className="font-sans text-[0.875rem] text-cream/55">No atendemos a particulares ni preparamos lotes con producto.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Preguntas frecuentes ── */}
      <section className="bg-cream section-y">
        <div className="container-site grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
          <ScrollReveal className="lg:sticky lg:top-28">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 className="headline mt-5" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)' }}>
              Antes de pedir <em>sus cestas de Navidad</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <NavidadFaq faqs={FAQS} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="bg-paper section-y">
        <div className="container-site text-center">
          <ScrollReveal>
            <h2 className="headline mx-auto" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', maxWidth: '18ch' }}>
              Prepare su campaña <em>con tiempo.</em>
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

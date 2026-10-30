import Image from 'next/image'
import Link from 'next/link'
import { encodeImagePath } from '@/lib/utils'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const INDEX_CATEGORIES = [
  { slug: 'cestas-navidenas', num: '01', label: 'Cestas Navideñas', desc: 'Para el lote perfecto',                              image: '/Cestas Navideñas/2012.png' },
  { slug: 'bandejas',         num: '02', label: 'Bandejas',         desc: 'Presentación premium para hostelería y gourmet',     image: '/Bandejas/4331.png' },
  { slug: 'baules',           num: '03', label: 'Baúles',           desc: 'Gran formato para regalos corporativos exclusivos',  image: '/Baules/7280.png' },
  { slug: 'cestas',           num: '04', label: 'Cestas',           desc: 'Mimbre natural premium',                             image: '/Cestas/7424.png' },
  { slug: 'cuevanos',         num: '05', label: 'Cuévanos',         desc: 'Capacidad y resistencia',                            image: '/Forja/4550.png' },
  { slug: 'forja',            num: '06', label: 'Forja & Madera',   desc: 'Materiales complementarios',                         image: '/Forja/9480.png' },
]

export function MaterialIndex() {
  return (
    <section className="bg-paper section-y" aria-label="Nuestras Soluciones">
      <div className="container-site">

        <ScrollReveal className="text-center mb-12 md:mb-16">
          <h2 className="headline" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)' }}>
            Nuestras <em>Soluciones</em>
          </h2>
        </ScrollReveal>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {INDEX_CATEGORIES.map((cat, i) => (
            <ScrollReveal as="li" key={cat.slug} delay={(i % 3) * 60}>
              <Link
                href={`/catalogo?categoria=${cat.slug}`}
                aria-label={`Ver ${cat.label} en el catálogo`}
                className="group flex flex-col h-full overflow-hidden rounded-[1.75rem] bg-cream
                           transition-colors duration-300 hover:bg-bone"
              >
                <div className="px-7 pt-7">
                  <p className="font-sans text-[0.75rem] font-medium text-text-dim tabular-nums">{cat.num}</p>
                  <h3 className="mt-2 font-display font-semibold text-text-primary leading-tight"
                      style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2rem)' }}>
                    {cat.label}
                  </h3>
                  <p className="mt-1.5 font-body font-normal text-[0.9375rem] text-text-secondary">{cat.desc}</p>
                  <span className="link-arrow mt-4">
                    Ver en catálogo <span className="arrow" aria-hidden="true">→</span>
                  </span>
                </div>
                <div className="relative mt-6 mx-7 mb-7 aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={encodeImagePath(cat.image)}
                    alt={cat.label}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal className="mt-10 text-center">
          <Link href="/catalogo" className="link-arrow">
            + Embalajes · Estuches · Madera <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </ScrollReveal>

      </div>
    </section>
  )
}

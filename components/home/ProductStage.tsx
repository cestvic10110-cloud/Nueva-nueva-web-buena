import Link from 'next/link'
import Image from 'next/image'
import { getProduct } from '@/lib/catalog'
import { encodeImagePath } from '@/lib/utils'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const STAGE: { id: string; slug: string; category: string }[] = [
  { id: '2012', slug: 'cestas-navidenas', category: 'Cestas Navideñas' },
  { id: '2017', slug: 'cestas-navidenas', category: 'Cestas Navideñas' },
  { id: '4338', slug: 'bandejas',         category: 'Bandejas' },
  { id: '4523', slug: 'cuevanos',         category: 'Cuévanos' },
  { id: '7262', slug: 'baules',           category: 'Baúles' },
  { id: '4788', slug: 'madera',           category: 'Madera' },
]

export function ProductStage() {
  const items = STAGE.flatMap(({ id, slug, category }) => {
    const product = getProduct(id)
    if (!product) return []
    const name = product.name !== product.id ? product.name : `Ref. ${product.id}`
    return [{ id, slug, category, name, image: product.image }]
  })

  return (
    <section className="bg-cream section-y">
      <div className="container-site">

        {/* Cabecera */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8 mb-12 md:mb-16">
          <ScrollReveal>
            <p className="eyebrow">Catálogo · Valencia, España</p>
            <h2 className="headline mt-5" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)' }}>
              +130 modelos.
              <br />
              <em>Un solo proveedor.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="lede md:text-right">
              Stock permanente.<br />
              Diseño a medida.<br />
              Escala real.
            </p>
          </ScrollReveal>
        </div>

        {/* Productos */}
        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {items.map((item, i) => (
            <ScrollReveal as="li" key={item.id} delay={(i % 3) * 60}>
              <Link
                href={`/catalogo?categoria=${item.slug}`}
                className="group card block overflow-hidden h-full"
              >
                <div className="relative aspect-square overflow-hidden bg-bone">
                  <Image
                    src={encodeImagePath(item.image)}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <p className="font-sans text-[0.75rem] font-medium text-gold-deep">{item.category}</p>
                  <h3 className="mt-1 font-sans text-[0.9375rem] sm:text-base font-medium text-text-primary leading-snug line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-sans text-[0.8125rem] text-text-dim">Ref. {item.id}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </ul>

        {/* Pie */}
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-sans text-[0.9375rem] text-text-secondary">
            <span className="font-semibold text-text-primary">10</span> categorías
            <span className="mx-3 text-sand" aria-hidden="true">|</span>
            Valencia · España
          </p>
          <Link href="/catalogo" className="btn btn-primary">
            Ver catálogo completo <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}

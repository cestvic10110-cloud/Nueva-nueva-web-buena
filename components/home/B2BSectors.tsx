import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const SECTORS = [
  {
    key: 'navidad',
    title: 'Lotes de Navidad',
    body: 'Especialistas en cestas para campaña navideña. Volumen alto, stock garantizado, entregas programadas.',
    image: '/fotos-web/lote-navidad.png',
    tag: 'Campaña navideña',
  },
  {
    key: 'supermercados',
    title: 'Supermercados',
    body: 'Suministro completo para grandes superficies. Logística optimizada a centros de distribución.',
    image: '/fotos-web/supermercados.png',
    tag: 'Gran volumen',
  },
  {
    key: 'gourmet',
    title: 'Gourmet Premium',
    body: 'Acabados elegantes para delicatessen, vinos y aceites. Materiales naturales de primera calidad.',
    image: '/fotos-web/empresas-gourmet.png',
    tag: 'Producto premium',
  },
  {
    key: 'corporativo',
    title: 'Regalo Corporativo',
    body: 'Fidelización premium para empleados y clientes. Asesoramiento experto en selección.',
    image: '/fotos-web/regalo-corporativo.png',
    tag: 'Empresa',
  },
]

export function B2BSectors() {
  return (
    <section className="bg-cream section-y">
      <div className="container-site">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <ScrollReveal>
            <h2 className="headline" style={{ fontSize: 'clamp(2.25rem, 4.8vw, 4.25rem)', maxWidth: '16ch' }}>
              Servimos a las empresas <em>más exigentes de España.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <Link href="/sectores" className="link-arrow flex-shrink-0">
              Ver todos los sectores <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </ScrollReveal>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {SECTORS.map((sector, i) => (
            <ScrollReveal as="li" key={sector.key} delay={(i % 2) * 80}>
              <Link href="/sectores" className="group card block overflow-hidden h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-7 md:p-9">
                  <p className="eyebrow">{sector.tag}</p>
                  <h3 className="mt-3 font-display font-semibold text-text-primary leading-tight"
                      style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.25rem)' }}>
                    {sector.title}
                  </h3>
                  <p className="mt-3 font-body font-normal text-base leading-relaxed text-text-secondary" style={{ maxWidth: '34rem' }}>
                    {sector.body}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </ul>

      </div>
    </section>
  )
}

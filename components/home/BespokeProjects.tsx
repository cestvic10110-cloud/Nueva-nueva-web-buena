import Link from 'next/link'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Check } from './TrustTicker'

const SECTORS = [
  {
    num: '01',
    title: 'Interiorismo & Diseño',
    body: 'Piezas únicas adaptadas al proyecto. Dimensiones, acabados y materiales definidos junto al estudio. Desde muestras individuales hasta series personalizadas.',
    points: ['Prototipos ágiles', 'Acabados personalizados', 'Series con volumen flexible'],
  },
  {
    num: '02',
    title: 'Retail & Gran Distribución',
    body: 'Adaptamos nuestros capazos y cestas a la estética de su firma para campañas de alta gama. Stock permanente con amplia variedad de referencias y reposición garantizada.',
    points: ['Envíos rápidos', 'Logística integrada', 'Precio escalonado por volumen'],
  },
  {
    num: '03',
    title: 'Hostelería de Lujo',
    body: 'Presentadores, cestas de amenities y elementos de sala diseñados con el equipo de F&B. Coherencia estética entre piezas y estándar de durabilidad para uso intensivo.',
    points: ['Diseño exclusivo por establecimiento', 'Resistencia uso profesional', 'Reposición por temporada'],
  },
] as const

export function BespokeProjects() {
  return (
    <section className="bg-paper section-y">
      <div className="container-site">

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-end gap-8 mb-12 md:mb-16">
          <ScrollReveal>
            <p className="eyebrow">Soluciones a Medida</p>
            <h2 className="headline mt-5" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)' }}>
              No solo stock.
              <br />
              <em>Su proyecto,</em> fabricado.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="lede lg:max-w-md lg:ml-auto">
              Trabajamos con estudios de diseño, cadenas de distribución y grupos de hostelería que necesitan algo que no existe en catálogo.
            </p>
          </ScrollReveal>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SECTORS.map((sector, i) => (
            <ScrollReveal as="li" key={sector.num} delay={i * 80}>
              <div className="flex flex-col h-full rounded-[1.75rem] bg-cream p-8 lg:p-10">
                <p className="font-sans text-[0.75rem] font-medium text-text-dim tabular-nums">{sector.num}</p>
                <h3 className="mt-3 font-display font-semibold text-text-primary leading-tight"
                    style={{ fontSize: 'clamp(1.6rem, 2.2vw, 1.9rem)' }}>
                  {sector.title}
                </h3>
                <p className="mt-4 font-body font-normal text-[0.9375rem] leading-relaxed text-text-secondary flex-1">
                  {sector.body}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {sector.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 font-sans text-[0.875rem] text-text-primary">
                      <Check />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link href="/contacto" className="link-arrow mt-8">
                  Consultar disponibilidad <span className="arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </ul>

        {/* Banda de cierre */}
        <ScrollReveal className="mt-5">
          <div className="on-dark rounded-[1.75rem] bg-ink px-8 py-10 md:px-12 md:py-12
                          flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="headline" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}>
                ¿Tiene un proyecto en mente?
              </p>
              <p className="mt-2 font-body font-normal text-[0.9375rem] text-cream/60">
                Cestería en Valencia — distribuimos a toda España.
              </p>
            </div>
            <Link href="/contacto" className="btn btn-light self-start md:self-auto">
              Cuéntenos su proyecto
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

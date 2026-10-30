import { ScrollReveal } from '@/components/shared/ScrollReveal'

const DECADES = [
  {
    year: '1969',
    title: 'Los inicios.',
    body: 'Taller familiar dedicado a la cestería tradicional en Aielo de Malferit, Valencia. El oficio se aprende a mano, pieza a pieza.',
  },
  {
    year: '1985',
    title: 'Expansión B2B.',
    body: 'Ampliación de instalaciones y orientación exclusiva al mercado profesional. Las empresas descubren el valor del mimbre de alta calidad.',
  },
  {
    year: '2000',
    title: 'Modernización.',
    body: 'Nuevas técnicas de producción sin renunciar a la esencia de nuestra marca. Capacidad de respuesta para grandes volúmenes.',
  },
  {
    year: 'Hoy',
    title: 'Referentes.',
    body: 'Proveedor de las empresas más exigentes de España. Gran capacidad productiva con el acabado de máxima calidad que nos define.',
  },
]

export function DecadeStrip() {
  return (
    <section className="bg-paper section-y">
      <div className="container-site">

        <ScrollReveal className="text-center mb-14 md:mb-20">
          <p className="eyebrow">Cestería Vicent · Aielo de Malferit</p>
          <h2 className="headline mt-5" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)' }}>
            Un oficio <em>que dura.</em>
          </h2>
        </ScrollReveal>

        {/* Línea temporal: horizontal en escritorio, vertical en móvil */}
        <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <span
            className="hidden md:block absolute left-0 right-0 top-[0.375rem] h-px bg-sand"
            aria-hidden="true"
          />
          {DECADES.map((era, i) => (
            <ScrollReveal as="li" key={era.year} delay={i * 80} className="relative pl-8 md:pl-0">
              {/* Marca */}
              <span
                className="absolute left-0 top-1 md:relative md:top-auto block w-3 h-3 rounded-full bg-paper border-2 border-gold-deep"
                aria-hidden="true"
              />
              {i < DECADES.length - 1 && (
                <span className="md:hidden absolute left-[0.34rem] top-5 -bottom-10 w-px bg-sand" aria-hidden="true" />
              )}
              <p
                className="md:mt-6 font-display font-semibold lining-nums tabular-nums leading-none text-gold-deep"
                style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
              >
                {era.year}
              </p>
              <h3 className="mt-4 font-sans text-[1.0625rem] font-semibold text-text-primary">
                {era.title}
              </h3>
              <p className="mt-2 font-body font-normal text-[0.9375rem] leading-relaxed text-text-secondary">
                {era.body}
              </p>
            </ScrollReveal>
          ))}
        </ol>

      </div>
    </section>
  )
}

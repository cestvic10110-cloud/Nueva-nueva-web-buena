'use client'

import { motion } from 'motion/react'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const ease = [0.16, 1, 0.3, 1] as const

const CASES = [
  {
    tag: 'Alimentación · Gran Distribución',
    project: 'Campaña Navideña Retail',
    metrics: [
      { value: '15.000', unit: 'uds.', label: 'Volumen' },
      { value: '4',      unit: 'sem.', label: 'Entrega' },
      { value: '3',      unit: 'ref.', label: 'Modelos' },
    ],
    body: 'Cestas navideñas personalizadas con logotipo para una cadena de gran distribución alimentaria. Entrega escalonada en 3 lotes coordinados con campaña de marketing.',
  },
  {
    tag: 'Hostelería · Grupo Hotelero',
    project: 'Amenities & Sala',
    metrics: [
      { value: '2.400', unit: 'uds.', label: 'Volumen' },
      { value: '6',     unit: 'sem.', label: 'Entrega' },
      { value: '100%',  unit: '',     label: 'Exclusivo' },
    ],
    body: 'Piezas de sala exclusivas para cadena hotelera de 4 establecimientos. Diseño adaptado a su identidad de marca con materiales naturales certificados.',
  },
]

const TESTIMONIAL = {
  quote:
    'Llevamos cuatro años trabajando con Cestería Vicent para nuestros lotes de Navidad. La fiabilidad en los plazos y la constancia del stock nos permite planificar campañas de gran volumen sin incertidumbre. Son, sencillamente, los más profesionales del sector.',
  name: 'Miguel Á. Ferrer',
  role: 'Director de Compras',
  company: 'Grupo Distribución Alimentaria (Valencia)',
}

export function SocialProof() {
  return (
    <section className="bg-soil section-pad overflow-hidden">
      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease }}
          >
            <p
              className="font-sans uppercase tracking-[0.3em] mb-3"
              style={{ fontSize: '0.5rem', color: 'var(--color-gold)', opacity: 0.8 }}
            >
              Casos de Éxito
            </p>
            <h2
              className="font-display italic-serif text-cream leading-[0.9]"
              style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
            >
              Resultados<br />
              <span style={{ color: 'rgba(245,240,232,0.45)' }}>que hablan.</span>
            </h2>
          </motion.div>

          <motion.p
            className="font-body leading-relaxed md:max-w-[22rem]"
            style={{ fontSize: '0.875rem', color: 'rgba(245,240,232,0.52)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            Proyectos reales con marcas que confían en Cestería Vicent para sus campañas de mayor visibilidad.
          </motion.p>
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mb-px" style={{ backgroundColor: 'rgba(245,240,232,0.07)' }}>
          {CASES.map((c, i) => (
            <motion.div
              key={c.project}
              className="flex flex-col p-8 lg:p-10"
              style={{ backgroundColor: 'var(--color-soil)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease }}
            >
              {/* Tag */}
              <p
                className="font-sans uppercase tracking-[0.22em] mb-6"
                style={{ fontSize: '0.48rem', color: 'var(--color-gold)', opacity: 0.7 }}
              >
                {c.tag}
              </p>

              {/* Project name */}
              <h3
                className="font-display italic-serif text-cream leading-tight mb-7"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}
              >
                {c.project}
              </h3>

              {/* Metrics row */}
              <div className="flex gap-6 mb-7 pb-7 border-b" style={{ borderColor: 'rgba(245,240,232,0.09)' }}>
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-display font-semibold text-cream leading-none mb-1">
                      <span style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>{m.value}</span>
                      {m.unit && (
                        <span
                          className="font-body ml-1"
                          style={{ fontSize: '0.75rem', color: 'var(--color-gold)', opacity: 0.8 }}
                        >
                          {m.unit}
                        </span>
                      )}
                    </p>
                    <p
                      className="font-sans uppercase tracking-[0.18em]"
                      style={{ fontSize: '0.46rem', color: 'rgba(245,240,232,0.38)' }}
                    >
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Body */}
              <p
                className="font-body leading-relaxed flex-1"
                style={{ fontSize: '0.875rem', color: 'rgba(245,240,232,0.58)' }}
              >
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial strip */}
        <ScrollReveal>
          <div
            className="p-8 lg:p-12"
            style={{ backgroundColor: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.07)' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-start">

              {/* Quote mark */}
              <p
                className="font-display font-semibold text-gold leading-none select-none hidden lg:block"
                style={{ fontSize: '5rem', opacity: 0.25, marginTop: '-0.6rem' }}
                aria-hidden="true"
              >
                "
              </p>

              <div>
                <blockquote
                  className="font-display italic-serif text-cream leading-snug mb-6"
                  style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.45rem)' }}
                >
                  {TESTIMONIAL.quote}
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: 'var(--color-gold)', opacity: 0.4 }} />
                  <div>
                    <p
                      className="font-sans uppercase tracking-[0.16em] text-cream/80"
                      style={{ fontSize: '0.56rem' }}
                    >
                      {TESTIMONIAL.name}
                    </p>
                    <p
                      className="font-body mt-0.5"
                      style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.38)' }}
                    >
                      {TESTIMONIAL.role} · {TESTIMONIAL.company}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

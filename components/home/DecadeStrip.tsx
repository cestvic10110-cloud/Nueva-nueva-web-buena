'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const DECADES = [
  {
    year: '1969',
    title: 'Los inicios.',
    body: 'Taller familiar dedicado a la cestería tradicional en Aielo de Malferit, Valencia. El oficio se aprende a mano, pieza a pieza.',
  },
  {
    year: '1985',
    title: 'Expansión B2B.',
    body: 'Ampliación de instalaciones y orientación exclusiva al mercado profesional. Las empresas descubren el valor del mimbre artesanal.',
  },
  {
    year: '2000',
    title: 'Modernización.',
    body: 'Nuevas técnicas de producción sin renunciar a la esencia artesanal. Capacidad de respuesta para grandes volúmenes.',
  },
  {
    year: 'Hoy',
    title: 'Referentes.',
    body: 'Proveedor de las empresas más exigentes de España. Capacidad industrial con el acabado que solo da el oficio.',
  },
]

const ease = [0.16, 1, 0.3, 1] as const

function EraRow({ era, index }: { era: typeof DECADES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-[auto_1px_1fr] gap-x-8 md:gap-x-14 items-start py-10 md:py-12 border-b"
      style={{ borderColor: 'var(--color-sand)' }}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.08, ease }}
    >
      {/* Año — grande, outline gold */}
      <div className="flex flex-col items-start" style={{ minWidth: 'clamp(5rem, 12vw, 10rem)' }}>
        <span
          className="font-display font-semibold tabular-nums text-stroke-gold leading-none select-none"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
        >
          {era.year}
        </span>
      </div>

      {/* Línea vertical divisora */}
      <div className="self-stretch mt-1" style={{ backgroundColor: 'var(--color-sand)' }} />

      {/* Contenido */}
      <div className="pt-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-6 flex-shrink-0" style={{ backgroundColor: 'var(--color-gold)' }} />
          <p
            className="font-display font-semibold leading-tight"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', color: 'var(--color-text-primary)' }}
          >
            {era.title}
          </p>
        </div>
        <p
          className="font-body leading-relaxed"
          style={{
            fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
            color: 'var(--color-text-secondary)',
            maxWidth: '38rem',
          }}
        >
          {era.body}
        </p>
      </div>
    </motion.div>
  )
}

export function DecadeStrip() {
  return (
    <section className="light-section grain-light section-pad overflow-hidden">
      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
          <motion.p
            className="font-display italic-serif leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-text-primary)' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease }}
          >
            Un oficio que dura.
          </motion.p>
          <motion.p
            className="font-sans uppercase tracking-[0.2em]"
            style={{ fontSize: '0.58rem', color: 'var(--color-text-dim)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            Cestería Vicent · Aielo de Malferit
          </motion.p>
        </div>

        {/* Timeline rows */}
        <div>
          {DECADES.map((era, i) => (
            <EraRow key={era.year} era={era} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

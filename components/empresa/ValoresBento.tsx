'use client'

import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

const VALUES = [
  {
    num: '01',
    title: 'Tradición artesanal',
    body: 'Más de cinco décadas perfeccionando el arte de la cestería valenciana. Un conocimiento que no se puede fabricar en serie.',
    large: true,
  },
  {
    num: '02',
    title: 'Trabajo artesanal',
    body: 'Fabricamos productos a mano y realizamos acabados personalizados en nuestro taller de Aielo de Malferit.',
    large: false,
  },
  {
    num: '03',
    title: 'Gran stock',
    body: 'Inventario permanente para responder con inmediatez a pedidos de gran volumen.',
    large: false,
  },
  {
    num: '04',
    title: 'Calidad garantizada',
    body: 'Selección rigurosa de materias primas y revisión manual de cada unidad.',
    large: false,
  },
  {
    num: '05',
    title: 'Entregas puntuales',
    body: 'Logística comprometida con plazos reales. Sin sorpresas en campaña.',
    large: false,
  },
  {
    num: '06',
    title: 'Atención experta',
    body: 'Asesoramiento personalizado en la selección del modelo y volumen óptimos.',
    large: false,
  },
]

interface CardProps {
  value: typeof VALUES[0]
  index: number
  large?: boolean
}

function ValueCard({ value, index, large = false }: CardProps) {
  return (
    <motion.div
      className={`flex flex-col p-7 lg:p-9 rounded-2xl ${large ? 'justify-between min-h-[280px] sm:min-h-0' : ''}`}
      style={{
        backgroundColor: large ? 'var(--color-sand)' : 'var(--color-lino)',
        border: '1px solid var(--color-sand)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.08, ease }}
    >
      {/* Number */}
      <p
        className="font-display font-semibold tabular-nums text-stroke-gold leading-none select-none mb-5"
        style={{ fontSize: large ? 'clamp(3rem, 6vw, 6rem)' : 'clamp(2rem, 3.5vw, 3.5rem)' }}
        aria-hidden="true"
      >
        {value.num}
      </p>

      {/* Content */}
      <div>
        <div className="h-px mb-4 w-8" style={{ backgroundColor: 'var(--color-gold)', opacity: 0.5 }} />
        <h3
          className={`font-display italic-serif leading-tight mb-3 ${large ? '' : ''}`}
          style={{
            fontSize: large ? 'clamp(1.4rem, 2.5vw, 2.2rem)' : 'clamp(1.05rem, 1.5vw, 1.3rem)',
            color: 'var(--color-text-primary)',
          }}
        >
          {value.title}
        </h3>
        <p
          className="font-body leading-relaxed"
          style={{
            fontSize: large ? 'clamp(0.9rem, 1.2vw, 1rem)' : '0.82rem',
            color: 'var(--color-text-secondary)',
            maxWidth: large ? '28rem' : undefined,
          }}
        >
          {value.body}
        </p>
      </div>
    </motion.div>
  )
}

export function ValoresBento() {
  const [large, ...rest] = VALUES

  return (
    <section className="bg-soil section-pad overflow-hidden">
      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <p
              className="font-sans uppercase tracking-[0.3em] mb-3"
              style={{ fontSize: '0.5rem', color: 'var(--color-gold)', opacity: 0.75 }}
            >
              Nuestros valores
            </p>
            <h2
              className="font-display italic-serif text-cream leading-[0.9]"
              style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
            >
              Calidad en<br />
              <span style={{ color: 'rgba(245,240,232,0.42)' }}>cada detalle.</span>
            </h2>
          </motion.div>
        </div>

        {/*
          Bento grid — 3 columns on md+
          [large: col-span-2 row-span-2] [std] [std]
          [large cont.]                  [std] [std]
          [std: col-span-1]              [std: col-span-2]
        */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          style={{ gridAutoRows: 'minmax(160px, auto)' }}
        >
          {/* LARGE — spans 2 cols × 2 rows */}
          <div className="sm:col-span-2 sm:row-span-2">
            <ValueCard value={large} index={0} large />
          </div>

          {/* std 1 */}
          <div>
            <ValueCard value={rest[0]} index={1} />
          </div>

          {/* std 2 */}
          <div>
            <ValueCard value={rest[1]} index={2} />
          </div>

          {/* std 3 */}
          <div>
            <ValueCard value={rest[2]} index={3} />
          </div>

          {/* std 4 */}
          <div>
            <ValueCard value={rest[3]} index={4} />
          </div>

          {/* std 5 */}
          <div>
            <ValueCard value={rest[4]} index={5} />
          </div>
        </div>

      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

const SECTORS = [
  {
    num: '01',
    title: 'Interiorismo & Diseño',
    body: 'Piezas únicas adaptadas al proyecto. Dimensiones, acabados y materiales definidos junto al estudio. Desde una unidad de muestra hasta series cortas.',
    points: ['Prototipos en 10–15 días', 'Acabados personalizados', 'Series desde 50 uds.'],
    href: '/contacto',
  },
  {
    num: '02',
    title: 'Retail & Gran Distribución',
    body: 'Personalice nuestros capazos y cestas con la identidad y el logotipo de su marca para campañas premium. Stock permanente de más de 108 referencias con reposición garantizada. EDI y pedido mínimo negociable para cadenas y centrales de compra.',
    points: ['Stock disponible 24 h', 'Logística integrada', 'Precio escalonado por volumen'],
    href: '/contacto',
  },
  {
    num: '03',
    title: 'Hostelería de Lujo',
    body: 'Presentadores, cestas de amenities y elementos de sala diseñados con el equipo de F&B. Coherencia estética entre piezas y estándar de durabilidad para uso intensivo.',
    points: ['Diseño exclusivo por establecimiento', 'Resistencia uso profesional', 'Reposición por temporada'],
    href: '/contacto',
  },
] as const

const ease = [0.16, 1, 0.3, 1] as const

export function BespokeProjects() {
  return (
    <section className="light-section grain-light section-pad overflow-hidden">
      <div className="container-site">

        {/* Header editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <motion.p
              className="font-sans uppercase tracking-[0.3em] mb-4"
              style={{ fontSize: '0.52rem', color: 'var(--color-text-dim)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease }}
            >
              Soluciones a Medida
            </motion.p>
            <motion.h2
              className="font-display italic-serif leading-[0.92]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)', color: 'var(--color-text-primary)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease }}
            >
              No solo stock.<br />
              <span style={{ color: 'var(--color-rattan)' }}>Su proyecto,</span> fabricado.
            </motion.h2>
          </div>

          <motion.p
            className="font-body leading-relaxed md:max-w-xs"
            style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)', color: 'var(--color-text-secondary)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            Trabajamos con estudios de diseño, cadenas de distribución y grupos de hostelería que necesitan algo que no existe en catálogo.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-sand)' }}>
          {SECTORS.map((sector, i) => (
            <motion.div
              key={sector.num}
              className="flex flex-col p-8 lg:p-10"
              style={{ backgroundColor: 'var(--color-lino)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease }}
            >
              {/* Number */}
              <p
                className="font-display font-semibold tabular-nums text-stroke-gold leading-none mb-6 select-none"
                style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}
                aria-hidden="true"
              >
                {sector.num}
              </p>

              {/* Title */}
              <h3
                className="font-display italic-serif leading-tight mb-4"
                style={{ fontSize: 'clamp(1.3rem, 2vw, 1.75rem)', color: 'var(--color-text-primary)' }}
              >
                {sector.title}
              </h3>

              {/* Body */}
              <p
                className="font-body leading-relaxed mb-6 flex-1"
                style={{ fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)', color: 'var(--color-text-secondary)' }}
              >
                {sector.body}
              </p>

              {/* Points */}
              <ul className="space-y-2 mb-8">
                {sector.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2.5 font-body"
                    style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}
                  >
                    <span className="mt-[0.3em] flex-shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-gold)' }} aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={sector.href}
                className="group inline-flex items-center gap-2 font-sans uppercase tracking-[0.16em] transition-colors duration-300"
                style={{ fontSize: '0.58rem', color: 'var(--color-gold)' }}
              >
                Consultar disponibilidad
                <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip CTA */}
        <motion.div
          className="mt-px p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          style={{ backgroundColor: 'var(--color-sand)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
        >
          <div>
            <p
              className="font-display italic-serif leading-tight"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)', color: 'var(--color-text-primary)' }}
            >
              ¿Tiene un proyecto en mente?
            </p>
            <p
              className="font-body mt-1.5"
              style={{ fontSize: '0.72rem', color: 'var(--color-text-dim)' }}
            >
              Cestería en Valencia — distribuimos a Madrid, Barcelona y toda España.
            </p>
          </div>
          <Link
            href="/contacto"
            className="font-sans text-[0.72rem] font-medium text-ink bg-gold hover:bg-gold-light
                       transition-colors duration-300 px-8 py-4 squircle-sm
                       tracking-[0.12em] uppercase whitespace-nowrap flex-shrink-0"
          >
            Cuéntenos su proyecto
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const SECTORS = [
  {
    key: 'navidad',
    title: 'Lotes de Navidad',
    body: 'Especialistas en cestas para campaña navideña. Volumen alto, stock garantizado, entregas programadas.',
    image: '/fotos-web/lote-navidad.png',
    href: '/sectores',
    tag: 'Campaña navideña',
  },
  {
    key: 'supermercados',
    title: 'Supermercados',
    body: 'Suministro completo para grandes superficies. Logística optimizada a centros de distribución.',
    image: '/fotos-web/supermercados.png',
    href: '/sectores',
    tag: 'Gran volumen',
  },
  {
    key: 'gourmet',
    title: 'Gourmet Premium',
    body: 'Acabados elegantes para delicatessen, vinos y aceites. Materiales naturales de primera calidad.',
    image: '/fotos-web/empresas-gourmet.png',
    href: '/sectores',
    tag: 'Producto premium',
  },
  {
    key: 'corporativo',
    title: 'Regalo Corporativo',
    body: 'Fidelización premium para empleados y clientes. Asesoramiento experto en selección.',
    image: '/fotos-web/regalo-corporativo.png',
    href: '/sectores',
    tag: 'Empresa',
  },
]

export function B2BSectors() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="light-section grain-light section-pad">
      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <ScrollReveal>
            <h2
              className="font-display italic-serif leading-[0.92]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.8rem)', color: 'var(--color-text-primary)' }}
            >
              Servimos a las empresas<br />
              más exigentes de España.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <Link
              href="/sectores"
              className="font-sans uppercase tracking-[0.18em] link-underline flex-shrink-0"
              style={{ fontSize: '0.6rem', color: 'var(--color-text-secondary)' }}
            >
              Ver todos los sectores →
            </Link>
          </ScrollReveal>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {SECTORS.map((sector, i) => (
            <Link
              key={sector.key}
              href={sector.href}
              className="group relative overflow-hidden squircle block"
              style={{ aspectRatio: '4/3' }}
              onMouseEnter={() => setHovered(sector.key)}
              onMouseLeave={() => setHovered(null)}
              data-cursor-expand
            >
              {/* Photo */}
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />

              {/* Default overlay: subtle bottom gradient + tag + title always visible */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(15,13,11,0.82) 0%, rgba(15,13,11,0.22) 40%, transparent 70%)',
                }}
              />

              {/* Hover overlay — dark, fades in */}
              <AnimatePresence>
                {hovered === sector.key && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundColor: 'rgba(15,13,11,0.55)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>

              {/* Content — always at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">

                {/* Tag */}
                <motion.p
                  className="font-sans uppercase tracking-[0.2em] mb-2"
                  style={{ fontSize: '0.5rem', color: 'var(--color-gold)', opacity: 0.75 }}
                  animate={{ opacity: hovered === sector.key ? 1 : 0.75 }}
                  transition={{ duration: 0.2 }}
                >
                  {sector.tag}
                </motion.p>

                {/* Title — mix-blend-mode: difference → efecto cromático sobre la foto */}
                <h3
                  className="font-display font-semibold text-cream leading-none mb-0"
                  style={{
                    fontSize: 'clamp(1.3rem, 2.8vw, 2.2rem)',
                    mixBlendMode: 'difference',
                  }}
                >
                  {sector.title}
                </h3>

                {/* Body — solo visible en hover, desliza hacia arriba */}
                <motion.p
                  className="font-body text-cream/75 leading-relaxed overflow-hidden"
                  style={{ fontSize: 'clamp(0.8rem, 1.2vw, 0.875rem)' }}
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={
                    hovered === sector.key
                      ? { height: 'auto', opacity: 1, marginTop: '0.625rem' }
                      : { height: 0, opacity: 0, marginTop: 0 }
                  }
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {sector.body}
                </motion.p>

              </div>

              {/* Gold top reveal line */}
              <div
                className="absolute top-0 left-0 right-0 h-[1.5px] origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  backgroundColor: 'var(--color-gold)',
                  transform: hovered === sector.key ? 'scaleX(1)' : 'scaleX(0)',
                }}
              />

              {/* Stagger enter animation */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                style={{ backgroundColor: 'var(--color-lino)' }}
                aria-hidden="true"
              />

            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

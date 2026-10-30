'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

/**
 * Portada a pantalla completa: foto de fondo, degradado oscuro solo en la
 * mitad izquierda (donde va el texto) para que las cestas sigan nítidas.
 */
export function OpeningManifest() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink h-dvh min-h-[600px] max-h-[1100px]">

      {/* Foto */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease }}
      >
        <Image
          src="/images/hero.png"
          alt="Taller de Cestería Vicent, Valencia"
          fill
          priority
          quality={90}
          className="object-cover object-[70%_center]"
          sizes="100vw"
        />
      </motion.div>

      {/* Degradados: izquierda para el texto, arriba para la barra, abajo para el pie */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'linear-gradient(90deg, rgba(15,13,11,0.92) 0%, rgba(15,13,11,0.78) 32%, rgba(15,13,11,0.35) 58%, rgba(15,13,11,0) 78%)',
            'linear-gradient(to bottom, rgba(15,13,11,0.55) 0%, rgba(15,13,11,0) 22%)',
            'linear-gradient(to top, rgba(15,13,11,0.6) 0%, rgba(15,13,11,0) 30%)',
          ].join(', '),
        }}
      />
      {/* En móvil el texto ocupa todo el ancho: oscurecemos de forma uniforme */}
      <div className="absolute inset-0 bg-ink/45 md:hidden pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 h-full container-site flex flex-col justify-center pt-16">
        <div className="max-w-[36rem]">

          <motion.h1
            className="eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease }}
          >
            Fabricantes de Cestas de Mimbre al por Mayor · Desde 1969 · Valencia
          </motion.h1>

          <motion.p
            className="headline mt-6"
            style={{ fontSize: 'clamp(3rem, 6.2vw, 6.25rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease }}
          >
            <em>El Arte de</em>
            <br />
            la Presentación
          </motion.p>

          <motion.p
            className="lede mt-7"
            style={{ maxWidth: '32rem' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7, ease }}
          >
            Medio siglo fabricando el contenedor perfecto para cada producto.
            Calidad de alta gama, diseño a medida y stock permanente —
            exclusivo para marcas exigentes.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease }}
          >
            <Link href="/contacto" className="btn btn-light">
              Solicitar presupuesto
            </Link>
            <Link href="/catalogo" className="link-arrow">
              Ver Catálogo Mayorista <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Pie discreto */}
      <motion.p
        className="absolute z-10 bottom-6 left-0 right-0 container-site font-sans text-[0.8125rem] text-cream/55"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        Cestería Vicent · Est. 1969 · Aielo de Malferit · Valencia
      </motion.p>
    </section>
  )
}

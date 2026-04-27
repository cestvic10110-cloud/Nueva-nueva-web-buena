'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

const ERAS = [
  {
    year: '1969',
    title: 'Los inicios.',
    body: 'Un taller familiar en Aielo de Malferit que comenzó con el oficio más antiguo: trenzar mimbre a mano. El conocimiento se transmitía de generación en generación, pieza a pieza.',
    image: '/FotosWebPersonas/fotoiaio2.png',
    imageAlt: 'Materia prima: fibras de mimbre del Júcar',
  },
  {
    year: '1985',
    title: 'Expansión B2B.',
    body: 'Ampliación de instalaciones y orientación exclusiva al mercado profesional. Las empresas de alimentación y distribución descubren el valor diferencial del mimbre artesanal valenciano.',
    image: '/FotosWebPersonas/Fototreballant.png',
    imageAlt: 'Artesano construyendo una cesta en el taller',
  },
  {
    year: '2000',
    title: 'Modernización.',
    body: 'Nuevas técnicas de producción sin renunciar a la esencia artesanal. Incorporamos capacidad para grandes volúmenes manteniendo el nivel de acabado que nos diferencia.',
    image: '/FotosWebPersonas/Fototaller.png',
    imageAlt: 'Taller modernizado de Cestería Vicent',
  },
  {
    year: 'Hoy',
    title: 'Referentes.',
    body: 'Proveedor de las empresas más exigentes de España. Capacidad industrial con el acabado que solo da cincuenta años de oficio. Stock permanente, personalización y entrega garantizada.',
    image: '/FotosWebPersonas/nave%20ia.jpeg',
    imageAlt: 'Soluciones artesanales de Cestería Vicent',
  },
]

export function HistoriaTimeline() {
  return (
    <section className="light-section grain-light section-pad overflow-hidden">
      <div className="container-site">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 md:mb-20 pb-8"
             style={{ borderBottom: '1px solid var(--color-sand)' }}>
          <motion.p
            className="font-sans uppercase tracking-[0.3em]"
            style={{ fontSize: '0.5rem', color: 'var(--color-text-dim)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Historia
          </motion.p>
          <motion.h2
            className="font-display italic-serif leading-[0.9]"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', color: 'var(--color-text-primary)' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            Un oficio que dura.
          </motion.h2>
        </div>

        {/* Timeline rows */}
        {ERAS.map((era, i) => (
          <div
            key={era.year}
            className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-x-12 lg:gap-x-20
                       items-start py-14 md:py-20 border-b last:border-0"
            style={{ borderColor: 'var(--color-sand)' }}
          >

            {/* LEFT — sticky year */}
            <div className="md:sticky md:top-32 self-start mb-8 md:mb-0">
              <motion.p
                className="font-display font-semibold text-stroke-gold leading-none select-none"
                style={{ fontSize: 'clamp(4rem, 10vw, 8.5rem)' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease }}
              >
                {era.year}
              </motion.p>
              <motion.div
                className="h-px mt-4 origin-left"
                style={{ width: '3.5rem', backgroundColor: 'var(--color-gold)', opacity: 0.55 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.2, ease }}
              />
            </div>

            {/* RIGHT — content scrolls */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.1, ease }}
            >
              <h3
                className="font-display italic-serif leading-tight mb-4"
                style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)', color: 'var(--color-text-primary)' }}
              >
                {era.title}
              </h3>
              <p
                className="font-body leading-relaxed mb-8"
                style={{
                  fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                  color: 'var(--color-text-secondary)',
                  maxWidth: '34rem',
                }}
              >
                {era.body}
              </p>

              {/* Photo */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ 
                  aspectRatio: era.year === '1969' ? 'auto' : '16/9', 
                  backgroundColor: 'var(--color-sand)' 
                }}
              >
                {era.year === '1969' ? (
                  <img
                    src={era.image}
                    alt={era.imageAlt}
                    className="w-full h-auto block"
                  />
                ) : (
                  <Image
                    src={era.image}
                    alt={era.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                )}
              </div>
            </motion.div>

          </div>
        ))}

      </div>
    </section>
  )
}

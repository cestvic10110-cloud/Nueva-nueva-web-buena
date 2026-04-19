'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const


export function OpeningManifest() {
  const containerRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const imgY         = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['0%', '-14%'])
  const scrollDarken = useTransform(scrollYProgress, [0, 0.65], [0, 0.42])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-ink h-dvh min-h-[640px] grain"
    >

      {/* ── LAYER 1: Full-bleed parallax image ── */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: imgY }}>
        <Image
          src="/images/hero.png"
          alt="Taller artesanal de Cestería Vicent, Valencia"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ── LAYER 2: Gradient ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'linear-gradient(105deg, rgba(22,16,12,0.97) 0%, rgba(18,13,10,0.92) 30%, rgba(15,13,11,0.62) 54%, rgba(15,13,11,0.10) 74%, transparent 100%)',
            'linear-gradient(to top, rgba(15,13,11,0.90) 0%, rgba(15,13,11,0.28) 32%, transparent 60%)',
            'linear-gradient(to bottom, rgba(15,13,11,0.70) 0%, transparent 28%)',
          ].join(', '),
        }}
      />

      {/* ── LAYER 3: Scroll darkening ── */}
      <motion.div
        className="absolute inset-0 bg-ink pointer-events-none"
        style={{ opacity: scrollDarken }}
      />

      {/* ── LAYER 4: Content ── */}
      <div className="relative z-10 h-full flex flex-col container-site">

        {/* Nav spacer */}
        <div className="h-16 flex-shrink-0" aria-hidden="true" />

        {/* Center block */}
        <div className="flex-1 flex flex-col justify-center">

          {/* Vertical watermark */}
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90
                       font-sans text-[0.44rem] text-cream/10 tracking-[0.44em] uppercase
                       whitespace-nowrap hidden lg:block select-none"
            aria-hidden="true"
          >
            Cestería Vicent · Est. 1969 · Aielo de Malferit · Valencia
          </span>

          <div className="w-full md:max-w-[58%] lg:max-w-[52%]">

            {/* H1 semántico + eyebrow visual */}
            <motion.h1
              className="font-sans uppercase"
              style={{
                fontSize: '0.58rem',
                letterSpacing: '0.28em',
                color: 'rgba(245,240,232,0.52)',
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease }}
            >
              Fabricantes de Cestas de Mimbre al por Mayor · Desde 1969 · Valencia
            </motion.h1>

            {/* Display text */}
            <p className="leading-none tracking-tight mt-4 mb-8" style={{ fontSize: 'clamp(3.2rem, 8.5vw, 8.5rem)' }}>
              <motion.span
                className="block font-display italic-serif text-cream"
                style={{ lineHeight: 0.9 }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease }}
              >
                El Arte de
              </motion.span>
              <motion.span
                className="block font-display font-semibold text-cream not-italic"
                style={{ lineHeight: 0.92, marginLeft: 'clamp(1.5rem, 3vw, 2.5rem)', marginTop: '0.08em' }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52, duration: 0.7, ease }}
              >
                la Presentación
              </motion.span>
            </p>

            {/* Gold separator */}
            <motion.div
              className="h-px bg-gold/55 mb-7 origin-left"
              style={{ maxWidth: '10rem' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.95, duration: 0.8, ease }}
            />

            {/* Body */}
            <motion.p
              className="font-body text-cream/72 leading-relaxed mb-10"
              style={{ fontSize: 'clamp(0.9rem, 1.35vw, 1.05rem)', maxWidth: '28rem' }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7, ease }}
            >
              Medio siglo fabricando el contenedor perfecto para cada producto.
              Artesanía escalable, diseño a medida y stock permanente —
              exclusivo para marcas exigentes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.6, ease }}
            >
              <Link
                href="/contacto"
                className="font-sans text-[0.7rem] font-medium text-ink bg-gold hover:bg-gold-light
                           transition-colors duration-300 px-7 py-3.5 squircle-sm
                           tracking-[0.1em] uppercase"
              >
                Solicitar presupuesto
              </Link>
              <Link
                href="/catalogo"
                className="font-sans text-[0.72rem] text-cream/60 hover:text-gold
                           transition-colors duration-300 tracking-[0.08em]"
              >
                Ver Catálogo Mayorista <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
            </motion.div>

          </div>
        </div>

        {/* ── Bottom strip ── */}
        <motion.div
          className="pb-8 flex items-end justify-between gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          {/* Scroll cue */}
          <div className="hidden md:flex flex-col items-center gap-2 pb-1">
            <span className="font-sans text-[0.42rem] text-cream/32 tracking-[0.32em] uppercase">
              scroll
            </span>
            <motion.div
              className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent"
              animate={{ scaleY: [0.15, 1, 0.15], opacity: [0.25, 0.85, 0.25] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originY: 0 }}
            />
          </div>
        </motion.div>

      </div>

      {/* Ghost "1969" */}
      <p
        className="absolute bottom-[-0.08em] right-[-0.02em] font-display font-semibold
                   text-cream leading-none pointer-events-none select-none hidden md:block"
        style={{ fontSize: 'clamp(7rem, 20vw, 26rem)', opacity: 0.028 }}
        aria-hidden="true"
      >
        1969
      </p>

    </section>
  )
}

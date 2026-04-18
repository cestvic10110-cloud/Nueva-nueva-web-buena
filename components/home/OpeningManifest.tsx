'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { SectionLabel } from '@/components/shared/SectionLabel'

const ease = [0.16, 1, 0.3, 1] as const

export function OpeningManifest() {
  const containerRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const imgY        = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['0%', '-12%'])
  const scrollDarken = useTransform(scrollYProgress, [0, 0.65], [0, 0.38])

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

      {/* ── LAYER 2: Gradient zones ──
          Far left edge bleeds lino/cream warmth (not pure black).
          Main text zone: heavy dark for legibility.
          Bottom anchor + top nav scrim.
      ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'linear-gradient(100deg, rgba(28,20,16,0.96) 0%, rgba(20,15,11,0.91) 28%, rgba(15,13,11,0.60) 52%, rgba(15,13,11,0.08) 72%, transparent 100%)',
            'linear-gradient(to top, rgba(15,13,11,0.85) 0%, rgba(15,13,11,0.22) 30%, transparent 58%)',
            'linear-gradient(to bottom, rgba(15,13,11,0.65) 0%, transparent 26%)',
          ].join(', '),
        }}
      />

      {/* ── LAYER 3: Scroll-driven extra darkening ── */}
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

          {/* Vertical brand watermark — right edge, lg+ */}
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90
                       font-sans text-[0.44rem] text-cream/12 tracking-[0.44em] uppercase
                       whitespace-nowrap hidden lg:block select-none"
            aria-hidden="true"
          >
            Cestería Vicent · Est. 1969 · Valencia
          </span>

          {/* Text column */}
          <div className="w-full md:max-w-[54%] lg:max-w-[48%]">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease }}
            >
              <SectionLabel>Fabricante B2B · Desde 1969 · Valencia</SectionLabel>
            </motion.div>

            {/* ── TÍTULO ASIMÉTRICO V2 ──
                Línea 1: italic light, izquierda
                Línea 2: upright semibold, desplazada +2.5rem derecha → tensión
            ── */}
            <h1 className="leading-none tracking-tight mt-5 mb-8" style={{ fontSize: 'clamp(3.2rem, 8.5vw, 8.5rem)' }}>
              <motion.span
                className="block font-display italic-serif text-cream"
                style={{ lineHeight: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease }}
              >
                El Arte de
              </motion.span>
              <motion.span
                className="block font-display font-semibold text-cream not-italic"
                style={{ lineHeight: 0.92, marginLeft: 'clamp(1.5rem, 3vw, 2.5rem)', marginTop: '0.08em' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52, duration: 0.7, ease }}
              >
                la Presentación
              </motion.span>
            </h1>

            {/* Gold separator */}
            <motion.div
              className="h-px bg-gold/55 mb-7 origin-left"
              style={{ maxWidth: '10rem' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.95, duration: 0.8, ease }}
            />

            <motion.p
              className="font-body text-cream/75 leading-relaxed mb-10"
              style={{ fontSize: 'clamp(0.9rem, 1.35vw, 1.05rem)', maxWidth: '26rem' }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7, ease }}
            >
              Fabricantes y mayoristas de cestería artesanal. Diseño, personalización y gran volumen exclusivo para marcas exigentes.
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
                           transition-colors duration-300 px-6 py-3.5 squircle-sm
                           tracking-[0.1em] uppercase"
              >
                Solicitar presupuesto
              </Link>
              <Link
                href="/catalogo"
                className="font-sans text-[0.72rem] text-cream/65 hover:text-cream
                           transition-colors duration-300 link-underline decoration-gold/40"
              >
                Ver catálogo →
              </Link>
            </motion.div>

          </div>
        </div>

        {/* ── Bottom strip ── */}
        <motion.div
          className="pb-8 flex items-end justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.7 }}
        >
          {/* Stats clustered — stagger vertical real, no justify-between */}
          <div className="flex flex-col gap-0">
            <div className="flex items-baseline gap-8">
              {/* +50 — baseline 0 */}
              <div>
                <p className="font-display font-semibold text-cream/82 leading-none"
                   style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.4rem)' }}>
                  +50
                </p>
                <p className="font-sans text-[0.48rem] text-cream/48 tracking-[0.2em] uppercase mt-0.5">
                  años
                </p>
              </div>
              {/* 108 — inline, misma row */}
              <div style={{ marginTop: '0.4rem' }}>
                <p className="font-display font-semibold text-cream/82 leading-none"
                   style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.4rem)' }}>
                  108+
                </p>
                <p className="font-sans text-[0.48rem] text-cream/48 tracking-[0.2em] uppercase mt-0.5">
                  modelos
                </p>
              </div>
              {/* B2B — offset extra */}
              <div style={{ marginTop: '0.8rem' }}>
                <p className="font-display font-semibold text-gold/80 leading-none"
                   style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.4rem)' }}>
                  B2B
                </p>
                <p className="font-sans text-[0.48rem] text-cream/48 tracking-[0.2em] uppercase mt-0.5">
                  exclusivo
                </p>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="hidden md:flex flex-col items-center gap-1.5">
            <span className="font-sans text-[0.44rem] text-cream/38 tracking-[0.32em] uppercase">
              scroll
            </span>
            <motion.div
              className="w-px h-8 bg-gradient-to-b from-gold/55 to-transparent"
              animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originY: 0 }}
            />
          </div>
        </motion.div>

      </div>

      {/* Ghost "1969" */}
      <p
        className="absolute bottom-[-0.1em] right-[-0.02em] font-display font-semibold
                   text-cream leading-none pointer-events-none select-none hidden md:block"
        style={{ fontSize: 'clamp(7rem, 19vw, 25rem)', opacity: 0.032 }}
        aria-hidden="true"
      >
        1969
      </p>

    </section>
  )
}

'use client'

import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

const LINES = [
  { text: 'Fabricante',  style: 'italic-serif', weight: '' },
  { text: 'de Cestas',   style: 'italic-serif', weight: 'font-semibold' },
  { text: 'desde 1969.', style: '',             weight: '' },
]

export function HeroEmpresa() {
  return (
    <section className="relative bg-ink grain overflow-hidden h-dvh min-h-[600px] flex flex-col">

      {/* Nav spacer */}
      <div className="h-16 flex-shrink-0" aria-hidden="true" />

      {/* Main text block */}
      <div className="flex-1 flex flex-col justify-center container-site">

        <motion.p
          className="font-sans uppercase tracking-[0.32em] text-cream/35 mb-8"
          style={{ fontSize: '0.5rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          Empresa · Aielo de Malferit, Valencia
        </motion.p>

        <h1 aria-label="Fabricante de Cestas desde 1969" className="leading-[0.88] tracking-tight">
          {LINES.map((line, i) => (
            <motion.span
              key={line.text}
              className={`block font-display ${line.style} ${line.weight} text-cream`}
              style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25 + i * 0.14, ease }}
            >
              {i === 2 ? (
                <>
                  <span className="text-cream/45">desde </span>
                  <span style={{ color: 'var(--color-gold)' }}>1969.</span>
                </>
              ) : (
                line.text
              )}
            </motion.span>
          ))}
        </h1>

        {/* Gold rule */}
        <motion.div
          className="h-px mt-10 origin-left"
          style={{ maxWidth: '8rem', backgroundColor: 'var(--color-gold)', opacity: 0.5 }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.8, ease }}
        />

        {/* Tagline */}
        <motion.p
          className="font-body text-cream/58 leading-relaxed mt-6"
          style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1rem)', maxWidth: '28rem' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease }}
        >
          Cinco décadas de tradición artesanal con la capacidad industrial
          que necesitan las empresas modernas.
        </motion.p>

      </div>

      {/* Scroll cue */}
      <motion.div
        className="flex-shrink-0 pb-10 container-site flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-transparent via-gold/50 to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="font-sans text-[0.42rem] text-cream/30 tracking-[0.4em] uppercase">scroll</span>
      </motion.div>

      {/* Ghost year — bottom right */}
      <p
        className="absolute bottom-[-0.08em] right-[-0.02em] font-display font-semibold
                   text-cream leading-none pointer-events-none select-none hidden md:block"
        style={{ fontSize: 'clamp(8rem, 20vw, 26rem)', opacity: 0.028 }}
        aria-hidden="true"
      >
        1969
      </p>

    </section>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate, useReducedMotion } from 'motion/react'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const ease = [0.16, 1, 0.3, 1] as const

export function StatementNumbers() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduced    = useReducedMotion()
  const isInView   = useInView(sectionRef, { once: true, margin: '-60px' })

  const c50  = useMotionValue(0)
  const c108 = useMotionValue(0)
  const c10  = useMotionValue(0)

  const d50  = useTransform(c50,  (v) => Math.round(v).toString())
  const d108 = useTransform(c108, (v) => Math.round(v).toString())
  const d10  = useTransform(c10,  (v) => Math.round(v).toString())

  useEffect(() => {
    if (!isInView) return
    if (reduced) { c50.set(50); c108.set(108); c10.set(10); return }
    const a  = animate(c50,  50,  { duration: 1.8, ease })
    const b  = animate(c108, 108, { duration: 2.0, ease, delay: 0.1 })
    const cc = animate(c10,  10,  { duration: 1.1, ease, delay: 0.22 })
    return () => { a.stop(); b.stop(); cc.stop() }
  }, [isInView, reduced, c50, c108, c10])

  return (
    <section ref={sectionRef} className="light-section grain-light section-pad">
      <div className="container-site">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-end">

          {/* ── LEFT: Frase editorial ── */}
          <div>
            <ScrollReveal>
              <p
                className="font-display italic-serif leading-[0.92] tracking-tight"
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)',
                  color: 'var(--color-text-primary)',
                }}
              >
                Medio siglo fabricando<br />
                el contenedor perfecto<br />
                para su producto.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px opacity-60" style={{ width: '3rem', backgroundColor: 'var(--color-gold)' }} />
                <p
                  className="font-sans uppercase tracking-[0.2em]"
                  style={{ fontSize: '0.58rem', color: 'var(--color-text-secondary)' }}
                >
                  Valencia, España · Exclusivo B2B
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* ── RIGHT: Tres números con stagger vertical real ──
              Cada fila está desplazada +0.75rem a la derecha vs la anterior.
              No es un grid uniforme — la asimetría es deliberada.
          ── */}
          <div className="flex flex-col gap-0">

            {/* +50 — baseline 0 */}
            <motion.div
              className="flex items-start justify-between pb-7 border-b"
              style={{ borderColor: 'var(--color-sand)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="flex items-start leading-none gap-1">
                <span
                  className="font-display font-light"
                  style={{ fontSize: 'clamp(1.2rem, 3vw, 2.2rem)', marginTop: '0.15em', color: 'var(--color-gold)', lineHeight: 1 }}
                >
                  +
                </span>
                <motion.span
                  className="font-display font-semibold tabular-nums text-stroke-gold"
                  style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: 0.88 }}
                >
                  {d50}
                </motion.span>
              </div>
              <div className="text-right self-end mb-1">
                <p className="font-sans uppercase tracking-[0.16em] leading-snug"
                   style={{ fontSize: '0.58rem', color: 'var(--color-text-secondary)' }}>
                  años<br />de oficio
                </p>
              </div>
            </motion.div>

            {/* 108+ — desplazado 0.75rem a la derecha */}
            <motion.div
              className="flex items-start justify-between py-7 border-b"
              style={{ borderColor: 'var(--color-sand)', paddingLeft: '0.75rem' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <div className="flex items-end leading-none gap-1">
                <motion.span
                  className="font-display font-semibold tabular-nums"
                  style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: 0.88, color: 'var(--color-text-primary)' }}
                >
                  {d108}
                </motion.span>
                <span
                  className="font-display font-light"
                  style={{ fontSize: 'clamp(1.2rem, 3vw, 2.2rem)', marginBottom: '0.3em', color: 'var(--color-gold)' }}
                >
                  +
                </span>
              </div>
              <div className="text-right self-end mb-1">
                <p className="font-sans uppercase tracking-[0.16em] leading-snug"
                   style={{ fontSize: '0.58rem', color: 'var(--color-text-secondary)' }}>
                  modelos<br />en catálogo
                </p>
              </div>
            </motion.div>

            {/* 24h — desplazado 1.5rem a la derecha */}
            <motion.div
              className="flex items-start justify-between pt-7"
              style={{ paddingLeft: '1.5rem' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.22, ease }}
            >
              <span
                className="font-display font-semibold leading-none"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: 0.88, color: 'var(--color-text-primary)' }}
              >
                24h
              </span>
              <div className="text-right self-end mb-1">
                <p className="font-sans uppercase tracking-[0.16em] leading-snug"
                   style={{ fontSize: '0.58rem', color: 'var(--color-text-secondary)' }}>
                  respuesta<br />garantizada
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}

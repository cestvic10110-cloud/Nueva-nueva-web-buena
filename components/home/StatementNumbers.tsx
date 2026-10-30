'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate, useReducedMotion } from 'motion/react'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { TrustFacts } from './TrustTicker'

const ease = [0.16, 1, 0.3, 1] as const

function Counter({ to, start }: { to: number; start: boolean }) {
  const reduced = useReducedMotion()
  const value = useMotionValue(0)
  const display = useTransform(value, (v) => Math.round(v).toString())

  useEffect(() => {
    if (!start) return
    if (reduced) { value.set(to); return }
    const a = animate(value, to, { duration: 1.8, ease })
    return () => a.stop()
  }, [start, reduced, to, value])

  return <motion.span>{display}</motion.span>
}

export function StatementNumbers() {
  const statsRef = useRef<HTMLDivElement>(null)
  const inView = useInView(statsRef, { once: true, margin: '-80px' })

  const stats = [
    { value: <>+<Counter to={50} start={inView} /></>, label: 'años de oficio' },
    { value: <><Counter to={130} start={inView} />+</>, label: 'modelos en catálogo' },
    { value: 'B2B', label: 'Servicio Exclusivo' },
  ]

  return (
    <section className="bg-paper section-y border-t border-sand/60">
      <div className="container-site">

        <ScrollReveal className="text-center">
          <p className="eyebrow">Valencia, España · Exclusivo B2B</p>
          <h2 className="headline mt-5 mx-auto" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', maxWidth: '22ch' }}>
            Medio siglo fabricando el contenedor perfecto <em>para su producto.</em>
          </h2>
        </ScrollReveal>

        {/* Cifras */}
        <div
          ref={statsRef}
          className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-sand"
        >
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 80} className="py-6 sm:py-2 text-center">
              <p
                className="font-display font-semibold lining-nums tabular-nums leading-none text-text-primary"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)' }}
              >
                {s.value}
              </p>
              <p className="mt-3 font-sans text-[0.9375rem] text-text-secondary">{s.label}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Garantías */}
        <ScrollReveal className="mt-16 md:mt-20 card p-8 md:p-10">
          <TrustFacts />
        </ScrollReveal>

      </div>
    </section>
  )
}

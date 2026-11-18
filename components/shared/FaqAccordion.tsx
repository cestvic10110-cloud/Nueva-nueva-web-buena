'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

export interface Faq {
  q: string
  a: string
}

/** Acordeón con todas las respuestas montadas (altura 0 al cerrar), para que estén en el HTML. */
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="card px-6 md:px-9" role="list">
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <div key={faq.q} role="listitem" className="border-b border-sand/70 last:border-0">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-acc-answer-${i}`}
              id={`faq-acc-question-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer"
            >
              <span className="font-sans text-[1.0625rem] font-medium leading-snug text-text-primary">
                {faq.q}
              </span>
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full bg-cream flex items-center justify-center
                           text-text-primary transition-transform duration-300"
                style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                aria-hidden="true"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            <motion.div
              id={`faq-acc-answer-${i}`}
              role="region"
              aria-labelledby={`faq-acc-question-${i}`}
              aria-hidden={!isOpen}
              inert={!isOpen}
              initial={false}
              animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              style={{ overflow: 'hidden' }}
            >
              <p className="font-body font-normal text-[0.9375rem] leading-relaxed text-text-secondary pb-7 pr-10">
                {faq.a}
              </p>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}

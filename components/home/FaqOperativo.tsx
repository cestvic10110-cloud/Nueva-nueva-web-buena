'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const ease = [0.16, 1, 0.3, 1] as const

const FAQS = [
  {
    q: '¿Ofrecen personalización corporativa en las cestas?',
    a: 'Sí. En Cestería Vicent ofrecemos personalización corporativa adaptada a la identidad de su marca. El nivel de personalización dependerá del volumen del pedido, pudiendo desarrollar soluciones más completas en producciones de mayor cantidad. Trabajamos con empresas que buscan una presentación cuidada y diferenciadora. Solicite su propuesta sin compromiso.',
  },
  {
    q: '¿Cuáles son los tiempos de entrega para grandes volúmenes?',
    a: 'Ofrecemos plazos de entrega ágiles en pedidos de stock. Para grandes volúmenes, adaptamos los tiempos según las necesidades del cliente, organizando la producción y las entregas de forma planificada para asegurar la continuidad del suministro. Solicite información personalizada.',
  },
  {
    q: '¿Fabricáis en España? ¿Cuál es el origen de los materiales?',
    a: 'Sí. Fabricamos en nuestro propio taller en Valencia desde 1969. El mimbre que utilizamos procede principalmente de Cuenca (España) y Chile, seleccionando cuidadosamente cada materia prima para garantizar calidad y continuidad de suministro. Esto nos permite ofrecer un producto fiable y con trazabilidad para nuestros clientes.',
  },
  {
    q: '¿Trabajáis únicamente con grandes cuentas o también con pymes?',
    a: 'Trabajamos exclusivamente con empresas (B2B), tanto pymes como grandes cuentas. No vendemos a particulares. Desde una pequeña empresa gourmet que necesita cestas de temporada hasta una cadena de distribución con pedidos anuales de decenas de miles de unidades: adaptamos condiciones, plazos y logística al volumen real de cada cliente.',
  },
]

export function FaqOperativo() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-cream section-y">

      {/* JSON-LD FAQ schema para AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      <div className="container-site grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">

        <ScrollReveal className="lg:sticky lg:top-28">
          <p className="eyebrow">Preguntas Frecuentes</p>
          <h2 className="headline mt-5" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)' }}>
            Lo que necesita
            <br />
            <em>saber antes de comprar.</em>
          </h2>
          <p className="lede mt-6" style={{ maxWidth: '26rem' }}>
            Respuestas directas a las dudas más habituales de compradores profesionales y responsables de compras.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="card px-6 md:px-9" role="list">
            {FAQS.map((faq, i) => {
              const isOpen = open === i
              return (
                <div key={faq.q} role="listitem" className="border-b border-sand/70 last:border-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
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

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        role="region"
                        aria-labelledby={`faq-question-${i}`}
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="font-body font-normal text-[0.9375rem] leading-relaxed text-text-secondary pb-7 pr-10">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const ease = [0.16, 1, 0.3, 1] as const

const FAQS = [
  {
    q: '¿Cuál es el pedido mínimo para ventas al por mayor?',
    a: 'El pedido mínimo varía según la referencia: para cestas y baúles, desde 50 unidades por modelo; para embalajes y bandejas, desde 100 unidades. Somos fabricantes directos en Valencia, lo que nos permite ofrecer precios escalonados competitivos desde lotes pequeños hasta pedidos de varios miles de unidades. Consulte nuestra tarifa 2026 para condiciones exactas por referencia.',
  },
  {
    q: '¿Ofrecen personalización corporativa en las cestas?',
    a: 'Sí. Ofrecemos personalización mediante serigrafía, estampación en caliente, etiquetado corporativo y acabados exclusivos adaptados a su identidad de marca. Trabajamos con interioristas, cadenas de retail y grupos de hostelería que necesitan piezas únicas. El tiempo de muestra es de 10 a 15 días; las series personalizadas desde 50 unidades. Contáctenos con su briefing para recibir propuesta sin compromiso.',
  },
  {
    q: '¿Cuáles son los tiempos de entrega para grandes volúmenes?',
    a: 'Para pedidos de stock estándar (referencias disponibles en almacén), el plazo es de 24 a 48 horas en península. Para pedidos a medida o volúmenes superiores a 5.000 unidades, trabajamos con entregas escalonadas en 3 a 6 semanas según complejidad. Disponemos de stock permanente de más de 108 referencias para garantizar reposición continuada a nuestros clientes B2B.',
  },
  {
    q: '¿Fabricáis en España? ¿Cuál es el origen de los materiales?',
    a: 'Fabricamos íntegramente en nuestro taller de Aielo de Malferit, Valencia, desde 1969. El mimbre proviene de riberas locales del Júcar y de proveedores europeos certificados. Todos nuestros materiales son fibras naturales 100% sostenibles, sin tratamientos químicos agresivos. Esto nos diferencia de distribuidores de producto importado y nos permite ofrecer trazabilidad completa del origen.',
  },
  {
    q: '¿Trabajáis únicamente con grandes cuentas o también con pymes?',
    a: 'Trabajamos exclusivamente con empresas (B2B), tanto pymes como grandes cuentas. No vendemos a particulares. Desde una pequeña empresa gourmet que necesita cestas de temporada hasta una cadena de distribución con pedidos anuales de decenas de miles de unidades: adaptamos condiciones, plazos y logística al volumen real de cada cliente.',
  },
]

export function FaqOperativo() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section className="light-section grain-light section-pad">

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

      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-18">
          <ScrollReveal>
            <p
              className="font-sans uppercase tracking-[0.3em] mb-3"
              style={{ fontSize: '0.5rem', color: 'var(--color-text-dim)' }}
            >
              Preguntas Frecuentes
            </p>
            <h2
              className="font-display italic-serif leading-[0.92]"
              style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', color: 'var(--color-text-primary)' }}
            >
              Lo que necesita<br />
              <span style={{ color: 'var(--color-rattan)' }}>saber antes de comprar.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p
              className="font-body leading-relaxed md:max-w-[22rem]"
              style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}
            >
              Respuestas directas a las dudas más habituales de compradores profesionales y responsables de compras.
            </p>
          </ScrollReveal>
        </div>

        {/* Accordion */}
        <div role="list">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 40}>
              <div
                role="listitem"
                className="border-b"
                style={{ borderColor: 'var(--color-sand)' }}
              >
                <button
                  type="button"
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left
                             cursor-pointer group"
                >
                  <span
                    className="font-display leading-snug transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
                      color: open === i ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                    }}
                  >
                    {faq.q}
                  </span>

                  {/* Icon */}
                  <span
                    className="flex-shrink-0 mt-1 transition-transform duration-300 text-gold/70 group-hover:text-gold"
                    style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="font-body leading-relaxed pb-7"
                        style={{
                          fontSize: 'clamp(0.875rem, 1.15vw, 1rem)',
                          color: 'var(--color-text-secondary)',
                          maxWidth: '62rem',
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

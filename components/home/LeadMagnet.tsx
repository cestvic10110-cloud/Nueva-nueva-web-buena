'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Check } from './TrustTicker'

const ease = [0.16, 1, 0.3, 1] as const

const BENEFITS = [
  'Precios especiales por volumen 2026',
  'Referencias completas con dimensiones',
  'Personalización a medida en todo el catálogo',
  'Novedades y colección navideña',
  'Acceso directo a su gestor comercial',
]

export function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setStatus('loading')

    try {
      const response = await fetch('/api/send-catalog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, company }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
      } else {
        console.error('Server error:', data.error)
        setErrorMsg(data.error || 'Error al enviar')
        setStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setErrorMsg('Error de conexión')
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-xl bg-white/[0.06] border border-cream/15 px-4 py-3.5 font-body font-normal text-[0.9375rem] text-cream ' +
    'placeholder-cream/35 outline-none transition-colors duration-200 focus:border-gold-light focus:bg-white/[0.09]'

  return (
    <section className="bg-paper section-y">
      <div className="container-site">
        <ScrollReveal>
          <div className="on-dark rounded-[2rem] md:rounded-[2.5rem] bg-ink px-6 py-12 sm:px-10 md:px-14 md:py-16
                          grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">

            {/* Oferta */}
            <div>
              <p className="eyebrow">Catálogo 2026 · PDF · 4.2 MB</p>
              <h2 className="headline mt-5" style={{ fontSize: 'clamp(2.25rem, 4.2vw, 3.75rem)' }}>
                El catálogo que los
                <br />
                <em>profesionales exigen.</em>
              </h2>
              <p className="lede mt-6" style={{ maxWidth: '30rem' }}>
                Descargue nuestro catálogo de venta al por mayor 2026 y descubra soluciones de presentación sostenibles.
              </p>
              <ul className="mt-8 space-y-3">
                {BENEFITS.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-[0.9375rem] text-cream/85">
                    <Check className="text-gold-light" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Formulario */}
            <div className="rounded-[1.5rem] bg-white/[0.04] border border-cream/10 p-7 md:p-9">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center text-center py-8"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease }}
                  >
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-gold/15">
                      <svg width="22" height="17" viewBox="0 0 22 17" fill="none" aria-hidden="true">
                        <path d="M2 8l6 6L20 2" stroke="var(--color-gold-light)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="headline" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)' }}>
                      En camino.
                    </p>
                    <p className="mt-3 font-body font-normal text-[0.9375rem] leading-relaxed text-cream/65">
                      Hemos recibido su solicitud.<br />
                      Le enviaremos el catálogo y la lista de precios a la mayor brevedad posible.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    noValidate
                  >
                    <p className="eyebrow mb-6">Acceso profesional · Sin coste</p>

                    <label htmlFor="lead-email" className="block mb-2 font-sans text-[0.8125rem] font-medium text-cream/70">
                      Correo corporativo
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nombre@empresa.com"
                      required
                      autoComplete="email"
                      className={inputClass}
                    />

                    <label htmlFor="lead-company" className="block mt-5 mb-2 font-sans text-[0.8125rem] font-medium text-cream/70">
                      Empresa
                    </label>
                    <input
                      id="lead-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Nombre de su empresa"
                      autoComplete="organization"
                      className={inputClass}
                    />

                    <button
                      type="submit"
                      disabled={status === 'loading' || !email || !email.includes('@')}
                      className="btn btn-light w-full mt-7 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? 'Enviando…' : status === 'error' ? `Error: ${errorMsg}` : 'Recibir catálogo gratuito'}
                    </button>

                    <p className="mt-4 text-center font-body font-normal text-[0.8125rem] text-cream/45">
                      Sin spam. Solo comunicaciones B2B. Puede darse de baja en cualquier momento.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

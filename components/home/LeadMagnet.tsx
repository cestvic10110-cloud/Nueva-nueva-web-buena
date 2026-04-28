'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

export function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

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

  const [errorMsg, setErrorMsg] = useState<string>('')

  return (
    <section className="bg-soil section-pad overflow-hidden relative">

      {/* Background texture number */}
      <p
        className="absolute right-[-0.05em] bottom-[-0.15em] font-display font-semibold
                   text-cream leading-none pointer-events-none select-none"
        style={{ fontSize: 'clamp(12rem, 28vw, 28rem)', opacity: 0.025 }}
        aria-hidden="true"
      >
        2026
      </p>

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">

          {/* Left: offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease }}
          >
            {/* Catalog mockup */}
            <div
              className="inline-flex items-center gap-3 mb-8 px-4 py-3 rounded"
              style={{ backgroundColor: 'rgba(181,132,58,0.10)', border: '1px solid rgba(181,132,58,0.22)' }}
            >
              {/* PDF icon */}
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" aria-hidden="true">
                <rect x="0.5" y="0.5" width="11" height="15" rx="1.5" stroke="currentColor" strokeOpacity="0.6" className="text-gold" />
                <path d="M12 1l5 5v15a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h10z" stroke="currentColor" strokeOpacity="0.35" className="text-gold" fill="none" />
                <path d="M12 1v5h5" stroke="currentColor" strokeOpacity="0.55" className="text-gold" fill="none" />
              </svg>
              <span
                className="font-sans uppercase tracking-[0.18em]"
                style={{ fontSize: '0.52rem', color: 'var(--color-gold)' }}
              >
                Catálogo 2026 · PDF · 4.2 MB
              </span>
            </div>

            <h2
              className="font-display italic-serif text-cream leading-[0.92] mb-5"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3.8rem)' }}
            >
              El catálogo que los<br />profesionales exigen.
            </h2>

            <p
              className="font-body text-cream/62 leading-relaxed mb-8"
              style={{ fontSize: 'clamp(0.875rem, 1.15vw, 1rem)', maxWidth: '32rem' }}
            >
              Descargue nuestro catálogo de venta al por mayor 2026 y descubra soluciones de presentación sostenibles.
            </p>

            <ul className="space-y-3">
              {[
                'Precios especiales por volumen 2026',
                'Referencias completas con dimensiones',
                'Personalización a medida en todo el catálogo',
                'Novedades y colección navideña',
                'Acceso directo a su gestor comercial',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-[0.3em] flex-shrink-0 w-1 h-1 rounded-full"
                    style={{ backgroundColor: 'var(--color-gold)' }}
                    aria-hidden="true"
                  />
                  <span
                    className="font-body"
                    style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.65)' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <div
              className="relative p-8 lg:p-10 rounded-2xl overflow-hidden"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,240,232,0.08)' }}
            >
              {/* Card grain */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.018]"
                   style={{ backgroundImage: "url('/grain.png')", backgroundSize: '180px 180px' }} />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center text-center py-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease }}
                  >
                    {/* Check */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                      style={{ backgroundColor: 'rgba(181,132,58,0.15)', border: '1px solid rgba(181,132,58,0.3)' }}
                    >
                      <svg width="22" height="17" viewBox="0 0 22 17" fill="none" aria-hidden="true">
                        <path d="M2 8l6 6L20 2" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p
                      className="font-display italic-serif text-cream mb-3"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
                    >
                      En camino.
                    </p>
                    <p
                      className="font-body leading-relaxed"
                      style={{ fontSize: '0.875rem', color: 'rgba(245,240,232,0.58)' }}
                    >
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
                    <p
                      className="font-sans uppercase tracking-[0.22em] mb-6"
                      style={{ fontSize: '0.5rem', color: 'var(--color-gold)', opacity: 0.8 }}
                    >
                      Acceso profesional · Sin coste
                    </p>

                    <h3
                      className="font-display text-cream leading-tight mb-8"
                      style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)' }}
                    >
                      El catálogo que los<br />profesionales exigen.
                    </h3>

                    {/* Email field */}
                    <div className="mb-4">
                      <label
                        htmlFor="lead-email"
                        className="font-sans uppercase tracking-[0.15em] block mb-2"
                        style={{ fontSize: '0.52rem', color: 'rgba(245,240,232,0.5)' }}
                      >
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
                        className="w-full bg-transparent font-body text-cream placeholder-cream/25
                                   border-b border-cream/20 focus:border-gold outline-none
                                   transition-colors duration-300 pb-3 text-sm"
                      />
                    </div>

                    {/* Company field */}
                    <div className="mb-8">
                      <label
                        htmlFor="lead-company"
                        className="font-sans uppercase tracking-[0.15em] block mb-2"
                        style={{ fontSize: '0.52rem', color: 'rgba(245,240,232,0.5)' }}
                      >
                        Empresa
                      </label>
                      <input
                        id="lead-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Nombre de su empresa"
                        autoComplete="organization"
                        className="w-full bg-transparent font-body text-cream placeholder-cream/25
                                   border-b border-cream/20 focus:border-gold outline-none
                                   transition-colors duration-300 pb-3 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading' || !email || !email.includes('@')}
                      className="w-full font-sans text-[0.72rem] font-medium text-ink bg-gold
                                 hover:bg-gold-light disabled:opacity-30 disabled:cursor-not-allowed
                                 transition-all duration-300 px-8 py-4 squircle-sm
                                 tracking-[0.12em] uppercase cursor-pointer"
                    >
                      {status === 'loading' ? 'Enviando…' : status === 'error' ? `Error: ${errorMsg}` : 'Recibir catálogo gratuito'}
                    </button>

                    <p
                      className="font-body text-center mt-4"
                      style={{ fontSize: '0.72rem', color: 'rgba(245,240,232,0.32)' }}
                    >
                      Sin spam. Solo comunicaciones B2B. Puede darse de baja en cualquier momento.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

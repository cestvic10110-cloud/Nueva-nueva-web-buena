'use client'

import { motion } from 'motion/react'
import { COMPANY } from '@/lib/constants'

const ease = [0.16, 1, 0.3, 1] as const

const CONTACT_ROWS = [
  {
    label: 'Dirección',
    value: `${COMPANY.address}\n${COMPANY.postalCode} ${COMPANY.city}\n${COMPANY.province}, España`,
  },
  {
    label: 'Teléfono / WhatsApp',
    value: COMPANY.phone,
  },
  {
    label: 'Email',
    value: COMPANY.email,
  },
  {
    label: 'Horario B2B',
    value: 'Lunes – Viernes\n9:00 – 19:00 h',
  },
]

/* Mapa centrado en la ficha de Google del almacén */
const MAP_SRC = `${COMPANY.mapUrl.replace('/?', '/maps?')}&z=16&hl=es&output=embed`

export function UbicacionContacto() {
  return (
    <section className="light-section grain-light section-pad overflow-hidden">
      <div className="container-site">

        {/* Section label */}
        <motion.p
          className="font-sans uppercase tracking-[0.3em] mb-14"
          style={{ fontSize: '0.5rem', color: 'var(--color-text-dim)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
        >
          Ubicación · Cestería Vicent
        </motion.p>

        {/* Asymmetric 40/60 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 xl:gap-20 items-start">

          {/* ── LEFT: texto ── */}
          <div>
            <motion.h2
              className="font-display italic-serif leading-[0.9] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', color: 'var(--color-text-primary)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease }}
            >
              Nuestro<br />
              <span style={{ color: 'var(--color-rattan)' }}>Almacén.</span>
            </motion.h2>

            {/* Gold divider */}
            <motion.div
              className="h-px mb-10"
              style={{ maxWidth: '3.5rem', backgroundColor: 'var(--color-gold)', opacity: 0.45 }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
            />

            {/* Contact rows */}
            <motion.div
              className="space-y-7"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.2, ease }}
            >
              {CONTACT_ROWS.map(({ label, value }) => (
                <div key={label}>
                  <p
                    className="font-sans uppercase tracking-[0.2em] mb-1"
                    style={{ fontSize: '0.5rem', color: 'var(--color-text-dim)' }}
                  >
                    {label}
                  </p>
                  <p
                    className="font-body leading-relaxed whitespace-pre-line"
                    style={{ fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)', color: 'var(--color-text-secondary)' }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Cómo llegar link */}
            <motion.a
              href={COMPANY.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 mt-10 font-sans uppercase
                         tracking-[0.18em] transition-colors duration-300 hover:text-gold"
              style={{ fontSize: '0.58rem', color: 'var(--color-gold)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.35, ease }}
            >
              {/* Pin icon */}
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
                <path
                  d="M6 0C3.239 0 1 2.239 1 5c0 3.5 5 9 5 9s5-5.5 5-9c0-2.761-2.239-5-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="currentColor"
                />
              </svg>
              Cómo llegar
              <span
                className="transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              >
                →
              </span>
            </motion.a>
          </div>

          {/* ── RIGHT: mapa ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.1, ease }}
          >
            {/* Gold accent top */}
            <div
              className="h-px mb-0"
              style={{ backgroundColor: 'var(--color-gold)', opacity: 0.4 }}
            />

            {/* Map frame — squircle + colour filters */}
            <div
              className="squircle-lg overflow-hidden relative"
              style={{
                border: '1px solid var(--color-border-light)',
                boxShadow: '0 12px 48px rgba(15,13,11,0.08)',
              }}
            >
              <iframe
                title="Ubicación Cestería Vicent — Aielo de Malferit, Valencia"
                src={MAP_SRC}
                width="100%"
                height="440"
                style={{
                  display: 'block',
                  border: 0,
                  filter: 'grayscale(0.1) contrast(0.95) sepia(0.05)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Subtle vignette overlay — blends map into lino palette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, transparent 60%, rgba(237,232,222,0.18) 100%)',
                }}
                aria-hidden="true"
              />
            </div>

            {/* Caption */}
            <p
              className="font-sans mt-3 text-right"
              style={{ fontSize: '0.52rem', color: 'var(--color-text-dim)', letterSpacing: '0.12em' }}
            >
              Aielo de Malferit · Valencia · España
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'

const STORAGE_KEY = 'cv_cookie_consent'

type ConsentValue = 'all' | 'rejected' | null

export function CookieBanner() {
  const [consent, setConsent] = useState<ConsentValue | 'loading'>('loading')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentValue | null
    setConsent(stored)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'all')
    setConsent('all')
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setConsent('rejected')
  }

  const visible = consent === null

  if (consent === 'loading') return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Aviso de cookies"
          className="fixed bottom-4 inset-x-4 md:inset-x-auto md:left-auto md:right-6 md:max-w-md z-[var(--z-modal)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="squircle overflow-hidden"
            style={{
              backgroundColor: 'rgba(250,247,242,0.97)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--color-border-light)',
              boxShadow: '0 8px 40px rgba(15,13,11,0.14)',
            }}
          >
            {/* Gold top accent */}
            <div className="h-px" style={{ backgroundColor: 'var(--color-gold)', opacity: 0.5 }} />

            <div className="px-6 py-5">
              {/* Label */}
              <p
                className="font-sans uppercase tracking-[0.22em] mb-2"
                style={{ fontSize: '0.48rem', color: 'var(--color-gold)' }}
              >
                Cookies · RGPD
              </p>

              {/* Copy */}
              <p
                className="font-body leading-relaxed mb-5"
                style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}
              >
                Utilizamos cookies propias y de terceros para fines analíticos y para mostrarte
                publicidad personalizada en base a un perfil elaborado a partir de tus hábitos de
                navegación.{' '}
                <Link
                  href="/cookies"
                  className="transition-colors duration-200 hover:text-gold"
                  style={{ color: 'var(--color-text-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                >
                  Más información
                </Link>
                .
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Primary */}
                <button
                  onClick={accept}
                  className="font-sans text-[0.65rem] font-medium tracking-[0.12em] uppercase
                             px-5 py-2.5 squircle-sm transition-colors duration-300
                             text-ink bg-gold hover:bg-gold-light flex-shrink-0"
                >
                  Aceptar todas
                </button>

                {/* Secondary */}
                <button
                  onClick={reject}
                  className="font-sans text-[0.65rem] font-medium tracking-[0.12em] uppercase
                             px-5 py-2.5 squircle-sm transition-colors duration-300 flex-shrink-0"
                  style={{
                    border: '1px solid var(--color-border-light)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Rechazar
                </button>

                {/* Tertiary */}
                <Link
                  href="/cookies"
                  className="font-sans text-[0.65rem] tracking-[0.1em] uppercase transition-colors
                             duration-200 hover:text-gold ml-auto"
                  style={{ color: 'var(--color-text-dim)' }}
                >
                  Configurar →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

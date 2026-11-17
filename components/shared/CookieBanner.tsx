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
          className="fixed bottom-3 inset-x-3 md:bottom-4 md:inset-x-auto md:left-auto md:right-6 md:max-w-md z-[var(--z-modal)]"
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

            {/* Compacto en móvil para no tapar los botones de la portada */}
            <div className="px-4 py-3.5 md:px-6 md:py-5">
              {/* Label */}
              <p className="eyebrow mb-2 hidden md:block">
                Cookies · RGPD
              </p>

              {/* Copy */}
              <p
                className="font-body leading-snug md:leading-relaxed mb-3 md:mb-5 text-[0.75rem] md:text-[0.8125rem]"
                style={{ color: 'var(--color-text-secondary)' }}
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
              <div className="flex items-center gap-2 md:gap-3">
                {/* Primary */}
                <button
                  onClick={accept}
                  className="btn btn-primary btn-sm flex-shrink-0 cursor-pointer"
                >
                  Aceptar todas
                </button>

                {/* Secondary */}
                <button
                  onClick={reject}
                  className="btn btn-outline btn-sm flex-shrink-0 cursor-pointer"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Rechazar
                </button>

                {/* Tertiary */}
                {/* En móvil ya está el enlace "Más información" del texto */}
                <Link
                  href="/cookies"
                  className="hidden md:inline font-sans text-[0.7rem] tracking-[0.1em] uppercase transition-colors
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

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { encodeImagePath } from '@/lib/utils'
import { getWhatsAppUrl } from '@/lib/catalog'
import { CATEGORY_MAP } from '@/lib/constants'
import type { CatalogItem, ProductVariant } from '@/lib/types'

interface Props {
  item: CatalogItem | null
  onClose: () => void
}

const ease = [0.16, 1, 0.3, 1] as const

export function ProductDetailDrawer({ item, onClose }: Props) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null)
  const [imgError, setImgError] = useState(false)

  /* Reset state when item changes */
  useEffect(() => {
    if (item) {
      setSelectedVariant(item.variants[0] ?? null)
      setImgError(false)
    }
  }, [item?.id])

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (item) document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [item, onClose])

  /* Lock body scroll when open */
  useEffect(() => {
    document.body.style.overflow = item ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [item])

  const categoryMeta = item ? CATEGORY_MAP[item.category] : null
  const waUrl = item ? getWhatsAppUrl(item, selectedVariant?.reference) : '#'

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[60]"
            style={{ backgroundColor: 'rgba(15,13,11,0.52)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.aside
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-label={`Detalle: ${item.name}`}
            className="fixed top-0 right-0 bottom-0 z-[61] flex flex-col overflow-hidden"
            style={{
              width: 'min(480px, 92vw)',
              backgroundColor: 'var(--color-lino)',
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease }}
          >

            {/* Image top block */}
            <div className="relative flex-shrink-0" style={{ aspectRatio: '4/3', backgroundColor: 'var(--color-sand)' }}>
              {!imgError ? (
                <Image
                  src={encodeImagePath(item.image)}
                  alt={item.name}
                  fill
                  className="object-cover object-center"
                  sizes="480px"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-display font-semibold text-stroke-gold"
                     style={{ fontSize: '3rem' }}>
                    {item.id}
                  </p>
                </div>
              )}

              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center
                           rounded-full transition-colors duration-200 cursor-pointer"
                style={{ backgroundColor: 'rgba(15,13,11,0.55)', color: '#F5F0E8' }}
                aria-label="Cerrar detalle"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>

              {/* Category chip */}
              <div className="absolute bottom-4 left-4">
                <span
                  className="font-sans uppercase tracking-[0.2em] px-2.5 py-1 rounded"
                  style={{
                    fontSize: '0.46rem',
                    backgroundColor: 'rgba(15,13,11,0.62)',
                    color: 'var(--color-gold)',
                  }}
                >
                  {categoryMeta?.labelPlural ?? item.category}
                </span>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 py-6" style={{ scrollbarWidth: 'thin' }}>

              {/* Title */}
              <div className="mb-1">
                <p
                  className="font-sans uppercase tracking-[0.18em] mb-2"
                  style={{ fontSize: '0.48rem', color: 'var(--color-text-dim)' }}
                >
                  Ref. {item.id}
                </p>
                <h2
                  className="font-display italic-serif leading-tight"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: 'var(--color-text-primary)' }}
                >
                  {item.name !== item.id ? item.name : categoryMeta?.label ?? item.category}
                </h2>
              </div>

              {/* Dimensions */}
              {item.dimensions && (
                <p
                  className="font-body mt-3 mb-5"
                  style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}
                >
                  {item.dimensions}
                </p>
              )}

              <div className="h-px mb-5" style={{ backgroundColor: 'var(--color-sand)' }} />

              {/* Variants */}
              {item.variants.length > 0 && (
                <div className="mb-6">
                  <p
                    className="font-sans uppercase tracking-[0.2em] mb-3"
                    style={{ fontSize: '0.48rem', color: 'var(--color-text-dim)' }}
                  >
                    {item.variants.length > 1 ? `${item.variants.length} Medidas disponibles` : 'Medida'}
                  </p>

                  <div className="space-y-1.5">
                    {item.variants.map((v) => {
                      const isSelected = selectedVariant?.reference === v.reference
                      return (
                        <button
                          key={v.reference}
                          type="button"
                          onClick={() => setSelectedVariant(v)}
                          className="w-full text-left flex items-center justify-between
                                     px-4 py-3 transition-all duration-200 cursor-pointer"
                          style={{
                            backgroundColor: isSelected ? 'rgba(181,132,58,0.10)' : 'rgba(28,20,16,0.04)',
                            borderLeft: isSelected ? '2px solid var(--color-gold)' : '2px solid transparent',
                            borderRadius: '2px',
                          }}
                        >
                          <div>
                            <p
                              className="font-body tabular-nums leading-snug"
                              style={{
                                fontSize: '0.82rem',
                                color: isSelected ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                                fontWeight: isSelected ? 500 : 400,
                              }}
                            >
                              {v.name || v.reference}
                            </p>
                            {v.dimensions && (
                              <p
                                className="font-body"
                                style={{ fontSize: '0.72rem', color: 'var(--color-text-dim)' }}
                              >
                                {v.dimensions}
                              </p>
                            )}
                          </div>
                          <span
                            className="font-sans tabular-nums flex-shrink-0 ml-4"
                            style={{
                              fontSize: '0.6rem',
                              color: isSelected ? 'var(--color-gold)' : 'var(--color-text-dim)',
                              letterSpacing: '0.12em',
                            }}
                          >
                            {v.reference}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Price if present */}
              {item.price && (
                <p
                  className="font-body mb-6"
                  style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}
                >
                  {item.price}
                </p>
              )}

            </div>

            {/* Fixed bottom CTAs */}
            <div
              className="flex-shrink-0 px-6 py-5 space-y-3 border-t"
              style={{ borderColor: 'var(--color-sand)', backgroundColor: 'var(--color-lino)' }}
            >
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full
                           font-sans text-[0.7rem] font-medium text-ink bg-gold hover:bg-gold-light
                           transition-colors duration-300 px-6 py-4 squircle-sm
                           tracking-[0.12em] uppercase"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar presupuesto
              </a>

              <Link
                href={`/catalogo/${item.id}`}
                className="flex items-center justify-center w-full font-sans text-[0.65rem]
                           tracking-[0.14em] uppercase transition-colors duration-300 py-3"
                style={{ color: 'var(--color-text-dim)' }}
                onClick={onClose}
              >
                Ver ficha completa →
              </Link>
            </div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

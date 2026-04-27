'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { encodeImagePath } from '@/lib/utils'
import { getWhatsAppUrl } from '@/lib/catalog'
import { CATEGORY_MAP } from '@/lib/constants'
import { ProductCard } from './ProductCard'
import type { CatalogItem, ProductVariant } from '@/lib/types'

interface Props {
  item: CatalogItem
  related: CatalogItem[]
}

export function ProductDetail({ item, related }: Props) {
  const [imgError, setImgError]  = useState(false)
  const [selected, setSelected]  = useState<ProductVariant | null>(
    item.variants.length === 1 ? item.variants[0] : null
  )

  const categoryMeta = CATEGORY_MAP[item.category]
  const waUrl        = getWhatsAppUrl(item, selected?.reference)
  const displayName  = item.name !== item.id ? item.name : `Referencia ${item.id}`

  return (
    <div className="light-section grain-light min-h-dvh pt-16">
      <div className="container-site section-pad">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-10 font-sans text-[0.6rem] tracking-[0.18em] uppercase">
          <Link
            href="/catalogo"
            className="transition-colors duration-200 hover:text-gold"
            style={{ color: 'var(--color-text-dim)' }}
          >
            Catálogo
          </Link>
          <span style={{ color: 'var(--color-sand)' }}>·</span>
          <Link
            href={`/catalogo?categoria=${item.category}`}
            className="transition-colors duration-200 hover:text-gold"
            style={{ color: 'var(--color-text-dim)' }}
          >
            {categoryMeta?.labelPlural ?? item.category}
          </Link>
          <span style={{ color: 'var(--color-sand)' }}>·</span>
          <span style={{ color: 'var(--color-text-secondary)' }}>Ref. {item.id}</span>
        </nav>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 xl:gap-20 items-start">

          {/* ── LEFT: Image ── */}
          <div className="lg:sticky lg:top-24">
            <div
              className="relative overflow-hidden rounded-2xl"
            >
              {!imgError ? (
                <Image
                  src={encodeImagePath(selected?.image || item.image)}
                  alt={displayName}
                  width={1200}
                  height={1200}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-px" style={{ backgroundColor: 'var(--color-gold)', opacity: 0.3 }} />
                  <p
                    className="font-display font-semibold tabular-nums text-stroke-gold"
                    style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', opacity: 0.35 }}
                  >
                    {item.id}
                  </p>
                  <div className="w-12 h-px" style={{ backgroundColor: 'var(--color-gold)', opacity: 0.3 }} />
                </div>
              )}

              {/* Gold top accent */}
              <div className="absolute top-0 left-0 right-0 h-px"
                   style={{ backgroundColor: 'var(--color-gold)', opacity: 0.45 }} />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="font-sans text-[0.5rem] tracking-[0.2em] uppercase px-2.5 py-1.5 rounded"
                  style={{
                    backgroundColor: 'rgba(237,232,222,0.88)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--color-gold)',
                  }}
                >
                  {categoryMeta?.labelPlural ?? item.category}
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Details ── */}
          <div>

            {/* Ref */}
            <p
              className="font-sans uppercase tracking-[0.28em] mb-3"
              style={{ fontSize: '0.58rem', color: 'var(--color-text-dim)' }}
            >
              Ref. {item.id}
            </p>

            {/* Name */}
            <h1
              className="font-display italic-serif leading-[0.92] tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: 'var(--color-text-primary)' }}
            >
              {displayName}
            </h1>

            {/* Gold rule */}
            <div className="h-px mb-8" style={{ maxWidth: '5rem', backgroundColor: 'var(--color-gold)', opacity: 0.4 }} />

            {/* Dimensions summary */}
            {item.dimensions && (
              <div className="mb-8">
                <p
                  className="font-sans uppercase tracking-[0.18em] mb-1.5"
                  style={{ fontSize: '0.58rem', color: 'var(--color-text-dim)' }}
                >
                  Dimensiones
                </p>
                <p className="font-body text-sm leading-relaxed"
                   style={{ color: 'var(--color-text-secondary)' }}>
                  {item.dimensions}
                </p>
              </div>
            )}

            {/* Variants table */}
            {item.variants.length > 0 && (
              <div className="mb-10">
                <p
                  className="font-sans uppercase tracking-[0.18em] mb-3"
                  style={{ fontSize: '0.58rem', color: 'var(--color-text-dim)' }}
                >
                  {item.variants.length === 1 ? 'Referencia' : 'Modelos disponibles'}
                </p>

                <div
                  className="divide-y overflow-hidden rounded-xl"
                  style={{ border: '1px solid var(--color-sand)', '--tw-divide-opacity': 1 } as React.CSSProperties}
                >
                  {item.variants.map((v) => {
                    const isSelected = selected?.reference === v.reference
                    return (
                      <button
                        key={v.reference}
                        type="button"
                        onClick={() => setSelected(isSelected ? null : v)}
                        className="w-full flex items-center justify-between px-4 py-3.5 text-left
                                   transition-colors duration-200 cursor-pointer"
                        style={{
                          backgroundColor: isSelected ? 'rgba(181,132,58,0.08)' : 'transparent',
                          borderLeft: isSelected ? '2px solid var(--color-gold)' : '2px solid transparent',
                          borderBottomColor: 'var(--color-sand)',
                        }}
                      >
                        <span
                          className="font-body tabular-nums tracking-wide"
                          style={{
                            fontSize: '0.78rem',
                            color: isSelected ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                            fontWeight: isSelected ? 500 : 400,
                          }}
                        >
                          {v.reference}
                          {v.name && v.name !== v.reference && (
                            <span className="ml-2" style={{ color: 'var(--color-text-dim)', fontWeight: 400 }}>
                              {v.name}
                            </span>
                          )}
                        </span>
                        <span
                          className="font-body ml-4 text-right flex-shrink-0"
                          style={{ fontSize: '0.7rem', color: 'var(--color-text-dim)' }}
                        >
                          {v.dimensions}
                        </span>
                      </button>
                    )
                  })}
                </div>

                {item.variants.length > 1 && (
                  <p
                    className="font-sans tracking-[0.12em] mt-2"
                    style={{ fontSize: '0.55rem', color: 'var(--color-text-dim)' }}
                  >
                    {selected
                      ? `Seleccionado: ${selected.reference}`
                      : 'Seleccione un modelo para presupuesto específico'}
                  </p>
                )}
              </div>
            )}

            {/* B2B notice */}
            <div
              className="px-4 py-3.5 mb-8 rounded-xl"
              style={{ backgroundColor: 'rgba(181,132,58,0.06)', border: '1px solid rgba(181,132,58,0.18)' }}
            >
              <p
                className="font-sans tracking-[0.1em] leading-relaxed"
                style={{ fontSize: '0.6rem', color: 'var(--color-text-secondary)' }}
              >
                Servicio exclusivo <span style={{ color: 'var(--color-gold)' }}>B2B</span> ·
                Precio bajo consulta según volumen
              </p>
            </div>

            {/* CTA WhatsApp */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full
                         font-sans text-[0.72rem] font-medium tracking-[0.12em] uppercase
                         text-ink bg-gold hover:bg-gold-light
                         transition-colors duration-300 px-6 py-4 squircle-sm mb-4"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar presupuesto
              {selected && item.variants.length > 1 && (
                <span className="opacity-60 font-normal">· {selected.reference}</span>
              )}
            </a>

            <Link
              href="/contacto"
              className="flex items-center justify-center w-full font-sans uppercase
                         tracking-[0.1em] transition-colors duration-200 py-3 hover:text-gold"
              style={{ fontSize: '0.68rem', color: 'var(--color-text-dim)' }}
            >
              Otras consultas →
            </Link>

          </div>
        </div>

        {/* ── Related products ── */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t" style={{ borderColor: 'var(--color-sand)' }}>
            <div className="flex items-baseline justify-between mb-8">
              <p
                className="font-sans uppercase tracking-[0.24em]"
                style={{ fontSize: '0.58rem', color: 'var(--color-text-dim)' }}
              >
                Más de esta categoría
              </p>
              <Link
                href={`/catalogo?categoria=${item.category}`}
                className="font-sans uppercase tracking-[0.18em] transition-colors duration-200 hover:text-gold"
                style={{ fontSize: '0.58rem', color: 'var(--color-gold)', opacity: 0.7 }}
              >
                Ver todos →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {related.map((r, i) => (
                <ProductCard key={r.id} item={r} index={i} onSelect={() => {}} />
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--color-sand)' }}>
          <Link
            href="/catalogo"
            className="font-sans uppercase tracking-[0.18em] transition-colors duration-200 hover:text-gold"
            style={{ fontSize: '0.62rem', color: 'var(--color-text-dim)' }}
          >
            ← Volver al catálogo
          </Link>
        </div>

      </div>
    </div>
  )
}

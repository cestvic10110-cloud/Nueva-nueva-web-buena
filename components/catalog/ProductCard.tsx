'use client'

import { useState } from 'react'
import Image from 'next/image'
import { encodeImagePath } from '@/lib/utils'
import { CATEGORY_MAP } from '@/lib/constants'
import type { CatalogItem } from '@/lib/types'

interface Props {
  item: CatalogItem
  index: number
  onSelect: (item: CatalogItem) => void
  aspectRatio?: string
  sizes?: string
}

export function ProductCard({ item, index, onSelect, aspectRatio = '4/3', sizes = '(max-width:640px) 48vw, (max-width:1024px) 32vw, 24vw' }: Props) {
  const [imgError, setImgError] = useState(false)
  const categoryMeta = CATEGORY_MAP[item.category]
  const displayName  = item.name !== item.id ? item.name : null

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="group text-left w-full cursor-pointer"
      aria-label={`Ver detalle: ${displayName ?? `Ref. ${item.id}`}`}
    >
      {/* Image container */}
      <div className="relative overflow-hidden">
        <div className="relative" style={{ aspectRatio }}>

          {!imgError ? (
            <Image
              src={encodeImagePath(item.image)}
              alt={displayName ?? `Ref. ${item.id}`}
              fill
              className="object-contain object-center
                         transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]
                         group-hover:scale-[1.05]"
              sizes={sizes}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div className="w-6 h-px" style={{ backgroundColor: 'var(--color-gold)', opacity: 0.4 }} />
              <p
                className="font-display font-semibold tabular-nums"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--color-text-dim)', opacity: 0.4 }}
              >
                {item.id}
              </p>
              <div className="w-6 h-px" style={{ backgroundColor: 'var(--color-gold)', opacity: 0.4 }} />
            </div>
          )}

          {/* Gold top reveal line */}
          <div
            className="absolute top-0 left-0 right-0 h-px origin-left
                       scale-x-0 group-hover:scale-x-100
                       transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ backgroundColor: 'var(--color-gold)' }}
          />

          {/* Hover scrim + CTA */}
          <div
            className="absolute inset-0 flex flex-col justify-end p-3
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(to top, rgba(15,13,11,0.78) 0%, transparent 60%)' }}
          >
            <p
              className="font-sans text-[0.6rem] tracking-[0.12em] uppercase text-center
                         text-cream py-2 translate-y-2 group-hover:translate-y-0
                         transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              Ver detalle
            </p>
          </div>

        </div>
      </div>

      {/* Meta */}
      <div className="mt-4">
        <p
          className="font-sans uppercase tracking-[0.2em] mb-1"
          style={{ fontSize: '0.5rem', color: 'var(--color-text-dim)' }}
        >
          {categoryMeta?.labelPlural ?? item.category}
        </p>
        {displayName && (
          <p
            className="font-body leading-snug mb-0.5 line-clamp-1"
            style={{ fontSize: '0.78rem', color: 'var(--color-text-primary)' }}
          >
            {displayName}
          </p>
        )}
        <p
          className="font-body tabular-nums"
          style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)' }}
        >
          Ref. {item.id}
          {item.variants.length > 1 && (
            <span style={{ marginLeft: '0.4rem', color: 'var(--color-gold)', opacity: 0.75 }}>
              · {item.variants.length} medidas
            </span>
          )}
        </p>
      </div>
    </button>
  )
}

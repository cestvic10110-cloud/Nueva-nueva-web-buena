'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'motion/react'
import { getProduct } from '@/lib/catalog'
import { encodeImagePath } from '@/lib/utils'
import type { CatalogItem } from '@/lib/types'

// Four products confirmed to exist in public/
const STAGE_ITEMS = [
  { id: '2012', category: 'Cestas Navideñas', slug: 'cestas-navidenas', span: 'hero'   },
  { id: '7232', category: 'Baúles',           slug: 'baules',           span: 'wide'   },
  { id: '4333', category: 'Bandejas',         slug: 'bandejas',         span: 'small'  },
  { id: '7425', category: 'Cestas',           slug: 'cestas',           span: 'accent' },
]

type StageEntry = { item: CatalogItem; category: string; slug: string; span: string }

export function ProductStage() {
  const [hovered, setHovered] = useState<string | null>(null)

  const products = STAGE_ITEMS
    .map(({ id, category, slug, span }) => ({ item: getProduct(id), category, slug, span }))
    .filter((p): p is StageEntry => p.item !== undefined)

  const hero   = products.find(p => p.span === 'hero')
  const wide   = products.find(p => p.span === 'wide')
  const small  = products.find(p => p.span === 'small')
  const accent = products.find(p => p.span === 'accent')

  if (!hero || !wide) return null

  return (
    <section className="bg-bark section-pad overflow-hidden relative">

      {/* Ghost "108" — background design element */}
      <p
        className="absolute right-[-0.05em] top-1/2 -translate-y-1/2 font-display font-semibold
                   text-cream leading-none pointer-events-none select-none"
        style={{ fontSize: 'clamp(14rem, 30vw, 32rem)', opacity: 0.032 }}
        aria-hidden="true"
      >
        108
      </p>

      <div className="container-site relative z-10">

        {/* Editorial headline — asimétrico V2 */}
        <div className="relative mb-3">
          <motion.h2
            className="font-display italic-serif text-cream leading-none"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            108<br />
            <span className="text-cream/65">modelos.</span>
          </motion.h2>

          {/* Texto secundario: anclado a la derecha del texto principal, no al borde */}
          <motion.p
            className="font-display italic-serif text-cream/38 md:absolute md:bottom-1 md:left-[clamp(12rem,28vw,28rem)]"
            style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.9rem)', marginTop: '0.5rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          >
            Un solo<br />proveedor.
          </motion.p>
        </div>

        {/* Gold rule */}
        <motion.div
          className="h-px bg-gold/25 mb-8 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Editorial product grid */}
        <div className="grid grid-cols-12 gap-2 md:gap-3 items-start">

          {/* HERO — left 5 cols, tall portrait */}
          <div className="col-span-12 md:col-span-5 row-span-2">
            <StageCard
              item={hero.item}
              category={hero.category}
              slug={hero.slug}
              aspectRatio="3/4"
              isHovered={hovered === hero.item.id}
              onEnter={() => setHovered(hero.item.id)}
              onLeave={() => setHovered(null)}
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>

          {/* WIDE — top right, 7 cols, landscape */}
          <div className="col-span-12 md:col-span-7">
            <StageCard
              item={wide.item}
              category={wide.category}
              slug={wide.slug}
              aspectRatio="16/9"
              isHovered={hovered === wide.item.id}
              onEnter={() => setHovered(wide.item.id)}
              onLeave={() => setHovered(null)}
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>

          {/* Bottom row — right 7 cols split */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-2 md:gap-3">

            {/* SMALL — left of bottom row */}
            {small && (
              <div style={{ marginTop: '1.5rem' }}>
                <StageCard
                  item={small.item}
                  category={small.category}
                  slug={small.slug}
                  aspectRatio="4/3"
                  isHovered={hovered === small.item.id}
                  onEnter={() => setHovered(small.item.id)}
                  onLeave={() => setHovered(null)}
                  sizes="(max-width: 768px) 50vw, 29vw"
                />
              </div>
            )}

            {/* ACCENT — right of bottom row, offset down */}
            {accent && (
              <div style={{ marginTop: '0.5rem' }}>
                <StageCard
                  item={accent.item}
                  category={accent.category}
                  slug={accent.slug}
                  aspectRatio="5/4"
                  isHovered={hovered === accent.item.id}
                  onEnter={() => setHovered(accent.item.id)}
                  onLeave={() => setHovered(null)}
                  sizes="(max-width: 768px) 50vw, 29vw"
                />
              </div>
            )}

          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-10 pt-7 border-t border-border-dark">
          <p className="font-sans text-[0.58rem] text-cream/48 tracking-[0.22em] uppercase hidden md:block">
            10 categorías &nbsp;·&nbsp; Valencia, España
          </p>
          <Link
            href="/catalogo"
            className="font-sans text-sm text-cream/58 hover:text-gold transition-colors duration-300 group ml-auto"
          >
            Ver catálogo completo
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}

function StageCard({
  item,
  category,
  slug,
  aspectRatio,
  isHovered,
  onEnter,
  onLeave,
  sizes,
}: {
  item:        CatalogItem
  category:    string
  slug:        string
  aspectRatio: string
  isHovered:   boolean
  onEnter:     () => void
  onLeave:     () => void
  sizes:       string
}) {
  return (
    <Link
      href={`/catalogo?categoria=${slug}`}
      className="group cursor-none block"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      data-cursor-expand
    >
      {/* Category label */}
      <p className={`
        font-sans text-[0.55rem] tracking-[0.22em] uppercase mb-2
        transition-colors duration-300
        ${isHovered ? 'text-gold' : 'text-cream/52'}
      `}>
        {category}
      </p>

      {/* Image container */}
      <div
        className="relative overflow-hidden squircle-sm"
        style={{ aspectRatio, backgroundColor: 'var(--color-bark)' }}
      >
        <Image
          src={encodeImagePath(item.image)}
          alt={category}
          fill
          className={`
            object-cover object-center
            transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isHovered ? 'scale-105' : 'scale-100'}
          `}
          sizes={sizes}
        />

        {/* Gold top reveal line */}
        <div
          className="absolute top-0 left-0 right-0 h-[1.5px] bg-gold origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: isHovered ? 'scaleX(1)' : 'scaleX(0)' }}
        />

        {/* Subtle vignette at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
      </div>

      {/* Ref */}
      <p className={`
        font-body tabular-nums text-[0.58rem] tracking-[0.18em] uppercase mt-2.5
        transition-colors duration-300
        ${isHovered ? 'text-cream/70' : 'text-cream/48'}
      `}>
        Ref. {item.id}
      </p>
    </Link>
  )
}

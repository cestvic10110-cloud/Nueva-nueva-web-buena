'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { getProduct } from '@/lib/catalog'
import { ChromaGrid } from './ChromaGrid'
import type { ChromaItem } from './ChromaGrid'

const ease = [0.16, 1, 0.3, 1] as const

/* 6 products — 3x2 grid.
   Palette: all warm gold/bark tones from our design system. */
const STAGE_IDS: {
  id: string
  slug: string
  category: string
  borderColor: string
  gradient: string
}[] = [
  {
    id: '2012', slug: 'cestas-navidenas', category: 'Cestas Navideñas',
    borderColor: '#B5843A',
    gradient: 'linear-gradient(160deg, #2A1F10 0%, #1C1917 100%)',
  },
  {
    id: '2017', slug: 'cestas-navidenas', category: 'Cestas Navideñas',
    borderColor: '#C4A882',
    gradient: 'linear-gradient(200deg, #221A10 0%, #1C1917 100%)',
  },
  {
    id: '4338', slug: 'bandejas', category: 'Bandejas',
    borderColor: '#D4A657',
    gradient: 'linear-gradient(145deg, #251C0E 0%, #1C1917 100%)',
  },
  {
    id: '4523', slug: 'cuevanos', category: 'Cuévanos',
    borderColor: '#B5843A',
    gradient: 'linear-gradient(175deg, #201810 0%, #292524 100%)',
  },
  {
    id: '7262', slug: 'baules', category: 'Baúles',
    borderColor: '#C4A882',
    gradient: 'linear-gradient(220deg, #28200F 0%, #1C1917 100%)',
  },
  {
    id: '4788', slug: 'madera', category: 'Madera',
    borderColor: '#A07855',
    gradient: 'linear-gradient(135deg, #1E160C 0%, #292524 100%)',
  },
]

export function ProductStage() {
  const items: ChromaItem[] = STAGE_IDS
    .map(({ id, slug, category, borderColor, gradient }) => {
      const product = getProduct(id)
      if (!product) return null
      const name = product.name !== product.id ? product.name : `Ref. ${product.id}`
      return { id, name, category, slug, image: product.image, borderColor, gradient }
    })
    .filter((i): i is ChromaItem => i !== null)

  return (
    <section className="bg-bark section-pad overflow-hidden relative">

      {/* Ghost "+130" */}
      <p
        className="absolute right-[-0.04em] top-1/2 -translate-y-1/2 font-display font-semibold
                   text-cream leading-none pointer-events-none select-none hidden lg:block"
        style={{ fontSize: 'clamp(14rem, 30vw, 32rem)', opacity: 0.028 }}
        aria-hidden="true"
      >
        +130
      </p>

      <div className="container-site relative z-10">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8 mb-10">
          <div>
            <motion.p
              className="font-sans uppercase tracking-[0.28em] mb-4"
              style={{ fontSize: '0.5rem', color: 'rgba(245,240,232,0.48)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease }}
            >
              Catálogo · Valencia, España
            </motion.p>

            <div className="flex items-end gap-6 md:gap-10">
              <motion.h2
                className="font-display italic-serif text-cream leading-none"
                style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, ease }}
              >
                +130
              </motion.h2>
              <motion.div
                className="pb-2 md:pb-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.18, ease }}
              >
                <p className="font-display italic-serif leading-tight"
                   style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)', color: 'rgba(245,240,232,0.80)' }}>
                  modelos.
                </p>
                <p className="font-display italic-serif leading-tight"
                   style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)', color: 'rgba(245,240,232,0.58)' }}>
                  Un solo proveedor.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.p
            className="font-body text-right hidden md:block"
            style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.56)', maxWidth: '18rem', lineHeight: 1.7 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            Stock permanente.<br />
            Diseño a medida.<br />
            Escala real.
          </motion.p>
        </div>

        {/* Gold rule */}
        <motion.div
          className="h-px bg-gold/22 mb-8 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.1, delay: 0.1, ease }}
        />

        {/* ── ChromaGrid 3×3 ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <ChromaGrid items={items} columns={3} />
        </motion.div>

        {/* ── Footer strip ── */}
        <motion.div
          className="flex items-center justify-between mt-10 pt-7 border-t border-border-dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hidden md:flex items-center gap-6">
            <div>
              <p className="font-display font-semibold text-cream/70 tabular-nums leading-none"
                 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)' }}>
                10
              </p>
              <p className="font-sans text-[0.46rem] text-cream/36 tracking-[0.2em] uppercase mt-0.5">
                categorías
              </p>
            </div>
            <div className="w-px h-8 bg-border-dark" />
            <p className="font-sans text-[0.56rem] text-cream/40 tracking-[0.2em] uppercase">
              Valencia · España
            </p>
          </div>

          <Link
            href="/catalogo"
            className="group ml-auto font-sans text-[0.68rem] font-medium tracking-[0.12em] uppercase
                       px-7 py-3.5 squircle-sm transition-colors duration-300
                       text-ink bg-gold hover:bg-gold-light"
          >
            Ver catálogo completo
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">
              →
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

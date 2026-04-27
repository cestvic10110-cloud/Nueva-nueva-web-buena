'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { ProductCard } from './ProductCard'
import { ProductDetailDrawer } from './ProductDetailDrawer'
import type { CatalogItem } from '@/lib/types'

interface Props {
  items: CatalogItem[]
  portraitIds: Set<string>
}

/*
  Slot types:
  hero  — col-span-4 (of 6), portrait 3:4   → ONLY for portrait images
  wide  — col-span-4,        landscape 16:9  → all images, at position 6 of each group
  std   — col-span-2,        landscape 4:3   → all images
  std-m — col-span-3 (full-width on mobile)
*/

const SLOTS = {
  tall: {
    colClass: 'col-span-3 md:col-span-2 md:row-span-2',
    aspect:   '1/2',
    sizes:    '(max-width:768px) 50vw, 33vw',
  },
  std: {
    colClass: 'col-span-3 md:col-span-2',
    aspect:   '1/1',
    sizes:    '(max-width:768px) 50vw, 33vw',
  },
}

function buildSlots(items: CatalogItem[], portraitIds: Set<string>) {
  return items.map((item) => {
    const isP = portraitIds.has(item.id)
    return isP ? SLOTS.tall : SLOTS.std
  })
}

const ease = [0.16, 1, 0.3, 1] as const

export function ProductGrid({ items, portraitIds }: Props) {
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null)

  if (items.length === 0) {
    return (
      <section className="light-section grain-light section-pad">
        <div className="container-site flex items-center justify-center py-20">
          <p
            className="font-display italic-serif text-center"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--color-text-secondary)' }}
          >
            Sin referencias en esta categoría.
          </p>
        </div>
      </section>
    )
  }

  const slots = buildSlots(items, portraitIds)

  return (
    <>
      <section className="light-section grain-light" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
        <div className="container-site">

          <p
            className="font-sans uppercase tracking-[0.22em] mb-6"
            style={{ fontSize: '0.5rem', color: 'var(--color-text-dim)' }}
          >
            {items.length} referencias
          </p>

          {/* Editorial grid — 6 cols */}
          <div className="mt-4 grid grid-cols-6 gap-10 md:gap-20 grid-flow-dense">
            {items.map((item, i) => {
              const slot = slots[i]
              const staggerDelay = (i % 4) * 0.07

              return (
                <motion.div
                  key={item.id}
                  className={slot.colClass}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px', amount: 0.1 }}
                  transition={{ duration: 0.6, delay: staggerDelay, ease }}
                >
                  <ProductCard
                    item={item}
                    index={i}
                    onSelect={setSelectedItem}
                    aspectRatio={slot.aspect}
                    sizes={slot.sizes}
                  />
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>

      <ProductDetailDrawer
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  )
}

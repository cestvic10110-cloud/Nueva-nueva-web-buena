'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { ProductCard } from './ProductCard'
import { ProductDetailDrawer } from './ProductDetailDrawer'
import type { CatalogItem } from '@/lib/types'

interface Props {
  items: CatalogItem[]
}

const ease = [0.16, 1, 0.3, 1] as const

export function ProductGrid({ items }: Props) {
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

          {/* Standard uniform grid */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10">
            {items.map((item, i) => {
              const staggerDelay = (i % 4) * 0.07

              return (
                <motion.div
                  key={item.id}
                  className="col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px', amount: 0.1 }}
                  transition={{ duration: 0.6, delay: staggerDelay, ease }}
                >
                  <ProductCard
                    item={item}
                    index={i}
                    onSelect={setSelectedItem}
                    aspectRatio="1/1"
                    sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
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

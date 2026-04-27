'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRef } from 'react'
import { motion } from 'motion/react'
import { CATEGORIES } from '@/lib/constants'
import { CatalogSearch } from './CatalogSearch'

const ALL = { slug: '', labelPlural: 'Todo' }
const NAV_ITEMS = [ALL, ...CATEGORIES]

const ease = [0.16, 1, 0.3, 1] as const

export function CategoryNav() {
  const searchParams = useSearchParams()
  const current = searchParams.get('categoria') ?? ''
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <nav
      className="sticky top-16 z-[var(--z-overlay)]"
      style={{
        backgroundColor: 'rgba(237,232,222,0.94)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--color-sand)',
      }}
      aria-label="Filtrar por categoría"
    >
      <div className="container-site">
        <div
          ref={scrollRef}
          className="flex gap-0 overflow-x-auto"
          style={{ scrollbarWidth: 'none' }}
        >
          {NAV_ITEMS.map((cat) => {
            const isActive = current === cat.slug
            const href = cat.slug ? `/catalogo?categoria=${cat.slug}` : '/catalogo'

            return (
              <Link
                key={cat.slug}
                href={href}
                className="relative flex-shrink-0 group py-5 px-4 lg:px-5"
              >
                <span
                  className="font-display leading-none transition-colors duration-300 block"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.35vw, 1.05rem)',
                    color: isActive
                      ? 'var(--color-text-primary)'
                      : 'var(--color-text-dim)',
                  }}
                >
                  {cat.labelPlural}
                </span>

                {/* Gold indicator line */}
                {isActive ? (
                  <motion.div
                    layoutId="cat-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ backgroundColor: 'var(--color-gold)' }}
                    transition={{ duration: 0.35, ease }}
                  />
                ) : (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[1px] scale-x-0
                               group-hover:scale-x-100 origin-left transition-transform duration-300"
                    style={{ backgroundColor: 'var(--color-gold)', opacity: 0.4 }}
                  />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

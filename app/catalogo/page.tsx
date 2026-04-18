import { Suspense } from 'react'
import type { Metadata } from 'next'
import { getCatalog, getByCategory } from '@/lib/catalog'
import { CATEGORIES, CATEGORY_MAP } from '@/lib/constants'
import { isPortrait } from '@/lib/imageOrientation'
import type { CategorySlug } from '@/lib/types'
import { CatalogHeader } from '@/components/catalog/CatalogHeader'
import { CategoryNav } from '@/components/catalog/CategoryNav'
import { ProductGrid } from '@/components/catalog/ProductGrid'

export const metadata: Metadata = {
  title: 'Catálogo B2B',
  description: '108 modelos de cestas, baúles, bandejas y embalajes artesanales. Fabricante B2B desde Valencia, 1969.',
}

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>
}) {
  const { categoria } = await searchParams
  const slug = CATEGORIES.find((c) => c.slug === categoria)?.slug as CategorySlug | undefined

  const items = slug ? getByCategory(slug) : getCatalog()
  const meta = slug ? (CATEGORY_MAP[slug] ?? null) : null

  /* Detect portrait images server-side — runs on Node, never sent to client */
  const portraitIds = new Set(
    items
      .filter((item) => isPortrait(item.image))
      .map((item) => item.id)
  )

  return (
    <>
      <CatalogHeader meta={meta} count={items.length} />
      <Suspense fallback={<div className="h-14 border-b" style={{ borderColor: 'var(--color-sand)' }} />}>
        <CategoryNav />
      </Suspense>
      <ProductGrid items={items} portraitIds={portraitIds} />
    </>
  )
}

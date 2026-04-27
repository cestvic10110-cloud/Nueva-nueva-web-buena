import { Suspense } from 'react'
import type { Metadata } from 'next'
import { getCatalog, getByCategory } from '@/lib/catalog'
import { CATEGORIES, CATEGORY_MAP } from '@/lib/constants'
import { isPortrait } from '@/lib/imageOrientation'
import type { CategorySlug } from '@/lib/types'
import { CatalogHeader } from '@/components/catalog/CatalogHeader'
import { CategoryNav } from '@/components/catalog/CategoryNav'
import { ProductGrid } from '@/components/catalog/ProductGrid'
import { OpportunityBanner } from '@/components/catalog/OpportunityBanner'

export const metadata: Metadata = {
  title: 'Catálogo B2B',
  description: '+130 modelos de cestas, baúles, bandejas y embalajes artesanales. Fabricante B2B desde Valencia, 1969.',
}

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string; q?: string }>
}) {
  const { categoria, q } = await searchParams
  const slug = CATEGORIES.find((c) => c.slug === categoria)?.slug as CategorySlug | undefined

  let items = slug ? getByCategory(slug) : getCatalog().filter(it => it.category !== 'oportunidades')

  if (q) {
    const term = q.toLowerCase()
    items = items.filter(
      (it) =>
        it.name.toLowerCase().includes(term) ||
        it.id.toLowerCase().includes(term)
    )
  }

  const meta = slug ? (CATEGORY_MAP[slug] ?? null) : null
  const showOpportunityBanner = !slug // Show on main page and search results, but not inside categories

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
      {showOpportunityBanner && <OpportunityBanner />}
    </>
  )
}

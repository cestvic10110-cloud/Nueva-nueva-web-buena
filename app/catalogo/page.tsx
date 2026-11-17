import { Suspense } from 'react'
import type { Metadata } from 'next'
import { getCatalog, getByCategory } from '@/lib/catalog'
import { CATEGORIES, CATEGORY_MAP } from '@/lib/constants'
import type { CategorySlug } from '@/lib/types'
import { CatalogHeader } from '@/components/catalog/CatalogHeader'
import { CategoryNav } from '@/components/catalog/CategoryNav'
import { ProductGrid } from '@/components/catalog/ProductGrid'
import { OpportunityBanner } from '@/components/catalog/OpportunityBanner'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>
}): Promise<Metadata> {
  const { categoria } = await searchParams
  const meta = CATEGORIES.find((c) => c.slug === categoria)

  if (!meta) {
    return {
      title: 'Catálogo de Cestas de Mimbre al por Mayor',
      description: '+130 modelos de cestas, baúles, bandejas y embalajes artesanales. Fabricante B2B desde Valencia, 1969. Venta solo al por mayor.',
      alternates: { canonical: '/catalogo' },
    }
  }

  return {
    title: meta.slug === 'oportunidades'
      ? 'Rincón de Oportunidades: Stock al por Mayor'
      : `${meta.labelPlural} de Mimbre al por Mayor`,
    description: `${meta.description} ${meta.labelPlural} de fabricación propia en Valencia desde 1969. Venta exclusiva a empresas, precio según volumen.`,
    alternates: { canonical: `/catalogo?categoria=${meta.slug}` },
  }
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

  return (
    <>
      <CatalogHeader meta={meta} count={items.length} />
      <Suspense fallback={<div className="h-14 border-b" style={{ borderColor: 'var(--color-sand)' }} />}>
        <CategoryNav />
      </Suspense>
      <ProductGrid items={items} />
      {showOpportunityBanner && <OpportunityBanner />}
    </>
  )
}

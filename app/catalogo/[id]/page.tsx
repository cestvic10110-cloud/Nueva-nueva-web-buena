import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getCatalog, getProduct, getByCategory, hasRealName, toTitleCase } from '@/lib/catalog'
import { CATEGORY_MAP, SITE_URL } from '@/lib/constants'
import { ProductDetail } from '@/components/catalog/ProductDetail'
import { safeJsonLd } from '@/lib/jsonld'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return getCatalog().map((item) => ({ id: item.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const item = getProduct(id)
  if (!item) return {}

  const cat = CATEGORY_MAP[item.category]
  const canonical = `/catalogo/${item.id}`

  // Referencias sin nombre: ficha casi vacía, fuera del índice (siguen accesibles)
  if (!hasRealName(item)) {
    return {
      title: `Referencia ${item.id}`,
      alternates: { canonical },
      robots: { index: false, follow: true },
    }
  }

  const name = toTitleCase(item.name)
  const sizes = item.variants.length > 1 ? `${item.variants.length} medidas, ` : ''

  return {
    title: `${name} al por Mayor · Ref. ${item.id}`,
    description:
      `${name} (Ref. ${item.id}), ${sizes}de la categoría ${cat?.labelPlural ?? item.category}. ` +
      'Venta exclusiva al por mayor desde nuestro taller en Valencia; precio según volumen.',
    alternates: { canonical },
  }
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const item = getProduct(id)

  if (!item) notFound()

  const related = getByCategory(item.category)
    .filter((r) => r.id !== item.id)
    .slice(0, 4)

  const cat = CATEGORY_MAP[item.category]
  const displayName = hasRealName(item) ? toTitleCase(item.name) : `Referencia ${item.id}`
  const url = `${SITE_URL}/catalogo/${item.id}`
  const orgRef = { '@id': `${SITE_URL}/#organization` }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    url,
    name: displayName,
    sku: item.id,
    description: `${displayName}. ${cat?.description ?? ''} Fabricante B2B exclusivo desde Valencia, España. Venta solo al por mayor.`,
    image: `${SITE_URL}${encodeURI(item.image)}`,
    category: cat?.labelPlural ?? item.category,
    brand: { '@type': 'Brand', name: 'Cestería Vicent' },
    manufacturer: orgRef,
    // B2B: precio bajo presupuesto según volumen, por eso no se declara precio ni disponibilidad
    offers: {
      '@type': 'Offer',
      url,
      seller: orgRef,
      eligibleCustomerType: 'https://schema.org/Business',
    },
    ...(item.variants.length > 0 && {
      hasVariant: item.variants.map((v) => ({
        '@type': 'Product',
        name: v.name || v.reference,
        sku: v.reference,
        ...(v.dimensions && { size: v.dimensions }),
      })),
    }),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Catálogo', item: `${SITE_URL}/catalogo` },
      ...(cat
        ? [{ '@type': 'ListItem', position: 3, name: cat.labelPlural, item: `${SITE_URL}/catalogo?categoria=${cat.slug}` }]
        : []),
      { '@type': 'ListItem', position: cat ? 4 : 3, name: displayName, item: url },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <ProductDetail item={item} related={related} />
    </>
  )
}

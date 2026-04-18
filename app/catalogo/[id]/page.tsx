import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getCatalog, getProduct, getByCategory } from '@/lib/catalog'
import { CATEGORY_MAP } from '@/lib/constants'
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
  const name = item.name !== item.id ? item.name : `Referencia ${item.id}`

  return {
    title: `${name} — Ref. ${item.id}`,
    description: `${name}. ${cat?.description ?? ''} Fabricante B2B desde Valencia. Solicite presupuesto.`,
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
  const displayName = item.name !== item.id ? item.name : `Referencia ${item.id}`

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: displayName,
    sku: item.id,
    description: `${displayName}. ${cat?.description ?? ''} Fabricante B2B exclusivo desde Valencia, España.`,
    image: `https://cesteriavicent.es${item.image}`,
    category: cat?.labelPlural ?? item.category,
    brand: {
      '@type': 'Brand',
      name: 'Cestería Vicent',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Cestería Vicent, S.L.',
      url: 'https://cesteriavicent.es',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        description: 'Precio bajo consulta según volumen de pedido',
      },
      seller: {
        '@type': 'Organization',
        name: 'Cestería Vicent, S.L.',
      },
    },
    ...(item.variants.length > 0 && {
      hasVariant: item.variants.map((v) => ({
        '@type': 'ProductModel',
        name: v.name || v.reference,
        sku: v.reference,
        description: v.dimensions,
      })),
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(productSchema) }}
      />
      <ProductDetail item={item} related={related} />
    </>
  )
}

import rawCatalog from '../_backup_web_completa/catalogo.json'
import type { CatalogItem, CategorySlug } from './types'

const catalog = rawCatalog as CatalogItem[]

export function getCatalog(): CatalogItem[] {
  return catalog
}

export function getByCategory(slug: CategorySlug): CatalogItem[] {
  return catalog.filter((item) => item.category === slug)
}

export function getProduct(id: string): CatalogItem | undefined {
  return catalog.find((item) => item.id === id)
}

export function searchCatalog(query: string): CatalogItem[] {
  const q = query.toLowerCase().trim()
  if (!q) return catalog
  return catalog.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      item.id.toLowerCase().includes(q) ||
      item.variants.some((v) => v.reference.toLowerCase().includes(q))
  )
}

export function getFeatured(): CatalogItem[] {
  const featuredIds = ['2012', '2016', '7474', '7137', '4338', '7264', '4524', '7422']
  return featuredIds
    .map((id) => catalog.find((item) => item.id === id))
    .filter((item): item is CatalogItem => item !== undefined)
}

export function getWhatsAppUrl(item: CatalogItem, variant?: string): string {
  const base = 'https://wa.me/34679286178'
  const msg = encodeURIComponent(
    `Hola, me interesa solicitar presupuesto para:\n` +
    `Producto: ${item.name} (Ref. ${variant ?? item.id})\n` +
    `Cantidad: \nFecha estimada: `
  )
  return `${base}?text=${msg}`
}

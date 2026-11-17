import rawCatalog from '../_backup_web_completa/catalogo.json'
import type { CatalogItem, CategorySlug } from './types'

const EXCLUDED_IDS = ['4332', '4533', '4554', '5214', '7119', '7220', '7240', '7241', '7246', '7264', '7275', '7464', '7863', '7870']
const catalog = (rawCatalog as CatalogItem[]).filter(item => !EXCLUDED_IDS.includes(item.id))

export function getCatalog(): CatalogItem[] {
  return catalog
}

/** Algunas referencias no tienen nombre (el nombre es el propio número): son fichas casi vacías. */
export function hasRealName(item: CatalogItem): boolean {
  return Boolean(item.name) && item.name !== item.id
}

const LOWERCASE_WORDS = new Set(['de', 'del', 'la', 'las', 'el', 'los', 'con', 'y', 'para', 'en', 'a', 'sin'])

/** "BAÚL MADERA CORREAS" → "Baúl Madera Correas" (los nombres del catálogo vienen en mayúsculas). */
export function toTitleCase(name: string): string {
  return name
    .toLowerCase()
    .split(' ')
    .map((word, i) =>
      i > 0 && LOWERCASE_WORDS.has(word)
        ? word
        : word.replace(/(^|[/-])(\p{L})/gu, (_, sep: string, ch: string) => sep + ch.toUpperCase())
    )
    .join(' ')
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
  const featuredIds = ['2012', '2017', '4338', '4523', '7262', '4788']
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

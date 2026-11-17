import type { MetadataRoute } from 'next'
import { CATEGORIES, NAVIDAD_LANDING_PATH, SITE_URL } from '@/lib/constants'
import { getCatalog, hasRealName } from '@/lib/catalog'

// Fechas reales de última modificación (no `new Date()`, que cambia en cada deploy).
// Actualícense cuando cambie el contenido correspondiente.
const SITE_UPDATED = new Date('2026-11-17')
const CATALOG_UPDATED = new Date('2026-04-19')

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL,                  lastModified: SITE_UPDATED },
    { url: `${SITE_URL}/catalogo`,    lastModified: CATALOG_UPDATED },
    { url: `${SITE_URL}/fabricacion`, lastModified: SITE_UPDATED },
    { url: `${SITE_URL}/sectores`,    lastModified: SITE_UPDATED },
    { url: `${SITE_URL}/contacto`,    lastModified: SITE_UPDATED },
    { url: `${SITE_URL}${NAVIDAD_LANDING_PATH}`, lastModified: SITE_UPDATED },
  ]

  // Cada categoría tiene título, descripción y canonical propios (ver app/catalogo/page.tsx)
  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/catalogo?categoria=${cat.slug}`,
    lastModified: CATALOG_UPDATED,
  }))

  // Las referencias sin nombre real son noindex: no se listan
  const productRoutes: MetadataRoute.Sitemap = getCatalog()
    .filter(hasRealName)
    .map((item) => ({
      url: `${SITE_URL}/catalogo/${item.id}`,
      lastModified: CATALOG_UPDATED,
    }))

  return [...staticRoutes, ...categoryRoutes, ...productRoutes]
}

import type { MetadataRoute } from 'next'
import { CATEGORIES } from '@/lib/constants'

const BASE = 'https://cesteriavicent.es'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                    lastModified: now, changeFrequency: 'monthly',  priority: 1    },
    { url: `${BASE}/catalogo`,      lastModified: now, changeFrequency: 'weekly',   priority: 0.9  },
    { url: `${BASE}/fabricacion`,   lastModified: now, changeFrequency: 'yearly',   priority: 0.7  },
    { url: `${BASE}/sectores`,      lastModified: now, changeFrequency: 'yearly',   priority: 0.7  },
    { url: `${BASE}/contacto`,      lastModified: now, changeFrequency: 'yearly',   priority: 0.8  },
  ]

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE}/catalogo?categoria=${cat.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }))

  return [...staticRoutes, ...categoryRoutes]
}

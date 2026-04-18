import type { CategoryMeta } from './types'

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: 'cestas-navidenas',
    label: 'Cestas Navideñas',
    labelPlural: 'Cestas Navideñas',
    description: 'Presentaciones especiales para lotes y regalos de Navidad.',
  },
  {
    slug: 'cestas',
    label: 'Cestas',
    labelPlural: 'Cestas',
    description: 'Cestas artesanales de mimbre para todo tipo de presentación.',
  },
  {
    slug: 'bandejas',
    label: 'Bandeja',
    labelPlural: 'Bandejas',
    description: 'Presentación impecable para productos gourmet y retail.',
  },
  {
    slug: 'baules',
    label: 'Baúl',
    labelPlural: 'Baúles',
    description: 'Soluciones de gran capacidad con acabado artesanal.',
  },
  {
    slug: 'cuevanos',
    label: 'Cuévano',
    labelPlural: 'Cuévanos',
    description: 'Capacidad y resistencia con tradición artesanal.',
  },
  {
    slug: 'embalajes',
    label: 'Embalaje',
    labelPlural: 'Embalajes',
    description: 'Materiales de presentación y acabado para sus productos.',
  },
  {
    slug: 'estuches',
    label: 'Estuche',
    labelPlural: 'Estuches',
    description: 'Presentación premium para artículos de regalo y decoración.',
  },
  {
    slug: 'forja',
    label: 'Forja',
    labelPlural: 'Forja',
    description: 'Piezas de forja artística para decoración y presentación.',
  },
  {
    slug: 'madera',
    label: 'Madera',
    labelPlural: 'Madera',
    description: 'Complementos en madera para presentaciones gastronómicas.',
  },
  {
    slug: 'oportunidades',
    label: 'Oportunidad',
    labelPlural: 'Rincón de Oportunidades',
    description: 'Stock selecto a precios especiales. Disponibilidad limitada.',
  },
]

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c])
) as Record<string, CategoryMeta>

export const COMPANY = {
  name: 'Cestería Vicent, S.L.',
  shortName: 'Cestería Vicent',
  founded: 1969,
  nif: 'B46301503',
  phone: '+34 679 28 61 78',
  whatsapp: '+34 679 28 61 78',
  email: 'cesteriavicent@cesteriavicent.es',
  address: 'C/ Leonardo Carreres, 24',
  city: 'Aielo de Malferit',
  province: 'Valencia',
  postalCode: '46812',
  hours: 'Lunes a Viernes, 9:00 – 19:00 h',
} as const

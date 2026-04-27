export interface ProductVariant {
  reference: string
  name: string
  dimensions: string
  image?: string
}

export interface CatalogItem {
  id: string
  name: string
  category: CategorySlug
  price: string
  image: string
  dimensions: string
  variants: ProductVariant[]
}

export type CategorySlug =
  | 'cestas'
  | 'cestas-navidenas'
  | 'bandejas'
  | 'baules'
  | 'cuevanos'
  | 'embalajes'
  | 'estuches'
  | 'forja'
  | 'madera'
  | 'oportunidades'

export interface CategoryMeta {
  slug: CategorySlug
  label: string
  labelPlural: string
  description: string
}

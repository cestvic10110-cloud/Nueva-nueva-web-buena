import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { FAMILY_LANDINGS, LANDING_BY_SLUG } from '@/lib/landings'
import { FamilyLandingPage } from '@/components/landing/FamilyLandingPage'

interface Props {
  params: Promise<{ familia: string }>
}

// Solo las familias definidas en lib/landings.ts; cualquier otra ruta es 404
export const dynamicParams = false

export function generateStaticParams() {
  return FAMILY_LANDINGS.map((l) => ({ familia: l.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { familia } = await params
  const landing = LANDING_BY_SLUG[familia]
  if (!landing) return {}
  return {
    title: landing.title,
    description: landing.description,
    alternates: { canonical: `/${landing.slug}` },
  }
}

export default async function FamiliaPage({ params }: Props) {
  const { familia } = await params
  const landing = LANDING_BY_SLUG[familia]
  if (!landing) notFound()
  return <FamilyLandingPage landing={landing} />
}

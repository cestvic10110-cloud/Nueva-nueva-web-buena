import { OpeningManifest }   from '@/components/home/OpeningManifest'
import { StatementNumbers }  from '@/components/home/StatementNumbers'
import { ProductStage }      from '@/components/home/ProductStage'
import { MaterialIndex }     from '@/components/home/MaterialIndex'
import { B2BSectors }        from '@/components/home/B2BSectors'
import { BespokeProjects }   from '@/components/home/BespokeProjects'
import { CraftProcess }      from '@/components/home/CraftProcess'
import { DecadeStrip }       from '@/components/home/DecadeStrip'
import { FaqOperativo }      from '@/components/home/FaqOperativo'
import { LeadMagnet }        from '@/components/home/LeadMagnet'
import { ClosingInvitation } from '@/components/home/ClosingInvitation'

/**
 * HOME — narrativa en cuatro actos:
 * 1. Quiénes somos      → Hero, cifras y garantías
 * 2. Qué fabricamos     → Productos destacados, categorías
 * 3. Para quién         → Sectores, proyectos a medida
 * 4. Por qué confiar    → Proceso, trayectoria, preguntas frecuentes
 * Cierre                → Catálogo descargable, invitación final
 */
export default function Home() {
  return (
    <>
      <OpeningManifest />
      <StatementNumbers />
      <ProductStage />
      <MaterialIndex />
      <B2BSectors />
      <BespokeProjects />
      <CraftProcess />
      <DecadeStrip />
      <FaqOperativo />
      <LeadMagnet />
      <ClosingInvitation />
    </>
  )
}

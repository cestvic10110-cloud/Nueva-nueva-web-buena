import { OpeningManifest }   from '@/components/home/OpeningManifest'
import { TrustTicker }        from '@/components/home/TrustTicker'
import { StatementNumbers }   from '@/components/home/StatementNumbers'
import { CraftProcess }       from '@/components/home/CraftProcess'
import { ProductStage }       from '@/components/home/ProductStage'
import { DecadeStrip }        from '@/components/home/DecadeStrip'
import { MaterialIndex }      from '@/components/home/MaterialIndex'
import { B2BSectors }         from '@/components/home/B2BSectors'
import { BespokeProjects }    from '@/components/home/BespokeProjects'

import { FaqOperativo }       from '@/components/home/FaqOperativo'
import { LeadMagnet }         from '@/components/home/LeadMagnet'
import { ClosingInvitation }  from '@/components/home/ClosingInvitation'

/**
 * HOME STRUCTURE (Optimized for B2B Conversion):
 * 1. Hook (Hero)
 * 2. Rapid Authority (Ticker)
 * 3. Authority Snapshot (Numbers & 50y claim)
 * 4. Product Proof (9 curated examples)
 * 5. Market Relevance (Sectors - Who we serve)
 * 6. Catalog Breadth (Categories)
 * 7. Value Proposition (Craft Process - Why us)
 * 8. Legacy (Decade Strip)
 * 9. Services & Trust (Bespoke, Social Proof)
 * 10. Converters (FAQ, Lead Magnet, closing)
 */
export default function Home() {
  return (
    <>
      <OpeningManifest />
      <TrustTicker />
      <StatementNumbers />
      <ProductStage />
      <B2BSectors />
      <MaterialIndex />
      <CraftProcess />
      <DecadeStrip />
      <BespokeProjects />

      <FaqOperativo />
      <LeadMagnet />
      <ClosingInvitation />
    </>
  )
}

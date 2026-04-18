import { OpeningManifest }   from '@/components/home/OpeningManifest'
import { TrustTicker }        from '@/components/home/TrustTicker'
import { StatementNumbers }   from '@/components/home/StatementNumbers'
import { CraftProcess }       from '@/components/home/CraftProcess'
import { ProductStage }       from '@/components/home/ProductStage'
import { DecadeStrip }        from '@/components/home/DecadeStrip'
import { MaterialIndex }      from '@/components/home/MaterialIndex'
import { B2BSectors }         from '@/components/home/B2BSectors'
import { BespokeProjects }    from '@/components/home/BespokeProjects'
import { SocialProof }        from '@/components/home/SocialProof'
import { FaqOperativo }       from '@/components/home/FaqOperativo'
import { LeadMagnet }         from '@/components/home/LeadMagnet'
import { ClosingInvitation }  from '@/components/home/ClosingInvitation'

export default function Home() {
  return (
    <>
      <OpeningManifest />
      <TrustTicker />
      <StatementNumbers />
      <CraftProcess />
      <ProductStage />
      <DecadeStrip />
      <MaterialIndex />
      <B2BSectors />
      <BespokeProjects />
      <SocialProof />
      <FaqOperativo />
      <LeadMagnet />
      <ClosingInvitation />
    </>
  )
}

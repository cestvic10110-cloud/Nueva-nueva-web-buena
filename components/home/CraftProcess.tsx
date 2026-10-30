import Image from 'next/image'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const PANELS = [
  {
    index: '01',
    title: 'Raíces y Materiales: Fibras naturales y sostenibles',
    body: 'Seleccionamos las mejores fibras naturales de cultivo sostenible. Cada vara de mimbre es escogida a mano atendiendo a su grosor, flexibilidad y color para garantizar la máxima calidad.',
    image: '/fotos-web/fotomimbre.png',
  },
  {
    index: '02',
    title: 'Medio siglo de historia: Excelencia técnica y visión atemporal',
    body: 'Cinco décadas de evolución constante y perfeccionamiento. Nuestra trayectoria define un estándar de calidad superior, donde cada pieza es el resultado de un conocimiento profundo y una estética sofisticada.',
    image: '/fotos-web/fotodesliza2.png',
  },
  {
    index: '03',
    title: 'El Acabado',
    body: 'Cada pieza pasa por revisión manual. Tintes naturales, barnices al agua, refuerzos de estructura — nada sale sin firma.',
    image: '/fotos-web/fotoacabado85.png',
  },
  {
    index: '04',
    title: 'El Resultado',
    body: 'Un contenedor exclusivo diseñado para elevar su producto. Desde el taller de Aielo de Malferit hasta el lineal de su empresa.',
    image: '/fotos-web/pasd.png',
  },
] as const

export function CraftProcess() {
  return (
    <section className="on-dark bg-ink section-y" aria-label="El proceso de creación de Cestería Vicent">
      <div className="container-site">

        <ScrollReveal className="text-center mb-16 md:mb-24">
          <p className="eyebrow">El Proceso de Creación</p>
          <h2 className="headline mt-5" style={{ fontSize: 'clamp(2.75rem, 6vw, 5.25rem)' }}>
            El <em>Proceso</em>
          </h2>
        </ScrollReveal>

        <ol className="space-y-16 md:space-y-28">
          {PANELS.map((panel, i) => (
            <li
              key={panel.index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center"
            >
              <ScrollReveal className={i % 2 === 1 ? 'md:order-2' : undefined}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-soil">
                  <Image
                    src={panel.image}
                    alt={panel.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <p className="font-sans text-[0.8125rem] font-medium tabular-nums text-gold-light">
                  {panel.index} / 04
                </p>
                <h3 className="headline mt-4" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 3rem)', lineHeight: 1.08 }}>
                  {panel.title}
                </h3>
                <p className="lede mt-5" style={{ maxWidth: '32rem' }}>
                  {panel.body}
                </p>
              </ScrollReveal>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}

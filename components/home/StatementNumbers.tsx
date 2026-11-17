import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { TrustFacts } from './TrustTicker'

/* Cifras estáticas en el HTML: un contador animado desde 0 hacía que buscadores
   e IAs leyeran "+0 años de oficio" y "0+ modelos". */
const STATS = [
  { value: '+50',  label: 'años de oficio' },
  { value: '130+', label: 'modelos en catálogo' },
  { value: 'B2B',  label: 'Servicio Exclusivo' },
]

export function StatementNumbers() {
  return (
    <section className="bg-paper section-y border-t border-sand/60">
      <div className="container-site">

        <ScrollReveal className="text-center">
          <p className="eyebrow">Valencia, España · Exclusivo B2B</p>
          <h2 className="headline mt-5 mx-auto" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', maxWidth: '22ch' }}>
            Medio siglo fabricando el contenedor perfecto <em>para su producto.</em>
          </h2>
        </ScrollReveal>

        {/* Cifras */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-sand">
          {STATS.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 80} className="py-6 sm:py-2 text-center">
              <p
                className="font-display font-semibold lining-nums tabular-nums leading-none text-text-primary"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)' }}
              >
                {s.value}
              </p>
              <p className="mt-3 font-sans text-[0.9375rem] text-text-secondary">{s.label}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Garantías */}
        <ScrollReveal className="mt-16 md:mt-20 card p-8 md:p-10">
          <TrustFacts />
        </ScrollReveal>

      </div>
    </section>
  )
}

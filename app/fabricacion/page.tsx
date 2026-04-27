import Link from 'next/link'
import type { Metadata } from 'next'
import { HeroEmpresa }        from '@/components/empresa/HeroEmpresa'
import { HistoriaTimeline }  from '@/components/empresa/HistoriaTimeline'
import { ValoresBento }      from '@/components/empresa/ValoresBento'
import { UbicacionContacto } from '@/components/empresa/UbicacionContacto'

export const metadata: Metadata = {
  title: 'Empresa y Fabricación',
  description: 'Fabricante de cestas de mimbre desde 1969 en Valencia. Tradición artesanal con capacidad industrial para el mercado B2B.',
}

const METRICS = [
  { value: '1969', label: 'Año de fundación'  },
  { value: '+50',  label: 'Años de oficio'    },
  { value: '+130', label: 'Modelos en stock'  },
  { value: 'B2B',  label: 'Exclusivo empresas'},
]

export default function FabricacionPage() {
  return (
    <>
      <HeroEmpresa />

      {/* ── Metrics strip ── */}
      <section className="bg-bark border-b border-border-dark">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border-dark/50">
            {METRICS.map(({ value, label }) => (
              <div key={value} className="py-10 px-6 first:pl-0 last:pr-0 text-center md:text-left">
                <p
                  className="font-display font-semibold text-gold leading-none tabular-nums mb-2"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                  {value}
                </p>
                <p className="font-sans text-[0.6rem] text-cream/55 tracking-[0.18em] uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Historia split-screen ── */}
      <HistoriaTimeline />

      {/* ── Valores bento ── */}
      <ValoresBento />

      {/* ── Ubicación y contacto ── */}
      <UbicacionContacto />

      {/* ── CTA final ── */}
      <section className="light-section grain-light section-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-end">

            <div>
              <p
                className="font-sans uppercase tracking-[0.3em] mb-5"
                style={{ fontSize: '0.5rem', color: 'var(--color-text-dim)' }}
              >
                Cestería Vicent · Aielo de Malferit
              </p>
              <h2
                className="font-display italic-serif leading-[0.9] tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', color: 'var(--color-text-primary)' }}
              >
                ¿Listo para<br />
                <span style={{ color: 'var(--color-rattan)' }}>trabajar juntos?</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 items-start lg:items-end">
              <Link
                href="/contacto"
                className="font-sans text-[0.72rem] font-medium text-ink bg-gold hover:bg-gold-light
                           transition-colors duration-300 px-8 py-4 squircle-sm
                           tracking-[0.12em] uppercase whitespace-nowrap"
              >
                Solicitar presupuesto
              </Link>
              <Link
                href="/catalogo"
                className="font-body text-sm hover:text-gold transition-colors duration-200 link-underline"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Ver catálogo →
              </Link>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

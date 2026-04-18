import Link from 'next/link'
import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { SectionLabel } from '@/components/shared/SectionLabel'
import { ContactForm } from '@/components/pages/ContactForm'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contacto y Presupuesto',
  description: 'Solicite presupuesto B2B. Respondemos en menos de 24 horas. Exclusivo para empresas, distribuidores y profesionales.',
}

const INFO_ITEMS = [
  {
    label: 'Teléfono',
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/\s/g, '')}`,
  },
  {
    label: 'Email',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    label: 'Dirección',
    value: `${COMPANY.address}, ${COMPANY.postalCode} ${COMPANY.city}, ${COMPANY.province}`,
    href: null,
  },
  {
    label: 'Horario',
    value: COMPANY.hours,
    href: null,
  },
]

export default function ContactoPage() {
  return (
    <>

      {/* ── HEADER ── */}
      <section className="bg-ink grain pt-32 pb-16">
        <div className="container-site">
          <ScrollReveal>
            <SectionLabel className="mb-6">Servicio exclusivo B2B</SectionLabel>
            <h1
              className="font-display italic-serif text-cream leading-[0.9] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)', maxWidth: '16ch' }}
            >
              Solicite su presupuesto.
            </h1>
          </ScrollReveal>

          <div className="h-px bg-gold/25 mb-8" />

          <ScrollReveal delay={80}>
            <p
              className="font-body text-cream/65 leading-relaxed"
              style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)', maxWidth: '40rem' }}
            >
              Respondemos en menos de 24 horas en días laborables. Complete el formulario
              con los detalles de su pedido y le prepararemos una oferta a medida.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MAIN: FORM + INFO ── */}
      <section className="bg-soil section-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">

            {/* Form column */}
            <div>
              <h2
                className="font-display italic-serif text-cream leading-tight mb-8"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
              >
                Cuéntenos su proyecto.
              </h2>
              <ContactForm />
            </div>

            {/* Info column */}
            <div className="lg:sticky lg:top-28 space-y-8">

              {/* WhatsApp direct */}
              <div className="bg-bark squircle p-6">
                <p className="font-sans text-[0.58rem] text-gold/70 tracking-[0.22em] uppercase mb-3">
                  Consulta urgente
                </p>
                <p className="font-body text-cream/68 text-sm leading-relaxed mb-5">
                  Para consultas inmediatas, contáctenos directamente por WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hola, me gustaría solicitar información sobre sus cestas artesanales.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-[0.68rem] font-medium
                             text-ink bg-gold hover:bg-gold-light transition-colors duration-300
                             px-5 py-2.5 squircle-sm tracking-[0.1em] uppercase"
                >
                  Abrir WhatsApp
                </a>
              </div>

              {/* Contact details */}
              <div className="space-y-6">
                {INFO_ITEMS.map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="font-sans text-[0.55rem] text-cream/45 tracking-[0.2em] uppercase mb-1.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-body text-sm text-cream/75 hover:text-gold transition-colors duration-300"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-cream/75">{value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* B2B notice */}
              <div className="border-t border-border-dark pt-6">
                <p className="font-body text-[0.75rem] text-cream/45 leading-relaxed italic">
                  Atendemos exclusivamente a empresas, profesionales y distribuidores.
                  No realizamos ventas a particulares.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── GUIDE: what to include ── */}
      <section className="bg-bark section-pad">
        <div className="container-site">

          <ScrollReveal>
            <h2
              className="font-display italic-serif text-cream leading-tight mb-10"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Para agilizar su presupuesto,<br />incluya en su mensaje:
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border-dark/40">
            {[
              { n: '01', text: 'Tipo de producto que le interesa (cesta, bandeja, baúl…)' },
              { n: '02', text: 'Cantidad aproximada o volumen total del pedido' },
              { n: '03', text: 'Si necesita personalización o medidas específicas' },
              { n: '04', text: 'Fecha estimada de entrega o temporada de campaña' },
            ].map(({ n, text }) => (
              <ScrollReveal key={n} className="px-0 sm:px-6 py-6 first:pl-0 last:pr-0">
                <p className="font-sans text-[0.58rem] text-gold/65 tracking-[0.2em] uppercase mb-4">{n}</p>
                <p className="font-body text-[0.85rem] text-cream/62 leading-relaxed">{text}</p>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

    </>
  )
}

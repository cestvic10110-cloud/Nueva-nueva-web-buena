import Link from 'next/link'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { COMPANY } from '@/lib/constants'

export function ClosingInvitation() {
  return (
    <section className="bg-paper pb-[clamp(5rem,11vw,9rem)]">
      <div className="container-site text-center">

        <ScrollReveal>
          <blockquote>
            <p className="headline mx-auto" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', maxWidth: '20ch' }}>
              <em>“No solo vendemos cestas;</em> ofrecemos la seguridad de un suministro constante.”
            </p>
            <footer className="mt-6 eyebrow">Cestería Vicent, S.L. · Desde 1969</footer>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={100} className="mt-12 flex flex-col items-center gap-5">
          <Link href="/contacto" className="btn btn-primary">
            Solicitar presupuesto
          </Link>
          <a
            href={`tel:${COMPANY.phone}`}
            className="font-sans text-base font-medium text-text-primary hover:text-gold-deep transition-colors duration-200"
          >
            {COMPANY.phone}
          </a>
          <p className="font-sans text-[0.8125rem] text-text-dim">
            Lun–Vie · 9:00–19:00 · B2B exclusivo
          </p>
        </ScrollReveal>

      </div>
    </section>
  )
}

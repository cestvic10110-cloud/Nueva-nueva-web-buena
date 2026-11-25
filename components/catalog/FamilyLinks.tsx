import Link from 'next/link'
import { FAMILY_LINKS } from '@/lib/landings'

/** Enlaces desde el catálogo a las páginas por familia. */
export function FamilyLinks() {
  return (
    <section className="bg-paper section-y">
      <div className="container-site">
        <p className="eyebrow">Gamas al por mayor</p>
        <h2 className="headline mt-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
          Compre por <em>familia de producto</em>
        </h2>
        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FAMILY_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center justify-between gap-4 h-full rounded-2xl bg-cream px-6 py-5
                           font-sans text-[0.9375rem] font-medium text-text-primary transition-colors duration-300 hover:bg-bone"
              >
                {label}
                <span className="text-gold-deep" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

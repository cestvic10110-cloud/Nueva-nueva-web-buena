import Image from 'next/image'
import Link from 'next/link'
import { COMPANY } from '@/lib/constants'

const COL_CATALOGO = [
  { href: '/catalogo',                            label: 'Mayoristas de Mimbre'     },
  { href: '/catalogo?categoria=cestas-navidenas', label: 'Cestas Navideñas'         },
  { href: '/catalogo?categoria=cestas',           label: 'Cestas de Mimbre'         },
  { href: '/catalogo?categoria=bandejas',         label: 'Bandejas Artesanales'     },
  { href: '/catalogo?categoria=baules',           label: 'Baúles'                   },
  { href: '/catalogo?categoria=cuevanos',         label: 'Cuévanos'                 },
  { href: '/catalogo?categoria=embalajes',        label: 'Embalajes'                },
  { href: '/catalogo?categoria=estuches',         label: 'Estuches'                 },
  { href: '/catalogo?categoria=forja',            label: 'Forja'                    },
  { href: '/catalogo?categoria=madera',           label: 'Madera'                   },
  { href: '/catalogo?categoria=oportunidades',    label: 'Oportunidades'            },
]

const COL_SECTORES = [
  { href: '/sectores#alimentacion', label: 'Alimentación & Gourmet'  },
  { href: '/sectores#navidenas',    label: 'Lotes de Navidad B2B'    },
  { href: '/sectores#hosteleria',   label: 'Hostelería'               },
  { href: '/sectores#retail',       label: 'Retail & Distribución'    },
  { href: '/sectores#interiorismo', label: 'Interiorismo & Diseño'    },
  { href: '/sectores#corporativo',  label: 'Regalo Corporativo'       },
  { href: '/catalogo?categoria=cestas', label: 'Cestas Personalizadas'},
  { href: '/fabricacion',           label: 'Fabricación a Medida'     },
]

const COL_SOPORTE = [
  { href: '/contacto',    label: 'Solicitar presupuesto' },
  { href: '/catalogo',    label: 'Ver catálogo online'   },
  { href: '/fabricacion', label: 'Proyectos especiales'  },
  { href: '/aviso-legal', label: 'Aviso legal'     },
  { href: '/privacidad',  label: 'Privacidad'     },
  { href: '/cookies',     label: 'Cookies'        },
]

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans uppercase tracking-[0.22em] mb-5 pb-3 border-b border-border-dark"
       style={{ fontSize: '0.5rem', color: 'var(--color-gold)' }}>
      {children}
    </p>
  )
}

function ColLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="font-body text-xs text-cream/58 hover:text-cream/90 transition-colors duration-200 leading-relaxed"
      >
        {children}
      </Link>
    </li>
  )
}

export function Footer() {
  return (
    <footer
      style={{ viewTransitionName: 'site-footer' }}
      className="bg-ink border-t border-border-dark"
    >
      {/* Mega columns */}
      <div className="container-site pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-8">

          {/* Col 1: Empresa */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logoCesteria.png"
                alt="Cestería Vicent"
                width={48}
                height={51}
                className="h-11 w-auto object-contain brightness-0 invert opacity-55"
              />
            </Link>
            <p
              className="font-display italic-serif text-cream/80 leading-snug mb-4"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
            >
              Proveedor B2B de cestería artesanal desde 1969.
            </p>
            <p className="font-body text-xs text-cream/48 leading-relaxed mb-6">
              Fabricante español de referencia para empresas de alimentación, retail y hostelería de lujo.
              Stock permanente, personalización y envío 24–48 h.
            </p>
            <address className="not-italic space-y-1.5">
              <p className="font-body text-xs text-cream/42 leading-relaxed">
                {COMPANY.address}<br />
                {COMPANY.postalCode} {COMPANY.city}<br />
                {COMPANY.province}, España
              </p>
            </address>
          </div>

          {/* Col 2: Catálogo por Material */}
          <div>
            <ColHeading>Catálogo por Material</ColHeading>
            <ul className="space-y-2.5">
              {COL_CATALOGO.map(({ href, label }) => (
                <ColLink key={href} href={href}>{label}</ColLink>
              ))}
            </ul>
          </div>

          {/* Col 3: Soluciones por Sector */}
          <div>
            <ColHeading>Soluciones por Sector</ColHeading>
            <ul className="space-y-2.5">
              {COL_SECTORES.map(({ href, label }) => (
                <ColLink key={href} href={href}>{label}</ColLink>
              ))}
            </ul>
          </div>

          {/* Col 4: Soporte B2B */}
          <div>
            <ColHeading>Soporte B2B</ColHeading>
            <ul className="space-y-2.5 mb-8">
              {COL_SOPORTE.map(({ href, label }) => (
                <ColLink key={href} href={href}>{label}</ColLink>
              ))}
            </ul>

            <div className="space-y-3 pt-6 border-t border-border-dark">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2.5 font-body text-xs text-cream/65
                           hover:text-gold transition-colors duration-200 group"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="flex-shrink-0 opacity-55 group-hover:opacity-100 transition-opacity">
                  <path d="M12 9.27l-2.63.26a.8.8 0 00-.67.53l-.7 1.73A10.5 10.5 0 011.2 4.0l1.73-.7a.8.8 0 00.53-.67L3.73 1H1.1C.5 1 0 1.5 0 2.11c0 6.03 4.86 10.89 10.89 10.89.61 0 1.11-.5 1.11-1.11V9.27z" fill="currentColor" />
                </svg>
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 font-body text-xs text-cream/65
                           hover:text-gold transition-colors duration-200 group break-all"
              >
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" aria-hidden="true" className="flex-shrink-0 opacity-55 group-hover:opacity-100 transition-opacity">
                  <rect x="0.5" y="0.5" width="12" height="9" rx="1.5" stroke="currentColor" />
                  <path d="M0.5 2l6 4 6-4" stroke="currentColor" />
                </svg>
                {COMPANY.email}
              </a>
              <p className="font-body text-xs text-cream/38 pl-[1.4rem]">
                {COMPANY.hours}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-dark">
        <div className="container-site py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-cream/38">
            © {new Date().getFullYear()} {COMPANY.name} · NIF {COMPANY.nif}
          </p>
          <p className="font-sans uppercase tracking-[0.18em] text-cream/28"
             style={{ fontSize: '0.48rem' }}>
            Servicio exclusivo B2B · No atendemos a particulares
          </p>
        </div>
      </div>
    </footer>
  )
}

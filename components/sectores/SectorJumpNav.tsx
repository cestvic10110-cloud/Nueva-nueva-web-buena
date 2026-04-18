'use client'

const LINKS = [
  { href: '#navidad',      label: 'Navidad'      },
  { href: '#retail',       label: 'Retail'       },
  { href: '#gourmet',      label: 'Gourmet'      },
  { href: '#corporativo',  label: 'Corporativo'  },
  { href: '#hosteleria',   label: 'Hostelería'   },
  { href: '#interiorismo', label: 'Interiorismo' },
]

export function SectorJumpNav() {
  return (
    <nav aria-label="Ir a sector" className="flex flex-wrap gap-x-5 gap-y-2">
      {LINKS.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="font-sans uppercase tracking-[0.18em] transition-colors duration-200
                     hover:text-gold"
          style={{ fontSize: '0.52rem', color: 'var(--color-text-dim)' }}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}

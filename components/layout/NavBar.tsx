'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

/* Routes where the hero is light-coloured — navbar must start opaque */
function isLightHeroRoute(path: string) {
  return (
    path === '/sectores' ||
    path.startsWith('/catalogo/') ||
    path === '/aviso-legal' ||
    path === '/privacidad' ||
    path === '/cookies'
  )
}

const NAV_LINKS = [
  { href: '/catalogo',    label: 'Catálogo'    },
  { href: '/fabricacion', label: 'Empresa'     },
  { href: '/sectores',    label: 'Sectores'    },
] as const

export function NavBar() {
  const pathname = usePathname()
  const lightHero = isLightHeroRoute(pathname)
  const [scrolled, setScrolled] = useState(lightHero)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(lightHero || window.scrollY > 60)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [lightHero])

  return (
    <header
      style={{ viewTransitionName: 'site-header' }}
      className={cn(
        'fixed top-0 inset-x-0 z-[var(--z-nav)] transition-all duration-500',
        scrolled
          ? 'bg-bark/88 backdrop-blur-[12px] border-b border-border-dark'
          : 'bg-transparent'
      )}
    >
      <nav className="container-site h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/images/logoCesteria.png"
            alt=""
            width={32}
            height={34}
            className="h-8 w-auto object-contain brightness-0 invert opacity-95
                       transition-opacity duration-300 group-hover:opacity-100"
          />
          <span className="font-display text-cream text-lg tracking-[0.2em] uppercase
                           group-hover:text-gold transition-colors duration-300">
            Cestería Vicent
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-sans text-sm font-medium text-cream/90 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/contacto"
            className="nav-text-cta hidden md:inline-flex font-sans text-[0.7rem] font-medium text-cream/80
                       hover:text-gold transition-colors duration-300 tracking-[0.14em] uppercase"
          >
            Solicitar Presupuesto
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className={cn('block w-5 h-px bg-cream transition-all duration-300', menuOpen && 'translate-y-2 rotate-45')} />
            <span className={cn('block w-5 h-px bg-cream transition-all duration-300', menuOpen && 'opacity-0')} />
            <span className={cn('block w-5 h-px bg-cream transition-all duration-300', menuOpen && '-translate-y-2 -rotate-45')} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-64 border-t border-border-dark' : 'max-h-0'
        )}
      >
        <div className="bg-ink/95 backdrop-blur-md px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm font-medium text-cream hover:text-gold transition-colors tracking-wide"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-2 font-sans text-xs text-cream/80 hover:text-gold transition-colors
                       tracking-[0.14em] uppercase border-t border-border-dark pt-4"
          >
            Solicitar Presupuesto →
          </Link>
        </div>
      </div>
    </header>
  )
}

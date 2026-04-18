import Link from 'next/link'

interface Props {
  title: string
  subtitle: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalLayout({ title, subtitle, lastUpdated, children }: Props) {
  return (
    <div className="light-section grain-light min-h-dvh pt-16">

      {/* Hero tipográfico */}
      <div className="border-b" style={{ borderColor: 'var(--color-sand)' }}>
        <div className="container-site pt-16 pb-12 md:pt-24 md:pb-16">
          <nav className="flex items-center gap-2 mb-8 font-sans text-[0.58rem] tracking-[0.18em] uppercase">
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-gold"
              style={{ color: 'var(--color-text-dim)' }}
            >
              Inicio
            </Link>
            <span style={{ color: 'var(--color-sand)' }}>·</span>
            <span style={{ color: 'var(--color-text-secondary)' }}>{title}</span>
          </nav>

          <p
            className="font-sans uppercase tracking-[0.28em] mb-4"
            style={{ fontSize: '0.5rem', color: 'var(--color-text-dim)' }}
          >
            {subtitle}
          </p>
          <h1
            className="font-display italic-serif leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: 'var(--color-text-primary)' }}
          >
            {title}
          </h1>
          <p
            className="font-sans mt-4"
            style={{ fontSize: '0.65rem', color: 'var(--color-text-dim)', letterSpacing: '0.06em' }}
          >
            Última actualización: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-site section-pad">
        <div className="max-w-3xl mx-auto lg:mx-0">
          {children}
        </div>
      </div>

    </div>
  )
}

/* ── Reusable typography atoms ── */

export function LegalH2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display italic-serif leading-tight mt-14 mb-4 first:mt-0"
      style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: 'var(--color-text-primary)' }}
    >
      {children}
    </h2>
  )
}

export function LegalH3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="font-sans font-medium uppercase tracking-[0.14em] mt-8 mb-3"
      style={{ fontSize: '0.62rem', color: 'var(--color-gold)' }}
    >
      {children}
    </h3>
  )
}

export function LegalP({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-body leading-[1.8] mb-4"
      style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)', color: 'var(--color-text-secondary)' }}
    >
      {children}
    </p>
  )
}

export function LegalUl({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-2 mb-6 ml-4">
      {children}
    </ul>
  )
}

export function LegalLi({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="flex items-start gap-3 font-body leading-[1.7]"
      style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)', color: 'var(--color-text-secondary)' }}
    >
      <span
        className="mt-[0.55em] flex-shrink-0 w-1 h-1 rounded-full"
        style={{ backgroundColor: 'var(--color-gold)' }}
        aria-hidden="true"
      />
      {children}
    </li>
  )
}

export function LegalDivider() {
  return (
    <div
      className="my-10 h-px"
      style={{ backgroundColor: 'var(--color-sand)' }}
    />
  )
}

export function LegalHighlight({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="px-5 py-4 rounded-xl mb-6"
      style={{
        backgroundColor: 'rgba(181,132,58,0.06)',
        border: '1px solid rgba(181,132,58,0.16)',
      }}
    >
      <p
        className="font-body leading-[1.75]"
        style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}
      >
        {children}
      </p>
    </div>
  )
}

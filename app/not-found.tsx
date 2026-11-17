import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página no encontrada',
  robots: { index: false },
}

export default function NotFound() {
  return (
    // Fondo oscuro: la barra de navegación es transparente con texto claro en rutas desconocidas
    <section className="on-dark bg-ink section-y min-h-[80dvh] flex items-center">
      <div className="container-site text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="headline mt-5" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}>
          Esta página <em>no existe.</em>
        </h1>
        <p className="lede mt-6 mx-auto" style={{ maxWidth: '32rem' }}>
          Puede que la referencia ya no esté en catálogo o que el enlace sea antiguo.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <Link href="/catalogo" className="btn btn-light">Ver catálogo</Link>
          <Link href="/" className="link-arrow">
            Volver al inicio <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

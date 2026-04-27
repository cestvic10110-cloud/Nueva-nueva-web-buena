'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

export function OpportunityBanner() {
  return (
    <section className="container-site pt-10 pb-6">
      <Link 
        href="/catalogo?categoria=oportunidades" 
        className="group relative block overflow-hidden rounded-2xl bg-soil border border-gold/15 
                   transition-all duration-500 hover:border-gold/40"
      >
        {/* Decorative grain */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
             style={{ backgroundImage: "url('/grain.png')", backgroundSize: '200px 200px' }} />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-10 md:px-16 md:py-12">
          <div className="text-center md:text-left">
            <p className="font-sans text-[0.55rem] text-gold tracking-[0.25em] uppercase mb-3">
              Stock Exclusivo · Unidades Limitadas
            </p>
            <h2 className="font-display italic-serif text-cream leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)' }}>
              ¿Busca artículos de liquidación?
            </h2>
            <p className="font-body text-cream/40 mt-2 text-sm md:text-base">
              Descubra oportunidades únicas con disponibilidad inmediata en nuestro rincón de stock selecto.
            </p>
          </div>

          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-3 font-sans text-[0.65rem] text-ink bg-gold 
                             group-hover:bg-gold-light transition-colors duration-300 px-8 py-4 
                             squircle-sm tracking-[0.15em] uppercase font-medium">
              Entrar al rincón de las oportunidades
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-x-0 group-hover:translate-x-1 transition-transform">
                <path d="M1 6H13M13 6L8.5 1.5M13 6L8.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>

        {/* Abstract shape */}
        <div className="absolute right-[-10%] top-[-50%] w-[40%] aspect-square rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      </Link>
    </section>
  )
}

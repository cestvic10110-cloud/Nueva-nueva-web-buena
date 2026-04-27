'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react'
import { SectionLabel } from '@/components/shared/SectionLabel'

interface IndexCategory {
  slug: string
  num: string
  label: string
  desc: string
  image: string
}

const INDEX_CATEGORIES: IndexCategory[] = [
  {
    slug: 'cestas-navidenas',
    num: '01',
    label: 'Cestas Navideñas',
    desc: 'Para el lote perfecto',
    image: '/Cestas Navideñas/2012.png',
  },
  {
    slug: 'bandejas',
    num: '02',
    label: 'Bandejas',
    desc: 'Presentación premium para hostelería y gourmet',
    image: '/Bandejas/4331.png',
  },
  {
    slug: 'baules',
    num: '03',
    label: 'Baúles',
    desc: 'Gran formato para regalos corporativos exclusivos',
    image: '/Baules/7280.png',
  },
  {
    slug: 'cestas',
    num: '04',
    label: 'Cestas',
    desc: 'Mimbre natural premium',
    image: '/Cestas/7424.png',
  },
  {
    slug: 'cuevanos',
    num: '05',
    label: 'Cuévanos',
    desc: 'Capacidad y resistencia',
    image: '/Forja/4550.png',
  },
  {
    slug: 'forja',
    num: '06',
    label: 'Forja & Madera',
    desc: 'Materiales complementarios',
    image: '/Forja/9480.png',
  },
]

const N = INDEX_CATEGORIES.length // 6

export function MaterialIndex() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  /* Map scroll 0→1 to category index 0→5 */
  const rawIndex = useTransform(scrollYProgress, (v) => {
    const idx = Math.round(v * (N - 1))
    return Math.min(N - 1, Math.max(0, idx))
  })

  useMotionValueEvent(rawIndex, 'change', (v) => setActive(v))

  /* Progress bar */
  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    /* 700vh scroll rail */
    <section
      ref={sectionRef}
      className="bg-soil"
      style={{ height: '360vh' }}
      aria-label="Nuestras Soluciones"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        <div className="h-full flex flex-col">

          {/* Label */}
          <div className="container-site pt-10 pb-4 flex-shrink-0">
            <SectionLabel>Nuestras Soluciones</SectionLabel>
          </div>

          {/* Main area */}
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">

            {/* Left: dominant image 50% */}
            <div className="relative w-full md:w-1/2 h-[40vmin] md:h-full flex-shrink-0 overflow-hidden">
              <AnimatePresence mode="sync">
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={INDEX_CATEGORIES[active].image}
                    alt={INDEX_CATEGORIES[active].label}
                    fill
                    className="object-contain object-center p-4 md:p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
              {/* Right vignette blend */}
              <div className="hidden md:block absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-soil/40 to-transparent pointer-events-none" />
            </div>

            {/* Right: category index 50% */}
            <nav
              className="flex flex-col justify-center flex-1 px-8 md:px-12 lg:px-16 pb-8 md:pb-0"
              aria-label="Categorías de producto"
            >
              <ul>
                {INDEX_CATEGORIES.map((cat, i) => (
                  <li key={cat.slug}>
                    <div
                      className="group flex items-baseline gap-4 py-4 border-b border-border-dark/35 last:border-0
                                 transition-colors duration-200 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault()
                        if (!sectionRef.current) return
                        const rect = sectionRef.current.getBoundingClientRect()
                        const sectionTop = rect.top + window.scrollY
                        const sectionHeight = sectionRef.current.offsetHeight
                        const viewportHeight = window.innerHeight
                        const scrollableDistance = sectionHeight - viewportHeight
                        const targetScroll = sectionTop + (i / (INDEX_CATEGORIES.length - 1)) * scrollableDistance
                        
                        window.scrollTo({
                          top: targetScroll,
                          behavior: 'smooth'
                        })
                      }}
                    >
                      {/* Number */}
                      <span className="font-body tabular-nums text-[0.6rem] tracking-[0.15em] text-cream/55 flex-shrink-0 w-8">
                        {cat.num}
                      </span>

                      {/* Label + description */}
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-display leading-tight transition-colors duration-300"
                          style={{
                            fontSize: 'clamp(1.15rem, 2.2vw, 1.9rem)',
                            color: active === i ? '#F5F0E8' : 'rgba(245,240,232,0.55)',
                          }}
                        >
                          {cat.label}
                        </p>
                        <p
                          className="font-body text-[0.8rem] italic transition-all duration-300 overflow-hidden"
                          style={{
                            color: active === i ? 'rgba(181,132,58,0.75)' : 'transparent',
                            maxHeight: active === i ? '1.5rem' : '0',
                            opacity: active === i ? 1 : 0,
                            marginTop: active === i ? '0.2rem' : '0',
                          }}
                          aria-hidden={active !== i}
                        >
                          {cat.desc}
                        </p>
                      </div>

                      {/* Arrow/Link to catalog - only visible when active */}
                      <Link
                        href={`/catalogo?categoria=${cat.slug}`}
                        className="font-sans text-xs text-gold transition-all duration-300 flex-shrink-0 hover:scale-125"
                        style={{
                          opacity: active === i ? 1 : 0,
                          transform: active === i ? 'translateX(0)' : 'translateX(-8px)',
                          pointerEvents: active === i ? 'auto' : 'none'
                        }}
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Ver ${cat.label} en el catálogo`}
                      >
                        →
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href="/catalogo"
                className="mt-6 text-label text-cream/50 hover:text-gold transition-colors duration-300"
              >
                + Embalajes · Estuches · Madera
              </Link>
            </nav>

          </div>

          {/* Progress bar */}
          <div className="flex-shrink-0 h-[2px]" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
            <motion.div
              className="h-full origin-left"
              style={{ scaleX: barScale, backgroundColor: 'var(--color-gold)' }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}

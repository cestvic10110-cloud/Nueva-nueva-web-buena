'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion, AnimatePresence } from 'motion/react'

const PANELS = [
  {
    index: '01',
    title: 'Raíces y Materiales: Fibras naturales y sostenibles',
    body: 'Seleccionamos las mejores fibras naturales de cultivo sostenible. Cada vara de mimbre es escogida a mano atendiendo a su grosor, flexibilidad y color para garantizar la máxima calidad.',
    image: '/fotos-web/fotomimbre.png',
  },
  {
    index: '02',
    title: 'Medio siglo de historia: Excelencia técnica y visión atemporal',
    body: 'Cinco décadas de evolución constante y perfeccionamiento. Nuestra trayectoria define un estándar de calidad superior, donde cada pieza es el resultado de un conocimiento profundo y una estética sofisticada.',
    image: '/fotos-web/fotodesliza2.png',
  },
  {
    index: '03',
    title: 'El Acabado',
    body: 'Cada pieza pasa por revisión manual. Tintes naturales, barnices al agua, refuerzos de estructura — nada sale sin firma.',
    image: '/fotos-web/fotoacabado85.png',
  },
  {
    index: '04',
    title: 'El Resultado',
    body: 'Un contenedor exclusivo diseñado para elevar su producto. Desde el taller de Aielo de Malferit hasta el lineal de su empresa.',
    image: '/fotos-web/pasd.png',
  },
] as const

const ease = [0.16, 1, 0.3, 1] as const

/* ── Mobile: carrusel snap táctil ── */
function CraftMobile() {
  return (
    <section className="md:hidden bg-soil overflow-hidden py-16">
      <div className="container-site mb-8">
        <p className="font-display italic-serif text-cream leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>
          El Proceso
        </p>
        <div className="h-px mt-4 w-16" style={{ backgroundColor: 'var(--color-gold)', opacity: 0.5 }} />
      </div>

      <div
        className="flex snap-x snap-mandatory overflow-x-auto"
        style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', paddingLeft: 'clamp(1.25rem,5vw,4rem)', gap: '0.75rem' }}
      >
        {PANELS.map((panel) => (
          <div
            key={panel.index}
            className="snap-start flex-shrink-0 relative rounded-2xl overflow-hidden bg-bark"
            style={{ width: '80vw', aspectRatio: '3/4' }}
          >
            {panel.uncropped ? (
              <img src={panel.image} alt={panel.title} className="w-full h-full object-contain" />
            ) : (
              <Image src={panel.image} alt={panel.title} fill className="object-cover object-center" sizes="80vw" />
            )}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,13,11,0.92) 0%, rgba(15,13,11,0.2) 50%, transparent 75%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-sans uppercase tracking-[0.2em] mb-2"
                style={{ fontSize: '0.48rem', color: 'var(--color-gold)', opacity: 0.8 }}>
                {panel.index} / 04
              </p>
              <p className="font-display italic-serif text-cream leading-tight mb-2"
                style={{ fontSize: 'clamp(1.3rem, 4vw, 1.8rem)' }}>
                {panel.title}
              </p>
              <p className="font-body text-cream/62 leading-relaxed" style={{ fontSize: '0.825rem' }}>
                {panel.body}
              </p>
            </div>
          </div>
        ))}
        <div className="flex-shrink-0" style={{ width: 'clamp(1.25rem,5vw,4rem)' }} />
      </div>
    </section>
  )
}

/* ── Desktop: scroll horizontal pinned ── */
function CraftDesktop() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activePanel, setActivePanel] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  /* Strip x: 0 → -300vw */
  const panelX = useTransform(scrollYProgress, [0, 1], ['0vw', '-300vw'])

  /* Progress bar */
  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  /*
    Panel index from scroll progress.
    Panel i centered at scrollYProgress = i/3.
    Use Math.round to snap to nearest panel.
  */
  const rawPanel = useTransform(scrollYProgress, (v) => {
    const idx = Math.round(v * 3)
    return Math.min(3, Math.max(0, idx))
  })

  useMotionValueEvent(rawPanel, 'change', (v) => {
    setActivePanel(v)
  })

  return (
    <section
      ref={sectionRef}
      className="hidden md:block"
      style={{ height: '500vh' }}
      aria-label="El proceso de creación de Cestería Vicent"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-ink">

        {/* Strip — se mueve horizontalmente */}
        <motion.div
          className="flex h-full"
          style={{ x: panelX, width: '400vw' }}
        >
          {PANELS.map((panel, i) => (
            <div
              key={panel.index}
              className="relative flex-shrink-0 h-full"
              style={{ width: '100vw' }}
            >
              {/* Foto full-bleed */}
              {panel.uncropped ? (
                <div className="flex items-center justify-center h-full w-full bg-soil">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ) : (
                <Image
                  src={panel.image}
                  alt={panel.title}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  quality={88}
                  priority={i === 0}
                />
              )}

              {/* Gradiente */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: [
                    'linear-gradient(105deg, rgba(15,13,11,0.93) 0%, rgba(15,13,11,0.82) 25%, rgba(15,13,11,0.45) 52%, rgba(15,13,11,0.08) 72%, transparent 100%)',
                    'linear-gradient(to top, rgba(15,13,11,0.65) 0%, transparent 38%)',
                    'linear-gradient(to bottom, rgba(15,13,11,0.55) 0%, transparent 22%)',
                  ].join(', '),
                }}
              />

              {/* Contador */}
              <div className="absolute top-10 left-14 lg:left-20">
                <span className="font-sans tabular-nums"
                  style={{ fontSize: '0.52rem', color: 'var(--color-cream)', opacity: 0.32, letterSpacing: '0.24em' }}>
                  {panel.index} / 04
                </span>
              </div>

              {/* Bloque de texto — AnimatePresence por panel activo */}
              <div className="absolute inset-0 flex items-center pointer-events-none">
                <div className="px-14 lg:px-20 xl:px-28" style={{ maxWidth: 'min(44rem, 52vw)' }}>
                  <AnimatePresence mode="wait">
                    {activePanel === i && (
                      <motion.div
                        key={`text-${i}`}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.55, ease }}
                      >
                        <p
                          className="font-display italic-serif text-cream leading-[0.9] mb-5"
                          style={{ fontSize: 'clamp(2.4rem, 5vw, 5.5rem)' }}
                        >
                          {panel.title}
                        </p>

                        <div className="h-px mb-6" style={{ width: '4.5rem', backgroundColor: 'var(--color-gold)', opacity: 0.55 }} />

                        <p className="font-body text-cream/72 leading-relaxed"
                          style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', maxWidth: '29rem' }}>
                          {panel.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>
          ))}
        </motion.div>

        {/* Barra de progreso */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
          <motion.div
            className="h-full origin-left"
            style={{ scaleX: barScale, backgroundColor: 'var(--color-gold)' }}
          />
        </div>

        {/* Etiqueta sección */}
        <div className="absolute top-10 right-14 hidden lg:block pointer-events-none">
          <p className="font-sans uppercase tracking-[0.3em]"
            style={{ fontSize: '0.46rem', color: 'var(--color-cream)', opacity: 0.22 }}>
            El Proceso de Creación
          </p>
        </div>

      </div>
    </section>
  )
}

/* ── Export ── */
export function CraftProcess() {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <section className="bg-soil overflow-hidden py-16">
        <div className="container-site mb-8">
          <p className="font-display italic-serif text-cream leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>
            El Proceso
          </p>
        </div>
        <div className="container-site grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PANELS.map((panel) => (
            <div key={panel.index} className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <Image src={panel.image} alt={panel.title} fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,13,11,0.88) 0%, transparent 55%)' }} />
              <div className="absolute bottom-0 p-5">
                <p className="font-display italic-serif text-cream leading-tight mb-1"
                  style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)' }}>{panel.title}</p>
                <p className="font-body text-cream/60 text-xs leading-relaxed">{panel.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <>
      <CraftMobile />
      <CraftDesktop />
    </>
  )
}

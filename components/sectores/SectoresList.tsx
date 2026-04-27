'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

interface Sector {
  key: string
  num: string
  title: string
  headline: string
  body: string
  services: string[]
  image: string
  imageAlt: string
}

const SECTORS: Sector[] = [
  {
    key: 'navidad',
    num: '01',
    title: 'Lotes de Navidad B2B',
    headline: 'El proveedor de confianza para la campaña más exigente del año.',
    body: 'La campaña navideña no admite errores de suministro. En Cestería Vicent llevamos décadas siendo el proveedor silencioso detrás de las campañas más grandes: conocemos los plazos de cierre de compras, los volúmenes que se disparan en octubre y la presión que siente cualquier Director de Compras cuando el stock no llega a tiempo. Nuestro inventario permanente y nuestra capacidad de producción propia en Valencia garantizan que su pedido esté listo, con la consistencia de unidad que su marca necesita. Personalizamos los acabados para convertir cada cesta en una extensión de su identidad.',
    services: ['Stock garantizado desde septiembre', 'Entrega escalonada en lotes', 'Personalización exclusiva', 'Precios escalonados por volumen'],
    image: '/fotos-web/lote-navidad.png',
    imageAlt: 'Cestas navideñas artesanales para lotes B2B',
  },
  {
    key: 'retail',
    num: '02',
    title: 'Retail & Gran Distribución',
    headline: 'Suministro continuo para cadenas que no pueden permitirse roturas de stock.',
    body: 'Las cadenas de gran distribución necesitan un proveedor que piense en escala industrial sin sacrificar el acabado. Somos ese proveedor. Gestionamos pedidos recurrentes para centrales de compra, coordinamos entregas a almacenes logísticos en toda la península y mantenemos referencias de rotación permanente con reposición garantizada con envíos rápidos para artículos en stock. Nuestros capazos y cestas de mimbre, personalizados con la identidad visual de su cadena, elevan el valor percibido de cualquier producto gourmet o promoción estacional en el lineal.',
    services: ['+130 referencias en stock', 'Personalización con marca propia', 'Logística a centros de distribución'],
    image: '/fotos-web/supermercados.png',
    imageAlt: 'Cestas de mimbre para retail y gran distribución',
  },
  {
    key: 'gourmet',
    num: '03',
    title: 'Gourmet Premium',
    headline: 'La presentación artesanal que su producto de alta gama está esperando.',
    body: 'Una botella de aceite de oliva virgen extra o un vino de autor no merecen una caja de cartón. Las cestas artesanales de Cestería Vicent son el contenedor que añade valor narrativo al producto: hablan de origen, de proceso manual, de atención al detalle. Trabajamos con productores de delicatessen, bodegas, cárnicas de alta gama y distribuidores especializados que entienden que la presentación forma parte del producto. Los acabados naturales —mimbre sin tratar, barniz al agua, madera local— transmiten exactamente los valores que su marca gourmet necesita comunicar.',
    services: ['Acabados naturales certificados', 'Asesoramiento en modelo óptimo', 'Materiales de primera calidad'],
    image: '/fotos-web/empresas-gourmet.png',
    imageAlt: 'Cestas artesanales para empresas gourmet premium',
  },
  {
    key: 'corporativo',
    num: '04',
    title: 'Regalo Corporativo',
    headline: 'El regalo que diferencia a las empresas que cuidan cada detalle.',
    body: 'Regalar bien es una decisión estratégica. Las cestas artesanales de mimbre comunican, en el mismo acto de entrega, que quien las envía valora la artesanía, el origen y lo duradero sobre lo desechable. Trabajamos con departamentos de RRHH, agencias de eventos y responsables de comunicación que necesitan escalar un regalo con carácter sin perder calidad unitaria. Personalizamos cada pedido para adaptarlo a su imagen corporativa, manteniendo los mismos estándares de acabado en toda la serie.',
    services: ['Personalización corporativa completa', 'Asesoramiento en selección y presentación'],
    image: '/fotos-web/regalo-corporativo.png',
    imageAlt: 'Cestas artesanales para regalo corporativo empresarial',
  },
  {
    key: 'hosteleria',
    num: '05',
    title: 'Hostelería de Lujo y Contract',
    headline: 'El detalle artesanal que define la experiencia de sus huéspedes.',
    body: 'Los hoteles de cuatro y cinco estrellas, los restaurantes de alta cocina y los venues de eventos premium comparten una exigencia: cada elemento del espacio debe hablar el mismo idioma estético. Desarrollamos piezas de sala, presentadores de amenities, cestas de bienvenida y elementos decorativos diseñados en colaboración con el equipo de F&B o de interiorismo del establecimiento. No producimos de catálogo para este sector —diseñamos junto al cliente. La durabilidad para uso intensivo diario y la coherencia entre piezas de la misma serie están garantizadas desde el proceso de producción. Trabajamos con grupos hoteleros que necesitan uniformidad en todos sus establecimientos.',
    services: ['Diseño exclusivo por establecimiento', 'Durabilidad para uso profesional intensivo', 'Coherencia en series de múltiples piezas', 'Reposición programada por temporada'],
    image: '/fotos-web/Fotohotel.png',
    imageAlt: 'Cestas artesanales para hostelería y hoteles de lujo',
  },
  {
    key: 'interiorismo',
    num: '06',
    title: 'Interiorismo y Escaparatismo',
    headline: 'Piezas únicas que convierten cualquier espacio en una declaración de intenciones.',
    body: 'Los estudios de interiorismo y los departamentos de visual merchandising recurren a Cestería Vicent cuando necesitan algo que los catálogos estándar no ofrecen. Dimensiones fuera de escala, combinaciones de materiales inéditas, acabados específicos para una paleta de colores de marca: lo desarrollamos en nuestro taller de Aielo de Malferit con un tiempo de muestra de 10 a 15 días laborables. Diseñamos para escaparates de moda y cosmética, para instalaciones de retail en campañas de temporada y para proyectos de interiorismo residencial y contract que necesitan piezas con carácter artesanal certificado. El prototipo único está disponible si el proyecto lo requiere.',
    services: ['Prototipos en 10–15 días laborables', 'Dimensiones y acabados a medida', 'Material sostenible certificado'],
    image: '/fotos-web/Escaparate.png',
    imageAlt: 'Cestas artesanales para interiorismo y escaparatismo',
  },
]

export function SectoresList() {
  return (
    <section className="light-section grain-light" aria-label="Sectores B2B de Cestería Vicent">

      {SECTORS.map((sector, i) => (
        <div
          key={sector.key}
          id={sector.key}
          className="border-b"
          style={{ borderColor: 'var(--color-sand)' }}
        >
          <div className="container-site py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-x-12 lg:gap-x-20 items-start">

              {/* ── LEFT: sticky number + title ── */}
              <div className="md:sticky md:top-28 self-start mb-10 md:mb-0">

                <motion.p
                  className="font-display font-semibold text-stroke-gold leading-none select-none mb-4"
                  style={{ fontSize: 'clamp(4.5rem, 11vw, 10rem)' }}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.75, ease }}
                  aria-hidden="true"
                >
                  {sector.num}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.15, ease }}
                >
                  <div className="h-px mb-5 w-10" style={{ backgroundColor: 'var(--color-gold)', opacity: 0.55 }} />

                  <h2
                    className="font-display italic-serif leading-tight mb-6"
                    style={{
                      fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {sector.title}
                  </h2>

                  <Link
                    href="/contacto"
                    className="group inline-flex items-center gap-2 font-sans uppercase tracking-[0.18em]
                               transition-colors duration-300"
                    style={{ fontSize: '0.54rem', color: 'var(--color-gold)' }}
                  >
                    Consultar solución
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
                  </Link>
                </motion.div>

              </div>

              {/* ── RIGHT: scrolls ── */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.75, delay: 0.08, ease }}
              >

                {/* Headline */}
                <p
                  className="font-display italic-serif leading-tight mb-6"
                  style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.6rem)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {sector.headline}
                </p>

                {/* Gold rule */}
                <div className="h-px mb-7 w-16" style={{ backgroundColor: 'var(--color-gold)', opacity: 0.4 }} />

                {/* Body */}
                <p
                  className="font-body leading-relaxed mb-8"
                  style={{
                    fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                    color: 'var(--color-text-secondary)',
                    maxWidth: '48rem',
                  }}
                >
                  {sector.body}
                </p>

                {/* Service chips */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {sector.services.map((s) => (
                    <span
                      key={s}
                      className="font-sans uppercase tracking-[0.14em] px-3 py-1.5"
                      style={{
                        fontSize: '0.5rem',
                        color: 'var(--color-text-secondary)',
                        backgroundColor: 'var(--color-sand)',
                        borderRadius: '2px',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Image */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  style={{
                    aspectRatio: (sector.key === 'hosteleria' || sector.key === 'interiorismo') ? 'auto' : (i % 2 === 0 ? '4/3' : '16/9'),
                    backgroundColor: 'var(--color-sand)',
                  }}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, delay: 0.18, ease }}
                >
                  {(sector.key === 'hosteleria' || sector.key === 'interiorismo') ? (
                    <img
                      src={sector.image}
                      alt={sector.imageAlt}
                      className="w-full h-auto block"
                    />
                  ) : (
                    <Image
                      src={sector.image}
                      alt={sector.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 58vw"
                    />
                  )}
                  {/* Gold top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ backgroundColor: 'var(--color-gold)', opacity: 0.45 }}
                  />
                </motion.div>

              </motion.div>

            </div>
          </div>
        </div>
      ))}

    </section>
  )
}

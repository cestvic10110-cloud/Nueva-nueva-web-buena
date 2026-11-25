import type { CategorySlug } from './types'
import { NAVIDAD_LANDING_PATH } from './constants'

/*
 * Páginas por familia de producto (spec 2026-11-18, enfoque A).
 * Reglas: solo hechos del catálogo y de la web; venta solo a empresas y por
 * cantidades; sin cifras de pedido mínimo, plazos ni precios ("consúltenos");
 * "fabricamos" solo para mimbre, "suministramos" para el resto.
 */

export interface FamilyLanding {
  /** Ruta sin barra inicial, p. ej. "viruta-de-celofan-al-por-mayor" */
  slug: string
  /** Categoría del catálogo a la que enlaza la página */
  category: CategorySlug
  /** Referencias concretas a mostrar; si falta, toda la categoría */
  productIds?: string[]
  title: string
  description: string
  eyebrow: string
  h1: { before: string; em: string; after?: string }
  lede: string
  heroImage: string
  heroAlt: string
  intro: [string, string]
  highlights: { title: string; body: string }[]
  uses: string[]
  faqs: { q: string; a: string }[]
  related: string[]
}

export const FAMILY_LANDINGS: FamilyLanding[] = [
  {
    slug: 'cestas-de-mimbre-al-por-mayor',
    category: 'cestas',
    title: 'Cestas de Mimbre al por Mayor para Empresas',
    description: 'Cestas de mimbre ovaladas y rectangulares, en bicolor, nogal o negro, y también de palma, esparto y bambú. Fabricantes en Valencia desde 1969. Venta solo a empresas.',
    eyebrow: 'Cestas · Venta al por mayor',
    h1: { before: 'Cestas de mimbre', em: 'al por mayor', after: 'para empresas' },
    lede: 'Cestas ovaladas y rectangulares en varias tallas y acabados, para presentar y vender su producto. Venta exclusiva a empresas y siempre por cantidades, desde nuestro taller de Valencia.',
    heroImage: '/Cestas/7424.png',
    heroAlt: 'Cesta rectangular de mimbre bicolor',
    intro: [
      'Nuestra gama de cestas combina formas ovaladas y rectangulares con acabados en bicolor, nogal, negro o con cordón plata, y modelos forrados para presentar alimentación o regalo. Además del mimbre, trabajamos fibras como la palma, el esparto y el bambú.',
      'La mayoría de modelos se sirven en dos o tres tallas, desde 40 × 30 cm hasta 60 × 40 cm, con asa fija o abatible. Así puede mantener una misma línea de presentación en distintos tamaños de pedido o de lote.',
    ],
    highlights: [
      { title: 'Varias tallas por modelo', body: 'Series de 40 × 30, 50 × 35 y 60 × 40 cm en los modelos más usados.' },
      { title: 'Acabados a elegir', body: 'Bicolor, nogal, negro, cordón plata o forrado interior.' },
      { title: 'Otras fibras naturales', body: 'Además del mimbre, palma, esparto y bambú.' },
      { title: 'Solo por cantidades', body: 'Venta a empresas por volumen. Pedido mínimo según referencia: consúltenos.' },
    ],
    uses: ['Lotes y regalo de empresa', 'Tiendas gourmet', 'Exposición en tienda', 'Hostelería', 'Floristería y decoración'],
    faqs: [
      { q: '¿En qué tallas están disponibles las cestas?', a: 'Depende del modelo. Las series ovaladas y rectangulares se sirven habitualmente en 40 × 30, 50 × 35 y, en algunos modelos, 60 × 40 cm. Cada ficha del catálogo indica sus medidas exactas.' },
      { q: '¿Las cestas son solo de mimbre?', a: 'No. Además del mimbre tenemos modelos de palma, esparto y bambú, y versiones forradas por dentro.' },
      { q: '¿Cuál es el pedido mínimo?', a: 'Vendemos siempre por cantidades y nunca unidades sueltas. El mínimo depende de la referencia: consúltenos y le indicamos las condiciones.' },
      { q: '¿Venden a particulares?', a: 'No. Trabajamos exclusivamente con empresas y no enviamos muestras.' },
    ],
    related: ['cuevanos-al-por-mayor', 'bandejas-al-por-mayor', 'embalajes-para-cestas-y-lotes'],
  },
  {
    slug: 'bandejas-al-por-mayor',
    category: 'bandejas',
    title: 'Bandejas de Mimbre y Presentación al por Mayor',
    description: 'Bandejas de mimbre con asas de madera, seagrass, PVC, forradas, de madera y bandeja jamonera de 75 × 40 cm. Para gourmet y hostelería. Venta solo a empresas.',
    eyebrow: 'Bandejas · Venta al por mayor',
    h1: { before: 'Bandejas de mimbre', em: 'y presentación', after: 'al por mayor' },
    lede: 'Bandejas para presentar producto gourmet, embutidos y lotes, en mimbre, seagrass, PVC y madera. Venta exclusiva a empresas, por cantidades.',
    heroImage: '/Bandejas/4338.png',
    heroAlt: 'Bandeja de mimbre nogal con asas de madera',
    intro: [
      'Tenemos bandejas para cada tipo de presentación: de mimbre con asas de madera, de seagrass, de PVC en blanco, marrón o nogal, forradas en blanco o castaño, y bandejas de madera. Para piezas grandes, la bandeja jamonera ancha mide 75 × 40 cm.',
      'Las medidas van desde formatos pequeños de 25 × 15 cm hasta series de tres tallas como la bandeja nogal con asas de madera (55 × 35, 65 × 40 y 75 × 45 cm), pensadas para lotes de distinto tamaño.',
    ],
    highlights: [
      { title: 'Desde 25 hasta 75 cm', body: 'De bandejas pequeñas a la jamonera ancha de 75 × 40 cm.' },
      { title: 'Varios materiales', body: 'Mimbre, seagrass, PVC, madera y versiones forradas.' },
      { title: 'Series en tallas', body: 'Modelos en dos o tres medidas para mantener la misma línea.' },
      { title: 'Solo por cantidades', body: 'Venta a empresas por volumen. Pedido mínimo según referencia: consúltenos.' },
    ],
    uses: ['Lotes de embutidos y jamón', 'Tiendas gourmet', 'Hostelería y buffet', 'Regalo de empresa', 'Exposición en lineal'],
    faqs: [
      { q: '¿Tienen bandejas para jamón?', a: 'Sí. La bandeja jamonera ancha mide 75 × 40 × 8 cm, y también tenemos jamoneros de madera en la sección de envases de madera.' },
      { q: '¿De qué materiales son las bandejas?', a: 'De mimbre (con o sin asas de madera), seagrass, PVC, madera y modelos forrados en tela.' },
      { q: '¿Cuál es el pedido mínimo?', a: 'Vendemos por cantidades, nunca unidades sueltas. El mínimo depende de la referencia: consúltenos.' },
      { q: '¿Envían a toda España?', a: 'Sí. Servimos desde nuestro taller de Valencia a toda España.' },
    ],
    related: ['envases-de-madera-al-por-mayor', 'cestas-de-mimbre-al-por-mayor', 'forja-decorativa-al-por-mayor'],
  },
  {
    slug: 'baules-al-por-mayor',
    category: 'baules',
    title: 'Baúles y Cajas Decorativas al por Mayor',
    description: 'Baúles de mimbre forrados en tres tallas, baúles plegables y decorados, baúl de madera con correas y cajas decorativas. Para regalo corporativo. Venta solo a empresas.',
    eyebrow: 'Baúles · Venta al por mayor',
    h1: { before: 'Baúles y cajas', em: 'decorativas', after: 'al por mayor' },
    lede: 'Baúles de gran formato para regalos corporativos y lotes que piden presencia. Venta exclusiva a empresas, por cantidades.',
    heroImage: '/Baules/7262.png',
    heroAlt: 'Baúl de madera con correas y tapa acolchada',
    intro: [
      'Los baúles son el envase de mayor capacidad del catálogo: baúles de mimbre forrados en blanco o buff, baúles plegables con diseños como Window, Vespa o Explore, baúles decorados (mosaico, paisaje, cóctel, flores) y un baúl de madera con correas y tapa acolchada.',
      'Muchos modelos se sirven en juegos de dos o tres tallas, desde 50 × 25 hasta 80 × 40 × 40 cm. Los plegables ocupan menos en almacén hasta el momento de montar el lote, y las cajas Elegance y Armonía completan la gama en formato más compacto.',
    ],
    highlights: [
      { title: 'Hasta 80 × 40 × 40 cm', body: 'El formato más grande del catálogo para lotes de gran volumen.' },
      { title: 'Modelos plegables', body: 'Ahorran espacio en almacén hasta el montaje del lote.' },
      { title: 'Diseños decorados', body: 'Mosaico, paisaje, cóctel, flores, viaje y más.' },
      { title: 'Solo por cantidades', body: 'Venta a empresas por volumen. Pedido mínimo según referencia: consúltenos.' },
    ],
    uses: ['Regalo corporativo', 'Lotes de Navidad premium', 'Tiendas de regalo', 'Decoración y escaparatismo'],
    faqs: [
      { q: '¿Qué tamaños de baúl tienen?', a: 'Desde 50 × 25 × 25 cm hasta 80 × 40 × 40 cm. Muchos modelos se sirven en juegos de dos o tres tallas; cada ficha indica sus medidas.' },
      { q: '¿Tienen baúles plegables?', a: 'Sí, por ejemplo los modelos Window, Vespa, Explore y Buda, en 60 × 30 × 30 y 76 × 38 × 38 cm.' },
      { q: '¿Cuál es el pedido mínimo?', a: 'Vendemos por cantidades, nunca unidades sueltas. El mínimo depende de la referencia: consúltenos.' },
      { q: '¿Se pueden personalizar?', a: 'Ofrecemos personalización corporativa según el volumen del pedido. Cuéntenos su proyecto y le indicamos las opciones.' },
    ],
    related: ['estuches-decorativos-al-por-mayor', 'cestas-de-mimbre-al-por-mayor', 'embalajes-para-cestas-y-lotes'],
  },
  {
    slug: 'cuevanos-al-por-mayor',
    category: 'cuevanos',
    title: 'Cuévanos de Mimbre al por Mayor',
    description: 'Cuévanos de mimbre en plata, dorado, marrón, gris forrado y algas, en 40 × 30 y 50 × 30 cm. Capacidad y resistencia. Fabricantes en Valencia. Venta solo a empresas.',
    eyebrow: 'Cuévanos · Venta al por mayor',
    h1: { before: 'Cuévanos de mimbre', em: 'al por mayor' },
    lede: 'El cuévano tradicional, con capacidad y resistencia, en acabados actuales. Venta exclusiva a empresas, por cantidades.',
    heroImage: '/Cuevanos/4523.png',
    heroAlt: 'Cuévano de mimbre marrón y blanco',
    intro: [
      'El cuévano es una de las piezas más tradicionales de la cestería: un envase hondo y resistente, pensado para cargar volumen. Lo ofrecemos en acabados plata y blanco, marrón y blanco, dorado, gris forrado, en algas y con asas de mimbre.',
      'Se sirven en dos formatos principales, 40 × 30 × 15 cm y 50 × 30 × 20 cm, para presentar fruta, productos de temporada o lotes de mayor peso. Si busca la versión metálica, la encontrará en forja decorativa.',
    ],
    highlights: [
      { title: 'Dos formatos', body: '40 × 30 × 15 cm y 50 × 30 × 20 cm.' },
      { title: 'Acabados actuales', body: 'Plata, dorado, marrón, gris forrado y algas.' },
      { title: 'Capacidad y resistencia', body: 'Envase hondo para productos de más peso.' },
      { title: 'Solo por cantidades', body: 'Venta a empresas por volumen. Pedido mínimo según referencia: consúltenos.' },
    ],
    uses: ['Fruta y producto de temporada', 'Lotes de mayor peso', 'Tiendas de alimentación', 'Decoración'],
    faqs: [
      { q: '¿Qué medidas tienen los cuévanos?', a: 'Principalmente 40 × 30 × 15 cm y 50 × 30 × 20 cm, según el modelo.' },
      { q: '¿Tienen cuévanos metálicos?', a: 'Sí, en la sección de forja decorativa hay cuévanos de metal, también en versión forrada.' },
      { q: '¿Cuál es el pedido mínimo?', a: 'Vendemos por cantidades, nunca unidades sueltas. El mínimo depende de la referencia: consúltenos.' },
      { q: '¿Venden a particulares?', a: 'No. Trabajamos exclusivamente con empresas.' },
    ],
    related: ['cestas-de-mimbre-al-por-mayor', 'forja-decorativa-al-por-mayor', 'bandejas-al-por-mayor'],
  },
  {
    slug: 'viruta-de-celofan-al-por-mayor',
    category: 'embalajes',
    productIds: ['8500', '8503', 'CI', 'LL50'],
    title: 'Viruta de Celofán al por Mayor para Cestas y Lotes',
    description: 'Viruta de celofán por kilo en balas de unos 50 kg y viruta de papel en balas de 10 kg, para rellenar cestas y lotes. Venta solo a empresas.',
    eyebrow: 'Embalaje · Venta al por mayor',
    h1: { before: 'Viruta de celofán', em: 'al por mayor' },
    lede: 'Relleno para cestas, cajas y lotes, servido por kilo en balas. Venta exclusiva a empresas.',
    heroImage: '/Embalajes/8500.png',
    heroAlt: 'Bala de viruta de celofán',
    intro: [
      'La viruta de celofán es el relleno que da volumen y presentación a cestas, cajas y lotes. La servimos por kilo, en balas de aproximadamente 50 kg, un formato pensado para quien prepara lotes en cantidad.',
      'Si prefiere un acabado más natural, también tenemos viruta de papel en balas de 10 kg. Y para cerrar el lote, celofán incoloro de 35 micras en rollo y lazos automáticos de 5 cm en varios colores.',
    ],
    highlights: [
      { title: 'Por kilo, en balas', body: 'Viruta de celofán en balas de unos 50 kg.' },
      { title: 'Alternativa en papel', body: 'Viruta de papel en balas de 10 kg.' },
      { title: 'Para cerrar el lote', body: 'Celofán incoloro de 35 micras y lazo automático.' },
      { title: 'Solo para empresas', body: 'Pedido mínimo y condiciones según volumen: consúltenos.' },
    ],
    uses: ['Relleno de cestas y lotes', 'Cajas de regalo', 'Montadores de lotes', 'Tiendas gourmet'],
    faqs: [
      { q: '¿Cómo se vende la viruta de celofán?', a: 'Por kilo, en balas de aproximadamente 50 kg.' },
      { q: '¿Tienen viruta de papel?', a: 'Sí, en balas de 10 kg, como alternativa al celofán.' },
      { q: '¿Qué más necesito para presentar el lote?', a: 'Tenemos celofán incoloro de 35 micras en rollos de 50 y 100 m, lazos automáticos de 5 cm en rojo, dorado, plata y verde, y cestas, bandejas y cajas para el envase.' },
      { q: '¿Venden cantidades pequeñas?', a: 'No. Trabajamos solo con empresas y por cantidades. Consúltenos las condiciones para su pedido.' },
    ],
    related: ['embalajes-para-cestas-y-lotes', 'cestas-de-mimbre-al-por-mayor', 'baules-al-por-mayor'],
  },
  {
    slug: 'embalajes-para-cestas-y-lotes',
    category: 'embalajes',
    title: 'Embalajes para Cestas y Lotes al por Mayor',
    description: 'Celofán incoloro de 35 micras en rollo, lazo automático, viruta de celofán y de papel, cajas plegables con imán y adornos. Todo para presentar lotes. Venta solo a empresas.',
    eyebrow: 'Embalajes · Venta al por mayor',
    h1: { before: 'Embalajes para', em: 'cestas y lotes', after: 'al por mayor' },
    lede: 'Todo lo que acompaña al envase para presentar el lote terminado. Venta exclusiva a empresas, por cantidades.',
    heroImage: '/Embalajes/lazorojo.png',
    heroAlt: 'Lazo automático rojo para lotes',
    intro: [
      'Para que el lote llegue bien presentado hace falta algo más que el envase. Le suministramos celofán incoloro de 35 micras en rollos de 50 m (80 y 90 cm de ancho) y de 100 m (de 60 a 120 cm), lazos automáticos de 5 cm en rojo, dorado, plata y verde, y adornos como el set de mariposas decorativas.',
      'Para el relleno, viruta de celofán en balas de unos 50 kg y viruta de papel en balas de 10 kg. Y si el lote va en caja, la caja de cartón plegable con cierre de imán de 37 × 30 × 12 cm.',
    ],
    highlights: [
      { title: 'Celofán en rollo', body: 'Incoloro, 35 micras, de 60 a 120 cm de ancho.' },
      { title: 'Lazo automático', body: '5 cm, en rojo, dorado, plata y verde.' },
      { title: 'Relleno', body: 'Viruta de celofán y de papel, en balas.' },
      { title: 'Cajas y adornos', body: 'Caja plegable con imán y mariposas decorativas.' },
    ],
    uses: ['Montadores de lotes', 'Tiendas gourmet', 'Floristería', 'Regalo de empresa'],
    faqs: [
      { q: '¿Qué medidas de celofán tienen?', a: 'Celofán incoloro de 35 micras en rollos de 50 m (80 y 90 cm de ancho) y de 100 m (de 60 a 120 cm de ancho).' },
      { q: '¿En qué colores está el lazo automático?', a: 'En rojo, dorado, plata y verde, de 5 cm.' },
      { q: '¿Tienen cajas para lotes?', a: 'Sí, la caja de cartón plegable con cierre de imán de 37 × 30 × 12 cm, además de baúles y estuches decorativos.' },
      { q: '¿Cuál es el pedido mínimo?', a: 'Vendemos solo a empresas y por cantidades. Consúltenos las condiciones de cada referencia.' },
    ],
    related: ['viruta-de-celofan-al-por-mayor', 'estuches-decorativos-al-por-mayor', 'cestas-de-mimbre-al-por-mayor'],
  },
  {
    slug: 'estuches-decorativos-al-por-mayor',
    category: 'estuches',
    title: 'Estuches Decorativos al por Mayor para Regalo',
    description: 'Estuches decorativos de 40 × 30 × 15 cm con diseños Nieve, Vespa y Bici, y maleta negra con herrajes dorados. Para regalo y lotes. Venta solo a empresas.',
    eyebrow: 'Estuches · Venta al por mayor',
    h1: { before: 'Estuches decorativos', em: 'al por mayor' },
    lede: 'Estuches con diseño para regalos y lotes que se recuerdan. Venta exclusiva a empresas, por cantidades.',
    heroImage: '/Estuches/7859.png',
    heroAlt: 'Estuche decorativo navideño Nieve',
    intro: [
      'Los estuches convierten el envase en parte del regalo. Tenemos estuches de 40 × 30 × 15 cm con diseños como Nieve, de ambiente navideño, Vespa o Bici, y una maleta negra con herrajes dorados de 50 × 35 × 18 cm para presentaciones más formales.',
      'Son una alternativa a la cesta cuando el lote necesita ir cerrado, o cuando el propio envase quiere tener un segundo uso para quien lo recibe.',
    ],
    highlights: [
      { title: 'Formato 40 × 30 × 15 cm', body: 'Medida común en los estuches decorados.' },
      { title: 'Diseños con personalidad', body: 'Nieve, Vespa, Bici y más.' },
      { title: 'Maleta de presentación', body: 'Negra con herrajes dorados, 50 × 35 × 18 cm.' },
      { title: 'Solo por cantidades', body: 'Venta a empresas por volumen. Pedido mínimo según referencia: consúltenos.' },
    ],
    uses: ['Regalo de empresa', 'Lotes de Navidad', 'Tiendas de regalo', 'Vinos y gourmet'],
    faqs: [
      { q: '¿Qué medidas tienen los estuches?', a: 'Los estuches decorados miden 40 × 30 × 15 cm y la maleta negra, 50 × 35 × 18 cm.' },
      { q: '¿Tienen estuches navideños?', a: 'Sí, el estuche Nieve tiene un diseño de paisaje nevado. Para la campaña, vea también nuestra página de cestas navideñas al por mayor.' },
      { q: '¿Cuál es el pedido mínimo?', a: 'Vendemos por cantidades, nunca unidades sueltas. El mínimo depende de la referencia: consúltenos.' },
      { q: '¿Venden a particulares?', a: 'No. Trabajamos exclusivamente con empresas.' },
    ],
    related: ['baules-al-por-mayor', 'embalajes-para-cestas-y-lotes', 'envases-de-madera-al-por-mayor'],
  },
  {
    slug: 'forja-decorativa-al-por-mayor',
    category: 'forja',
    title: 'Forja Decorativa al por Mayor para Presentación',
    description: 'Bandejas y cuévanos de forja y metal, cesta con asa abatible, bicicleta y trineo de forja, jaula plata y revistero. Para presentación y escaparate. Venta solo a empresas.',
    eyebrow: 'Forja · Venta al por mayor',
    h1: { before: 'Forja decorativa', em: 'al por mayor' },
    lede: 'Piezas de forja y metal para presentar producto y vestir escaparates. Venta exclusiva a empresas, por cantidades.',
    heroImage: '/Forja/9480.png',
    heroAlt: 'Bicicleta de forja decorativa con cestas',
    intro: [
      'La forja aporta estructura y un aire diferente a la presentación. En el catálogo hay bandejas de forja (también forradas) y de metal negro, cuévanos de metal, una cesta forrada con asa abatible y piezas decorativas como la bicicleta de forja en negro o blanco, el trineo y la jaula plata.',
      'Las piezas decorativas funcionan como expositor en tienda o escaparate: la bicicleta mide 80 × 24 × 45 cm y el trineo, 60 × 30 × 38 cm.',
    ],
    highlights: [
      { title: 'Bandejas y cuévanos', body: 'De forja o metal, con versiones forradas.' },
      { title: 'Piezas expositoras', body: 'Bicicleta, trineo y jaula para escaparate.' },
      { title: 'Medidas', body: 'Bicicleta de 80 × 24 × 45 cm y trineo de 60 × 30 × 38 cm.' },
      { title: 'Solo por cantidades', body: 'Venta a empresas por volumen. Pedido mínimo según referencia: consúltenos.' },
    ],
    uses: ['Escaparatismo', 'Expositor en tienda', 'Decoración navideña', 'Presentación gourmet'],
    faqs: [
      { q: '¿Qué piezas de forja tienen?', a: 'Bandejas de forja y metal, cuévanos de metal, cesta con asa abatible, bicicleta de forja en negro o blanco, trineo, jaula plata y revistero.' },
      { q: '¿Sirven como expositor?', a: 'Sí. La bicicleta y el trineo de forja se usan como elemento expositor y decorativo en tiendas y escaparates.' },
      { q: '¿Cuál es el pedido mínimo?', a: 'Vendemos por cantidades, nunca unidades sueltas. El mínimo depende de la referencia: consúltenos.' },
      { q: '¿Envían a toda España?', a: 'Sí. Servimos desde Valencia a toda España.' },
    ],
    related: ['cuevanos-al-por-mayor', 'bandejas-al-por-mayor', 'baules-al-por-mayor'],
  },
  {
    slug: 'envases-de-madera-al-por-mayor',
    category: 'madera',
    productIds: ['4788', '4792', '7120', '7124', '7130'],
    title: 'Envases de Madera al por Mayor: Jamoneros y Cajas de Vino',
    description: 'Jamoneros de madera de 40 × 17 cm, caja de vino para 3 botellas, cajón de madera tintado y bandeja de madera. Para gourmet y lotes. Venta solo a empresas.',
    eyebrow: 'Madera · Venta al por mayor',
    h1: { before: 'Envases de madera', em: 'al por mayor' },
    lede: 'Jamoneros, cajas de vino y cajones de madera para presentaciones gastronómicas. Venta exclusiva a empresas, por cantidades.',
    heroImage: '/Madera/7120-3.png',
    heroAlt: 'Caja de vino de madera para tres botellas',
    intro: [
      'La madera es el envase natural para productos gastronómicos de calidad. Tenemos jamoneros de madera de 40 × 17 cm, en modelo banco miel o con pinza, cajas de vino para tres botellas y en formato largo de 92 × 35 × 15 cm, y un cajón de madera tintado de 50 × 27 × 25 cm.',
      'Para presentar en mesa o en lote, la bandeja de madera se sirve en 40 × 30 y 50 × 35 cm.',
    ],
    highlights: [
      { title: 'Jamoneros', body: 'De 40 × 17 cm, modelo banco o con pinza.' },
      { title: 'Cajas de vino', body: 'Para 3 botellas y en formato largo de 92 cm.' },
      { title: 'Cajón y bandeja', body: 'Cajón tintado y bandeja de madera en dos tallas.' },
      { title: 'Solo por cantidades', body: 'Venta a empresas por volumen. Pedido mínimo según referencia: consúltenos.' },
    ],
    uses: ['Vinos y bodegas', 'Jamón y embutidos', 'Tiendas gourmet', 'Regalo de empresa'],
    faqs: [
      { q: '¿Qué medidas tiene el jamonero?', a: 'Los jamoneros miden 40 × 17 cm, en modelo banco miel o con pinza.' },
      { q: '¿Tienen cajas de vino?', a: 'Sí, una caja de madera para 3 botellas (35 × 30 × 10 cm) y un formato largo de 92 × 35 × 15 cm.' },
      { q: '¿Cuál es el pedido mínimo?', a: 'Vendemos por cantidades, nunca unidades sueltas. El mínimo depende de la referencia: consúltenos.' },
      { q: '¿Venden a particulares?', a: 'No. Trabajamos exclusivamente con empresas.' },
    ],
    related: ['bandejas-al-por-mayor', 'estuches-decorativos-al-por-mayor', 'embalajes-para-cestas-y-lotes'],
  },
]

export const LANDING_BY_SLUG = Object.fromEntries(FAMILY_LANDINGS.map((l) => [l.slug, l])) as Record<string, FamilyLanding>

const NAVIDAD_LABEL = 'Cestas navideñas al por mayor'

/** Páginas extra de una categoría que ya tiene su página principal (no se usan como enlace de la categoría). */
const SECONDARY_SLUGS = new Set(['viruta-de-celofan-al-por-mayor'])

/** Página principal de cada categoría del catálogo (para enlazarla desde el catálogo y el pie). */
export const LANDING_BY_CATEGORY: Partial<Record<CategorySlug, FamilyLanding>> = Object.fromEntries(
  FAMILY_LANDINGS.filter((l) => !SECONDARY_SLUGS.has(l.slug)).map((l) => [l.category, l])
)

/** Mejor destino para enlazar una categoría: su página propia si la tiene, si no el filtro del catálogo. */
export function categoryPagePath(slug: CategorySlug): string {
  if (slug === 'cestas-navidenas') return NAVIDAD_LANDING_PATH
  const landing = LANDING_BY_CATEGORY[slug]
  return landing ? `/${landing.slug}` : `/catalogo?categoria=${slug}`
}

/** Texto del enlace a la página de una categoría. */
export function categoryPageLabel(slug: CategorySlug): string {
  if (slug === 'cestas-navidenas') return NAVIDAD_LABEL
  const landing = LANDING_BY_CATEGORY[slug]
  return landing ? landingH1Text(landing) : 'Ver todos'
}

/** Todas las páginas por familia, con la de Navidad, para los bloques de enlaces. */
export const FAMILY_LINKS: { href: string; label: string }[] = [
  { href: NAVIDAD_LANDING_PATH, label: NAVIDAD_LABEL },
  ...FAMILY_LANDINGS.map((l) => ({ href: `/${l.slug}`, label: landingH1Text(l) })),
]

export function landingH1Text(l: FamilyLanding): string {
  return [l.h1.before, l.h1.em, l.h1.after].filter(Boolean).join(' ')
}

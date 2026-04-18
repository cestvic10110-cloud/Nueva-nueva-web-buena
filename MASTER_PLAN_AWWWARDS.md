# MASTER PLAN — Cestería Vicent Web 2026
### Director Creativo & Ingeniero Frontend Principal
*Awwwards-level B2B Digital Experience*

---

## SÍNTESIS DE MARCA

**Quién son:** Fabricante español de cestería artesanal B2B. 55 años. Valencia. Sin venta a particulares.  
**Qué venden:** Presentación. No cestas — la imagen que la empresa cliente proyecta cuando envuelve un lote navideño, expone productos gourmet o regala a sus clientes.  
**Tensión creativa:** Artesanía centenaria × Capacidad industrial × Cliente exigente B2B.  
**Percepción objetivo:** *"El proveedor que las mejores empresas de España ya conocen."*

---

## 1. DIRECCIÓN DE ARTE Y SISTEMA DE DISEÑO

### Concepto Visual: **"Mediterranean Craft Luxury"**

No es Liquid Glass (demasiado SaaS). No es Brutalism (demasiado joven). Es el cruce entre **Patagonia editorial** y **maison de luxe francesa** filtrado por la luz cálida de Valencia. Textura visible, espacio generoso, tipo contundente, fotografía de material como protagonista.

La web debe sentirse como entrar al taller — oscuro, cálido, con olor a mimbre — pero con la precisión de un catálogo de Hermès.

---

### Paleta de Color

```
Nombre           Hex        Uso
───────────────────────────────────────────────────────────────
--ink            #0F0D0B    Fondo negro cálido (hero, secciones premium)
--soil           #1C1917    Fondo secundario oscuro (stone-950)
--bark           #292524    Cards oscuros, nav background
--gold           #B5843A    Acento primario — color del mimbre seco
--gold-light     #D4A657    Hover states, highlights, counters activos
--gold-glow      #B5843A33  Glow sutil para product cards (rgba 20% opacity)
--cream          #F5F0E8    Fondo blanco cálido (secciones de luz)
--bone           #EAE4D9    Cards en modo claro, table backgrounds
--text-primary   #1C1917    Texto sobre fondos claros
--text-inverse   #F5F0E8    Texto sobre fondos oscuros
--text-muted     #78716C    Subtítulos, labels (stone-500)
--text-dim       #57534E    Metadata, dimensiones producto (stone-600)
--border-dark    #292524    Bordes en fondos oscuros
--border-light   #D6CFC4    Bordes en fondos claros
```

**Por qué este color:** `#B5843A` es exactamente el tono del mimbre curado — no es un "oro genérico", es extraído de la materia prima del cliente. Es literalmente el producto. El negro cálido `#0F0D0B` evoca el interior de un taller sin ser frío ni tecnológico.

---

### Tipografía Asimétrica

#### Jerarquía tipográfica:

| Rol | Familia | Peso | Uso |
|-----|---------|------|-----|
| **Display / Hero** | Cormorant Garamond | 400 Italic | Títulos hero, frases de impacto |
| **Headlines** | Cormorant Garamond | 600 Upright | H2, H3 secciones |
| **Small Caps / Labels** | Cormorant Garamond | 500 SC | Categorías, etiquetas, años |
| **UI / Navegación** | DM Sans | 400–500 | Nav, botones, filtros, formularios |
| **Body / Specs** | Jost | 300–400 | Texto largo, dimensiones producto, fichas |

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&family=Jost:wght@300;400;500&display=swap');
```

**Por qué Cormorant + DM Sans y no Bodoni/Playfair:**  
Bodoni es demasiado fashion. Playfair ya la usa todo el mundo. Cormorant Garamond tiene raíces en Garamond del siglo XVI — un tipo de imprenta, de artesano — con alto contraste que evoca la trama del mimbre tejido. DM Sans es la contraparte perfecta: contemporánea, funcional, y no compite. La asimetría está en el contraste extremo entre el serif de alto contraste y el grotesco geométrico limpio.

**Escala tipográfica:**
```css
--text-hero:     clamp(4rem, 10vw, 9rem);    /* Hero principal */
--text-display:  clamp(2.5rem, 5vw, 5rem);   /* H1 secciones */
--text-heading:  clamp(1.75rem, 3vw, 3rem);  /* H2 */
--text-subhead:  clamp(1.25rem, 2vw, 1.75rem); /* H3 */
--text-label:    0.75rem;                    /* Small caps, uppercase tracking */
--text-body:     1rem;                       /* 16px base */
--text-small:    0.875rem;                   /* Metadata */
```

---

### Uso del Espacio

- **Sección padding:** `clamp(5rem, 10vh, 8rem)` vertical — no secciones "apretadas"
- **Column grid:** 12 columnas, max-width `1440px`, gutters de `1.5rem`
- **Grain overlay:** Textura de grano sutil (5% opacity) sobre fondos oscuros vía CSS pseudo-element — da tacto visual sin imágenes pesadas
- **Regla de oro:** Si una sección puede "respirar más", que respire. El espacio vacío es premium.
- **Product cards:** Relación de aspecto fija `4:3` para imágenes — consistencia absoluta en el grid

---

## 2. ESTRATEGIA DE MOVIMIENTO (MOTION)

### Stack de Animación

```
Herramienta                    Rol
───────────────────────────────────────────────────────────────────
motion/react (Framer Motion v12)   Orchestración principal, scroll-linked parallax
CSS @scroll-timeline               Animaciones puras CSS sin JS overhead (reveal simple)
Next.js View Transitions API       Transiciones de ruta (página a página)
CSS @keyframes + custom easing     Micro-interacciones, hover states, loaders
```

**Justificación del stack:**  
`motion/react` (importado desde `motion/react`, NO desde `framer-motion`) es la única lib que permite `useScroll` + `useTransform` con performance real en 2026. View Transitions de Next.js son nativas — cero JS adicional para route changes. CSS Scroll-driven (`animation-timeline: scroll()`) para reveals simples libera el thread principal.

---

### Cómo se Siente la Web

#### Hero (Above the Fold)
```
Estado inicial: fondo negro, grano visible
→ El texto "El Arte de la Presentación" entra con split-text stagger
  (cada letra/palabra con opacity 0→1 + translateY 40px→0, 80ms stagger)
→ Subtítulo fade-in con 400ms delay
→ Background: fotografía de mimbre texturizado con scale 1.05→1.0
  sobre scroll (parallax suave 15% depth)
→ Trust bar ticker entra desde abajo con spring animation
```

#### Scroll Principal
```
Velocidad de scroll: natural (NO scroll-jacking)
Cada sección se revela con ScrollReveal wrapper:
  - opacity: 0 → 1 (400ms ease-out)
  - translateY: 24px → 0 (400ms ease-out)
  - trigger: cuando el 20% del elemento entra en viewport
Efecto stagger en grids: cada card con 60ms de delay entre sí
```

#### Product Cards (Micro-interacción Premium)
```
Estado reposo:    imagen a escala normal, overlay dorado en 0% opacity
Hover:            imagen scale 1.03 (transform, 300ms ease-out)
                  overlay gold-glow aparece en 200ms
                  dimensiones del producto slide-up desde abajo
                  cursor personalizado cambia a "Ver Modelo"
Active:           scale 0.98 (tactile feedback, 100ms)
```

#### Custom Cursor
```
Cursor base:      círculo outline dorado 20px
Hover sobre link: relleno dorado + "Ver" text en 12px DM Sans
Hover sobre img:  expand a 60px + "Explorar"
Click:            scale 0.7 (80ms) → vuelta a 1.0 (200ms spring)
```
*Implementado con `motion/react` + `useMotionValue` para seguimiento suave.*

#### Carga Inicial (Page Load)
```
1. NavBar entra: translateY(-100%) → 0, 500ms, delay 200ms
2. Hero background: scale(1.1) → scale(1.0) mientras texto entra
3. Texto hero: split-text stagger 80ms por palabra
4. Trust bar: entra desde abajo, 600ms delay total
Total load animation: < 1.2 segundos
```

#### Transiciones de Ruta (View Transitions)
```css
/* Next.js 16 nativo — sin JS adicional */
@view-transition { navigation: auto; }
::view-transition-old(root) { animation: fade-out 200ms ease-in; }
::view-transition-new(root) { animation: fade-in 300ms ease-out; }
```

#### Contadores de Métricas
```
trigger: IntersectionObserver al 50% visible
animación: 0 → valor final en 1500ms con easeOutCubic
formato: "+50" / "108+" — el signo aparece con opacity al final
```

#### Prefers-Reduced-Motion
```css
@media (prefers-reduced-motion: reduce) {
  /* Todos los motion wrappers con duration 0 */
  /* Custom cursor desactivado */
  /* Parallax desactivado */
}
```

---

## 3. ARQUITECTURA DE COMPONENTES (v2 — Editorial Reinvention)

> **Principio rector:** Los textos del backup son materia prima, no estructura. Cada componente nace de una pregunta creativa, no de un párrafo del Markdown.

### Estructura de Directorios

```
app/
├── layout.tsx
├── page.tsx
├── globals.css
├── catalogo/
│   ├── page.tsx
│   └── [categoria]/page.tsx
├── fabricacion/page.tsx
├── sectores/page.tsx
└── contacto/page.tsx

components/
├── layout/
│   ├── NavBar.tsx              # (ya implementado)
│   ├── Footer.tsx              # (ya implementado)
│   └── CustomCursor.tsx        # (ya implementado)
├── home/
│   ├── OpeningManifest.tsx     # NUEVO: split screen cinematográfico
│   ├── TrustTicker.tsx         # (ya implementado)
│   ├── StatementNumbers.tsx    # NUEVO: jerarquía tipográfica de stats
│   ├── MaterialIndex.tsx       # NUEVO: magazine spread + category index hover
│   ├── ProductStage.tsx        # NUEVO: 3 productos a escala editorial
│   ├── DecadeStrip.tsx         # NUEVO: herencia como tipografía pura
│   ├── B2BSectors.tsx          # NUEVO: portada de periódico tipográfica
│   └── ClosingInvitation.tsx   # NUEVO: CTA como texto, no como botón
├── catalog/
│   ├── CatalogEditorialHeader.tsx  # NUEVO: header gran escala + búsqueda
│   ├── CatalogColumnNav.tsx        # NUEVO: navegación horizontal overflow
│   ├── EditorialProductGrid.tsx    # NUEVO: grid irregular con spanning
│   ├── ProductCard.tsx             # NUEVO: referencia como elem. de diseño
│   └── ProductDetailPanel.tsx      # NUEVO: panel lateral deslizante
├── fabricacion/
│   └── HeritageLayout.tsx
└── shared/
    ├── ScrollReveal.tsx        # (ya implementado)
    ├── AnimatedText.tsx        # (ya implementado)
    ├── SectionLabel.tsx        # (ya implementado)
    ├── GoldButton.tsx          # (ya implementado)
    └── WhatsAppButton.tsx
```

---

### HOME — 8 Secciones Editoriales

#### §1 · `OpeningManifest` — El Split Cinematográfico
*Destruye el hero clásico. No hay imagen de fondo con texto centrado.*

```
┌──────────────────────────────────────────────────────────┐
│  NAVBAR (flotante, transparente)                         │
├─────────────────────────────┬────────────────────────────┤
│  IZQUIERDA 55% (fondo ink)  │  DERECHA 45% (imagen)      │
│                             │                            │
│  "VICENT" rotado 90°        │  /images/workshop.jpg      │
│  pegado al borde izquierdo  │  object-cover, sin overlay │
│  DM Sans, 0.6rem, muted     │                            │
│                             │  "1969" como número ghost  │
│  El Arte de                 │  20vw, Cormorant, opacity  │
│  la Presentación            │  0.06, bottom-right corner │
│                             │                            │
│  ────────────── (línea 1px  │                            │
│  en gold/20)                │                            │
│                             │                            │
│  Fabricante B2B exclusivo   │                            │
│  desde Valencia, 1969.      │                            │
│                             │                            │
│  explorar el catálogo →     │                            │
│  (texto subrayado, no btn)  │                            │
└─────────────────────────────┴────────────────────────────┘
```

**Interacción:** Al hacer scroll la imagen derecha tiene parallax `translateY(-8%)`. El texto izquierdo se desvanece ligeramente (opacity 1→0.6) al scrollear. La división vertical es la tensión visual.

**Mobile:** La imagen pasa arriba (40vh), el texto debajo. El número ghost desaparece en mobile.

---

#### §2 · `TrustTicker` (ya implementado)

---

#### §3 · `StatementNumbers` — La Jerarquía de los Datos
*Los números SON el diseño. No 4 tarjetas iguales — una declaración tipográfica.*

```
┌──────────────────────────────────────────────────────────┐
│  (fondo cream, section-pad)                              │
│                                                          │
│  +50 ___________________________ 108+                    │
│  [años]                         [modelos]                │
│   ↑ Cormorant 18vw soil          ↑ mismo tamaño, gold   │
│   texto pequeño debajo:          texto pequeño debajo:  │
│   "años de oficio"               "en stock permanente"  │
│                                                          │
│  ───────────────────────────────────────────────────    │
│                                                          │
│  "Medio siglo fabricando el contenedor perfecto         │
│   para su producto."                                    │
│   ← Cormorant italic, 2.5rem, soil, max-w-2xl           │
│                                                          │
│  10 categorías  ·  24h respuesta  ·  Valencia, España   │
│  ← DM Sans, text-label, muted, trailing line            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Patrón clave:** `+50` y `108+` están en la misma fila pero con baseline diferente (`items-end` en flex) — el `+50` baja más. La separación entre ellos es vacío puro. Los números tienen count-up al entrar en viewport.

---

#### §4 · `MaterialIndex` — El Índice de Revista
*No es un grid de categorías. Es un spread de lookbook.*

```
┌──────────────────────────────────────────────────────────┐
│  (fondo soil, section-pad)                               │
│                                                          │
│  "NUESTRAS SOLUCIONES"  ← text-label, gold, top-left    │
│                                                          │
│  ┌──────────────────────┐    01 · Cestas Navideñas      │
│  │                      │        "Para el lote          │
│  │  IMAGEN DOMINANTE    │         perfecto"             │
│  │  (cambia en hover)   │                               │
│  │                      │    02 · Cestas               │
│  │  60% del ancho       │    03 · Bandejas             │
│  │  altura: 70vh        │    04 · Baúles               │
│  │  object-cover        │    05 · Cuévanos             │
│  │  sin border-radius   │    06 · Forja                │
│  └──────────────────────┘    + Embalajes · Madera      │
│                                                          │
│  Los nombres de categoría: Cormorant 2.5rem             │
│  Los números: DM Sans 0.65rem muted (design element)    │
│  La descripción: Jost 300, italic, 0.85rem              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Interacción:** Hover sobre cada línea de categoría → cross-fade de la imagen dominante con `transition: opacity 400ms`. La imagen activa tiene un borde-bottom en gold (1px). CSS puro + mínimo `useState`. Clic navega a `/catalogo?categoria=X`.

---

#### §5 · `ProductStage` — El Escenario de los Productos
*No es un carrusel. Son 3 productos a escala editorial, como objetos en una sala.*

```
┌──────────────────────────────────────────────────────────┐
│  (fondo bark, section-pad)                               │
│                                                          │
│  "108 modelos."             ← Cormorant italic 5rem left │
│              "Un solo proveedor."  ← mismo tipo, right  │
│              (Las dos frases crean tensión horizontal)   │
│                                                          │
│  ┌──────────────────┐ ┌──────────┐                      │
│  │                  │ │          │  ┌──────────────────┐ │
│  │   PRODUCTO A     │ │PRODUCTO B│  │  PRODUCTO C      │ │
│  │   (40% ancho)    │ │ (25% w)  │  │  (20% w)        │ │
│  │   aspect 3/4     │ │ aspect   │  │  aspect 1/1     │ │
│  │                  │ │ 4/5      │  │                  │ │
│  │  Ref. 2012       │ │ Ref.7264 │  │  Ref. 4338      │ │
│  │  [nombre pequeño]│ │          │  │                  │ │
│  └──────────────────┘ └──────────┘  └──────────────────┘ │
│                           PRODUCTO B está offset +40px    │
│                           hacia abajo (CSS translate)    │
│                                                          │
│  ─────────────────────────────────────  Ver catálogo → │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Patrón clave:** Los 3 productos NO están alineados en la misma baseline — el producto B está `translateY(40px)` para romper la cuadrícula. Hover: cada producto sube `translateY(-8px)` con sombra suave. La referencia `Ref. XXXX` es el único texto visible inicialmente.

---

#### §6 · `DecadeStrip` — La Herencia como Tipografía
*No es una timeline. Es una escalera de tiempo.*

```
┌──────────────────────────────────────────────────────────┐
│  (fondo cream, section-pad generoso)                     │
│                                                          │
│  "Un oficio                                              │
│   que dura."    ← Cormorant italic, text-display        │
│                    alineado derecha, max-w-lg           │
│                                                          │
│  1969                1985               2000      HOY    │
│  ──────                                                  │
│  Los inicios   1985                                      │
│  Taller        ──────                                    │
│  familiar.     Expansión     2000                        │
│                B2B.          ──────                      │
│                Primeras      Moderniz.    HOY            │
│                empresas.     sin perder   ──────         │
│                              la esencia.  Referente     │
│                                           del sector.   │
│                                                          │
│  Cada columna está 28px más abajo que la anterior       │
│  (staircase vertical rhythm)                            │
│  Año: Cormorant 600, 2rem                               │
│  Línea: 1px gold, 2rem ancho                            │
│  Texto: Jost 300, 0.85rem, muted                        │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Sin cards. Sin bordes. Sin iconos.** Solo tipografía, una línea dorada y escalones de espacio.

---

#### §7 · `B2BSectors` — La Portada del Periódico
*4 sectores como columnas de periódico. Sin tarjetas, sin imágenes, sin iconos.*

```
┌──────────────────────────────────────────────────────────┐
│  (fondo ink, section-pad)                                │
│                                                          │
│  "Servimos a las empresas         ← Cormorant italic    │
│   más exigentes de España."         5rem, cream, left   │
│                                                          │
│  ─────────────────────────────────────────────────────  │
│  (línea 1px border-light/20)                            │
│                                                          │
│  LOTES DE NAVIDAD  SUPERMERCADOS  GOURMET  CORPORATIVO  │
│  ← DM Sans 500, text-label, tracking extra, cream/80    │
│                                                          │
│  Especialistas     Suministro      Acabados    Fideliza- │
│  en cestas para    completo para   elegantes   ción con  │
│  campaña navid.    grandes superf. Materiales  cestas   │
│  Volumen alto.     Logística a     naturales.  artesanas.│
│                    centros distrib.                      │
│  ← Jost 300, 0.875rem, muted, leading-relaxed           │
│                                                          │
│  [Ver Sectores →]  ← texto link, alineado derecha       │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

#### §8 · `ClosingInvitation` — La Invitación Mínima
*Una sola frase enorme. Sin cajas. Sin botones. Solo texto y gold.*

```
┌──────────────────────────────────────────────────────────┐
│  (fondo ink, grain, section-pad doble)                   │
│                                                          │
│  ¿Listo para elevar                                      │
│  su presentación?     ← Cormorant italic, text-hero     │
│                          cream, leading-tight           │
│                                                          │
│                                                          │
│       Solicitar presupuesto →    ← underline en gold,   │
│       (href=/contacto)              DM Sans 500, lg     │
│                                     NO es un <button>   │
│                                                          │
│  Respondemos en 24 horas · Exclusivo B2B                │
│  ← text-label, muted, bottom                            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

### CATÁLOGO — Arquitectura Editorial

**Principio:** Un comprador B2B encuentra rápido y solicita sin fricciones. El diseño no compite con los productos.

#### `CatalogEditorialHeader`
```
┌──────────────────────────────────────────────────────────┐
│  (fondo soil, padding generoso)                          │
│                                                          │
│  CATÁLOGO                    [buscar por ref./nombre]   │
│  ← Cormorant 600, 7rem       ← input minimalista, right │
│                                                          │
│  108 modelos · Stock permanente                         │
│  ← Jost 300, muted                                      │
└──────────────────────────────────────────────────────────┘
```

#### `CatalogColumnNav`
*No pills. Nombres de categoría grandes en horizontal overflow.*
```
─── Todos ─── Cestas Navideñas ─── Cestas ─── Bandejas ──→
    Cormorant 1.5rem, cursor pointer, gold underline en activo
```

#### `EditorialProductGrid`
*CSS Grid irregular. No todo igual.*
```
┌──────────────────┬─────────┬─────────┐
│                  │         │         │
│  FEATURED        │ regular │ regular │  ← row 1: featured ocupa 2 cols
│  (col-span-2)    │         │         │
│                  ├─────────┴─────────┤
├──────────┬───────┤                   │
│ regular  │ reg.  │  SPOTLIGHT        │  ← row 2: spotlight ocupa 2 rows
│          │       │  (row-span-2)     │
├──────────┴───────┤                   │
│ regular  │ reg.  │                   │
└──────────────────┴───────────────────┘
  Patrón se repite. Columnas: 3 en desktop, 2 en tablet, 1 en mobile.
  El "featured" y "spotlight" se asignan a los primeros productos de cada
  categoría navideña y a los baúles grandes.
```

#### `ProductCard`
```
┌──────────────────────────────────────┐
│  Ref. 2012             [gold, top-r] │  ← DM Sans 0.65rem, design element
│                                      │
│  [imagen full-bleed, aspect-ratio]   │
│                                      │  hover:
│  ──────── thin gold line ────────    │  ← aparece desde izquierda (clip-path)
│                                      │
│  NAVIDEÑA MIMBRE NOGAL               │  ← DM Sans 500, 0.875rem
│  55×30×18 · 60×35×20 · 65×40×24    │  ← Jost 300, dim, hover reveal
│                                      │
│  Consultar →                         │  ← solo visible en hover
└──────────────────────────────────────┘
```

**`squircle-sm`** en el card. Hover: imagen `scale(1.03)`, thin gold line aparece con `clip-path: inset(0 100% 0 0) → inset(0 0% 0 0)`, dimensiones con `translateY(8px→0) opacity(0→1)`.

#### `ProductDetailPanel`
*Panel lateral deslizante desde la derecha. NO modal centrado.*
```
┌──────────────────────────────────────────────────────────┐
│  [página oscurecida, overlay]     ┌──────────────────────┤
│                                   │  × cerrar            │
│                                   │                      │
│                                   │  [imagen grande]     │
│                                   │                      │
│                                   │  NOMBRE PRODUCTO     │
│                                   │  Ref. 2012           │
│                                   │                      │
│                                   │  Variantes:          │
│                                   │  ○ Nº1 · 55×30×18   │
│                                   │  ● Nº2 · 60×35×20   │
│                                   │  ○ Nº3 · 65×40×24   │
│                                   │                      │
│                                   │  [Solicitar vía      │
│                                   │   WhatsApp →]        │
│                                   │                      │
│                                   │  [Formulario →]      │
└───────────────────────────────────┴──────────────────────┘
  Anchura: 40% desktop / 90% mobile
  Animación: translateX(100%) → translateX(0), spring motion/react
```

---

## 4. HOJA DE RUTA DE IMPLEMENTACIÓN

Cada paso está diseñado para ser autónomo — podemos parar en cualquier punto y tener algo funcional y publicable.

---

### PASO 1 — Foundation (Sin implementar pantallas todavía)
1. Verificar versión Next.js en `package.json` y leer guía en `node_modules/next/dist/docs/`
2. Instalar dependencias: `motion` (Framer Motion v12), `tailwindcss`, `clsx`
3. Configurar `tailwind.config.ts`: design tokens como CSS variables, fuentes, colores custom
4. Escribir `app/globals.css`: todas las `--variables`, grain texture vía `::before` pseudo-element, scroll-behavior, `@font-face` o Google Fonts import
5. Crear `lib/types.ts` y `lib/constants.ts` (categorías con slugs y nombres ES)
6. Crear `lib/catalog.ts` con funciones `getCatalog()`, `getByCategory(slug)`, `getProduct(id)` que leen desde `public/` JSON o importan estáticamente
7. Crear `components/layout/CustomCursor.tsx` — motion/react, `useMotionValue`
8. Crear `components/layout/NavBar.tsx` — floating, scroll-aware backdrop-blur
9. Crear `components/layout/Footer.tsx`
10. Cablear `app/layout.tsx` con CustomCursor + NavBar + Footer + `<html lang="es">`
11. Crear `components/shared/ScrollReveal.tsx`, `AnimatedText.tsx`, `SectionLabel.tsx`, `GoldButton.tsx`

**Checkpoint:** La web muestra NavBar y Footer sobre fondo negro. Cursor personalizado funciona.

---

### PASO 2 — Home: Hero + Trust + Metrics
12. `components/home/HeroSection.tsx` — fullscreen, split-text con AnimatedText, parallax bg con `useScroll`
13. `components/home/TrustTicker.tsx` — marquee CSS puro con `animation: marquee linear infinite`
14. `components/home/MetricsBar.tsx` — 4 stats, count-up con IntersectionObserver + `useMotionValue`
15. Cablear en `app/page.tsx`

**Checkpoint:** Home muestra hero animado hasta las métricas.

---

### PASO 3 — Home: Catálogo Preview + Heritage
16. `components/home/CategoryShowcase.tsx` — grid 3×2, hover effects, link a `/catalogo?categoria=X`
17. `components/home/FeaturedProducts.tsx` — scroll horizontal, 5–6 productos curados (Navideñas destacadas)
18. `components/home/HeritageSection.tsx` — timeline con scroll-reveal por era, valores grid
19. `components/home/SectorsSection.tsx` — 4 cards B2B
20. `components/home/HomeCTA.tsx` — CTA final con grain overlay

**Checkpoint:** Home completa, todas las secciones funcionan.

---

### PASO 4 — Catálogo
21. `components/catalog/CategoryFilter.tsx` — pills con URL search params
22. `components/catalog/ProductCard.tsx` — hover effects completos
23. `components/catalog/CatalogSearch.tsx` — búsqueda client-side en tiempo real
24. `components/catalog/ProductGrid.tsx` — grid filtrado, estado de "sin resultados"
25. `components/catalog/ProductModal.tsx` — modal con variantes, WhatsApp CTA
26. `app/catalogo/page.tsx` y `app/catalogo/[categoria]/page.tsx`

**Checkpoint:** Catálogo completo y navegable.

---

### PASO 5 — Páginas Interiores
27. `app/fabricacion/page.tsx` con `CompanyTimeline.tsx` + `ValuesGrid.tsx`
28. `app/sectores/page.tsx` (contenido expandido de sectores)
29. `app/contacto/page.tsx` — formulario con pre-relleno por query param, validación client-side, WhatsApp + email CTA, horario visible
30. `components/shared/WhatsAppButton.tsx` — botón flotante global (mobile-first, bottom-right)

**Checkpoint:** Sitio completo y navegable.

---

### PASO 6 — Polish + Performance
31. View Transitions: CSS nativo para todas las rutas
32. `prefers-reduced-motion`: auditar todos los componentes de motion
33. Imágenes: Usar `next/image` con `priority` en hero, `loading="lazy"` en catálogo, formatos WebP/AVIF
34. SEO: `metadata` por página en `layout.tsx` / `page.tsx` (title, description, og:image)
35. Páginas legales: `/aviso-legal`
36. Performance audit: Lighthouse > 90 en todas las métricas
37. Accessibility audit: contraste, focus states, alt text en todas las imágenes de producto
38. Test responsive: 375px, 768px, 1024px, 1440px

**Checkpoint: PRODUCCIÓN.**

---

## NOTAS TÉCNICAS FINALES

### Dependencias clave
```json
{
  "motion": "^12.x",
  "clsx": "^2.x",
  "tailwindcss": "^4.x"
}
```
*Importar Framer Motion v12 siempre desde `"motion/react"`, nunca desde `"framer-motion"`.*

### Rendimiento de animaciones
- Usar **exclusivamente** `transform` y `opacity` para animar — nunca `width`, `height`, `top`, `left`
- Custom cursor: `pointer-events: none` para no interferir con clicks
- Todos los `motion/react` con `will-change: transform` solo durante animación (quitar en reposo)

### Imágenes de producto
- Path base: `public/` — las imágenes ya existen en las carpetas de categoría
- Algunos productos tienen path con espacios (`/Cestas Navideñas/`) — encodear correctamente con `encodeURIComponent`
- Fallback: SVG placeholder con iniciales del producto si la imagen no carga

### Formulario de contacto
- No requiere backend — `mailto:` + `wa.me` es suficiente para el modelo de negocio
- Pre-relleno via `?producto=X&cantidad=Y` en URL desde ProductModal

---

*Plan elaborado con toda la información disponible del cliente. Listo para iniciar PASO 1 cuando apruebe.*

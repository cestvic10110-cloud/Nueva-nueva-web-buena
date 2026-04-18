# MASTER PLAN V2 — Cestería Vicent
### Creative Direction + Frontend Architecture
*Cestería Vicent, S.L. · B2B · Valencia · Est. 1969*

---

## 0. DIAGNÓSTICO V1 — Qué falló y por qué

Antes de diseñar, hay que nombrar los errores del intento anterior sin ambigüedad:

| Problema | Síntoma en V1 | Causa raíz |
|---|---|---|
| **Túnel de negro** | bg-ink (#0F0D0B) en el 80% de la home | Asociar "premium" con oscuro. Error de junior. |
| **Métricas rígidas** | `justify-between` lanzando números a los extremos | Ausencia de ritmo tipográfico; los números no hablan entre sí |
| **Texto invisible** | `text-muted/40` sobre fondos oscuros | Opacidad aplicada sin calcular contraste resultante |
| **Hero genérico** | CTA button con forma rectangular + outline | Sin personalidad material; podría ser cualquier SaaS |
| **Imagen bloques duros** | Cards con `squircle` inconsistente, fotos recortadas brutalmente | Falta de relación entre el contenedor y la foto |
| **Scroll plano** | Paralax + fade, sin narrativa progresiva | Las secciones se apilan, no se encadenan |
| **Sin paleta luminosa** | Cream (#F5F0E8) apenas aparece en secciones light | La marca tiene un material real (mimbre) con color propio |

---

## 1. SISTEMA DE DISEÑO V2

### 1.1 Paleta — "Luz de Taller"

El mimbre tiene un color específico: entre el **lino tostado** y el **ámbar miel**. La paleta V2 parte de ese material, no de una referencia digital abstracta.

**Regla principal:** Máximo 40% de superficie en colores sub-`#3A3530`. Las secciones light son la norma; el negro es el acento dramático.

```
LUMINOSOS (fondos dominantes)
──────────────────────────────
--color-lino:    #EDE8DE   ← nuevo dominante de secciones light (reemplaza cream puro)
--color-cream:   #F5F0E8   ← texto sobre oscuro / accento en hero
--color-bone:    #EAE4D9   ← cards sobre lino (contraste sutil)
--color-sand:    #D4C9B5   ← líneas divisoras, bordes en modo light

MEDIOS (transición, textura)
──────────────────────────────
--color-rattan:  #C4A882   ← nuevo: color del material en estado natural
--color-gold:    #B5843A   ← accento cromático CTA / detalles
--color-gold-light: #D4A657

OSCUROS (acento dramático — usar con moderación)
──────────────────────────────────────────────────
--color-bark:    #292524   ← cards oscuras, hero overlay máx. 60% opacity
--color-soil:    #1C1917   ← footer, bloques de contraste
--color-ink:     #0F0D0B   ← solo texto puro y overlays de foto ≤ 55% opacity

FUNCIONALES
──────────────────────────────
--color-border-light: #C8BFB2   ← bordes en modo light (ratio 3:1 sobre lino)
--color-border-dark:  #2D2926   ← bordes en modo dark
--color-text-primary: #1C1410   ← texto sobre lino (ratio 12:1, AA/AAA)
--color-text-secondary: #5C5048 ← texto secundario sobre lino (ratio 5.8:1, AA)
--color-text-dim:   #8A7B6F    ← captions sobre lino (ratio 4.5:1, AA mínimo)
```

**Prohibiciones explícitas:**
- `text-cream/40` o menor sobre fondos oscuros → siempre mínimo `/65`
- Fondos `bg-ink` en secciones que no sean hero o footer
- `text-muted` (`#78716C`) sobre `bg-lino` → ratio 3.2:1, FALLA AA

### 1.2 Tipografía — Asimetría y Tensión

Mantener los tres ejes (Cormorant / DM Sans / Jost) pero con **reglas de aplicación precisas**:

```
DISPLAY (Cormorant Garamond)
─────────────────────────────────────────────────────────
• Títulos de sección: weight 300 italic + weight 600 upright en la misma línea
  → "El Arte  de" (300 italic) + "la Presentación" (600 upright)
• Números grandes: weight 600, tracking 0 (los números no necesitan tracking)
• Subtítulos editoriales: weight 400 italic, line-height 0.9

SANS FUNCIONAL (DM Sans)
─────────────────────────────────────────────────────────
• Navegación, etiquetas, CTA: weight 400-500
• tracking-[0.1em] a [0.18em] según tamaño
• NUNCA usar para cuerpo largo de texto

BODY / LECTURA (Jost)
─────────────────────────────────────────────────────────
• Párrafos ≥ 3 líneas: weight 300, font-size 1rem, line-height 1.7
• Tablas de variantes, metadata: weight 400, tabular-nums
```

**Regla de asimetría de línea base:**
En composiciones de 2 columnas, las columnas NO se alinean al mismo top. La columna secundaria empieza 1.5–2 líneas más abajo que la principal. Esto crea tensión visual real sin necesitar animaciones complejas.

### 1.3 Efectos de Material

```
GRAIN TEXTURE (ya existente, afinar)
• Opacity: 0.028 en fondos light (actualmente demasiado visible en dark)
• Solo en secciones con bg-lino o bg-cream

SQUIRCLE (corner-shape nativa + fallback)
• Regla: solo en elementos interactivos (cards, botones, badges)
• NUNCA en imágenes de fondo o containers de sección
• corner-shape: squircle requiere @supports con border-radius: 1.5rem fallback

OVERLAYS DE FOTO (regla estricta)
• Texto NUNCA directamente sobre foto sin overlay
• Overlay mínimo: linear-gradient con 0.82 en zona de texto
• Backdrop-blur en NavBar: blur(12px) + bg-bark/85 — NO bg-ink/90 (demasiado opaco)
• mix-blend-mode: multiply para badges sobre fotos (en lugar de bg-ink/60)
```

---

## 2. ARQUITECTURA DE LA HOME V2

La home tiene **7 secciones** en este orden exacto, cada una con un propósito narrativo claro:

```
01. HERO           → "Dónde estamos" — inmersión material
02. IDENTIDAD      → "Quiénes somos" — los números como arte tipográfico
03. ★ SCROLLTELLING → "Cómo lo hacemos" — la sección estrella
04. COLECCIONES    → "Qué ofrecemos" — grid editorial asimétrico
05. SECTORES       → "Para quién" — cuatro arquetipos de cliente
06. MANIFESTO      → "Por qué nosotros" — una línea editorial + proof
07. CTA FINAL      → "El siguiente paso" — contacto directo B2B
```

---

### SECCIÓN 01: HERO — "Inmersión Material"

**Concepto:** La foto de taller ocupa el 100% del viewport. No hay panel semitransparente (error del V1). El texto vive sobre un gradiente orgánico de izquierda, no sobre un bloque.

**Cambios vs V1:**
- Fondo base: `bg-lino` visible en los 2-3px de debajo del texto (da calidez vs el ink puro)
- El gradiente LEFT deja filtrar el `--color-lino` en el 5% más a la izquierda, no negro puro
- El título usa la mezcla asimétrica: `300 italic` + `600 upright` en líneas distintas
- El logo `logoCesteria.png` flota en la esquina superior izquierda con `mix-blend-mode: screen` (aparece dorado sobre la foto, sin necesitar `brightness-0 invert`)
- El scroll cue es una **línea vertical animada con CSS scroll-driven**, no un motion loop

**Composición:**
```
[LOGO]                                     [NAVLINKS]

        "El Arte de"          ← Cormorant 300 italic, clamp(4rem,10vw,9.5rem)
        "la Presentación"     ← Cormorant 600 upright, mismo size, desplazado +2.5rem derecha
                                            ↑ TENSIÓN: las dos líneas no alinean a la izquierda

        ── 9rem de oro ──

        "Envases artesanales para empresas exigentes."
        [SOLICITAR PRESUPUESTO]   [Ver catálogo →]

[108 modelos]  [+50 años]  [B2B]           [scroll ↓]
```

---

### SECCIÓN 02: IDENTIDAD — "Los Números como Arte"

**Concepto:** Fondo `bg-lino` (primera sección light). Los números NO usan `justify-between`. Usamos una composición asimétrica en cluster.

**Layout V2:**
```
                    ┌─────────────────────────────────────┐
                    │  +50            108+          24h   │
                    │  años     ·    modelos    ·  respuesta│
                    │                                      │
  "Medio siglo     │  Los números flotan juntos en la     │
  fabricando el    │  columna derecha, con stagger         │
  contenedor       │  vertical real: +50 en baseline 0,   │
  perfecto."       │  108+ en baseline +0.8rem,           │
                    │  24h en baseline +1.6rem             │
                    └─────────────────────────────────────┘
```

- Fondo: `bg-lino` con `grain` suave
- Texto editorial: `text-text-primary` (#1C1410) — contraste 12:1, siempre legible
- Los números: Cormorant 600, `color: transparent`, `-webkit-text-stroke: 1px var(--color-gold)` para efecto outline orgánico
- El stagger vertical es CSS puro: cada número tiene `margin-top` diferente, no es una grid de alineación

---

### ★ SECCIÓN 03: SCROLLYTELLING — "El Proceso"

*Esta es la sección definitoria del proyecto. Descripción técnica completa en §3.*

**Narrativa:** Mientras el usuario hace scroll, la pantalla está "pinned" y avanza horizontalmente por 4 momentos del proceso artesanal:

```
PANEL 1: "La Materia Prima"       → foto de mimbre en bruto
PANEL 2: "El Oficio"              → manos trabajando
PANEL 3: "El Acabado"             → detalle de tejido
PANEL 4: "El Resultado"           → producto final sobre mesa
```

Cada panel: foto full-bleed + texto que surge desde abajo + contador de progreso.

---

### SECCIÓN 04: COLECCIONES — "El Catálogo Editorial"

**Concepto:** Grid asimétrico, NO el 4-columnas uniforme del V1. Inspiración: editoriales de lujo.

**Layout:**
```
┌──────────────────────┬───────────┐
│                      │           │
│   HERO COLLECTION    │  SMALL    │
│   (col-span-7)       │  CARD     │
│   Cestas Navideñas   │  (col-5)  │
│                      │           │
├──────────┬───────────┴───────────┤
│  CARD    │                       │
│  (col-4) │   WIDE CARD           │
│          │   (col-8)             │
│          │   Baúles              │
└──────────┴───────────────────────┘
```

- Fondo: `bg-soil` (oscuro, contrasta con la sección anterior light)
- Las cards tienen `aspect-ratio` diferente según posición: hero en 3:4, wide en 16:9
- Hover: la imagen hace `scale(1.04)` dentro del contenedor, el contenedor NO escala
- Las imágenes de producto tienen fondo `bg-lino` (simulando la superficie del taller)

---

### SECCIÓN 05: SECTORES — "Para Quién"

**Cambio vs V1:** Las 4 secciones alternadas (texto/imagen) se reemplazan por un **grid de 2×2 con hover reveal**.

```
┌─────────────────┬─────────────────┐
│ Lotes Navidad   │ Supermercados   │
│ ░░░░ foto ░░░░  │ ░░░░ foto ░░░░  │
│                 │                 │
│ hover → texto   │ hover → texto   │
├─────────────────┼─────────────────┤
│ Empresas Gourmet│ Regalo Corp.    │
│ ░░░░ foto ░░░░  │ ░░░░ foto ░░░░  │
└─────────────────┴─────────────────┘
```

- Fondo: `bg-lino` (alternancia con dark de Colecciones)
- El texto en hover usa `mix-blend-mode: difference` para el título principal → efecto cromático sin overlay opaco

---

### SECCIÓN 06: MANIFESTO — "La Promesa"

**Una línea editorial grande + 3 pruebas concretas:**

```
"No solo vendemos cestas;
 ofrecemos la seguridad de
 un suministro constante."

  ── 12rem de oro ──

  [✓ +50 años]  [✓ Stock permanente]  [✓ Personalización]
```

- Fondo: `bg-bark` (el más oscuro salvo ink — reservado para este momento dramático)
- Título en Cormorant 300 italic, `clamp(2rem,4.5vw,4.5rem)`, color: `var(--color-rattan)`
- Las checkmarks son SVG, no emojis

---

### SECCIÓN 07: CTA FINAL — "El Siguiente Paso"

**Minimalista, directo:**

```
┌────────────────────────────────────────────────────┐
│              bg-lino · centrado · section-pad      │
│                                                    │
│   ¿Listo para elevar su presentación?              │
│   (Cormorant italic, display size)                 │
│                                                    │
│   [  Solicitar Presupuesto  ]   +34 679 28 61 78  │
│   squircle-sm, bg-gold, text-ink                  │
└────────────────────────────────────────────────────┘
```

---

## 3. ★ SECCIÓN ESTRELLA: SCROLLYTELLING — Especificación Técnica

### 3.1 Concepto Visual

Sección "pinned" de **altura fija en viewport** (100vh). El scroll vertical del usuario se convierte en desplazamiento horizontal entre 4 paneles full-bleed. Al llegar al final del 4º panel, el pin se libera y el scroll vuelve al comportamiento normal.

**Altura total del contenedor scroll:** `500vh` (100vh visible + 400vh de "recorrido" convertido a horizontal).

### 3.2 Arquitectura de Componente

```tsx
// components/home/CraftProcess.tsx — 'use client'

// ESTRUCTURA:
// <section style={{ height: '500vh' }}>          ← el "recorrido" de scroll
//   <div style={{ position: 'sticky', top: 0, height: '100vh' }}>   ← el pin
//     <div style={{ display: 'flex', width: '400vw' }}
//          style={{ x: panelX }}>                ← se mueve con useTransform
//       <Panel img="materia-prima" title="La Materia Prima" />
//       <Panel img="oficio" title="El Oficio" />
//       <Panel img="acabado" title="El Acabado" />
//       <Panel img="resultado" title="El Resultado" />
//     </div>
//   </div>
// </section>
```

### 3.3 Motion v12: Las interpolaciones exactas

```tsx
// En el componente:
const sectionRef = useRef<HTMLElement>(null)
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ['start start', 'end end'],  // el recorrido completo de 500vh
})

// Conversión scroll vertical → posición horizontal
// 0 → 0vw, 1 → -300vw (avanza 3 pantallas)
const panelX = useTransform(scrollYProgress, [0, 1], ['0vw', '-300vw'])

// Opacidad individual de cada panel
// Panel 1: visible en [0, 0.28], fade en [0.28, 0.33]
// Panel 2: visible en [0.33, 0.61], fade en [0.61, 0.66]
// Panel 3: visible en [0.66, 0.84], fade en [0.84, 0.89]
// Panel 4: visible en [0.89, 1]
const panel1Opacity = useTransform(scrollYProgress, [0, 0.28, 0.33], [1, 1, 0])
const panel2Opacity = useTransform(scrollYProgress, [0.28, 0.33, 0.61, 0.66], [0, 1, 1, 0])
// etc.

// Texto: surge desde abajo con retraso por panel
// Dentro de cada Panel:
const textY = useTransform(panelProgress, [0, 0.2], ['2rem', '0rem'])
const textOpacity = useTransform(panelProgress, [0, 0.2], [0, 1])
```

### 3.4 Barra de Progreso de Sección

Una barra horizontal fina (2px, color gold) en la parte inferior del área pinned que avanza de 0 a 100% conforme el usuario scrollea por los 4 paneles. CSS scroll-driven + Framer Motion como fallback:

```css
/* CSS nativo — progressive enhancement */
@supports (animation-timeline: scroll()) {
  .craft-progress-bar {
    animation: grow-bar linear both;
    animation-timeline: --craft-section;
    animation-range: entry 0% exit 100%;
  }
  .craft-section {
    timeline-scope: --craft-section;
    scroll-timeline-name: --craft-section;
  }
  @keyframes grow-bar {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
}
/* Fallback: scaleX animado con useTransform en el mismo componente */
```

### 3.5 Composición de Cada Panel

```
┌─────────────────────────────────────────────────────┐
│  100vw × 100vh                                      │
│                                                     │
│  [FOTO FULL-BLEED — object-cover]                   │
│  Overlay: linear-gradient(to right,                 │
│    rgba(28,25,23,0.78) 0%,                         │
│    rgba(28,25,23,0.35) 50%,                        │
│    transparent 100%)                                │
│                                                     │
│  ┌─────────────────────────────────────┐            │
│  │ COUNTER — "01 / 04"                 │  ← top-left│
│  │ font-sans, 0.55rem, text-cream/38   │            │
│  └─────────────────────────────────────┘            │
│                                                     │
│  ┌───────────────────────────────────┐              │
│  │ TITLE (Cormorant 300 italic)      │ ← center-left│
│  │ clamp(2.5rem, 5vw, 5rem)          │              │
│  │ color: --color-cream              │              │
│  │                                   │              │
│  │ ─── 6rem oro ───                  │              │
│  │                                   │              │
│  │ BODY (Jost 300, max-w 28rem)      │              │
│  │ Una frase concisa sobre este paso │              │
│  └───────────────────────────────────┘              │
│                                                     │
│  [barra de progreso gold — bottom]                  │
└─────────────────────────────────────────────────────┘
```

### 3.6 Fotografías Requeridas

El scrollytelling necesita 4 imágenes específicas. Actualmente disponemos de:
- `workshop.jpg` — sirve para Panel 2 ("El Oficio") o Panel 1
- `soluciones-mimbre.jpg` — sirve para Panel 4 ("El Resultado")

**Faltan:** materia prima (mimbre en bruto), detalle de tejido. Opciones:
1. Usar fotos del catálogo de producto (`/Cestas Navideñas/2012.png`) en Panel 4
2. Marcadores temporales con bg-bark + texto de referencia hasta disponer de fotografía real

### 3.7 Reducción de Movimiento

```tsx
const reduced = useReducedMotion()

// Si reduced === true:
// - No pinned scroll, layout vertical normal
// - Las 4 secciones se apilan con fade-in simple
// - La barra de progreso se oculta
```

---

## 4. REGLAS TÉCNICAS V2 — CSS v4 + Motion v12

### 4.1 Tailwind v4 — Qué cambia en este proyecto

```css
/* ✅ CORRECTO en v4: */
bg-[color:var(--color-lino)]
text-[length:clamp(2rem,5vw,5rem)]

/* ❌ INCORRECTO (genera clases inexistentes en v4): */
text-[2.5rem]  /* usar style={{ fontSize }} para valores únicos */

/* ✅ Colores nuevos deben ir en @theme, no en arbitrary values: */
@theme {
  --color-lino: #EDE8DE;
  --color-rattan: #C4A882;
  --color-sand: #D4C9B5;
  --color-text-primary: #1C1410;
  --color-text-secondary: #5C5048;
  --color-text-dim: #8A7B6F;
}
```

### 4.2 motion/react v12 — Patrones correctos

```tsx
// ✅ Import correcto:
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'

// ✅ useScroll con target ref (para sección pinned):
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ['start start', 'end end'],
})

// ✅ useTransform con función (para cálculos no lineales):
const curve = useTransform(scrollYProgress, (v) => {
  return cubicBezier(0.16, 1, 0.3, 1)(v)  // spring curve
})

// ❌ NO usar AnimatePresence para crossfades de foto en scrollytelling
// Usar opacity separadas con useTransform por panel — mucho más predecible

// ✅ whileInView con once:true para secciones fuera del scrollytelling:
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-80px' }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
/>
```

### 4.3 Regla de Overlays (nunca más texto invisible)

```
SOBRE FOTO OSCURA (workshop.jpg, dark panels):
  texto ≥ text-cream (F5F0E8) con overlay mínimo rgba(15,13,11,0.65) en zona de texto
  verificar con: contrast ratio (F5F0E8 sobre resultado del blend) ≥ 7:1

SOBRE FONDO LINO (secciones light):
  texto principal: text-text-primary (#1C1410) — ratio 12:1 ✓
  texto secundario: text-text-secondary (#5C5048) — ratio 5.8:1 ✓
  captions: text-text-dim (#8A7B6F) — ratio 4.5:1 ✓ (mínimo AA)
  PROHIBIDO: text-muted (#78716C) sobre bg-lino — ratio 3.2:1 ✗

SOBRE FONDO SOIL/BARK (secciones dark medias):
  texto principal: text-cream — ratio 8.1:1 ✓
  texto secundario: text-cream/75 — ratio ~4.8:1 ✓
  MÍNIMO ABSOLUTO: text-cream/65 — ratio ~3.9:1 (AA Large solo)
  PROHIBIDO: text-cream/40 o menos en cualquier contexto
```

### 4.4 Patrones de Tensión Visual (anti-justify-between)

```
❌ PROHIBIDO (V1 pattern):
<div className="flex justify-between">
  <span>+50</span>
  <span>108+</span>
  <span>24h</span>
</div>

✅ V2: Stagger vertical + agrupación central
<div className="flex flex-col gap-0">
  <div style={{ paddingLeft: '0' }}>   <!-- baseline 0 -->
    <Number>+50</Number>
  </div>
  <div style={{ paddingLeft: '3.5rem' }}>  <!-- offset horizontal -->
    <Number>108+</Number>
  </div>
  <div style={{ paddingLeft: '7rem' }}>    <!-- offset acumulado -->
    <Number>24h</Number>
  </div>
</div>

✅ O bien: CSS grid con column offsets declarados
```

### 4.5 Squircle — Uso correcto

```css
/* Solo donde tiene sentido semánticamente: */
.squircle     { corner-shape: squircle; border-radius: 2rem; }
.squircle-sm  { corner-shape: squircle; border-radius: 1rem; }

/* @supports obligatorio: */
@supports not (corner-shape: squircle) {
  .squircle    { border-radius: 1.5rem; }
  .squircle-sm { border-radius: 0.875rem; }
}

/* Donde NO usar: */
/* - section backgrounds */
/* - image wrappers > 400px */
/* - NavBar */
```

---

## 5. HOJA DE RUTA — Paso a Paso

### FASE 0: Fundaciones (tokens + globals)
- [ ] Añadir `--color-lino`, `--color-rattan`, `--color-sand`, `--color-text-primary/secondary/dim` a `globals.css @theme`
- [ ] Eliminar `--color-muted` y `--color-dim` (ambiguos, generan el problema de contraste)
- [ ] Actualizar `globals.css` con reglas de squircle @supports

### FASE 1: NavBar + Footer (reparar V1)
- [ ] NavBar: `bg-bark/85 backdrop-blur-[12px]` en lugar de `bg-ink/90`
- [ ] NavBar sobre hero: probar `mix-blend-mode: difference` en el logo texto
- [ ] Footer: sección en `bg-soil` con texto `text-cream/75` mínimo

### FASE 2: Hero V2
- [ ] Gradiente izquierdo que deja filtrar `--color-lino` en el extremo
- [ ] Título asimétrico: italic + upright con offset horizontal en la segunda línea
- [ ] Reemplazar `workshop.jpg` con `hero.png` — verificar calidad y crop

### FASE 3: ★ Sección Scrollytelling (CraftProcess)
- [ ] Estructura pin + 400vw horizontal
- [ ] 4 paneles con sus fotos (marcar 2 pendientes de fotografía)
- [ ] Progress bar CSS + fallback Motion
- [ ] `useReducedMotion` → layout vertical alternativo
- [ ] Test en mobile: en pantallas < 768px, la sección se convierte en carrusel táctil

### FASE 4: Sección Identidad (números)
- [ ] Rediseño con stagger vertical real
- [ ] Números con `-webkit-text-stroke` gold sobre bg-lino
- [ ] Eliminar el grid `justify-between`

### FASE 5: Colecciones + Sectores
- [ ] Grid asimétrico 12-col para colecciones
- [ ] Sectores → 2×2 grid con hover reveal + `mix-blend-mode: difference` en título

### FASE 6: Páginas internas
- [ ] `/catalogo` — CategoryNav sticky, ProductGrid (sin cambios estructurales)
- [ ] `/catalogo/[id]` — ProductDetail (ya implementado, adaptar paleta)
- [ ] `/fabricacion`, `/sectores`, `/contacto` — adaptar tokens de color

### FASE 7: Polish final
- [ ] Buscador en catálogo
- [ ] View Transitions entre páginas
- [ ] `prefers-reduced-motion` en todos los componentes animados
- [ ] Audit de contraste final con lista de comprobación

---

## 6. NOTA SOBRE FOTOGRAFÍA

La calidad de la web depende en un 60% de la fotografía disponible. El inventario actual:

| Archivo | Calidad | Uso recomendado |
|---|---|---|
| `hero.png` | ★★★★ | Hero principal |
| `workshop.jpg` | ★★★★ | Scrollytelling Panel 2 |
| `soluciones-mimbre.jpg` | ★★★ | Scrollytelling Panel 4 |
| `cuevanos-home.jpg` | ★★★ | Colecciones o sectores |
| `christmas-hamper.jpg` | ★★★ | Cestas navideñas section |
| `logistica.png` | ★★ | Sección valores |
| `lote-navidad.png`, `supermercados.png`, etc. | ★★ | Grid sectores |

**Fotografías con alta prioridad de conseguir:**
1. Materia prima — mimbre sin tratar, haces de fibra
2. Manos trabajando — close-up del proceso artesanal
3. Detalle de tejido — macro de la textura

Hasta disponer de ellas, los paneles 1 y 3 del Scrollytelling usarán `bg-bark` con tipografía editorial como placeholder, que es más honesto que una foto de stock genérica.

---

*Plan listo para revisión. No se escribe código hasta confirmación.*

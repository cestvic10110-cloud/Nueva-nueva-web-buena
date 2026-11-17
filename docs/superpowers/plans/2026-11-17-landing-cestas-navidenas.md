# Landing cestas navideñas al por mayor — plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Página estática `/cestas-navidenas-al-por-mayor` que posicione para "cestas navideñas al por mayor" y lleve a pedir presupuesto, enlazada desde el resto de la web.

**Architecture:** Ruta App Router estática (`app/cestas-navidenas-al-por-mayor/page.tsx`, componente de servidor) que reutiliza el kit de UI de `globals.css` (`.btn`, `.eyebrow`, `.headline`, `.lede`, `.card`, `.on-dark`), `ProductCard` sin `onSelect` (navega a la ficha), `getByCategory`, `CATEGORY_MAP`, `COMPANY` y `SITE_URL`. La FAQ es un componente cliente, con todas las respuestas en el HTML.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind 4, motion. No hay suite de tests: se verifica con `tsc`, `eslint`, `curl` sobre el HTML del servidor de desarrollo y el navegador.

**Spec:** `docs/superpowers/specs/2026-11-17-landing-cestas-navidenas-design.md`

## Global Constraints
- Solo envase vacío, nunca lotes preparados. Solo por cantidades, nunca unidades sueltas ni muestras.
- Ninguna cifra de pedido mínimo, plazo ni precio: siempre "consúltenos".
- Solo hechos que ya están en la web: taller en Valencia/Aielo de Malferit desde 1969, stock permanente, "Stock garantizado desde septiembre", "Entrega escalonada en lotes", "Precios escalonados por volumen", personalización según volumen, distribución a toda España.
- Host canónico `SITE_URL` (`https://www.cesteriavicent.es`) en canonical y JSON-LD; JSON-LD serializado con `safeJsonLd`.
- Trato de usted y español de España.

## Review Focus
1. **Navegación sin JS:** las tarjetas de producto y de categoría deben ser `<a href>` reales en el HTML. Se comprueba con curl en la Task 1.
2. **Respuestas de la FAQ ocultas a los buscadores:** las 6 respuestas tienen que estar en el HTML aunque estén plegadas. Se comprueba con curl en la Task 1.
3. **Barra de navegación sobre la portada oscura:** la ruta no está en `isLightHeroRoute`, así que la barra es transparente sobre la foto. Se comprueba visualmente en la Task 2.
4. **Contradicción con el modelo de negocio:** ningún texto puede decir "lote preparado", "desde una unidad" o "muestra". Se comprueba con grep en la Task 1.
5. **Imágenes con espacios o tildes en la ruta:** usar `encodeImagePath` en `next/image`. Se comprueba con las peticiones de imagen sin 404 en la Task 2.

---

### Task 1: Página de la landing

**Files:**
- Create: `app/cestas-navidenas-al-por-mayor/page.tsx`
- Create: `components/navidad/NavidadFaq.tsx`

**Interfaces:**
- Consumes: `getByCategory('cestas-navidenas')`, `ProductCard` (sin `onSelect`), `CATEGORY_MAP`, `COMPANY`, `SITE_URL`, `encodeImagePath`, `safeJsonLd`, `ScrollReveal`, `Check` de `components/home/TrustTicker`.
- Produces: la ruta `/cestas-navidenas-al-por-mayor` y la constante `NAVIDAD_LANDING_PATH = '/cestas-navidenas-al-por-mayor'`, exportada desde `lib/constants.ts` para los enlaces de la Task 2.

- [ ] **Step 1:** Añadir `NAVIDAD_LANDING_PATH` a `lib/constants.ts`.
- [ ] **Step 2:** Crear `NavidadFaq` (cliente). Mismo patrón que `FaqOperativo`: respuestas siempre montadas, con altura 0 cuando están cerradas. Recibe `faqs: {q: string; a: string}[]`.
- [ ] **Step 3:** Crear la página con `metadata`:
  - title: `Cestas Navideñas de Mimbre al por Mayor para Lotes`
  - description: envase vacío, empresas, Valencia, 1969
  - canonical: `NAVIDAD_LANDING_PATH`

  Secciones en este orden: portada oscura, campaña (4 puntos), 9 cestas, más envases (bandejas, baúles, estuches, embalajes, madera), para quién, FAQ (6 preguntas del spec) y cierre. JSON-LD: BreadcrumbList, ItemList (9 URLs de ficha) y FAQPage.
- [ ] **Step 4:** Verificar con el servidor de desarrollo:
  - `curl -s localhost:3000/cestas-navidenas-al-por-mayor` da 200.
  - Contiene `<link rel="canonical" href="https://www.cesteriavicent.es/cestas-navidenas-al-por-mayor"`.
  - Hay 9 `href="/catalogo/<id>"` únicos de cestas navideñas.
  - Hay 5 `href="/catalogo?categoria=` de envases.
  - Cada una de las 6 respuestas aparece 2 veces (página + JSON-LD).
  - `grep -ci "lote preparado\|una unidad\|muestra"` sobre el HTML devuelve 0, salvo la negación explícita de la FAQ.
- [ ] **Step 5:** `npx tsc --noEmit` sale con código 0. Commit.

### Task 2: Enlaces hacia la landing, sitemap y llms.txt

**Files:**
- Modify: `components/catalog/CatalogHeader.tsx` (franja cuando `meta?.slug === 'cestas-navidenas'`)
- Modify: `components/home/B2BSectors.tsx` (la tarjeta `navidad` enlaza a `NAVIDAD_LANDING_PATH`)
- Modify: `components/sectores/SectoresList.tsx` (sección navidad: botón extra hacia la landing)
- Modify: `components/layout/Footer.tsx` ("Lotes de Navidad B2B" enlaza a la landing)
- Modify: `app/sitemap.ts` (entrada de la landing con `SITE_UPDATED`)
- Modify: `public/llms.txt` (línea en "Catálogo" o "Sectores")

**Interfaces:**
- Consumes: `NAVIDAD_LANDING_PATH` (Task 1).

- [ ] **Step 1:** Aplicar los 6 cambios.
- [ ] **Step 2:** Verificar:
  - `curl` de `/catalogo?categoria=cestas-navidenas`, `/`, `/sectores` y del pie contiene `href="/cestas-navidenas-al-por-mayor"`.
  - El sitemap la incluye.
  - Comprobar en el navegador, en escritorio y móvil: la portada y la barra se ven bien, no hay scroll horizontal ni imágenes con 404.
- [ ] **Step 3:** `tsc` + `eslint` de los archivos tocados + `next build` (con el servidor de desarrollo parado). Commit y push de la rama `landing-navidad`.

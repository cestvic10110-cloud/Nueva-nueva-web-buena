# Landing: cestas navideñas al por mayor — diseño

## Por qué
La auditoría SEO (17-11-2026) señaló "cestas de mimbre para lotes de Navidad al por mayor" como la mayor oportunidad. Hoy solo la cubre `/catalogo?categoria=cestas-navidenas`, que es una rejilla de 9 productos con una frase de texto, un título genérico y una URL de filtro dinámica. Los fabricantes que posicionan para esa búsqueda explican claramente sus condiciones de compra.

## Objetivo
Una página que posicione para las búsquedas de cestas navideñas al por mayor y convierta compradores profesionales en peticiones de presupuesto.

- **Para quién:** montadores de lotes, supermercados y distribución, tiendas gourmet, y empresas que preparan sus propios lotes.
- **No es para:** particulares ni departamentos de RR. HH. que buscan un lote ya preparado.

## Reglas de negocio (del dueño)
- Se vende **solo el envase vacío, nunca lotes preparados**.
- Venta **solo por cantidades**: nunca unidades sueltas ni muestras.
- **No se publican cifras.** Pedido mínimo y plazos siempre como "consúltenos".
- Además de cestas, que se vean **los demás envases decorativos**.

## Enfoques considerados
- **A. Página estática propia en una URL limpia** (elegido, con el enlace de C): es la más fuerte para posicionar.
- **B. Ampliar la categoría del catálogo:** URL de filtro dinámica, más débil. Descartado.
- **C. A más una franja en la categoría del catálogo** que lleve a la página nueva: es lo que se construye.

## Diseño
**URL:** `/cestas-navidenas-al-por-mayor`. Es estática, con canonical propio, y entra en el sitemap y en `llms.txt`.

**Metadatos:**
- Título: "Cestas Navideñas de Mimbre al por Mayor para Lotes | Cestería Vicent".
- Meta: menciona el envase vacío, la venta a empresas, Valencia y "desde 1969".

**Secciones** (mismo estilo que el inicio: kit de UI, fondo crema/papel y portada oscura con foto):
1. **Portada oscura** con foto navideña.
   - Rótulo: "Campaña de Navidad · Venta al por mayor".
   - H1: "Cestas de mimbre para lotes de Navidad al por mayor".
   - Entradilla: cesta vacía para que usted prepare sus lotes; solo a empresas, por cantidades; taller en Valencia desde 1969.
   - Botones: "Solicitar presupuesto" (lleva a `/contacto`) y "Consultar por WhatsApp" (con un mensaje de campaña ya escrito).
2. **Cómo trabajamos la campaña:** 4 puntos.
   - Envase vacío, usted lo llena.
   - Por cantidades: pedido mínimo según referencia, consúltenos.
   - Reserve con antelación: plazos según volumen, consúltenos.
   - Personalización según volumen.

   Además, una línea con lo que ya dice la web: stock permanente, entregas programadas y distribución a toda España.
3. **Nuestras cestas navideñas:** las 9 referencias de la categoría, como tarjetas que enlazan a su ficha. Enlace a la categoría completa.
4. **Más envases para sus lotes:** bandejas, baúles, estuches, embalajes y madera, como tarjetas con foto que enlazan a cada categoría.
5. **Para quién trabajamos:** montadores de lotes, supermercados y distribución, tiendas gourmet, y empresas que preparan sus lotes.
6. **Preguntas frecuentes** con todas las respuestas en el HTML:
   - ¿Venden la cesta con producto? No, solo vacía.
   - Pedido mínimo: consúltenos.
   - ¿Cuándo pedir? Con antelación; consúltenos.
   - ¿Personalizan? Según volumen.
   - ¿Venden a particulares? No.
   - ¿Envían a toda España? Sí.
7. **Cierre:** llamada a pedir presupuesto, teléfono y horario.

**Enlaces hacia la página:**
- Franja en `/catalogo?categoria=cestas-navidenas`.
- Tarjeta "Lotes de Navidad" del inicio.
- Sección Navidad de `/sectores`.
- Enlace "Lotes de Navidad B2B" del pie.

**Datos estructurados:** BreadcrumbList, ItemList con las 9 cestas y FAQPage.

## Fuera de alcance
- Cifras de pedido mínimo, precios y fechas límite.
- Lotes preparados.
- Fotos nuevas: se usan las que ya hay en `public/`.

## A criterio de quien lo construya
- La foto de la portada, a elegir entre las navideñas que ya existen.
- Los textos exactos, siempre dentro de los hechos de este documento y de la web.
- El detalle visual, que debe seguir el inicio.

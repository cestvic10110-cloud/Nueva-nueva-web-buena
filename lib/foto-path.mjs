/**
 * Fotos preparadas: cada foto de public/ tiene sus versiones webp en public/fotos/,
 * generadas por scripts/preparar-fotos.mjs. Así Vercel no procesa imágenes.
 */

/** Anchos generados. next.config.ts usa los mismos: si cambian, hay que regenerar. */
export const IMAGE_SIZES = [64, 128, 256, 384]
export const DEVICE_SIZES = [640, 828, 1200, 1920]
export const WIDTHS = [...IMAGE_SIZES, ...DEVICE_SIZES]

/**
 * '/Cestas Navideñas/2012.png' → '/fotos/cestas-navidenas/2012-png'
 * @param {string} src ruta pública sin codificar
 * @returns {string}
 */
export function fotoBase(src) {
  const slug = src
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9/]+/g, '-')
  return `/fotos${slug}`
}

/**
 * @param {string} src ruta pública, codificada o no
 * @param {number} width uno de WIDTHS
 * @returns {string}
 */
export function fotoUrl(src, width) {
  return `${fotoBase(decodeURIComponent(src))}-${width}.webp`
}

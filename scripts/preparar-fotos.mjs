/**
 * Genera en public/fotos/ las versiones webp de cada foto de public/.
 * Solo rehace lo que falta o ha cambiado (scripts/fotos-manifest.json).
 * Se ejecuta solo antes de `npm run dev` y `npm run build`; a mano: `npm run fotos`.
 */
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { WIDTHS, fotoBase } from '../lib/foto-path.mjs'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const PUBLIC = path.join(ROOT, 'public')
const MANIFEST = path.join(ROOT, 'scripts', 'fotos-manifest.json')
// Pequeñas (tarjetas, móvil): ligeras. Grandes (portada, ficha): más detalle.
const qualityFor = (width) => (width >= 1200 ? 85 : width >= 828 ? 80 : 75)
const SETTINGS = WIDTHS.map((width) => `${width}q${qualityFor(width)}`).join('.')

/** Fotos dentro de las carpetas de public/ (los iconos de la raíz no se tocan). */
function listPhotos(dir, rel = '') {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const relPath = `${rel}/${entry.name}`
    if (entry.isDirectory()) return relPath === '/fotos' ? [] : listPhotos(path.join(dir, entry.name), relPath)
    return rel && /\.(jpe?g|png|webp)$/i.test(entry.name) ? [relPath] : []
  })
}

const previous = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, 'utf8')) : {}
const manifest = {}
const owner = new Map()
let done = 0

for (const photo of listPhotos(PUBLIC).sort()) {
  const base = fotoBase(photo)
  if (owner.has(base)) throw new Error(`"${photo}" y "${owner.get(base)}" darían el mismo archivo: cambie un nombre`)
  owner.set(base, photo)

  const source = readFileSync(path.join(PUBLIC, photo))
  const hash = `${createHash('sha1').update(source).digest('hex').slice(0, 16)}-${SETTINGS}`
  manifest[base] = hash

  const outputs = WIDTHS.map((width) => ({ width, file: path.join(PUBLIC, `${base}-${width}.webp`) }))
  if (previous[base] === hash && outputs.every(({ file }) => existsSync(file))) continue

  mkdirSync(path.dirname(outputs[0].file), { recursive: true })
  for (const { width, file } of outputs) {
    await sharp(source, { limitInputPixels: false })
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: qualityFor(width) })
      .toFile(file)
  }
  done++
}

// Versiones de fotos que ya no existen
for (const base of Object.keys(previous)) {
  if (manifest[base]) continue
  for (const width of WIDTHS) rmSync(path.join(PUBLIC, `${base}-${width}.webp`), { force: true })
}

writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`)
console.log(`Fotos preparadas: ${done} nuevas o cambiadas, ${Object.keys(manifest).length} en total`)

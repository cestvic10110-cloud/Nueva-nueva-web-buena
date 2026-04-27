/**
 * VERCEL DEPLOYMENT FIX:
 * We cannot use 'fs.readFileSync' on public assets during runtime/build in Vercel
 * because it triggers the bundling of the entire 'public' folder into the 
 * Server Function, exceeding the 300MB limit.
 */

// import { readFileSync } from 'fs'
// import { join } from 'path'

/*
function readDimensions(publicPath: string): { w: number; h: number } | null {
  try {
    const abs = join(process.cwd(), 'public', publicPath)
    const buf = readFileSync(abs)

    // PNG: magic [137,80,78,71], width at offset 16, height at offset 20
    if (buf[0] === 137 && buf[1] === 80 && buf[2] === 78 && buf[3] === 71) {
      return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) }
    }

    // JPEG: scan SOF0 (0xC0) or SOF2 (0xC2) marker
    if (buf[0] === 0xff && buf[1] === 0xd8) {
      let i = 2
      while (i + 4 < buf.length) {
        if (buf[i] !== 0xff) break
        const marker = buf[i + 1]
        if (marker === 0xc0 || marker === 0xc2) {
          return { w: buf.readUInt16BE(i + 7), h: buf.readUInt16BE(i + 5) }
        }
        const segLen = buf.readUInt16BE(i + 2)
        i += 2 + segLen
      }
    }

    return null
  } catch {
    return null
  }
}
*/

/**
 * Returns true if the image should be treated as portrait (tall).
 * Manual list to avoid massive bundle sizes in Vercel.
 */
export function isPortrait(publicPath: string): boolean {
  // Add IDs or paths here that are known to be vertical
  const manualPortraits = [
    'LL50', '8500', '8503'
  ]
  
  return manualPortraits.some(id => publicPath.includes(id))
}

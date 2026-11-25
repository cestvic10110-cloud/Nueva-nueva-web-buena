'use client'

import { fotoUrl } from './foto-path.mjs'

/** Loader de next/image: sirve las versiones ya preparadas de public/fotos/. */
export default function imageLoader({ src, width }: { src: string; width: number }): string {
  return fotoUrl(src, width)
}

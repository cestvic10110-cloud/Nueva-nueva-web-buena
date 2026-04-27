'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { encodeImagePath } from '@/lib/utils'
import './ChromaGrid.css'

export interface ChromaItem {
  id:          string
  name:        string
  category:    string
  slug:        string
  image:       string
  borderColor: string
  gradient:    string
}

interface Props {
  items:    ChromaItem[]
  columns?: number
}

export function ChromaGrid({ items, columns = 3 }: Props) {
  const gridRef = useRef<HTMLDivElement>(null)

  function handleGridMove(e: React.MouseEvent<HTMLDivElement>) {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>('.chroma-card')
    cards?.forEach((card) => {
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    })
  }

  function handleGridLeave() {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>('.chroma-card')
    cards?.forEach((card) => {
      card.style.setProperty('--mouse-x', '-9999px')
      card.style.setProperty('--mouse-y', '-9999px')
    })
  }

  return (
    <div
      ref={gridRef}
      className="chroma-grid"
      style={{ '--cols': columns } as React.CSSProperties}
      onMouseMove={handleGridMove}
      onMouseLeave={handleGridLeave}
    >
      {items.map((item) => (
        <Link
          key={item.id}
          href={`/catalogo?categoria=${item.slug}`}
          className="chroma-card"
          style={{
            '--card-border':   item.borderColor,
            '--card-gradient': item.gradient,
          } as React.CSSProperties}
        >
          <div className="chroma-img-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={encodeImagePath(item.image)}
              alt={item.name}
              loading="lazy"
              className="chroma-img"
            />
          </div>
          <footer className="chroma-info">
            <span className="chroma-category">{item.category}</span>
            <h3 className="chroma-name">{item.name}</h3>
            <span className="chroma-ref">Ref. {item.id}</span>
          </footer>
        </Link>
      ))}
    </div>
  )
}

export default ChromaGrid

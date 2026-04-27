'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, useTransition, useEffect } from 'react'

export function CatalogSearch() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const [isPending, startTransition] = useTransition()
  
  const [query, setQuery] = useState(searchParams.get('q')?.toString() || '')

  // Sync state with URL
  useEffect(() => {
    setQuery(searchParams.get('q')?.toString() || '')
  }, [searchParams])

  function handleSearch(term: string) {
    setQuery(term)
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('q', term)
    } else {
      params.delete('q')
    }
    
    startTransition(() => {
      replace(`${pathname}?${params.toString()}`, { scroll: false })
    })
  }

  return (
    <div className="relative group w-full max-w-sm">
      <div className="relative">
        {/* Lupa icon */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center pointer-events-none transition-colors duration-300">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={query ? 'text-gold' : 'text-cream/32 group-focus-within:text-gold'}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder=""
          className="w-full bg-transparent font-body text-cream/80 placeholder-cream/20
                     pl-8 pr-4 py-2 outline-none
                     border-b border-cream/10 focus:border-gold/60
                     transition-all duration-300 text-sm lg:text-base"
        />

        {/* Loading indicator */}
        {isPending && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="w-3 h-3 border-t-2 border-gold rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  )
}

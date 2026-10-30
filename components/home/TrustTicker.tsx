const ITEMS = [
  'Fabricación propia',
  'Valencia, España',
  'Desde 1969',
  'Venta al por mayor',
  'Exclusivo Empresas · B2B',
  'Fibras 100% sostenibles',
  'Stock permanente',
  'Mayoristas de mimbre',
  '+130 modelos en catálogo',
  'Envíos rápidos',
  'Control de calidad exhaustivo',
]

/** Ventajas y valores — lista estática con check, legible de un vistazo. */
export function TrustFacts() {
  return (
    <ul
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4"
      aria-label="Ventajas y valores de Cestería Vicent"
    >
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center gap-3 font-sans text-[0.9375rem] text-text-primary">
          <Check />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function Check({ className = 'text-gold-deep' }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`flex-shrink-0 ${className}`}>
      <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2" />
      <path d="M5 8.2l2 2 4-4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

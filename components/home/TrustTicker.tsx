const ITEMS = [
  'Fabricación propia',
  'Valencia',
  'Desde 1969',
  'Empresa española',
  'Fibras 100% sostenibles',
  'Stock permanente',
  'Envío 24–48h',
  'Venta al por mayor B2B',
  '108+ modelos en catálogo',
  'Personalización con tu marca',
  'Control de calidad exhaustivo',
]

export function TrustTicker() {
  return (
    <div
      className="bg-bark border-y border-border-dark py-4 overflow-hidden"
      aria-label="Ventajas y valores de Cestería Vicent"
    >
      {/* Duplicate items for seamless CSS loop */}
      <div className="marquee-track" aria-hidden="true">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <span className="font-sans text-xs text-cream/60 tracking-widest uppercase px-6 whitespace-nowrap">
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>

      {/* Accessible static version for screen readers */}
      <ul className="sr-only">
        {ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function Dot() {
  return (
    <span
      className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0"
      aria-hidden="true"
    />
  )
}

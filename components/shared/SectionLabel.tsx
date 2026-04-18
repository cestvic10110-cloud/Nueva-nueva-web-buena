import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'text-label',
        light ? 'text-gold' : 'text-gold',
        'flex items-center gap-3 mb-6',
        className
      )}
    >
      <span className={cn('block h-px w-8 flex-shrink-0', light ? 'bg-gold' : 'bg-gold')} />
      {children}
    </p>
  )
}

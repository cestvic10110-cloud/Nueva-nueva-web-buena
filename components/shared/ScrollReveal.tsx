import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  variant?: 'up' | 'fade'
  delay?: number
  as?: React.ElementType
}

/**
 * Zero-JS scroll reveal via CSS animation-timeline: view().
 * Framer Motion is NOT used here — this runs off the main thread.
 */
export function ScrollReveal({
  children,
  className,
  variant = 'up',
  delay,
  as: Tag = 'div',
}: ScrollRevealProps) {
  return (
    <Tag
      className={cn(
        variant === 'up' ? 'scroll-reveal' : 'scroll-reveal-fade',
        className
      )}
      style={delay !== undefined ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

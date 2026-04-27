import Link from 'next/link'
import { cn } from '@/lib/utils'

interface GoldButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline' | 'ghost'
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function GoldButton({
  children,
  href,
  onClick,
  className,
  size = 'md',
  variant = 'solid',
  type = 'button',
  disabled,
}: GoldButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center font-sans font-medium tracking-wide',
    'transition-all duration-300 squircle select-none',
    'focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2',
    size === 'sm' && 'text-xs px-4 py-2 gap-1.5',
    size === 'md' && 'text-sm px-6 py-3 gap-2',
    size === 'lg' && 'text-base px-8 py-4 gap-2.5',
    variant === 'solid' && [
      'bg-gold text-ink',
      'hover:bg-gold-light',
      'active:scale-[0.97]',
    ],
    variant === 'outline' && [
      'border border-gold text-gold bg-transparent',
      'hover:bg-gold hover:text-ink',
      'active:scale-[0.97]',
    ],
    variant === 'ghost' && [
      'text-cream/70 bg-transparent',
      'hover:text-cream',
    ],
    disabled && 'opacity-40 pointer-events-none',
    className
  )

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  )
}

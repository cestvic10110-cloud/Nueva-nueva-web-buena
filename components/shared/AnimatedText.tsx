'use client'

import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  /** Split by 'word' (default) or 'char' */
  splitBy?: 'word' | 'char'
}

/**
 * Split-text entrance animation — Framer Motion only, reserved for hero.
 * For section reveals, use ScrollReveal (CSS-native).
 */
export function AnimatedText({
  text,
  className,
  delay = 0,
  splitBy = 'word',
}: AnimatedTextProps) {
  const reduced = useReducedMotion()
  const units = splitBy === 'word' ? text.split(' ') : text.split('')
  const gap = splitBy === 'word' ? '0.28em' : '0'

  if (reduced) {
    return <span className={className}>{text}</span>
  }

  return (
    <span aria-label={text} className={cn('inline', className)}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.07,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: 'inline-block', marginRight: gap }}
        >
          {unit}
        </motion.span>
      ))}
    </span>
  )
}

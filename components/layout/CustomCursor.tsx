'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const springConfig = { stiffness: 400, damping: 35, mass: 0.6 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const expand = () => cursorRef.current?.classList.add('expanded')
    const shrink = () => cursorRef.current?.classList.remove('expanded')

    window.addEventListener('mousemove', move)

    const interactives = document.querySelectorAll('a, button, [data-cursor-expand]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', expand)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [x, y])

  return (
    <motion.div
      ref={cursorRef}
      className="custom-cursor"
      style={{ left: springX, top: springY }}
      aria-hidden="true"
    />
  )
}

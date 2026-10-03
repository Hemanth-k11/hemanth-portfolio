import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const ArrowAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.arrow-item', {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out',
        delay: 2.5,
      })
      gsap.to('.arrow-bounce', {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: 'power1.inOut',
        delay: 3.5,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 arrow-bounce"
    >
      <span className="arrow-item text-muted-foreground text-xs uppercase tracking-widest mb-2">
        Scroll
      </span>
      {[0, 1, 2].map((i) => (
        <svg
          key={i}
          className="arrow-item"
          style={{ opacity: 1 - i * 0.25 }}
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L8 8L15 1"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  )
}

export default ArrowAnimation

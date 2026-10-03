import React, { useEffect, useRef } from 'react'

const ScrollProgressIndicator: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!barRef.current) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      barRef.current.style.width = `${progress}%`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[100] bg-transparent">
      <div ref={barRef} className="h-full bg-primary transition-all duration-100" style={{ width: '0%' }} />
    </div>
  )
}

export default ScrollProgressIndicator

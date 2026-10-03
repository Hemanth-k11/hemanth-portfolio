import React from 'react'
import { GENERAL_INFO } from '@/lib/data'

const StickyEmail: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-[-50px] z-[3] rotate-90 hidden md:block">
      <a
        href={`mailto:${GENERAL_INFO.email}`}
        className="text-sm text-muted-foreground hover:text-foreground tracking-widest transition-colors"
      >
        {GENERAL_INFO.email}
      </a>
    </div>
  )
}

export default StickyEmail

import React from 'react'
import { MapPin, Phone } from 'lucide-react'
import { GENERAL_INFO } from '@/lib/data'

const Footer: React.FC = () => {
  return (
    <footer className="text-center pb-5" id="contact">
      <div className="container">
        <p className="text-lg">Have a project in mind?</p>
        <a
          href={`mailto:${GENERAL_INFO.email}`}
          className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
        >
          {GENERAL_INFO.email}
        </a>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-muted-foreground">
          <a href={GENERAL_INFO.phoneLink} className="flex items-center gap-2 hover:text-white">
            <Phone size={18} /> {GENERAL_INFO.phone}
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={18} /> {GENERAL_INFO.location}
          </span>
        </div>

        <p className="mt-8 text-muted-foreground">Design adapted for {GENERAL_INFO.name}</p>
      </div>
    </footer>
  )
}

export default Footer

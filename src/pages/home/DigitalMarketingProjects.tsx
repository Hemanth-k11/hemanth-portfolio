import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import SectionTitle from '@/components/SectionTitle'
import MarketingProjectCard from '@/components/MarketingProjectCard'
import { MARKETING_PROJECTS } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const DigitalMarketingProjects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'top 80%',
          toggleActions: 'restart none none reverse',
          scrub: 1,
        },
      })
      tl.from(containerRef.current, { y: 150, opacity: 0 })
    },
    { scope: containerRef },
  )

  return (
    <section className="pb-section">
      <div className="container">
        <SectionTitle title="Digital Marketing Analytics" />

        <div className="group/projects relative" ref={containerRef}>
          <div className="flex flex-col max-md:gap-10">
            <div>
              <h3 className="text-2xl font-anton mb-8 text-blue-500">Campaign Performance</h3>
              <div className="flex flex-col max-md:gap-10">
                {MARKETING_PROJECTS.map((project, index) => (
                  <MarketingProjectCard index={index} project={project} key={project.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalMarketingProjects

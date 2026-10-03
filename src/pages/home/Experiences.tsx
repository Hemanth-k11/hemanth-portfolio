import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { EDUCATION, MY_FULL_TIME_EXPERIENCE, MY_INTERNSHIPS } from '@/lib/data'
import SectionTitle from '@/components/SectionTitle'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Experiences: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 50%',
          toggleActions: 'restart none none reverse',
          scrub: 1,
        },
      })
      tl.from('.experience-item', { y: 50, opacity: 0, stagger: 0.3 })
    },
    { scope: containerRef },
  )

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'bottom 50%',
          end: 'bottom 20%',
          scrub: 1,
        },
      })
      tl.to(containerRef.current, { y: -150, opacity: 0 })
    },
    { scope: containerRef },
  )

  return (
    <section className="py-section" id="my-experience">
      <div className="container" ref={containerRef}>
        <SectionTitle title="My Experience" />

        <div className="grid gap-14">
          {MY_FULL_TIME_EXPERIENCE.map((item) => (
            <div key={item.title} className="experience-item">
              <p className="text-xl text-muted-foreground">{item.company}</p>
              <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">{item.title}</p>
              <p className="text-lg text-muted-foreground">{item.duration}</p>
              <ul className="mt-5 max-w-[760px] space-y-2 text-muted-foreground">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {MY_INTERNSHIPS.map((item) => (
            <div key={item.title} className="experience-item">
              <p className="text-xl text-muted-foreground">{item.company}</p>
              <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">{item.title}</p>
              <p className="text-lg text-muted-foreground">{item.duration}</p>
              <ul className="mt-5 max-w-[760px] space-y-2 text-muted-foreground">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <SectionTitle title="Education" />
          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((item) => (
              <div key={item.degree} className="experience-item border-t pt-6">
                <p className="text-xl text-muted-foreground">{item.institution}</p>
                <p className="text-4xl font-anton leading-none mt-3.5 mb-2.5">{item.degree}</p>
                <p className="text-lg text-muted-foreground">{item.duration}</p>
                <p className="mt-4 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { GENERAL_INFO } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const AboutMe: React.FC = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'about-me-in',
          trigger: container.current,
          start: 'top 70%',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      })
      tl.from('.slide-up-and-fade', { y: 150, opacity: 0, stagger: 0.05 })
    },
    { scope: container },
  )

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'about-me-out',
          trigger: container.current,
          start: 'bottom 50%',
          end: 'bottom 10%',
          scrub: 0.5,
        },
      })
      tl.to('.slide-up-and-fade', { y: -150, opacity: 0, stagger: 0.02 })
    },
    { scope: container },
  )

  return (
    <section className="pb-section" id="about-me">
      <div className="container" ref={container}>
        <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
          Web Developer, SEO Executive & Digital Marketing Specialist leveraging technical engineering to drive
          organic and paid growth.
        </h2>

        <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">This is me.</p>

        <div className="grid md:grid-cols-12 mt-9">
          <div className="md:col-span-5">
            <p className="text-5xl slide-up-and-fade">Hi, I&apos;m {GENERAL_INFO.name}.</p>
          </div>
          <div className="md:col-span-7">
            <div className="text-lg text-muted-foreground max-w-[450px]">
              <p className="slide-up-and-fade">
                Web Developer, SEO Executive & Digital Marketing Specialist with 2+ years of comprehensive experience leveraging technical 
engineering to drive organic and paid growth. Expert in building responsive, high-converting front-end interfaces using ReactJS, 
WordPress, and Tailwind CSS, backed by full-stack infrastructure management across cPanel/WHM, AWS cloud environments, and 
the ResellerClub API. Data-driven strategist specialized in advanced technical SEO, executing deep competitor research, site audits 
via Semrush, and end-to-end on-page/off-page optimization. Proven capability in managing advertising budgets and maximizing ROI 
across Google Ads and Meta Ads to scale traffic and conversions for both national and international campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

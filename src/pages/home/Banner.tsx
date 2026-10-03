import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { GENERAL_INFO, ROLE_TITLES } from '@/lib/data'
import Button from '@/components/Button'
import ArrowAnimation from '@/components/ArrowAnimation'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Banner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'bottom 70%',
          end: 'bottom 10%',
          scrub: 1,
        },
      })
      tl.fromTo('.slide-up-and-fade', { y: 0 }, { y: -150, opacity: 0, stagger: 0.02 })
    },
    { scope: containerRef },
  )

  return (
    <section className="relative overflow-hidden" id="banner">
      <ArrowAnimation />
      <div
        className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
        ref={containerRef}
      >
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
          <h1 className="banner-title slide-up-and-fade leading-none text-5xl sm:text-[72px] font-anton">
            <span className="block text-primary">I&apos;M A</span>
            <span className="role-title-window mt-4 block overflow-hidden">
              <span className="role-title-track block">
                {[...ROLE_TITLES, ROLE_TITLES[0]].map((role, index) => (
                  <span
                    className="role-title-item max-w-[760px]"
                    key={`${role}-${index}`}
                  >
                    {role}
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
            Hi! I&apos;m{' '}
            <span className="font-medium text-foreground">{GENERAL_INFO.name}</span>. I work as a
            Front-End Developer, Digital Marketing Executive, and SEO Specialist with 2 years of
            experience in ReactJS, WordPress, cPanel/WHM, SEO, paid campaigns, analytics, and
            hosting operations.
          </p>
          <Button
            as="link"
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(GENERAL_INFO.emailSubject)}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`}
            variant="primary"
            className="mt-9 banner-button slide-up-and-fade"
          >
            Let&apos;s Talk
          </Button>

          <div className="flex items-center gap-2 mt-3">
            <span className="size-3 rounded-full bg-white" />
            <span className="text-sm text-muted-foreground">
              Open for freelance and full-time opportunities
            </span>
          </div>
        </div>

        <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
          {[
            { value: '2+', label: 'Years of Experience' },
            { value: '10+', label: 'Web & Marketing Projects' },
            { value: '24/7', label: 'Hosting & SEO Mindset' },
          ].map(({ value, label }) => (
            <div className="slide-up-and-fade" key={label}>
              <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">{value}</h5>
              <p className="text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Banner

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { PROJECTS } from '@/lib/data'
import SectionTitle from '@/components/SectionTitle'
import Project from './Project'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const ProjectList: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const reactProjects = PROJECTS.filter((p) => p.category === 'frontend' && p.techStack.includes('React.js'))
  const wordPressProjects = PROJECTS.filter((p) => p.category === 'frontend' && p.techStack.includes('WordPress'))
  const marketingProjects = PROJECTS.filter((p) => p.category === 'marketing')
  const infrastructureProjects = PROJECTS.filter((p) => p.category === 'infrastructure')

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
    <section className="pb-section" id="selected-projects">
      <div className="container">
        <SectionTitle title="SELECTED PROJECTS" />

        <div className="group/projects relative" ref={containerRef}>
          <div className="flex flex-col max-md:gap-10">
            {/* React Projects Section */}
            {reactProjects.length > 0 && (
              <div>
                <h3 className="text-2xl font-anton mb-8 text-lime-400">React Development</h3>
                <div className="flex flex-col max-md:gap-10">
                  {reactProjects.map((project, index) => (
                    <Project index={index} project={project} key={project.slug} />
                  ))}
                </div>
              </div>
            )}

            {/* WordPress Projects Section */}
            {wordPressProjects.length > 0 && (
              <div className="mt-16 pt-16 border-t">
                <h3 className="text-2xl font-anton mb-8 text-cyan-400">WordPress Projects</h3>
                <div className="flex flex-col max-md:gap-10">
                  {wordPressProjects.map((project, index) => (
                    <Project index={reactProjects.length + index} project={project} key={project.slug} />
                  ))}
                </div>
              </div>
            )}

            {/* Digital Marketing Projects Section */}
            {marketingProjects.length > 0 && (
              <div className="mt-16 pt-16 border-t">
                <h3 className="text-2xl font-anton mb-8 text-blue-500">Digital Marketing</h3>
                <div className="flex flex-col max-md:gap-10">
                  {marketingProjects.map((project, index) => (
                    <Project index={reactProjects.length + wordPressProjects.length + index} project={project} key={project.slug} />
                  ))}
                </div>
              </div>
            )}

            {/* Infrastructure & Migration Projects Section */}
            {infrastructureProjects.length > 0 && (
              <div className="mt-16 pt-16 border-t">
                <h3 className="text-2xl font-anton mb-8 text-purple-500">Infrastructure & Migration</h3>
                <div className="flex flex-col max-md:gap-10">
                  {infrastructureProjects.map((project, index) => (
                    <Project index={reactProjects.length + wordPressProjects.length + marketingProjects.length + index} project={project} key={project.slug} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectList

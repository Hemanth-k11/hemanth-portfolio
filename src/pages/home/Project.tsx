import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { IProject } from '@/lib/data'

interface Props {
  index: number
  project: IProject
}

gsap.registerPlugin(useGSAP)

const Project: React.FC<Props> = ({ index, project }) => {
  const externalLinkSVGRef = useRef<SVGSVGElement>(null)

  const { context, contextSafe } = useGSAP(() => {}, {
    scope: externalLinkSVGRef,
    revertOnUpdate: true,
  })

  const handleMouseEnter = contextSafe?.(() => {
    const arrowLine = externalLinkSVGRef.current?.querySelector('#arrow-line') as SVGPathElement
    const arrowCurb = externalLinkSVGRef.current?.querySelector('#arrow-curb') as SVGPathElement
    const box = externalLinkSVGRef.current?.querySelector('#box') as SVGPathElement

    gsap.set(box, {
      opacity: 0,
      strokeDasharray: box?.getTotalLength(),
      strokeDashoffset: box?.getTotalLength(),
    })
    gsap.set(arrowLine, {
      opacity: 0,
      strokeDasharray: arrowLine?.getTotalLength(),
      strokeDashoffset: arrowLine?.getTotalLength(),
    })
    gsap.set(arrowCurb, {
      opacity: 0,
      strokeDasharray: arrowCurb?.getTotalLength(),
      strokeDashoffset: arrowCurb?.getTotalLength(),
    })

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
    tl.to(externalLinkSVGRef.current, { autoAlpha: 1 })
      .to(box, { opacity: 1, strokeDashoffset: 0 })
      .to(arrowLine, { opacity: 1, strokeDashoffset: 0 }, '<0.2')
      .to(arrowCurb, { opacity: 1, strokeDashoffset: 0 })
      .to(externalLinkSVGRef.current, { autoAlpha: 0 }, '+=1')
  })

  const handleMouseLeave = contextSafe?.(() => {
    context.kill()
  })

  const projectUrl = project.liveUrl

  const isReact = project.techStack.includes('React.js')
  const isWordPress = project.techStack.includes('WordPress')
  const isFrontend = project.category === 'frontend'
  const isMarketing = project.category === 'marketing'

  const isReactProject = isFrontend && isReact
  const isWordPressProject = isFrontend && isWordPress

  return (
    <a
      href={projectUrl || undefined}
      target={projectUrl ? '_blank' : undefined}
      rel={projectUrl ? 'noreferrer noopener' : undefined}
      aria-disabled={!projectUrl}
      className={`project-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 transition-all ${
        isReactProject ? 'md:hover:bg-lime-500/5' : isWordPressProject ? 'md:hover:bg-cyan-500/5' : isMarketing ? 'md:hover:bg-blue-500/5' : ''
      } ${isReactProject ? 'rounded-lg border-l-4 border-l-lime-400' : isWordPressProject ? 'rounded-lg border-l-4 border-l-cyan-400' : isMarketing ? 'rounded-lg border-l-4 border-l-blue-500' : ''}`}
      onMouseEnter={handleMouseEnter as any}
      onMouseLeave={handleMouseLeave as any}
    >
      <div className="flex gap-2 md:gap-5">
        <div className={`font-anton ${isReactProject ? 'text-lime-400' : isWordPressProject ? 'text-cyan-400' : isMarketing ? 'text-blue-500' : 'text-muted-foreground'}`}>
          _{(index + 1).toString().padStart(2, '0')}.
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className={`text-4xl xs:text-5xl flex gap-4 font-anton transition-all duration-700 ${
              isReactProject
                ? 'bg-gradient-to-r from-lime-400 to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left'
                : isWordPressProject
                  ? 'bg-gradient-to-r from-cyan-400 to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left'
                  : isMarketing
                    ? 'bg-gradient-to-r from-blue-500 to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left'
                    : 'text-foreground'
            }`}>
              {project.title}
              <span className="text-foreground opacity-0 group-hover:opacity-100 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  ref={externalLinkSVGRef}
                >
                  <path id="box" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <path id="arrow-line" d="M10 14 21 3" />
                  <path id="arrow-curb" d="M15 3h6v6" />
                </svg>
              </span>
            </h4>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
              isReactProject
                ? 'bg-lime-400/20 text-lime-400'
                : isWordPressProject
                  ? 'bg-cyan-400/20 text-cyan-400'
                  : isMarketing
                    ? 'bg-blue-500/20 text-blue-500'
                    : 'bg-gray-200 text-gray-700'
            }`}>
              {isReactProject ? 'React' : isWordPressProject ? 'WordPress' : isMarketing ? 'Marketing' : 'Project'}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-3 text-muted-foreground text-xs">
            {project.techStack.slice(0, 3).map((tech, idx, stackArr) => (
              <div className="gap-3 flex items-center" key={tech}>
                <span>{tech}</span>
                {idx !== stackArr.length - 1 && (
                  <span className="inline-block size-2 rounded-full bg-background-light" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}

export default Project

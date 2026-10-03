import React from 'react'
import { IProject } from '@/lib/data'

interface Props {
  project: IProject
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <a
      href={project.liveUrl || undefined}
      target={project.liveUrl ? '_blank' : undefined}
      rel={project.liveUrl ? 'noreferrer noopener' : undefined}
      aria-disabled={!project.liveUrl}
      className="group border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-500 transition-all"
    >
      <div className="mb-4">
        <h4 className="text-xl font-bold text-foreground group-hover:text-blue-500 transition-colors">
          {project.title}
        </h4>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {project.description.replace(/<br\/?>/g, ' ').substring(0, 120)}...
      </p>

      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-600 mb-2">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 text-xs text-gray-600 font-semibold">
        Year: {project.year}
      </div>
    </a>
  )
}

export default ProjectCard

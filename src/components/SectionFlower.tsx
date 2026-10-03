import React from 'react'
import { cn } from '@/lib/utils'

interface Props {
  width?: number
  className?: string
}

const SectionFlower: React.FC<Props> = ({ width = 25, className }) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-primary', className)}
      fill="currentColor"
    >
      <path d="M50 0 C50 0, 55 20, 50 50 C45 20, 50 0, 50 0Z" />
      <path d="M100 50 C100 50, 80 55, 50 50 C80 45, 100 50, 100 50Z" />
      <path d="M50 100 C50 100, 45 80, 50 50 C55 80, 50 100, 50 100Z" />
      <path d="M0 50 C0 50, 20 45, 50 50 C20 55, 0 50, 0 50Z" />
      <path d="M85.36 14.64 C85.36 14.64, 71 29, 50 50 C65 29, 85.36 14.64, 85.36 14.64Z" />
      <path d="M85.36 85.36 C85.36 85.36, 71 71, 50 50 C71 65, 85.36 85.36, 85.36 85.36Z" />
      <path d="M14.64 85.36 C14.64 85.36, 29 71, 50 50 C35 71, 14.64 85.36, 14.64 85.36Z" />
      <path d="M14.64 14.64 C14.64 14.64, 29 29, 50 50 C29 35, 14.64 14.64, 14.64 14.64Z" />
      <circle cx="50" cy="50" r="6" />
    </svg>
  )
}

export default SectionFlower

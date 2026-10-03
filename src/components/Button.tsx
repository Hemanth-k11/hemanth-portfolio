import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark' | 'link' | 'no-color'

const SpinnerChild = ({ icon }: { icon?: boolean }) => (
  <span className="flex items-center justify-center gap-3">
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    {!icon && 'Processing...'}
  </span>
)

type ButtonAsLink = {
  as: 'link'
  href: string
  target?: string
  rel?: string
} & Omit<LinkProps, 'to'>

type ButtonAsButton = {
  as?: 'button'
} & ButtonHTMLAttributes<HTMLButtonElement>

type Props = {
  loading?: boolean
  icon?: boolean
  children: ReactNode | ReactNode[]
  className?: string
  variant?: Variant
} & (ButtonAsLink | ButtonAsButton)

const Button: React.FC<Props> = ({
  loading,
  variant = 'primary',
  className,
  children,
  as = 'button',
  icon = false,
  ...rest
}) => {
  const variantClasses: Record<Variant, string> = {
    primary: 'bg-primary text-primary-foreground hover:text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    success: 'bg-green-500 text-white hover:bg-green-600',
    warning: 'bg-orange-500 text-white hover:bg-orange-600',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    info: 'bg-blue-500 text-white hover:bg-blue-600',
    light: 'bg-muted text-foreground',
    dark: 'bg-foreground text-background',
    link: 'text-foreground hover:text-primary',
    'no-color': '',
  }

  const buttonClasses = cn(
    'group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden',
    variantClasses[variant],
    className,
  )

  if (as === 'link') {
    const { href, target, rel, ...linkRest } = rest as ButtonAsLink

    if (target === '_blank') {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={buttonClasses}
          {...(linkRest as any)}
        >
          {variant !== 'link' && (
            <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150" />
          )}
          <span className="z-[1]">{loading ? <SpinnerChild icon={icon} /> : children}</span>
        </a>
      )
    }

    return (
      <Link to={href} className={buttonClasses} {...(linkRest as any)}>
        {variant !== 'link' && (
          <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150" />
        )}
        <span className="z-[1]">{loading ? <SpinnerChild icon={icon} /> : children}</span>
      </Link>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button className={buttonClasses} {...buttonRest}>
      {variant !== 'link' && (
        <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150" />
      )}
      <span className="z-[1]">{loading ? <SpinnerChild icon={icon} /> : children}</span>
    </button>
  )
}

export default Button

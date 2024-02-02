import { Children } from '@/types/children'
import Link, { type LinkProps } from 'next/link'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  minimal?: boolean
  icon?: JSX.Element
  className?: string
  as?:
    | {
        type: 'button'
        props?: React.ButtonHTMLAttributes<HTMLButtonElement> | undefined
      }
    | {
        type: 'link'
        props: LinkProps
      }
} & Children

export const buttonSizesMap = {
  sm: 'h-[1.875rem] text-xs',
  md: 'h-10 text-sm px-md py-xxs',
  lg: 'h-[3.125rem] text-md px-xl py-xxs'
}

export const Button = ({
  children,
  size = 'md',
  fullWidth = false,
  minimal = false,
  icon,
  as = { type: 'button' },
  className
}: ButtonProps) => {
  const hasIcon = !!icon
  const withIconClasses = 'inline-flex items-center justify-center'
  const minimalClasses = 'bg-none text-primary hover:text-primary-dark'

  const classes = `inline-flex items-center justify-center cursor-pointer
    text-white rounded p-xxs [&>svg]:w-4
    ${buttonSizesMap[size]}
    ${fullWidth ? 'w-full' : ''}
    ${hasIcon ? withIconClasses : ''}
    ${
      minimal
        ? minimalClasses
        : 'bg-gradient-to-t from-[#ff5f5f] via-[#f062c0] to-[#f062c0] hover:bg-gradient-to-t hover:from-[#e35565] hover:via-[#d958a6] hover:to-[#d958a6]'
    }
  `

  if (as?.type === 'link')
    return (
      <Link {...as.props} className={twMerge(classes, className)}>
        {hasIcon && icon}
        {!!children && (
          <span className={hasIcon ? 'ml-xxs' : ''}>{children}</span>
        )}
      </Link>
    )

  return (
    <button {...as.props} className={twMerge(classes, className)}>
      {hasIcon && icon}
      {!!children && (
        <span className={hasIcon ? 'ml-xxs' : ''}>{children}</span>
      )}
    </button>
  )
}

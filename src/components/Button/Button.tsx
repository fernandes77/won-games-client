import type { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  icon?: JSX.Element
} & ButtonHTMLAttributes<HTMLButtonElement>

export const buttonSizesMap = {
  sm: 'h-[1.875rem] text-xs',
  md: 'h-10 text-sm px-md py-xxs',
  lg: 'h-[3.125rem] text-md px-xl py-xxs'
}

export const Button = ({
  children,
  size = 'md',
  fullWidth = false,
  icon,
  className,
  ...props
}: ButtonProps) => {
  const hasIcon = !!icon
  const withIconClasses = 'inline-flex items-center justify-center'

  const classes = `${buttonSizesMap[size]}
  ${fullWidth ? 'w-full' : ''}
  ${hasIcon ? withIconClasses : ''}
  bg-gradient-to-t from-[#ff5f5f] via-[#f062c0] to-[#f062c0] text-white rounded p-xxs [&>svg]:w-4`

  return (
    <button className={twMerge(classes, className)} {...props}>
      {hasIcon && icon}
      <span className={hasIcon ? 'ml-xxs' : ''}>{children}</span>
    </button>
  )
}

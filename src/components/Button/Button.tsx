import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  icon?: JSX.Element
  className?: string
  as?:
    | {
        type: 'button'
        props?: React.ButtonHTMLAttributes<HTMLButtonElement>
      }
    | {
        type: 'a'
        props?: React.AnchorHTMLAttributes<HTMLAnchorElement>
      }
}

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
  as = { type: 'button' },
  className
}: ButtonProps) => {
  const hasIcon = !!icon
  const withIconClasses = 'inline-flex items-center justify-center'

  const classes = `${buttonSizesMap[size]}
  ${fullWidth ? 'w-full' : ''}
  ${hasIcon ? withIconClasses : ''}
  inline-flex items-center justify-center cursor-pointer
  bg-gradient-to-t from-[#ff5f5f] via-[#f062c0] to-[#f062c0] text-white rounded p-xxs [&>svg]:w-4
  hover:bg-gradient-to-t hover:from-[#e35565] hover:via-[#d958a6] hover:to-[#d958a6]
  `

  if (as?.type === 'a')
    return (
      <a {...as.props} className={twMerge(classes, className)}>
        {hasIcon && icon}
        <span className={hasIcon ? 'ml-xxs' : ''}>{children}</span>
      </a>
    )

  return (
    <button {...as.props} className={twMerge(classes, className)}>
      {hasIcon && icon}
      <span className={hasIcon ? 'ml-xxs' : ''}>{children}</span>
    </button>
  )
}

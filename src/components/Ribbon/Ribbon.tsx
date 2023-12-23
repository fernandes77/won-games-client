import { twMerge } from 'tailwind-merge'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'md' | 'sm'

type RibbonProps = {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
  size?: 'md' | 'sm'
  className?: string
}

export const ribbonSizeMap = {
  md: 'text-sm h-9 px-sm right-[-20px] before:top-9 before:border-t-[10px] before:border-r-[20px]',
  sm: 'text-xs h-[1.625rem] px-xs right-[-15px] before:top-[26px] before:border-t-[7px] before:border-r-[15px]'
}

export const Ribbon = ({
  children,
  color = 'primary',
  size = 'md',
  className
}: RibbonProps) => (
  <div
    className={twMerge(
      `bg-${color} ${ribbonSizeMap[size]} before:border-t-${color}-dark before:border-l-${color}-dark
      absolute top-xs flex items-center font-bold text-white
      before:absolute before:right-0 before:border-solid before:border-l-0
      before:border-r-transparent before:border-b-transparent before:border-b-[0.625rem]
      `,
      className
    )}
  >
    {children}
  </div>
)

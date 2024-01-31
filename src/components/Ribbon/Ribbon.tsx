import { Children } from '@/types/children'
import { twMerge } from 'tailwind-merge'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'md' | 'sm'

type RibbonProps = {
  color?: 'primary' | 'secondary'
  size?: 'md' | 'sm'
  className?: string
} & Children

export const ribbonSizeMap = {
  md: 'text-sm h-9 px-sm right-[-20px] before:top-9 before:border-t-[10px] before:border-r-[20px]',
  sm: 'text-xs h-[1.625rem] px-xs right-[-15px] before:top-[26px] before:border-t-[7px] before:border-r-[15px]'
}
const colorMap = {
  primary:
    'bg-primary before:border-t-primary-dark before:border-l-primary-dark',
  secondary:
    'bg-secondary before:border-t-secondary-dark before:border-l-secondary-dark'
}

export const Ribbon = ({
  children,
  color = 'primary',
  size = 'md',
  className
}: RibbonProps) => (
  <div
    className={twMerge(
      `${ribbonSizeMap[size]} ${colorMap[color]}
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

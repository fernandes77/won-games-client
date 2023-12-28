import { Children } from '@/types/children'
import { twMerge } from 'tailwind-merge'

type LineColors = 'primary' | 'secondary'

type HeadingProps = {
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors
  size?: 'sm' | 'md'
  className?: string
} & Children

export const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'md',
  className
}: HeadingProps) => {
  const headingSizeClassesMap = {
    sm: 'text-md',
    md: 'text-xl md:text-xxl'
  }
  const headingLineLeftClasses = `pl-2 border-l-[7px] border-${lineColor}`
  const lineLeftStyle = lineLeft ? headingLineLeftClasses : ''
  const lineBottomSizeClassesMap = { sm: 'w-7', md: 'w-14' }

  return (
    <div className={twMerge('relative', className)}>
      <h2
        className={`${lineLeftStyle} ${headingSizeClassesMap[size]} text-${color} font-bold mb-md`}
      >
        {children}
      </h2>

      {lineBottom && (
        <div
          data-testid="heading-line-bottom"
          className={`absolute left-0 bottom-[-5px] border-b-[5px]
          border-${lineColor} ${lineBottomSizeClassesMap[size]}`}
        />
      )}
    </div>
  )
}

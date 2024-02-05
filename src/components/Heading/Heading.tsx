import { Children } from '@/types/children'
import { ClassName } from '@/types/class-name'
import { cn } from '@/utils/merge-classnames'

type LineColors = 'primary' | 'secondary'

type HeadingProps = {
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors
  size?: 'sm' | 'md' | 'hg'
} & Children &
  ClassName

const colorMap = {
  black: 'text-black',
  white: 'text-white'
}

const lineColorMap = {
  primary: 'border-primary',
  secondary: 'border-secondary'
}

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
    md: 'text-xl min-md:text-xxl',
    hg: 'text-hg'
  }
  const headingLineLeftClasses = `pl-2 border-l-[7px] ${lineColorMap[lineColor]}`
  const lineLeftStyle = lineLeft ? headingLineLeftClasses : ''
  const lineBottomSizeClassesMap = { sm: 'w-7', md: 'w-14', hg: 'w-14' }

  return (
    <div className={cn('relative', className)}>
      <h2
        className={`${lineLeftStyle} ${headingSizeClassesMap[size]} ${colorMap[color]} font-bold mb-md`}
      >
        {children}
      </h2>

      {lineBottom && (
        <div
          data-testid="heading-line-bottom"
          className={`absolute left-0 bottom-[-5px] border-b-[5px]
          ${lineColorMap[lineColor]} ${lineBottomSizeClassesMap[size]}`}
        />
      )}
    </div>
  )
}

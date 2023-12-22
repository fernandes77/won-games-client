import { twMerge } from 'tailwind-merge'

type LineColors = 'primary' | 'secondary'

type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors
  size?: 'sm' | 'md'
  className?: string
}

export const headingLineLeftClasses = 'pl-2 border-l-8'
export const headingLineBottomClasses =
  "relative mb-md after:absolute after:left-0 after:bottom-[-0.5rem] after:content-[''] after:w-14 after:border-b-[5px]"
export const headingSizeClassesMap = {
  sm: 'text-md after:w-7',
  md: 'text-xl md:text-xxl'
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
  const lineLeftStyle = lineLeft ? headingLineLeftClasses : ''
  const lineBottomStyle = lineBottom ? headingLineBottomClasses : ''
  const lineColorStyle = `border-${lineColor} after:border-${lineColor}`

  return (
    <h2
      className={twMerge(
        `${lineLeftStyle} ${lineBottomStyle} ${lineColorStyle} ${headingSizeClassesMap[size]} text-${color} font-bold`,
        className
      )}
    >
      {children}
    </h2>
  )
}

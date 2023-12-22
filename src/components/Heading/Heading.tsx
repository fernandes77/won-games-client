type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
}

export const lineLeftClasses = 'pl-2 border-l-8 border-secondary'
export const lineBottomClasses =
  "relative mb-md after:absolute after:left-0 after:bottom-[-0.5rem] after:content-[''] after:w-14 after:border-b-[5px] after:border-primary"

export const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => {
  const lineLeftStyle = lineLeft ? lineLeftClasses : ''
  const lineBottomStyle = lineBottom ? lineBottomClasses : ''

  return (
    <h2
      className={`${lineLeftStyle} ${lineBottomStyle} text-${color} text-xl md:text-xxl font-bold`}
    >
      {children}
    </h2>
  )
}

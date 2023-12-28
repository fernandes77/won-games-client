import { Button } from '@/components/Button/Button'

type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  floatImage?: string
  alignment?: 'right' | 'left'
  buttonLabel: string
  buttonLink: string
}

export const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  alignment = 'right',
  buttonLabel,
  buttonLink
}: HighlightProps) => {
  const alignmentMap = {
    left: 'grid-areas-[content_floatimage] grid-cols-[2fr_1.3fr]',
    right: 'grid-areas-[floatimage_content] grid-cols-[1.3fr_2fr]'
  }
  const justifyFloatImageMap = { left: 'justify-self-end', right: '' }

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={`relative grid ${alignmentMap[alignment]} h-56 bg-center bg-cover grid-cols-[1.3fr_2fr] md:h-80
    after:absolute after:w-full after:h-full after:bg-[rgba(0, 0, 0, 0.6)]
    `}
    >
      {!!floatImage && (
        <img
          className={`${justifyFloatImageMap[alignment]} grid-in-[floatimage]
          z-base max-h-56 max-w-full self-end md:max-h-80`}
          src={floatImage}
          alt={title}
        />
      )}
      <div
        className={`z-base p-xs grid-in-[content] md:self-end md:p-lg text-${alignment}`}
      >
        <h2 className="text-lg font-bold text-white md:text-xxl">{title}</h2>
        <h3 className="text-sm font-light text-white mb-md md:text-lg">
          {subtitle}
        </h3>
        <Button as={{ type: 'link', props: { href: buttonLink } }}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  )
}

import { Button } from '@/components/Button/Button'
import {
  Ribbon,
  type RibbonColors,
  type RibbonSizes
} from '@/components/Ribbon/Ribbon'
import { minLg, minMd } from '@/utils/tailwind/breakpoints'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

export const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'md'
}: BannerProps) => {
  const ribbonSpacingMap = {
    md: 'min-lg:right-[-20px]',
    sm: 'min-lg:right-[-14px]'
  }

  return (
    <div className="banner relative min-md:shadow-[0_4px_5px_0_rgba(0,0,0,0.2)]">
      {!!ribbon && (
        <Ribbon
          className={`${ribbonSpacingMap[ribbonSize]}
            ${minLg('flex [&::before]:block')} [&::before]:hidden
          `}
          color={ribbonColor}
          size={ribbonSize}
        >
          {ribbon}
        </Ribbon>
      )}

      <div
        className={`w-full h-56 bg-gray-light bg-center bg-cover min-md:h-[36rem]`}
        role="img"
        aria-label={title}
        style={{ backgroundImage: `url(${img})` }}
      />

      <div
        className={`w-full bg-[rgba(0, 0, 0, 0.7)] p-sm
          ${minMd('rounded-b p-lg absolute bottom-0 left-0')}
        `}
      >
        <h2 className="text-lg font-bold text-white min-md:text-xxl">
          {title}
        </h2>
        <h3
          className="text-white text-sm mb-xs min-md:text-lg [&_strong]:text-primary [&_strong]:font-bold"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
        <Button as={{ type: 'link', props: { href: buttonLink } }} size="lg">
          {buttonLabel}
        </Button>
      </div>
    </div>
  )
}

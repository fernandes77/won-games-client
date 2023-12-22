import { Button } from '@/components/Button/Button'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

export const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: BannerProps) => (
  <div className="relative md:shadow-[0_4px_5px_0_rgba(0,0,0,0.2)]">
    <div
      className={`w-full h-56 bg-gray-light bg-center bg-cover md:h-[36rem]`}
      role="img"
      aria-label={title}
      style={{ backgroundImage: `url(${img})` }}
    />

    <div className="w-full bg-[rgba(0, 0, 0, 0.7)] p-sm md:rounded-b md:p-lg md:absolute md:bottom-0 md:left-0">
      <h2 className="text-lg text-bold text-white md:text-xxl">{title}</h2>
      <h3
        className="text-white text-sm mb-xs md:text-lg [&_strong]:text-primary [&_strong]:text-bold"
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
      <Button as={{ type: 'link', props: { href: buttonLink } }} size="lg">
        {buttonLabel}
      </Button>
    </div>
  </div>
)

'use client'

import { Banner, BannerProps } from '@/components/Banner/Banner'
import { Slider, SliderSettings } from '@/components/Slider/Slider'
import './BannerSlider.css'

type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

export const BannerSlider = ({ items }: BannerSliderProps) => (
  <section>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </section>
)

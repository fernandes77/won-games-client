'use client'

import { GameCard, GameCardProps } from '@/components/GameCard/GameCard'
import { Slider, SliderArrow, SliderSettings } from '@/components/Slider/Slider'
import { ClassName } from '@/types/class-name'
import { cn } from '@/utils/merge-classnames'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import './GameCardSlider.css'

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: (
    <SliderArrow>
      <IconArrowRight aria-label="next games" />
    </SliderArrow>
  ),
  prevArrow: (
    <SliderArrow>
      <IconArrowLeft aria-label="previous games" />
    </SliderArrow>
  )
}

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
} & ClassName

export const GameCardSlider = ({
  items,
  color = 'white',
  className
}: GameCardSliderProps) => (
  <section color={color} className={cn('game-card-slider', className)}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </section>
)

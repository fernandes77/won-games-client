'use client'

import { GameCard, GameCardProps } from '@/components/GameCard/GameCard'
import { Slider, SliderSettings } from '@/components/Slider/Slider'
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
  nextArrow: <IconArrowRight aria-label="next games" />,
  prevArrow: <IconArrowLeft aria-label="previous games" />
}

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

export const GameCardSlider = ({
  items,
  color = 'white'
}: GameCardSliderProps) => (
  <section color={color} className="game-card-slider">
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </section>
)

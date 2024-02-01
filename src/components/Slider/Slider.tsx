'use client'

import { Children } from '@/types/children'
import SlickSlider, { CustomArrowProps, Settings } from 'react-slick'
import './Slider.css'

export type SliderSettings = Settings

type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

// Needed workaround for https://github.com/akiran/react-slick/issues/623#issuecomment-629764816
export const SliderArrow = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: CustomArrowProps & Children) => <div {...props}>{children}</div>

export const Slider = ({ children, settings }: SliderProps) => (
  <section>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </section>
)

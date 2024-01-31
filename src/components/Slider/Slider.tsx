'use client'

import SlickSlider, { Settings } from 'react-slick'
import './Slider.css'

export type SliderSettings = Settings

type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

export const Slider = ({ children, settings }: SliderProps) => (
  <section>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </section>
)

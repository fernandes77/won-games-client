'use client'

import { Children } from '@/types/children'
import { forwardRef } from 'react'
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

const _Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => (
  <section>
    <SlickSlider ref={ref} {...settings}>
      {children}
    </SlickSlider>
  </section>
)

export const Slider = forwardRef(_Slider)

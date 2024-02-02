'use client'

import { Slider, SliderSettings } from '@/components/Slider/Slider'
import { IconArrowLeft, IconArrowRight, IconX } from '@tabler/icons-react'
import { useEffect, useRef, useState } from 'react'
import SlickSlider from 'react-slick'
import './Gallery.css'

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <IconArrowRight aria-label="next image" />,
  prevArrow: <IconArrowLeft aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

export const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <div className="gallery">
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>

      <div
        aria-label="modal"
        aria-hidden={!isOpen}
        className={`${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        fixed w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center
        z-modal transistion-[opacity_0.1s_ease-in-out]`}
      >
        <div
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
          className="text-white absolute top-0 right-0 cursor-pointer w-full h-full text-right"
        >
          <IconX size={40} />
        </div>

        <div className="max-w-[min(75rem,100%)] max-h-[50rem]">
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <img key={`gallery-${index}`} src={item.src} alt={item.label} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

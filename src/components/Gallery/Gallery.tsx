'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from '@/components/Carousel/Carousel'
import { IconX } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

export const Gallery = ({ items }: GalleryProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <div>
      <Carousel>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={`thumb-${index}`}
              className="min-huge:basis-[30%] max-huge:min-lg:basis-[45%] max-lg:basis-[60%]"
            >
              <img
                role="button"
                src={item.src}
                alt={`Thumb - ${item.label}`}
                onClick={() => {
                  setIsOpen(true)
                  api?.scrollTo(index)
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

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
          <Carousel setApi={setApi}>
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem key={`gallery-${index}`}>
                  <img src={item.src} alt={item.label} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

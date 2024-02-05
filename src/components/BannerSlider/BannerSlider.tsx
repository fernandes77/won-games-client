'use client'

import { Banner, BannerProps } from '@/components/Banner/Banner'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

type BannerSliderProps = {
  items: BannerProps[]
}

export const BannerSlider = ({ items }: BannerSliderProps) => (
  <section>
    <Carousel>
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem className="basis-full">
            <Banner
              className="max-w-[65rem] mx-auto"
              key={item.title}
              {...item}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="max-lg:hidden">
        <CarouselPrevious className="text-white left-6" />
        <CarouselNext className="text-white right-6" />
      </div>
    </Carousel>
  </section>
)
